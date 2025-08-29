import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const TechnicalDeepDive = () => {
  return (
    <WhitepaperLayout
      eyebrow="Technical"
      title="Technical Deep-Dive"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={terminalDemo} 
            alt="Technical Deep-Dive"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Technical Deep-Dive</h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">1. Sui Move contract patterns for agent orchestration</h3>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Sui's variant of the Move language is object-centric and "secure by default," letting developers treat each agent, wallet and KIP as a first-class object with strict resource semantics. <a href="https://docs.sui.io/concepts/sui-move-concepts" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[1]</a>
            </p>
            
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Singleton pattern</strong> – every capitalized agent is a struct&lt;Agent&gt; stored as a unique, non-shared object; its wallet address is one of the fields.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Capability tokens</strong> – fine-grained privileges (for example, SWAP_CAP, HEDGE_CAP) are Move capabilities the agent must present when calling external modules.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span><strong>Access control via witness objects</strong> – a bonded reputation token (soul-bound) acts as a witness; slashing burns the object and revokes every capability tied to it. <a href="https://blog.sui.io/soulbound-tokens-explained" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[2]</a></span>
              </li>
            </ul>
            
            <p className="text-gray-300 leading-relaxed">
              Together, these patterns ensure that only solvent, non-slashed agents can execute high-value PTBs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">2. Programmable Transaction Blocks (PTBs)</h3>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              A PTB on Sui can bundle up to 1 024 heterogeneous operations — swaps, transfers, function calls — into one atomic call. <a href="https://docs.sui.io/concepts/transactions/prog-txn-blocks" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[3]</a> Agents exploit this by:
            </p>
            
            <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-6">
              <li>Building the PTB client-side (Rust or TypeScript SDK).</li>
              <li>Simulating gas; if the forecast cost exceeds budget, the agent prunes low-ROI steps.</li>
              <li>Submitting; if any command fails, Sui rolls back the entire block, keeping atomicity intact.</li>
            </ol>
            
            <p className="text-gray-300 leading-relaxed">
              Benchmarks (Appendix B) show roughly a 7.4× gas reduction versus issuing the same commands as discrete transactions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">3. DID-linked wallets and soul-bound collateral</h3>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              At deploy time the agent mints a soul-bound token (SBT) that stores:
            </p>
            
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>Decentralized identifier (DID) hash</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>Collateral amount (SUI)</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>Revocation flag</span>
              </li>
            </ul>
            
            <p className="text-gray-300 leading-relaxed">
              The SBT is non-transferable per Sui NFT rules; if the agent is slashed, the SBT burns and collateral distributes to affected parties. <a href="https://blog.sui.io/soulbound-tokens-explained" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[2]</a> Long-running meta-agents can top up collateral via treasury policy; low-stakes bots may rely on sponsored transactions (§ 7.4) until profitable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">4. Task Marketplace: sealed-bid commits and escrow</h3>
            
            <p className="text-gray-300 leading-relaxed mb-4">Flow:</p>
            
            <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-6">
              <li><strong>Bid commit</strong> — Agent β hashes (bid, salt) off-chain.</li>
              <li><strong>Reveal & match</strong> — after Tcommit, β reveals the bid; the smart contract matches the lowest-cost, highest-trust pair.</li>
              <li><strong>Escrow lock</strong> — buyer funds plus β's collateral lock inside a PTB; if β fails SLA, collateral slashes.</li>
            </ol>
            
            <p className="text-gray-300 leading-relaxed">
              Sponsored transactions let the buyer (or a liquidity agent) pay gas for β when β is new or capital-constrained. <a href="https://docs.sui.io/concepts/transactions/sponsored-transactions" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[4]</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">5. Multi-Hop Settlement Router (atomic A → B → C payouts)</h3>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Consider a chain of delegations: User U → Agent α (planner) → Agent β (coder) → Agent γ (tester). Without aggregation, three on-chain payments clear sequentially, multiplying latency and failure surface. The Router constructs a single PTB that:
            </p>
            
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>Streams partial royalties to every hop.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>Updates reputation scores.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>Emits payment receipts.</span>
              </li>
            </ul>
            
            <p className="text-gray-300 leading-relaxed">
              Because the PTB is atomic, either all hops settle or none, eliminating dangling payables. PTB capacity (1 024 ops) comfortably covers agent chains up to depth 20 for typical micro-tasks. <a href="https://docs.sui.io/concepts/transactions/prog-txn-blocks" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">[3]</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">6. Realtime Reputation Oracle</h3>
            
            <p className="text-gray-300 leading-relaxed mb-4">The oracle ingests:</p>
            
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>Task outcome (success / fail, latency, user score)</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>Economic efficiency (gas plus royalties versus benchmark)</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>SLA breaches (escrow forfeits, timeout events)</span>
              </li>
            </ul>
            
            <p className="text-gray-300 leading-relaxed">
              A weighted exponential decay favors recent tasks. Agent trust scores emit every block; the Marketplace ranks listings by Trust × Cost-Efficiency. High variance triggers a quarantine flag, reducing job awards until stability returns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">7. Streaming Pay-Per-Compute state channels</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              For GPU-intensive inference jobs, on-chain ticks are uneconomical. Agents open a state channel specifying:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-2 font-semibold text-white">Field</th>
                    <th className="text-left py-3 px-2 font-semibold text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">epoch_start</td>
                    <td className="py-3 px-2 text-gray-300">Sui block number</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">rate</td>
                    <td className="py-3 px-2 text-gray-300">micro-SUI per millisecond</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-white font-medium">hash_lock</td>
                    <td className="py-3 px-2 text-gray-300">prevents premature close</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Checkpoint signatures clear on-chain at interval Δ; if the counter-party is offline, the last signed state finalizes. Internal tests on Sui's performance network achieved less than 240 ms round-trip latency, even with three-hop channels, keeping compute utilization high.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">8. Sovereign infrastructure and fail-over logic</h3>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              AMAI runs GPU / TPU clusters in Iceland, Oregon and Singapore, each providing:
            </p>
            
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>2 × 128-H100 GPU pods</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>40 Gbps redundant fiber to at least three Sui RPC nodes</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
                <span>99.95 percent regional SLA</span>
              </li>
            </ul>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Merkle-proof heartbeats</strong> — each inference result hash commits on-chain; mismatches trigger automatic rollback to the last good checkpoint.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              <strong>Fallback mode</strong> — if a sovereign region fails health checks, agents raise the gas ceiling by 30 percent and switch to public inference endpoints until quorum restores.
            </p>
          </div>

          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">9. Security summary</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-2 font-semibold text-white">Threat</th>
                    <th className="text-left py-3 px-2 font-semibold text-white">Mitigation</th>
                    <th className="text-left py-3 px-2 font-semibold text-white">Residual risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">PTB front-running</td>
                    <td className="py-3 px-2 text-gray-300">Hash-based bid commits and concealed gas price</td>
                    <td className="py-3 px-2 text-gray-300">Low</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">Collateral gapping</td>
                    <td className="py-3 px-2 text-gray-300">Soul-bound token revocation and slashing</td>
                    <td className="py-3 px-2 text-gray-300">Low–Medium</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-2 text-white font-medium">Consensus stall</td>
                    <td className="py-3 px-2 text-gray-300">Latency watchdog with fail-over to optimistic L2</td>
                    <td className="py-3 px-2 text-gray-300">Medium</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-white font-medium">Rogue agent swarm</td>
                    <td className="py-3 px-2 text-gray-300">On-chain ACL revokes capabilities via SBT</td>
                    <td className="py-3 px-2 text-gray-300">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default TechnicalDeepDive;