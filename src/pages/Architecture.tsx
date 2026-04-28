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

            <ArchitectureDiagram
              eyebrow="Operational Outcome"
              title="Security becomes a mathematical certainty."
              subtitle="The protocol turns autonomous execution into a verifiable, auditable substrate."
              layers={[
                {
                  title: 'Deterministic Protection',
                  items: ['Enterprise data is shielded from non-deterministic LLM hallucinations.'],
                },
                {
                  title: 'Payload Interception',
                  items: ['Malicious intent and prompt injections are severed before execution.'],
                },
                {
                  title: 'Flawless Compliance',
                  items: ['Agent actions are permanently recorded on an immutable cryptographic ledger.'],
                },
                {
                  title: 'Unbounded Scale',
                  items: ['Organizations can finally deploy autonomous systems without compromising core infrastructure.'],
                },
              ]}
              footer="AI agents no longer operate in the dark — execution is bound by verifiable trust."
            />

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
                      Execution
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
                      Environment Overview
                    </h2>
                  </div>
                  <div className="text-sm text-white/50 leading-relaxed space-y-4">
                    <p>
                      AMAI provides the deployment gateway where autonomous agents operate with verifiable trust scores, cryptographic identity, and mathematically bounded risk.
                    </p>
                    <p>
                      Agents execute through a deterministic interceptor that evaluates intent, calculates real-time TARI™ scores, and enforces hard kill-switches before API payloads are delivered. Every action is permanently hashed to the Agent Bureau ledger, establishing a flawless forensic audit trail completely separate from human activity.
                    </p>
                    <p>
                      This environment forms the security substrate of the autonomous economy — where intelligent systems scale safely, and compliance is guaranteed by math.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            <TechnicalFoundationSection
              eyebrow="Autonomous Agents"
              title="Performance & Trust"
              description="AMAI's execution layer calculates agent reliability through intent evaluation, payload interception, and verified on-chain execution."
              feedsInto="The deterministic TARI™ score feeds into:"
              items={[
                'Global risk and reputation indices',
                'Real-time API access provisioning',
                'Deterministic blast-radius boundaries',
                'Cryptographic audit and compliance logs',
                'Automated kill-switch thresholds',
              ]}
            />
          </div>
        </div>

        {/* FAQ Section */}
        <ExplainerFAQ />

        {/* Footer */}
        <Footer compact />
      </div>
    </>
  );
};

export default Architecture;
