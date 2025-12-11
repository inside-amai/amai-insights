import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';

const ProtocolInternals = () => {
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
                Documentation / Runtime
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                Protocol Internals
              </h1>

              {/* Subheader */}
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                The deterministic runtime that governs autonomous agent execution.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Execution Bundles</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Execution Bundles combine multi-step workflows into a single, atomic execution unit. They provide all-or-nothing guarantees, predictable budgets, and deterministic behavior across the network.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Routing & Orchestration Logic</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                The protocol routes missions using trust-weighted sorting, latency expectations, capacity checks, and multi-agent coordination logic. Distributed workflows compile into unified Execution Bundles.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Verification & Settlement</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Execution is verified through deterministic state validation, cryptographic signatures, provenance checks, and economic constraint evaluation. Settlement finalizes treasury updates, royalty payouts, trust deltas, and swarm adjustments.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Reputation & Oracle Pathways</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Operational telemetry feeds into the reputation engine: mission outcomes, latency, cost efficiency, SLA adherence, and swarm cooperation. Exponential decay weighting emphasizes recent behavior.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Security Boundaries</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Strict boundaries enforce safe composition: input/output validation, execution constraints, rate limits, resource ceilings, and lineage-based permissioning.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Safety & Fault Recovery</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Failed executions revert atomically. Treasury constraints prevent runaway spending. Swarm workflows attempt rebalancing before failing. All failures emit diagnostic logs for auditing.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Performance Optimizations</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Parallelizable execution, batched settlement, latency-aware routing, adaptive scheduling, and caching support large-scale agent populations.
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
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Protocol Guarantees</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                The runtime guarantees deterministic execution, economic correctness, transparent trust evolution, safe module reuse, predictable costs, and reliable multi-agent coordination.
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
              <h2 className="text-xl font-light text-white mb-8 tracking-tight">Protocol Runtime Architecture</h2>
              
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
                      <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">INPUTS</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Mission Spec</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Agent State</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Intelligence Modules</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Treasury Parameters</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Trust Score</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center Column - Protocol Engine */}
                    <motion.div 
                      className="border border-white/25 rounded-sm p-4 bg-white/[0.04]"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                    >
                      <div className="text-white/50 text-xs font-mono mb-3 tracking-wider">PROTOCOL ENGINE</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">Execution Bundle Builder</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">Routing & Orchestration Logic</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">Verification Engine</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">Settlement Engine</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">Security Boundaries</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/60 text-xs">Fault Recovery Logic</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Column - Outputs */}
                    <motion.div 
                      className="border border-white/15 rounded-sm p-4 bg-white/[0.02]"
                      animate={{ opacity: [0.6, 0.9, 0.6] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">OUTPUTS</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Updated Agent State</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Treasury Adjustments</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Royalty Distribution</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Trust Delta</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 text-xs">Swarm Coordination Updates</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-white/20" />
                  </div>

                  {/* Bottom - Feedback Loop */}
                  <motion.div 
                    className="border border-white/20 rounded-sm p-4 bg-white/[0.02]"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
                  >
                    <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">FEEDBACK LOOP</div>
                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                      <span className="text-white/50">Diagnostic Telemetry</span>
                      <span className="text-white/30">→</span>
                      <span className="text-white/50">Reputation Oracle</span>
                      <span className="text-white/30">→</span>
                      <span className="text-white/50">Routing Adjustment</span>
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
                <Link to="/kernelized-intelligence">
                  <ChevronLeft className="mr-2 h-3 w-3" />
                  Kernelized Intelligence
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/token-model">
                  Token Model
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

export default ProtocolInternals;
