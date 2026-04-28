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
        {/* Main content with perspective grid background */}
        <div className="relative bg-perspective-grid">
          {/* Hero */}
          <div className="relative z-10">
            <ExplainerHero
              headline={
                <span className="font-light">The Reputation Layer for the Autonomous Economy.</span>
              }
              subtext={
                <p>
                  A vertically integrated protocol for scoring agent risk, intercepting malicious payloads, and enforcing accountability via an immutable cryptographic ledger.
                </p>
              }
            />
          </div>

          {/* Main Content Sections */}
          <div className="relative z-10">
            <AgentLayersSection
              eyebrow="AMAI Protocol Architecture"
              title="The Deterministic Trust Substrate"
              subtitle="A vertically integrated architecture for scoring agent risk, intercepting malicious payloads, and enforcing accountability via an immutable cryptographic ledger."
              layers={[
                {
                  id: 'identity',
                  title: 'Identity Layer',
                  subtitle: 'Non-Human Identity Provisioning',
                  items: [
                    { label: 'Immutable Identifiers', desc: 'Cryptographic agent identity anchored on a public ledger.' },
                    { label: 'Dynamic Provenance', desc: 'Replace static API keys with dynamic intent signatures.' },
                    { label: 'Least Privilege', desc: 'Ephemeral access eliminates "Excessive Autonomy" vulnerabilities.' },
                  ],
                },
                {
                  id: 'gateway',
                  title: 'The Execution Gateway',
                  subtitle: 'The TARI™ Interceptor',
                  items: [
                    { label: 'Real-Time Scoring', desc: 'Decouples intelligence from execution payloads in milliseconds.' },
                    { label: 'Edge Hook Integration', desc: 'Deploys natively within NeMo, LangChain, and AutoGen.' },
                    { label: 'Deterministic Kill-Switches', desc: 'Mathematically bounds blast radius before API execution.' },
                  ],
                },
                {
                  id: 'ledger',
                  title: 'The Audit Ledger',
                  subtitle: 'Cryptographic State Resolution',
                  items: [
                    { label: 'The Agent Bureau', desc: 'A public, decentralized record of all autonomous actions.' },
                    { label: 'SOC2 Verification', desc: 'Flawless forensic trails completely separate from human activity.' },
                    { label: 'Absolute Accountability', desc: 'Trust is enforced by decentralized consensus, not corporate promises.' },
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
                    Agent deployment is transitioning from heuristic prompt engineering to deterministic security models.
                    <br /><br />
                    Absolute, verifiable trust is the prerequisite for autonomous scale.
                  </p>
                </motion.div>

                {/* Micro break */}
                <div className="flex justify-center pt-10">
                  <div className="w-8 h-px bg-white/10" />
                </div>
              </div>
            </section>

            {/* Operational Outcome */}
            <section className="relative py-20 md:py-28">
              <div className="container mx-auto px-6">
                <motion.div
                  className="max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-12 md:mb-16">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                      Operational Outcome
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
                      Security becomes a mathematical certainty.
                    </h2>
                  </div>

                  <div className="border border-white/10 rounded-lg bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm divide-y divide-white/5">
                    {[
                      {
                        label: 'Deterministic Protection',
                        desc: 'Enterprise data is shielded from non-deterministic LLM hallucinations.',
                      },
                      {
                        label: 'Payload Interception',
                        desc: 'Malicious intent and prompt injections are severed before execution.',
                      },
                      {
                        label: 'Flawless Compliance',
                        desc: 'Agent actions are permanently recorded on an immutable cryptographic ledger.',
                      },
                      {
                        label: 'Unbounded Scale',
                        desc: 'Organizations can finally deploy autonomous systems without compromising core infrastructure.',
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-5 p-6 md:p-7"
                      >
                        <span className="text-[10px] text-white/30 font-mono mt-1 w-5 flex-shrink-0">
                          0{i + 1}
                        </span>
                        <div className="w-4 h-px bg-white/20 mt-3 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-sm md:text-base text-white/85 font-medium tracking-tight">
                            {item.label}
                          </h3>
                          <p className="mt-1 text-xs md:text-sm text-white/45 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-10 text-center text-xs md:text-sm text-white/40 leading-relaxed">
                    AI agents no longer operate in the dark—execution is bound by verifiable trust.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Platform Overview Section - Centered */}
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
                      {t('platform.eyebrow')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
                      {t('platform.title')}
                    </h2>
                  </div>
                  <div className="text-sm text-white/50 leading-relaxed space-y-4">
                    <p>{t('platform.p1')}</p>
                    <p>{t('platform.p2')}</p>
                    <p>{t('platform.p3')}</p>
                  </div>
                </motion.div>
              </div>
            </section>

            <TechnicalFoundationSection />
          </div>
        </div>

        {/* FAQ Section */}
        <ExplainerFAQ />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Architecture;
