import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const RoadmapMilestones = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const phases = [
    {
      title: "The Foundation Layer",
      subtitle: "Phase I — Core Infrastructure",
      timeline: "0–6 Months",
      sectionTitle: "Build the Runtime for Autonomous Agents",
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
      sectionTitle: "Prepare the world for an agent economy",
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
      sectionTitle: "Open the AMAI ecosystem to the world",
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
      sectionTitle: "Take AMAI beyond software — into physical infrastructure",
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
      sectionTitle: "A world where agents are economic participants",
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
      sectionTitle: "",
      items: [],
      outcome: "Identity. Credibility. Coordination. Settlement. For every agent. Everywhere.",
      outro: "A new kind of infrastructure — for a new kind of intelligence.",
      background: "linear-gradient(to bottom, hsl(0 0% 0%), hsl(0 0% 10%))",
      isVision: true,
      showButterfly: true
    }
  ];

  return (
    <div ref={containerRef} className="bg-background relative">
      {/* Progress Indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {phases.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const element = document.getElementById(`phase-${index}`);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative"
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activePhase === index 
                  ? 'bg-cyan-accent scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              whileHover={{ scale: 1.5 }}
            />
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {index < phases.length - 1 ? `Phase ${index + 1}` : 'Vision'}
            </span>
          </button>
        ))}
      </div>

      {/* Hero Title */}
      <div className="min-h-screen flex flex-col items-center justify-center sticky top-0">
        <motion.div 
          className="text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 shimmer-text">
            AMAI Roadmap
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Scroll to explore each phase as it slides into view with smooth motion and parallax effects
          </p>
        </motion.div>
        
        <motion.div
          className="absolute bottom-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </div>

      {/* Panels */}
      {phases.map((phase, index) => (
        <RoadmapPanel 
          key={index} 
          phase={phase} 
          index={index}
          totalPanels={phases.length}
          setActivePhase={setActivePhase}
        />
      ))}
    </div>
  );
};

interface Phase {
  title: string;
  subtitle: string;
  timeline: string;
  sectionTitle: string;
  items: string[];
  outcome: string;
  outro?: string;
  background: string;
  meshOpacity?: number;
  showSilhouettes?: boolean;
  showFloatingUI?: boolean;
  showHardware?: boolean;
  showOrb?: boolean;
  showButterfly?: boolean;
  isVision?: boolean;
}

