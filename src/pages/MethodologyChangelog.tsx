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
    version: 'Conduct v0.1.0 · Credit v1.1',
    current: true,
    date: '2026-07-21',
    title: 'Two independent engines under one 300–850 index.',
    body:
      'They share a scale, not data — there is no identity link between a wallet and an agent.\n\nConduct (instrumented agents) — content-off. Reads only tool names, order, and timing — never prompts, data, or outputs. Five scored dimensions — Scope Integrity, Consistency, Exfiltration Risk (highest-weighted), Resilience, Reliability — with documented expert-prior weights (rank-order centroid), each mapped to OWASP ASI / MITRE ATLAS. The score triages, it never gates; low-confidence subjects are UNRATED. Discrimination validated on AgentDojo (AUC 0.835 single-model; 0.797 two-model pooled).\n\nCredit (on-chain wallets). A WOE logistic scorecard over real DeFi lending (Aave, Morpho; Ethereum + Base), per-wallet 12/12-month windows, with per-chain tier calibration and an economic-stake floor. Rank-orders default risk — not a calibrated probability. Ethereum-only out-of-time Gini 0.630; 155,634 wallets scored; refreshed weekly, harness-gated.',
  },
  {
    version: '2026-07-20',
    date: '2026-07-20',
    title: 'Credit snapshot refreshed.',
    body:
      'Weekly regeneration on fresh on-chain data. 155,634 wallets scored; Ethereum-only Gini moved 0.638 → 0.630 (within the ±0.03 tolerance — discrimination held). Ratified 2026-07-21.',
  },
  {
    version: '2026-07-19',
    date: '2026-07-19',
    title: 'Per-chain tier calibration + economic-stake floor.',
    body:
      'Serving-layer gate so a tier never understates its Ethereum-validated risk on the chain a wallet transacted on. Unpriced or sub-floor exposures serve UNRATED.',
  },
  {
    version: '2026-07-13',
    date: '2026-07-13',
    title: 'Credit engine regeneration.',
    body:
      'Rebuilt on the full wallet population; Ethereum-only Gini to 0.638.',
  },
  {
    version: '2026-07-12',
    date: '2026-07-12',
    title: 'Behavioral interpretation bands ratified.',
    body:
      'Defined the score to triage, never gate; UNRATED at low confidence; bands published with their benchmark-conditional caveat.',
  },
  {
    version: '2026-06-26',
    date: '2026-06-26',
    title: 'Credit v1.0 baseline.',
    body:
      'First on-chain scorecard; Ethereum-only Gini 0.358.',
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
                    Versioned. Auditable. Immutable once released.
                  </h1>
                  <p className="mt-6 text-base md:text-lg font-light text-white/55 leading-relaxed max-w-2xl">
                    Every revision to the TARI™ scoring methodology is published here.
                    Released versions are immutable.
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
