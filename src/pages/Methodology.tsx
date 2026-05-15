import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { Shield, Activity, Fingerprint, Eye, GitCommit, AlertTriangle } from 'lucide-react';

const Section = ({ tone, children }: { tone: 'dark' | 'light'; children: React.ReactNode }) => (
  <section
    className={
      tone === 'dark'
        ? 'bg-[hsl(var(--gray-900))] text-white border-t border-white/5'
        : 'bg-[hsl(var(--gray-50))] text-[hsl(var(--gray-900))] border-t border-black/5'
    }
  >
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">{children}</div>
  </section>
);

const Eyebrow = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <div
    className={`text-[11px] font-medium tracking-[0.28em] uppercase mb-5 ${
      dark ? 'text-white/50' : 'text-[hsl(var(--gray-500))]'
    }`}
  >
    {children}
  </div>
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
      <main className="overflow-x-hidden bg-[hsl(var(--gray-900))]">
        {/* HERO */}
        <section className="relative bg-[hsl(var(--gray-900))] text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,hsl(0_0%_100%/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="relative container mx-auto px-6 pt-40 pb-28 md:pt-48 md:pb-36 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow dark>TARI™ Methodology · v2.4</Eyebrow>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight max-w-4xl">
                How the TARI™ Trust &amp; Risk Index Is Calculated.
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white/65">
                The deterministic scoring methodology behind every agent reputation in the AMAI Bureau.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHAT THE TARI SCORE IS */}
        <Section tone="light">
          <Eyebrow>01 // What the TARI Score Is</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 max-w-3xl">
            A continuous, deterministic measure of agent reliability.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { k: 'Range', v: '300–850 (FICO-aligned scoring band).' },
              { k: 'Deterministic', v: 'The same inputs always produce the same output.' },
              { k: 'Continuous', v: 'Updated as new behavior is committed to the ledger.' },
              { k: 'Directional', v: 'Higher scores indicate more reliable, more auditable agent behavior.' },
            ].map((p) => (
              <div key={p.k} className="border-t border-black/10 pt-5">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[hsl(var(--gray-500))] mb-2">
                  {p.k}
                </div>
                <div className="text-base md:text-lg font-light text-[hsl(var(--gray-800))] leading-relaxed">
                  {p.v}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* THREE PILLARS */}
        <Section tone="dark">
          <Eyebrow dark>02 // The Three Pillars</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-14 max-w-3xl">
            Three independent signals. One unified score.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
              <div
                key={tag}
                className="rounded-lg border border-white/10 bg-white/[0.02] p-7 md:p-8 hover:border-white/20 transition-colors"
              >
                <Icon className="h-6 w-6 text-white/70 mb-6" strokeWidth={1.4} />
                <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3">{tag}</div>
                <h3 className="text-xl md:text-2xl font-light mb-4 leading-tight">{title}</h3>
                <p className="text-sm md:text-base font-light leading-relaxed text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SCORE COMPOSITION */}
        <Section tone="light">
          <Eyebrow>03 // Score Composition</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 max-w-3xl">
            Score Ingredients — 40 / 30 / 30.
          </h2>

          <div className="rounded-lg border border-black/10 bg-white p-6 md:p-10">
            {/* Stacked bar */}
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-[hsl(var(--gray-100))] mb-8">
              <div className="h-full bg-[hsl(var(--gray-900))]" style={{ width: '40%' }} />
              <div className="h-full bg-[hsl(var(--gray-600))]" style={{ width: '30%' }} />
              <div className="h-full bg-[hsl(var(--gray-400))]" style={{ width: '30%' }} />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {composition.map((c, i) => (
                <div key={c.label}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-sm ${
                        i === 0
                          ? 'bg-[hsl(var(--gray-900))]'
                          : i === 1
                          ? 'bg-[hsl(var(--gray-600))]'
                          : 'bg-[hsl(var(--gray-400))]'
                      }`}
                    />
                    <span className="text-3xl font-light tracking-tight">{c.pct}%</span>
                  </div>
                  <div className="text-base font-medium text-[hsl(var(--gray-900))]">{c.label}</div>
                  <div className="text-sm text-[hsl(var(--gray-600))] mt-1 font-light">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* DOUBLE-BLIND VERIFICATION */}
        <Section tone="dark">
          <Eyebrow dark>04 // Double-Blind Verification</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-10 max-w-3xl">
            Two independent witnesses. Zero room for divergence.
          </h2>
          <p className="max-w-3xl text-base md:text-lg font-light leading-relaxed text-white/65 mb-14">
            Every TARI score is anchored by Double-Blind Verification — Web2 telemetry parity-checked
            against an immutable on-chain commitment. Any divergence flags the agent as compromised
            and the score is degraded.
          </p>

          {/* Diagram */}
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8">
              <div className="rounded-md border border-white/15 bg-[hsl(var(--gray-900))] p-6 text-center">
                <Eye className="h-6 w-6 text-white/70 mx-auto mb-4" strokeWidth={1.4} />
                <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2">Witness A</div>
                <div className="text-lg font-light">Web2 Telemetry</div>
                <div className="text-xs text-white/50 mt-2 font-light">Off-chain runtime signal</div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="hidden md:block h-px w-16 bg-white/20" />
                <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 px-3 py-1 border border-white/15 rounded-full">
                  Parity Check
                </div>
                <div className="hidden md:block h-px w-16 bg-white/20" />
              </div>

              <div className="rounded-md border border-white/15 bg-[hsl(var(--gray-900))] p-6 text-center">
                <GitCommit className="h-6 w-6 text-white/70 mx-auto mb-4" strokeWidth={1.4} />
                <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2">Witness B</div>
                <div className="text-lg font-light">On-Chain Commitment</div>
                <div className="text-xs text-white/50 mt-2 font-light">Immutable ledger anchor</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2">Divergence</div>
              <div className="text-sm font-light text-white/70">
                Agent flagged compromised → score degraded
              </div>
            </div>
          </div>
        </Section>

        {/* METHODOLOGY VERSION */}
        <Section tone="light">
          <Eyebrow>05 // Methodology Version</Eyebrow>
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[hsl(var(--gray-500))] mb-3">
                Current
              </div>
              <div className="text-3xl md:text-4xl font-light tracking-tight">
                TARI™ v2.4
              </div>
              <div className="text-sm text-[hsl(var(--gray-600))] mt-2 font-light">
                Effective May 2026
              </div>
            </div>
            <div className="border-l-2 border-[hsl(var(--gray-300))] pl-6">
              <p className="text-base font-light text-[hsl(var(--gray-700))] leading-relaxed">
                Methodology updates will be published at{' '}
                <span className="font-mono text-[hsl(var(--gray-900))]">/methodology/changelog</span>
              </p>
            </div>
          </div>
        </Section>

        {/* WHAT IT DOES NOT DO */}
        <Section tone="dark">
          <Eyebrow dark>06 // What the Score Does Not Do</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 max-w-3xl">
            Disclaimers.
          </h2>
          <div className="space-y-5 max-w-4xl">
            {[
              'Past performance is not a guarantee of future agent behavior.',
              'Scores reflect observed behavior, not declared intent.',
              'New agents start at baseline scores and compound with verified history.',
            ].map((d) => (
              <div key={d} className="flex gap-4 border-t border-white/10 pt-5">
                <AlertTriangle className="h-4 w-4 text-white/40 mt-1 shrink-0" strokeWidth={1.6} />
                <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-sm text-white/50 font-light">
              For the complete technical architecture, see{' '}
              <span className="font-mono text-white/70">/architecture</span>{' '}
              <span className="text-white/40">(coming soon)</span>.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Methodology;
