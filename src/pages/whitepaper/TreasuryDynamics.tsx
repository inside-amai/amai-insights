import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft, FileDown, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { useLanguage } from '@/contexts/LanguageContext';

const TreasuryDynamics = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = `${t('treasury.title')} | AMAI Labs`;
    window.scrollTo(0, 0);
  }, [t]);

  const handleBackClick = () => {
    navigate('/system-architecture');
    setTimeout(() => {
      const element = document.getElementById('documentation-library');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDownloadPdf = () => {
    downloadPdf({ filename: 'amai-labs-treasury-dynamics.pdf' });
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
              {isRTL ? <>{t('treasury.back')}<ArrowRight className="ms-2 h-3 w-3" /></> : <><ArrowLeft className="me-2 h-3 w-3" />{t('treasury.back')}</>}
            </Button>
          </div>
        </div>

        <section className="pt-8 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-mono">{t('treasury.breadcrumb')}</span>
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">{t('treasury.title')}</h1>
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">{t('treasury.subheader')}</p>
                </div>
                <Button variant="outline" size="sm" className="hidden md:flex bg-transparent border-white/10 text-white/30 hover:bg-white/5 hover:text-white/50 hover:border-white/20 rounded-[2px] font-mono text-[10px] gap-2" onClick={handleDownloadPdf}>
                  <FileDown className="h-3 w-3" />{t('treasury.downloadPdf')}
                </Button>
              </div>
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">{t('treasury.abstract')}</p>
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {[
          { titleKey: 'treasury.structure.title', descKey: 'treasury.structure.desc' },
          { titleKey: 'treasury.flows.title', descKey: 'treasury.flows.p1', p2Key: 'treasury.flows.p2', p3Key: 'treasury.flows.p3' },
          { titleKey: 'treasury.spending.title', descKey: 'treasury.spending.desc' },
          { titleKey: 'treasury.reinvestment.title', descKey: 'treasury.reinvestment.desc' },
          { titleKey: 'treasury.windows.title', descKey: 'treasury.windows.desc' },
          { titleKey: 'treasury.scoring.title', descKey: 'treasury.scoring.desc' },
          { titleKey: 'treasury.implications.title', descKey: 'treasury.implications.desc' },
        ].map((section, index) => (
          <div key={index}>
            <section className="py-16 px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                  <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t(section.titleKey)}</h2>
                  <div className="space-y-4">
                    <p className="text-white/50 text-sm leading-relaxed">{t(section.descKey)}</p>
                    {section.p2Key && <p className="text-white/50 text-sm leading-relaxed">{t(section.p2Key)}</p>}
                    {section.p3Key && <p className="text-white/50 text-sm leading-relaxed">{t(section.p3Key)}</p>}
                  </div>
                </motion.div>
              </div>
            </section>
            <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>
          </div>
        ))}

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center pt-8 border-t border-white/[0.06]">
              <Button asChild variant="outline" className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs">
                <Link to="/trust-mechanics">
                  <ChevronLeft className={`${isRTL ? 'ms-2 rotate-180' : 'me-2'} h-3 w-3`} />
                  {t('treasury.nav.trustMechanics')}
                </Link>
              </Button>
              <Button asChild variant="outline" className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs">
                <Link to="/kernelized-intelligence">
                  {t('treasury.nav.kips')}
                  <ChevronRight className={`${isRTL ? 'me-2 rotate-180' : 'ms-2'} h-3 w-3`} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="py-8 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">{t('treasury.footer')}</span>
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
            <span className="text-sm text-gray-500 font-mono">05 / 09</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Treasury Dynamics</h2>
          <p className="text-sm text-gray-600 italic mb-4">Treasury flows, mission economics, and performance signals.</p>
        </div>
      </div>
    </div>
  );
};

export default TreasuryDynamics;
