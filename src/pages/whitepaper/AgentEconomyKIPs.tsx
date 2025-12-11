import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft, FileDown } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { PdfLayout } from '@/components/PdfLayout';

const AgentEconomyKIPs = () => {
  const navigate = useNavigate();
  const { pdfLayoutRef, downloadPdf } = usePdfDownload();

  useEffect(() => {
    document.title = 'Kernelized Intelligence | AMAI Labs';
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
    downloadPdf({ filename: 'amai-labs-kernelized-intelligence.pdf' });
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
        <span className="text-white/30 font-mono text-xs tracking-wider">06 / 09</span>
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
                    Documentation / Intelligence
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                    Kernelized Intelligent Property (KIP)
                  </h1>

                  {/* Subheader */}
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                    Composable intelligence modules with provenance, permissioning, and royalty logic.
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
                Abstract: Specification of composable intelligence modules including lifecycle, provenance, lineage, permissioning, capability models, royalty mechanics, and execution composition.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* What a KIP Is */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">What a KIP Is</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                A KIP is a self-contained intelligence module with deterministic inputs and outputs, provenance metadata, permission rules, and optional royalty configuration. KIPs serve as the atomic intelligence units inside agent execution bundles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* KIP Lifecycle */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">KIP Lifecycle</h2>
              <ol className="space-y-2 text-white/50 text-sm list-decimal ml-6">
                <li>Creation</li>
                <li>Verification</li>
                <li>Invocation</li>
                <li>Royalty Routing</li>
                <li>Versioning</li>
              </ol>
              <p className="text-white/50 text-sm leading-relaxed mt-4">
                KIPs remain stable, traceable, and safely composable across an agent's lifecycle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Provenance & Lineage */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Provenance & Lineage</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Each KIP includes a content hash, dependency graph, lineage metadata, and ownership signatures. This creates a cryptographically grounded knowledge graph for agent intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Permissioning & Capability Model */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Permissioning & Capability Model</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                KIPs define their own access boundaries: required inputs, allowed outputs, resource ceilings, and operational constraints. Agents may invoke but not modify or escalate beyond these rules.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Royalty Mechanics */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Royalty Mechanics (Optional)</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                When enabled, KIPs route proportional micro-royalties to upstream contributors during settlement, creating revenue-bearing intelligence assets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Composition & Execution */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Composition & Execution</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Agents compose KIPs into execution graphs: sequential pipelines, branching logic, parallelizable steps, and swarm-level coordination.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Why KIPs Matter */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Why KIPs Matter</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                KIPs create a global, open intelligence marketplace and provide the modular, reliable, economically aligned foundation for agent capabilities in AMAI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* KIP Architecture Overview Diagram */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-8 tracking-tight">KIP Architecture Overview</h2>
              
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
                
                <div className="relative z-10 space-y-4">
                  {/* TOP - Metadata Layer */}
                  <motion.div 
                    className="border border-white/20 rounded-sm p-4 bg-white/[0.02]"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-white/40 text-xs font-mono mb-3 tracking-wider text-center">METADATA LAYER</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                      <div className="text-white/60 text-xs">Content Hash</div>
                      <div className="text-white/60 text-xs">Provenance</div>
                      <div className="text-white/60 text-xs">Lineage</div>
                      <div className="text-white/60 text-xs">Permissions</div>
                    </div>
                  </motion.div>

                  {/* Arrow down from Metadata */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-6 bg-white/20" />
                      <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white/20" />
                    </div>
                  </div>

                  {/* MIDDLE - Parameters + Intelligence Module */}
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                    {/* Parameters - Left */}
                    <motion.div 
                      className="border border-white/15 rounded-sm p-4 bg-white/[0.02] w-full lg:w-48"
                      animate={{ opacity: [0.6, 0.9, 0.6] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">PARAMETERS</div>
                      <div className="space-y-2">
                        <div className="text-white/50 text-xs">Verification Level</div>
                        <div className="text-white/50 text-xs">Dependency Graph</div>
                        <div className="text-white/50 text-xs">Royalty Parameters</div>
                        <div className="text-white/50 text-xs">Licensing Terms</div>
                      </div>
                    </motion.div>

                    {/* Arrow from Parameters to Intelligence Module - Desktop only */}
                    <div className="hidden lg:flex items-center">
                      <div className="w-6 h-px bg-white/20" />
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-white/20" />
                    </div>

                    {/* Arrow down on mobile */}
                    <div className="flex lg:hidden justify-center">
                      <div className="flex flex-col items-center">
                        <div className="w-px h-4 bg-white/20" />
                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white/20" />
                      </div>
                    </div>

                    {/* Intelligence Module - Center */}
                    <motion.div 
                      className="border border-white/25 rounded-sm p-4 bg-white/[0.04] w-full lg:w-64"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                    >
                      <div className="text-white/50 text-xs font-mono mb-3 tracking-wider text-center">INTELLIGENCE MODULE</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Input Schema</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Processing Logic</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Output Schema</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Resource Constraints</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Arrow down from Intelligence Module */}
                  <div className="flex justify-center lg:ml-[calc(12rem+1.5rem)]">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-6 bg-white/20" />
                      <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white/20" />
                    </div>
                  </div>

                  {/* BOTTOM - Execution Interface */}
                  <div className="flex justify-center">
                    <motion.div 
                      className="border border-white/20 rounded-sm p-4 bg-white/[0.02] w-full lg:w-64 lg:ml-[calc(12rem+1.5rem)]"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
                    >
                      <div className="text-white/40 text-xs font-mono mb-3 tracking-wider text-center">EXECUTION INTERFACE</div>
                      <div className="grid grid-cols-2 gap-2 justify-items-center">
                        <div className="text-white/60 text-xs font-mono">Invoke()</div>
                        <div className="text-white/60 text-xs font-mono">Validate()</div>
                        <div className="text-white/60 text-xs font-mono">Version()</div>
                        <div className="text-white/60 text-xs font-mono">Compose()</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/treasury-dynamics">
                  <ChevronLeft className="mr-2 h-3 w-3" />
                  Treasury Dynamics
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/protocol-internals">
                  Protocol Internals
                  <ChevronRight className="ml-2 h-3 w-3" />
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
            <span className="text-sm text-gray-500 font-mono">06 / 09</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Kernelized Intelligent Property (KIP)</h2>
          <p className="text-sm text-gray-600 italic mb-4">Composable intelligence modules with provenance, permissioning, and royalty logic.</p>
          <div className="bg-gray-100 p-4 border-l-4 border-black">
            <p className="text-sm text-gray-700"><strong>Abstract:</strong> Specification of composable intelligence modules including lifecycle, provenance, lineage, permissioning, capability models, royalty mechanics, and execution composition.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>What a KIP Is</h3><p className="text-sm text-gray-800 leading-relaxed">A KIP is a composable intelligence unit that can be licensed, versioned, and monetized. KIPs include skills, models, adapters, and execution modules with tracked provenance and automatic royalty distribution.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>KIP Lifecycle</h3><p className="text-sm text-gray-800 leading-relaxed">1. Creation and registration 2. Versioning 3. Permissioning and licensing 4. Execution and invocation 5. Royalty distribution 6. Deprecation or succession.</p></div>
          <div><h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Royalty Mechanics</h3><p className="text-sm text-gray-800 leading-relaxed">Each KIP invocation triggers micro-royalties to creators. Royalties are calculated based on: Usage frequency, Value generated, Licensing terms, and Chain of composition.</p></div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500">© 2025 AMAI Labs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AgentEconomyKIPs;
