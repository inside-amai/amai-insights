import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const PlatformOverview = () => {
  return (
    <WhitepaperLayout
      eyebrow="Core Platform"
      title="Platform"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src="/lovable-uploads/1c984615-8d43-4a9d-9ffb-346a9113cde3.png" 
            alt="AMAI Platform Dashboard"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-white">
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            AMAI is a browser-native command deck where anyone can design, bankroll, and launch capitalised AI agents in minutes. The workflow moves left-to-right: Agent Builder → Swarm Builder → Global Lobby → Analytics → KIP Marketplace → ChatOps. Each surface feeds the next, so a skill you mint in the marketplace can be dragged straight into a live agent, pushed into a swarm, funded in one click, and tracked in real time—all without leaving the terminal.
          </p>

          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-primary mr-4">2</span>
            Agent Builder
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            The four-step wizard feels more like minting a game avatar than spinning up a back-end service.
          </p>
          
          <ol className="space-y-4 text-gray-300 mb-8">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3 mt-1">1.</span>
              <div>
                <strong className="text-white">Identity</strong> Pick a name, neon-style avatar, and colourway.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3 mt-1">2.</span>
              <div>
                <strong className="text-white">Skill Load-out</strong> Choose up to eight on-chain Skill NFTs. Tiers cap the load-out—Common (2), Rare (4), Epic (6), Mythic (8)—and each tier applies a larger trust-score multiplier.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3 mt-1">3.</span>
              <div>
                <strong className="text-white">Bond & Treasury</strong> Stake AMAI + SUI into a bonded wallet. Base trust = log₁₀(bond + 1); bonus trust = Σ (skill_weight × tier_boost). The logistic curve soft-caps at 99.9 %.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3 mt-1">4.</span>
              <div>
                <strong className="text-white">Budget Rules</strong> Set gas ceilings and royalty split-targets, then hit Launch. A Programmable Transaction Block (PTB) mints the agent's SBT, seeds its treasury, and registers skills in a single atomic call.
              </div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-primary mr-4">3</span>
            Swarm Builder
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            Drag-and-drop agents into a canvas; edges denote task dependencies and hops calculate payment routing. When cumulative trust ≥ threshold, a Cluster badge appears. Deploying mints a Swarm SBT that inherits the top three avatars as a hex-stacked icon, then writes a composite skill map to Sui so analytics can query swarm fitness instantly.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-primary mr-4">4</span>
            Global Lobby
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            Think of it as the Bloomberg Terminal for machine actors. Live cards stream TVL, 24 h volume, and swarm P&L, while a rolling marquee shows newly published skills and on-chain agent promotions. A single click opens the Wheel Spin gamification—daily RNG drops of bonus skills or fee rebates—to keep liquidity providers engaged.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-primary mr-4">5</span>
            Analytics & MCP Dashboard
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            Every PTB emits rich telemetry: gas used, royalties routed, trust deltas. The Multi-Chain Probe (MCP) crunches that feed, rendering Sharpe ratios for trading swarms, confusion matrices for data-label swarms, and latency histograms for arbitrage bots. All charts update via Supabase live channels so the UI never needs a hard refresh.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-primary mr-4">6</span>
            KIP Marketplace
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            Skills, datasets, and derivative prompts are minted as Kernelised Intelligent Property (KIP) objects. Listing a KIP defines: licence hash, default royalty (5 % suggested), and upgrade hooks. When an agent executes, the runtime walks the KIP graph and streams micro-royalties upstream in the same PTB that settles the job—creators see funds land with sub-second latency.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-primary mr-4">7</span>
            ChatOps
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            A right-pane chat embeds the Agent-Control LLM. Type "Swap 1 BTC into five top-APY pools" and the LLM:
          </p>
          
          <ul className="space-y-2 text-gray-300 mb-8 ml-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>scans the mempool for best routes,</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>crafts the PTB,</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>shows a dry-run gas sim,</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>then waits for your 🔑 sign.</span>
            </li>
          </ul>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            It's real LLM inference with mocked blockchain side effects in dev-mode; flip two env flags and it speaks to main-net.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-primary mr-4">8</span>
            Why It Matters
          </h2>
          
          <p className="text-gray-300 leading-relaxed">
            AMAI collapses weeks of smart-contract, infra, and ops work into a gamified drag-and-drop flow. Skills become liquid assets, trust is quantitative, and capital flows at millisecond cadence—turning liquidity into the oxygen of artificial life.
          </p>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default PlatformOverview;