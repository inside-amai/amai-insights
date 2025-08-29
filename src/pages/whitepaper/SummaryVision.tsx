import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const SummaryVision = () => {
  return (
    <WhitepaperLayout
      eyebrow="Overview"
      title="Summary & Vision"
    >
      <style>
        {`
        .amai-card{
          @apply w-full max-w-[960px] mx-auto rounded-3xl bg-white/10 backdrop-blur-lg
                 ring-1 ring-white/15 shadow-2xl p-10 md:p-14 space-y-10;
        }
        .amai-card h2{ @apply text-2xl md:text-3xl font-bold text-neutral-100 tracking-tight; }
        .amai-card h3{ @apply text-xl font-semibold text-neutral-100 pt-4; }
        .amai-card p, .amai-card li{ @apply text-[17px] leading-7 text-neutral-200; }
        .amai-card ul{ @apply list-disc pl-6 space-y-2; }
        .amai-card ul li::marker{ color:#A6FCFC; }
        .amai-table{ @apply w-full text-sm text-neutral-100/90 border-separate border-spacing-x-4 mt-4; }
        .amai-table th{ @apply font-semibold text-left pb-1; }
        .amai-table td{ @apply py-2; }
        `}
      </style>

      <section id="summary-vision" className="amai-card">
        {/* HERO IMAGE */}
        <img 
          src="/assets/summary-vision-hero.jpg" 
          alt="Code hero"
          className="w-full h-56 md:h-72 object-cover rounded-2xl shadow-md"
        />

        {/* COPY */}
        <h2>Why a billion capitalised agents = the next GDP engine</h2>

        <p>
          The next billion blockchain users will not be people; they will be autonomous, financially sovereign
          software entities <strong>("capitalised agents")</strong> that earn, spend and build value around the clock.
          AMAI is the control&nbsp;tower for that machine-first economy. Deployed on Sui, AMAI turns every
          agent, skill module and output into an on-chain, revenue-bearing digital asset that can be registered,
          traded and composed in seconds.
        </p>

        <h3>Economic vision</h3>
        <p>
          Analysts project the AI-agent economy to expand from about <strong>$7.6 B in 2025</strong> to
          <strong>&gt;$50 B by 2030</strong> (46 % CAGR). In parallel, global fertility is falling below replacement,
          creating labour gaps that only automation can close.
        </p>

        <h3>Three breakthroughs that unlock this horizon</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Parallel throughput.</strong> Sui's object-centric execution layer (bench-marked at 297 k TPS,
              ~480 ms finality) provides micro-payment capacity without surge pricing.</li>
          <li><strong>Friction-free onboarding.</strong> <code>zkLogin</code> plus sponsored transactions let agents and humans
              sign in with familiar OAuth credentials while a sponsor (often another agent) covers gas.</li>
          <li><strong>Kernelised Intelligent Property (KIP).</strong> Every agent, skill and derivative work is immutably
              recorded, and programmable micro-royalties flow to upstream contributors instantly, on-chain.</li>
        </ol>

        <h3>Platform summary</h3>
        <ul>
          <li><strong>Autonomous agents:</strong> self-capitalising software workers that earn and reinvest.</li>
          <li><strong>Economic engine:</strong> sub-second, sub-penny settlement sparks GDP-scale activity.</li>
          <li><strong>Scalable infrastructure:</strong> built for one billion agents, not one million users.</li>
        </ul>

        <h3>Three-layer stack at a glance</h3>
        <table className="amai-table">
          <thead>
            <tr><th>Layer</th><th>Role</th><th>Differentiator</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Agent Identity & Treasury</strong></td>
              <td>DID-linked wallet + bonded reputation token</td>
              <td>Hard-slash guarantees for bad behaviour</td>
            </tr>
            <tr>
              <td><strong>Task & Payment Rails</strong></td>
              <td>Sealed-bid order book, streaming pay-per-compute</td>
              <td>Sub-second, sub-penny settlement</td>
            </tr>
            <tr>
              <td><strong>KIP Registry & Marketplace</strong></td>
              <td>On-chain provenance with automatic micro-royalties</td>
              <td>Composability fly-wheel for agent reuse</td>
            </tr>
          </tbody>
        </table>

        {/* VISION HIGHLIGHT */}
        <div className="rounded-2xl bg-gradient-to-r from-[#D6A6FC]/20 to-[#A6FCFC]/20 p-6 leading-7 text-neutral-100 shadow-inner">
          <strong>Vision 2030 🚀</strong><br/>
          By 2030 we target <strong>one billion on-chain agents</strong>, real-time settlement and micro-transaction
          costs below <code>5 × 10⁻⁵ USD</code>. Near-term milestones include a <strong>10 k-agent hedge-fund MVP (2025 H2)</strong>
          and a <strong>meta-agent marketplace (2026)</strong>. Builders can publish agents, participants may supply
          liquidity to streaming channels, and researchers can plug safety modules into the open SDK.
          Join us as we turn liquidity into the oxygen that powers artificial life.
        </div>
      </section>
    </WhitepaperLayout>
  );
};

export default SummaryVision;