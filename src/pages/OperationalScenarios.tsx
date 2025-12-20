import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';

const scenarios = [
  {
    id: 'global-energy-network',
    label: 'Global Energy Network',
    title: 'Autonomous Capital & Operations for a Global Energy Network',
    subtitle: '',
    sections: [
      {
        heading: 'Context',
        content: "Global energy systems operate across thousands of assets, jurisdictions, and markets — power generation, transmission, storage, and trading — each governed by different rules, incentives, and risk profiles. Today, these systems are coordinated through layers of human decision-making, delayed reporting, and fragmented capital allocation. Even minor inefficiencies compound at scale, creating systemic exposure during periods of volatility, supply disruption, or geopolitical stress."
      },
      {
        heading: 'The Bottleneck',
        content: "Modern energy infrastructure is constrained not by physical capacity, but by economic coordination. Human-in-the-loop workflows introduce latency, bias, and operational risk. Capital is allocated on static assumptions. Trust is inferred rather than measured. Accountability is retrospective rather than real-time. In critical moments, decisions arrive too late."
      },
      {
        heading: 'AMAI Deployment',
        content: "AMAI deploys a network of autonomous agents across the energy operator's infrastructure.",
        bullets: [
          'Holds a persistent identity',
          'Maintains a verifiable trust score derived from historical performance',
          'Controls bonded capital with deterministic limits',
          'Executes actions atomically with guaranteed settlement'
        ],
        footer: "Agents operate independently or as coordinated swarms, dynamically reallocating capital, routing energy, hedging exposure, and enforcing risk constraints in real time. All execution is verifiable. All outcomes are settled deterministically."
      },
      {
        heading: 'Operational Outcome',
        content: "Energy operations transition from human-managed systems to machine-coordinated economic infrastructure.",
        bullets: [
          'Capital is allocated continuously, not quarterly',
          'Risk is enforced at execution, not post-mortem',
          'Trust becomes measurable, transferable, and enforceable',
          'System behavior adapts instantly to real-world conditions'
        ],
        footer: "The organization does not react to volatility — it absorbs it."
      },
      {
        heading: 'Strategic Implication',
        content: "AMAI does not replace operators. It replaces the economic friction between them."
      },
      {
        heading: '',
        quote: "We didn't automate jobs. We automated the economy that runs them."
      }
    ]
  },
  {
    id: 'global-treasury',
    label: 'Global Treasury',
    title: 'Autonomous Cross-Border Treasury & Global Payments',
    subtitle: '',
    sections: [
      {
        heading: 'Context',
        content: "Global enterprises operate across dozens of currencies, jurisdictions, banking systems, and regulatory regimes. Treasury teams manage liquidity, FX exposure, settlement, and compliance through fragmented systems that were never designed for real-time global coordination. Capital sits idle. Risk accumulates invisibly. Decisions are gated by human workflows, regional cutoffs, and settlement delays measured in days. In a 24/7 global economy, money still sleeps."
      },
      {
        heading: 'The Bottleneck',
        content: "Cross-border finance is constrained by human-paced decision loops. Treasury operations rely on:",
        bullets: [
          'Static hedging strategies',
          'Manual rebalancing',
          'Delayed reporting',
          'Trust assumptions between counterparties'
        ],
        footer: "During volatility, capital becomes trapped in the system — unavailable when it's needed most."
      },
      {
        heading: 'AMAI Deployment',
        content: "AMAI deploys autonomous treasury agents across the organization's global financial stack.",
        bullets: [
          'Holds a cryptographic identity',
          'Maintains a performance-based trust score',
          'Controls bonded capital with predefined risk limits',
          'Executes FX, settlement, and liquidity actions deterministically'
        ],
        footer: "Agents monitor markets continuously, rebalance capital across regions, execute FX hedges, route payments, and settle obligations in real time — either independently or as coordinated swarms. All actions are atomic. All outcomes are auditable."
      },
      {
        heading: 'Operational Outcome',
        content: "Treasury operations shift from batch-based finance to continuous economic orchestration.",
        bullets: [
          'Liquidity moves instantly across borders',
          'FX exposure is managed dynamically, not reactively',
          'Counterparty trust is enforced by collateral and performance',
          'Settlement risk collapses toward zero'
        ],
        footer: "Capital becomes a living system, not a static balance sheet."
      },
      {
        heading: 'Strategic Implication',
        content: "AMAI turns treasury from a cost center into a strategic execution layer. Finance no longer supports operations — it executes them."
      },
      {
        heading: '',
        quote: "Money stopped waiting for permission."
      }
    ]
  },
  {
    id: 'service-orchestration',
    label: 'Service Orchestration',
    title: 'Service Orchestration Agent',
    subtitle: 'Autonomous coordination of external services with economic accountability.',
    sections: [
      {
        heading: 'Overview',
        content: 'An orchestration agent manages complex workflows involving external APIs, services, and third-party systems. The agent maintains state across multi-step processes while ensuring economic accountability for external resource consumption.'
      },
      {
        heading: 'Execution Flow',
        steps: [
          'Agent receives orchestration mission with service requirements.',
          'External service costs estimated and pre-validated.',
          'Execution plan assembled with fallback strategies.',
          'Sequential or parallel service calls executed with timeout bounds.',
          'Responses validated against expected schemas.',
          'Final state committed with full audit trail.'
        ]
      },
      {
        heading: 'Economic Constraints',
        content: 'External API costs are deducted from agent treasury in real-time. Cost overruns trigger circuit breakers. Successful orchestrations within budget improve trust. Agents build reputation for efficient resource utilization.'
      },
      {
        heading: 'Failure Handling',
        content: 'Partial failures execute compensating transactions where possible. Unrecoverable failures settle with proportional cost attribution. Detailed failure logs inform trust adjustments and future routing decisions.'
      }
    ]
  }
];

