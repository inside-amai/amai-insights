import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft, FileDown, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { useLanguage } from '@/contexts/LanguageContext';

const ProtocolInternals = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = `${t('protocol.title')} | AMAI Labs`;
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
    downloadPdf({ filename: 'amai-labs-protocol-internals.pdf' });
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
                <>{t('protocol.back')}<ArrowRight className="ms-2 h-3 w-3" /></>
              ) : (
                <><ArrowLeft className="me-2 h-3 w-3" />{t('protocol.back')}</>
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
                    {t('protocol.breadcrumb')}
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                    {t('protocol.title')}
                  </h1>

                  {/* Subheader */}
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                    {t('protocol.subheader')}
                  </p>
                </div>

                {/* Download PDF Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex bg-transparent border-white/10 text-white/30 hover:bg-white/5 hover:text-white/50 hover:border-white/20 rounded-[2px] font-mono text-[10px] gap-2"
                  onClick={handleDownloadPdf}
                >
                  <FileDown className="h-3 w-3" />
                  {t('protocol.downloadPdf')}
                </Button>
              </div>

              {/* Abstract */}
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">
                {t('protocol.abstract')}
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Execution Bundles */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('protocol.bundles.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('protocol.bundles.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Routing & Orchestration Logic */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('protocol.routing.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('protocol.routing.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Verification & Settlement */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('protocol.verification.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('protocol.verification.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Reputation & Oracle Pathways */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('protocol.reputation.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('protocol.reputation.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Security Boundaries */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('protocol.security.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('protocol.security.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Safety & Fault Recovery */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('protocol.safety.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('protocol.safety.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Performance Optimizations */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('protocol.performance.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('protocol.performance.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Protocol Guarantees */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('protocol.guarantees.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('protocol.guarantees.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Protocol Runtime Architecture Diagram */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-8 tracking-tight">{t('protocol.diagram.title')}</h2>
              
              <div className="relative bg-black/40 border border-white/10 rounded-sm p-8 overflow-hidden">
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
                
                <div className="relative z-10 space-y-6">
                  {/* Main Three Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Left Column - Inputs */}
                    <motion.div 
                      className="border border-white/15 rounded-sm p-4 bg-white/[0.02]"
                      animate={{ opacity: [0.6, 0.9, 0.6] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">{t('protocol.diagram.inputs')}</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.missionSpec')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.agentState')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.intelligenceModules')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.treasuryParams')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.trustScore')}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center Column - Protocol Engine */}
                    <motion.div 
                      className="border border-white/25 rounded-sm p-4 bg-white/[0.04]"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                    >
                      <div className="text-white/50 text-xs font-mono mb-3 tracking-wider">{t('protocol.diagram.engine')}</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">{t('protocol.diagram.bundleBuilder')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">{t('protocol.diagram.routingLogic')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">{t('protocol.diagram.verificationEngine')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">{t('protocol.diagram.settlementEngine')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">{t('protocol.diagram.securityBoundaries')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">{t('protocol.diagram.faultRecovery')}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Column - Outputs */}
                    <motion.div 
                      className="border border-white/15 rounded-sm p-4 bg-white/[0.02]"
                      animate={{ opacity: [0.6, 0.9, 0.6] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">{t('protocol.diagram.outputs')}</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.stateTransitions')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.trustUpdates')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.treasurySettlement')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.royaltyDistribution')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">{t('protocol.diagram.auditLogs')}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
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
                className="bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/kernelized-intelligence">
                  <ChevronLeft className={`${isRTL ? 'ms-2 rotate-180' : 'me-2'} h-3 w-3`} />
                  {t('protocol.nav.kips')}
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/token-model">
                  {t('protocol.nav.token')}
                  <ChevronRight className={`${isRTL ? 'me-2 rotate-180' : 'ms-2'} h-3 w-3`} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AMAI Research Tag */}
        <div className="py-8 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">
            {t('protocol.footer')}
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
            <span className="text-sm text-gray-500 font-mono">07 / 09</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Protocol Internals</h2>
          <p className="text-sm text-gray-600 italic mb-4">The deterministic runtime that governs autonomous agent execution.</p>
          <div className="bg-gray-100 p-4 border-l-4 border-black">
            <p className="text-sm text-gray-700"><strong>Abstract:</strong> Technical specification of execution bundles, routing logic, verification, settlement, reputation oracles, security boundaries, fault recovery, and protocol guarantees.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Execution Bundles</h3><p className="text-sm text-gray-800 leading-relaxed">Atomic execution bundles (PTBs) contain: Intent declaration, KIP invocations, Economic constraints, State transitions, Settlement instructions. All steps execute atomically or fail together.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Routing Logic</h3><p className="text-sm text-gray-800 leading-relaxed">Missions are routed based on: Trust score, Capacity, Specialization, Cost efficiency, and Historical performance. High-trust agents receive priority routing.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Security Boundaries</h3><p className="text-sm text-gray-800 leading-relaxed">Isolation between agents, Sandboxed execution, Rate limiting, Slashing for violations, Audit trails, and Cryptographic verification of all state transitions.</p></div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500">© 2025 AMAI Labs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ProtocolInternals;
