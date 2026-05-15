import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExplainerHero } from '@/components/ExplainerHero';
import { Footer } from '@/components/Footer';
import { Activity, Shield, Fingerprint, Eye, GitCommit, AlertTriangle } from 'lucide-react';

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
    {children}
  </span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
    {children}
  </h2>
);

const Methodology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const composition = [
    { label: 'Behavioral Risk', pct: 40, desc: 'Real-time intent + blast radius' },
    { label: 'Industry Context', pct: 30, desc: 'Endpoint-specific guardrails' },
    { label: 'Verified History', pct: 30, desc: 'Immutable provenance ledger' },
  ];

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="relative bg-perspective-grid">
          <div className="relative z-10">
              <ExplainerHero
              headline={
                <>
                  <span className="font-light">How the TARI™ Score</span>
                  <span className="block font-light">Is Calculated.</span>
                </>
              }
              subtext={
                <>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                    TARI™ Methodology · v2.4
                  </p>
                  <p>
                    The deterministic scoring methodology behind every agent reputation
                    in the AMAI Bureau.
                  </p>
                </>
              }
            />

            {/* 01 — What the TARI Score Is */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Eyebrow>01 // What The TARI Score Is</Eyebrow>
                  <SectionTitle>A continuous, deterministic measure of agent reliability.</SectionTitle>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-14">
                  {[
                    { k: 'Range', v: '300–850, FICO-aligned scoring band.' },
                    { k: 'Deterministic', v: 'The same inputs always produce the same output.' },
                    { k: 'Continuous', v: 'Updated as new behavior is committed to the ledger.' },
                    { k: 'Directional', v: 'Higher scores indicate more reliable, more auditable agent behavior.' },
                  ].map((p) => (
                    <div key={p.k} className="border-t border-white/10 pt-5">
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2 font-mono">
                        {p.k}
                      </div>
                      <div className="text-sm md:text-base font-light text-white/70 leading-relaxed">
                        {p.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 02 — The Three Pillars */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-3xl"
                >
                  <Eyebrow>02 // The Three Pillars</Eyebrow>
                  <SectionTitle>Three independent signals. One unified score.</SectionTitle>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-px bg-white/10 mt-14 border border-white/10">
                  {[
                    {
                      icon: Activity,
                      tag: 'Pillar A',
                      title: 'Intent & Blast Radius',
                      desc: 'Real-time payload analysis. Execution weighting + semantic drift detection.',
                    },
                    {
                      icon: Shield,
                      tag: 'Pillar B',
                      title: 'Industry Guardrails',
                      desc: 'Contextual trust per endpoint. Same agent, different scores for DeFi vs healthcare.',
                    },
                    {
                      icon: Fingerprint,
                      tag: 'Pillar C',
                      title: 'Immutable Provenance',
                      desc: 'Cryptographic verification of agent history. Past behavior compounds into the score.',
                    },
                  ].map(({ icon: Icon, tag, title, desc }) => (
                    <div key={tag} className="bg-black p-8 md:p-10">
                      <Icon className="h-5 w-5 text-white/60 mb-6" strokeWidth={1.4} />
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3 font-mono">
                        {tag}
                      </div>
                      <h3 className="text-xl font-light text-white mb-4 leading-tight">{title}</h3>
                      <p className="text-sm font-light leading-relaxed text-white/55">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 03 — Score Composition */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-3xl"
                >
                  <Eyebrow>03 // Score Composition</Eyebrow>
                  <SectionTitle>Score Ingredients — 40 / 30 / 30.</SectionTitle>
                </motion.div>

                <div className="mt-14 border border-white/10 bg-white/[0.02] p-8 md:p-10">
                  {/* Stacked bar */}
                  <div className="flex h-2 w-full overflow-hidden bg-white/5 mb-10">
                    <div className="h-full bg-white/80" style={{ width: '40%' }} />
                    <div className="h-full bg-white/45" style={{ width: '30%' }} />
                    <div className="h-full bg-white/20" style={{ width: '30%' }} />
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {composition.map((c, i) => (
                      <div key={c.label} className="border-t border-white/10 pt-5">
                        <div className="flex items-baseline gap-3 mb-3">
                          <span
                            className={`inline-block h-2 w-2 ${
                              i === 0 ? 'bg-white/80' : i === 1 ? 'bg-white/45' : 'bg-white/20'
                            }`}
                          />
                          <span className="text-3xl font-light text-white tracking-tight">
                            {c.pct}%
                          </span>
                        </div>
                        <div className="text-sm font-medium text-white/85">{c.label}</div>
                        <div className="text-xs text-white/45 mt-1 font-light leading-relaxed">
                          {c.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 04 — Double-Blind Verification */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-3xl"
                >
                  <Eyebrow>04 // Double-Blind Verification</Eyebrow>
                  <SectionTitle>Two independent witnesses. Zero room for divergence.</SectionTitle>
                  <p className="mt-6 text-sm md:text-base font-light leading-relaxed text-white/55">
                    Every TARI score is anchored by Double-Blind Verification — Web2 telemetry
                    parity-checked against a tamper-evident cryptographic commitment. Any divergence flags
                    the agent as compromised and the score is degraded.
                  </p>
                </motion.div>

                <div className="mt-14 border border-white/10 bg-white/[0.02] p-8 md:p-12">
                  <div className="grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-6">
                    <div className="border border-white/10 p-6 text-center bg-black">
                      <Eye className="h-5 w-5 text-white/60 mx-auto mb-4" strokeWidth={1.4} />
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2 font-mono">
                        Witness A
                      </div>
                      <div className="text-base font-light text-white">Web2 Telemetry</div>
                      <div className="text-xs text-white/45 mt-2 font-light">
                        Off-chain runtime signal
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center justify-center gap-3">
                      <div className="hidden md:block w-px h-10 bg-white/15" />
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/50 px-3 py-1 border border-white/15 font-mono">
                        Parity
                      </div>
                      <div className="hidden md:block w-px h-10 bg-white/15" />
                    </div>

                    <div className="border border-white/10 p-6 text-center bg-black">
                      <GitCommit className="h-5 w-5 text-white/60 mx-auto mb-4" strokeWidth={1.4} />
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2 font-mono">
                        Witness B
                      </div>
                      <div className="text-base font-light text-white">Ledger Commitment</div>
                      <div className="text-xs text-white/45 mt-2 font-light">
                        Immutable anchor
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <span className="text-[10px] tracking-[0.28em] uppercase text-white/40 font-mono mr-3">
                      Divergence
                    </span>
                    <span className="text-sm font-light text-white/65">
                      Agent flagged compromised → score degraded
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 05 — Methodology Version */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Eyebrow>05 // Methodology Version</Eyebrow>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 items-end mt-8">
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3 font-mono">
                      Current
                    </div>
                    <div className="text-3xl md:text-4xl font-light text-white tracking-tight">
                      TARI™ v2.4
                    </div>
                    <div className="text-sm text-white/45 mt-2 font-light">
                      Effective May 2026
                    </div>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      Methodology updates will be published at{' '}
                      <span className="font-mono text-white/85">/methodology/changelog</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 06 — What The Score Does Not Do */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-3xl"
                >
                  <Eyebrow>06 // What The Score Does Not Do</Eyebrow>
                  <SectionTitle>Disclaimers.</SectionTitle>
                </motion.div>

                <div className="space-y-4 mt-12 max-w-4xl">
                  {[
                    'Past performance is not a guarantee of future agent behavior.',
                    'Scores reflect observed behavior, not declared intent.',
                    'New agents start at baseline scores and compound with verified history.',
                  ].map((d) => (
                    <div key={d} className="flex gap-4 border-t border-white/10 pt-5">
                      <AlertTriangle
                        className="h-4 w-4 text-white/35 mt-1 shrink-0"
                        strokeWidth={1.6}
                      />
                      <p className="text-sm md:text-base font-light text-white/65 leading-relaxed">
                        {d}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-14 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/45 font-light">
                    For the complete technical architecture, see{' '}
                    <span className="font-mono text-white/70">/architecture</span>{' '}
                    <span className="text-white/35">(coming soon)</span>.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl text-center">
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium block mb-8">
                  Ready To Use It
                </span>
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  Pull a TARI™ Report
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </section>
          </div>
        </div>

        <Footer compact />
      </div>
    </>
  );
};

export default Methodology;
