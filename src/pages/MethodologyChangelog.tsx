import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
    {children}
  </span>
);

type Entry = {
  version: string;
  current?: boolean;
  date: string;
  title: string;
  body: string;
};

const entries: Entry[] = [
  {
    version: 'V3.0',
    current: true,
    date: '2026-06-09',
    title: 'Two-score model: TARI Score and Behavioral Sub-Score.',
    body:
      'Replaces the prior three-pillar model with two scores. The TARI™ Score is the headline, credit-anchored figure (300–850) and populates once an agent transacts on credit: Settlement History 35%, Outstanding Exposure 30%, Track Record & Age 15%, Instrument Mix 10%, Recent Activity 10%. The Behavioral Sub-Score is live from day one with no credit history required: Behavioral Consistency 40%, Scope Adherence 35%, Operational Reliability 25%. Scores are context-weighted, recomputable, and auditable. The Dual-Source Verification anchor carries forward.',
  },
  {
    version: 'V2.4',
    date: '2026-05-16',
    title: 'Initial public methodology release.',
    body:
      'First public version of the TARI™ scoring methodology — establishes the 300–850 scoring band, the three-pillar model (Intent & Risk Surface 40%, Industry Guardrails 30%, Behavioral Provenance 30%), and the Dual-Source Verification anchor. Prior internal revisions are not published.',
  },
];

const MethodologyChangelog = () => {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="overflow-x-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="relative bg-perspective-grid min-h-screen">
          <div className="relative z-10">
            {/* Header */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-20">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl"
                >
                  <Eyebrow>TARI™ Methodology · Changelog</Eyebrow>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
                    Versioned. Auditable.
                  </h1>
                  <p className="mt-6 text-base md:text-lg font-light text-white/55 leading-relaxed max-w-2xl">
                    Every revision to the TARI™ scoring methodology is published here.
                    Methodology versions are immutable once released.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Timeline */}
            <section className="pb-20 md:pb-28 border-t border-white/5">
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="mt-16 relative">
                  {/* Vertical rail */}
                  <div
                    className="absolute top-0 bottom-0 w-px bg-white/10"
                    style={{ left: isRtl ? 'auto' : '7px', right: isRtl ? '7px' : 'auto' }}
                    aria-hidden
                  />

                  <div className="space-y-16">
                    {entries.map((e, i) => (
                      <motion.div
                        key={e.version}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className={isRtl ? 'relative pr-8' : 'relative pl-8'}
                      >
                        {/* Node */}
                        <div
                          className="absolute top-2 h-[15px] w-[15px] rounded-full border border-white/40 bg-black"
                          style={{ left: isRtl ? 'auto' : '0', right: isRtl ? '0' : 'auto' }}
                          aria-hidden
                        >
                          {e.current && (
                            <div className="absolute inset-[3px] rounded-full bg-white/80" />
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-[11px] tracking-[0.28em] uppercase text-white/85 font-mono">
                            {e.version}
                          </span>
                          {e.current && (
                            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-mono border border-white/15 px-2 py-[2px]">
                              Current
                            </span>
                          )}
                          <span className="text-[11px] tracking-[0.2em] text-white/35 font-mono ml-auto">
                            {e.date}
                          </span>
                        </div>

                        <h2 className="text-xl md:text-2xl font-light text-white leading-snug tracking-tight">
                          {e.title}
                        </h2>
                        <p className="mt-4 text-sm md:text-base font-light text-white/60 leading-relaxed max-w-3xl">
                          {e.body}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer link */}
                <div className="mt-24 pt-8 border-t border-white/5">
                  <Link
                    to="/methodology"
                    className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-white/50 hover:text-white/85 transition-colors font-mono"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} />
                    Back to Methodology
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MethodologyChangelog;
