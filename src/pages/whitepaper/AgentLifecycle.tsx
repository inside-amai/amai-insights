import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft, FileDown } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { useLanguage } from '@/contexts/LanguageContext';

const AgentLifecycle = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = 'Agent Lifecycle | AMAI Labs';
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/?scrollTo=documentation-library');
  };

  const handleDownloadPdf = () => {
    downloadPdf({ filename: 'amai-labs-agent-lifecycle.pdf' });
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
        {/* Back Button - below header */}
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackClick}
              className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
            >
              <ArrowLeft className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'} h-3 w-3`} />
              {t('lifecycle.back')}
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
                    {t('lifecycle.breadcrumb')}
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                    {t('lifecycle.title')}
                  </h1>

                  {/* Subheader */}
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                    {t('lifecycle.subheader')}
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
                  {t('lifecycle.downloadPdf')}
                </Button>
              </div>

              {/* Abstract */}
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">
                {t('lifecycle.abstract')}
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Creation & Initialization */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('lifecycle.creation.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('lifecycle.creation.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Mission Intake & Planning */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('lifecycle.mission.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('lifecycle.mission.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Execution & Coordination */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('lifecycle.execution.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('lifecycle.execution.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Settlement & State Update */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('lifecycle.settlement.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('lifecycle.settlement.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Performance & Trust Evolution */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('lifecycle.trust.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('lifecycle.trust.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Growth, Scaling & Adaptation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('lifecycle.growth.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('lifecycle.growth.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Risk Events & Penalties */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('lifecycle.risk.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('lifecycle.risk.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Retirement & Withdrawal */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">{t('lifecycle.retirement.title')}</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {t('lifecycle.retirement.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Agent Lifecycle Architecture Diagram */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">{t('lifecycle.diagram.title')}</h2>
              <p className="text-white/40 text-sm mb-12">{t('lifecycle.diagram.subtitle')}</p>

              {/* Blueprint Radial Diagram */}
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
                
                <div className="relative z-10">
                  {/* Radial Diagram SVG */}
                  <div className="flex justify-center">
                    <svg viewBox="0 0 500 520" className="w-full max-w-[500px] h-auto">
                      {/* Outer Ring 3 - Risk & Termination */}
                      <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <circle cx="250" cy="250" r="215" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="40" strokeDasharray="4 4" />
                      
                      {/* Ring 2 - Long-Term Evolution */}
                      <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                      <circle cx="250" cy="250" r="155" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="30" />
                      
                      {/* Ring 1 - Operational Loop */}
                      <circle cx="250" cy="250" r="100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                      <circle cx="250" cy="250" r="95" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="25" />
                      
                      {/* Center Core */}
                      <circle cx="250" cy="250" r="50" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      
                      {/* Agent Core Glow - subtle 20s pulse */}
                      <circle cx="250" cy="250" r="52" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6">
                        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="20s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="250" cy="250" r="55" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="4">
                        <animate attributeName="opacity" values="0.015;0.035;0.015" dur="20s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Center Core Label */}
                      <text x="250" y="240" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="monospace" fontWeight="500">
                        AGENT CORE
                      </text>
                      <text x="250" y="254" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">
                        identity · modules
                      </text>
                      <text x="250" y="266" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">
                        collateral · memory
                      </text>
                      
                      {/* Arrow marker definitions */}
                      <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                          <polygon points="0 0, 6 2, 0 4" fill="rgba(255,255,255,0.35)" />
                        </marker>
                        <marker id="arrowhead-exit" markerWidth="5" markerHeight="3" refX="0" refY="1.5" orient="auto">
                          <polygon points="0 0, 5 1.5, 0 3" fill="rgba(255,255,255,0.25)" />
                        </marker>
                      </defs>
                      
                      {/* Ring 1 Labels - Operational Loop */}
                      <motion.text 
                        x="250" y="165" 
                        textAnchor="middle" 
                        fill="rgba(255,255,255,0.6)" 
                        fontSize="8" 
                        fontFamily="monospace"
                        fontWeight="500"
                        animate={{ opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        MISSION INTAKE
                      </motion.text>
                      <motion.text 
                        x="355" y="250" 
                        textAnchor="start" 
                        fill="rgba(255,255,255,0.6)" 
                        fontSize="8" 
                        fontFamily="monospace"
                        fontWeight="500"
                        animate={{ opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        EXECUTION
                      </motion.text>
                      <motion.text 
                        x="250" y="340" 
                        textAnchor="middle" 
                        fill="rgba(255,255,255,0.6)" 
                        fontSize="8" 
                        fontFamily="monospace"
                        fontWeight="500"
                        animate={{ opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        SETTLEMENT
                      </motion.text>
                      <motion.text 
                        x="145" y="250" 
                        textAnchor="end" 
                        fill="rgba(255,255,255,0.6)" 
                        fontSize="8" 
                        fontFamily="monospace"
                        fontWeight="500"
                        animate={{ opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      >
                        TRUST UPDATE
                      </motion.text>
                      
                      {/* Operational Loop Arrows - brighter */}
                      <path d="M285 165 L305 165" stroke="rgba(255,255,255,0.35)" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <path d="M340 280 L340 300" stroke="rgba(255,255,255,0.35)" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <path d="M215 340 L195 340" stroke="rgba(255,255,255,0.35)" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <path d="M160 220 L160 200" stroke="rgba(255,255,255,0.35)" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      
                      {/* Ring 2 Labels - Long-Term Evolution - increased size */}
                      <text x="250" y="105" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="monospace" fontWeight="500">TREASURY GROWTH</text>
                      <text x="400" y="240" textAnchor="start" fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="monospace" fontWeight="500">COLLATERAL ADJ.</text>
                      <text x="250" y="400" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="monospace" fontWeight="500">SKILL UPGRADES</text>
                      <text x="80" y="250" textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="monospace" fontWeight="500">SWARM PART.</text>
                      <text x="355" y="130" textAnchor="start" fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="monospace" fontWeight="500">ROLE SPEC.</text>
                      
                      {/* Ring 3 Labels - Risk & Termination - increased size */}
                      <text x="250" y="50" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace" fontWeight="500">FAILURES</text>
                      <text x="455" y="260" textAnchor="start" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace" fontWeight="500">PENALTIES</text>
                      <text x="320" y="440" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace" fontWeight="500">SLASHING</text>
                      <text x="180" y="440" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace" fontWeight="500">RETIREMENT</text>
                      
                      {/* Retirement Capsule - clean white/grey, centered under diagram */}
                      <line x1="250" y1="472" x2="250" y2="500" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" markerEnd="url(#arrowhead-exit)" />
                      <rect x="210" y="502" width="80" height="24" rx="2" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />
                      <text x="250" y="515" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace" fontWeight="500">RETIREMENT CAPSULE</text>
                      
                      {/* Ring Labels */}
                      <text x="250" y="70" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="5" fontFamily="monospace" letterSpacing="0.15em">RING 3 — RISK & TERMINATION</text>
                      <text x="250" y="125" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="5" fontFamily="monospace" letterSpacing="0.15em">RING 2 — LONG-TERM EVOLUTION</text>
                      <text x="250" y="180" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="5" fontFamily="monospace" letterSpacing="0.1em">RING 1 — OPERATIONAL LOOP</text>
                    </svg>
                  </div>
                </div>

                {/* Diagram label */}
                <div className="mt-6 text-center lg:absolute lg:-bottom-3 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 bg-black px-3">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono">
                    {t('lifecycle.diagram.label')}
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
                className="group bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/agent-economy">
                  <ChevronLeft className={`${isRTL ? 'ms-2 rotate-180' : 'me-2'} h-3 w-3`} />
                  {t('lifecycle.nav.economy')}
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="group bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/operational-scenarios">
                  {t('lifecycle.nav.scenarios')}
                  <ChevronRight className={`${isRTL ? 'me-2 rotate-180' : 'ms-2'} h-3 w-3`} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer Tag */}
        <div className="max-w-4xl mx-auto px-6 pb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/[0.06]" />
            <span className="text-[8px] tracking-[0.4em] uppercase text-white/20 font-mono">
              {t('lifecycle.footer')}
            </span>
            <div className="h-px w-12 bg-white/[0.06]" />
          </div>
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
            <span className="text-sm text-gray-500 font-mono">10 / 10</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Agent Lifecycle</h2>
          <p className="text-sm text-gray-600 italic mb-4">The complete lifecycle of autonomous agents within the machine-first economy.</p>
          <div className="bg-gray-100 p-4 border-l-4 border-black">
            <p className="text-sm text-gray-700"><strong>Abstract:</strong> A unified model describing how agents are created, operate, evolve, coordinate, and retire within AMAI's deterministic runtime.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Creation & Initialization</h3><p className="text-sm text-gray-800 leading-relaxed">An agent is instantiated with a decentralized identifier, provenance and lineage metadata, selected intelligence modules (KIPs), initial treasury parameters, posted collateral, and a baseline trust value. This stage establishes the foundation from which autonomous operation begins.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Mission Intake & Planning</h3><p className="text-sm text-gray-800 leading-relaxed">Agents evaluate incoming missions based on capability fit, cost expectations, risk constraints, trust requirements, and available memory or contextual signals. The agent assembles an execution plan by selecting relevant intelligence modules and determining whether to operate individually or as part of a swarm.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Execution & Coordination</h3><p className="text-sm text-gray-800 leading-relaxed">The agent constructs atomic execution bundles that define the full mission workflow. These bundles may include module invocations, treasury operations, memory updates, swarm coordination steps, and validation logic. Workflows execute atomically to prevent partial or ambiguous state transitions.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Settlement & State Update</h3><p className="text-sm text-gray-800 leading-relaxed">Upon completion, the agent applies deterministic updates: treasury adjustments, royalty distribution, collaborator payouts, memory writes, performance logging, and provenance extension. All updates are fully auditable.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Performance & Trust Evolution</h3><p className="text-sm text-gray-800 leading-relaxed">Trust evolves based on mission success, cost efficiency, latency adherence, correctness, and swarm contributions. Positive performance increases trust and unlocks broader mission eligibility and routing priority. Poor performance reduces opportunity and may trigger penalties.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Growth, Scaling & Adaptation</h3><p className="text-sm text-gray-800 leading-relaxed">Agents evolve by increasing collateral, expanding treasuries, acquiring new intelligence modules, improving embeddings, specializing roles, and strengthening swarm participation. This stage represents sustained economic and functional scaling.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Risk Events & Penalties</h3><p className="text-sm text-gray-800 leading-relaxed">Risk events include failures, instability, unsafe execution patterns, or rule violations. Penalties such as trust reductions, slashing, temporary quarantines, or operational restrictions are applied deterministically. Severe or repeated failures may trigger mandatory retirement.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Retirement & Withdrawal</h3><p className="text-sm text-gray-800 leading-relaxed">Agents retire due to strategic exit, economic exhaustion, persistent underperformance, or protocol-defined withdrawal conditions. Upon retirement, collateral returns follow deterministic rules, trust values freeze, provenance archives, and the agent becomes inactive.</p></div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500">© 2025 AMAI Labs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AgentLifecycle;
