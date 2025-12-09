import { motion } from 'framer-motion';

const layers = [
  {
    id: 'identity',
    title: 'Identity Layer',
    subtitle: 'Foundational Trust Infrastructure',
    items: [
      { label: 'Immutable Identifiers', desc: 'Cryptographic agent identity anchored on-chain' },
      { label: 'SBT-Bound Ownership', desc: 'Soul-bound tokens for non-transferable provenance' },
      { label: 'Reputation Roots', desc: 'Verifiable credential accumulation over time' },
    ],
    gradient: 'from-white/[0.08] to-white/[0.02]',
    borderColor: 'border-white/10',
    accentColor: 'bg-white/80',
  },
  {
    id: 'skill',
    title: 'Skill & Memory Layer',
    subtitle: 'Kernelized Intelligent Properties',
    items: [
      { label: 'Kernelized Intelligence Modules', desc: 'Composable skill primitives with defined interfaces' },
      { label: 'Versioning & Permissioning', desc: 'Granular access control and upgrade paths' },
      { label: 'Micro-Royalty Structure', desc: 'Automated attribution and value distribution' },
    ],
    gradient: 'from-white/[0.06] to-white/[0.01]',
    borderColor: 'border-white/8',
    accentColor: 'bg-white/70',
  },
  {
    id: 'treasury',
    title: 'Bonded Treasury Layer',
    subtitle: 'Economic Security Substrate',
    items: [
      { label: 'AMAI Collateral', desc: 'Staked capital backing agent commitments' },
      { label: 'Trust-Weighted Allocation', desc: 'Dynamic capital routing based on performance' },
      { label: 'Treasury Performance Curves', desc: 'Non-linear reward and penalty mechanisms' },
    ],
    gradient: 'from-white/[0.04] to-transparent',
    borderColor: 'border-white/6',
    accentColor: 'bg-white/60',
  },
];

export const AgentLayersSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
            Protocol Architecture
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
            Agent Infrastructure Stack
          </h2>
          <p className="mt-4 text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            A vertically integrated architecture for autonomous agent deployment and economic coordination.
          </p>
        </motion.div>

        {/* Three Layers */}
        <div className="max-w-5xl mx-auto space-y-4">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative group
                bg-gradient-to-b ${layer.gradient}
                border ${layer.borderColor}
                rounded-lg
                backdrop-blur-sm
                transition-all duration-500
                hover:border-white/20
              `}
            >
              {/* Layer Number Indicator */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
                <span className="text-[10px] text-white/20 font-mono">
                  0{index + 1}
                </span>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Layer Title */}
                  <div className="md:w-1/3 md:pr-8 md:border-r md:border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${layer.accentColor}`} />
                      <h3 className="text-lg font-medium text-white tracking-tight">
                        {layer.title}
                      </h3>
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">
                      {layer.subtitle}
                    </p>
                  </div>

                  {/* Layer Items */}
                  <div className="md:w-2/3 grid gap-4">
                    {layer.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group/item flex items-start gap-4"
                      >
                        <div className="mt-1.5 w-4 h-px bg-white/20 group-hover/item:bg-white/40 transition-colors" />
                        <div>
                          <span className="text-sm text-white/80 font-medium">
                            {item.label}
                          </span>
                          <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtle connecting line to next layer */}
              {index < layers.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-px bg-gradient-to-b from-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-white/40">
            Each layer operates independently while maintaining cryptographic coherence across the stack.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
