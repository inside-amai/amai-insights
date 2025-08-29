import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import tokenChart from '@/assets/token-chart.jpg';

const AgentEconomyKIPs = () => {
  return (
    <WhitepaperLayout
      eyebrow="Economy"
      title="Kernelized Intelligent Property (KIP) Framework"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={tokenChart} 
            alt="Agent Economy & KIPs"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">1. Universal KIP Registry</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every agent, skill module, dataset and derivative work is minted as a KIP object that records:
          </p>
          
          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>SHA-256 content hash</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Dependency graph (ancestry links)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>License terms (MIT, CC0, or custom)</span>
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed">
            Friction-free IP registration is "how small prompt writers join the long tail of AI income," notes Decentralized Dialogue.<a href="https://decentraliseddialogue.substack.com/p/ai-the-monetisation-layer-of-blockchain" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[1]</a>
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">2. Micro-Royalty Engine</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            When an agent executes, the runtime walks its dependency graph, calculates each upstream KIP's proportional contribution wi and streams a default 5 percent split (configurable) to each address:
          </p>

          <div className="bg-secondary/20 rounded-lg p-4 mb-4">
            <p className="text-center text-muted-foreground font-mono">
              Royaltyi = wi × 0.05 × Gross Revenue
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            All splits clear in the same PTB that settles the primary payment, so contributors see funds with &lt; 500 ms latency on production hardware. PTB capacity (up to 1 024 ops) keeps gas low even with deep graphs.<a href="https://blog.sui.io/sui-performance-update" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[2]</a>
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">3. Performance-Driven Marketplace</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            Agents and skills list in an open order book ranked by:
          </p>
          
          <ol className="space-y-3 text-muted-foreground mb-6 list-decimal ml-6">
            <li>Trust Score (bond weight × historic task success)</li>
            <li>Cost-Efficiency (gas + royalties per unit output)</li>
            <li>Latency-Adjusted KPI (task-specific, for example Sharpe ratio for finance)</li>
          </ol>

          <p className="text-muted-foreground leading-relaxed">
            Poor performers are automatically suppressed, letting capital flow to the most useful code, not the loudest marketing.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">4. Dynamic IP Graph Explorer</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            A D3-powered UI visualizes lineage and real-time royalty streams — "Google Maps for AI IP." Users can filter by revenue, task domain or risk flags. Only hashes, not raw code, are stored on-chain to protect IP while preserving auditability.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">5. External SDK & API Layer</h3>
          
          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span><strong>Register KIP</strong> — push content hash plus metadata ➜ returns KIP-ID</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span><strong>Query Lineage</strong> — fetch upstream graph for due diligence</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span><strong>Invoke Skill</strong> — POST /invoke/&#123;KIP-ID&#125; with JSON task payload</span>
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed">
            Early alpha adopters reported a 38 percent reduction in time-to-market versus building proprietary agent stacks (survey, May 2025).
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">6. Compliance & Dispute Resolution</h3>
          
          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span><strong>On-Chain Arbitration</strong> — zero-knowledge evidence is submitted and the ruling automatically updates revenue splits.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span><strong>DMCA Fast-Track</strong> — notarized takedowns freeze royalty routing within 30 minutes.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span><strong>Reg-Tech Hooks</strong> — optional country codes on KIPs allow automatic geofencing when required by local AI or copyright law.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">7. Economic Impact Projection</h3>
          
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mt-6">
            <p className="text-muted-foreground leading-relaxed">
              Grand View Research estimates the AI-agent market at roughly 50 billion USD by 2030 on a 45.8 percent CAGR.<a href="https://www.prnewswire.com/news-releases/ai-agents-market-size-to-hit-50-31-billion-by-2030-at-cagr-45-8---grand-view-research-inc-302447060.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[3]</a> A deterministic model shows KIP royalties capturing 6 – 9 percent of that flow, implying 3 – 4.5 billion USD in annual passive income for early skill creators — a powerful incentive for an open-source flywheel.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default AgentEconomyKIPs;