import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft, FileDown, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { useLanguage } from '@/contexts/LanguageContext';

const TechnicalDeepDive = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = `${t('trust.title')} | AMAI Labs`;
    window.scrollTo(0, 0);
  }, [t]);

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('documentation-library');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDownloadPdf = () => {
    downloadPdf({ filename: 'amai-labs-trust-mechanics.pdf' });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>
      <div className="fixed inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" size="sm" onClick={handleBackClick} className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs">
              {isRTL ? <>{t('trust.back')}<ArrowRight className="ms-2 h-3 w-3" /></> : <><ArrowLeft className="me-2 h-3 w-3" />{t('trust.back')}</>}
            </Button>
          </div>
        </div>

        <section className="pt-8 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-mono">{t('trust.breadcrumb')}</span>
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">{t('trust.title')}</h1>
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">{t('trust.subheader')}</p>
                </div>
                <Button variant="outline" size="sm" className="hidden md:flex bg-transparent border-white/10 text-white/30 hover:bg-white/5 hover:text-white/50 hover:border-white/20 rounded-[2px] font-mono text-[10px] gap-2" onClick={handleDownloadPdf}>
                  <FileDown className="h-3 w-3" />{t('trust.downloadPdf')}
                </Button>
              </div>
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">{t('trust.abstract')}</p>
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('trust.inputs.title')}</h2>
              <div className="space-y-4">
                <p className="text-white/50 text-sm leading-relaxed">{t('trust.inputs.p1')}</p>
                <p className="text-white/50 text-sm leading-relaxed">{t('trust.inputs.p2')}</p>
                <p className="text-white/50 text-sm leading-relaxed">{t('trust.inputs.p3')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('trust.pipeline.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{t('trust.pipeline.intro')}</p>
              <div className="border border-white/[0.08] rounded-[2px] p-5 mb-6" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="space-y-1 font-mono text-[11px] text-white/50">
                  <div>T<sub>base</sub> = baseline(c, v, p)</div>
                  <div>T<sub>stake</sub> = logistic(bond)</div>
                  <div>T<sub>quality</sub> = moduleQuality(q)</div>
                  <div>T<sub>oracle</sub> = weightedKPI</div>
                  <div className="pt-2">T<sub>raw</sub> = Σ T<sub>i</sub></div>
                  <div>T<sub>final</sub> = clamp(T<sub>raw</sub>, 50%, 99.9%)</div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{t('trust.pipeline.conclusion')}</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('trust.effects.title')}</h2>
              <div className="space-y-4">
                <p className="text-white/50 text-sm leading-relaxed">{t('trust.effects.p1')}</p>
                <p className="text-white/50 text-sm leading-relaxed">{t('trust.effects.p2')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('trust.feedback.title')}</h2>
              <div className="space-y-4">
                <p className="text-white/50 text-sm leading-relaxed">{t('trust.feedback.p1')}</p>
                <p className="text-white/50 text-sm leading-relaxed">{t('trust.feedback.p2')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center pt-8 border-t border-white/[0.06]">
              <Button asChild variant="outline" className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs">
                <Link to="/agent-architecture">
                  <ChevronLeft className={`${isRTL ? 'ms-2 rotate-180' : 'me-2'} h-3 w-3`} />
                  {t('trust.nav.agentArchitecture')}
                </Link>
              </Button>
              <Button asChild variant="outline" className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs">
                <Link to="/treasury-dynamics">
                  {t('trust.nav.treasuryDynamics')}
                  <ChevronRight className={`${isRTL ? 'me-2 rotate-180' : 'ms-2'} h-3 w-3`} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="py-8 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">{t('trust.footer')}</span>
        </div>

        <Footer />
      </div>

      <div ref={pdfLayoutRef} className="pdf-layout hidden bg-white text-black p-12 max-w-4xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="border-b-2 border-black pb-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-black mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>AMAI Labs</h1>
              <p className="text-xs text-gray-600 uppercase tracking-widest">AMAI Research</p>
            </div>
            <span className="text-sm text-gray-500 font-mono">04 / 09</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Trust Score Mechanics</h2>
          <p className="text-sm text-gray-600 italic mb-4">Deterministic trust computation for autonomous agents.</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;
