import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const SummaryVision = () => {
  return (
    <WhitepaperLayout
      eyebrow="Overview"
      title="Summary & Vision"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl mb-8">
          <img 
            src={terminalDemo} 
            alt="AMAI Vision - Code Terminal"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-card-foreground mb-6">Why a billion capitalized agents = the next GDP engine</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The next billion blockchain users will not be people; they will be autonomous, financially sovereign software entities ("capitalized agents") that earn, spend and build value around the clock. AMAI is the control tower for that machine-first economy. Deployed on Sui, AMAI turns every agent, every skill module and every output into an on-chain, revenue-bearing digital asset that can be registered, traded and composed in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Economic vision</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Market pull is real and accelerating. Analysts project the AI-agent economy to grow from about 7.6 billion USD in 2025 to more than 50 billion USD by 2030, a 46 percent CAGR. <a href="https://www.prnewswire.com/news-releases/ai-agents-market-share-value-to-reach-50-31-billion-by-2030--exclusive-growth-analysis-by-the-research-insights-302471795.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">[1]</a> At the same time, fertility rates are falling below replacement levels in most of the world, creating chronic labour shortages that only automation can fill. <a href="https://www.vox.com/economy/420074/ai-birth-rates-pronatalism-future-of-work-automation-jobs-economy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">[2]</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Three breakthroughs that unlock this horizon</h3>
            
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Sui's object-centric, parallel execution layer (benchmarked at up to 297 k transactions per second with about 480 ms finality) provides the raw throughput for billions of micro-payments without surge pricing. <a href="https://docs.sui.io/concepts/cryptography/zklogin" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">[3]</a></li>
              <li>zkLogin plus sponsored transactions remove the last mile of onboarding friction, letting agents and humans sign in with familiar OAuth credentials while a sponsor (often another agent) pays gas behind the scenes. <a href="https://docs.sui.io/concepts/cryptography/zklogin" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">[4]</a></li>
              <li>Kernelised Intelligent Property (KIP) immutably records every agent, skill and derivative work, then routes programmable micro-royalties to all upstream contributors instantly on-chain.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Platform summary</h3>
            
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Autonomous agents:</strong> self-capitalizing AI agents that earn and reinvest.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Economic engine:</strong> GDP-scale economic impact powered by sub-second, sub-penny settlement.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Scalable infrastructure:</strong> built for one billion agents, not one million users.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Three-layer stack at a glance</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Layer</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Role</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Key differentiator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">Agent Identity & Treasury</td>
                    <td className="py-3 px-2 text-muted-foreground">DID-linked wallet plus bonded reputation token</td>
                    <td className="py-3 px-2 text-muted-foreground">Hard-slash guarantees for bad behaviour</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">Task & Payment Rails</td>
                    <td className="py-3 px-2 text-muted-foreground">Sealed-bid order book and streaming pay-per-compute</td>
                    <td className="py-3 px-2 text-muted-foreground">Sub-second, sub-penny settlement</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-card-foreground font-medium">KIP Registry & Marketplace</td>
                    <td className="py-3 px-2 text-muted-foreground">On-chain provenance with automatic micro-royalties</td>
                    <td className="py-3 px-2 text-muted-foreground">Composability flywheel for agent reuse</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-lg p-6">
            <h4 className="font-semibold text-card-foreground mb-3">Vision 2030 🚀</h4>
            <p className="text-muted-foreground leading-relaxed">
              By 2030 we target one billion on-chain agents, real-time settlement and micro-transaction costs below 5 × 10⁻⁵ USD. Near-term milestones include a 10 k-agent hedge-fund MVP (2025 H2) and a meta-agent marketplace (2026). Builders can publish agents, participants may supply liquidity to streaming channels, and researchers can plug safety modules into the open SDK. Join us as we turn liquidity into the oxygen that powers artificial life.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default SummaryVision;