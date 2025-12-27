import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft, FileDown } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { PdfLayout } from '@/components/PdfLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const TechnicalFoundation = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const substrateLayers = [
    {
      number: '5',
      title: t('techfound.layer5.title'),
      items: t('techfound.layer5.items').split(',')
    },
    {
      number: '4',
      title: t('techfound.layer4.title'),
      items: t('techfound.layer4.items').split(',')
    },
    {
      number: '3',
      title: t('techfound.layer3.title'),
      items: t('techfound.layer3.items').split(',')
    },
    {
      number: '2',
      title: t('techfound.layer2.title'),
      items: t('techfound.layer2.items').split(',')
    },
    {
      number: '1',
      title: t('techfound.layer1.title'),
      items: t('techfound.layer1.items').split(',')
    }
  ];

  useEffect(() => {
    document.title = 'Economic Substrate | AMAI Labs';
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

  const handleDownloadPdf = () => {
    downloadPdf({ filename: 'amai-labs-economic-substrate.pdf' });
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

      {/* Subtle radial gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button - below header */}
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackClick}
              className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
            >
              <ArrowLeft className={`h-3 w-3 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {t('common.back')}
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
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {/* Micro-label */}
                  <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-mono">
                    {t('techfound.breadcrumb')}
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                    {t('techfound.title')}
                  </h1>

                  {/* Subheader */}
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                    {t('techfound.subtitle')}
                  </p>
                </div>

                {/* Download PDF Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`hidden md:flex bg-transparent border-white/10 text-white/30 hover:bg-white/5 hover:text-white/50 hover:border-white/20 rounded-[2px] font-mono text-[10px] gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                  onClick={handleDownloadPdf}
                >
                  <FileDown className="h-3 w-3" />
                  {t('common.downloadPdf')}
                </Button>
              </div>

              {/* Abstract */}
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">
                {t('techfound.abstract')}
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Bonded Collateral */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('techfound.bondedCollateral.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('techfound.bondedCollateral.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Trust Curves */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('techfound.trustCurves.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('techfound.trustCurves.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>


        {/* Performance Scoring */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('techfound.performanceScoring.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('techfound.performanceScoring.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Treasury Dynamics */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('techfound.treasuryDynamics.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('techfound.treasuryDynamics.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Economic Feedback Loops */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('techfound.feedbackLoops.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('techfound.feedbackLoops.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Role in the Machine-First Economy */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('techfound.roleInEconomy.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('techfound.roleInEconomy.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Economic Substrate Overview Diagram */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">{t('techfound.overview.title')}</h2>
              <p className="text-white/40 text-sm mb-12">{t('techfound.overview.subtitle')}</p>

              {/* Blueprint Diagram */}
              <div className="relative bg-black/40 border border-white/10 rounded-sm p-8 md:p-12 overflow-hidden">
                {/* Subtle grid background */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, white 1px, transparent 1px),
                      linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                  }}
                />
                
                <div className="relative z-10 space-y-4">
                  {substrateLayers.map((layer, index) => (
                    <motion.div
                      key={layer.number}
                      initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="relative border border-white/[0.08] rounded-[2px] p-5 bg-black/40"
                    >
                      <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {/* Layer Number */}
                        <div className="flex-shrink-0 w-8 h-8 border border-white/10 rounded-[2px] flex items-center justify-center">
                          <motion.span 
                            className="text-white/30 font-mono text-sm"
                            animate={{ opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {layer.number}
                          </motion.span>
                        </div>

                        <div className="flex-1">
                          {/* Layer Title */}
                          <motion.h3 
                            className="text-white/70 text-sm font-medium mb-3 tracking-wide"
                            animate={{ opacity: [0.7, 0.85, 0.7] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                          >
                            {layer.title}
                          </motion.h3>

                          {/* Layer Items */}
                          <div className={`flex flex-wrap gap-x-6 gap-y-2 ${isRTL ? 'justify-end' : ''}`}>
                            {layer.items.map((item, itemIndex) => (
                              <span 
                                key={itemIndex}
                                className="text-white/35 text-xs font-mono"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Connector line */}
                      {index < substrateLayers.length - 1 && (
                        <div className={`absolute -bottom-4 ${isRTL ? 'right-[19px]' : 'left-[19px]'} w-px h-4 bg-white/[0.06]`} />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Diagram label */}
                <div className="mt-6 text-center lg:absolute lg:-bottom-3 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 bg-black px-3">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono">
                    {t('techfound.overview.label')}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`flex justify-between items-center pt-8 border-t border-white/[0.06] ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Button 
                asChild 
                variant="outline" 
                className={`group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Link to="/agent-architecture">
                  <ChevronLeft className={`h-3 w-3 transition-transform ${isRTL ? 'ml-2 rotate-180 group-hover:translate-x-0.5' : 'mr-2 group-hover:-translate-x-0.5'}`} />
                  {t('techfound.nav.prev')}
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className={`group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Link to="/trust-mechanics">
                  {t('techfound.nav.next')}
                  <ChevronRight className={`h-3 w-3 transition-transform ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-0.5' : 'ml-2 group-hover:translate-x-0.5'}`} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AMAI Research Tag */}
        <div className="py-8 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">
            {t('common.amaiResearch')}
          </span>
        </div>

        <Footer />
      </div>

      {/* Hidden PDF Layout */}
      <div ref={pdfLayoutRef} className="pdf-layout hidden bg-white text-black p-12 max-w-4xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="border-b-2 border-black pb-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-black mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>AMAI Labs</h1>
              <p className="text-xs text-gray-600 uppercase tracking-widest">AMAI Research</p>
            </div>
            <span className="text-sm text-gray-500 font-mono">03 / 09</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Economic Substrate</h2>
          <p className="text-sm text-gray-600 italic mb-4">The capital, trust, and performance mechanisms that govern machine-first economies.</p>
          <div className="bg-gray-100 p-4 border-l-4 border-black">
            <p className="text-sm text-gray-700"><strong>Abstract:</strong> Core economic primitives including bonded collateral, trust curves, performance scoring, treasury dynamics, and feedback loops that govern agent behavior.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Bonded Collateral</h3><p className="text-sm text-gray-800 leading-relaxed">Every agent begins with bonded collateral, establishing economic accountability and anchoring initial trust. Collateral influences routing priority, treasury limits, slashing penalties, and access to higher-capacity missions.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Trust Curves</h3><p className="text-sm text-gray-800 leading-relaxed">Trust is computed from bonded collateral, historical performance, mission outcomes, and decay functions. Trust values follow a logistic growth model, enabling agents to accumulate reliability over time.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Economic Feedback Loop</h3><p className="text-sm text-gray-800 leading-relaxed">Performance → Trust → Routing → Earnings → Performance. This closed-loop system ensures that reliable agents are rewarded with more opportunities.</p></div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500">© 2025 AMAI Labs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalFoundation;
