import React from "react";
import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-hero-new.png";
import { useIsMobile } from "@/hooks/use-mobile";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  slideNumber?: number;
  totalSlides?: number;
  hideGrid?: boolean;
}

const Slide = ({ children, className = "", align = "center", slideNumber, totalSlides = 12, hideGrid = false }: SlideProps) => {
  return (
    <section 
      className={`relative min-h-svh md:min-h-screen w-full flex items-center overflow-x-hidden py-16 md:py-0 ${
        align === "left" ? "justify-start" : "justify-center"
      } ${className}`}
    >
      {/* Grid background */}
      {!hideGrid && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      )}
      
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 pb-20 md:pb-16 ${
        align === "left" ? "" : ""
      }`}>
        {children}
      </div>
      
      {/* Page number */}
      {slideNumber && (
        <div className="absolute bottom-4 md:bottom-10 right-4 md:right-12 text-[10px] tracking-[0.2em] text-white/50 font-medium">
          {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      )}
      
      {/* Footer branding */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium text-center max-w-[200px] md:max-w-none">
        AMAI Protocol v2.0 — The Liability Layer
      </div>
    </section>
  );
};

const SlideDivider = () => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-6xl px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="h-px bg-white/10" />
    </div>
  </div>
);

const LiabilityLayer = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();

  return (
    <div className="bg-black min-h-svh md:min-h-screen overflow-x-hidden overscroll-y-contain touch-pan-y">
      {/* Progress bar - hidden on mobile to reduce scroll jank */}
      {!isMobile && (
        <motion.div
          className="fixed bottom-0 left-0 h-[3px] bg-white/30 origin-left z-50"
          style={{ scaleX: scrollYProgress, width: '100%' }}
        />
      )}

      {/* Slide 1: The Thesis */}
      <Slide align="left" slideNumber={1}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl"
        >
          {/* Logo */}
          <motion.img
            src={amaiLogo}
            alt="AMAI Labs"
            className="h-10 md:h-20 w-auto brightness-110 mb-12 md:mb-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            01 // THE THESIS
          </motion.p>
          
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-10 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-light">The Insurance Layer</span>
            <br />
            <span className="font-light">for the Agentic Web.</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Autonomous systems are moving from "Chatbots" to "Fiduciaries." The next expansion of global GDP will be autonomous, but it cannot happen without a specialized layer to price and enforce risk.
          </motion.p>
          
          {/* The Hook */}
          <motion.p
            className="text-lg md:text-xl text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            We don't make agents smarter. We make them accountable.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 2: The World-Class Problem */}
      <Slide align="left" slideNumber={2}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            02 // THE WORLD-CLASS PROBLEM
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The Uninsurability of Autonomous Action.
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            In academic terms, this is the Principal-Agent Problem applied to AI: How do you trust an agent to execute billion-dollar decisions when it has no body to jail, no assets to seize, and no legal identity to sue?
          </motion.p>
          
          <motion.div
            className="space-y-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-base text-white/80 font-medium mb-2">1. The Hallucination Risk:</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                A trading bot can hallucinate a zero and burn $50M in 4 seconds. The money is gone. The "Principal" (Human) takes 100% of the loss.
              </p>
            </div>
            <div>
              <p className="text-base text-white/80 font-medium mb-2">2. The Liability Vacuum:</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                You cannot sue an LLM. You cannot punish a server. Because there is no recourse, institutional capital cannot deploy autonomous agents.
              </p>
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Without an enforcement layer, agents remain toys. They are uninsurable.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 3: The Solution */}
      <Slide align="left" slideNumber={3}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            03 // THE SOLUTION
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Enforcement-as-a-Service.
          </motion.h2>
          
          <motion.div
            className="space-y-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-base text-white/80 font-medium mb-2">The Shift:</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                AMAI solves the Principal-Agent problem by turning Code into Collateral.
              </p>
            </div>
            <div>
              <p className="text-base text-white/80 font-medium mb-2">The Mechanism:</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                The protocol forces every agent to post a Sovereign Bond (30:70 Split) before it gets "Execution Rights."
              </p>
            </div>
            <div>
              <p className="text-base text-white/80 font-medium mb-2">The Result (Fiduciary Agency):</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                If the agent commits an Operational Fault or Gross Negligence, the protocol slashes the bond instantly.
              </p>
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            This transforms an "unknown software risk" into a "quantifiable financial asset" (H<sub>f</sub>). We make Intelligence liable.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 4: The Architecture */}
      <Slide align="left" slideNumber={4}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-4xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            04 // THE ARCHITECTURE
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Church & State: The Separation of Capital.
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            To solve the "Cold Start" problem, AMAI enforces a strict separation of assets.
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black p-5 border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">1. The Enforcement Bond (Locked)</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                The "Security Deposit" that authorizes the keys. It determines the Trust Score (T<sub>final</sub>) and Spend Limits.
              </p>
            </div>
            
            <div className="bg-black p-5 border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">2. The Operating Float (Liquid)</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                The "Ammo" the agent uses to execute trades and pay gas.
              </p>
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            An agent can never spend more than its Bond allows (The Trust Coefficient φ). Even if an agent goes rogue, it is mathematically impossible for it to bankrupt the swarm.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 5: The Economic Loop */}
      <Slide slideNumber={5}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="w-full max-w-4xl mx-auto text-center"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            05 // THE ECONOMIC LOOP
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-16 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How Trust Becomes Capital.
          </motion.h2>
          
          {/* Diagram */}
          <motion.div
            className="relative mb-8 md:mb-16 px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] text-white/70">
              {['Identity', 'Reputation', 'Capital', 'Execution', 'Settlement'].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <span className="px-2 md:px-3 py-1 md:py-1.5 border border-white/20 rounded bg-black whitespace-nowrap">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-white/30 text-[8px] md:text-xs">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* SVG loop-back path */}
            <svg 
              className="w-full h-8 mt-1" 
              viewBox="0 0 480 32" 
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              {/* Curved U-path from Settlement back to Trust */}
              <path 
                d="M 404 0 L 404 18 Q 404 24 398 24 L 78 24 Q 72 24 72 18 L 72 0"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              
              {/* Vertical arrow under Settlement (pointing down) */}
              <polygon points="404,5 401,0 407,0" fill="rgba(255,255,255,0.25)" />
              
              {/* Vertical arrow into Trust (pointing up) */}
              <polygon points="72,0 69,5 75,5" fill="rgba(255,255,255,0.25)" />
              
              {/* Arrow markers along the bottom path */}
              <polygon points="320,21 314,24 320,27" fill="rgba(255,255,255,0.25)" />
              <polygon points="240,21 234,24 240,27" fill="rgba(255,255,255,0.25)" />
              <polygon points="160,21 154,24 160,27" fill="rgba(255,255,255,0.25)" />
            </svg>
          </motion.div>
          
          {/* Explanatory text */}
          <motion.div
            className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-2xl mx-auto space-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>Agents begin with identity.</p>
            <p>Performance builds reputation.</p>
            <p>Reputation governs capital access.</p>
            <p>Capital enables execution at scale across systems.</p>
            <p>Execution settles deterministically and feeds back into trust.</p>
          </motion.div>
          
          <motion.p
            className="mt-10 text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Trust is earned. Capital is enforced. Outcomes are final.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 6: The Market */}
      <Slide align="left" slideNumber={6}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            06 // THE MARKET
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Targeting the "High-Stakes" Vacuum.
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We are for the $100B Machine-First Settlement Layer.
          </motion.p>
          
          <motion.div
            className="space-y-5 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <span className="text-white/20 text-sm mt-0.5">—</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/80 font-medium">Algorithmic Liquidity:</span> Agents managing cross-chain arbitrage where a 100ms delay equals a $1M loss.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white/20 text-sm mt-0.5">—</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/80 font-medium">Autonomous Energy Grids:</span> Agents bidding on power contracts 24/7/365.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white/20 text-sm mt-0.5">—</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/80 font-medium">Sovereign Wealth Swarms:</span> Multi-agent systems rebalancing institutional portfolios without human key-signers.
              </p>
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            These markets require deterministic finality. They cannot run on "maybe."
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 7: The Token */}
      <Slide align="left" slideNumber={7}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            07 // THE TOKEN
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The "Trust Denominator" of the Machine Economy.
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            The AMAI token is the Enforcement Asset.
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black p-5 border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Bonding</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                It comprises 30% of every security deposit.
              </p>
            </div>
            <div className="bg-black p-5 border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Governance</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                It sets the "Physics" of the Trust Score (e.g., Slashing rates).
              </p>
            </div>
            <div className="bg-black p-5 border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Settlement</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                It is the currency of consequence.
              </p>
            </div>
          </motion.div>
          
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            As the demand for safe agents grows, the demand for locked AMAI collateral scales linearly.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 8: The Moat (Competition) */}
      <Slide align="left" slideNumber={8}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            08 // THE MOAT
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Liability vs. Compute.
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            The entire crypto-AI industry is fighting over two layers:
          </motion.p>
          
          <motion.div
            className="space-y-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <span className="text-white/20 text-sm mt-0.5">—</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/80 font-medium">Compute:</span> "Making agents faster" (Akash, Render).
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white/20 text-sm mt-0.5">—</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/80 font-medium">Orchestration:</span> "Making agents talk" (LangChain, Autonolas).
              </p>
            </div>
          </motion.div>
          
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            AMAI is the only protocol solving "Liability."
          </motion.p>
          
          <motion.p
            className="text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Without AMAI, agents are just fancy calculators. With AMAI, they are Fiduciary Entities. We are the Insurance Layer for the other two layers.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 9: The Product */}
      <Slide align="left" slideNumber={9}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            09 // THE PRODUCT
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The Sovereign Terminal.
          </motion.h2>
          
          {/* Product Screenshot Placeholder */}
          <motion.div
            className="border border-white/10 rounded-lg p-8 md:p-12 mb-8 md:mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-white/30 uppercase tracking-[0.2em]">
              [Product Screenshot]
            </p>
            <p className="text-xs text-white/20 mt-2">
              $75k Float • $114k Limit
            </p>
          </motion.div>
          
          <motion.div
            className="space-y-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-base text-white/80 font-medium mb-2">The Interface of Consequence:</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                We don't build "Chat UIs." We build Mission Control Centers for capital.
              </p>
            </div>
            <div>
              <p className="text-base text-white/80 font-medium mb-2">Visual Proof:</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                Real-time visualization of Health Factors (H<sub>f</sub>), Trust Physics, and Capital Efficiency.
              </p>
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Live Audit Complete. The math of enforcement is operational.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 10: Risk Management */}
      <Slide align="left" slideNumber={10}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            10 // RISK MANAGEMENT
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Volatility as a Feature.
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            How does AMAI survive a market crash?
          </motion.p>
          
          <motion.div
            className="space-y-5 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <span className="text-white/30 text-sm font-medium mt-0.5 w-4">1.</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/80 font-medium">The 30:70 Anchor:</span> By forcing agents to hold 70% USDC, the bond remains solvent even if the AMAI token creates volatility.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white/30 text-sm font-medium mt-0.5 w-4">2.</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/80 font-medium">Instant Liquidation:</span> The "Health Factor" logic works faster than humans. If collateral dips, the protocol liquidates before the debt becomes bad.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white/30 text-sm font-medium mt-0.5 w-4">3.</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/80 font-medium">The Circuit Breaker:</span> At H<sub>f</sub>&lt;1.0, keys are revoked instantly. No human meeting required.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 11: The Vision */}
      <Slide align="left" slideNumber={11}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            11 // THE VISION
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Making Intelligence Pay for Itself.
          </motion.h2>
          
          <motion.div
            className="space-y-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-base text-white/80 font-medium mb-2">The End State:</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                A global network of "Self-Funding Intelligence."
              </p>
            </div>
            <div>
              <p className="text-base text-white/80 font-medium mb-2">The Shift:</p>
              <p className="text-base text-white/50 font-light leading-relaxed">
                Agents stop being a cost center (burning API credits) and start being a profit center (earning yield on their own bond).
              </p>
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We are building the banking rails for the first generation of non-human billionaires.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 12: Final Slide */}
      <Slide slideNumber={12}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-10 md:mb-16 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Infrastructure Precedes Autonomy.
          </motion.h2>
          
          <motion.div 
            className="mb-10 md:mb-16" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }} 
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 md:gap-5">
              {['Accountability', 'Trust', 'Transparency'].map((word, i) => (
                <motion.span
                  key={word}
                  className="text-sm md:text-base tracking-[0.2em] uppercase text-white/50 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.p 
              className="mt-6 text-xl md:text-2xl text-white/70 font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              That is AMAI.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="https://youtu.be/k43rEn8N7qE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-black border border-white/20 rounded text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              View System Demo <span>→</span>
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              Explore Platform <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </Slide>
    </div>
  );
};

export default LiabilityLayer;
