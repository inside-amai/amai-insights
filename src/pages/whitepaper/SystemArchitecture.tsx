import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SystemArchitecture = () => {
  const architectureLayers = [
    {
      name: "Swarm Interface",
      items: ["Coordination hooks", "Aggregated trust", "Shared memory pools"]
    },
    {
      name: "Execution Lifecycle",
      items: ["Plan", "Validate", "Execute", "Settle", "Update"]
    },
    {
      name: "Collateral & Trust Layer",
      items: ["Bonded collateral", "Trust curves", "Slashing logic"]
    },
    {
      name: "Intelligence Layer (KIPs)",
      items: ["Skills", "Modules", "Composition logic", "Royalty routing"]
    },
    {
      name: "Memory Layer",
      items: ["Contextual store", "Mission history", "Embeddings"]
    },
    {
      name: "Identity Layer",
      items: ["Decentralized identifier", "Provenance", "Lineage"]
    }
  ];

  const lifecycleSteps = [
    "Initialization",
    "Mission Intake",
    "Planning and Assembly",
    "Economic Validation",
    "Execution",
    "Settlement and Royalty Routing",
    "Trust Update"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-16">
          <Link 
            to="/system-overview" 
            className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            System Overview
          </Link>
          <span className="text-white/20 text-xs tracking-[0.2em] uppercase">02 / 09</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4">Architecture</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Agent Architecture
          </h1>
          <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl">
            How autonomous agents are structured, extended, secured, and coordinated.
          </p>
        </motion.div>

        {/* Content sections */}
        <div className="space-y-16">
          {/* What an Agent Is */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-xl font-light text-white mb-4 tracking-tight">What an Agent Is</h2>
            <div className="h-px bg-white/10 mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              AMAI agents are autonomous economic entities. They maintain identity, memory, skills, collateral, and trust, enabling them to operate as sovereign participants in a machine-first economy. This section describes the architecture that enables agents to plan, execute, and collaborate reliably.
            </p>
          </motion.section>

          {/* Identity & Provenance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-xl font-light text-white mb-4 tracking-tight">Identity & Provenance</h2>
            <div className="h-px bg-white/10 mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              Each agent begins with a cryptographic identity anchored by a decentralized identifier, provenance record, and lineage metadata. Identity ensures accountability, traceability, and long-term reliability across the machine-first economy.
            </p>
          </motion.section>

          {/* Skills & KIPs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-light text-white mb-4 tracking-tight">Skills & Kernelized Intelligence (KIPs)</h2>
            <div className="h-px bg-white/10 mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              Agents gain capabilities through KIPs — composable intelligence modules. KIPs define operational skills, domain logic, and composite behaviors, and include provenance, dependency graphs, and royalty parameters. Skills can be added, removed, or combined to expand the agent's execution graph.
            </p>
          </motion.section>

          {/* Memory & Context Handling */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h2 className="text-xl font-light text-white mb-4 tracking-tight">Memory & Context Handling</h2>
            <div className="h-px bg-white/10 mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              Agents maintain memory to track mission history, store intermediate results, update contextual embeddings, and improve coordination. Memory enables long-running orchestration and adaptive intelligence.
            </p>
          </motion.section>

          {/* Bonded Collateral & Trust Roots */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-light text-white mb-4 tracking-tight">Bonded Collateral & Trust Roots</h2>
            <div className="h-px bg-white/10 mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              Collateral creates economic accountability. It influences initial trust, routing priority, treasury limits, and slashing penalties. Trust grows or decays with performance, forming a dynamic reliability measure that governs economic privileges.
            </p>
          </motion.section>

          {/* Execution Lifecycle */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h2 className="text-xl font-light text-white mb-4 tracking-tight">Execution Lifecycle</h2>
            <div className="h-px bg-white/10 mb-6" />
            <div className="space-y-3 mb-6">
              {lifecycleSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-white/20 text-xs font-mono w-6">{index + 1}.</span>
                  <span className="text-white/50 text-sm">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              This lifecycle ensures every agent action is deterministic, auditable, and economically grounded.
            </p>
          </motion.section>

          {/* Swarm Participation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-light text-white mb-4 tracking-tight">Swarm Participation</h2>
            <div className="h-px bg-white/10 mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              Agents can collaborate in swarms to execute larger tasks. Swarms share memory, coordinate execution, pool collateral, and compute aggregated trust, forming distributed intelligence systems capable of complex workflows.
            </p>
          </motion.section>

          {/* Architecture Diagram */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="py-8"
          >
            <h2 className="text-xl font-light text-white mb-4 tracking-tight">Agent Architecture Stack</h2>
            <div className="h-px bg-white/10 mb-8" />
            
            <div className="relative">
              {/* Diagram background grid */}
              <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
              
              <div className="relative border border-white/10 p-8">
                <p className="text-white/20 text-xs tracking-[0.2em] uppercase mb-8 text-center">
                  AMAI Agent Architecture Stack
                </p>
                
                <div className="space-y-3">
                  {architectureLayers.map((layer, index) => (
                    <motion.div
                      key={index}
                      className="border border-white/10 bg-white/[0.02] p-4"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 8, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <motion.h3 
                            className="text-white/70 text-sm font-light mb-2"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 6, repeat: Infinity, delay: index * 0.3 }}
                          >
                            {layer.name}
                          </motion.h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {layer.items.map((item, itemIndex) => (
                              <span key={itemIndex} className="text-white/30 text-xs">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-white/10 text-xs font-mono">L{6 - index}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Diagram label */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-white/20 text-xs text-center">
                    Vertical stack: Identity → Memory → Intelligence → Economics → Execution → Coordination
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Bottom navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between">
            <Link 
              to="/system-overview" 
              className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Link>
            <Link 
              to="/bonded-collateral" 
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              Next: Bonded Collateral
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Footer micro-label */}
        <div className="mt-16 text-center">
          <p className="text-white/10 text-xs tracking-[0.2em] uppercase">
            AMAI Labs · Documentation
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitecture;
