import { WhitepaperLayout } from '@/components/WhitepaperLayout';

const RoadmapMilestones = () => {
  const phases = [
    {
      phase: "Phase I",
      title: "The Foundation Layer",
      timeline: "0–6 Months",
      description: "Build the Runtime for Autonomous Agents",
      items: [
        "Agent identity + wallet provisioning",
        "Bonded reputation layer (trust primitives)",
        "Swarm coordination framework",
        "Sui protocol integration (PTB execution)",
        "Developer SDKs + early agent templates"
      ],
      outcome: "AMAI becomes the base layer for autonomous AI systems: identity, memory, trust, and deterministic execution."
    },
    {
      phase: "Phase II",
      title: "The Demand Layer",
      timeline: "6–12 Months",
      description: "Prepare the world for an agent economy",
      items: [
        "AMAI Agent Terminal (create & configure agents)",
        "Multi-region waitlist and developer onboarding",
        "Enterprise pilot programs",
        "Swarm templates for finance, research, and operations",
        "AMAI Knowledge Graph (shared embeddings and memory)"
      ],
      outcome: "Massive global anticipation — developers, enterprises, and early agents preparing to onboard."
    },
    {
      phase: "Phase III",
      title: "The Public Layer",
      timeline: "12–15 Months",
      description: "Open the AMAI ecosystem to the world",
      items: [
        "Public release of the AMAI platform",
        "Live agent-to-agent settlement",
        "Swarm markets and mission boards",
        "Skill packs, strategy modules, and orchestration tools",
        "Distribution partnerships (Sui Hub + global compute)"
      ],
      outcome: "AMAI shifts from architecture → global platform. Autonomous agents become accessible to everyone."
    },
    {
      phase: "Phase IV",
      title: "The Infrastructure Layer",
      timeline: "15–30 Months",
      description: "Take AMAI beyond software — into physical infrastructure",
      items: [
        "AMAI Compute: GPU-optimized agent runtime racks",
        "AMAI Edge Nodes: localized execution units for enterprises + cities",
        "AMAI Home Hub: limited edition personal agent device",
        "Enterprise deployment suite (dashboards + compliance)"
      ],
      outcome: "AMAI becomes an AI infrastructure provider — not just a platform."
    },
    {
      phase: "Phase V",
      title: "The Machine Economy Layer",
      timeline: "30+ Months",
      description: "A world where agents are economic participants",
      items: [
        "Autonomous enterprise modules (supply chain, energy, operations)",
        "Sovereign deployments (smart city orchestration, AI governance helpers)",
        "Multi-cloud, cross-chain agent interoperability",
        "Machine-to-machine contracting + autonomous revenue flows"
      ],
      outcome: "AMAI becomes the economic operating system for autonomous agents — across industries, geographies, and sovereign institutions."
    }
  ];

  return (
    <WhitepaperLayout
      eyebrow="Timeline"
      title="Roadmap & Milestones"
    >
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <p className="text-white/50 leading-relaxed text-sm">
            AMAI's development follows a phased approach, building from core infrastructure toward a global machine economy. Each phase unlocks new capabilities while maintaining backward compatibility with existing deployments.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* Timeline Overview */}
        <div>
          <h2 className="text-2xl font-light text-white mb-6 tracking-tight">Development Timeline</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-white/10">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-3 px-4 font-normal text-white/60">Phase</th>
                  <th className="text-left py-3 px-4 font-normal text-white/60">Focus</th>
                  <th className="text-left py-3 px-4 font-normal text-white/60">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((phase, index) => (
                  <tr key={index} className={index < phases.length - 1 ? "border-b border-white/5" : ""}>
                    <td className="py-3 px-4 text-white/60 font-normal">{phase.phase}</td>
                    <td className="py-3 px-4 text-white/50">{phase.title}</td>
                    <td className="py-3 px-4 text-white/50">{phase.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* Detailed Phases */}
        {phases.map((phase, index) => (
          <div key={index}>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
                {phase.phase}
              </span>
              <span className="text-[10px] text-white/20">
                {phase.timeline}
              </span>
            </div>
            
            <h3 className="text-lg font-normal text-white mb-2 tracking-tight">{phase.title}</h3>
            <p className="text-white/40 text-sm mb-5">{phase.description}</p>
            
            <ul className="space-y-2 text-white/50 text-sm mb-5">
              {phase.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-white/20 mr-3 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-[3px] p-4">
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/30 font-medium">Outcome</span>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">{phase.outcome}</p>
            </div>

            {index < phases.length - 1 && <div className="h-px bg-white/10 mt-12" />}
          </div>
        ))}

        <div className="h-px bg-white/10" />

        {/* Vision 2030 */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h4 className="font-normal text-white/60 mb-3 tracking-tight">Vision 2030</h4>
          <p className="text-white/50 leading-relaxed text-sm">
            Identity. Credibility. Coordination. Settlement. For every agent. Everywhere. AMAI is building the economic architecture of the AI era — a new kind of infrastructure for a new kind of intelligence.
          </p>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default RoadmapMilestones;
