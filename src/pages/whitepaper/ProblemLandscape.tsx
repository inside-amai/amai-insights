import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import circuitBoard from '@/assets/circuit-board.jpg';

const ProblemLandscape = () => {
  return (
    <WhitepaperLayout
      eyebrow="Problem"
      title="Problem Landscape"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl mb-8">
          <img 
            src="/lovable-uploads/6600e6bf-b1b6-446b-a56a-9083a646e724.png" 
            alt="Problem Landscape - Digital Systems and Security"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Content */}
         <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Demographic decline, brittle DeFi, and isolated AI wallets — the pain AMAI fixes</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Global forces are creating a perfect storm that only on-chain, capitalized agents can calm. Below are the six systemic bottlenecks AMAI is designed to break.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">1. A demographic time-bomb</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Global fertility now averages 2.1 births per woman, the replacement threshold, and keeps falling. <a href="https://www.ft.com/content/318ff981-d189-4bd6-b608-a9709097eedc" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[1]</a> Ageing workforces in OECD and East-Asian economies are already shrinking. By 2035 Japan, South Korea, Italy and Spain will have labour pools 15–25 percent smaller than today. Longer hours and immigration cannot fully close the gap; without non-human labour, GDP growth flat-lines and social-security systems buckle.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">2. Human-in-the-loop finance is brittle</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              DeFi promised autonomous money, but the reality is still "Discord-driven yield." Analysts babysit leverage, DAO votes lag for hours, and liquidation bots fail during volatility. In TradFi, batch settlements and weekend downtime remain the norm.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">3. Today's Agent Frameworks Stop at the Wallet</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              OpenAI function calls, Auto-GPT forks and Discord copilots can reason but cannot own or deploy capital. Their loops end at a webhook, handing the baton back to humans for signing. Custodial "key-in-the-cloud" work-arounds recentralise risk and violate DeFi principles. Academic surveys show that more than 90 percent of AI-token projects keep compute and treasury off-chain. <a href="https://arxiv.org/abs/2505.07828" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[2]</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">4. Scalability roadblocks</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Running agents directly on popular L1s is cost-prohibitive. A multi-step arbitrage touching dozens of contracts can exceed 100 USD in gas on Ethereum main-net. Solana lowers fees but serializes state updates, creating price-time arbitrage windows. Sui's parallel object model is the first to show consistent sub-second finality at six-figure TPS, removing both latency and fee spikes. <a href="https://blockeden.xyz/blog/2023/04/28/297k-tps-sui-network-s-impressive-performance-update" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[3]</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">5. The monetization gap</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              AI excels at idea generation but struggles to monetize outputs. A February 2025 essay, "AI: The Monetization Layer of Blockchain – Onboarding the Next Billion Agents," argues that on-chain ownership and instant revenue-splits are the missing pieces that turn creative agents into self-funding businesses. <a href="https://decentraliseddialogue.substack.com/p/ai-the-monetisation-layer-of-blockchain" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[4]</a> Yet no platform systematically tokenizes and streams royalties for each intermediate model, prompt, or dataset.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">6. Summary of pain points</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-2 font-semibold text-white">Category</th>
                    <th className="text-left py-3 px-2 font-semibold text-white">Current state</th>
                    <th className="text-left py-3 px-2 font-semibold text-white">Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">Labour supply</td>
                    <td className="py-3 px-2 text-gray-300">Falling birth-rates</td>
                    <td className="py-3 px-2 text-gray-300">Persistent productivity gap</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">Finance operations</td>
                    <td className="py-3 px-2 text-gray-300">Human babysitting</td>
                    <td className="py-3 px-2 text-gray-300">Latency and exploit windows</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">Agent wallets</td>
                    <td className="py-3 px-2 text-gray-300">Custodial or off-chain</td>
                    <td className="py-3 px-2 text-gray-300">Trust and compliance risk</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">L1 throughput</td>
                    <td className="py-3 px-2 text-gray-300">Fewer than 5 k TPS typical</td>
                    <td className="py-3 px-2 text-gray-300">Gas spikes and failed arbitrage</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-white font-medium">AI IP rights</td>
                    <td className="py-3 px-2 text-gray-300">Off-chain EULAs</td>
                    <td className="py-3 px-2 text-gray-300">Broken revenue loops</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Why it matters</h3>
            
            <p className="text-gray-300 leading-relaxed">
              Demographic pressure, brittle financial automation and under-monetized AI outputs set the stage for AMAI. By embedding capitalized agents natively on Sui, AMAI removes human bottlenecks, collapses execution latency and, through KIP-level royalty flows, turns every line of model code into a liquid, income-bearing asset. The next sections explain how we secure, scale and govern that economy.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default ProblemLandscape;