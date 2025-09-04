import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const RoadmapMilestones = () => {
  return (
    <WhitepaperLayout
      eyebrow="Timeline"
      title="Roadmap & Milestones"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src="/lovable-uploads/9d46be81-0218-437e-b5e6-8c5bfdf67f64.png" 
            alt="Roadmap & Milestones"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-white">
          <h3 className="text-xl font-semibold text-white mt-8 mb-4">2027+ — Sovereign Agent Mesh</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            AMAI evolves into a Sovereign Agent Mesh: local-first agents with encrypted personal knowledge that coordinate across a privacy-preserving mesh and orchestrate swarms. Roles like Scout, Analyst, Closer, and Sentinel operate across voice, desktop, and AR. Continuous tool use, long memory, and policy gates keep actions safe and aligned. The why: users keep custody of data, latency drops, and swarms feel like dependable teammates rather than black boxes.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Finance becomes autonomous and accountable. RWA Capital Stack Autopilot manages end-to-end deal flow across real estate, crypto, and private credit, then routes treasury, tax, and programmable risk budgets with multi-sig oversight. Swarms are treated like individuals: they onboard with legal wrappers, hold rights, sign adaptive smart agreements, and accrue reputational ledgers that unlock larger mandates. Governance and revenue rails provide a policy engine for autonomy levels, data rights, and red-team challenge, plus native billing, affiliate, subscriptions, tipping, and on-chain rev-share in the marketplace.
          </p>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mt-8">
            <p className="text-gray-300 leading-relaxed">
              Think of this phase as the moment agents stop behaving like tools and start acting like institutions. The mesh remembers, reasons, and pays its own way within clear human boundaries. We open doors only when safety, economics, and law align, so what arrives feels simple, playful, and inevitable.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default RoadmapMilestones;