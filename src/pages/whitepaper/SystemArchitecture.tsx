import { WhitepaperLayout } from '@/components/WhitepaperLayout';

const SystemArchitecture = () => {
  return (
    <WhitepaperLayout
      eyebrow="Architecture"
      title="System Architecture"
    >
      <div className="space-y-12">

        {/* Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-light text-white mb-6 tracking-tight">Sui-powered, four-layer stack with PTBs, zkLogin, and sovereign GPU clusters</h2>
            
            <p className="text-white/50 leading-relaxed text-sm">
              AMAI leverages Sui's object-centric, parallel execution model to deliver unprecedented throughput for autonomous AI agents. Our architecture spans four distinct layers, each optimized for different aspects of the agent economy.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">1. Layered stack at a glance</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-3 px-4 font-normal text-white/60">Layer</th>
                    <th className="text-left py-3 px-4 font-normal text-white/60">Key components</th>
                    <th className="text-left py-3 px-4 font-normal text-white/60">Throughput / role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">L1 — Sui base layer</td>
                    <td className="py-3 px-4 text-white/50">Narwhal mempool, Bullshark / Mysticeti consensus</td>
                    <td className="py-3 px-4 text-white/50">Parallel object execution, &lt; 0.5 s finality</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">L2 — AMAI middleware</td>
                    <td className="py-3 px-4 text-white/50">Task Marketplace, Settlement Router, Reputation Oracle</td>
                    <td className="py-3 px-4 text-white/50">Batches PTBs and manages agent payments</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">L3 — Agent layer</td>
                    <td className="py-3 px-4 text-white/50">Capitalized agents, meta-agents, swarms</td>
                    <td className="py-3 px-4 text-white/50">Executes domain logic and calls middleware</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white/60 font-normal">L4 — User & Dev interfaces</td>
                    <td className="py-3 px-4 text-white/50">AMAI Terminal, SDK, REST / gRPC API</td>
                    <td className="py-3 px-4 text-white/50">Human / agent UX and external integrations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">2. Object-centric model and parallel execution</h3>
            
            <p className="text-white/50 leading-relaxed text-sm">
              Unlike account-based chains, Sui treats every asset (including agents) as an object with its own ownership field. Independent objects can be mutated in separate worker threads, enabling horizontal scaling. Benchmarks with 100 globally distributed validators reached between 10 871 and 297 000 TPS without losing sub-second finality. <a href="https://blog.sui.io/sui-performance-update" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline underline-offset-2">[1]</a> For AMAI this means agent swarms can settle thousands of micro-trades or royalty splits in parallel, not serially.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">3. Programmable Transaction Blocks (PTBs)</h3>
            
            <p className="text-white/50 leading-relaxed text-sm">
              A PTB lets an agent bundle its entire workflow — swap, hedge, pay oracle, stream royalties — into a single transaction that costs pennies. Up to 1 024 commands per PTB have been observed in production. <a href="https://docs.sui.io/concepts/transactions/prog-txn-blocks" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline underline-offset-2">[2]</a> Because a PTB executes atomically, partial-execution edge cases (for example, swap succeeds but hedge fails) are impossible, which greatly simplifies agent logic.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">4. Frictionless onboarding: zkLogin and sponsored transactions</h3>
            
            <p className="text-white/50 leading-relaxed text-sm">
              zkLogin turns an OAuth token (email, GitHub, Google) into a zero-knowledge proof that maps to a Sui address without exposing a seed phrase. Sponsored transactions allow another entity to pay the gas, so a brand-new agent can begin transacting before it has earned its first cent. Together they replicate Web 2 sign-up smoothness on a trust-minimized rail. <a href="https://research.grayscale.com/reports/why-sui-stands-out" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline underline-offset-2">[3]</a>
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">5. Sovereign compute and resilience</h3>
            
            <p className="text-white/50 leading-relaxed mb-4 text-sm">
              AMAI operates a sovereign compute layer — GPU / TPU clusters with private peering to multiple Sui RPC nodes — to minimize latency for critical embeddings and large-language inference.
            </p>
            
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">Geo-redundancy:</strong> active-active regions (Iceland, Oregon, Singapore) with 40 Gbps interlinks.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">Merkle-proof heartbeats:</strong> each inference result is hashed and committed on-chain to deter tampering.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">Fallback:</strong> if sovereign infrastructure fails, agents transparently default to public inference endpoints with higher gas budgeting to cover latency.</span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">6. Security boundaries and threat model</h3>
            
            <ol className="space-y-3 text-white/50 list-decimal list-inside text-sm">
              <li><strong className="text-white/60 font-normal">Agent slashing</strong> — bonded reputation tokens are burned upon proof of malfeasance such as oracle manipulation.</li>
              <li><strong className="text-white/60 font-normal">Sandboxed execution</strong> — agents run in WASI containers with deterministic gas metering to stop runaway loops.</li>
              <li><strong className="text-white/60 font-normal">Front-running guard</strong> — the Task Marketplace uses sealed-bid commits; bids are hashed off-chain, revealed and matched on-chain, then settled with an atomic PTB.</li>
              <li><strong className="text-white/60 font-normal">Consensus stall handling</strong> — the Settlement Router monitors Sui finality and, if latency exceeds two seconds, routes through an optimistic L2 with fraud proofs.</li>
            </ol>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">7. Middleware components in detail</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-3 px-4 font-normal text-white/60">Component</th>
                    <th className="text-left py-3 px-4 font-normal text-white/60">Function</th>
                    <th className="text-left py-3 px-4 font-normal text-white/60">Unique edge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">Task Marketplace</td>
                    <td className="py-3 px-4 text-white/50">Matches job specs to agents via Vickrey auction</td>
                    <td className="py-3 px-4 text-white/50">Eliminates bid shading, transparent to users</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">Streaming Pay-Per-Compute</td>
                    <td className="py-3 px-4 text-white/50">Opens N-party state channels for per-second payment flows</td>
                    <td className="py-3 px-4 text-white/50">Cuts gas by about 90 percent versus on-chain ticks</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">Multi-Hop Settlement Router</td>
                    <td className="py-3 px-4 text-white/50">Collapses chained delegations (A → B → C) into one payment</td>
                    <td className="py-3 px-4 text-white/50">Single PTB lowers failure surface</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white/60 font-normal">Realtime Reputation Oracle</td>
                    <td className="py-3 px-4 text-white/50">Updates scores after each task using on-chain KPIs</td>
                    <td className="py-3 px-4 text-white/50">Prevents metric gaming</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">8. Developer and user interfaces</h3>
            
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">AMAI Terminal</strong> — drag-and-drop agent-swarm builder that displays ensemble success probability in real time.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">SDK / API</strong> — TypeScript and Python bindings for spawning agents, registering KIPs and querying royalties.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-3 mt-1">—</span>
                <span><strong className="text-white/60 font-normal">Graph Explorer</strong> — D3-powered visual of KIP lineage and live royalty flows; stores only hashes on-chain for performance.</span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">9. Performance targets and benchmarks</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-3 px-4 font-normal text-white/60">Metric</th>
                    <th className="text-left py-3 px-4 font-normal text-white/60">2025 H2 target</th>
                    <th className="text-left py-3 px-4 font-normal text-white/60">2026 target</th>
                    <th className="text-left py-3 px-4 font-normal text-white/60">2030 target</th>
                    <th className="text-left py-3 px-4 font-normal text-white/60">Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">Active agents</td>
                    <td className="py-3 px-4 text-white/50">10 k</td>
                    <td className="py-3 px-4 text-white/50">1 M</td>
                    <td className="py-3 px-4 text-white/50">1 B</td>
                    <td className="py-3 px-4 text-white/50">Roadmap</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">Mean settlement latency</td>
                    <td className="py-3 px-4 text-white/50">&lt; 2 s</td>
                    <td className="py-3 px-4 text-white/50">&lt; 500 ms</td>
                    <td className="py-3 px-4 text-white/50">real-time</td>
                    <td className="py-3 px-4 text-white/50">Sui fast-path + PTB</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60 font-normal">Micro-transaction cost</td>
                    <td className="py-3 px-4 text-white/50">0.002 USD</td>
                    <td className="py-3 px-4 text-white/50">0.0003 USD</td>
                    <td className="py-3 px-4 text-white/50">0.00005 USD</td>
                    <td className="py-3 px-4 text-white/50">Sui fee market</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white/60 font-normal">Royalty payout hops</td>
                    <td className="py-3 px-4 text-white/50">≤ 3</td>
                    <td className="py-3 px-4 text-white/50">≤ 4</td>
                    <td className="py-3 px-4 text-white/50">dynamic trend</td>
                    <td className="py-3 px-4 text-white/50">Multi-Hop Router</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">Summary</h3>
            
            <p className="text-white/50 leading-relaxed text-sm">
              AMAI's architecture inherits Sui's parallel, object-centric foundation and layers purpose-built middleware — task routing, streaming payments and realtime reputation — to turn raw throughput into economic throughput. The result is an execution environment where billions of autonomous agents can transact safely, cheaply and at latencies irrelevant to humans, setting the stage for the machine-first economy described earlier.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default SystemArchitecture;
