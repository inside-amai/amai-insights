import { motion } from 'framer-motion';
import { Triangle, Droplets, TrendingUp } from 'lucide-react';

export const TrinaryClassificationSection = () => {
  const columns = [
    {
      number: '01',
      title: 'INSTITUTIONAL SIGNAL CLARITY',
      subtitle: 'The "Credit Rating" Model',
      icon: Triangle,
      description: '',
      tiers: [
        {
          name: 'TIER I',
          label: 'The Sandbox',
          desc: 'Testing & Low-Value Ops. High freedom, low bond. The environment for rapid iteration.'
        },
        {
          name: 'TIER II',
          label: 'The Professional',
          desc: 'Commercial Reliability. Verified bond. Standard limits. The standard for revenue-generating agents.'
        },
        {
          name: 'TIER III',
          label: 'The Sovereign',
          desc: '"Too Big To Fail" Economics. Institutional bond. Uncapped throughput. The environment for settlement and heavy treasury management.'
        }
      ]
    },
    {
      number: '02',
      title: 'LIQUIDITY CONCENTRATION',
      subtitle: 'Deep Pools vs. Fragmented Puddles',
      icon: Droplets,
      description: 'Collateral health relies on depth.',
      points: [
        {
          label: 'The Flaw of Fragmentation',
          text: 'Expanding to 5+ tiers fragments the bonding pool, creating "dead zones" where capital is locked without providing a distinct economic advantage.'
        },
        {
          label: 'The 3-Tier Advantage',
          text: 'By concentrating global collateral into three massive pools, we maximize the Collateral Health Factor (Hf) at each level, ensuring the network can absorb volatility without cascading liquidations.'
        }
      ],
      visual: 'pools'
    },
    {
      number: '03',
      title: 'THE "SYBIL GAP"',
      subtitle: 'The Step-Function as a Firewall',
      icon: TrendingUp,
      description: 'The steep jump in bonding requirements between tiers is a feature, not a bug.',
      points: [
        {
          label: 'Linear Growth = Vulnerability',
          text: 'Small, incremental upgrades allow malicious actors (Sybil attackers) to "creep" up the reputation ladder cheaply.'
        },
        {
          label: 'The Cost of Trust',
          text: 'The significant capital "Gap" between Tier I and Tier II acts as an economic firewall. It forces an attacker to commit significant capital at risk just to access standard network privileges, making the cost of an attack mathematically irrational.'
        }
      ],
      visual: 'steps'
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
            ECONOMIC MODEL
          </span>
          <h2 className="text-3xl lg:text-4xl font-light text-white tracking-tight mb-4">
            The Trinary Classification Standard
          </h2>
          <p className="text-sm text-white/50 max-w-2xl mx-auto">
            Logic: Why the x402 Layer enforces a strict 3-Tier Economic Model.
          </p>
        </motion.div>

        {/* Triptych Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col, index) => (
            <motion.div
              key={col.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full border border-white/10 bg-black/40 p-6 lg:p-8">
                {/* Number & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-mono text-white/30">{col.number}</span>
                  <col.icon className="w-5 h-5 text-white/20" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-sm font-medium text-white tracking-wide mb-1">
                  {col.title}
                </h3>
                <p className="text-xs text-white/40 mb-4">{col.subtitle}</p>

                {/* Description */}
                <p className="text-xs text-white/50 leading-relaxed mb-6">
                  {col.description}
                </p>

                {/* Tiers (Column 1) */}
                {col.tiers && (
                  <div className="space-y-4">
                    {col.tiers.map((tier, i) => (
                      <div key={i} className="border-l border-white/10 pl-3">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-[10px] font-mono text-white/60">{tier.name}</span>
                          <span className="text-xs text-white/40">({tier.label})</span>
                        </div>
                        <p className="text-[11px] text-white/40 leading-relaxed">{tier.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Points (Column 2 & 3) */}
                {col.points && (
                  <div className="space-y-4">
                    {col.points.map((point, i) => (
                      <div key={i}>
                        <p className="text-xs text-white/60 mb-1">{point.label}:</p>
                        <p className="text-[11px] text-white/40 leading-relaxed">{point.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Visual: Pools Diagram */}
                {col.visual === 'pools' && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-end justify-center gap-6">
                      {/* 3 Deep Pools */}
                      <div className="flex flex-col items-center">
                        <div className="flex gap-1">
                          <div className="w-6 h-12 bg-white/10 border border-white/20" />
                          <div className="w-6 h-12 bg-white/10 border border-white/20" />
                          <div className="w-6 h-12 bg-white/10 border border-white/20" />
                        </div>
                        <span className="text-[9px] text-white/30 mt-2">3 DEEP</span>
                      </div>
                      <span className="text-white/20 text-xs mb-4">vs</span>
                      {/* 5 Shallow Puddles */}
                      <div className="flex flex-col items-center">
                        <div className="flex gap-0.5">
                          <div className="w-3 h-4 bg-white/5 border border-white/10" />
                          <div className="w-3 h-4 bg-white/5 border border-white/10" />
                          <div className="w-3 h-4 bg-white/5 border border-white/10" />
                          <div className="w-3 h-4 bg-white/5 border border-white/10" />
                          <div className="w-3 h-4 bg-white/5 border border-white/10" />
                        </div>
                        <span className="text-[9px] text-white/30 mt-2">5 SHALLOW</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual: Step Function */}
                {col.visual === 'steps' && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-end justify-center gap-4 h-16">
                      {/* Step Function (Stairs) */}
                      <div className="flex flex-col items-center">
                        <svg viewBox="0 0 80 40" className="w-20 h-10">
                          <path 
                            d="M 0 35 L 20 35 L 20 25 L 40 25 L 40 10 L 80 10" 
                            fill="none" 
                            stroke="rgba(255,255,255,0.3)" 
                            strokeWidth="1.5"
                          />
                          {/* Step markers */}
                          <circle cx="20" cy="35" r="2" fill="rgba(255,255,255,0.4)" />
                          <circle cx="40" cy="25" r="2" fill="rgba(255,255,255,0.4)" />
                          <circle cx="60" cy="10" r="2" fill="rgba(255,255,255,0.4)" />
                        </svg>
                        <span className="text-[9px] text-white/30 mt-1">STEP FUNCTION</span>
                      </div>
                      <span className="text-white/20 text-xs mb-2">vs</span>
                      {/* Linear (Vulnerable) */}
                      <div className="flex flex-col items-center">
                        <svg viewBox="0 0 60 40" className="w-16 h-10">
                          <line 
                            x1="0" y1="38" x2="60" y2="5" 
                            stroke="rgba(255,255,255,0.15)" 
                            strokeWidth="1.5"
                            strokeDasharray="3,2"
                          />
                        </svg>
                        <span className="text-[9px] text-white/20 mt-1">LINEAR</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
