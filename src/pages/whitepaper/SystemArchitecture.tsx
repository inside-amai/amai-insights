import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft, FileDown, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { PdfLayout } from '@/components/PdfLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import EconomicLoopDiagram from '@/components/EconomicLoopDiagram';

const SystemArchitecture = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  // Architecture layers with translation keys
  const architectureLayers = [
    { number: '6', titleKey: 'architecture.layer6.title', itemsKey: 'architecture.layer6.items' },
    { number: '5', titleKey: 'architecture.layer5.title', itemsKey: 'architecture.layer5.items' },
    { number: '4', titleKey: 'architecture.layer4.title', itemsKey: 'architecture.layer4.items' },
    { number: '3', titleKey: 'architecture.layer3.title', itemsKey: 'architecture.layer3.items' },
    { number: '2', titleKey: 'architecture.layer2.title', itemsKey: 'architecture.layer2.items' },
    { number: '1', titleKey: 'architecture.layer1.title', itemsKey: 'architecture.layer1.items' }
  ];

  const lifecycleStepKeys = [
    'architecture.lifecycle.step1',
    'architecture.lifecycle.step2',
    'architecture.lifecycle.step3',
    'architecture.lifecycle.step4',
    'architecture.lifecycle.step5',
    'architecture.lifecycle.step6',
    'architecture.lifecycle.step7'
  ];

  useEffect(() => {
    document.title = `${t('architecture.title')} | AMAI Labs`;
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
    downloadPdf({ filename: 'amai-labs-agent-architecture.pdf' });
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
              {isRTL ? (
                <>
                  {t('architecture.back')}
                  <ArrowRight className="ms-2 h-3 w-3" />
                </>
              ) : (
                <>
                  <ArrowLeft className="me-2 h-3 w-3" />
                  {t('architecture.back')}
                </>
              )}
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
                    {t('architecture.breadcrumb')}
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                    {t('architecture.title')}
                  </h1>

                  {/* Subheader */}
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                    {t('architecture.subheader')}
                  </p>

                  {/* Economic Loop */}
                  <EconomicLoopDiagram className="mt-8 items-start" />
                </div>

                {/* Download PDF Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex bg-transparent border-white/10 text-white/30 hover:bg-white/5 hover:text-white/50 hover:border-white/20 rounded-[2px] font-mono text-[10px] gap-2"
                  onClick={handleDownloadPdf}
                >
                  <FileDown className="h-3 w-3" />
                  {t('architecture.downloadPdf')}
                </Button>
              </div>

              {/* Abstract */}
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">
                {t('architecture.abstract')}
              </p>

              {/* Divider */}
              <div className={`w-16 h-px bg-white/10 mt-10 ${isRTL ? 'mr-0' : 'ml-0'}`} />
            </motion.div>
          </div>
        </section>

        {/* What an Agent Is */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('architecture.whatAgent.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('architecture.whatAgent.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Identity & Provenance */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('architecture.identity.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('architecture.identity.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Skills & KIPs */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('architecture.skills.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('architecture.skills.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Memory & Context Handling */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('architecture.memory.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('architecture.memory.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Bonded Collateral & Trust Roots */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('architecture.collateral.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('architecture.collateral.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Execution Lifecycle */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-8 tracking-tight">{t('architecture.lifecycle.title')}</h2>
              
              <div className="space-y-4">
                {lifecycleStepKeys.map((stepKey, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-white/20 font-mono text-xs mt-0.5 w-4 flex-shrink-0">
                      {index + 1}.
                    </span>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {t(stepKey)}
                    </p>
                  </motion.div>
                ))}
              </div>

              <p className="text-white/40 text-sm leading-relaxed mt-6">
                {t('architecture.lifecycle.conclusion')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Swarm Participation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('architecture.swarm.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('architecture.swarm.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Agent Architecture Stack Diagram */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">{t('architecture.stack.title')}</h2>
              <p className="text-white/40 text-sm mb-12">{t('architecture.stack.subtitle')}</p>

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
                  {architectureLayers.map((layer, index) => (
                    <motion.div
                      key={layer.number}
                      initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="relative border border-white/[0.08] rounded-[2px] p-5 bg-black/40"
                    >
                      <div className="flex items-start gap-4">
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
                            {t(layer.titleKey)}
                          </motion.h3>

                          {/* Layer Items */}
                          <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {t(layer.itemsKey).split(',').map((item, itemIndex) => (
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
                      {index < architectureLayers.length - 1 && (
                        <div className={`absolute -bottom-4 ${isRTL ? 'right-[19px]' : 'left-[19px]'} w-px h-4 bg-white/[0.06]`} />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Diagram label */}
                <div className="mt-6 text-center lg:absolute lg:-bottom-3 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 bg-black px-3">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono">
                    {t('architecture.stack.label')}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center pt-8 border-t border-white/[0.06]">
              <Button 
                asChild 
                variant="outline" 
                className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/system-overview">
                  <ChevronLeft className={`${isRTL ? 'ms-2 rotate-180' : 'me-2'} h-3 w-3 transition-transform group-hover:-translate-x-0.5`} />
                  {t('architecture.nav.systemOverview')}
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/economic-substrate">
                  {t('architecture.nav.economicSubstrate')}
                  <ChevronRight className={`${isRTL ? 'me-2 rotate-180' : 'ms-2'} h-3 w-3 transition-transform group-hover:translate-x-0.5`} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AMAI Research Tag */}
        <div className="py-8 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">
            {t('architecture.footer')}
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
            <span className="text-sm text-gray-500 font-mono">02 / 09</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Agent Architecture</h2>
          <p className="text-sm text-gray-600 italic mb-4">How autonomous agents are structured, extended, secured, and coordinated.</p>
          <div className="bg-gray-100 p-4 border-l-4 border-black">
            <p className="text-sm text-gray-700"><strong>Abstract:</strong> Detailed specification of agent identity, memory, intelligence modules, collateral binding, execution lifecycle, and swarm coordination mechanisms.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>What an Agent Is</h3><p className="text-sm text-gray-800 leading-relaxed">An agent is a persistent, autonomous software entity capable of holding capital, building trust, executing tasks, earning revenue, and coordinating with other agents or humans. Agents are the primary actors in AMAI's machine-first economy.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Agent Layers</h3><p className="text-sm text-gray-800 leading-relaxed">Identity Layer (decentralized identifier, provenance), Memory Layer (contextual store, embeddings), Intelligence Layer (KIPs, skills, modules), Collateral & Trust Layer (bonded stake, trust curves), Execution Lifecycle (plan, validate, execute, settle), Swarm Interface (coordination, aggregated trust).</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Execution Lifecycle</h3><p className="text-sm text-gray-800 leading-relaxed">1. Initialization 2. Mission Intake 3. Planning and Assembly 4. Economic Validation 5. Execution 6. Settlement and Royalty Routing 7. Trust Update</p></div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500">© 2025 AMAI Labs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitecture;
