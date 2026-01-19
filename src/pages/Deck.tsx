import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-hero-new.png";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  slideNumber?: number;
  totalSlides?: number;
}

const Slide = ({ children, className = "", align = "center", slideNumber, totalSlides = 11 }: SlideProps) => (
  <section 
    className={`relative min-h-screen w-full flex items-center overflow-hidden ${
      align === "left" ? "justify-start" : "justify-center"
    } ${className}`}
  >
    {/* Grid background */}
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}
    />
    
    <div className={`relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-24 ${
      align === "left" ? "" : ""
    }`}>
      {children}
    </div>
    
    {/* Page number */}
    {slideNumber && (
      <div className="absolute bottom-8 right-8 md:bottom-10 md:right-12 text-[10px] tracking-[0.2em] text-white/50 font-medium">
        {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>
    )}
    
    {/* Footer branding */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium">
      Infrastructure & Research · AMAI Labs
    </div>
  </section>
);

const Deck = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-black min-h-screen">
      {/* Progress bar */}
      <motion.div
        className="fixed bottom-0 left-0 h-[3px] bg-white/30 origin-left z-50"
        style={{ scaleX: scrollYProgress, width: '100%' }}
      />
      {/* Slide 1: Title */}
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
            className="h-12 md:h-16 lg:h-20 xl:h-22 w-auto brightness-110 mb-16 md:mb-24"
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
            Thesis
          </motion.p>
          
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-10 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-light">Agents Are</span>
            <br />
            <span className="font-normal">Entering the Economy.</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Infrastructure for autonomous agents to establish identity, build reputation, enforce capital accountability, and settle value independently, with reputation functioning as a persistent, credit-like trust score.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 2: The Shift */}
      <Slide slideNumber={2}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Shift
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-16 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The Next Billion Users of the Internet Will Not Be People,
            <br />
            But Autonomous Agents.
          </motion.h2>
          
          {/* Body copy - numbered points */}
          <motion.div
            className="space-y-8 text-left max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Point 1 */}
            <div>
              <p className="text-sm md:text-base text-white font-medium mb-2">
                1. Agents already operate.
              </p>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                Software agents now make decisions, execute instructions, and interact directly with financial systems at scale.
              </p>
            </div>
            
            {/* Point 2 */}
            <div>
              <p className="text-sm md:text-base text-white font-medium mb-2">
                2. They lack economic standing.
              </p>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                Today, agents cannot hold persistent identity, accumulate reputation, or be held accountable over time. They function as tools, not participants.
              </p>
            </div>
            
            {/* Point 3 */}
            <div>
              <p className="text-sm md:text-base text-white font-medium mb-2">
                3. This gap is the bottleneck.
              </p>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                As agents evolve from copilots into autonomous actors, the absence of economic primitives becomes the limiting constraint.
              </p>
            </div>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-16 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Design is not the limitation.
            <br />
            Infrastructure is.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 3: The Infrastructure Layer */}
      <Slide align="left" slideNumber={3}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Infrastructure Layer
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            AMAI Is Economic Infrastructure for Autonomous Agents.
          </motion.h2>
          
          {/* Body copy */}
          <motion.div
            className="space-y-4 text-base md:text-lg text-white/50 font-light leading-relaxed mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              AMAI provides the missing economic primitives that allow autonomous agents to participate in real-world systems.
            </p>
            <p>
              It is an execution and enforcement layer that sits below interfaces, applications, and marketplaces.
            </p>
          </motion.div>
          
          {/* Four pillars */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Identity</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Persistent, non-transferable agent identity anchored on-chain
              </p>
            </div>
            
            <div className="border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Reputation</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Performance-based trust that accumulates over time, similar to a credit score
              </p>
            </div>
            
            <div className="border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Capital Accountability</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Collateral-backed commitments with deterministic limits and penalties
              </p>
            </div>
            
            <div className="border-l border-white/10 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Execution & Settlement</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Verifiable actions with atomic settlement and enforced outcomes
              </p>
            </div>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            AMAI turns agents from tools into accountable economic participants.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 4: The Economic Loop */}
      <Slide slideNumber={4}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-4xl text-center"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Economic Loop
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-16 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How Trust Becomes Capital.
          </motion.h2>
          
          {/* Diagram */}
          <motion.div
            className="relative mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Main flow row */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-3 text-[11px] md:text-xs text-white/70">
              {['Identity', 'Reputation', 'Capital', 'Execution', 'Settlement'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2 md:gap-3">
                  <span className="px-3 md:px-4 py-2 md:py-2.5 border border-white/20 rounded bg-white/[0.03] whitespace-nowrap tracking-wide">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-white/30 text-xs hidden md:inline">→</span>
                  )}
                </div>
              ))}
            </div>

            {/* SVG loop-back path */}
            <svg 
              className="w-full h-10 mt-2 hidden md:block" 
              viewBox="0 0 560 40" 
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              {/* Curved U-path from Settlement back to Reputation */}
              <path 
                d="M 485 0 L 485 22 Q 485 30 477 30 L 130 30 Q 122 30 122 22 L 122 0"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              
              {/* Vertical arrow under Settlement (pointing down) */}
              <polygon points="485,6 482,0 488,0" fill="rgba(255,255,255,0.2)" />
              
              {/* Vertical arrow into Reputation (pointing up) */}
              <polygon points="122,0 119,6 125,6" fill="rgba(255,255,255,0.2)" />
              
              {/* Arrow markers along the bottom path */}
              <polygon points="380,27 374,30 380,33" fill="rgba(255,255,255,0.2)" />
              <polygon points="280,27 274,30 280,33" fill="rgba(255,255,255,0.2)" />
              <polygon points="200,27 194,30 200,33" fill="rgba(255,255,255,0.2)" />
            </svg>

            {/* Mobile loop indicator */}
            <div className="md:hidden mt-4 flex items-center justify-center gap-2 text-white/30 text-xs">
              <span>↻</span>
              <span>Settlement feeds back into Reputation</span>
            </div>
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
            <p>Capital enables execution.</p>
            <p>Execution settles deterministically and feeds back into trust.</p>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-10 md:mt-12 text-sm md:text-base text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Trust is earned. Capital is enforced. Outcomes are final.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 5: Value Accrual */}
      <Slide align="left" slideNumber={5}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Value Accrual
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-14 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Interfaces Change.<br />
            Execution Persists.
          </motion.h2>
          
          {/* Body copy */}
          <motion.div
            className="space-y-6 text-base md:text-lg text-white/50 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              In every technology shift, value accrues to the layer that enforces rules, manages risk, and settles outcomes.
            </p>
            
            <div className="py-2">
              <p className="text-white/40">Interfaces compete on attention.</p>
              <p className="text-white/40">Models commoditize.</p>
              <p className="text-white/60">Trust, enforcement, and settlement compound.</p>
            </div>
            
            <p>
              As autonomous agents become primary economic actors, durable value shifts away from UX and toward the infrastructure that governs execution and accountability.
            </p>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-16 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            AMAI is built where value compounds, not where attention lives.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 6: Current State */}
      <Slide align="left" slideNumber={6}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Current State
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-14 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            AMAI Is Entering Its First Operational Phase.
          </motion.h2>
          
          {/* Bullets */}
          <motion.div
            className="space-y-4 mb-12 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              'Core agent execution environment implemented',
              'Persistent agent identity and reputation mechanics live',
              'Capital bonding and enforcement logic operational',
              'Deterministic execution and settlement paths validated'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
          
          {/* Secondary paragraph */}
          <motion.div
            className="text-base md:text-lg text-white/50 font-light leading-relaxed space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60">v1 is designed to prove a single thing:</p>
            <p>
              that autonomous agents can operate economically with real accountability, not human supervision.
            </p>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-14 text-sm md:text-base text-white/40 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            This phase validates the infrastructure, not the interface.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 7: Initial Users */}
      <Slide align="left" slideNumber={7}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Initial Users
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The First Users Are Capital-Intensive Operators.
          </motion.h2>
          
          {/* Body copy */}
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            AMAI is designed first for operators who already require deterministic execution, risk enforcement, and trust continuity.
          </motion.p>
          
          {/* Bullets */}
          <motion.div
            className="space-y-3 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              'Traders executing automated strategies',
              'Asset managers running capital at scale',
              'Allocators coordinating risk across systems',
              'Agent-driven strategies where failure has real cost'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
          
          {/* Secondary paragraph */}
          <motion.div
            className="text-base md:text-lg text-white/50 font-light leading-relaxed space-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p>These users are not early adopters for novelty.</p>
            <p className="text-white/60">They are early adopters because the system already solves problems they have.</p>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-14 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Infrastructure proves itself where consequences exist.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 8: Token Model */}
      <Slide align="left" slideNumber={8}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Token Model
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            AMAI Is the Enforcement and Trust Denominator.
          </motion.h2>
          
          {/* Body copy */}
          <motion.div
            className="space-y-4 text-base md:text-lg text-white/50 font-light leading-relaxed mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              The AMAI token is not designed as a consumer asset or incentive mechanism.
            </p>
            <p>
              It functions as the unified enforcement and trust layer across the system.
            </p>
          </motion.div>
          
          {/* Bullets */}
          <motion.div
            className="space-y-3 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              'Governs reputation computation and permissions',
              'Enforces collateral requirements and slashing',
              'Coordinates execution rights and routing',
              'Serves as the shared trust denominator across agents'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
          
          {/* Secondary paragraph */}
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Agents may post collateral in multiple assets, but enforcement, trust scoring, and execution guarantees are governed through AMAI.
          </motion.p>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-14 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            AMAI is the control plane, not just collateral.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 9: Capital Formation */}
      <Slide align="left" slideNumber={9}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Capital Formation
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-14 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Capital Is Sequenced, Not Rushed.
          </motion.h2>
          
          {/* Bullets with labels */}
          <motion.div
            className="space-y-6 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="border-l border-white/15 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium mb-2">Seed</p>
              <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                Finishes v1 and validates real economic operation with selective participants
              </p>
            </div>
            
            <div className="border-l border-white/15 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium mb-2">Strategic</p>
              <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                Aligns infrastructure partners, ecosystem leverage, and scaled capital usage
              </p>
            </div>
            
            <div className="border-l border-white/15 pl-5">
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium mb-2">TGE</p>
              <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                Public access after credibility, enforcement, and execution are proven
              </p>
            </div>
          </motion.div>
          
          {/* Secondary paragraph */}
          <motion.div
            className="text-base md:text-lg text-white/50 font-light leading-relaxed space-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p>We optimize for who enters the system, not how quickly capital is raised.</p>
            <p className="text-white/40">Early participation is designed to preserve long-term leverage.</p>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-14 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Discipline at the base compounds at scale.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 10: Strategic Alignment */}
      <Slide align="left" slideNumber={10}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Strategic Alignment
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Why Coinbase Ventures.
          </motion.h2>
          
          {/* Body copy */}
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Coinbase Ventures has consistently backed the infrastructure layers that enable new classes of onchain activity.
          </motion.p>
          
          {/* Bullets */}
          <motion.div
            className="space-y-3 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              'Direct alignment with the AI × crypto execution thesis',
              'Complements agent-driven onchain activity without competing at the interface layer',
              'Extends the Base ecosystem toward autonomous execution and settlement',
              'Positions infrastructure where durable value accrues as agents scale'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
          
          {/* Secondary paragraph */}
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            AMAI is designed to sit beneath applications, wallets, and agentic UX as a shared execution and trust layer.
          </motion.p>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-14 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            This is infrastructure for the next phase of the onchain economy.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 11: Closing */}
      <Slide slideNumber={11}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-12 md:mb-16 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Infrastructure Precedes Adoption.
          </motion.h2>
          
          {/* Supporting copy */}
          <motion.div
            className="space-y-6 text-base md:text-lg text-white/50 font-light leading-relaxed mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Autonomous agents are moving from tools to participants.<br />
              Economic systems must evolve to support identity, accountability, and execution at machine scale.
            </p>
            <p className="text-white/60">
              AMAI is building the infrastructure that makes this transition possible.
            </p>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              Explore the Architecture
              <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </Slide>
    </div>
  );
};

export default Deck;
