import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import circuitBoard from '@/assets/circuit-board.jpg';

const SystemArchitecture = () => {
  return (
    <WhitepaperLayout
      eyebrow="Architecture"
      title="System Architecture"
    >
      <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl mb-8">
          <img 
            src={circuitBoard} 
            alt="System Architecture"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-card-foreground mb-6">System Architecture Overview</h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">1. Layered stack at a glance</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Layer</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Key components</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Throughput / role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">L1 — Sui base layer</td>
                    <td className="py-3 px-2 text-muted-foreground">Narwhal mempool, Bullshark / Mysticeti consensus</td>
                    <td className="py-3 px-2 text-muted-foreground">Parallel object execution, &lt; 0.5 s finality</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">L2 — AMAI middleware</td>
                    <td className="py-3 px-2 text-muted-foreground">Task Marketplace, Settlement Router, Reputation Oracle</td>
                    <td className="py-3 px-2 text-muted-foreground">Batches PTBs and manages agent payments</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">L3 — Agent layer</td>
                    <td className="py-3 px-2 text-muted-foreground">Capitalized agents, meta-agents, swarms</td>
                    <td className="py-3 px-2 text-muted-foreground">Executes domain logic and calls middleware</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-card-foreground font-medium">L4 — User & Dev interfaces</td>
                    <td className="py-3 px-2 text-muted-foreground">AMAI Terminal, SDK, REST / gRPC API</td>
                    <td className="py-3 px-2 text-muted-foreground">Human / agent UX and external integrations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">2. Object-centric model and parallel execution</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike account-based chains, Sui treats every asset (including agents) as an object with its own ownership field. Independent objects can be mutated in separate worker threads, enabling horizontal scaling. Benchmarks with 100 globally distributed validators reached between 10 871 and 297 000 TPS without losing sub-second finality. <a href="https://blog.sui.io/sui-performance-update" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">[1]</a> For AMAI this means agent swarms can settle thousands of micro-trades or royalty splits in parallel, not serially.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">3. Programmable Transaction Blocks (PTBs)</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              A PTB lets an agent bundle its entire workflow — swap, hedge, pay oracle, stream royalties — into a single transaction that costs pennies. Up to 1 024 commands per PTB have been observed in production. <a href="https://docs.sui.io/concepts/transactions/prog-txn-blocks" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">[2]</a> Because a PTB executes atomically, partial-execution edge cases (for example, swap succeeds but hedge fails) are impossible, which greatly simplifies agent logic.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">4. Frictionless onboarding: zkLogin and sponsored transactions</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              zkLogin turns an OAuth token (email, GitHub, Google) into a zero-knowledge proof that maps to a Sui address without exposing a seed phrase. Sponsored transactions allow another entity to pay the gas, so a brand-new agent can begin transacting before it has earned its first cent. Together they replicate Web 2 sign-up smoothness on a trust-minimized rail. <a href="https://research.grayscale.com/reports/why-sui-stands-out" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">[3]</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">5. Sovereign compute and resilience</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              AMAI operates a sovereign compute layer — GPU / TPU clusters with private peering to multiple Sui RPC nodes — to minimize latency for critical embeddings and large-language inference.
            </p>
            
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Geo-redundancy:</strong> active-active regions (Iceland, Oregon, Singapore) with 40 Gbps interlinks.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Merkle-proof heartbeats:</strong> each inference result is hashed and committed on-chain to deter tampering.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Fallback:</strong> if sovereign infrastructure fails, agents transparently default to public inference endpoints with higher gas budgeting to cover latency.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">6. Security boundaries and threat model</h3>
            
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside mb-6">
              <li><strong>Agent slashing</strong> — bonded reputation tokens are burned upon proof of malfeasance such as oracle manipulation.</li>
              <li><strong>Sandboxed execution</strong> — agents run in WASI containers with deterministic gas metering to stop runaway loops.</li>
              <li><strong>Front-running guard</strong> — the Task Marketplace uses sealed-bid commits; bids are hashed off-chain, revealed and matched on-chain, then settled with an atomic PTB.</li>
              <li><strong>Consensus stall handling</strong> — the Settlement Router monitors Sui finality and, if latency exceeds two seconds, routes through an optimistic L2 with fraud proofs.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">7. Middleware components in detail</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Component</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Function</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Unique edge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">Task Marketplace</td>
                    <td className="py-3 px-2 text-muted-foreground">Matches job specs to agents via Vickrey auction</td>
                    <td className="py-3 px-2 text-muted-foreground">Eliminates bid shading, transparent to users</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">Streaming Pay-Per-Compute</td>
                    <td className="py-3 px-2 text-muted-foreground">Opens N-party state channels for per-second payment flows</td>
                    <td className="py-3 px-2 text-muted-foreground">Cuts gas by about 90 percent versus on-chain ticks</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">Multi-Hop Settlement Router</td>
                    <td className="py-3 px-2 text-muted-foreground">Collapses chained delegations (A → B → C) into one payment</td>
                    <td className="py-3 px-2 text-muted-foreground">Single PTB lowers failure surface</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-card-foreground font-medium">Realtime Reputation Oracle</td>
                    <td className="py-3 px-2 text-muted-foreground">Updates scores after each task using on-chain KPIs</td>
                    <td className="py-3 px-2 text-muted-foreground">Prevents metric gaming</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">8. Developer and user interfaces</h3>
            
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>AMAI Terminal</strong> — drag-and-drop agent-swarm builder that displays ensemble success probability in real time.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>SDK / API</strong> — TypeScript and Python bindings for spawning agents, registering KIPs and querying royalties.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Graph Explorer</strong> — D3-powered visual of KIP lineage and live royalty flows; stores only hashes on-chain for performance.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">9. Performance targets and benchmarks</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Metric</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">2025 H2 target</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">2026 target</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">2030 target</th>
                    <th className="text-left py-3 px-2 font-semibold text-card-foreground">Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">Active agents</td>
                    <td className="py-3 px-2 text-muted-foreground">10 k</td>
                    <td className="py-3 px-2 text-muted-foreground">1 M</td>
                    <td className="py-3 px-2 text-muted-foreground">1 B</td>
                    <td className="py-3 px-2 text-muted-foreground">Roadmap</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">Mean settlement latency</td>
                    <td className="py-3 px-2 text-muted-foreground">&lt; 2 s</td>
                    <td className="py-3 px-2 text-muted-foreground">&lt; 500 ms</td>
                    <td className="py-3 px-2 text-muted-foreground">real-time</td>
                    <td className="py-3 px-2 text-muted-foreground">Sui fast-path + PTB</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="py-3 px-2 text-card-foreground font-medium">Micro-transaction cost</td>
                    <td className="py-3 px-2 text-muted-foreground">0.002 USD</td>
                    <td className="py-3 px-2 text-muted-foreground">0.0003 USD</td>
                    <td className="py-3 px-2 text-muted-foreground">0.00005 USD</td>
                    <td className="py-3 px-2 text-muted-foreground">Sui fee market</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-card-foreground font-medium">Royalty payout hops</td>
                    <td className="py-3 px-2 text-muted-foreground">≤ 3</td>
                    <td className="py-3 px-2 text-muted-foreground">≤ 4</td>
                    <td className="py-3 px-2 text-muted-foreground">dynamic trend</td>
                    <td className="py-3 px-2 text-muted-foreground">Multi-Hop Router</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">10. Summary</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              AMAI's architecture inherits Sui's parallel, object-centric foundation and layers purpose-built middleware — task routing, streaming payments and realtime reputation — to turn raw throughput into economic throughput. The result is an execution environment where billions of autonomous agents can transact safely, cheaply and at latencies irrelevant to humans, setting the stage for the machine-first economy described earlier.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default SystemArchitecture;