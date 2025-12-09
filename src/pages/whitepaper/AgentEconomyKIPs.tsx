import { WhitepaperLayout } from '@/components/WhitepaperLayout';

const AgentEconomyKIPs = () => {
  return (
    <WhitepaperLayout
      eyebrow="Agent Economy"
      title="Kernelized Intelligent Property (KIP) Marketplace"
    >
      <div className="space-y-12">

        {/* Content */}
        <div className="space-y-10">
          <p className="text-white/50 leading-relaxed text-sm">
            The KIP Marketplace is AMAI's intellectual property substrate. It ensures that every agent, skill, dataset, or derivative work becomes an on-chain object with verifiable provenance and continuous monetization through programmable micro-royalties. By merging registration, execution, and revenue sharing into the same atomic settlement, the Marketplace transforms intellectual contributions into liquid, yield-bearing assets.
          </p>

          <div className="h-px bg-white/10" />

          <div>
            <h2 className="text-xl font-normal text-white mt-8 mb-4 tracking-tight">Universal KIP Registry</h2>
            
            <p className="text-white/50 leading-relaxed mb-4 text-sm">
              Every contribution, whether an individual skill, a composite agent, or a dataset, is minted as a KIP object. Each object records:
            </p>
            
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span>Content hash (SHA-256) that immutably anchors the IP.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span>Dependency graph linking the work to all upstream contributors.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span>License terms (MIT, CC0, custom) that define permissible use.</span>
              </li>
            </ul>

            <p className="text-white/50 leading-relaxed mt-4 text-sm">
              This framework guarantees provable authorship, on-chain provenance, and composability. Even the smallest prompt or module can be registered and monetized without intermediaries.
            </p>

            <p className="text-white/50 leading-relaxed mt-4 text-sm">
              Friction-free IP registration is "how small prompt writers join the long tail of AI income," notes Decentralized Dialogue.<a href="https://decentraliseddialogue.substack.com/p/ai-the-monetisation-layer-of-blockchain" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline underline-offset-2">[1]</a>
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h2 className="text-xl font-normal text-white mt-8 mb-4 tracking-tight">Micro-Royalty Engine</h2>
            
            <p className="text-white/50 leading-relaxed mb-4 text-sm">
              When an agent executes, the runtime automatically traverses its dependency graph to calculate proportional contributions of each upstream KIP. A default 5 % split of gross revenue (configurable at mint) is routed to contributors:
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
              <p className="text-center text-white/60 font-mono text-lg">
                Royalty<sub>i</sub> = w<sub>i</sub> × 0.05 × Gross Revenue
              </p>
            </div>

            <p className="text-white/50 leading-relaxed text-sm">
              All royalties settle in the same Programmable Transaction Block (PTB) that executes the task, ensuring atomicity and sub-500 ms settlement on production hardware. With PTB capacity supporting up to 1,024 operations, even deep lineage graphs clear efficiently.<a href="https://blog.sui.io/sui-performance-update" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline underline-offset-2">[2]</a>
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h2 className="text-xl font-normal text-white mt-8 mb-4 tracking-tight">Marketplace Dynamics</h2>
            
            <p className="text-white/50 leading-relaxed mb-4 text-sm">
              The KIP Marketplace functions as an open order book where agents and skills are ranked by measurable performance:
            </p>
            
            <ol className="space-y-3 text-white/50 mb-6 list-decimal ml-6 text-sm">
              <li>Trust Score — bond weight multiplied by historic task success.</li>
              <li>Cost Efficiency — gas plus royalty cost per unit output.</li>
              <li>Latency-Adjusted KPIs — domain-specific metrics such as Sharpe ratio for financial agents.</li>
            </ol>

            <p className="text-white/50 leading-relaxed text-sm">
              KIPs that underperform are automatically suppressed, directing capital and visibility toward the most useful code. This creates a self-optimizing ecosystem where value accrues to proven IP, not just marketing.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h2 className="text-xl font-normal text-white mt-8 mb-4 tracking-tight">Dynamic IP Graph Explorer</h2>
            
            <p className="text-white/50 leading-relaxed text-sm">
              To make lineage transparent, the Marketplace includes a Graph Explorer: a D3-powered interface visualizing ancestry links and real-time royalty flows. Users can filter by revenue, task domain, or compliance flags. Importantly, only hashes and metadata are stored on-chain, protecting proprietary code while still offering auditability.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h2 className="text-xl font-normal text-white mt-8 mb-4 tracking-tight">SDK and API Layer</h2>
            
            <p className="text-white/50 leading-relaxed mb-4 text-sm">
              Developers integrate seamlessly through the external SDK and API:
            </p>

            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">Register KIP</strong> — submit content hash + metadata, receive KIP-ID.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">Query Lineage</strong> — retrieve upstream graph for due diligence.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">Invoke Skill</strong> — POST task payloads to /invoke/&#123;KIP-ID&#125;.</span>
              </li>
            </ul>

            <p className="text-white/50 leading-relaxed mt-4 text-sm">
              This infrastructure accelerates development cycles by enabling plug-and-play composition of new agents from existing components. Early adopters report up to 38 % reduction in time-to-market compared with proprietary builds.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h2 className="text-xl font-normal text-white mt-8 mb-4 tracking-tight">Compliance and Dispute Resolution</h2>
            
            <p className="text-white/50 leading-relaxed mb-4 text-sm">
              The Marketplace embeds compliance hooks to align with global IP and regulatory standards:
            </p>

            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">On-Chain Arbitration</strong> — zero-knowledge evidence can modify royalty splits without altering the KIP object.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">DMCA Fast-Track</strong> — notarized takedown requests freeze royalty routing within 30 minutes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">Reg-Tech Hooks</strong> — optional country-codes enable automatic geofencing of skills.</span>
              </li>
            </ul>

            <p className="text-white/50 leading-relaxed mt-4 text-sm">
              This ensures contributors retain rights protection while maintaining openness and composability.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-normal text-white mb-4 tracking-tight">Economic Impact</h2>
            
            <p className="text-white/50 leading-relaxed text-sm">
              Independent forecasts estimate the AI-agent economy will exceed USD 50 B by 2030.<a href="https://www.prnewswire.com/news-releases/ai-agents-market-size-to-hit-50-31-billion-by-2030-at-cagr-45-8---grand-view-research-inc-302447060.html" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline underline-offset-2">[3]</a> With deterministic royalty capture of 6–9 %, the KIP framework is positioned to stream USD 3–4.5 B annually in passive income to creators. By transforming IP into liquid financial objects, the Marketplace catalyzes a compounding flywheel: more creators publish, more agents reuse, more royalties circulate, and the ecosystem grows stronger with each loop.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default AgentEconomyKIPs;
