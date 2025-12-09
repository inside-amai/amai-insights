import { motion } from 'framer-motion';
import AgentArchitectureDiagram from './AgentArchitectureDiagram';

export const TechnicalFoundationSection = () => {
  return (
    <section className="min-h-screen flex items-center snap-start bg-black relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-32 right-32 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 8s linear infinite' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '5s', animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:grid-flow-dense">
          {/* Diagram Column */}
          <motion.div 
            className="lg:col-start-6 lg:col-span-7 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AgentArchitectureDiagram />
          </motion.div>

          {/* Content Column - Made smaller to accommodate larger image */}
          <motion.div 
            className="lg:col-start-1 lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
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