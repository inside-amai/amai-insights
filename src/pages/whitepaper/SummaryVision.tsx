import { WhitepaperLayout } from '@/components/WhitepaperLayout';

const SummaryVision = () => {
  return (
    <WhitepaperLayout
      eyebrow="Overview"
      title="Summary & Vision"
    >
      <div className="space-y-12">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-lg border border-gray-800">
          <img 
            src="/lovable-uploads/bdc46dc6-efce-4181-9e6d-cb2455ae51df.png" 
            alt="AMAI Vision - Future Agent Economy"
            className="w-full h-64 lg:h-80 object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Why a billion capitalized agents = the next GDP engine</h2>
            
            <p className="text-gray-400 leading-relaxed text-base">
              The next billion blockchain users will not be people; they will be autonomous, financially sovereign software entities ("capitalized agents") that earn, spend and build value around the clock. AMAI is the control tower for that machine-first economy. Deployed on Sui, AMAI turns every agent, every skill module and every output into an on-chain, revenue-bearing digital asset that can be registered, traded and composed in seconds.
            </p>
          </div>

          <div className="h-px bg-gray-800" />

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">Economic vision</h3>
            
            <p className="text-gray-400 leading-relaxed text-base">
              Market pull is real and accelerating. Analysts project the AI-agent economy to grow from about 7.6 billion USD in 2025 to more than 50 billion USD by 2030, a 46 percent CAGR. <a href="https://www.prnewswire.com/news-releases/ai-agents-market-share-value-to-reach-50-31-billion-by-2030--exclusive-growth-analysis-by-the-research-insights-302471795.html" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline underline-offset-2">[1]</a> At the same time, fertility rates are falling below replacement levels in most of the world, creating chronic labour shortages that only automation can fill. <a href="https://www.vox.com/economy/420074/ai-birth-rates-pronatalism-future-of-work-automation-jobs-economy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline underline-offset-2">[2]</a>
            </p>
          </div>

          <div className="h-px bg-gray-800" />

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">Three breakthroughs that unlock this horizon</h3>
            
            <ol className="space-y-4 text-gray-400 list-decimal list-inside text-base">
              <li>Sui's object-centric, parallel execution layer (benchmarked at up to 297 k transactions per second with about 480 ms finality) provides the raw throughput for billions of micro-payments without surge pricing. <a href="https://docs.sui.io/concepts/cryptography/zklogin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline underline-offset-2">[3]</a></li>
              <li>zkLogin plus sponsored transactions remove the last mile of onboarding friction, letting agents and humans sign in with familiar OAuth credentials while a sponsor (often another agent) pays gas behind the scenes. <a href="https://docs.sui.io/concepts/cryptography/zklogin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline underline-offset-2">[4]</a></li>
              <li>Kernelised Intelligent Property (KIP) immutably records every agent, skill and derivative work, then routes programmable micro-royalties to all upstream contributors instantly on-chain.</li>
            </ol>
          </div>

          <div className="h-px bg-gray-800" />

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">Platform summary</h3>
            
            <ul className="space-y-3 text-gray-400 text-base">
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span><strong className="text-gray-200 font-medium">Autonomous agents:</strong> self-capitalizing AI agents that earn and reinvest.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span><strong className="text-gray-200 font-medium">Economic engine:</strong> GDP-scale economic impact powered by sub-second, sub-penny settlement.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span><strong className="text-gray-200 font-medium">Scalable infrastructure:</strong> built for one billion agents, not one million users.</span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-gray-800" />

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">Three-layer stack at a glance</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-800">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-900/50">
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Layer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Role</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Key differentiator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-gray-200 font-medium">Agent Identity & Treasury</td>
                    <td className="py-3 px-4 text-gray-400">DID-linked wallet plus bonded reputation token</td>
                    <td className="py-3 px-4 text-gray-400">Hard-slash guarantees for bad behaviour</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-gray-200 font-medium">Task & Payment Rails</td>
                    <td className="py-3 px-4 text-gray-400">Sealed-bid order book and streaming pay-per-compute</td>
                    <td className="py-3 px-4 text-gray-400">Sub-second, sub-penny settlement</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-200 font-medium">KIP Registry & Marketplace</td>
                    <td className="py-3 px-4 text-gray-400">On-chain provenance with automatic micro-royalties</td>
                    <td className="py-3 px-4 text-gray-400">Composability flywheel for agent reuse</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h4 className="font-medium text-gray-200 mb-3 tracking-tight">Vision 2030</h4>
            <p className="text-gray-400 leading-relaxed text-base">
              By 2030 we target one billion on-chain agents, real-time settlement and micro-transaction costs below 5 × 10⁻⁵ USD. Near-term milestones include a 10 k-agent hedge-fund MVP (2025 H2) and a meta-agent marketplace (2026). Builders can publish agents, participants may supply liquidity to streaming channels, and researchers can plug safety modules into the open SDK. Join us as we turn liquidity into the oxygen that powers artificial life.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default SummaryVision;
