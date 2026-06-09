import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExplainerHero } from '@/components/ExplainerHero';
import { Footer } from '@/components/Footer';
import { Activity, Shield, Fingerprint, Eye, GitCommit, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tariScoreItems = [
    { label: t('meth.s03.groupA.item1.label'), pct: t('meth.s03.groupA.item1.pct') },
    { label: t('meth.s03.groupA.item2.label'), pct: t('meth.s03.groupA.item2.pct') },
    { label: t('meth.s03.groupA.item3.label'), pct: t('meth.s03.groupA.item3.pct') },
    { label: t('meth.s03.groupA.item4.label'), pct: t('meth.s03.groupA.item4.pct') },
    { label: t('meth.s03.groupA.item5.label'), pct: t('meth.s03.groupA.item5.pct') },
  ];

  const behavioralItems = [
    { label: t('meth.s03.groupB.item1.label'), pct: t('meth.s03.groupB.item1.pct') },
    { label: t('meth.s03.groupB.item2.label'), pct: t('meth.s03.groupB.item2.pct') },
    { label: t('meth.s03.groupB.item3.label'), pct: t('meth.s03.groupB.item3.pct') },
  ];

  const properties = [
    { k: t('meth.s01.k1'), v: t('meth.s01.v1') },
    { k: t('meth.s01.k2'), v: t('meth.s01.v2') },
    { k: t('meth.s01.k3'), v: t('meth.s01.v3') },
    { k: t('meth.s01.k4'), v: t('meth.s01.v4') },
  ];

  const pillars = [
    { icon: Activity, tag: t('meth.s02.p1.tag'), title: t('meth.s02.p1.title'), desc: t('meth.s02.p1.desc') },
    { icon: Shield, tag: t('meth.s02.p2.tag'), title: t('meth.s02.p2.title'), desc: t('meth.s02.p2.desc') },
    { icon: Fingerprint, tag: t('meth.s02.p3.tag'), title: t('meth.s02.p3.title'), desc: t('meth.s02.p3.desc') },
  ];

  const disclaimers = [t('meth.s06.d1'), t('meth.s06.d2'), t('meth.s06.d3')];

  return (
    <>
      <div className="overflow-x-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="relative bg-perspective-grid">
          <div className="relative z-10">
            <ExplainerHero
              ctaHref="/architecture"
              headline={
                <>
                  <span className="font-light">{t('meth.hero.title.l1')}</span>
                  <span className="block font-light">{t('meth.hero.title.l2')}</span>
                </>
              }
              subtext={
                <>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                    {t('meth.hero.eyebrow')}
                  </p>
                  <p>{t('meth.hero.subhead')}</p>
                </>
              }
            />

            {/* 01 */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                  <Eyebrow>{t('meth.s01.label')}</Eyebrow>
                  <SectionTitle>{t('meth.s01.title')}</SectionTitle>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-14">
                  {properties.map((p) => (
                    <div key={p.k} className="border-t border-white/10 pt-5">
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2 font-mono">{p.k}</div>
                      <div className="text-sm md:text-base font-light text-white/70 leading-relaxed">{p.v}</div>
                    </div>
                  ))}
                </div>

                {/* Rating Bands */}
                <div className="mt-16">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-5 font-mono">Rating Bands</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {[
                      { label: 'Poor', range: '300–579', dot: 'bg-red-500/80', text: 'text-red-300/90' },
                      { label: 'Fair', range: '580–669', dot: 'bg-orange-400/80', text: 'text-orange-300/90' },
                      { label: 'Good', range: '670–739', dot: 'bg-green-500/80', text: 'text-green-300/90' },
                      { label: 'Excellent', range: '740–850', dot: 'bg-teal-400/80', text: 'text-teal-300/90' },
                    ].map((b) => (
                      <div key={b.label} className="bg-black p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`inline-block h-2 w-2 rounded-full ${b.dot}`} />
                          <span className={`text-[10px] tracking-[0.28em] uppercase font-mono ${b.text}`}>{b.label}</span>
                        </div>
                        <div className="text-lg font-light text-white tracking-tight">{b.range}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 02 */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-6xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                  <Eyebrow>{t('meth.s02.label')}</Eyebrow>
                  <SectionTitle>{t('meth.s02.title')}</SectionTitle>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-px bg-white/10 mt-14 border border-white/10">
                  {pillars.map(({ icon: Icon, tag, title, desc }) => (
                    <div key={tag} className="bg-black p-8 md:p-10">
                      <Icon className="h-5 w-5 text-white/60 mb-6" strokeWidth={1.4} />
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3 font-mono">{tag}</div>
                      <h3 className="text-xl font-light text-white mb-4 leading-tight">{title}</h3>
                      <p className="text-sm font-light leading-relaxed text-white/55">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 03 */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                  <Eyebrow>{t('meth.s03.label')}</Eyebrow>
                  <SectionTitle>{t('meth.s03.title')}</SectionTitle>
                </motion.div>

                <div className="mt-14 border border-white/10 bg-white/[0.02] p-8 md:p-10">
                  <div className="flex h-2 w-full overflow-hidden bg-white/5 mb-10">
                    <div className="h-full bg-white/80" style={{ width: '40%' }} />
                    <div className="h-full bg-white/45" style={{ width: '30%' }} />
                    <div className="h-full bg-white/20" style={{ width: '30%' }} />
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {composition.map((c, i) => (
                      <div key={c.label} className="border-t border-white/10 pt-5">
                        <div className="flex items-baseline gap-3 mb-3">
                          <span className={`inline-block h-2 w-2 ${i === 0 ? 'bg-white/80' : i === 1 ? 'bg-white/45' : 'bg-white/20'}`} />
                          <span className="text-3xl font-light text-white tracking-tight">{c.pct}%</span>
                        </div>
                        <div className="text-sm font-medium text-white/85">{c.label}</div>
                        <div className="text-xs text-white/45 mt-1 font-light leading-relaxed">{c.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 04 */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                  <Eyebrow>{t('meth.s04.label')}</Eyebrow>
                  <SectionTitle>{t('meth.s04.title')}</SectionTitle>
                  <p className="mt-6 text-sm md:text-base font-light leading-relaxed text-white/55">{t('meth.s04.body')}</p>
                </motion.div>

                <div className="mt-14 border border-white/10 bg-white/[0.02] p-8 md:p-12">
                  <div className="grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-6">
                    <div className="border border-white/10 p-6 text-center bg-black">
                      <Eye className="h-5 w-5 text-white/60 mx-auto mb-4" strokeWidth={1.4} />
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2 font-mono">{t('meth.s04.wA.tag')}</div>
                      <div className="text-base font-light text-white">{t('meth.s04.wA.title')}</div>
                      <div className="text-xs text-white/45 mt-2 font-light">{t('meth.s04.wA.desc')}</div>
                    </div>

                    <div className="flex md:flex-col items-center justify-center gap-3">
                      <div className="hidden md:block w-px h-10 bg-white/15" />
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/50 px-3 py-1 border border-white/15 font-mono">{t('meth.s04.parity')}</div>
                      <div className="hidden md:block w-px h-10 bg-white/15" />
                    </div>

                    <div className="border border-white/10 p-6 text-center bg-black">
                      <GitCommit className="h-5 w-5 text-white/60 mx-auto mb-4" strokeWidth={1.4} />
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2 font-mono">{t('meth.s04.wB.tag')}</div>
                      <div className="text-base font-light text-white">{t('meth.s04.wB.title')}</div>
                      <div className="text-xs text-white/45 mt-2 font-light">{t('meth.s04.wB.desc')}</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <span className="text-[10px] tracking-[0.28em] uppercase text-white/40 font-mono mr-3">{t('meth.s04.divergence')}</span>
                    <span className="text-sm font-light text-white/65">{t('meth.s04.divergence.text')}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 05 */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                  <Eyebrow>{t('meth.s05.label')}</Eyebrow>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 items-end mt-8">
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-3 font-mono">{t('meth.s05.current')}</div>
                    <div className="text-3xl md:text-4xl font-light text-white tracking-tight">{t('meth.s05.version')}</div>
                    <div className="text-sm text-white/45 mt-2 font-light">{t('meth.s05.effective')}</div>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      {t('meth.s05.note.pre')}
                      <Link to="/methodology/changelog" className="font-mono text-white/85 hover:text-white underline-offset-4 hover:underline transition-colors">/methodology/changelog</Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 06 */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                  <Eyebrow>{t('meth.s06.label')}</Eyebrow>
                  <SectionTitle>{t('meth.s06.title')}</SectionTitle>
                </motion.div>

                <div className="space-y-4 mt-12 max-w-4xl">
                  {disclaimers.map((d) => (
                    <div key={d} className="flex gap-4 border-t border-white/10 pt-5">
                      <AlertTriangle className="h-4 w-4 text-white/35 mt-1 shrink-0" strokeWidth={1.6} />
                      <p className="text-sm md:text-base font-light text-white/65 leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* System Architecture */}
            <section id="architecture-section" className="py-20 md:py-28 border-t border-white/5 scroll-mt-24">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                  <Eyebrow>07 // System Architecture</Eyebrow>
                  <SectionTitle>System Architecture.</SectionTitle>
                </motion.div>

                <div className="mt-14 max-w-3xl mx-auto space-y-4">
                  {[
                    { tag: 'Layer 01', title: 'Identity Layer', desc: 'Agent identity and ownership resolution.' },
                    { tag: 'Layer 02', title: 'Execution Layer', desc: 'Real-time telemetry capture at agent runtime.' },
                    { tag: 'Layer 03', title: 'Settlement Layer', desc: 'Tamper-evident provenance commitment to the bureau ledger.' },
                  ].map((l) => (
                    <div key={l.tag} className="border border-white/10 bg-black p-6 md:p-8">
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2 font-mono">{l.tag}</div>
                      <h3 className="text-lg md:text-xl font-light text-white tracking-tight">{l.title}</h3>
                      <p className="mt-2 text-sm font-light text-white/55 leading-relaxed">{l.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl text-center">
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium block mb-8">
                  {t('meth.cta.eyebrow')}
                </span>
                <a
                  href="https://bureau.amai.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  {t('meth.cta.button')}
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
