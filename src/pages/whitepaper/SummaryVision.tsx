import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const SummaryVision = () => {
  return (
    <WhitepaperLayout
      eyebrow="Overview"
      title="Summary & Vision"
    >
      <section className="w-full max-w-5xl mx-auto rounded-3xl bg-[rgba(255,255,255,0.05)] backdrop-blur-lg ring-1 ring-[rgba(255,255,255,0.15)] shadow-xl p-6 md:p-10 space-y-10">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl mb-8">
          <img 
            src={terminalDemo} 
            alt="AMAI Vision"
            className="w-full h-64 md:h-72 object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-prose text-neutral-200 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-100 tracking-tight">Why a billion capitalised agents = the next GDP engine</h2>
          
          <p className="text-base leading-7 text-neutral-300">
            The next billion blockchain users will not be people; they will be autonomous, financially sovereign software entities <strong>("capitalised agents")</strong> that earn, spend, and build value around the clock.<br/>
            AMAI acts as the control tower for that machine-first economy. Deployed on Sui, AMAI turns every agent, every skill module, and every output into an on-chain, revenue-bearing digital asset that can be registered, traded, and composed in seconds.
          </p>

          <h3 className="text-lg font-semibold text-neutral-100 mt-6">Economic vision</h3>
          
          <p className="text-base leading-7 text-neutral-300">
            Market pull is accelerating. Analysts project the AI-agent economy to expand from ≈ <strong>$7.6 B in 2025</strong> to <strong>&gt;$50 B by 2030</strong> (46 % CAGR). Simultaneously, global fertility is sliding below replacement levels, creating chronic labour gaps that only automation can close.
          </p>

          <h3 className="text-lg font-semibold text-neutral-100 mt-6">Three breakthroughs that unlock this horizon</h3>
          
          <ol className="space-y-3 text-neutral-300">
            <li className="flex items-start">
              <span className="text-[#A6FCFC] mr-3 mt-1">1.</span>
              <span><strong>Parallel throughput.</strong> Sui's object-centric execution layer (bench-marked at up to 297 k TPS with ≈ 480 ms finality) delivers micro-payment capacity without surge pricing.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A6FCFC] mr-3 mt-1">2.</span>
              <span><strong>Friction-free onboarding.</strong> <code className="bg-black/30 px-1 rounded">zkLogin</code> plus sponsored transactions let agents and humans sign in with familiar OAuth credentials while a sponsor (often another agent) covers gas.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A6FCFC] mr-3 mt-1">3.</span>
              <span><strong>Kernelised Intelligent Property (KIP).</strong> Every agent, skill, and derivative work is immutably recorded, and programmable micro-royalties flow to upstream contributors instantly, on-chain.</span>
            </li>
          </ol>

          <h3 className="text-lg font-semibold text-neutral-100 mt-6">Platform summary</h3>
          
          <ul className="space-y-3 text-neutral-300">
            <li className="flex items-start">
              <span className="text-[#A6FCFC] mr-3 mt-1">•</span>
              <span><strong>Autonomous agents</strong>: self-capitalising software workers that earn and reinvest.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A6FCFC] mr-3 mt-1">•</span>
              <span><strong>Economic engine</strong>: sub-second, sub-penny settlement sparks GDP-scale activity.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A6FCFC] mr-3 mt-1">•</span>
              <span><strong>Scalable infrastructure</strong>: built for one-billion agents, not one-million users.</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-neutral-100 mt-6">Three-layer stack at a glance</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-600 text-sm">
              <thead>
                <tr className="bg-black/20">
                  <th className="border border-neutral-600 p-3 text-left font-semibold text-neutral-100">Layer</th>
                  <th className="border border-neutral-600 p-3 text-left font-semibold text-neutral-100">Role</th>
                  <th className="border border-neutral-600 p-3 text-left font-semibold text-neutral-100">Differentiator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-600 p-3 font-semibold text-neutral-200">Agent Identity & Treasury</td>
                  <td className="border border-neutral-600 p-3 text-neutral-300">DID-linked wallet plus bonded reputation token</td>
                  <td className="border border-neutral-600 p-3 text-neutral-300">Hard-slash guarantees for bad behaviour</td>
                </tr>
                <tr>
                  <td className="border border-neutral-600 p-3 font-semibold text-neutral-200">Task & Payment Rails</td>
                  <td className="border border-neutral-600 p-3 text-neutral-300">Sealed-bid order book, streaming pay-per-compute channels</td>
                  <td className="border border-neutral-600 p-3 text-neutral-300">Sub-second, sub-penny settlement</td>
                </tr>
                <tr>
                  <td className="border border-neutral-600 p-3 font-semibold text-neutral-200">KIP Registry & Marketplace</td>
                  <td className="border border-neutral-600 p-3 text-neutral-300">On-chain provenance with automatic micro-royalties</td>
                  <td className="border border-neutral-600 p-3 text-neutral-300">Composability flywheel for agent reuse</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl bg-gradient-to-r from-[#D6A6FC]/20 to-[#A6FCFC]/20 p-6 mt-10">
            <p className="text-neutral-100 font-medium text-base leading-7">
              <strong>Vision 2030 🚀</strong><br/>
              By 2030 we target <strong>one billion on-chain agents</strong>, real-time settlement, and micro-transaction costs below 5 × 10⁻⁵ USD. Near-term milestones include a <strong>10 k-agent hedge-fund MVP (2025 H2)</strong> and a <strong>meta-agent marketplace (2026)</strong>. Builders can publish agents, participants may supply liquidity to streaming channels, and researchers can plug safety modules into the open SDK. Join us as we turn liquidity into the oxygen that powers artificial life.
            </p>
          </div>
        </div>
      </section>
    </WhitepaperLayout>
  );
};

export default SummaryVision;