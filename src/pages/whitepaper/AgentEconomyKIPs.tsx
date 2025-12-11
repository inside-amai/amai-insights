import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const AgentEconomyKIPs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          asChild
          variant="outline" 
          size="sm" 
          className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
        >
          <Link to="/#documentation">
            <ArrowLeft className="mr-2 h-3 w-3" />
            Back
          </Link>
        </Button>
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
                
                <div className="relative z-10 space-y-6">
                  {/* Top - Metadata Layer */}
                  <motion.div 
                    className="border border-white/20 rounded-sm p-4 bg-white/[0.02]"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">METADATA LAYER</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="text-white/60 text-xs">Content Hash</div>
                      <div className="text-white/60 text-xs">Provenance</div>
                      <div className="text-white/60 text-xs">Lineage</div>
                      <div className="text-white/60 text-xs">Permissions</div>
                    </div>
                  </motion.div>

                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-white/20" />
                  </div>

                  {/* Middle Row - Intelligence Module + Side Parameters */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Side Parameters - Left */}
                    <motion.div 
                      className="border border-white/15 rounded-sm p-4 bg-white/[0.02] lg:order-1"
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

                    {/* Intelligence Module - Center */}
                    <motion.div 
                      className="border border-white/25 rounded-sm p-4 bg-white/[0.04] lg:order-2"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                    >
                      <div className="text-white/50 text-xs font-mono mb-3 tracking-wider">INTELLIGENCE MODULE</div>
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

                    {/* Placeholder for grid alignment */}
                    <div className="hidden lg:block lg:order-3" />
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-white/20" />
                  </div>

                  {/* Bottom - Execution Interface */}
                  <motion.div 
                    className="border border-white/20 rounded-sm p-4 bg-white/[0.02]"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
                  >
                    <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">EXECUTION INTERFACE</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="text-white/60 text-xs font-mono">Invoke()</div>
                      <div className="text-white/60 text-xs font-mono">Validate()</div>
                      <div className="text-white/60 text-xs font-mono">Version()</div>
                      <div className="text-white/60 text-xs font-mono">Compose()</div>
                    </div>
                  </motion.div>
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

        <Footer />
      </div>
    </div>
  );
};

export default AgentEconomyKIPs;
