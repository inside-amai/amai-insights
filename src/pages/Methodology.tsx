import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
    {children}
  </span>
);

const SectionNum = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-6 font-mono">
    {children}
  </div>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg md:text-xl font-light text-white tracking-tight mb-3">
    {children}
  </h3>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm md:text-base font-light text-white/65 leading-relaxed">
    {children}
  </p>
);

const Mono = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-white/85">{children}</span>
);

const Stat = ({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) => (
  <div className="border-t border-white/10 pt-5">
    <div className="text-2xl md:text-3xl font-light text-white tracking-tight">
      {value}
    </div>
    <div className="text-[10px] tracking-[0.28em] uppercase text-white/50 font-mono mt-2">
      {label}
    </div>
    {note && (
      <div className="text-xs font-light text-white/45 mt-2 leading-relaxed">
        {note}
      </div>
    )}
  </div>
);

const Callout = ({
  tone = 'default',
  children,
}: {
  tone?: 'default' | 'warn';
  children: React.ReactNode;
}) => (
  <div
    className={`border p-5 md:p-6 text-sm font-light leading-relaxed ${
      tone === 'warn'
        ? 'border-amber-400/30 bg-amber-400/[0.03] text-amber-100/80'
        : 'border-white/10 bg-white/[0.02] text-white/70'
    }`}
  >
    {children}
  </div>
);

const Methodology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="relative bg-perspective-grid">
          <div className="relative z-10">
            {/* HERO */}
            <section className="pt-32 md:pt-40 pb-20 md:pb-28">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eyebrow>Methodology</Eyebrow>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-tight max-w-4xl">
                    How the score is built, and how to check our work.
                  </h1>
                  <p className="mt-8 text-base md:text-lg font-light text-white/60 leading-relaxed max-w-3xl">
                    TARI™ is not a black box. Given the same inputs, a score is
                    recomputable and auditable. Below is the full method, the
                    validation numbers, and the limitations we disclose: the
                    same figures our own automated checks enforce on every
                    commit.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-[0.28em] uppercase text-white/40 font-mono">
                    <span>Canonical as of 2026-07-21</span>
                    <span>post-#130 promote</span>
                    <span>Source: claims-registry</span>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* 01 */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <SectionNum>01 // Two engines, one index</SectionNum>
                  <H2>TARI™ is two independent scoring engines under one 300 to 850 scale.</H2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 mt-14">
                  <div className="bg-black p-8 md:p-10">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3 font-mono">
                      Engine A
                    </div>
                    <H3>Conduct</H3>
                    <Body>
                      Scores instrumented agents: how an agent behaves,
                      content-off.
                    </Body>
                  </div>
                  <div className="bg-black p-8 md:p-10">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3 font-mono">
                      Engine B
                    </div>
                    <H3>Credit</H3>
                    <Body>
                      Scores on-chain wallets: repayment behavior from public
                      lending data.
                    </Body>
                  </div>
                </div>

                <div className="mt-8">
                  <Callout>
                    They share a scale, not data. There is no identity link
                    between a wallet and an agent. A subject carrying both
                    halves is the end state, not today's data. Never read a
                    null conduct score as a zero.
                  </Callout>
                </div>
              </div>
            </section>

            {/* 02 CONDUCT */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <SectionNum>02 // The conduct engine (agents)</SectionNum>
                  <H2>What it reads, content-off.</H2>
                  <p className="mt-6 text-sm md:text-base font-light text-white/60 leading-relaxed max-w-3xl">
                    Only the agent's tool names, order, and timing. Never
                    prompts, tool arguments, or model outputs, and nothing
                    leaves the machine. That single constraint is what lets a
                    developer self-install with zero privacy risk, and a
                    sovereign institution deploy without exporting a sensitive
                    byte.
                  </p>
                </motion.div>

                {/* Five dimensions */}
                <div className="mt-14">
                  <SectionNum>Five scored dimensions</SectionNum>
                  <p className="text-sm font-light text-white/55 leading-relaxed max-w-3xl mb-8">
                    Each bound to OWASP ASI01–10 and MITRE ATLAS, so an
                    auditor traces every point.
                  </p>
                  <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {[
                      {
                        n: 'D1',
                        t: 'Exfiltration Risk',
                        d: 'Data-handling; the read → encode → external-POST shape. Highest-weighted.',
                        hi: true,
                      },
                      {
                        n: 'D2',
                        t: 'Resilience',
                        d: 'Resistance to injection and attack.',
                      },
                      {
                        n: 'D3',
                        t: 'Scope Integrity',
                        d: 'Staying within mandate.',
                      },
                      {
                        n: 'D4',
                        t: 'Reliability',
                        d: 'Clean completion; errors, retries, stalls.',
                      },
                      {
                        n: 'D5',
                        t: 'Consistency',
                        d: 'Drift and anomaly over time.',
                      },
                    ].map((d) => (
                      <div key={d.n} className="bg-black p-6 md:p-8">
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/40">
                            {d.n}
                          </span>
                          <div>
                            <h4
                              className={`text-base md:text-lg font-light tracking-tight ${
                                d.hi ? 'text-white' : 'text-white/90'
                              }`}
                            >
                              {d.t}
                              {d.hi && (
                                <span className="ml-3 text-[9px] font-mono tracking-[0.28em] uppercase text-teal-300/80">
                                  Top weight
                                </span>
                              )}
                            </h4>
                            <p className="mt-2 text-sm font-light text-white/55 leading-relaxed">
                              {d.d}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="bg-black hidden md:block" aria-hidden />
                  </div>
                  <p className="mt-6 text-sm font-light text-white/55 leading-relaxed max-w-3xl">
                    Weights are documented expert priors (rank-order centroid),
                    carried with a wide confidence band and re-fit as real
                    labels accrue. Never equal weights, and never presented as
                    fitted. Exfiltration is a first-class dimension by design:
                    the exfil sequence is what most tools never score.
                  </p>
                </div>

                {/* Validation */}
                <div className="mt-16">
                  <SectionNum>Validation</SectionNum>
                  <p className="text-sm font-light text-white/55 leading-relaxed max-w-3xl mb-8">
                    AgentDojo important_instructions, injection-compromise
                    discrimination.
                  </p>
                  <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
                    <Stat
                      value="AUC 0.835"
                      label="gpt-4o, single model"
                      note="n = 726. The single-model headline."
                    />
                    <Stat
                      value="AUC 0.797"
                      label="Two-model pooled"
                      note="gpt-4o + gpt-4o-mini, n = 1,452."
                    />
                    <Stat
                      value="AUC 0.769"
                      label="gpt-4o-mini"
                      note="Harness soundness confirmed. Attack-success 0.55 contains AgentDojo's published 0.531."
                    />
                  </div>
                  <div className="mt-10">
                    <Callout>
                      The defensible claim, stated plainly: the score
                      discriminates injection-compromised behavior on
                      benchmarks. It is not a validated prediction of
                      real-world incidents. We say "discriminates," not
                      "predicts."
                    </Callout>
                  </div>
                </div>

                {/* Limitations */}
                <div className="mt-16">
                  <SectionNum>Honest limitations</SectionNum>
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-t border-white/10 pt-5">
                      <H3>Competence entanglement</H3>
                      <Body>
                        A low score correlates slightly with task failure, not
                        only compromise (competence-control AUC 0.585 gpt-4o
                        and 0.680 mini). The score is most trustworthy on
                        capable agents.
                      </Body>
                    </div>
                    <div className="border-t border-white/10 pt-5">
                      <H3>Coverage</H3>
                      <div className="grid sm:grid-cols-3 gap-4 mt-2">
                        <div className="border border-white/10 bg-black p-4">
                          <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-teal-300/80 mb-2">
                            Strong
                          </div>
                          <div className="text-sm font-light text-white/70">
                            Injection and exfiltration (AUC ≥ 0.797)
                          </div>
                        </div>
                        <div className="border border-white/10 bg-black p-4">
                          <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-amber-300/80 mb-2">
                            Partial
                          </div>
                          <div className="text-sm font-light text-white/70">
                            Data-leak
                          </div>
                        </div>
                        <div className="border border-white/10 bg-black p-4">
                          <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-2">
                            Blind
                          </div>
                          <div className="text-sm font-light text-white/70">
                            Content-compliance by design. We never read
                            content.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bands */}
                <div className="mt-16">
                  <SectionNum>The bands (per-run, at moderate confidence)</SectionNum>
                  <p className="text-sm font-light text-white/55 leading-relaxed max-w-3xl mb-6">
                    Benchmark-conditional fractions. Not real-world
                    probabilities.
                  </p>
                  <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {[
                      {
                        r: '800 to 850',
                        v: '~6.9% compromised',
                        c: 'text-teal-300/90',
                      },
                      {
                        r: '650 to 799',
                        v: '≈ base rate',
                        c: 'text-green-300/90',
                        note: 'Band membership uninformative, non-monotone.',
                      },
                      {
                        r: '550 to 649',
                        v: '~72% compromised',
                        c: 'text-orange-300/90',
                      },
                      {
                        r: '300 to 549',
                        v: 'Insufficient data',
                        c: 'text-red-300/90',
                      },
                    ].map((b) => (
                      <div key={b.r} className="bg-black p-5">
                        <div
                          className={`text-[10px] tracking-[0.28em] uppercase font-mono ${b.c} mb-2`}
                        >
                          {b.r}
                        </div>
                        <div className="text-sm font-light text-white">
                          {b.v}
                        </div>
                        {b.note && (
                          <div className="text-xs font-light text-white/45 mt-2 leading-relaxed">
                            {b.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Callout tone="warn">
                      A real 725 to 749 pocket runs ~78% compromised in
                      benchmark data. Do not read 780 as safer than 700. The
                      bands rank, they do not certify.
                    </Callout>
                  </div>
                </div>

                {/* Triage */}
                <div className="mt-16">
                  <SectionNum>Triage, not gate</SectionNum>
                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                    <div className="border border-white/10 bg-black p-6">
                      <H3>UNRATED</H3>
                      <Body>
                        Do not act on the number. Instrument first. When
                        confidence is low the subject is UNRATED, and
                        confidence is two-level, so a "high-confidence" agent
                        claim is unreachable by construction.
                      </Body>
                    </div>
                    <div className="border border-white/10 bg-black p-6">
                      <H3>800+</H3>
                      <Body>
                        No adverse signal. Not a safety certificate. Any
                        gating is done by a policy you set, never by the
                        score alone.
                      </Body>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 03 CREDIT */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <SectionNum>03 // The credit engine (wallets)</SectionNum>
                  <H2>An on-chain WOE logistic scorecard over real DeFi lending behavior.</H2>
                  <p className="mt-6 text-sm md:text-base font-light text-white/60 leading-relaxed max-w-3xl">
                    Aave v2/v3, Morpho, on Ethereum + Base. Target:
                    liquidation-driven default (<Mono>bad_liq</Mono>). Rigor:
                    per-wallet relative 12/12-month windows. Features
                    drawn only from the observation window, the label only
                    from a later performance window, so there is no leakage.
                    It rank-orders default risk on 300 to 850. It is not a
                    calibrated probability of default.
                  </p>
                </motion.div>

                {/* OOT Validation */}
                <div className="mt-14">
                  <SectionNum>Validation (out-of-time)</SectionNum>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-white/10 bg-black p-6 md:p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-teal-300/80 mb-3">
                        Headline (like-for-like)
                      </div>
                      <div className="text-4xl font-light text-white tracking-tight">
                        Gini 0.630
                      </div>
                      <div className="text-sm font-light text-white/65 mt-3">
                        Ethereum-only OOT, n = 21,518.
                      </div>
                      <div className="text-xs font-light text-white/45 mt-3 leading-relaxed">
                        The prior 2026-07-13 snapshot read 0.638. This moved
                        within the ±0.03 tolerance on a normal weekly data
                        refresh. Discrimination held.
                      </div>
                    </div>
                    <div className="border border-amber-400/30 bg-amber-400/[0.02] p-6 md:p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-amber-300/90 mb-3">
                        Pooled cut, use with care
                      </div>
                      <div className="text-3xl font-light text-white tracking-tight">
                        Gini 0.528
                      </div>
                      <div className="text-sm font-light text-white/65 mt-3">
                        AUC 0.764 · KS 0.395 · PSI 0.062 · n = 46,693.
                      </div>
                      <div className="text-xs font-light text-amber-100/70 mt-3 leading-relaxed">
                        Composition-flattered (a Simpson effect from Base
                        being ~half the sample). We lead with the
                        Ethereum-only 0.630 or the per-venue figures, and
                        never quote the pooled Gini alone. These pooled
                        companions belong to 0.528. They are never welded to
                        the 0.630 cut.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Per-venue */}
                <div className="mt-14">
                  <SectionNum>Per-venue OOT Gini (all rank-order)</SectionNum>
                  <div className="border border-white/10">
                    {[
                      { v: 'Aave v2 Ethereum', g: '0.68' },
                      { v: 'Aave v3 Ethereum', g: '0.53' },
                      { v: 'Aave v3 Base', g: '0.41' },
                      { v: 'Morpho Ethereum', g: '0.36' },
                      {
                        v: 'Morpho Base',
                        g: '0.91',
                        note: 'n = 500. Tiny. Not a headline.',
                      },
                    ].map((row, i) => (
                      <div
                        key={row.v}
                        className={`flex flex-wrap items-baseline justify-between gap-4 bg-black px-6 py-4 ${
                          i > 0 ? 'border-t border-white/10' : ''
                        }`}
                      >
                        <span className="text-sm font-light text-white/80">
                          {row.v}
                        </span>
                        <span className="flex items-baseline gap-4">
                          {row.note && (
                            <span className="text-xs font-light text-amber-300/80">
                              {row.note}
                            </span>
                          )}
                          <span className="font-mono text-lg font-light text-white tracking-tight">
                            {row.g}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Population */}
                <div className="mt-14">
                  <SectionNum>Scored population</SectionNum>
                  <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
                    <Stat
                      value="155,634"
                      label="Eligible wallets"
                      note="This is the pool size, not the sample size of any Gini figure."
                    />
                    <Stat value="~410,000" label="Raw wallets" />
                    <Stat value="~15M" label="Events processed" />
                  </div>
                </div>

                {/* Per-chain calibration */}
                <div className="mt-14">
                  <SectionNum>Per-chain calibration + the economic-stake floor</SectionNum>
                  <p className="text-sm font-light text-white/60 leading-relaxed max-w-3xl mb-6">
                    Tier cutpoints differ by chain, so a served tier never
                    understates its Ethereum-validated risk on the chain the
                    wallet actually transacted on.
                  </p>
                  <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <div className="bg-black p-6 md:p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-3">
                        Ethereum cutpoints
                      </div>
                      <div className="font-mono text-xl text-white/90">
                        580 / 670 / 740
                      </div>
                      <div className="text-xs font-light text-white/50 mt-3 leading-relaxed">
                        Economic-stake floor ~$10.
                      </div>
                    </div>
                    <div className="bg-black p-6 md:p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-3">
                        Base cutpoints
                      </div>
                      <div className="font-mono text-xl text-white/90">
                        624 / 728 / 777
                      </div>
                      <div className="text-xs font-light text-white/50 mt-3 leading-relaxed">
                        Economic-stake floor ~$0. Base is compressed and
                        safer (Base OOT Gini 0.41 vs Ethereum 0.63).
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Callout>
                      A wallet is UNRATED when its exposure is unpriced, or
                      below the chain's economic-stake floor. Below it, no
                      real liquidation test occurred, so an absent bad
                      outcome is not evidence of safety. A served Base file
                      at or below $10 is a thin-file group estimate,
                      disclosed as such, not an individual track record.
                    </Callout>
                  </div>
                </div>

                {/* Served tiers */}
                <div className="mt-14">
                  <SectionNum>Served tiers (public Bureau/hub, post per-chain gate)</SectionNum>
                  <div className="border border-white/10">
                    {[
                      {
                        t: 'Excellent',
                        n: '6,787',
                        c: 'text-teal-300/90',
                      },
                      {
                        t: 'Good',
                        n: '11,859',
                        c: 'text-green-300/90',
                      },
                      { t: 'Fair', n: '77,790', c: 'text-white/80' },
                      { t: 'Poor', n: '36,233', c: 'text-orange-300/90' },
                      {
                        t: 'UNRATED',
                        n: '22,965',
                        c: 'text-white/50',
                        note: '14.8%',
                      },
                    ].map((r, i) => (
                      <div
                        key={r.t}
                        className={`flex flex-wrap items-baseline justify-between gap-4 bg-black px-6 py-4 ${
                          i > 0 ? 'border-t border-white/10' : ''
                        }`}
                      >
                        <span
                          className={`text-[10px] font-mono tracking-[0.28em] uppercase ${r.c}`}
                        >
                          {r.t}
                        </span>
                        <span className="flex items-baseline gap-4">
                          {r.note && (
                            <span className="text-xs font-light text-white/45">
                              {r.note}
                            </span>
                          )}
                          <span className="font-mono text-lg font-light text-white tracking-tight">
                            {r.n}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-light text-white/55 leading-relaxed">
                    32,259 files carry the thin-file actuarial disclosure.
                  </p>
                </div>

                {/* Honest limitation */}
                <div className="mt-14">
                  <SectionNum>Honest limitation</SectionNum>
                  <div className="max-w-4xl">
                    <Callout>
                      The model is not yet calibrated in-band (calibration
                      ratio 0.27–0.90 vs a 0.80–1.20 target). It
                      over-predicts default (conservative), from real
                      base-rate drift. Rank-ordering is unaffected. We
                      disclose it rather than smooth it.
                    </Callout>
                  </div>
                </div>
              </div>
            </section>

            {/* 04 WHY TRUST */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <SectionNum>04 // Why you can trust the number</SectionNum>
                  <H2>Reproducible. Honest by construction. Mechanically enforced.</H2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 mt-14">
                  <div className="bg-black p-8">
                    <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-4">
                      Reproducible, not black-box
                    </div>
                    <Body>
                      Same inputs + ledger state produce the same score,
                      recomputable and auditable.
                    </Body>
                  </div>
                  <div className="bg-black p-8">
                    <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-4">
                      Honest by construction
                    </div>
                    <Body>
                      UNRATED when we can't tell. Disclosed limitations
                      travel with every figure. "Not a safety certificate"
                      and "not a calibrated probability" are stated, not
                      buried.
                    </Body>
                  </div>
                  <div className="bg-black p-8">
                    <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-4">
                      Mechanically enforced
                    </div>
                    <Body>
                      Our own automated checks recompute every published
                      claim from the raw artifacts on each commit: the band
                      statements (<Mono>band_claims_check</Mono>), the
                      per-chain tier transport (
                      <Mono>check_tier_transport</Mono>), and a
                      claims-registry drift check that fails the build if
                      any number here drifts from source. The page and the
                      product cannot silently disagree.
                    </Body>
                  </div>
                </div>
              </div>
            </section>

            {/* CHANGELOG LINK */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-wrap items-baseline justify-between gap-6">
                  <div>
                    <Eyebrow>Versioned. Auditable.</Eyebrow>
                    <p className="text-lg md:text-xl font-light text-white/75 max-w-2xl leading-relaxed">
                      Every material change is recorded as an immutable
                      methodology version.
                    </p>
                  </div>
                  <Link
                    to="/methodology/changelog"
                    className="inline-flex items-center gap-2 text-sm font-mono tracking-[0.2em] uppercase text-white/85 hover:text-white border-b border-white/20 hover:border-white/60 pb-1 transition-colors"
                  >
                    View changelog
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
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
