import { WhitepaperLayout } from '@/components/WhitepaperLayout';

const Token = () => {
  return (
    <WhitepaperLayout
      eyebrow="Token"
      title="The AMAI Token"
    >
      <div className="space-y-12">

        {/* Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">AMAI as "Skin-in-the-Game"</h2>
            
            <p className="text-white/50 leading-relaxed text-sm">
              Every AMAI token locked into an agent is engineering collateral. The bond functions as live economic circuit-breaker: it authorizes the agent's private keys, meters its on-chain privileges, and auto-funds penalties when behavior deviates from defined SLAs. From the moment an agent (or swarm) mints its soul-bound Bond Token, every trade it executes, every PTB it submits, and every royalty it streams is underwritten by verifiable, forfeitable value.
            </p>
          </div>

          <h3 className="text-xl font-normal text-white mt-8 mb-4">Bonded Collateral — Turning Reputation into a Balance-Sheet Item</h3>
          
          <p className="text-white/60 leading-relaxed mb-4 text-sm">
            When you click Deploy in the Agent-Builder, the wizard mints a Soul-Bound Bond Token (SBBT) that escrows AMAI and a small buffer of SUI.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm border border-white/10">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-2 px-3 text-white/60 font-normal">Tier</th>
                  <th className="text-left py-2 px-3 text-white/60 font-normal">Skill Slots</th>
                  <th className="text-left py-2 px-3 text-white/60 font-normal">Base Bond (AMAI)</th>
                  <th className="text-left py-2 px-3 text-white/60 font-normal">SUI Gas Buffer</th>
                  <th className="text-left py-2 px-3 text-white/60 font-normal">PTB Fee Multiplier</th>
                </tr>
              </thead>
              <tbody className="text-white/50">
                <tr className="border-b border-white/5">
                  <td className="py-2 px-3">Common</td>
                  <td className="py-2 px-3">2</td>
                  <td className="py-2 px-3 font-normal">250</td>
                  <td className="py-2 px-3">0.5 SUI</td>
                  <td className="py-2 px-3">× 1.00</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 px-3">Rare</td>
                  <td className="py-2 px-3">4</td>
                  <td className="py-2 px-3">1 000</td>
                  <td className="py-2 px-3">1 SUI</td>
                  <td className="py-2 px-3">× 0.95</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 px-3">Epic</td>
                  <td className="py-2 px-3">6</td>
                  <td className="py-2 px-3">5 000</td>
                  <td className="py-2 px-3">2 SUI</td>
                  <td className="py-2 px-3">× 0.90</td>
                </tr>
                <tr className="border-b border-white/5">
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

          <ul className="space-y-3 text-white/50 text-sm">
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">Verified wins</strong> (task success, positive KPI deltas) add "weight" to the SBBT: BondWeight(t+1) = BondWeight(t) + √(Reward_SUI). Higher weight elevates the agent in marketplace ranking and unlocks PTB-fee rebates.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">Misconduct</strong>—oracle tampering, SLA expiry, fraud proof—triggers an on-chain slash:</span>
            </li>
          </ul>

          <ul className="space-y-2 text-white/50 ml-8 mb-6 text-sm">
            <li>• 1st strike: burn 2% of AMAI bond</li>
            <li>• 2nd strike: burn 10% + freeze new job intake 24h</li>
            <li>• 3rd strike: burn 100%, revoke tier, broadcast "rogue" flag</li>
          </ul>

          <p className="text-white/50 leading-relaxed text-sm">
            The penalty is immediate and irreversible; reputation literally costs you to lose.
          </p>

          <div className="border-t border-white/10 my-8"></div>

          <h3 className="text-xl font-normal text-white mt-8 mb-4">Withdrawal Logic — Time-Locked Skin in the Game</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm border border-white/10">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-2 px-3 text-white/60 font-normal">Action</th>
                  <th className="text-left py-2 px-3 text-white/60 font-normal">&lt; 90 days since deploy</th>
                  <th className="text-left py-2 px-3 text-white/60 font-normal">≥ 90 days since deploy</th>
                </tr>
              </thead>
              <tbody className="text-white/50">
                <tr className="border-b border-white/5">
                  <td className="py-2 px-3 font-normal">Full withdrawal</td>
                  <td className="py-2 px-3">Burns 50% AMAI, forfeits entire SUI buffer, and destroys the agent (or removes node from swarm).</td>
                  <td className="py-2 px-3">Returns 100% AMAI, refunds unused SUI, retires the agent cleanly.</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-normal">Partial top-up / rebalance</td>
                  <td className="py-2 px-3">Allowed, but resets lock timer on the adjusted amount.</td>
                  <td className="py-2 px-3">Allowed with no timer reset if net bond ≥ tier minimum.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-white/60 leading-relaxed text-sm">
            This 3-month cliff discourages mercenary liquidity and ensures agents accrue a genuine track record before funds can be extracted.
          </p>

          <div className="border-t border-white/10 my-8"></div>

          <h3 className="text-xl font-normal text-white mt-8 mb-4">Tier-Driven Capability Curve</h3>
          
          <ul className="space-y-3 text-white/50 text-sm">
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">Skill Capacity</strong> – An agent cannot equip more skills than its tier allows. Up-tiering means physically expanding its execution DAG in the Agent VM.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">Treasury Cap</strong> – Each tier sets a hard ceiling on how much SUI / stablecoins an agent may custody, capping blast radius if it is slashed.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">PTB Cost Reduction</strong> – Lower multipliers translate to thinner spreads for market-making bots or cheaper royalty splits for creative agents, giving large stakers a competitive edge.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">Marketplace Priority</strong> – Job matcher sorts by TrustScore × log(BondWeight); bigger bonds surface first.</span>
            </li>
          </ul>

          <div className="border-t border-white/10 my-8"></div>

          <h3 className="text-xl font-normal text-white mt-8 mb-4">Swarm-Level Bond Aggregation</h3>
          
          <p className="text-white/50 leading-relaxed mb-4 text-sm">
            Deploying a swarm runs the Swarm Deployment Contract which:
          </p>

          <ol className="space-y-2 text-white/50 ml-6 mb-4 text-sm">
            <li>1. Sums member-agent bond weights.</li>
            <li>2. Requires combined weight ≥ Legendary threshold × number of nodes.</li>
            <li>3. Mints a Cluster-SBBT that inherits slashing rules but burns proportionally across members—bad actors harm the whole hive.</li>
          </ol>

          <p className="text-white/50 leading-relaxed text-sm">
            Edges and hops in the swarm pay a micro-tax (0.05%) into an insurance pool that backstops catastrophic slash events.
          </p>

          <div className="border-t border-white/10 my-8"></div>

          <h3 className="text-xl font-normal text-white mt-8 mb-4">Why It Matters</h3>
          
          <ul className="space-y-3 text-white/50 text-sm">
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">Economic Safety Net</strong> – Real capital guarantees that rogue code can't rampage for free.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">Anti-Sybil Defense</strong> – High-tier privileges are expensive to spoof, keeping marketplaces signal-rich.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3 mt-1">•</span>
              <span><strong className="text-white/60 font-normal">Yield Flywheel</strong> – Bonded AMAI is non-inflationary demand; slashed AMAI is permanently destroyed, tightening supply and rewarding good behaviour.</span>
            </li>
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-6">
            <p className="text-white/50 leading-relaxed text-sm">
              In short, AMAI bonds align every incentive: developers, liquidity providers, and end-users all win when agents win, and everyone bleeds when an agent cheats. That is skin-in-the-game at protocol speed.
            </p>
          </div>

          <div className="border-t border-white/10 my-8"></div>

          <h2 className="text-2xl font-light text-white mb-4">Compliance Framework</h2>
          
          <p className="text-white/50 leading-relaxed text-sm">
            Ensuring that a billion autonomous agents stay on the right side of global law is as important as writing great code. AMAI's compliance stack is therefore engineered into the protocol at every layer, from wallet creation to royalty payout, so builders can innovate without stumbling over downstream legal surprises.
          </p>

          <div className="border-t border-white/10 my-8"></div>

          <h3 className="text-xl font-normal text-white mt-8 mb-4">Summary</h3>
          
          <p className="text-white/50 leading-relaxed mb-6 text-sm">
            Compliance is bolted into the tokenomics, the Bond contract, the KIP registry, and the PTB execution path. By combining real economic skin-in-the-game with transparent, on-chain audit logs and opt-in regulatory modules, AMAI offers builders the freedom to innovate and the tooling to operate within any jurisdiction's ruleset.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-6">
            <p className="text-white/50 leading-relaxed text-sm">
              In short, the protocol converts legal obligation into programmable logic, so that a trillion-dollar machine economy can scale without legal dead-ends.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default Token;
