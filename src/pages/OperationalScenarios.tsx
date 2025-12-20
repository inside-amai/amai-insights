import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';

const scenarios = [
  {
    id: 'autonomous-trading',
    label: 'Autonomous Trading',
    title: 'Autonomous Trading Agent',
    subtitle: 'Capital allocation, risk management, and settlement in real-time markets.',
    sections: [
      {
        heading: 'Overview',
        content: 'A trading agent operates with bonded collateral, executing market strategies within trust-weighted capital limits. The agent receives market signals, evaluates risk parameters, and executes trades through atomic execution bundles that ensure deterministic settlement.'
      },
      {
        heading: 'Execution Flow',
        steps: [
          'Agent receives market signal or strategy trigger.',
          'Risk parameters validated against collateral and trust ceiling.',
          'Trade execution bundle assembled with slippage bounds.',
          'Atomic execution ensures all-or-nothing settlement.',
          'Performance metrics update trust score.',
          'Treasury balance adjusted based on P&L.'
        ]
      },
      {
        heading: 'Economic Constraints',
        content: 'Position sizing is bounded by trust-weighted capital allocation. Higher trust agents access larger capital pools. Losses trigger proportional collateral adjustments. Consistent performance unlocks expanded operating parameters.'
      },
      {
        heading: 'Swarm Coordination',
        content: 'Multiple trading agents can form swarms to execute coordinated strategies across markets. Shared memory enables signal aggregation while individual trust scores weight contribution to collective decisions.'
      }
    ]
  },
  {
    id: 'data-processing',
    label: 'Data Processing',
    title: 'Data Processing Pipeline',
    subtitle: 'Multi-agent coordination for large-scale data transformation and analysis.',
    sections: [
      {
        heading: 'Overview',
        content: 'A swarm of specialized agents processes large datasets through a coordinated pipeline. Each agent contributes specific skills — extraction, transformation, validation, analysis — while the swarm coordinator manages task distribution and quality assurance.'
      },
      {
        heading: 'Execution Flow',
        steps: [
          'Coordinator agent receives data processing mission.',
          'Task graph decomposed into parallelizable units.',
          'Worker agents selected based on skill match and trust.',
          'Each agent executes assigned subtask atomically.',
          'Results aggregated with provenance tracking.',
          'Final output validated and settled with royalty distribution.'
        ]
      },
      {
        heading: 'Economic Constraints',
        content: 'Compute costs are pre-validated against treasury limits. Worker agents earn proportional to contribution complexity. Failed subtasks trigger localized retry without full pipeline rollback. Coordinator absorbs coordination overhead from margins.'
      },
      {
        heading: 'Quality Assurance',
        content: 'Validation agents verify output quality against specifications. Trust scores of contributing agents inform confidence metrics. Repeated quality failures update trust curves and affect future task eligibility.'
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
                <section className="py-16 px-6">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-xl font-light text-white mb-6 tracking-tight">
                        {section.heading}
                      </h3>
                      
                      {section.content && (
                        <p className="text-white/50 text-sm leading-relaxed">
                          {section.content}
                        </p>
                      )}

                      {section.steps && (
                        <div className="space-y-4">
                          {section.steps.map((step, stepIndex) => (
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
                    </motion.div>
                  </div>
                </section>

                {/* Divider between sections */}
                {index < currentScenario.sections.length - 1 && (
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
