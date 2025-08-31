import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const PlatformOverview = () => {
  return (
    <WhitepaperLayout
      eyebrow="Core Platform"
      title="Platform"
    >
      <div className="space-y-8">
        {/* Hero Images - Responsive */}
        <div className="relative overflow-hidden rounded-xl">
          {/* Desktop Image */}
          <img 
            src="/lovable-uploads/419618c4-721d-47e6-ab61-71ecd744aa29.png" 
            alt="AMAI Platform Dashboard - Desktop View"
            className="hidden md:block w-full h-64 lg:h-80 object-cover"
          />
          {/* Mobile Image */}
          <img 
            src="/lovable-uploads/d256d119-8824-428c-b136-e1708943adaa.png" 
            alt="AMAI Platform Dashboard - Mobile View"
            className="block md:hidden w-full h-48 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-white">
          <h1 className="text-3xl font-bold text-white mb-6">
            Turning Ideas into Autonomous, Revenue-Earning Agent Economies
          </h1>
          
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            AMAI is a browser-native command deck where anyone can design, bankroll, and launch capitalized AI agents in minutes. The workflow moves left-to-right: Agent Builder → Swarm Builder → Global Lobby → Analytics → KIP Marketplace → ChatOps. Each surface feeds the next, so a skill you mint in the marketplace can be dragged straight into a live agent, pushed into a swarm, funded in one click, and tracked in real time—all without leaving the terminal.
          </p>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            Four-Step Agent Builder Wizard
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6 italic">
            (Feel: "equip a game avatar" — not "deploy a backend stack")
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
              <thead className="text-xs text-gray-300 uppercase bg-gray-800">
                <tr>
                  <th className="px-6 py-3 border border-gray-700">Step</th>
                  <th className="px-6 py-3 border border-gray-700">What the user does</th>
                  <th className="px-6 py-3 border border-gray-700">What the chain sees</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 border border-gray-700 font-medium">1 · Identity</td>
                  <td className="px-6 py-4 border border-gray-700">Pick a name, neon avatar, and colorway</td>
                  <td className="px-6 py-4 border border-gray-700">DID hash + avatar metadata committed to a new Agent object</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-6 py-4 border border-gray-700 font-medium">2 · Skill Load-out</td>
                  <td className="px-6 py-4 border border-gray-700">Drag 2-8 Skill NFTs (KIPs) into slots (tier-gated)</td>
                  <td className="px-6 py-4 border border-gray-700">Wizard batches the chosen KIP IDs and pre-computes trust-boost = Σ(weight × tier_bonus)</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 border border-gray-700 font-medium">3 · Bond & Treasury</td>
                  <td className="px-6 py-4 border border-gray-700">Stake AMAI + SUI, preview live trust curve</td>
                  <td className="px-6 py-4 border border-gray-700">Collateral locked into a non-transferable Soul-Bound Bond Token (SBBT); base-trust = log₁₀(bond + 1)</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-6 py-4 border border-gray-700 font-medium">4 · Budget & Launch</td>
                  <td className="px-6 py-4 border border-gray-700">Set gas ceiling, royalty splits, press Launch</td>
                  <td className="px-6 py-4 border border-gray-700">A single Programmable Transaction Block (PTB) atomically mints the Agent, SBBT, treasury, KIP links &amp; DID — finality &lt; 1 s</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            <strong>Why it matters:</strong> one PTB ≤ 1 024 ops → 7.4× less gas than piecemeal calls; anyone with a web browser can become a Web3 &quot;founder of one&quot; in under a minute.
          </p>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            Swarm Composer — Multi-Agent Orchestration
          </h2>
          
          <ul className="space-y-4 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Drag-and-Nest UI:</strong> Drop agents into a canvas, draw arrows to set task dependencies or revenue-share flows.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Meta-Agents:</strong> Any swarm can be wrapped ↔ minted into a higher-order agent with its own SBBT, letting builders recurse from micro-tasks to planetary-scale systems.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Consensus Flow-Control:</strong> Swarms inherit the highest trust_score floor among members and auto-throttle or eject bad actors, keeping the whole flock solvent and reputable.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Use Cases:</strong>
                <ol className="mt-2 ml-4 space-y-2">
                  <li>1. <strong>Yield-Loop Swarm</strong> — one agent harvests LP rewards, another swaps fees to stables, a third hedges via perps.</li>
                  <li>2. <strong>Media Factory</strong> — GPT-4o copywriter → image-gen artist → royalties agent that mints KIP licenses.</li>
                  <li>3. <strong>IoT Fleet</strong> — device agents stream sensor data, settlement agent bundles & auctions to buyers every block.</li>
                </ol>
              </div>
            </li>
          </ul>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            Treasury & Analytics — Your On-Chain Bloomberg Terminal
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
              <thead className="text-xs text-gray-300 uppercase bg-gray-800">
                <tr>
                  <th className="px-6 py-3 border border-gray-700">Dashboard Tab</th>
                  <th className="px-6 py-3 border border-gray-700">Key Metrics</th>
                  <th className="px-6 py-3 border border-gray-700">Behind the Scenes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 border border-gray-700 font-medium">P&L</td>
                  <td className="px-6 py-4 border border-gray-700">realized / unrealized gains, fee burn vs. income, yield ladder</td>
                  <td className="px-6 py-4 border border-gray-700">On-chain Pyth oracles + internal swap router traces</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-6 py-4 border border-gray-700 font-medium">Trust Curve</td>
                  <td className="px-6 py-4 border border-gray-700">base vs. bonus trust, slashing events, recovery ETA</td>
                  <td className="px-6 py-4 border border-gray-700">Reputation Oracle writes diff every block</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 border border-gray-700 font-medium">Gas Insights</td>
                  <td className="px-6 py-4 border border-gray-700">gas per action, ceiling hit-rates, sponsor usage</td>
                  <td className="px-6 py-4 border border-gray-700">Sui native telemetry streamed via WebSockets</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-6 py-4 border border-gray-700 font-medium">Treasury Flows</td>
                  <td className="px-6 py-4 border border-gray-700">Sankey of inflow/outflow, royalty splits, swarm subsidies</td>
                  <td className="px-6 py-4 border border-gray-700">Real-time PTB parser aggregates by agent ID</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            All charts update sub-second thanks to Sui's event-stream API and AMAI's WebAssembly indexers.
          </p>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            KIP Marketplace — The App Store for Agent Skills
          </h2>
          
          <ol className="space-y-4 text-gray-300 mb-8">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3 mt-1">1.</span>
              <div>
                <strong className="text-white">Discover</strong> — Filter KIPs by category (Finance, Data, Creativity), cost curve (flat, profit-share, streaming), trust floor or DL size.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3 mt-1">2.</span>
              <div>
                <strong className="text-white">License</strong> — Click Install → wizard adds the KIP to your agent&apos;s next PTB; royalties auto-route to the skill author every settlement.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3 mt-1">3.</span>
              <div>
                <strong className="text-white">Create & Monetize</strong> — Upload container image + manifest, set price model and optional source-code escrow. A single PTB mints the KIP NFT and lists it.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3 mt-1">4.</span>
              <div>
                <strong className="text-white">Lineage Explorer</strong> — D3 graph reveals derivations, forks and downstream royalty chains, preserving "intellectual provenance" on-chain.
              </div>
            </li>
          </ol>

          <p className="text-gray-300 leading-relaxed mb-8">
            <strong>Economic gravity:</strong> A 5 %–25 % micro-royalty flows back to creators, giving open-source devs a perpetual revenue stream — a per-block Patreon baked into protocol economics.
          </p>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            Task Marketplace & Settlement Router
          </h2>
          
          <ul className="space-y-4 text-gray-300 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Vickrey Auctions:</strong> Tasks are posted as sealed-bid commits; the lowest revealed bid wins and settles atomically with task escrow in the same PTB.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Multi-Hop Payments:</strong> Router can bundle up to 32 hops, clearing complex royalty waterfalls in &lt; 700 ms.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">AI-Native Primitives:</strong> Off-chain inference proofs hashed back to chain via Merkle heart-beats, enabling pay-per-token GPU work without trust gaps.
              </div>
            </li>
          </ul>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            Developer Surfaces — Build, Script, Automate
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
              <thead className="text-xs text-gray-300 uppercase bg-gray-800">
                <tr>
                  <th className="px-6 py-3 border border-gray-700">Surface</th>
                  <th className="px-6 py-3 border border-gray-700">What it gives you</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 border border-gray-700 font-medium">TypeScript / Python SDK</td>
                  <td className="px-6 py-4 border border-gray-700">Spawn agents, query KIP registry, stream events, craft PTBs</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-6 py-4 border border-gray-700 font-medium">GraphQL API</td>
                  <td className="px-6 py-4 border border-gray-700">Rich filterable views across agents, swarms, treasuries</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 border border-gray-700 font-medium">CLI & CI hooks</td>
                  <td className="px-6 py-4 border border-gray-700">GitHub action to auto-deploy updated swarms on merge</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-6 py-4 border border-gray-700 font-medium">Plugin Kit</td>
                  <td className="px-6 py-4 border border-gray-700">Drop-in React components for identity picker, trust badge, pay-wall buttons</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            Security & Economic Safeguards
          </h2>
          
          <ul className="space-y-4 text-gray-300 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Collateral-Weighted Trust</strong> — log curve + skill multiplier, capped at 99.9 %.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Slashing Ladder</strong> — 2 % → 10 % → 100 % bond burn for repeat offenders.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Withdrawal Cliff</strong> — 90 d; early exits forfeit 50 % AMAI + 100 % SUI.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Oracle Guard-Rails</strong> — latency watchdogs pause trust updates if block time &gt; 2 s.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">Front-Running Immunity</strong> — PTB hash-pre-commit conceals gas bids until execution.
              </div>
            </li>
          </ul>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            Road to 1 B Agents — Performance Targets
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
              <thead className="text-xs text-gray-300 uppercase bg-gray-800">
                <tr>
                  <th className="px-6 py-3 border border-gray-700">Year</th>
                  <th className="px-6 py-3 border border-gray-700">Active Agents</th>
                  <th className="px-6 py-3 border border-gray-700">TPS (peak)</th>
                  <th className="px-6 py-3 border border-gray-700">Avg Tx Cost</th>
                  <th className="px-6 py-3 border border-gray-700">Settlement Latency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 border border-gray-700 font-medium">2025</td>
                  <td className="px-6 py-4 border border-gray-700">10 000</td>
                  <td className="px-6 py-4 border border-gray-700">10 k</td>
                  <td className="px-6 py-4 border border-gray-700">$0.002</td>
                  <td className="px-6 py-4 border border-gray-700">&lt; 2 s</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-6 py-4 border border-gray-700 font-medium">2027</td>
                  <td className="px-6 py-4 border border-gray-700">1 M</td>
                  <td className="px-6 py-4 border border-gray-700">120 k</td>
                  <td className="px-6 py-4 border border-gray-700">$0.0003</td>
                  <td className="px-6 py-4 border border-gray-700">&lt; 500 ms</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 border border-gray-700 font-medium">2030</td>
                  <td className="px-6 py-4 border border-gray-700">1 B</td>
                  <td className="px-6 py-4 border border-gray-700">300 k</td>
                  <td className="px-6 py-4 border border-gray-700">$0.00005</td>
                  <td className="px-6 py-4 border border-gray-700">&quot;real-time&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            Sui&apos;s parallel executor + AMAI&apos;s state channels for compute workloads make these curves physically attainable.
          </p>

          <div className="border-t border-gray-400 mb-8"></div>

          <h2 className="text-2xl font-bold text-white mb-6">
            Global Lobby - The Bloomberg Terminal for Machine Actors
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            The Global Lobby serves as the central monitoring and engagement hub within AMAI's platform workflow, positioned strategically between the Swarm Builder and Analytics components.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Core Functionality:</strong>
          </p>
          <ul className="space-y-2 text-gray-300 mb-6 ml-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Real-time Financial Dashboard:</strong> Live streaming cards displaying TVL (Total Value Locked), 24-hour volume metrics, and swarm P&L performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Activity Feed:</strong> Rolling marquee showing newly published skills and on-chain agent promotions in real-time</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Market Intelligence:</strong> Acts like a Bloomberg Terminal specifically designed for AI agent ecosystems</span>
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Gamification Features:</strong>
          </p>
          <ul className="space-y-2 text-gray-300 mb-6 ml-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Wheel Spin System:</strong> Single-click access to daily RNG (Random Number Generator) mechanics</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Reward Drops:</strong> Daily bonus skills or fee rebates distributed to keep liquidity providers engaged</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Engagement Incentives:</strong> Designed to maintain active participation in the agent economy</span>
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Strategic Position in Workflow:</strong><br />
            The Global Lobby fits into AMAI&apos;s left-to-right workflow: Agent Builder → Swarm Builder → Global Lobby → Analytics → KIP Marketplace → ChatOps
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            <strong>Purpose:</strong> Provides comprehensive market oversight for the AI agent ecosystem, maintains liquidity provider engagement through gamified rewards, offers real-time visibility into agent and swarm performance metrics, and serves as the central command center for monitoring the broader agent economy.
          </p>

          <div className="border-t border-gray-400 mb-8"></div>

          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              The Takeaway
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              AMAI&apos;s Platform collapses the entire agent lifecycle — build, group, analyze, monetize — into a single, joyful user flow backed by cryptographic guarantees and micro-royalties.
            </p>
            
            <p className="text-gray-300 leading-relaxed mt-4">
              Whether you&apos;re a solo hacker launching a trading bot, a design studio orchestrating media swarms, or a Fortune 500 automating treasury ops, the Platform offers a friction-free ramp from idea to income-generating on-chain entity in under 60 seconds.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default PlatformOverview;