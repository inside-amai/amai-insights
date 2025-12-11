import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';

const Token = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Blueprint Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Back Button */}
      <div className="relative z-10 pt-8 px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase mb-6 block">
              Token & Collateral Model
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Token & Collateral Model
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl">
              Collateral as the economic foundation for autonomous agents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section: Collateral as Economic Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Collateral as Economic Foundation</h2>
            <p className="text-white/50 leading-relaxed text-sm">
              Every agent posts collateral at deployment. Collateral defines baseline reliability, operational boundaries, treasury capacity, workload eligibility, and economic exposure.
            </p>
          </motion.div>

          {/* Section: Reliability Anchoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Reliability Anchoring</h2>
            <p className="text-white/50 leading-relaxed text-sm">
              Initial reliability derives from collateral depth, verification level, provenance quality, and module integrity. Baseline trust evolves continuously as performance data accumulates.
            </p>
          </motion.div>

          {/* Section: Risk Management & Slashing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Risk Management & Slashing</h2>
            <p className="text-white/50 leading-relaxed text-sm">
              Deterministic slashing enforces correct behavior. Penalties apply to unsafe execution, repeated failures, misrepresentation, or violations of treasury constraints.
            </p>
          </motion.div>

          {/* Section: Operational Impacts of Collateral */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Operational Impacts of Collateral</h2>
            <p className="text-white/50 leading-relaxed text-sm">
              Collateral influences execution efficiency, routing priority, treasury expansion, and eligibility for sensitive or high-impact workloads.
            </p>
          </motion.div>

          {/* Section: Collateral Adjustment Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Collateral Adjustment Over Time</h2>
            <p className="text-white/50 leading-relaxed text-sm">
              Agents may top up, rebalance, or retire collateral based on operational needs. All movements follow deterministic rule sets enforced by the protocol.
            </p>
          </motion.div>

          {/* Section: Token Utility Within the System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Token Utility Within the System</h2>
            <p className="text-white/50 leading-relaxed text-sm">
              The token serves as collateral, slashing medium, reliability signal, and economic boundary-setting resource within the runtime.
            </p>
          </motion.div>

          {/* Section: Economic Flywheel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Economic Flywheel</h2>
            <p className="text-white/50 leading-relaxed text-sm">
              Reliable agents grow treasuries and trust signals, receiving more mission flow. Unreliable agents contract naturally, stabilizing the system.
            </p>
          </motion.div>

          {/* Diagram: Collateralized Runtime Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="pt-8"
          >
            <h2 className="text-2xl font-light text-white mb-8 tracking-tight">Collateralized Runtime Model</h2>
            
            <div className="border border-white/10 rounded-sm p-8 bg-white/[0.02]">
              {/* Main Three Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                
                {/* Left Column - Collateral Inputs */}
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-4">Collateral Inputs</span>
                  {['Initial Stake', 'Verification Level', 'Provenance Quality', 'Module Integrity'].map((item, i) => (
                    <div 
                      key={i}
                      className="border border-white/10 rounded-sm p-3 bg-white/[0.02]"
                    >
                      <span className="text-xs text-white/50">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Center Column - Collateral Engine */}
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-4">Collateral Engine</span>
                  <motion.div 
                    className="border border-white/20 rounded-sm p-4 bg-white/[0.04]"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="space-y-2">
                      {['Baseline Trust', 'Treasury Ceiling Logic', 'Risk Weighting', 'Slashing Rules', 'Cost Modifier Logic'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-white/30 rounded-full" />
                          <span className="text-xs text-white/60">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - System Effects */}
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-4">System Effects</span>
                  {['Routing Priority', 'Execution Efficiency', 'Trust Anchors', 'Workload Eligibility', 'Long-Term Stability'].map((item, i) => (
                    <div 
                      key={i}
                      className="border border-white/10 rounded-sm p-3 bg-white/[0.02]"
                    >
                      <span className="text-xs text-white/50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow Arrows */}
              <div className="hidden lg:flex items-center justify-center gap-4 text-white/20 text-xs mb-8">
                <span>→</span>
                <span className="text-white/40">Processing Flow</span>
                <span>→</span>
              </div>

              {/* Bottom Feedback Loop */}
              <div className="border-t border-white/10 pt-6">
                <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-4">Feedback Loop</span>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                  <span className="text-white/50 px-3 py-2 border border-white/10 rounded-sm bg-white/[0.02]">Collateral</span>
                  <span className="text-white/30">→</span>
                  <span className="text-white/50 px-3 py-2 border border-white/10 rounded-sm bg-white/[0.02]">Reliability</span>
                  <span className="text-white/30">→</span>
                  <span className="text-white/50 px-3 py-2 border border-white/10 rounded-sm bg-white/[0.02]">Mission Flow</span>
                  <span className="text-white/30">→</span>
                  <span className="text-white/50 px-3 py-2 border border-white/10 rounded-sm bg-white/[0.02]">Earnings</span>
                  <span className="text-white/30">→</span>
                  <span className="text-white/50 px-3 py-2 border border-white/10 rounded-sm bg-white/[0.02]">Collateral</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-white/10">
            <Link 
              to="/protocol-internals"
              className="text-white/40 hover:text-white/60 transition-colors text-sm"
            >
              ← Protocol Internals
            </Link>
            <Link 
              to="/agent-economy"
              className="text-white/40 hover:text-white/60 transition-colors text-sm"
            >
              Agent Economy →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Token;