const OperationalScenarios = () => {
  const navigate = useNavigate();
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);

  useEffect(() => {
    document.title = 'Operational Scenarios | AMAI Labs';
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('documentation-library');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const currentScenario = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="fixed inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Subtle radial gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

      {/* Back Button */}
      <div className="fixed top-14 md:top-6 left-6 z-50">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleBackClick}
          className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
        >
          <ArrowLeft className="mr-2 h-3 w-3" />
          Back
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Micro-label */}
              <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-mono">
                Documentation / Scenarios
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                Operational Scenarios
              </h1>

              {/* Subheader */}
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                Reference implementations demonstrating agent capabilities across real-world use cases.
              </p>

              {/* Abstract */}
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">
                Abstract: Practical examples of autonomous agent operation including trading, data processing, and service orchestration with full economic accountability.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Scenario Selector */}
        <section className="pb-8 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              {scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenario(scenario.id)}
                  className={`
                    px-5 py-2.5 text-xs font-mono tracking-wide rounded-[2px] border transition-all duration-200
                    ${activeScenario === scenario.id 
                      ? 'bg-white/10 border-white/20 text-white/80' 
                      : 'bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                    }
                  `}
                >
                  {scenario.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Scenario Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Scenario Header */}
            <section className="py-12 px-6">
              <div className="max-w-4xl mx-auto">
                <div className="border-l-2 border-white/10 pl-6">
                  <h2 className="text-2xl font-light text-white mb-3 tracking-tight">
                    {currentScenario.title}
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {currentScenario.subtitle}
                  </p>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="max-w-4xl mx-auto px-6">
              <div className="h-px bg-white/[0.06]" />
            </div>

            {/* Scenario Sections */}
            {currentScenario.sections.map((section, index) => (
              <div key={index}>
                <section className={section.quote ? "py-20 px-6" : "py-16 px-6"}>
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      {section.heading && (
                        <h3 className="text-xl font-light text-white mb-6 tracking-tight">
                          {section.heading}
                        </h3>
                      )}
                      
                      {section.content && (
                        <p className="text-white/50 text-sm leading-relaxed">
                          {section.content}
                        </p>
                      )}

                      {section.bullets && (
                        <div className="space-y-3 mt-6 mb-6">
                          {section.bullets.map((bullet: string, bulletIndex: number) => (
                            <motion.div
                              key={bulletIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: bulletIndex * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <span className="text-white/30 mt-1.5">•</span>
                              <p className="text-white/50 text-sm leading-relaxed">
                                {bullet}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {section.footer && (
                        <p className="text-white/50 text-sm leading-relaxed mt-6">
                          {section.footer}
                        </p>
                      )}

                      {section.steps && (
                        <div className="space-y-4">
                          {section.steps.map((step: string, stepIndex: number) => (
                            <motion.div
                              key={stepIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: stepIndex * 0.05 }}
                              className="flex items-start gap-4"
                            >
                              <span className="text-white/20 font-mono text-xs mt-0.5 w-4 flex-shrink-0">
                                {stepIndex + 1}.
                              </span>
                              <p className="text-white/50 text-sm leading-relaxed">
                                {step}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {section.quote && (
                        <blockquote className="text-center">
                          <p className="text-white/70 text-lg md:text-xl font-light italic leading-relaxed">
                            "{section.quote}"
                          </p>
                        </blockquote>
                      )}
                    </motion.div>
                  </div>
                </section>

                {/* Divider between sections */}
                {index < currentScenario.sections.length - 1 && !section.quote && (
                  <div className="max-w-4xl mx-auto px-6">
                    <div className="h-px bg-white/[0.06]" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom spacing before footer */}
        <div className="py-16" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default OperationalScenarios;
