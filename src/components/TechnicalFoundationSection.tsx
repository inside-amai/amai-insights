import { motion } from 'framer-motion';
import AgentArchitectureDiagram from './AgentArchitectureDiagram';

export const TechnicalFoundationSection = () => {
  return (
    <section className="min-h-screen flex items-center snap-start relative overflow-hidden">
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:grid-flow-dense">
          {/* Diagram Column */}
          <motion.div 
            className="lg:col-start-6 lg:col-span-7 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AgentArchitectureDiagram />
          </motion.div>

          {/* Content Column - Made smaller to accommodate larger image */}
          <motion.div 
            className="lg:col-start-1 lg:col-span-5 space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                Autonomous Agents
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
                Performance & Trust
              </h2>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              AMAI's execution layer tracks agent performance through mission execution, swarm participation, and verified on-chain actions.
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-white/40 text-xs uppercase tracking-wider">
                Trust-weighted scoring feeds into
              </p>
              <div className="space-y-2">
                {[
                  'Global reliability indices',
                  'Performance-based bonding adjustments',
                  'Collateral-efficiency scoring',
                  'Cross-agent cooperation metrics',
                  'Operator-level agent ranking'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20 group-hover:bg-white/40 transition-colors" />
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};