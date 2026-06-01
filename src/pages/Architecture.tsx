import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExplainerHero } from '@/components/ExplainerHero';
import { ExplainerFAQ } from '@/components/ExplainerFAQ';
import { TechnicalFoundationSection } from '@/components/TechnicalFoundationSection';
import { Footer } from '@/components/Footer';
import { AgentLayersSection } from '@/components/AgentLayersSection';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { useLanguage } from '@/contexts/LanguageContext';

const Architecture = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="relative bg-perspective-grid">
          <div className="relative z-10">
            <ExplainerHero
              headline={<span className="font-light">{t('archp.hero.headline')}</span>}
              subtext={<p>{t('archp.hero.subtext')}</p>}
              layerLabels={{
                identity: 'Identity Layer',
                execution: 'Execution Gateway',
                settlement: 'Audit Ledger',
              }}
            />
          </div>

          <div className="relative z-10">
            <AgentLayersSection
              eyebrow={t('archp.layers.eyebrow')}
              title={t('archp.layers.title')}
              subtitle={t('archp.layers.subtitle')}
              layers={[
                {
                  id: 'identity',
                  title: t('archp.layers.identity.title'),
                  subtitle: t('archp.layers.identity.subtitle'),
                  items: [
                    { label: t('archp.layers.identity.i1.label'), desc: t('archp.layers.identity.i1.desc') },
                    { label: t('archp.layers.identity.i2.label'), desc: t('archp.layers.identity.i2.desc') },
                    { label: t('archp.layers.identity.i3.label'), desc: t('archp.layers.identity.i3.desc') },
                  ],
                },
                {
                  id: 'gateway',
                  title: t('archp.layers.gateway.title'),
                  subtitle: t('archp.layers.gateway.subtitle'),
                  items: [
                    { label: t('archp.layers.gateway.i1.label'), desc: t('archp.layers.gateway.i1.desc') },
                    { label: t('archp.layers.gateway.i2.label'), desc: t('archp.layers.gateway.i2.desc') },
                    { label: t('archp.layers.gateway.i3.label'), desc: t('archp.layers.gateway.i3.desc') },
                  ],
                },
                {
                  id: 'ledger',
                  title: t('archp.layers.ledger.title'),
                  subtitle: t('archp.layers.ledger.subtitle'),
                  items: [
                    { label: t('archp.layers.ledger.i1.label'), desc: t('archp.layers.ledger.i1.desc') },
                    { label: t('archp.layers.ledger.i2.label'), desc: t('archp.layers.ledger.i2.desc') },
                    { label: t('archp.layers.ledger.i3.label'), desc: t('archp.layers.ledger.i3.desc') },
                  ],
                },
              ]}
            />

            {/* Architecture Intro */}
            <section className="py-20 md:py-28">
              <div className="container mx-auto px-6">
                <motion.div
                  className="max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs font-medium text-white/70 uppercase tracking-[0.2em] mb-4 block text-center">
                    {t('thesis.eyebrow')}
                  </span>
                  <p className="text-sm text-white/50 text-center leading-relaxed">
                    {t('archp.intro.p1')}
                    <br /><br />
                    {t('archp.intro.p2')}
                  </p>
                </motion.div>

                <div className="flex justify-center pt-10">
                  <div className="w-8 h-px bg-white/10" />
                </div>
              </div>
            </section>

            <ArchitectureDiagram
              eyebrow={t('archp.diagram.eyebrow')}
              title={t('archp.diagram.title')}
              subtitle={t('archp.diagram.subtitle')}
              layers={[
                { title: t('archp.diagram.l1.title'), items: [t('archp.diagram.l1.item')] },
                { title: t('archp.diagram.l2.title'), items: [t('archp.diagram.l2.item')] },
                { title: t('archp.diagram.l3.title'), items: [t('archp.diagram.l3.item')] },
                { title: t('archp.diagram.l4.title'), items: [t('archp.diagram.l4.item')] },
              ]}
              footer={t('archp.diagram.footer')}
            />

            {/* Environment Overview */}
            <section className="flex items-center justify-center relative overflow-hidden">
              <div className="container mx-auto px-6 py-16 relative z-10">
                <motion.div
                  className="max-w-3xl mx-auto space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-3">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                      {t('archp.env.eyebrow')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
                      {t('archp.env.title')}
                    </h2>
                  </div>
                  <div className="text-sm text-white/50 leading-relaxed space-y-4">
                    <p>{t('archp.env.p1')}</p>
                    <p>{t('archp.env.p2')}</p>
                    <p>{t('archp.env.p3')}</p>
                  </div>
                </motion.div>
              </div>
            </section>

            <TechnicalFoundationSection
              eyebrow={t('archp.tech.eyebrow')}
              title={t('archp.tech.title')}
              description={t('archp.tech.description')}
              feedsInto={t('archp.tech.feedsInto')}
              items={[
                t('archp.tech.i1'),
                t('archp.tech.i2'),
                t('archp.tech.i3'),
                t('archp.tech.i4'),
                t('archp.tech.i5'),
              ]}
            />
          </div>
        </div>

        {/* Engagement — Three paths into the protocol */}
        <section className="relative py-20 md:py-28 bg-perspective-grid">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                Engagement
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
                Three paths into the protocol.
              </h2>
              <p className="mt-4 text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
                The AMAI substrate is open to developers, enterprises, and the public.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                {
                  eyebrow: 'Developers',
                  title: 'Free SDK',
                  body: 'Every agent you build is secured at the source. 10,000 evaluations per month at no cost. Behavioral telemetry feeds the global ledger.',
                },
                {
                  eyebrow: 'Enterprises',
                  title: 'Real-Time API',
                  body: 'Allow/deny enforcement at the network edge. Filter, rate-limit, and hard-block autonomous traffic based on live TARI™ scores.',
                },
                {
                  eyebrow: 'The Public',
                  title: 'The Bureau',
                  body: 'Look up any autonomous agent. Free, verified, instant. The credit bureau for the autonomous economy.',
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white/20 rounded-lg p-6 md:p-8 bg-black flex flex-col"
                >
                  <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/40 font-medium">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-3 text-lg md:text-xl font-light text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm text-white/55 font-light leading-relaxed">
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ExplainerFAQ />
        <Footer compact />
      </div>
    </>
  );
};

export default Architecture;
