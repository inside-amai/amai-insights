import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileDown } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect, lazy, Suspense } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ConflictOfThoughtPaper = lazy(() => import('@/components/research/ConflictOfThoughtPaper'));

const Research = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = 'Research | AMAI Labs';
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('documentation-library');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Blueprint grid background */}
      <div className="fixed inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="pt-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackClick}
              className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
            >
              <ArrowLeft className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'} h-3 w-3`} />
              {t('research.back')}
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-8 pb-8 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Micro-label */}
              <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-mono">
                {t('research.breadcrumb')}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                {t('research.paper1.title')}
              </h1>

              {/* Authors & Date */}
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                <span className="text-white/50">
                  <span className="text-white/30 font-mono text-xs">{t('research.authors')}:</span> {t('research.paper1.authors')}
                </span>
                <span className="text-white/50">
                  <span className="text-white/30 font-mono text-xs">{t('research.date')}:</span> {t('research.paper1.date')}
                </span>
              </div>

              {/* Download PDF Button */}
              <a
                href="/research/conflict-of-thought.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-[2px] text-white/60 hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all duration-200 font-mono text-xs"
              >
                <FileDown className="h-3.5 w-3.5" />
                {t('research.downloadPdf')}
              </a>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Full Paper Content - Rendered PDF Pages */}
        <section className="px-6 py-8">
          <Suspense fallback={
            <div className="flex items-center justify-center py-20">
              <div className="text-white/40 font-mono text-sm">Loading paper...</div>
            </div>
          }>
            <ConflictOfThoughtPaper />
          </Suspense>
        </section>

        {/* Bottom Download Button */}
        <section className="px-6 py-12">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <div className="w-24 h-px bg-white/10" />
            <a
              href="/research/conflict-of-thought.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-[2px] text-white/60 hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all duration-200 font-mono text-sm"
            >
              <FileDown className="h-4 w-4" />
              {t('research.downloadPdf')}
            </a>

            {/* Related Architecture Sections */}
            <div className="mt-8 text-center">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono mb-4">
                {t('research.relatedSections')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => navigate('/system-architecture')}
                  className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-[2px] text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/15 transition-all duration-200 font-mono text-[10px]"
                >
                  {t('research.paper1.related1')}
                </button>
                <button
                  onClick={() => navigate('/protocol-internals')}
                  className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-[2px] text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/15 transition-all duration-200 font-mono text-[10px]"
                >
                  {t('research.paper1.related2')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom spacing before footer */}
        <div className="py-8" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Research;
