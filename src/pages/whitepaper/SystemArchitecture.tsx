import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft, FileDown } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { PdfLayout } from '@/components/PdfLayout';

const architectureLayers = [
  {
    number: '6',
    title: 'Swarm Interface',
    items: ['Coordination hooks', 'Aggregated trust', 'Shared memory pools']
  },
  {
    number: '5',
    title: 'Execution Lifecycle',
    items: ['Plan', 'Validate', 'Execute', 'Settle', 'Update']
  },
  {
    number: '4',
    title: 'Collateral & Trust Layer',
    items: ['Bonded collateral', 'Trust curves', 'Slashing logic']
  },
  {
    number: '3',
    title: 'Intelligence Layer (KIPs)',
    items: ['Skills', 'Modules', 'Composition logic', 'Royalty routing']
  },
  {
    number: '2',
    title: 'Memory Layer',
    items: ['Contextual store', 'Mission history', 'Embeddings']
  },
  {
    number: '1',
    title: 'Identity Layer',
    items: ['Decentralized identifier', 'Provenance', 'Lineage']
  }
];

const lifecycleSteps = [
  'Initialization',
  'Mission Intake',
  'Planning and Assembly',
  'Economic Validation',
  'Execution',
  'Settlement and Royalty Routing',
  'Trust Update'
];

const SystemArchitecture = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();

  useEffect(() => {
    document.title = 'Agent Architecture | AMAI Labs';
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
    downloadPdf({ filename: 'amai-labs-agent-architecture.pdf' });
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
        <span className="text-white/30 font-mono text-xs tracking-wider">02 / 09</span>
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
                    Documentation / Architecture
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                    Agent Architecture
                  </h1>

                  {/* Subheader */}
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                    How autonomous agents are structured, extended, secured, and coordinated.
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
                Abstract: Detailed specification of agent identity, memory, intelligence modules, collateral binding, execution lifecycle, and swarm coordination mechanisms.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">What an Agent Is</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                AMAI agents are autonomous economic entities. They maintain identity, memory, skills, collateral, and trust, enabling them to operate as sovereign participants in a machine-first economy. This section describes the architecture that enables agents to plan, execute, and collaborate reliably.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Identity & Provenance</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Each agent begins with a cryptographic identity anchored by a decentralized identifier, provenance record, and lineage metadata. Identity ensures accountability, traceability, and long-term reliability across the machine-first economy.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Skills & Kernelized Intelligence (KIPs)</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Agents gain capabilities through KIPs — composable intelligence modules. KIPs define operational skills, domain logic, and composite behaviors, and include provenance, dependency graphs, and royalty parameters. Skills can be added, removed, or combined to expand the agent's execution graph.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Memory & Context Handling</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Agents maintain memory to track mission history, store intermediate results, update contextual embeddings, and improve coordination. Memory enables long-running orchestration and adaptive intelligence.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Bonded Collateral & Trust Roots</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Collateral creates economic accountability. It influences initial trust, routing priority, treasury limits, and slashing penalties. Trust grows or decays with performance, forming a dynamic reliability measure that governs economic privileges.
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
              <h2 className="text-xl font-light text-white mb-8 tracking-tight">Execution Lifecycle</h2>
              
              <div className="space-y-4">
                {lifecycleSteps.map((step, index) => (
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

              <p className="text-white/40 text-sm leading-relaxed mt-6">
                This lifecycle ensures every agent action is deterministic, auditable, and economically grounded.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Swarm Participation</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Agents can collaborate in swarms to execute larger tasks. Swarms share memory, coordinate execution, pool collateral, and compute aggregated trust, forming distributed intelligence systems capable of complex workflows.
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
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">Agent Architecture Stack</h2>
              <p className="text-white/40 text-sm mb-12">AMAI Agent Architecture Stack</p>

              {/* Blueprint Diagram */}
              <div 
                className="relative border border-white/[0.08] rounded-[2px] p-8 md:p-12"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              >
                <div className="space-y-4">
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
                          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
                      {index < architectureLayers.length - 1 && (
                        <div className="absolute -bottom-4 left-[19px] w-px h-4 bg-white/[0.06]" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Diagram label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black px-3">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono">
                    Agent Stack
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
                  <ChevronLeft className="mr-2 h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
                  System Overview
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/economic-substrate">
                  Economic Substrate
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
