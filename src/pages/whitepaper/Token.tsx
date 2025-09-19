import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import tokenChart from '@/assets/token-chart.jpg';

const Token = () => {
  return (
    <WhitepaperLayout
      eyebrow="Token"
      title="The AMAI Token"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src="/lovable-uploads/5ded7f85-a62b-4a83-a75b-848ed5bf0d02.png" 
            alt="Token, Governance & Risk"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-white">
          <h2 className="text-2xl font-bold text-white mb-4">AMAI as "Skin-in-the-Game"</h2>
          
          <p className="text-gray-300 leading-relaxed">
            Every AMAI token locked into an agent is engineering collateral. The bond functions as live economic circuit-breaker: it authorizes the agent's private keys, meters its on-chain privileges, and auto-funds penalties when behavior deviates from defined SLAs. From the moment an agent (or swarm) mints its soul-bound Bond Token, every trade it executes, every PTB it submits, and every royalty it streams is underwritten by verifiable, forfeitable value.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Bonded Collateral — Turning Reputation into a Balance-Sheet Item</h3>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            When you click Deploy in the Agent-Builder, the wizard mints a Soul-Bound Bond Token (SBBT) that escrows AMAI and a small buffer of SUI.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-3 text-white font-semibold">Tier</th>
                  <th className="text-left py-2 px-3 text-white font-semibold">Skill Slots</th>
                  <th className="text-left py-2 px-3 text-white font-semibold">Base Bond (AMAI)</th>
                  <th className="text-left py-2 px-3 text-white font-semibold">SUI Gas Buffer</th>
                  <th className="text-left py-2 px-3 text-white font-semibold">PTB Fee Multiplier</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-3">Common</td>
                  <td className="py-2 px-3">2</td>
                  <td className="py-2 px-3 font-bold">250</td>
                  <td className="py-2 px-3">0.5 SUI</td>
                  <td className="py-2 px-3">× 1.00</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-3">Rare</td>
                  <td className="py-2 px-3">4</td>
                  <td className="py-2 px-3">1 000</td>
                  <td className="py-2 px-3">1 SUI</td>
                  <td className="py-2 px-3">× 0.95</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-3">Epic</td>
                  <td className="py-2 px-3">6</td>
                  <td className="py-2 px-3">5 000</td>
                  <td className="py-2 px-3">2 SUI</td>
                  <td className="py-2 px-3">× 0.90</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-3">Legendary</td>
                  <td className="py-2 px-3">8</td>
                  <td className="py-2 px-3">25 000</td>
                  <td className="py-2 px-3">5 SUI</td>
                  <td className="py-2 px-3">× 0.85</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Mythic</td>
                  <td className="py-2 px-3">10</td>
                  <td className="py-2 px-3">100 000</td>
                  <td className="py-2 px-3">10 SUI</td>
                  <td className="py-2 px-3">× 0.80</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Verified wins</strong> (task success, positive KPI deltas) add "weight" to the SBBT: BondWeight(t+1) = BondWeight(t) + √(Reward_SUI). Higher weight elevates the agent in marketplace ranking and unlocks PTB-fee rebates.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Misconduct</strong>—oracle tampering, SLA expiry, fraud proof—triggers an on-chain slash:</span>
            </li>
          </ul>

          <ul className="space-y-2 text-gray-300 ml-8 mb-6">
            <li>• 1st strike: burn 2% of AMAI bond</li>
            <li>• 2nd strike: burn 10% + freeze new job intake 24h</li>
            <li>• 3rd strike: burn 100%, revoke tier, broadcast "rogue" flag</li>
          </ul>

          <p className="text-gray-300 leading-relaxed">
            The penalty is immediate and irreversible; reputation literally costs you to lose.
          </p>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Withdrawal Logic — Time-Locked Skin in the Game</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-3 text-white font-semibold">Action</th>
                  <th className="text-left py-2 px-3 text-white font-semibold">&lt; 90 days since deploy</th>
                  <th className="text-left py-2 px-3 text-white font-semibold">≥ 90 days since deploy</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-3 font-semibold">Full withdrawal</td>
                  <td className="py-2 px-3">Burns 50% AMAI, forfeits entire SUI buffer, and destroys the agent (or removes node from swarm).</td>
                  <td className="py-2 px-3">Returns 100% AMAI, refunds unused SUI, retires the agent cleanly.</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold">Partial top-up / rebalance</td>
                  <td className="py-2 px-3">Allowed, but resets lock timer on the adjusted amount.</td>
                  <td className="py-2 px-3">Allowed with no timer reset if net bond ≥ tier minimum.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed">
            This 3-month cliff discourages mercenary liquidity and ensures agents accrue a genuine track record before funds can be extracted.
          </p>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Tier-Driven Capability Curve</h3>
          
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Skill Capacity</strong> – An agent cannot equip more skills than its tier allows. Up-tiering means physically expanding its execution DAG in the Agent VM.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Treasury Cap</strong> – Each tier sets a hard ceiling on how much SUI / stablecoins an agent may custody, capping blast radius if it is slashed.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>PTB Cost Reduction</strong> – Lower multipliers translate to thinner spreads for market-making bots or cheaper royalty splits for creative agents, giving large stakers a competitive edge.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Marketplace Priority</strong> – Job matcher sorts by TrustScore × log(BondWeight); bigger bonds surface first.</span>
            </li>
          </ul>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Swarm-Level Bond Aggregation</h3>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            Deploying a swarm runs the Swarm Deployment Contract which:
          </p>

          <ol className="space-y-2 text-gray-300 ml-6 mb-4">
            <li>1. Sums member-agent bond weights.</li>
            <li>2. Requires combined weight ≥ Legendary threshold × number of nodes.</li>
            <li>3. Mints a Cluster-SBBT that inherits slashing rules but burns proportionally across members—bad actors harm the whole hive.</li>
          </ol>

          <p className="text-gray-300 leading-relaxed">
            Edges and hops in the swarm pay a micro-tax (0.05%) into an insurance pool that backstops catastrophic slash events.
          </p>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Why It Matters</h3>
          
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Economic Safety Net</strong> – Real capital guarantees that rogue code can't rampage for free.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Anti-Sybil Defense</strong> – High-tier privileges are expensive to spoof, keeping marketplaces signal-rich.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Yield Flywheel</strong> – Bonded AMAI is non-inflationary demand; slashed AMAI is permanently destroyed, tightening supply and rewarding good behaviour.</span>
            </li>
          </ul>

          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 mt-6">
            <p className="text-gray-300 leading-relaxed">
              In short, AMAI bonds align every incentive: developers, liquidity providers, and end-users all win when agents win, and everyone bleeds when an agent cheats. That is skin-in-the-game at protocol speed.
            </p>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          <h2 className="text-2xl font-bold text-white mb-4">Compliance Framework</h2>
          
          <p className="text-gray-300 leading-relaxed">
            Ensuring that a billion autonomous agents stay on the right side of global law is as important as writing great code.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            AMAI's compliance stack is therefore engineered into the protocol at every layer, from wallet creation to royalty payout, so builders can innovate without stumbling over downstream legal surprises.
          </p>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Regulatory Posture</h3>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Domain</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Primary Statutes & Guidance</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">AMAI Design Response</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm">
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Digital-asset securities</td>
                  <td className="border border-gray-600 p-3">• U.S. SEC Framework for "Investment Contract" (Howey)<br/>• ESMA MiCA utility-token carve-outs</td>
                  <td className="border border-gray-600 p-3">Utility-only AMAI token (no dividends or protocol-fee share), full functionality at T₀ launch, and capped treasury voting rights → positions AMAI outside the "expectation-of-profit-via-others" prong.</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Money-transmission & AML</td>
                  <td className="border border-gray-600 p-3">• FinCEN Travel Rule<br/>• FATF Virtual-Asset Guidance</td>
                  <td className="border border-gray-600 p-3">All PTBs record sender/receiver Sui addresses on-chain; optional KYT hooks integrate with Chainalysis & TRM scanners; zkLogin preserves user privacy while still allowing address-risk scoring.</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">AI liability & safety</td>
                  <td className="border border-gray-600 p-3">• EU Artificial Intelligence Act (High-Risk AI)<br/>• OECD AI Principles</td>
                  <td className="border border-gray-600 p-3">Agents embed verifiable logic hashes (Wasmtime + Merkle heartbeats). Bonded collateral and slashing pool satisfy "financial accountability" requirement in Article 9.</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">IP & copyright</td>
                  <td className="border border-gray-600 p-3">• DMCA takedown procedure<br/>• Creative Commons licenses</td>
                  <td className="border border-gray-600 p-3">Kernelized Intelligent Property (KIP) registry stores only the SHA-256 hash + license; takedown freezes royalty routing within 30 min; arbitration module can reroute royalties post-dispute.</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Data protection & privacy</td>
                  <td className="border border-gray-600 p-3">• GDPR Art. 17 (right to erasure)<br/>• California CPRA</td>
                  <td className="border border-gray-600 p-3">zkLogin keeps PII off-chain; user-requested account burn zeroes wallet metadata and scrubs Supabase profile row while preserving economic history for audit.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Token-Level Safeguards</h3>
          
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Bonded Collateral</strong> — every agent or swarm mints a soul-bound Bond Token that escrows AMAI and SUI. Misconduct slashes the pool; voluntary early exit (&lt; 90 days) forfeits 50 % AMAI + 100 % SUI, deleting the agent's DID.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Tier-Based Limits</strong> — higher tiers require larger bonds and impose bigger maximum loss-of-stake, satisfying proportional-risk guidelines in several jurisdictions.</span>
            </li>
          </ul>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Tier</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Min Bond (AMAI)</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Min Bond (SUI)</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Skill Slots</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">PTB Fee Multiplier</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Lock-up</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm">
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Common</td>
                  <td className="border border-gray-600 p-3">250</td>
                  <td className="border border-gray-600 p-3">25</td>
                  <td className="border border-gray-600 p-3">2</td>
                  <td className="border border-gray-600 p-3">×1.00</td>
                  <td className="border border-gray-600 p-3">90 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Rare</td>
                  <td className="border border-gray-600 p-3">750</td>
                  <td className="border border-gray-600 p-3">75</td>
                  <td className="border border-gray-600 p-3">4</td>
                  <td className="border border-gray-600 p-3">×0.85</td>
                  <td className="border border-gray-600 p-3">90 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Epic</td>
                  <td className="border border-gray-600 p-3">2 500</td>
                  <td className="border border-gray-600 p-3">150</td>
                  <td className="border border-gray-600 p-3">6</td>
                  <td className="border border-gray-600 p-3">×0.70</td>
                  <td className="border border-gray-600 p-3">90 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Legendary</td>
                  <td className="border border-gray-600 p-3">10 000</td>
                  <td className="border border-gray-600 p-3">400</td>
                  <td className="border border-gray-600 p-3">8</td>
                  <td className="border border-gray-600 p-3">×0.55</td>
                  <td className="border border-gray-600 p-3">90 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Mythic*</td>
                  <td className="border border-gray-600 p-3">50 000</td>
                  <td className="border border-gray-600 p-3">1 000</td>
                  <td className="border border-gray-600 p-3">10</td>
                  <td className="border border-gray-600 p-3">×0.40</td>
                  <td className="border border-gray-600 p-3">180 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 text-sm italic mb-8">
            *Mythic bonds cannot be withdrawn; slashing is the only exit, aligning with "critical service provider" standards.
          </p>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">On-Chain Audit & Forensics</h3>
          
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Deterministic Logs</strong> — every agent execution emits a TaskResult event with gas used, external calls, and final hash.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Merkle Heartbeats</strong> — sovereign GPU clusters pin inference digests on-chain every 5 s; discrepancies trip an auto-pause circuit-breaker.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Line-age Graph</strong> — KIP ancestry and royalty flows are queryable via a public GraphQL endpoint, providing provable provenance for regulators and rights-holders.</span>
            </li>
          </ul>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">KYC / KYT Optionality</h3>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            Developers can flag a swarm or marketplace listing as:
          </p>
          
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Open</strong> — permissionless, purely on-chain risk scoring.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>KYC-Required</strong> — wallets must present an on-chain credential (e.g., Polygon ID or Sui zkAttest) before interaction.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Jurisdiction-Restricted</strong> — contract geofences OFAC or UN-sanctioned regions at the bytecode level.</span>
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed mt-4">
            This opt-in model keeps the base layer trust-minimised while allowing verticals—such as regulated DeFi or real-world-asset agents—to comply with local rules.
          </p>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Audit & Governance Loops</h3>
          
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Triple-Audit Cycle</strong> — every major Move release passes Quantstamp → Trail of Bits → OtterSec, plus open-bug bounty (USD $2 M cap).</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Circuit-Breaker DAO</strong> — AMAI token-holders can pause a contract by ⅔ super-majority for 72 h, granting time for patch deployment.</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Real-Time Metrics</strong> — oracle lag &gt; 120 s, PTB failure &gt; 3 % or TVL drawdown &gt; 15 % in 10 min all auto-page core maintainers via PagerDuty.</span>
            </li>
          </ul>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Global Harmonisation Roadmap</h3>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Milestone</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Region</th>
                  <th className="border border-gray-600 p-3 text-left text-white font-semibold">Outcome</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm">
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Q1 2026</td>
                  <td className="border border-gray-600 p-3">EU</td>
                  <td className="border border-gray-600 p-3">Complete AI-Act conformity assessment via accredited Notified Body.</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Q2 2026</td>
                  <td className="border border-gray-600 p-3">U.S.</td>
                  <td className="border border-gray-600 p-3">No-action letter request to SEC, citing utility-only token & functional network.</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">Q4 2026</td>
                  <td className="border border-gray-600 p-3">APAC</td>
                  <td className="border border-gray-600 p-3">MAS Sandbox Express entry for agent-managed DeFi strategies.</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 font-medium">2027+</td>
                  <td className="border border-gray-600 p-3">Global</td>
                  <td className="border border-gray-600 p-3">ISO/IEC 42001-style certification for AI management systems once standard finalises.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Summary</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Compliance is bolted into the tokenomics, the Bond contract, the KIP registry, and the PTB execution path. By combining real economic skin-in-the-game with transparent, on-chain audit logs and opt-in regulatory modules, AMAI offers builders the freedom to innovate and the tooling to operate within any jurisdiction's ruleset.
          </p>

          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 mt-6">
            <p className="text-gray-300 leading-relaxed">
              In short, the protocol converts legal obligation into programmable logic, so that a trillion-dollar machine economy can scale without legal dead-ends.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default Token;