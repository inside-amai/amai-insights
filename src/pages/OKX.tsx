import { useState, useEffect } from 'react';

const OKX = () => {
  const [status, setStatus] = useState('');
  const [statusClass, setStatusClass] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  // Supabase configuration - these should be replaced with actual values
  const SUPABASE_URL = "https://YOUR_SUPABASE_URL.supabase.co";
  const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

  useEffect(() => {
    // Load Supabase script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const setStatusMessage = (html: string, cls = '') => {
    setStatus(html);
    setStatusClass(cls);
  };

  const saveAddress = async ({ address, chain }: { address: string; chain: string }) => {
    // @ts-ignore - Supabase will be loaded via script
    const { createClient } = window.supabase;
    const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    const { data, error } = await db
      .from('okx_connections')
      .upsert(
        [{ address, chain, user_agent: navigator.userAgent, source: 'okx' }],
        { onConflict: 'address' }
      );
    if (error) throw error;
    return data;
  };

  const discoverOkxEvmProvider = async () => {
    let candidates: any[] = [];
    const handler = (e: any) => candidates.push(e.detail);
    window.addEventListener('eip6963:announceProvider', handler, { once: false });
    window.dispatchEvent(new Event('eip6963:requestProvider'));
    
    await new Promise(r => setTimeout(r, 60));
    
    const picked = candidates.find(p =>
      /okx/i.test(p?.info?.rdns || '') ||
      /okx/i.test(p?.info?.name || '') ||
      (p?.provider && p.provider.isOkxWallet === true)
    );
    
    return (
      picked?.provider ||
      // @ts-ignore
      (window.okxwallet && window.okxwallet.ethereum) ||
      // @ts-ignore
      (window.ethereum && Array.isArray(window.ethereum.providers) && window.ethereum.providers.find(p => p.isOkxWallet)) ||
      // @ts-ignore
      (window.ethereum && window.ethereum.isOkxWallet ? window.ethereum : null)
    );
  };

  const tryOkxSolana = async () => {
    // @ts-ignore
    const provider = window.okxwallet?.solana;
    if (!provider) return null;
    
    try {
      const resp = await provider.connect();
      const address = (resp?.publicKey?.toString?.()) || (provider.publicKey?.toString?.());
      if (!address) throw new Error('No Solana publicKey returned.');
      
      await saveAddress({ address, chain: 'solana' });
      setStatusMessage(`Connected (Solana): ${address}`, 'text-green-400');
      return { ok: true };
    } catch (err) {
      console.error('OKX Solana connect error:', err);
      return null;
    }
  };

  const tryOkxEvm = async () => {
    const provider = await discoverOkxEvmProvider();
    if (!provider) return null;
    
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const address = accounts?.[0];
      const chainId = await provider.request({ method: 'eth_chainId' }).catch(() => null);
      if (!address) throw new Error('No EVM account returned.');
      
      await saveAddress({ address, chain: chainId || 'evm' });
      setStatusMessage(`Connected (EVM): ${address}`, 'text-green-400');
      
      provider.on?.('accountsChanged', async (accs: string[]) => {
        if (accs?.[0]) {
          await saveAddress({ address: accs[0], chain: chainId || 'evm' });
          setStatusMessage(`Connected (EVM): ${accs[0]}`, 'text-green-400');
        }
      });
      
      return { ok: true };
    } catch (err) {
      console.error('OKX EVM connect error:', err);
      return null;
    }
  };

  const connectOkx = async () => {
    setIsConnecting(true);
    setStatusMessage('Connecting to OKX…');
    
    try {
      const s = await tryOkxSolana();
      if (s?.ok) return;

      const e = await tryOkxEvm();
      if (e?.ok) return;

      setStatusMessage(
        'OKX Wallet not detected. <a class="text-cyan-300 underline" target="_blank" rel="noreferrer" href="https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge">Install the OKX Wallet extension</a> and refresh.',
        'text-red-400'
      );
    } catch (err) {
      console.error(err);
      setStatusMessage('Connection canceled or failed.', 'text-red-400');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans">
      <main className="w-full max-w-4xl mx-auto text-center px-6 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide mb-4">
          AMAI x OKX
        </h1>
        <p className="text-gray-400 mb-7">
          connect your OKX wallet — addresses are logged for future giveaways
        </p>
        
        <button
          onClick={connectOkx}
          disabled={isConnecting}
          className="appearance-none border border-gray-700 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:border-gray-600 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
          aria-live="polite"
        >
          Connect OKX Wallet
        </button>
        
        <div 
          className={`mt-5 min-h-6 text-sm text-gray-400 ${statusClass}`}
          dangerouslySetInnerHTML={{ __html: status }}
        />

        <div className="mt-10 text-left bg-gray-950 border border-gray-800 rounded-xl p-4">
          <strong className="text-white">Supabase: run this once to create the table + RLS</strong>
          <pre className="overflow-auto whitespace-pre text-xs leading-relaxed mt-2 text-gray-300">
            <code>{`-- 1) Table to store connected addresses (insert-only from the browser)
create table if not exists public.okx_connections (
  id uuid primary key default gen_random_uuid(),
  address text not null,
  chain text,                     -- e.g. 'evm', '0x1', 'solana'
  source text default 'okx',      -- tag for source
  user_agent text,
  connected_at timestamptz default now(),
  constraint okx_connections_address_unique unique (address)
);

-- 2) Enable RLS and allow inserts from anon (no read/update/delete)
alter table public.okx_connections enable row level security;

drop policy if exists "insert-only anon for okx" on public.okx_connections;
create policy "insert-only anon for okx"
  on public.okx_connections
  for insert
  to anon
  with check (true);

-- (Optional) prevent selecting from anon (default when no select policy exists)`}</code>
          </pre>
        </div>

        <p className="mt-9 text-xs text-gray-500">
          Trouble detecting OKX?{' '}
          <a 
            className="text-cyan-300 no-underline border-b border-dotted border-cyan-300" 
            target="_blank" 
            rel="noreferrer" 
            href="https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge"
          >
            Install the OKX Wallet extension
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default OKX;