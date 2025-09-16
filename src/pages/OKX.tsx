import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import amaiXLogo from '@/assets/amai-x-logo.png';

const OKX = () => {
  const [status, setStatus] = useState('');
  const [statusClass, setStatusClass] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; x: number; y: number; delay: number; direction: { x: number; y: number; angle: number } }>>([]);

  // Shooting stars effect (from ExplainerHero)
  useEffect(() => {
    const createShootingStar = () => {
      const id = Date.now();
      const x = Math.random() * 60 + 10;
      const y = Math.random() * 40 + 10;
      const delay = Math.random() * 1000;
      
      const angle = Math.random() * 360;
      const distance = 120;
      const directionX = Math.cos(angle * Math.PI / 180) * distance;
      const directionY = Math.sin(angle * Math.PI / 180) * distance;
      const trailAngle = angle + 180;
      
      const direction = { x: directionX, y: directionY, angle: trailAngle };
      const newStar = { id, x, y, delay, direction };
      setShootingStars(prev => [...prev, newStar]);
      
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== id));
      }, 2500 + delay);
    };
    
    const firstTimeout = setTimeout(createShootingStar, 5000);
    const interval = setInterval(createShootingStar, 7000);
    
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  const setStatusMessage = (html: string, cls = '') => {
    setStatus(html);
    setStatusClass(cls);
  };

  const saveAddress = async ({ address, chain }: { address: string; chain: string }) => {
    const { data, error } = await supabase
      .from('okx_connections')
      .upsert([{ address, chain }], { 
        onConflict: 'address',
        ignoreDuplicates: false 
      });
    
    if (error) throw error;
    return data;
  };

  const discoverOkxEvmProvider = async () => {
    console.log('🔍 Starting OKX EVM provider discovery...');
    let candidates: any[] = [];
    const handler = (e: any) => {
      console.log('📢 EIP6963 provider announced:', e.detail);
      candidates.push(e.detail);
    };
    window.addEventListener('eip6963:announceProvider', handler, { once: false });
    window.dispatchEvent(new Event('eip6963:requestProvider'));
    
    await new Promise(r => setTimeout(r, 60));
    
    console.log('📦 All candidates found:', candidates);
    
    const picked = candidates.find(p =>
      /okx/i.test(p?.info?.rdns || '') ||
      /okx/i.test(p?.info?.name || '') ||
      (p?.provider && p.provider.isOkxWallet === true)
    );
    
    console.log('🎯 Picked candidate:', picked);
    
    const provider = (
      picked?.provider ||
      // @ts-ignore
      (window.okxwallet && window.okxwallet.ethereum) ||
      // @ts-ignore
      (window.ethereum && Array.isArray(window.ethereum.providers) && window.ethereum.providers.find(p => p.isOkxWallet)) ||
      // @ts-ignore
      (window.ethereum && window.ethereum.isOkxWallet ? window.ethereum : null)
    );
    
    console.log('🏆 Final EVM provider:', provider);
    return provider;
  };

  const tryOkxSolana = async () => {
    console.log('🌞 Trying OKX Solana...');
    // @ts-ignore
    const provider = window.okxwallet?.solana;
    console.log('🌞 Solana provider found:', provider);
    if (!provider) return null;
    
    try {
      const resp = await provider.connect();
      const address = (resp?.publicKey?.toString?.()) || (provider.publicKey?.toString?.());
      if (!address) throw new Error('No Solana publicKey returned.');
      
      console.log('✅ Solana connected:', address);
      await saveAddress({ address, chain: 'solana' });
      setStatusMessage(`Connected (Solana): ${address}`, 'text-green-400');
      return { ok: true };
    } catch (err) {
      console.error('❌ OKX Solana connect error:', err);
      return null;
    }
  };

  const tryOkxEvm = async () => {
    console.log('⚡ Trying OKX EVM...');
    const provider = await discoverOkxEvmProvider();
    console.log('⚡ EVM provider found:', provider);
    if (!provider) return null;
    
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const address = accounts?.[0];
      const chainId = await provider.request({ method: 'eth_chainId' }).catch(() => null);
      if (!address) throw new Error('No EVM account returned.');
      
      console.log('✅ EVM connected:', address, 'chain:', chainId);
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
      console.error('❌ OKX EVM connect error:', err);
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Star Background (from ExplainerHero) */}
      <div className="absolute inset-0">
        {/* Large moving stars */}
        <div className="absolute top-20 left-20 w-2 h-2 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-32 right-32 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s', transform: 'translateY(-10px)', animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute bottom-40 left-40 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 8s linear infinite' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute top-10 left-1/2 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 7s ease-in-out infinite' }} />
        <div className="absolute bottom-10 left-1/3 w-3 h-3" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 5s ease-in-out infinite reverse' }} />
        
        {/* Medium moving stars */}
        <div className="absolute top-60 left-60 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 4s ease-in-out infinite' }} />
        <div className="absolute top-96 right-60 w-1.5 h-1.5 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.5s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-60 left-80 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 10s linear infinite reverse' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 6s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 7s ease-in-out infinite' }} />
        
        {/* Small moving stars */}
        <div className="absolute top-40 left-96 w-1 h-1 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s' }} />
        <div className="absolute top-80 right-96 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 3s ease-in-out infinite' }} />
        <div className="absolute bottom-80 left-20 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 12s linear infinite' }} />
        <div className="absolute bottom-96 right-40 w-1 h-1 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '2.5s' }} />
        <div className="absolute top-1/4 left-1/4 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 8s ease-in-out infinite' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 4.5s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-16 right-16 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 5s ease-in-out infinite' }} />
        <div className="absolute bottom-16 left-16 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 9s linear infinite reverse' }} />
        
        {/* Shooting stars */}
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="shooting-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}ms`,
              '--end-x': `${star.direction.x}px`,
              '--end-y': `${star.direction.y}px`,
              '--trail-angle': `${star.direction.angle}deg`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center font-sans pt-20">
        <div className="w-full max-w-4xl mx-auto text-center px-6 py-12">
          <div className="mb-4 flex justify-center">
            <img 
              src={amaiXLogo} 
              alt="AMAI x OKX" 
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
          </div>
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
        </div>
      </main>

      {/* Footer */}
      <Footer transparent={true} />
    </div>
  );
};

export default OKX;