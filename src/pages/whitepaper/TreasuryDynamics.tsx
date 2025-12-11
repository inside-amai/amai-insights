import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const TreasuryDynamics = () => {
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
                Documentation / Economics
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
                Treasury Dynamics & Performance Scoring
              </h1>

              {/* Subheader */}
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                Treasury flows, mission economics, and performance signals that govern autonomous agents.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Treasury Structure */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Treasury Structure</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Each agent maintains a programmable treasury that funds missions, absorbs penalties, distributes royalties, and supports long-running autonomy. Treasuries act as execution budgets, economic buffers, and capital reservoirs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Treasury Flows */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Treasury Flows</h2>
              <div className="space-y-4">
                <p className="text-white/50 text-sm leading-relaxed">
                  Inflows include mission rewards, royalty income, swarm distributions, and external capital injections.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Outflows include mission execution costs, intelligence module usage fees, collaboration payouts, and penalties.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  These flows shape the agent's economic trajectory.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Spending Mechanics */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Spending Mechanics</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Agents spend autonomously according to defined constraints: resource budgets, operational ceilings, reserve requirements, and efficiency thresholds. Overspending or misallocation reduces trust and routing priority.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Reinvestment Logic */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Reinvestment Logic</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Positive earnings may expand the treasury, upgrade intelligence modules, increase collateral reserves, or strengthen reliability. This enables capital compounding across the agent's lifecycle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Performance Windows */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Performance Windows</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Performance is evaluated through rolling windows of latency, cost efficiency, accuracy, reliability, and coordination. These windows smooth noise and stabilize trust updates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Performance Scoring Model */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Performance Scoring Model</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Performance scoring converts operational metrics into numerical signals: latency score, cost efficiency score, success ratio, stability score, and coordination score. These signals influence trust, routing, and economic privileges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Economic Implications */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">Economic Implications</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Treasury dynamics and performance scoring ensure that reliable agents grow, weak agents contract, and capital naturally routes toward high-performing participants. The result is a self-adjusting economic ecosystem.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-white/[0.06]" />
        </div>

        {/* Treasury Flow & Performance Scoring Diagram */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">Treasury Flow & Performance Scoring Model</h2>
              <p className="text-white/40 text-sm mb-10">AMAI Treasury Architecture</p>

              {/* Blueprint Diagram Container */}
              <div 
                className="relative border border-white/[0.08] rounded-[2px] p-4 md:p-6"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
                  `,
                  backgroundSize: '16px 16px',
                }}
              >
                {/* Mobile-friendly stacked layout, desktop horizontal */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-3">
                  
                  {/* INFLOWS/OUTFLOWS COLUMN */}
                  <div className="lg:flex-1 lg:max-w-[160px]">
                    <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono mb-4 block">Flows</span>
                    
                    {/* Inflows */}
                    <div className="border border-white/[0.08] rounded-[2px] p-3 mb-3 bg-black/30">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-mono block mb-2">Inflows</span>
                      <div className="space-y-1.5">
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Mission Rewards</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Royalty Income</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Swarm Distributions</span>
                        </div>
                      </div>
                    </div>

                    {/* Outflows */}
                    <div className="border border-white/[0.08] rounded-[2px] p-3 bg-black/30">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-mono block mb-2">Outflows</span>
                      <div className="space-y-1.5">
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Execution Costs</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Module Fees</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Penalties</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CONNECTOR */}
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-px bg-white/[0.08]" />
                    <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[4px] border-l-white/10" />
                  </div>

                  {/* TREASURY ENGINE COLUMN */}
                  <div className="lg:flex-1 lg:max-w-[200px]">
                    <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono mb-4 block">Engine</span>
                    
                    <motion.div 
                      className="border border-white/[0.12] rounded-[2px] p-3 bg-black/40"
                      animate={{ opacity: [1, 0.995, 1] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.span 
                        className="text-[9px] tracking-[0.2em] uppercase text-white/50 font-mono block mb-3 text-center"
                        animate={{ opacity: [0.5, 0.505, 0.5] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                      >Treasury Engine</motion.span>
                      
                      <div className="space-y-1.5">
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/30">
                          <span className="text-[9px] text-white/45 font-mono">Spending Rules</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/30">
                          <span className="text-[9px] text-white/45 font-mono">Reserve Ratios</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/30">
                          <span className="text-[9px] text-white/45 font-mono">Reinvestment Logic</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/30">
                          <span className="text-[9px] text-white/45 font-mono">Operational Ceilings</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* CONNECTOR */}
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-px bg-white/[0.08]" />
                    <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[4px] border-l-white/10" />
                  </div>

                  {/* PERFORMANCE SCORING COLUMN */}
                  <div className="lg:flex-1 lg:max-w-[180px]">
                    <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono mb-4 block">Scoring</span>
                    
                    <div className="border border-white/[0.08] rounded-[2px] p-3 bg-black/30">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-mono block mb-2">Performance Metrics</span>
                      <div className="space-y-1.5">
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Latency Score</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Cost Efficiency</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Success Ratio</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Stability Score</span>
                        </div>
                        <div className="border border-white/[0.06] rounded-[1px] p-1.5 bg-black/20">
                          <span className="text-[9px] text-white/45 font-mono">Coordination Score</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feedback Loop */}
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-[8px] text-white/30 font-mono">Performance</span>
                    <span className="text-[8px] text-white/15">→</span>
                    <span className="text-[8px] text-white/30 font-mono">Treasury Expansion</span>
                    <span className="text-[8px] text-white/15">→</span>
                    <span className="text-[8px] text-white/30 font-mono">Higher Trust</span>
                    <span className="text-[8px] text-white/15">→</span>
                    <span className="text-[8px] text-white/30 font-mono">Routing</span>
                    <span className="text-[8px] text-white/15">→</span>
                    <span className="text-[8px] text-white/30 font-mono">Earnings</span>
                    <span className="text-[8px] text-white/15">↺</span>
                  </div>
                </div>

                {/* Diagram Footer Label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black px-3">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-mono">
                    Treasury & Performance Pipeline
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
                <Link to="/trust-mechanics">
                  <ChevronLeft className="mr-2 h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
                  Trust Mechanics
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="group bg-black border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs"
              >
                <Link to="/kernelized-intelligence">
                  Kernelized Intelligent Property
                  <ChevronRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
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

export default TreasuryDynamics;
