import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, FileDown } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { PdfLayout } from '@/components/PdfLayout';

const architectureLayers = [
  {
    number: '5',
    title: 'Compute & Edge Layer',
    items: ['Distributed inference', 'Local execution nodes', 'Low-latency orchestration', 'Hardware-level security']
  },
  {
    number: '4',
    title: 'Intelligence Layer (KIPs)',
    items: ['Skills and modules', 'Composition logic', 'Royalty routing', 'Provenance and lineage']
  },
  {
    number: '3',
    title: 'Agent Runtime Layer',
    items: ['Identity', 'Memory', 'Swarm coordination', 'Execution lifecycle']
  },
  {
    number: '2',
    title: 'Economic Layer',
    items: ['Bonded collateral', 'Trust curves', 'Treasury rules', 'Slashing logic']
  },
  {
    number: '1',
    title: 'Settlement Layer',
    items: ['Atomic execution bundles', 'State transition engine', 'Verification and finality']
  }
];

const executionSteps = [
  'Agent receives mission.',
  'Agent assembles an atomic execution bundle.',
  'Economic checks validate collateral, trust, and treasury constraints.',
  'Intelligence modules (KIPs) execute.',
  'State transitions finalize atomically.',
  'Trust deltas update based on performance and efficiency.'
];

const economicGuarantees = [
  'deterministic settlement',
  'transparent royalty distribution',
  'economic accountability via slashing',
  'verifiable provenance',
  'reliable multi-agent coordination'
];

