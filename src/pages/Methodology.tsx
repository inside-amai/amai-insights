import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { pickMethodology } from '@/i18n/pageContent';

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
    {children}
  </span>
);

const SectionNum = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-6 font-mono keep-ltr" dir="ltr">
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
  <span className="font-mono text-white/85 keep-ltr" dir="ltr">{children}</span>
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
    <div className="text-2xl md:text-3xl font-light text-white tracking-tight keep-ltr" dir="ltr">
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
  const { language } = useLanguage();
  const c = pickMethodology(language);
  const isRtl = language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="overflow-x-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
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
                  <Eyebrow>{c.hero.eyebrow}</Eyebrow>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-tight max-w-4xl">
                    {c.hero.title}
                  </h1>
                  <p className="mt-8 text-base md:text-lg font-light text-white/60 leading-relaxed max-w-3xl">
                    {c.hero.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-[0.28em] uppercase text-white/40 font-mono">
                    {c.hero.meta.map((m) => <span key={m}>{m}</span>)}
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
                  <SectionNum>{c.s01.num}</SectionNum>
                  <H2>{c.s01.title}</H2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 mt-14">
                  <div className="bg-black p-8 md:p-10">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3 font-mono">
                      {c.s01.engineA}
                    </div>
                    <H3>{c.s01.conduct}</H3>
                    <Body>{c.s01.conductBody}</Body>
                  </div>
                  <div className="bg-black p-8 md:p-10">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3 font-mono">
                      {c.s01.engineB}
                    </div>
                    <H3>{c.s01.credit}</H3>
                    <Body>{c.s01.creditBody}</Body>
                  </div>
                </div>

                <div className="mt-8">
                  <Callout>{c.s01.callout}</Callout>
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
                  <SectionNum>{c.s02.num}</SectionNum>
                  <H2>{c.s02.title}</H2>
                  <p className="mt-6 text-sm md:text-base font-light text-white/60 leading-relaxed max-w-3xl">
                    {c.s02.intro}
                  </p>
                </motion.div>

                <div className="mt-14">
                  <SectionNum>{c.s02.dimsHead}</SectionNum>
                  <p className="text-sm font-light text-white/55 leading-relaxed max-w-3xl mb-8">
                    {c.s02.dimsIntro}
                  </p>
                  <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {c.s02.dims.map((d) => (
                      <div key={d.n} className="bg-black p-6 md:p-8">
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/40 keep-ltr" dir="ltr">
                            {d.n}
                          </span>
                          <div>
                            <h4 className={`text-base md:text-lg font-light tracking-tight ${('hi' in d && d.hi) ? 'text-white' : 'text-white/90'}`}>
                              {d.t}
                              {'hi' in d && d.hi && (
                                <span className="ml-3 text-[9px] font-mono tracking-[0.28em] uppercase text-teal-300/80">
                                  {c.s02.topWeight}
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
                    {c.s02.dimsNote}
                  </p>
                </div>

                {/* Validation */}
                <div className="mt-16">
                  <SectionNum>{c.s02.valHead}</SectionNum>
                  <p className="text-sm font-light text-white/55 leading-relaxed max-w-3xl mb-8">
                    {c.s02.valIntro}
                  </p>
                  <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
                    {c.s02.stats.map((s) => (
                      <Stat key={s.value + s.label} value={s.value} label={s.label} note={s.note} />
                    ))}
                  </div>
                  <div className="mt-10">
                    <Callout>{c.s02.valCallout}</Callout>
                  </div>
                </div>

                {/* Limitations */}
                <div className="mt-16">
                  <SectionNum>{c.s02.limHead}</SectionNum>
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-t border-white/10 pt-5">
                      <H3>{c.s02.compTitle}</H3>
                      <Body>{c.s02.compBody}</Body>
                    </div>
                    <div className="border-t border-white/10 pt-5">
                      <H3>{c.s02.coverageTitle}</H3>
                      <div className="grid sm:grid-cols-3 gap-4 mt-2">
                        {c.s02.coverage.map((cov, i) => (
                          <div key={cov.tag} className="border border-white/10 bg-black p-4">
                            <div className={`text-[10px] font-mono tracking-[0.28em] uppercase mb-2 ${
                              i === 0 ? 'text-teal-300/80' : i === 1 ? 'text-amber-300/80' : 'text-white/40'
                            }`}>
                              {cov.tag}
                            </div>
                            <div className="text-sm font-light text-white/70">{cov.body}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bands */}
                <div className="mt-16">
                  <SectionNum>{c.s02.bandsHead}</SectionNum>
                  <p className="text-sm font-light text-white/55 leading-relaxed max-w-3xl mb-6">
                    {c.s02.bandsIntro}
                  </p>
                  <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {c.s02.bands.map((b, i) => {
                      const colors = ['text-teal-300/90', 'text-green-300/90', 'text-orange-300/90', 'text-red-300/90'];
                      return (
                        <div key={b.r} className="bg-black p-5">
                          <div className={`text-[10px] tracking-[0.28em] uppercase font-mono ${colors[i]} mb-2 keep-ltr`} dir="ltr">
                            {b.r}
                          </div>
                          <div className="text-sm font-light text-white">{b.v}</div>
                          {'note' in b && b.note && (
                            <div className="text-xs font-light text-white/45 mt-2 leading-relaxed">{b.note}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <Callout tone="warn">{c.s02.bandsWarn}</Callout>
                  </div>
                </div>

                {/* Triage */}
                <div className="mt-16">
                  <SectionNum>{c.s02.triageHead}</SectionNum>
                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                    {c.s02.triage.map((tr) => (
                      <div key={tr.t} className="border border-white/10 bg-black p-6">
                        <H3><span className="keep-ltr" dir="ltr">{tr.t}</span></H3>
                        <Body>{tr.b}</Body>
                      </div>
                    ))}
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
                  <SectionNum>{c.s03.num}</SectionNum>
                  <H2>{c.s03.title}</H2>
                  <p className="mt-6 text-sm md:text-base font-light text-white/60 leading-relaxed max-w-3xl">
                    {c.s03.intro1}<Mono>bad_liq</Mono>{c.s03.intro2}
                  </p>
                </motion.div>

                <div className="mt-14">
                  <SectionNum>{c.s03.valHead}</SectionNum>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-white/10 bg-black p-6 md:p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-teal-300/80 mb-3">
                        {c.s03.headline}
                      </div>
                      <div className="text-4xl font-light text-white tracking-tight keep-ltr" dir="ltr">
                        {c.s03.headlineValue}
                      </div>
                      <div className="text-sm font-light text-white/65 mt-3">{c.s03.headlineSample}</div>
                      <div className="text-xs font-light text-white/45 mt-3 leading-relaxed">
                        {c.s03.headlineNote}
                      </div>
                    </div>
                    <div className="border border-amber-400/30 bg-amber-400/[0.02] p-6 md:p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-amber-300/90 mb-3">
                        {c.s03.pooledLabel}
                      </div>
                      <div className="text-3xl font-light text-white tracking-tight keep-ltr" dir="ltr">
                        {c.s03.pooledValue}
                      </div>
                      <div className="text-sm font-light text-white/65 mt-3 keep-ltr" dir="ltr">{c.s03.pooledSample}</div>
                      <div className="text-xs font-light text-amber-100/70 mt-3 leading-relaxed">
                        {c.s03.pooledNote}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-14">
                  <SectionNum>{c.s03.venueHead}</SectionNum>
                  <div className="border border-white/10">
                    {c.s03.venues.map((row, i) => (
                      <div
                        key={row.v}
                        className={`flex flex-wrap items-baseline justify-between gap-4 bg-black px-6 py-4 ${i > 0 ? 'border-t border-white/10' : ''}`}
                      >
                        <span className="text-sm font-light text-white/80 keep-ltr" dir="ltr">{row.v}</span>
                        <span className="flex items-baseline gap-4">
                          {'note' in row && row.note && (
                            <span className="text-xs font-light text-amber-300/80">{row.note}</span>
                          )}
                          <span className="font-mono text-lg font-light text-white tracking-tight keep-ltr" dir="ltr">
                            {row.g}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-14">
                  <SectionNum>{c.s03.popHead}</SectionNum>
                  <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
                    {c.s03.popStats.map((s) => (
                      <Stat key={s.value} value={s.value} label={s.label} note={'note' in s ? s.note : undefined} />
                    ))}
                  </div>
                </div>

                <div className="mt-14">
                  <SectionNum>{c.s03.calHead}</SectionNum>
                  <p className="text-sm font-light text-white/60 leading-relaxed max-w-3xl mb-6">
                    {c.s03.calIntro}
                  </p>
                  <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <div className="bg-black p-6 md:p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-3">
                        {c.s03.ethLabel}
                      </div>
                      <div className="font-mono text-xl text-white/90 keep-ltr" dir="ltr">{c.s03.ethCuts}</div>
                      <div className="text-xs font-light text-white/50 mt-3 leading-relaxed">{c.s03.ethNote}</div>
                    </div>
                    <div className="bg-black p-6 md:p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-3">
                        {c.s03.baseLabel}
                      </div>
                      <div className="font-mono text-xl text-white/90 keep-ltr" dir="ltr">{c.s03.baseCuts}</div>
                      <div className="text-xs font-light text-white/50 mt-3 leading-relaxed">{c.s03.baseNote}</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Callout>{c.s03.calCallout}</Callout>
                  </div>
                </div>

                <div className="mt-14">
                  <SectionNum>{c.s03.tiersHead}</SectionNum>
                  <div className="border border-white/10">
                    {c.s03.tiers.map((r, i) => {
                      const colors = ['text-teal-300/90', 'text-green-300/90', 'text-white/80', 'text-orange-300/90', 'text-white/50'];
                      return (
                        <div
                          key={r.t}
                          className={`flex flex-wrap items-baseline justify-between gap-4 bg-black px-6 py-4 ${i > 0 ? 'border-t border-white/10' : ''}`}
                        >
                          <span className={`text-[10px] font-mono tracking-[0.28em] uppercase ${colors[i]} keep-ltr`} dir="ltr">
                            {r.t}
                          </span>
                          <span className="flex items-baseline gap-4">
                            {'note' in r && r.note && (
                              <span className="text-xs font-light text-white/45 keep-ltr" dir="ltr">{r.note}</span>
                            )}
                            <span className="font-mono text-lg font-light text-white tracking-tight keep-ltr" dir="ltr">
                              {r.n}
                            </span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-5 text-sm font-light text-white/55 leading-relaxed">{c.s03.tiersFoot}</p>
                </div>

                <div className="mt-14">
                  <SectionNum>{c.s03.limHead}</SectionNum>
                  <div className="max-w-4xl">
                    <Callout>{c.s03.limCallout}</Callout>
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
                  <SectionNum>{c.s04.num}</SectionNum>
                  <H2>{c.s04.title}</H2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 mt-14">
                  {c.s04.cards.map((card, i) => (
                    <div key={card.label} className="bg-black p-8">
                      <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/40 mb-4">
                        {card.label}
                      </div>
                      <Body>
                        {i === 2 && 'bodyPre' in card ? (
                          <>
                            {card.bodyPre}<Mono>band_claims_check</Mono>{card.bodyMid1}<Mono>check_tier_transport</Mono>{card.bodyMid2}
                          </>
                        ) : (
                          'body' in card ? card.body : null
                        )}
                      </Body>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CHANGELOG LINK */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-wrap items-baseline justify-between gap-6">
                  <div>
                    <Eyebrow>{c.changelog.eyebrow}</Eyebrow>
                    <p className="text-lg md:text-xl font-light text-white/75 max-w-2xl leading-relaxed">
                      {c.changelog.body}
                    </p>
                  </div>
                  <Link
                    to="/methodology/changelog"
                    className="inline-flex items-center gap-2 text-sm font-mono tracking-[0.2em] uppercase text-white/85 hover:text-white border-b border-white/20 hover:border-white/60 pb-1 transition-colors"
                  >
                    {c.changelog.link}
                    <span aria-hidden="true">{isRtl ? '←' : '→'}</span>
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
