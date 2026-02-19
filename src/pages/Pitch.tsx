import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-hero-new.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Shield, AlertTriangle, Lock, Activity, Fingerprint, Landmark, Zap, Database, ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/* ─── Slide Shell ─── */
interface SlideProps {
  children: React.ReactNode;
  className?: string;
  slideNumber?: number;
}

const TOTAL_SLIDES = 6;

const Slide = ({ children, className = "", slideNumber }: SlideProps) => (
  <section
    className={`relative min-h-svh md:min-h-screen w-full flex items-center justify-center overflow-x-hidden ${className}`}
  >
    {/* Grid */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-24 md:py-20">
      {children}
    </div>
    {slideNumber && (
      <div className="absolute bottom-4 md:bottom-10 right-4 md:right-12 text-[10px] tracking-[0.2em] text-white/50 font-medium">
        {String(slideNumber).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
      </div>
    )}
    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium text-center whitespace-nowrap">
      AMAI Labs · Infrastructure & Research
    </div>
  </section>
);

const SlideDivider = () => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-6xl px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="h-px bg-white/10" />
    </div>
  </div>
);

/* ─── Micro-label ─── */
const MicroLabel = ({ children, delay = 0.2 }: { children: React.ReactNode; delay?: number }) => (
  <motion.p
    className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.p>
);

/* ─── Trust Score Counter (Slide 5) ─── */
const TrustScoreCounter = () => {
  const [score, setScore] = useState(847);
  useEffect(() => {
    const id = setInterval(() => {
      setScore((s) => {
        const next = s + Math.floor(Math.random() * 3) + 1;
        return next > 9999 ? 847 : next;
      });
    }, 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-white tabular-nums">{score.toLocaleString()}</span>
  );
};

/* ─── Audit Log (Slide 5) ─── */
const auditEntries = [
  { id: "AGENT-007", task: "ARBITRAGE", status: "SUCCESS", delta: "+5" },
  { id: "AGENT-142", task: "COMPLIANCE CHECK", status: "SUCCESS", delta: "+3" },
  { id: "AGENT-088", task: "DATA MIGRATION", status: "SUCCESS", delta: "+4" },
  { id: "AGENT-331", task: "RISK ASSESSMENT", status: "SUCCESS", delta: "+6" },
  { id: "AGENT-019", task: "SETTLEMENT", status: "PARTIAL", delta: "+1" },
  { id: "AGENT-256", task: "AUDIT REVIEW", status: "SUCCESS", delta: "+5" },
  { id: "AGENT-444", task: "KYC VERIFICATION", status: "SUCCESS", delta: "+7" },
  { id: "AGENT-073", task: "PORTFOLIO REBAL.", status: "SUCCESS", delta: "+4" },
];

const ScrollingLog = () => {
  const [visibleIdx, setVisibleIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setVisibleIdx((i) => (i + 1) % auditEntries.length), 1800);
    return () => clearInterval(id);
  }, []);

  const visible = Array.from({ length: 5 }, (_, i) => auditEntries[(visibleIdx + i) % auditEntries.length]);

  return (
    <div className="font-mono text-[10px] md:text-xs space-y-1.5 overflow-hidden">
      {visible.map((e, i) => (
        <motion.div
          key={`${e.id}-${visibleIdx}-${i}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1 - i * 0.15, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex gap-2 md:gap-4 text-white/60"
        >
          <span className="text-white/80">{e.id}</span>
          <span className="text-white/30">|</span>
          <span>TASK: {e.task}</span>
          <span className="text-white/30">|</span>
          <span className={e.status === "SUCCESS" ? "text-green-400/80" : "text-yellow-400/80"}>
            {e.status}
          </span>
          <span className="text-white/30">|</span>
          <span className="text-white/90">TRUST: {e.delta}</span>
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Stable bubble positions for Free Agents ─── */
const AGENT_BUBBLES = [
  { top: 20, left: 15, dx: 6, dy: -7, dur: 2.4 },
  { top: 45, left: 55, dx: -5, dy: 8, dur: 3.1 },
  { top: 65, left: 25, dx: 7, dy: -4, dur: 2.8 },
  { top: 30, left: 60, dx: -8, dy: 5, dur: 3.5 },
  { top: 55, left: 40, dx: 4, dy: -6, dur: 2.6 },
  { top: 15, left: 40, dx: -6, dy: 7, dur: 3.2 },
  { top: 70, left: 60, dx: 5, dy: -5, dur: 2.9 },
];

/* ─── Hero Visual (Slide 1) ─── */
const TrustFilterVisual = () => (
  <div className="relative flex items-start justify-center gap-3 md:gap-6 py-8">
    {/* Chaotic agents */}
    <div className="flex flex-col items-center gap-2">
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">Free Agents</p>
      <div className="relative w-20 md:w-28 h-20 md:h-28">
        {AGENT_BUBBLES.map((b, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full border border-white/40 bg-white/15"
            style={{ top: `${b.top}%`, left: `${b.left}%` }}
            animate={{
              x: [0, b.dx, 0],
              y: [0, b.dy, 0],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>

    {/* Arrow */}
    <div className="flex items-center h-20 md:h-28 mt-6 md:mt-7">
      <ChevronRight className="w-5 h-5 text-white/20" />
    </div>

    {/* Credit Score Gauge */}
    <div className="flex flex-col items-center gap-2">
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">AMAI Reputation</p>
      <motion.div
        className="w-28 h-20 md:w-40 md:h-28 flex items-center justify-center"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg viewBox="0 0 120 75" className="w-full h-full">
          {/* Gauge arc segments */}
          <path d="M 15 65 A 50 50 0 0 1 35 25" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 37 23 A 50 50 0 0 1 60 15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 62 15 A 50 50 0 0 1 85 23" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 87 25 A 50 50 0 0 1 105 65" fill="none" stroke="rgba(166,252,252,0.5)" strokeWidth="6" strokeLinecap="round" />
          {/* Labels */}
          <text x="14" y="56" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">BAD</text>
          <text x="27" y="28" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">FAIR</text>
          <text x="70" y="23" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">GOOD</text>
          <text x="88" y="50" fill="rgba(166,252,252,0.7)" fontSize="8" fontWeight="bold" fontFamily="monospace">A+</text>
          {/* Needle pointing to Excellent */}
          <motion.line
            x1="60" y1="68" x2="92" y2="38"
            stroke="rgba(166,252,252,0.8)" strokeWidth="2" strokeLinecap="round"
            animate={{ x2: [90, 94, 90], y2: [40, 36, 40] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Center dot */}
          <circle cx="60" cy="68" r="4" fill="rgba(166,252,252,0.3)" stroke="rgba(166,252,252,0.6)" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </div>

    {/* Arrow */}
    <div className="flex items-center h-20 md:h-28 mt-6 md:mt-7">
      <ChevronRight className="w-5 h-5 text-white/20" />
    </div>

    {/* Verified stream */}
    <div className="flex flex-col items-center gap-2">
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">Trusted Labor</p>
      <div className="flex flex-col gap-1.5 mt-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-14 md:w-20 h-3 md:h-4 rounded bg-white/10 border border-white/15"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
          />
        ))}
      </div>
    </div>
  </div>
);

/* ─── Main Component ─── */
const Pitch = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();

  return (
    <div className={`bg-black min-h-svh md:min-h-screen overflow-x-hidden ${isMobile ? "overscroll-y-contain touch-pan-y" : ""}`}>
      {/* Progress bar */}
      {!isMobile && (
        <motion.div
          className="fixed bottom-0 left-0 h-[3px] bg-white/30 origin-left z-50"
          style={{ scaleX: scrollYProgress, width: "100%" }}
        />
      )}

      {/* ── SLIDE 1: THE HOOK ── */}
      <Slide slideNumber={1}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="max-w-4xl mx-auto text-center">
          <motion.img
            src={amaiLogo}
            alt="AMAI"
            className="h-10 md:h-16 w-auto brightness-110 mb-10 md:mb-20 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <MicroLabel delay={0.3}>01 // THE THESIS</MicroLabel>
          <motion.div
            className="mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] font-light">
              Intelligence Is Everywhere.
            </h1>
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/70 font-light mt-6 leading-[1.2]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              But Trust Has Never Been Lower
            </motion.p>
          </motion.div>
          <motion.p
            className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We are building the Reputation Layer for the Autonomous Economy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <TrustFilterVisual />
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 2: THE PROBLEM ── */}
      <Slide slideNumber={2}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <MicroLabel>02 // THE PROBLEM</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sketchy Agents Can't Scale
          </motion.h2>

          <motion.div
            className="text-left max-w-2xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Humans have <span className="text-white font-normal">FICO</span>. Businesses have <span className="text-white font-normal">Dun & Bradstreet</span>.
            </p>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              AI Agents have <span className="text-white font-normal">Nothing</span>.
            </p>
            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed">
              Without a standardized Credit Score, an Agent is just a random script. It cannot borrow capital, it cannot sign contracts, and it cannot be trusted with a bank account.
            </p>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 3: THE SOLUTION ── */}
      <Slide slideNumber={3}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <MicroLabel>03 // THE SOLUTION</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How Trust Becomes Capital
          </motion.h2>

          {/* 3-step equation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Identity */}
            <div className="bg-black border border-white/10 rounded-lg p-6 flex flex-col items-center text-center">
              <Fingerprint className="w-8 h-8 text-white/50 mb-4" />
              <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-2">Identity</p>
              <p className="text-sm text-white/40 font-light">A digital passport recorded on an Immutable Ledger.</p>
            </div>

            {/* Performance */}
            <div className="bg-black border border-white/10 rounded-lg p-6 flex flex-col items-center text-center">
              <Activity className="w-8 h-8 text-white/50 mb-4" />
              <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-2">Performance</p>
              <p className="text-sm text-white/40 font-light">Real-world execution that builds a verifiable track record.</p>
            </div>

            {/* Trust */}
            <div className="bg-black border border-white/15 rounded-lg p-6 flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-white/60 mb-4" />
              <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-2">TRUST</p>
              <p className="text-sm text-white/40 font-light">A Sovereign Agent capable of scaling.</p>
            </div>
          </motion.div>

          {/* Economic Loop Diagram */}
          <motion.div
            className="relative mt-10 px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] text-white/70">
              {['Identity', 'Reputation', 'Capital', 'Execution', 'Settlement'].map((step, i, arr) => (
                <span key={i} className="flex items-center gap-1.5 md:gap-2">
                  <span className="px-2 md:px-3 py-1 md:py-1.5 border border-white/20 rounded bg-black whitespace-nowrap">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-white/30 text-[8px] md:text-xs">→</span>
                  )}
                </span>
              ))}
            </div>
            <svg 
              className="w-full h-8 mt-1" 
              viewBox="0 0 480 32" 
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <path 
                d="M 404 0 L 404 18 Q 404 24 398 24 L 78 24 Q 72 24 72 18 L 72 0"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              <polygon points="404,5 401,0 407,0" fill="rgba(255,255,255,0.25)" />
              <polygon points="72,0 69,5 75,5" fill="rgba(255,255,255,0.25)" />
              <polygon points="320,21 314,24 320,27" fill="rgba(255,255,255,0.25)" />
              <polygon points="240,21 234,24 240,27" fill="rgba(255,255,255,0.25)" />
              <polygon points="160,21 154,24 160,27" fill="rgba(255,255,255,0.25)" />
            </svg>
          </motion.div>

          {/* Explanatory text */}

        </motion.div>

      </Slide>

      <SlideDivider />

      {/* ── SLIDE 4: THE MECHANISM ── */}
      <Slide slideNumber={4}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <MicroLabel>04 // THE MECHANISM</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 text-center leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The Dual Capital Model
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Users convert fiat to AMAI Credits to power the network. Agents post Performance Collateral to insure their work. We tax the flow of trust.
          </motion.p>

          {/* Two cards with tooltips */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-black border border-white/10 rounded-lg p-8 cursor-pointer hover:border-white/25 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-white/50 group-hover:text-white/70 transition-colors" />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/30">The Fuel</p>
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 font-light mb-2">AMAI Credits</p>
                  <p className="text-sm text-white/40 font-light">Used for compute, routing, and access.</p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-black border-white/20 text-white/80 text-sm max-w-[220px]">
                <span className="font-medium text-white/90">Operational Fuel</span> — The unit of work inside the network. Powers every task, query, and settlement.
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-black border border-white/10 rounded-lg p-8 cursor-pointer hover:border-white/25 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-white/50 group-hover:text-white/70 transition-colors" />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/30">The Safety</p>
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 font-light mb-2">Performance Collateral</p>
                  <p className="text-sm text-white/40 font-light">Capital locked in a vault to insure the task.</p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-black border-white/20 text-white/80 text-sm max-w-[220px]">
                <span className="font-medium text-white/90">Insurance</span> — Skin-in-the-game capital that guarantees agent performance. Slashed on failure, returned on success.
              </TooltipContent>
            </Tooltip>
          </motion.div>

          {/* Flow diagram */}
          <motion.div
            className="flex items-center justify-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] text-white/70 flex-wrap md:flex-nowrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {["Fiat In", "Credits Minted", "Task Routed", "Collateral Posted", "Settlement"].map((step, i, arr) => (
              <React.Fragment key={i}>
                <span className="px-2 md:px-3 py-1 md:py-1.5 border border-white/20 rounded bg-black whitespace-nowrap">
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-white/30 text-[8px] md:text-xs">→</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 5: THE MOAT ── */}
      <Slide slideNumber={5}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <MicroLabel>05 // THE MOAT</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The First Historical Ledger of Agent Behavior.
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            While others build models, we are capturing the credit history of the digital workforce.
          </motion.p>

          {/* Live trust score */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 bg-black border border-white/10 rounded-lg px-5 py-3">
              <Database className="w-5 h-5 text-white/40" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">Trust Events Recorded:</span>
              <TrustScoreCounter />
            </div>
          </motion.div>

          {/* Scrolling audit log */}
          <motion.div
            className="bg-black/60 border border-white/10 rounded-lg p-4 md:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-[9px] tracking-[0.2em] uppercase text-white/30 mb-3">Live Audit Trail</p>
            <ScrollingLog />
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 6: THE ASK ── */}
      <Slide slideNumber={6}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <MicroLabel>06 // THE ASK</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Strategic Seed Round
          </motion.h2>

          {/* Deal cards */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Raise", value: "$3M", sub: "Post-Money SAFE" },
              { label: "Valuation Cap", value: "$30M", sub: "" },
              { label: "Discount", value: "20%", sub: "" },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-black border border-white/10 rounded-lg p-5 md:p-6 flex flex-col items-center"
              >
                <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">{card.label}</p>
                <p className="text-2xl md:text-3xl text-white font-light mb-1">{card.value}</p>
                {card.sub && <p className="text-[10px] md:text-xs text-white/40 font-light">{card.sub}</p>}
              </div>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.p
            className="mt-12 text-sm text-white/30 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            team@amai.net
          </motion.p>
        </motion.div>
      </Slide>
    </div>
  );
};

export default Pitch;
