import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const RoadmapMilestones = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const phases = [
    {
      title: "The Foundation Layer",
      subtitle: "Phase I — Core Infrastructure",
      timeline: "0–6 Months",
      items: [
        "Agent identity + wallet provisioning",
        "Bonded reputation layer (trust primitives)",
        "Swarm coordination framework",
        "Sui protocol integration (PTB execution)",
        "Developer SDKs + early agent templates"
      ],
      outcome: "AMAI becomes the base layer for autonomous AI systems: identity, memory, trust, and deterministic execution.",
      background: "linear-gradient(to bottom, hsl(0 0% 100%), hsl(0 0% 40%))",
      meshOpacity: 0.1
    },
    {
      title: "The Demand Layer",
      subtitle: "Phase II — Global Early Access",
      timeline: "6–12 Months",
      items: [
        "AMAI Agent Terminal (create & configure agents)",
        "Multi-region waitlist and developer onboarding",
        "Enterprise pilot programs",
        "Swarm templates for finance, research, and operations",
        "AMAI Knowledge Graph (shared embeddings and memory)"
      ],
      outcome: "Massive global anticipation — developers, enterprises, and early agents preparing to onboard.",
      background: "linear-gradient(to bottom, hsl(0 0% 10%), hsl(0 0% 20%))",
      showSilhouettes: true
    },
    {
      title: "The Public Layer",
      subtitle: "Phase III — Platform Launch",
      timeline: "12–15 Months",
      items: [
        "Public release of the AMAI platform",
        "Live agent-to-agent settlement",
        "Swarm markets and mission boards",
        "Skill packs, strategy modules, and orchestration tools",
        "Distribution partnerships (Sui Hub + global compute)"
      ],
      outcome: "AMAI shifts from architecture → global platform. Autonomous agents become accessible to everyone.",
      background: "hsl(0 0% 100%)",
      showFloatingUI: true
    },
    {
      title: "The Infrastructure Layer",
      subtitle: "Phase IV — Compute & Edge Expansion",
      timeline: "15–30 Months",
      items: [
        "AMAI Compute: GPU-optimized agent runtime racks",
        "AMAI Edge Nodes: localized execution units for enterprises + cities",
        "AMAI Home Hub: limited edition personal agent device",
        "Enterprise deployment suite (dashboards + compliance)"
      ],
      outcome: "AMAI becomes an AI infrastructure provider — not just a platform.",
      background: "hsl(0 0% 0%)",
      showHardware: true
    },
    {
      title: "The Machine Economy Layer",
      subtitle: "Phase V — Global Machine Economy",
      timeline: "30+ Months",
      items: [
        "Autonomous enterprise modules (supply chain, energy, operations)",
        "Sovereign deployments (smart city orchestration, AI governance helpers)",
        "Multi-cloud, cross-chain agent interoperability",
        "Machine-to-machine contracting + autonomous revenue flows"
      ],
      outcome: "AMAI becomes the economic operating system for autonomous agents — across industries, geographies, and sovereign institutions.",
      background: "linear-gradient(to bottom, hsl(0 0% 5%), hsl(0 0% 15%))",
      showOrb: true
    },
    {
      title: "Vision Slide",
      subtitle: "AMAI is building the economic architecture of the AI era.",
      timeline: "",
      items: [],
      outcome: "Identity. Credibility. Coordination. Settlement. For every agent. Everywhere.",
      outro: "A new kind of infrastructure — for a new kind of intelligence.",
      background: "linear-gradient(to bottom, hsl(0 0% 0%), hsl(0 0% 10%))",
      isVision: true
    }
  ];

  return (
    <div ref={containerRef} className="bg-background">
      {/* Hero Title */}
      <div className="min-h-screen flex items-center justify-center sticky top-0">
        <motion.div 
          className="text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
            AMAI Roadmap
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Apple-Style Sliding Panels
          </p>
          <p className="text-base md:text-lg text-muted-foreground mt-2">
            Scroll → Each Phase Slides Into View With Smooth Motion + Parallax
          </p>
        </motion.div>
      </div>

      {/* Panels */}
      {phases.map((phase, index) => (
        <RoadmapPanel 
          key={index} 
          phase={phase} 
          index={index}
          totalPanels={phases.length}
        />
      ))}
    </div>
  );
};

interface Phase {
  title: string;
  subtitle: string;
  timeline: string;
  items: string[];
  outcome: string;
  outro?: string;
  background: string;
  meshOpacity?: number;
  showSilhouettes?: boolean;
  showFloatingUI?: boolean;
  showHardware?: boolean;
  showOrb?: boolean;
  isVision?: boolean;
}

const RoadmapPanel = ({ 
  phase, 
  index,
  totalPanels 
}: { 
  phase: Phase; 
  index: number;
  totalPanels: number;
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const textColor = index === 2 || index === 0 ? "text-gray-900" : "text-white";
  const isDark = index !== 2 && index !== 0;

  return (
    <motion.div
      ref={panelRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background: phase.background,
      }}
    >
      {/* Background Effects */}
      {phase.meshOpacity && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      )}

      {phase.showSilhouettes && (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 rounded-full bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {phase.showFloatingUI && (
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-24 border-2 border-gray-400 rounded-lg"
              style={{
                left: `${20 + (i % 4) * 20}%`,
                top: `${20 + Math.floor(i / 4) * 40}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {phase.showHardware && (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <motion.div
            className="w-64 h-48 bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </div>
      )}

      {phase.showOrb && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-96 h-96 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, hsl(var(--cyan-accent)), hsl(var(--purple-accent)))',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/50"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: Math.cos((i / 20) * Math.PI * 2) * 200,
                y: Math.sin((i / 20) * Math.PI * 2) * 200,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {phase.isVision && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            {/* AMAI Butterfly - using gradient colors */}
            <div 
              className="w-32 h-32 rounded-full opacity-60"
              style={{
                background: 'radial-gradient(circle, hsl(var(--cyan-accent)) 0%, hsl(var(--purple-accent)) 100%)',
                filter: 'blur(20px)',
              }}
            />
          </motion.div>
        </div>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 py-20"
        style={{ y, opacity, scale }}
      >
        {!phase.isVision ? (
          <>
            <motion.div className="mb-12 text-center">
              <h2 className={`text-5xl md:text-7xl font-bold ${textColor} mb-4`}>
                {phase.title}
              </h2>
              <p className={`text-2xl md:text-3xl font-semibold ${textColor} mb-2`}>
                {phase.subtitle}
              </p>
              {phase.timeline && (
                <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {phase.timeline}
                </p>
              )}
            </motion.div>

            {phase.items.length > 0 && (
              <div className="mb-12 space-y-4">
                <h3 className={`text-xl font-semibold ${textColor} mb-6`}>
                  Build the Runtime for Autonomous Agents
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} flex items-start`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={`mr-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <motion.div 
              className={`text-lg md:text-xl font-semibold ${textColor} p-6 rounded-2xl ${
                isDark ? 'bg-white/5' : 'bg-gray-900/5'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className={`block mb-2 text-sm font-normal ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Outcome:
              </span>
              {phase.outcome}
            </motion.div>
          </>
        ) : (
          <div className="text-center space-y-8">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {phase.subtitle}
            </motion.h2>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {phase.outcome}
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {phase.outro}
            </motion.p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default RoadmapMilestones;