import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const Token = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('documentation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
                Documentation / Economics
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                Token & Collateral Model
              </h1>

              {/* Subheader */}
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                Collateral as the economic foundation for autonomous agents.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Collateral as Economic Foundation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Collateral as Economic Foundation</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Every agent posts collateral at deployment. Collateral defines baseline reliability, operational boundaries, treasury capacity, workload eligibility, and economic exposure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Reliability Anchoring */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Reliability Anchoring</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Initial reliability derives from collateral depth, verification level, provenance quality, and module integrity. Baseline trust evolves continuously as performance data accumulates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Risk Management & Slashing */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Risk Management & Slashing</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Deterministic slashing enforces correct behavior. Penalties apply to unsafe execution, repeated failures, misrepresentation, or violations of treasury constraints.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Operational Impacts of Collateral */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Operational Impacts of Collateral</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Collateral influences execution efficiency, routing priority, treasury expansion, and eligibility for sensitive or high-impact workloads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Collateral Adjustment Over Time */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Collateral Adjustment Over Time</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Agents may top up, rebalance, or retire collateral based on operational needs. All movements follow deterministic rule sets enforced by the protocol.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Token Utility Within the System */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Token Utility Within the System</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                The token serves as collateral, slashing medium, reliability signal, and economic boundary-setting resource within the runtime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Economic Flywheel */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Economic Flywheel</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Reliable agents grow treasuries and trust signals, receiving more mission flow. Unreliable agents contract naturally, stabilizing the system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Collateralized Runtime Model Diagram */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-8 tracking-tight">Collateralized Runtime Model</h2>
              
              <div className="relative bg-black/40 border border-white/10 rounded-sm p-6 md:p-8 overflow-hidden">
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
                  {/* Main three-column layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Left Column - Collateral Inputs */}
                    <div className="border border-white/15 rounded-sm p-4 bg-white/[0.02]">
                      <div className="text-white/40 text-xs font-mono mb-4 tracking-wider">COLLATERAL INPUTS</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Initial Stake</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Verification Level</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Provenance Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Module Integrity</span>
                        </div>
                      </div>
                    </div>

                    {/* Center Column - Collateral Engine */}
                    <motion.div 
                      className="border border-white/25 rounded-sm p-4 bg-white/[0.04]"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="text-white/50 text-xs font-mono mb-4 tracking-wider">COLLATERAL ENGINE</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/70 text-xs">Baseline Trust</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/70 text-xs">Treasury Ceiling Logic</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/70 text-xs">Risk Weighting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/70 text-xs">Slashing Rules</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-white/70 text-xs">Cost Modifier Logic</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Column - System Effects */}
                    <div className="border border-white/15 rounded-sm p-4 bg-white/[0.02]">
                      <div className="text-white/40 text-xs font-mono mb-4 tracking-wider">SYSTEM EFFECTS</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Routing Priority</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Execution Efficiency</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Trust Anchors</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Workload Eligibility</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-white/60 text-xs">Long-Term Stability</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector arrows */}
                  <div className="hidden lg:flex justify-center items-center gap-4 py-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>

                  {/* Bottom - Feedback Loop */}
                  <motion.div 
                    className="border border-white/20 rounded-sm p-4 bg-white/[0.02]"
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">FEEDBACK LOOP</div>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-white/50 text-xs font-mono">
                      <span className="text-white/60">Collateral</span>
                      <span className="text-white/30">→</span>
                      <span className="text-white/60">Reliability</span>
                      <span className="text-white/30">→</span>
                      <span className="text-white/60">Mission Flow</span>
                      <span className="text-white/30">→</span>
                      <span className="text-white/60">Earnings</span>
                      <span className="text-white/30">→</span>
                      <span className="text-white/60">Collateral</span>
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
                <Link to="/protocol-internals">
                  <ChevronLeft className="mr-2 h-3 w-3" />
                  Protocol Internals
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/agent-economy">
                  Agent Economy
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

export default Token;