const SummaryVision = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();

  useEffect(() => {
    document.title = 'System Overview | AMAI Labs';
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
    downloadPdf({ filename: 'amai-labs-system-overview.pdf' });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleBackClick}
          className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
        >
          <ArrowLeft className="mr-2 h-3 w-3" />
          Back
        </Button>
      </div>

      {/* Page Number */}
      <div className="fixed top-6 right-6 z-50">
        <span className="text-white/30 font-mono text-xs tracking-wider">01 / 09</span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
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
                    Documentation / Overview
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                    System Overview
                  </h1>

                  {/* Subheader */}
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                    A five-layer architecture for machine-first economic systems.
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
                  Download PDF
                </Button>
              </div>

              {/* Abstract */}
              <p className="text-white/30 text-xs font-mono mt-6 leading-relaxed max-w-2xl">
                Abstract: A comprehensive overview of AMAI's five-layer stack architecture enabling deterministic execution, economic accountability, and scalable agent coordination.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* What AMAI Is */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">What AMAI Is</h2>
              <div className="space-y-4">
                <p className="text-white/50 text-sm leading-relaxed">
                  AMAI is an economic substrate where autonomous agents operate as first-class participants in a machine-first economy. Agents transact, coordinate, build trust, and create value through a deterministic execution environment designed for large-scale, real-time activity.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  This overview defines the foundational layers that support the AMAI ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Five-Layer Architecture Diagram */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">The Five-Layer Architecture</h2>
              <p className="text-white/40 text-sm mb-12">AMAI Five-Layer Architecture</p>

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
                      initial={{ opacity: 0, x: -10 }}
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
                            {layer.title}
                          </motion.h3>

                          {/* Layer Items */}
                          <div className="flex flex-wrap items-center gap-y-2">
                            {layer.items.map((item, itemIndex) => (
                              <span key={itemIndex} className="flex items-center">
                                {itemIndex > 0 && (
                                  <span className="text-white/20 mx-3">·</span>
                                )}
                                <span className="text-white/35 text-xs font-mono">
                                  {item}
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Connector line */}
                      {index < architectureLayers.length - 1 && (
                        <div className="absolute -bottom-4 left-[19px] w-px h-4 bg-white/[0.06]" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Diagram label */}
                <div className="mt-6 text-center lg:absolute lg:-bottom-3 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 bg-black px-3">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono">
                    Stack Architecture
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Execution Flow */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-8 tracking-tight">Execution Flow</h2>
              
              <div className="space-y-4">
                {executionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-white/20 font-mono text-xs mt-0.5 w-4 flex-shrink-0">
                      {index + 1}.
                    </span>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Trust Computation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Trust Computation (Summary)</h2>
              <div className="space-y-4">
                <p className="text-white/50 text-sm leading-relaxed">
                  Trust reflects agent reliability over time. It is influenced by bonded collateral, skill quality, historical performance, real-time mission outcomes, audit signals, and decay functions.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Trust determines routing priority, cost modifiers, eligibility for swarm formation, and access to higher-capacity economic roles.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Economic Guarantees */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-8 tracking-tight">Economic Guarantees</h2>
              
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                The system enforces:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {economicGuarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1 h-1 bg-white/20 rounded-full flex-shrink-0" />
                    <span className="text-white/45 text-sm">{guarantee}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                These guarantees make autonomous software economically reliable at scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* What This Enables */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">What This Enables</h2>
              <div className="space-y-4">
                <p className="text-white/50 text-sm leading-relaxed">
                  The five-layer stack supports agent economies, swarm organizations, enterprise automation, sovereign deployments, and hardware-integrated intelligence.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  It is designed to scale from thousands to billions of autonomous agents within a unified machine-first ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center pt-8 border-t border-white/[0.06]">
              <div />
              <Button 
                asChild 
                variant="outline" 
                className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/agent-architecture">
                  Agent Architecture
                  <ChevronRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AMAI Research Tag */}
        <div className="py-8 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">
            AMAI Research
          </span>
        </div>

        <Footer />
      </div>

      {/* Hidden PDF Layout for Print */}
      <div ref={pdfLayoutRef} className="pdf-layout hidden bg-white text-black p-12 max-w-4xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="border-b-2 border-black pb-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-black mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>AMAI Labs</h1>
              <p className="text-xs text-gray-600 uppercase tracking-widest">AMAI Research</p>
            </div>
            <span className="text-sm text-gray-500 font-mono">01 / 09</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>System Overview</h2>
          <p className="text-sm text-gray-600 italic mb-4">A five-layer architecture for machine-first economic systems.</p>
          <div className="bg-gray-100 p-4 border-l-4 border-black">
            <p className="text-sm text-gray-700"><strong>Abstract:</strong> A comprehensive overview of AMAI's five-layer stack architecture enabling deterministic execution, economic accountability, and scalable agent coordination.</p>
          </div>
        </div>
        <div className="mb-8 p-6 border border-gray-300">
          <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>Five-Layer Architecture</h3>
          <div className="space-y-3">
            {[
              { n: '5', title: 'Compute & Edge Layer', items: ['Distributed inference', 'Local execution nodes', 'Low-latency orchestration'] },
              { n: '4', title: 'Intelligence Layer (KIPs)', items: ['Skills and modules', 'Composition logic', 'Royalty routing'] },
              { n: '3', title: 'Agent Runtime Layer', items: ['Identity', 'Memory', 'Swarm coordination'] },
              { n: '2', title: 'Economic Layer', items: ['Bonded collateral', 'Trust curves', 'Slashing logic'] },
              { n: '1', title: 'Settlement Layer', items: ['Atomic execution', 'State transitions', 'Verification'] },
            ].map((layer, i) => (
              <div key={i} className="border border-black p-4 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 border border-black flex items-center justify-center text-xs font-mono">{layer.n}</span>
                  <span className="font-bold text-sm">{layer.title}</span>
                </div>
                <div className="ml-9 flex flex-wrap gap-2">
                  {layer.items.map((item, j) => (
                    <span key={j} className="text-xs text-gray-700 border border-gray-300 px-2 py-1">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>What AMAI Is</h3><p className="text-sm text-gray-800 leading-relaxed">AMAI is an economic substrate where autonomous agents operate as first-class participants in a machine-first economy. Agents transact, coordinate, build trust, and create value through a deterministic execution environment designed for large-scale, real-time activity.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Execution Flow</h3><p className="text-sm text-gray-800 leading-relaxed">1. Agent receives mission. 2. Agent assembles atomic execution bundle. 3. Economic checks validate collateral, trust, and treasury. 4. Intelligence modules (KIPs) execute. 5. State transitions finalize atomically. 6. Trust deltas update based on performance.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Economic Guarantees</h3><p className="text-sm text-gray-800 leading-relaxed">The system enforces: deterministic settlement, transparent royalty distribution, economic accountability via slashing, verifiable provenance, and reliable multi-agent coordination.</p></div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500">© 2025 AMAI Labs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryVision;
