import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const OperationalScenarios = () => {
  const navigate = useNavigate();
  const [activeScenario, setActiveScenario] = useState('global-energy-network');
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const scenarios = [
    {
      id: 'global-energy-network',
      label: t('scenarios.energy.label'),
      title: t('scenarios.energy.title'),
      sections: [
        { heading: t('scenarios.energy.context.heading'), content: t('scenarios.energy.context.content') },
        { heading: t('scenarios.energy.bottleneck.heading'), content: t('scenarios.energy.bottleneck.content') },
        { heading: t('scenarios.energy.deployment.heading'), content: t('scenarios.energy.deployment.content'), bullets: [t('scenarios.energy.deployment.bullet1'), t('scenarios.energy.deployment.bullet2'), t('scenarios.energy.deployment.bullet3'), t('scenarios.energy.deployment.bullet4')], footer: t('scenarios.energy.deployment.footer') },
        { heading: t('scenarios.energy.outcome.heading'), content: t('scenarios.energy.outcome.content'), bullets: [t('scenarios.energy.outcome.bullet1'), t('scenarios.energy.outcome.bullet2'), t('scenarios.energy.outcome.bullet3'), t('scenarios.energy.outcome.bullet4')], footer: t('scenarios.energy.outcome.footer') },
        { heading: t('scenarios.energy.implication.heading'), content: t('scenarios.energy.implication.content') },
        { heading: '', quote: t('scenarios.energy.quote') }
      ]
    },
    {
      id: 'global-treasury',
      label: t('scenarios.treasury.label'),
      title: t('scenarios.treasury.title'),
      sections: [
        { heading: t('scenarios.treasury.context.heading'), content: t('scenarios.treasury.context.content') },
        { heading: t('scenarios.treasury.bottleneck.heading'), content: t('scenarios.treasury.bottleneck.content'), bullets: [t('scenarios.treasury.bottleneck.bullet1'), t('scenarios.treasury.bottleneck.bullet2'), t('scenarios.treasury.bottleneck.bullet3'), t('scenarios.treasury.bottleneck.bullet4')], footer: t('scenarios.treasury.bottleneck.footer') },
        { heading: t('scenarios.treasury.deployment.heading'), content: t('scenarios.treasury.deployment.content'), bullets: [t('scenarios.treasury.deployment.bullet1'), t('scenarios.treasury.deployment.bullet2'), t('scenarios.treasury.deployment.bullet3'), t('scenarios.treasury.deployment.bullet4')], footer: t('scenarios.treasury.deployment.footer') },
        { heading: t('scenarios.treasury.outcome.heading'), content: t('scenarios.treasury.outcome.content'), bullets: [t('scenarios.treasury.outcome.bullet1'), t('scenarios.treasury.outcome.bullet2'), t('scenarios.treasury.outcome.bullet3'), t('scenarios.treasury.outcome.bullet4')], footer: t('scenarios.treasury.outcome.footer') },
        { heading: t('scenarios.treasury.implication.heading'), content: t('scenarios.treasury.implication.content') },
        { heading: '', quote: t('scenarios.treasury.quote') }
      ]
    },
    {
      id: 'ai-compute-markets',
      label: t('scenarios.compute.label'),
      title: t('scenarios.compute.title'),
      sections: [
        { heading: t('scenarios.compute.context.heading'), content: t('scenarios.compute.context.content') },
        { heading: t('scenarios.compute.bottleneck.heading'), content: t('scenarios.compute.bottleneck.content'), bullets: [t('scenarios.compute.bottleneck.bullet1'), t('scenarios.compute.bottleneck.bullet2'), t('scenarios.compute.bottleneck.bullet3'), t('scenarios.compute.bottleneck.bullet4')], footer: t('scenarios.compute.bottleneck.footer') },
        { heading: t('scenarios.compute.deployment.heading'), content: t('scenarios.compute.deployment.content'), bullets: [t('scenarios.compute.deployment.bullet1'), t('scenarios.compute.deployment.bullet2'), t('scenarios.compute.deployment.bullet3'), t('scenarios.compute.deployment.bullet4')], footer: t('scenarios.compute.deployment.footer') },
        { heading: t('scenarios.compute.outcome.heading'), content: t('scenarios.compute.outcome.content'), bullets: [t('scenarios.compute.outcome.bullet1'), t('scenarios.compute.outcome.bullet2'), t('scenarios.compute.outcome.bullet3'), t('scenarios.compute.outcome.bullet4')], footer: t('scenarios.compute.outcome.footer') },
        { heading: t('scenarios.compute.implication.heading'), content: t('scenarios.compute.implication.content') },
        { heading: '', quote: t('scenarios.compute.quote') }
      ]
    }
  ];

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
    <div className="min-h-screen bg-black relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
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
      <div className={`fixed top-14 md:top-6 ${isRTL ? 'right-6' : 'left-6'} z-50`}>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleBackClick}
          className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
        >
          <ArrowLeft className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'} h-3 w-3`} />
          {t('scenarios.back')}
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
                {t('scenarios.breadcrumb')}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                {t('scenarios.title')}
              </h1>

              {/* Subheader */}
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                {t('scenarios.subheader')}
              </p>

              {/* Abstract */}
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">
                {t('scenarios.abstract')}
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
