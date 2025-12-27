import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileDown } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ResearchPaper {
  id: string;
  titleKey: string;
  authorsKey: string;
  dateKey: string;
  abstractKey: string;
  pdfUrl?: string;
  relatedSections?: { titleKey: string; slug: string }[];
}

const researchPapers: ResearchPaper[] = [
  {
    id: 'conflict-of-thought',
    titleKey: 'research.paper1.title',
    authorsKey: 'research.paper1.authors',
    dateKey: 'research.paper1.date',
    abstractKey: 'research.paper1.abstract',
    pdfUrl: undefined, // Will be provided later
    relatedSections: [
      { titleKey: 'research.paper1.related1', slug: 'agent-architecture' },
      { titleKey: 'research.paper1.related2', slug: 'trust-mechanics' },
    ],
  },
];

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
          <div className="max-w-4xl mx-auto">
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
        <section className="pt-8 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
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
                {t('research.title')}
              </h1>

              {/* Subheader */}
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                {t('research.subheader')}
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Research Papers */}
        {researchPapers.map((paper, index) => (
          <section key={paper.id} className="py-12 px-6">
            <div className="max-w-4xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-black/40 border border-white/10 rounded-sm p-8 md:p-10"
              >
                {/* Paper Title */}
                <h2 className="text-2xl font-light text-white mb-4 tracking-tight">
                  {t(paper.titleKey)}
                </h2>

                {/* Authors & Date */}
                <div className="flex flex-wrap gap-4 mb-6 text-xs font-mono">
                  <span className="text-white/50">
                    <span className="text-white/30">{t('research.authors')}:</span> {t(paper.authorsKey)}
                  </span>
                  <span className="text-white/50">
                    <span className="text-white/30">{t('research.date')}:</span> {t(paper.dateKey)}
                  </span>
                </div>

                {/* Abstract */}
                <div className="mb-8">
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono mb-3">
                    {t('research.abstract')}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {t(paper.abstractKey)}
                  </p>
                </div>

                {/* Download PDF Button */}
                {paper.pdfUrl ? (
                  <a
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-[2px] text-white/60 hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all duration-200 font-mono text-xs"
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    {t('research.downloadPdf')}
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-[2px] text-white/30 font-mono text-xs cursor-not-allowed">
                    <FileDown className="h-3.5 w-3.5" />
                    {t('research.pdfComingSoon')}
                  </div>
                )}

                {/* Related Architecture Sections */}
                {paper.relatedSections && paper.relatedSections.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono mb-3">
                      {t('research.relatedSections')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {paper.relatedSections.map((section) => (
                        <button
                          key={section.slug}
                          onClick={() => navigate(`/${section.slug}`)}
                          className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-[2px] text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/15 transition-all duration-200 font-mono text-[10px]"
                        >
                          {t(section.titleKey)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.article>
            </div>
          </section>
        ))}

        {/* Bottom spacing before footer */}
        <div className="py-16" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Research;
