import { motion } from 'framer-motion';
import { ExplainerHero } from '@/components/ExplainerHero';
import { ExplainerFAQ } from '@/components/ExplainerFAQ';
import { TechnicalFoundationSection } from '@/components/TechnicalFoundationSection';
import { TrinaryClassificationSection } from '@/components/TrinaryClassificationSection';
import { Footer } from '@/components/Footer';
import { AgentLayersSection } from '@/components/AgentLayersSection';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { DocumentationIndex } from '@/components/DocumentationIndex';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Main content with perspective grid background */}
        <div className="relative bg-perspective-grid">
          {/* Hero */}
          <div className="relative z-10">
            <ExplainerHero />
          </div>

          {/* Main Content Sections */}
          <div className="relative z-10">
            <AgentLayersSection />
            
            {/* Architecture Intro */}
            <section className="py-20 md:py-28">
              <div className="container mx-auto px-6">
                <motion.div 
                  className="max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs font-medium text-white/70 uppercase tracking-[0.2em] mb-4 block text-center">
                    {t('thesis.eyebrow')}
                  </span>
                  <p className="text-sm text-white/50 text-center leading-relaxed">
                    {t('thesis.line1')}
                    <br /><br />
                    {t('thesis.line2')}
                  </p>
                </motion.div>
                
                {/* Micro break */}
                <div className="flex justify-center pt-10">
                  <div className="w-8 h-px bg-white/10" />
                </div>
              </div>
            </section>
            
            <ArchitectureDiagram />
          
            {/* Platform Overview Section - Centered */}
            <section className="flex items-center justify-center relative overflow-hidden">
              <div className="container mx-auto px-6 py-16 relative z-10">
                <motion.div 
                  className="max-w-3xl mx-auto space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-3">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                      {t('platform.eyebrow')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
                      {t('platform.title')}
                    </h2>
                  </div>
                  <div className="text-sm text-white/50 leading-relaxed space-y-4">
                    <p>
                      {t('platform.p1')}
                    </p>
                    <p>
                      {t('platform.p2')}
                    </p>
                    <p>
                      {t('platform.p3')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            <TechnicalFoundationSection />
            
            
          </div>
        </div>

        {/* Documentation Library */}
        <DocumentationIndex />

        {/* FAQ Section */}
        <ExplainerFAQ />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;