const RoadmapPanel = ({ 
  phase, 
  index,
  totalPanels,
  setActivePhase
}: { 
  phase: Phase; 
  index: number;
  totalPanels: number;
  setActivePhase: (index: number) => void;
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.3 && latest < 0.7) {
        setActivePhase(index);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, index, setActivePhase]);

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const textColor = index === 2 || index === 0 ? "text-gray-900" : "text-white";
  const isDark = index !== 2 && index !== 0;

  return (
    <motion.div
      id={`phase-${index}`}
      ref={panelRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background: phase.background,
      }}
    >
      {/* Phase Number Badge */}
      {!phase.isVision && (
        <motion.div 
          className="absolute top-8 right-8 text-6xl md:text-8xl font-bold opacity-5 select-none"
          style={{ y }}
        >
          0{index + 1}
        </motion.div>
      )}

      {/* Background Effects */}
      {phase.meshOpacity && (
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(100, 100, 100, .3) 25%, rgba(100, 100, 100, .3) 26%, transparent 27%, transparent 74%, rgba(100, 100, 100, .3) 75%, rgba(100, 100, 100, .3) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(100, 100, 100, .3) 25%, rgba(100, 100, 100, .3) 26%, transparent 27%, transparent 74%, rgba(100, 100, 100, .3) 75%, rgba(100, 100, 100, .3) 76%, transparent 77%, transparent)
              `,
              backgroundSize: '80px 80px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '80px 80px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          {/* Pulsing grid points */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-600 rounded-full"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 33}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}

      {phase.showSilhouettes && (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <svg className="absolute w-full h-full">
            {[...Array(50)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              return (
                <motion.line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              );
            })}
          </svg>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/40"
              style={{
                width: 8 + Math.random() * 16,
                height: 8 + Math.random() * 16,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {phase.showFloatingUI && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-200/5 backdrop-blur-sm border border-gray-400/20 rounded-2xl shadow-2xl overflow-hidden"
              style={{
                width: 120 + Math.random() * 80,
                height: 80 + Math.random() * 60,
                left: `${10 + (i % 4) * 25}%`,
                top: `${15 + Math.floor(i / 4) * 30}%`,
                transform: `perspective(1000px) rotateX(${Math.random() * 10 - 5}deg) rotateY(${Math.random() * 10 - 5}deg)`,
              }}
              animate={{
                y: [0, -20 - Math.random() * 10, 0],
                rotateX: [0, Math.random() * 5, 0],
                rotateY: [0, Math.random() * 5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              {/* Simulated UI elements inside cards */}
              <div className="p-3 space-y-2">
                <div className="h-2 bg-gray-400/30 rounded w-3/4" />
                <div className="h-2 bg-gray-400/20 rounded w-1/2" />
                <div className="h-2 bg-gray-400/20 rounded w-2/3" />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {phase.showHardware && (
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            {/* Main hardware body - sleek Mac Studio inspired */}
            <div className="w-80 h-64 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-3xl relative overflow-hidden shadow-2xl">
              {/* Top rim light */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60" />
              
              {/* Side rim lights */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-40" />
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-40" />
              
              {/* Ventilation pattern */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-gray-600/60" />
                ))}
              </div>
              
              {/* Status indicator */}
              <motion.div 
                className="absolute top-6 right-6 w-2 h-2 rounded-full bg-cyan-400"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              {/* Subtle glow from bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      )}

      {phase.showOrb && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central glowing orb */}
          <motion.div
            className="relative w-96 h-96"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Main orb */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-40"
              style={{
                background: 'radial-gradient(circle, hsl(var(--cyan-accent)) 0%, hsl(var(--purple-accent)) 50%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            {/* Gradient rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 rounded-full border-2 opacity-20"
                style={{
                  borderColor: ring % 2 === 0 ? 'hsl(var(--cyan-accent))' : 'hsl(var(--purple-accent))',
                  scale: ring * 0.3,
                }}
                animate={{
                  scale: [ring * 0.3, ring * 0.35, ring * 0.3],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: ring * 0.3,
                }}
              />
            ))}
          </motion.div>

          {/* Orbiting particles with trails */}
          {[...Array(30)].map((_, i) => {
            const angle = (i / 30) * Math.PI * 2;
            const radius = 150 + (i % 3) * 40;
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  x: {
                    duration: 6 + (i % 3) * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 6 + (i % 3) * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                  }
                }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? 'hsl(var(--cyan-accent))' : 'hsl(var(--purple-accent))',
                    boxShadow: `0 0 10px ${i % 2 === 0 ? 'hsl(var(--cyan-accent))' : 'hsl(var(--purple-accent))'}`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {phase.showButterfly && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* AMAI Butterfly Icon with gradient glow */}
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              {/* Main butterfly shape - using SVG-like approach */}
              <div className="relative w-64 h-64">
                {/* Left wing */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-40 rounded-full opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--cyan-accent)) 0%, hsl(var(--purple-accent)) 100%)',
                    filter: 'blur(30px)',
                    transformOrigin: 'right center',
                  }}
                  animate={{
                    scaleX: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                {/* Right wing */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-40 rounded-full opacity-60"
                  style={{
                    background: 'linear-gradient(225deg, hsl(var(--purple-accent)) 0%, hsl(var(--cyan-accent)) 100%)',
                    filter: 'blur(30px)',
                    transformOrigin: 'left center',
                  }}
                  animate={{
                    scaleX: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                {/* Body */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-32 rounded-full opacity-40"
                  style={{
                    background: 'linear-gradient(180deg, hsl(var(--cyan-accent)), hsl(var(--purple-accent)))',
                  }}
                />
              </div>

              {/* Surrounding glow particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 2 === 0 ? 'hsl(var(--cyan-accent))' : 'hsl(var(--purple-accent))',
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: Math.cos((i / 8) * Math.PI * 2) * 100,
                    y: Math.sin((i / 8) * Math.PI * 2) * 100,
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
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
                <motion.h3 
                  className={`text-xl font-semibold ${textColor} mb-6`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {phase.sectionTitle}
                </motion.h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} flex items-start`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                    >
                      <span className={`mr-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <motion.div 
              className={`relative text-lg md:text-xl font-semibold ${textColor} p-6 rounded-2xl backdrop-blur-sm border ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-gray-900/5 border-gray-900/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              style={{
                boxShadow: isDark 
                  ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                  : '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span className={`block mb-2 text-sm font-normal ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Outcome:
              </span>
              {phase.outcome}
              
              {/* Glass reflection effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  }}
                />
              </div>
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