import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";
import legacyPadlock from "@/assets/slide3-legacy-padlock.png";
import amaiCore from "@/assets/amai-header-icon.png";
import tariDashboard from "@/assets/tari-dashboard-screenshot.png.asset.json";
import { useIsMobile } from "@/hooks/use-mobile";
import TariArchitectureDiagram from "@/components/TariArchitectureDiagram";

import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight } from "lucide-react";

/* ─── Slide Shell ─── */
interface SlideProps {
  children: React.ReactNode;
  className?: string;
  slideNumber?: number;
  footerText?: string;
}

const TOTAL_SLIDES = 13;

const Slide = ({ children, className = "", slideNumber, footerText = "AMAI Labs · Infrastructure & Research" }: SlideProps) => (
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
      {footerText}
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
const TrustFilterVisual = ({ t }: { t: (key: string) => string }) => (
  <div className="relative flex items-start justify-center gap-3 md:gap-6 py-8">
    {/* Chaotic agents */}
    <div className="flex flex-col items-center gap-2">
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">{t('tp.visual.free')}</p>
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
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">{t('tp.visual.reputation')}</p>
      <motion.div
        className="w-28 h-20 md:w-40 md:h-28 flex items-center justify-center"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg viewBox="0 0 120 75" className="w-full h-full">
          <path d="M 15 65 A 50 50 0 0 1 35 25" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 37 23 A 50 50 0 0 1 60 15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 62 15 A 50 50 0 0 1 85 23" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 87 25 A 50 50 0 0 1 105 65" fill="none" stroke="rgba(166,252,252,0.5)" strokeWidth="6" strokeLinecap="round" />
          <text x="14" y="56" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">BAD</text>
          <text x="27" y="28" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">FAIR</text>
          <text x="70" y="23" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">GOOD</text>
          <text x="88" y="50" fill="rgba(166,252,252,0.7)" fontSize="8" fontWeight="bold" fontFamily="monospace">A+</text>
          <motion.line
            x1="60" y1="68" x2="92" y2="38"
            stroke="rgba(166,252,252,0.8)" strokeWidth="2" strokeLinecap="round"
            animate={{ x2: [90, 94, 90], y2: [40, 36, 40] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
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
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">{t('tp.visual.trusted')}</p>
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
const Thesis = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  

  return (
    <div className={`bg-black min-h-svh md:min-h-screen overflow-x-hidden ${isMobile ? "overscroll-y-contain touch-pan-y" : ""}`} dir={dir}>
      
      {/* Progress bar */}
      {!isMobile && (
        <motion.div
          className="fixed bottom-0 left-0 h-[3px] bg-white/30 origin-left z-50"
          style={{ scaleX: scrollYProgress, width: "100%" }}
        />
      )}

      {/* Constellation background - fixed, like /system-architecture hero */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.svg 
          className="absolute right-[5%] top-[10%] w-[400px] h-[400px] opacity-[0.14]"
          viewBox="0 0 400 400"
          {...(!isMobile && {
            animate: { x: [0, 3, -2, 1, 0], y: [0, -2, 3, -1, 0] },
            transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          })}
        >
          <circle cx="200" cy="180" r="3" fill="white" />
          <circle cx="280" cy="120" r="2" fill="white" />
          <circle cx="320" cy="200" r="2.5" fill="white" />
          <circle cx="260" cy="280" r="2" fill="white" />
          <circle cx="140" cy="240" r="2.5" fill="white" />
          <circle cx="100" cy="140" r="2" fill="white" />
          <circle cx="180" cy="320" r="1.5" fill="white" />
          <circle cx="340" cy="300" r="1.5" fill="white" />
          <circle cx="80" cy="280" r="1.5" fill="white" />
          <circle cx="220" cy="80" r="1.5" fill="white" />
          <circle cx="240" cy="150" r="1" fill="white" />
          <circle cx="300" cy="160" r="1" fill="white" />
          <circle cx="160" cy="180" r="1" fill="white" />
          <circle cx="290" cy="240" r="1" fill="white" />
          <circle cx="120" cy="200" r="1" fill="white" />
          <path d="M200,180 L280,120" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M200,180 L320,200" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M200,180 L260,280" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M200,180 L140,240" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M200,180 L100,140" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M280,120 L320,200" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M320,200 L260,280" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M260,280 L180,320" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M140,240 L80,280" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M100,140 L220,80" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M280,120 L220,80" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M320,200 L340,300" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M260,280 L340,300" stroke="white" strokeWidth="0.3" fill="none" />
        </motion.svg>

        <motion.svg 
          className="absolute left-[10%] bottom-[15%] w-[200px] h-[200px] opacity-[0.08]" 
          viewBox="0 0 200 200"
          {...(!isMobile && {
            animate: { x: [0, -2, 1, -1, 0], y: [0, 1, -2, 2, 0] },
            transition: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          })}
        >
          <circle cx="100" cy="100" r="2" fill="white" />
          <circle cx="60" cy="70" r="1.5" fill="white" />
          <circle cx="140" cy="80" r="1.5" fill="white" />
          <circle cx="80" cy="140" r="1.5" fill="white" />
          <circle cx="130" cy="130" r="1" fill="white" />
          <path d="M100,100 L60,70" stroke="white" strokeWidth="0.4" fill="none" />
          <path d="M100,100 L140,80" stroke="white" strokeWidth="0.4" fill="none" />
          <path d="M100,100 L80,140" stroke="white" strokeWidth="0.4" fill="none" />
          <path d="M100,100 L130,130" stroke="white" strokeWidth="0.4" fill="none" />
        </motion.svg>
      </div>

      {/* ── SLIDE 1: THE HOOK ── */}
      <Slide slideNumber={1} footerText={t('tp.footer')}>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <img
              src={amaiLogo}
              alt="AMAI"
              className="h-10 md:h-14 w-auto brightness-110"
            />
            <p className="text-sm md:text-base text-white/70 font-light text-center whitespace-nowrap">
              Powering trust in the autonomous economy with a credit score for AI agents.
            </p>
          </motion.div>
        </div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 2: INTRODUCTION ── */}
      <Slide slideNumber={2} footerText={t('tp.footer')}>
        <div className="w-full max-w-5xl mx-auto flex flex-col h-full justify-between py-4">
          {/* Top: Label + Headline */}
          <div className="text-center">
            <MicroLabel>02 // INTRODUCTION</MicroLabel>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-[1.25] max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              People want AI Agents to do the things that require trust: to borrow, transact, and access what matters.
            </motion.h2>
          </div>

          {/* Middle: Context paragraph */}
          <motion.div
            className="max-w-3xl mx-auto text-center mt-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
              These are high-stakes moments: a loan, a large payment, the keys to a sensitive system. To let an agent act, you have to trust it with real money or real access — and right now you only get two options.
            </p>
          </motion.div>

        </div>
      </Slide>

      <SlideDivider />


      {/* ── SLIDE 3: THE LIMIT ── */}
      <Slide slideNumber={3} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full text-center max-w-4xl mx-auto px-4"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-14 md:mb-20">
            03 // THE LIMIT
          </p>

          <motion.div
            className="space-y-10 md:space-y-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-white/60 font-light leading-[1.6]">
              Humans have <span className="text-white font-normal">FICO</span>. Businesses have <span className="text-white font-normal">Dun &amp; Bradstreet</span>.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.15] tracking-tight">
              AI Agents have <span className="font-normal">Nothing</span>.
            </p>
            <p className="text-base md:text-lg text-white/40 font-light leading-[1.9] max-w-2xl mx-auto">
              The rails just arrived: agents can suddenly hold cards, move money, and call into real systems. But the high-stakes work stays locked: to let an agent borrow, transact, or reach into anything sensitive, you have to trust it.
            </p>
          </motion.div>
        </motion.div>

      </Slide>


      <SlideDivider />

      {/* ── SLIDE 4: THE SOLUTION (TARI) ── */}
      <Slide slideNumber={4} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            04 // THE SOLUTION
          </p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 text-center leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TARI™<span className="text-white/50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light ml-2 align-middle">(Trust &amp; Risk Index)</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white font-light mb-12 md:mb-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A credit score for any AI agent.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10 md:gap-14 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* LEFT: Key benefits */}
            <div className="flex flex-col items-start gap-8 md:gap-10 w-full md:w-auto text-left">
              {[
                { title: "One number anyone can read", text: "300–850, the same scale lenders already trust. Any counterparty checks it in one call." },
                { title: "Independent & verifiable", text: "A neutral third party, not self-scored. Every score is publicly auditable in the Bureau." },
                { title: "Checked before it acts", text: "Computed in real time, before authorization — not after the damage is done." },
              ].map((point, i) => (
                <motion.div
                  key={point.title}
                  className="max-w-xs"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm md:text-base text-white font-medium tracking-tight">{point.title}</p>
                  <p className="text-xs md:text-sm text-white/45 font-light leading-relaxed mt-1.5">{point.text}</p>
                </motion.div>
              ))}
            </div>

            {/* RIGHT: TARI Gauge */}
            <div className="relative flex flex-col items-center">
              <motion.div
                className="relative"
                animate={{ filter: ["drop-shadow(0 0 20px rgba(166,252,252,0.15))", "drop-shadow(0 0 40px rgba(166,252,252,0.3))", "drop-shadow(0 0 20px rgba(166,252,252,0.15))"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg viewBox="0 0 260 180" className="w-[260px] md:w-[360px] h-auto">
                  <defs>
                    <linearGradient id="tariGaugeGrad4" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(200,80,60,0.5)" />
                      <stop offset="35%" stopColor="rgba(220,180,60,0.5)" />
                      <stop offset="65%" stopColor="rgba(100,200,120,0.5)" />
                      <stop offset="100%" stopColor="rgba(166,252,252,0.7)" />
                    </linearGradient>
                    <filter id="tariGlow4">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M 30 150 A 105 105 0 0 1 230 150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="20" strokeLinecap="round" />
                  <path d="M 30 150 A 105 105 0 0 1 230 150" fill="none" stroke="url(#tariGaugeGrad4)" strokeWidth="20" strokeLinecap="round" />
                  <motion.line
                    x1="130" y1="150" x2="215" y2="85"
                    stroke="rgba(166,252,252,0.9)" strokeWidth="2.5" strokeLinecap="round"
                    filter="url(#tariGlow4)"
                    animate={{ x2: [213, 217, 213], y2: [87, 83, 87] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <circle cx="130" cy="150" r="5" fill="rgba(166,252,252,0.3)" stroke="rgba(166,252,252,0.6)" strokeWidth="1.5" />
                  <text x="130" y="125" fill="white" fontSize="32" fontFamily="monospace" fontWeight="bold" textAnchor="middle">824</text>
                </svg>
              </motion.div>
              <motion.div
                className="mt-2 px-4 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10"
                animate={{ boxShadow: ["0 0 10px rgba(52,211,153,0.15)", "0 0 25px rgba(52,211,153,0.3)", "0 0 10px rgba(52,211,153,0.15)"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-400 font-mono font-semibold">TRUSTED</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-white/50 font-light text-center max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Every counterparty asks the same question: can I trust this agent?<br />TARI™ answers it in one number, before a dollar moves or a door opens.
          </motion.p>

          <motion.p
            className="mt-8 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/35 font-mono text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Methodology · v3.0 · amai.net/methodology
          </motion.p>

        </motion.div>
      </Slide>





      <SlideDivider />


      {/* ── SLIDE 5: THE PROTOTYPE ── */}
      <Slide slideNumber={5} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            05 // THE PROTOTYPE
          </p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15] tracking-tight text-center max-w-4xl mx-auto mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We've already built the prototype — a <span className="text-[#A6FCFC]">live scoring engine</span> grading real agents today.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-8 md:gap-10">

              <motion.ol
                className="space-y-5 md:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[
                  { num: "1", label: "Bond", text: "every agent is tied to a KYC'd human operator and issued a verifiable identity." },
                  { num: "2", label: "Observe", text: "as the agent acts, every action streams in as continuous telemetry: settlements, scope, anomalies." },
                  { num: "3", label: "Score", text: "the TARI engine distills that behavior into one number, 300–850, in real time." },
                  { num: "4", label: "Verify", text: "double-blind check: telemetry parity-matched against an independent ledger; any divergence flags the agent compromised." },
                  { num: "5", label: "Publish", text: "the score is committed to the Public Bureau: immutable, timestamped, publicly verifiable." },
                  { num: "6", label: "Check", text: "any counterparty pulls the score in one API call and approves, declines, or prices, before authorizing." },
                ].map((step, i) => (
                  <motion.li
                    key={step.num}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm md:text-base font-mono mt-0.5 text-white/30">
                      {step.num}
                    </span>
                    <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                      <span className="font-medium text-white">
                        {step.label}
                      </span>{" "}— {step.text}
                    </p>
                  </motion.li>
                ))}
              </motion.ol>

            </div>

            {/* RIGHT COLUMN: Screenshot placeholder */}
            <motion.div
              className="flex flex-col items-center justify-start md:pt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="w-full rounded-lg border overflow-hidden"
                style={{ borderColor: 'rgba(166,252,252,0.2)' }}
              >
                <img
                  src={tariDashboard.url}
                  alt="TARI Live Scoring Dashboard"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="mt-4 text-xs tracking-[0.2em] uppercase text-[#A6FCFC] font-mono text-center font-medium">
                Live at bureau.amai.net
              </p>
            </motion.div>
          </div>

          {/* Centered stat block */}
          <motion.div
            className="mt-12 md:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-white/70 font-light leading-relaxed whitespace-nowrap">
              <span className="text-white font-medium">1 API call</span> — A counterparty gets the full score: approve, decline, or price — in a single call.
            </p>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />
      {/* ── SLIDE 6: THE TEAM ── */}
      <Slide slideNumber={6} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <MicroLabel>06 // THE TEAM</MicroLabel>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 md:mb-4 text-center leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('tp.s8t.h')}
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-white/40 font-light mb-8 md:mb-10 max-w-5xl mx-auto text-center whitespace-pre-line"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('tp.s8t.sub')}
          </motion.p>

          {/* Row 1: Co-Founders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                name: 'Denver Nunley',
                title: 'CEO & Co-Founder',
                line1: 'Lead Product & Vision',
                line2: 'Scaled EcoFI to $250M FDV',
                img: '/images/denver.jpeg',
              },
              {
                name: 'Scott Trowbridge',
                title: 'Co-Founder & CBO',
                line1: 'Ex-Stability AI Founding Team',
                line2: 'Ex-Circle (USDC), WeWork',
                img: '/images/scott.png',
              },
              {
                name: 'Josh Sorbel',
                title: 'Co-Founder & CTO',
                line1: '25+ Years Enterprise Cybersecurity',
                line2: 'Ex-FBI Incident Response Lead',
                img: '/images/josh.png',
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                className="flex flex-col items-center text-center rounded-xl px-5 py-5 md:py-6"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(5,5,5,1) 100%)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-normal text-white tracking-wide mb-1">{person.name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-white/50 mb-3">{person.title}</p>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-[rgba(100,180,255,0.3)] to-transparent mb-3" />
                <p className="text-sm text-white/40 font-light leading-relaxed">{person.line1}</p>
                <p className="text-sm text-white/40 font-light leading-relaxed mt-1">{person.line2}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Science & Research */}
          <div className="flex flex-col md:flex-row justify-center gap-5 max-w-4xl mx-auto mt-5">
            {[
              {
                name: 'Yu Xiong',
                title: 'CHIEF SCIENTIST',
                line1: 'Fellow, Academy of Social Sciences',
                line2: 'Professor, University Of Surrey',
                img: '/images/yu.jpeg',
              },
              {
                name: 'Dr. Amit Jaiswal',
                title: 'AI RESEARCHER',
                line1: 'Ph.D. in Information Retrieval (MSCA)',
                line2: 'Marie Curie & Former Surrey Research Fellow, Ex-UCL',
                img: '/images/Amit.jpeg',
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                className="flex flex-col items-center text-center rounded-xl px-5 py-5 md:py-6 w-full md:w-[calc(33.333%-0.42rem)]"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(5,5,5,1) 100%)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-normal text-white tracking-wide mb-1">{person.name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-white/50 mb-3">{person.title}</p>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-[rgba(100,180,255,0.3)] to-transparent mb-3" />
                <p className="text-sm text-white/40 font-light leading-relaxed">{person.line1}</p>
                <p className="text-sm text-white/40 font-light leading-relaxed mt-1">{person.line2}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 8: THE AUTONOMOUS ECONOMY ── */}
      <Slide slideNumber={7} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <MicroLabel>07 // THE AUTONOMOUS ECONOMY</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 leading-[1.15] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Autonomous Economy
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light text-center max-w-2xl mx-auto mb-14 md:mb-20"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true }}
          >
            Capital is flooding the agentic layer. But capital requires trust.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            {/* LEFT: Two stacked stats */}
            <div className="md:col-span-3 flex flex-col gap-12 md:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #a0d2ff 0%, #60b8ff 40%, #c0e0ff 70%, #a0d2ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  $3–5 Trillion
                </h3>
                <p className="text-xs md:text-sm text-white/40 font-light leading-relaxed max-w-md">
                  Projected global agentic commerce orchestrated by AI agents by 2030.{' '}
                  <span className="text-white/25 font-mono text-[10px]">(Source: McKinsey)</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #80c0ff 0%, #4da8ff 40%, #b0d8ff 70%, #80c0ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  $1 Trillion
                </h3>
                <p className="text-xs md:text-sm text-white/40 font-light leading-relaxed max-w-md">
                  Projected U.S. B2C retail revenue orchestrated by AI agents by 2030.{' '}
                  <span className="text-white/25 font-mono text-[10px]">(Source: ICSC & McKinsey)</span>
                </p>
              </motion.div>
            </div>

            {/* RIGHT: Narrative panel */}
            <motion.div
              className="md:col-span-2 bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 md:p-8 backdrop-blur-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg md:text-xl font-light text-white mb-4 leading-snug">
                The Proven Business
              </h4>
              <div className="w-10 h-px bg-gradient-to-r from-[#60b8ff]/40 to-transparent mb-5" />
              <p className="text-sm md:text-[15px] text-white/55 font-light leading-[1.75]">
                Scoring trust is already a $20B-a-year business. Experian, Equifax, TransUnion & FICO quietly earn ~$20B annually and are worth $70B+ combined — just scoring humans and businesses.{' '}
                <strong className="text-white font-normal">Agents need the same: a far larger population, checked thousands of times more often.</strong>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Slide>

      <SlideDivider />


      {/* ── SLIDE 9: THE MOAT ── */}

      <Slide slideNumber={8} footerText={t('tp.footer')}>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            08 // THE MOAT
          </p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            AMAI is capturing the credit history of the digital workforce.
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            While everyone is building models, we own the data that decides which ones to trust.
          </motion.p>

          <motion.div
            className="bg-black border border-white/10 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-white/10 px-5 md:px-8 py-5 md:py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                  <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 font-mono">AGENT-0B</span>
                  <span className="text-[10px] tracking-[0.15em] text-white/20 font-mono">//</span>
                  <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white/40 font-mono">{t('tp.s5.rating')}</span>
                  <span className="text-2xl md:text-3xl font-light text-white tracking-tight">842</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-400/80 font-mono border border-emerald-400/20 px-2 py-0.5 rounded">{t('tp.s5.prime')}</span>
                </div>
                <svg className="w-32 md:w-40 h-8" viewBox="0 0 160 32" fill="none">
                  <defs>
                    <linearGradient id="sparkGrad6" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(52,211,153,0.3)" />
                      <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,28 L12,26 L24,24 L36,25 L48,22 L60,20 L72,18 L84,19 L96,15 L108,12 L120,10 L132,8 L144,6 L156,4 L160,3" stroke="rgba(52,211,153,0.6)" strokeWidth="1.5" fill="none" />
                  <path d="M0,28 L12,26 L24,24 L36,25 L48,22 L60,20 L72,18 L84,19 L96,15 L108,12 L120,10 L132,8 L144,6 L156,4 L160,3 L160,32 L0,32 Z" fill="url(#sparkGrad6)" />
                </svg>
              </div>
            </div>

            <div className="border-b border-white/10 px-5 md:px-8 py-5 md:py-6">
              <p className={`text-[9px] tracking-[0.2em] uppercase text-white/30 mb-4 ${isRtl ? 'text-right' : 'text-left'} font-mono`}>{t('tp.s5.history')}</p>
              <div className="flex gap-[3px] md:gap-1 flex-wrap justify-center">
                {Array.from({ length: 52 * 5 }, (_, i) => {
                  const isFault = i === 187;
                  const intensity = isFault ? 0 : ((i * 9301 + 49297) % 233) / 233;
                  const opacity = isFault ? 1 : intensity < 0.15 ? 0.08 : intensity < 0.4 ? 0.2 : intensity < 0.7 ? 0.4 : 0.7;
                  return (
                    <div
                      key={i}
                      className="w-[6px] h-[6px] md:w-2 md:h-2 rounded-[1px]"
                      style={{
                        backgroundColor: isFault
                          ? 'rgba(239,68,68,0.9)'
                          : `rgba(52,211,153,${opacity})`,
                        boxShadow: isFault
                          ? '0 0 6px rgba(239,68,68,0.5)'
                          : opacity > 0.5
                            ? '0 0 4px rgba(52,211,153,0.3)'
                            : 'none',
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="px-5 md:px-8 py-5 md:py-6">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {[
                  { label: t('tp.s5.tasks'), value: '4,192' },
                  { label: t('tp.s5.capital'), value: '$12.4M' },
                  { label: t('tp.s5.fault'), value: '0.02%' },
                ].map((metric) => (
                  <div key={metric.label} className="text-center">
                    <p className="text-xl md:text-2xl text-white font-light tracking-tight mb-1">{metric.value}</p>
                    <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30 font-mono">{metric.label}</p>
                  </div>
                ))}
              </div>
              <p
                className="text-center italic mt-5"
                style={{ color: '#666666', fontSize: '12px' }}
              >
                Illustrative — Agent Bureau view, GA Q4 2026.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />



      {/* ── SLIDE 11: COMPETITIVE LANDSCAPE ── */}
      <Slide slideNumber={9} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full"
        >
          <MicroLabel>09 // THE LANDSCAPE</MicroLabel>


          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1] tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Conflict-of-Interest Gap.
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-12 md:mb-16 max-w-3xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            FICO is independent of every bank. D&amp;B is independent of every business. The autonomous economy needs the same.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 border rounded-md overflow-hidden bg-black" style={{ borderColor: '#222222' }}>
            {[
              {
                label: 'NATIVE / FIRST-PARTY',
                char: 'Auditing their own agents',
                companies: ['Microsoft Entra Agent ID', 'NVIDIA NeMo Guardrails', 'OpenAI', 'Anthropic'],
                summary: 'Structural conflict of interest. Cannot serve as third-party arbiter.',
                highlight: false,
              },
              {
                label: 'POINT SOLUTIONS',
                char: 'Single-layer defense',
                companies: ['CalypsoAI', 'Lakera', 'Lasso Security', 'Protect AI', 'HiddenLayer'],
                summary: 'Prompt injection, model security, individual layers. No cross-org behavioral ledger.',
                highlight: false,
              },
              {
                label: 'THE INDEPENDENT BUREAU',
                char: 'Cross-organizational standard',
                companies: ['AMAI Labs'],
                summary: 'Recomputable and auditable. Vendor-agnostic. The only independent third-party trust layer for the autonomous economy.',
                highlight: true,
              },
            ].map((col, i) => (
              <motion.div
                key={col.label}
                className={`p-7 md:p-10 flex flex-col ${i > 0 ? 'md:border-l' : ''} ${col.highlight ? 'relative' : ''}`}
                style={{
                  borderColor: col.highlight ? 'rgba(91,217,197,0.4)' : '#222222',
                  background: col.highlight ? 'rgba(91,217,197,0.03)' : 'transparent',
                  ...(col.highlight ? { boxShadow: 'inset 0 0 0 1px rgba(91,217,197,0.4)' } : {}),
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                viewport={{ once: true }}
              >
                <p
                  className={`text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium mb-3 ${col.highlight ? 'text-[#5BD9C5]' : 'text-white/40'}`}
                >
                  {col.label}
                </p>
                <p className="italic text-sm text-white/40 mb-8 font-light">{col.char}</p>

                <div className={`flex-1 flex flex-col gap-3 mb-8 ${col.highlight ? 'justify-center items-center text-center' : ''}`}>
                  {col.highlight ? (
                    <img src={amaiLogo} alt="AMAI" className="h-10 md:h-12 w-auto brightness-110" />
                  ) : (
                    col.companies.map((c) => (
                      <p
                        key={c}
                        className="text-white font-normal text-[17px] md:text-[18px]"
                      >
                        {c}
                      </p>
                    ))
                  )}
                </div>

                <p
                  className={`text-sm leading-relaxed font-light pt-6 border-t ${col.highlight ? 'text-white border-[#5BD9C5]/20' : 'text-white/55 border-white/10'}`}
                >
                  {col.summary}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </Slide>

      <SlideDivider />


      {/* ── SLIDE 13: THE BUSINESS MODEL ── */}
      <Slide slideNumber={10} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            10 // GROWTH + MODEL
          </p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1] tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Bottom-Up Adoption.
            <br />
            <span className="text-white/60">Top-Down Monetization.</span>
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-white/50 font-light mb-14 md:mb-20 max-w-2xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Free distribution captures the data. The verification rail monetizes at scale.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* LEFT: HOW WE SPREAD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(166,252,252,0.6)] font-mono mb-6">
                HOW WE SPREAD
              </p>
              <ol className="space-y-5">
                {[
                  ['Free SDK + Benchmark', 'Devs install for their own monitoring; reputation accrues as a side effect.'],
                  ['Public Bureau Lookup', '"Check TARI™" becomes the routine pull before trusting any agent.'],
                  ['Enterprise + Regulatory Mandate', 'One Fortune 1000 contract = thousands of installs; EU AI Act makes it the path of least resistance.'],
                  ['Framework Default Integrations', 'Ships as a default in LangChain, CrewAI, AutoGen, NeMo. OpenTelemetry-style ubiquity.'],
                ].map(([title, body], i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[10px] font-mono text-white/30 pt-1 w-5 shrink-0">0{i + 1}</span>
                    <div>
                      <h4 className="text-base md:text-lg text-white font-medium leading-snug mb-1">{title}</h4>
                      <p className="text-sm text-white/55 font-light leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* RIGHT: HOW WE MONETIZE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(214,166,252,0.65)] font-mono mb-6">
                HOW WE MONETIZE
              </p>
              <div className="space-y-4">
                <div className="bg-black border border-white/10 rounded-xl p-5 md:p-6">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[rgba(166,252,252,0.55)] font-mono mb-2">
                    THE DEVELOPER
                  </p>
                  <h3 className="text-lg md:text-xl font-light text-white mb-2">
                    SDK + Usage Subscription
                  </h3>
                  <p className="text-sm text-white/55 font-light leading-relaxed">
                    Free tier: 10,000 evaluations / month. Beyond that, usage-scaled.
                  </p>
                </div>
                <div className="bg-black border border-white/10 rounded-xl p-5 md:p-6">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[rgba(214,166,252,0.6)] font-mono mb-2">
                    THE ENTERPRISE
                  </p>
                  <h3 className="text-lg md:text-xl font-light text-white mb-2">
                    Platform Subscription
                  </h3>
                  <p className="text-sm text-white/55 font-light leading-relaxed">
                    Fleet monitoring, policy enforcement, and compliance dashboards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-sm md:text-base text-white/50 font-light mt-12 md:mt-16 max-w-3xl mx-auto leading-relaxed tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Free tier captures the data. Subscription tiers monetize the rail.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />


      {/* ── SLIDE 14: WHY NOW ── */}
      <Slide slideNumber={11} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            11 // WHY NOW
          </p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1] tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The Agent Commerce Stack Is Shipping.
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-white/50 font-light mb-12 md:mb-16 max-w-2xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Four converging signals from the last 12 months.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              {
                date: '2026 · INFRASTRUCTURE',
                title: 'AWS Ships Agent Payments',
                body: 'Amazon Bedrock AgentCore Payments launches with Coinbase and Stripe, letting agents transact via stablecoins and x402. The money rail is solved. Nothing scores the agent on the other side.',
                source: 'AWS, May 2026',
              },
              {
                date: '2025 · STANDARDS',
                title: 'AP2 Standardizes Agent Payments',
                body: 'Google, Mastercard, PayPal, Adyen, and 60+ partners agree on the cryptographic format for agent-initiated transactions.',
                source: 'Google Cloud, Sep 2025',
              },
              {
                date: '2026 · MARKET',
                title: 'Microsoft Validates The Category',
                body: "Entra Agent ID launches identity and access governance — but only for Microsoft's own agents. The independent arbiter gap forms.",
                source: 'Microsoft Security',
              },
              {
                date: '2026 · REGULATORY',
                title: 'EU AI Act Enforcement Begins',
                body: 'High-risk AI obligations are confirmed and approaching, with the regulatory direction now set. Penalties up to €35M or 7% of global turnover. Verifiable audit infrastructure becomes the standard.',
                source: 'Regulation (EU) 2024/1689',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-black border rounded-md p-6 md:p-8 flex flex-col"
                style={{ borderColor: '#222222' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[rgba(166,252,252,0.6)] font-mono mb-3">
                  {card.date}
                </p>
                <h3 className="text-lg md:text-xl font-light text-white mb-4 tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm md:text-[15px] text-white/65 leading-[1.7] font-light flex-1">
                  {card.body}
                </p>
                <p className="italic text-xs text-white/35 mt-5 pt-4 border-t border-white/10 font-light">
                  {card.source}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Slide>

      <SlideDivider />
      {/* ── SLIDE 15: THE ROUND ── */}
      <Slide slideNumber={12} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full px-6 md:px-16 text-center"
        >
          <motion.img
            src={amaiLogo}
            alt="AMAI"
            className="mx-auto h-6 md:h-8 w-auto opacity-90 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Autonomy Needs Infrastructure.
            <br />
            <span className="text-white/60">We're Building It.</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-sm md:text-base text-white/45 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            By 2030, trillions will move between agents and counterparties — every minute, every market. None of it works without a trust rail. We're raising to build it.
          </motion.p>

          <p className="mt-8 md:mt-10 text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium text-center">
            13 // THE ROUND
          </p>

          {/* Stat row */}
          <motion.div
            className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-3 bg-black border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'ROUND', value: '$4M' },
              { label: 'POST-MONEY CAP', value: '$26.5M' },
              { label: 'DISCOUNT', value: '20%' },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`bg-black px-4 py-4 md:py-5 flex flex-col items-center gap-2 ${
                  i > 0 ? 'border-t md:border-t-0 md:border-l border-white/10' : ''
                }`}
              >
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 font-light">
                  {s.label}
                </span>
                <span className="whitespace-nowrap text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-light text-cyan-accent leading-none">
                  {s.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Use of Funds */}
          <motion.div
            className="mt-8 md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/40 font-light mb-5 md:mb-6">
              USE OF FUNDS
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
              {[
                { pct: '60%', title: 'Engineering & Research', desc: 'Senior infrastructure + AI research hires' },
                { pct: '15%', title: 'Platform GA', desc: 'SDK launch + scoring engine production release' },
                { pct: '15%', title: 'Design Partners', desc: '3 enterprise pilots + GTM motion' },
                { pct: '10%', title: 'Operations & Runway', desc: 'G&A + buffer to Series A milestones' },
              ].map((f) => (
                <div key={f.title} className="flex flex-col items-center text-center px-2">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-light text-cyan-accent leading-none">
                    {f.pct}
                  </span>
                  <span className="mt-2 text-sm md:text-base text-white font-light tracking-wide">
                    {f.title}
                  </span>
                  <span className="mt-1 text-xs md:text-sm text-white/50 font-light leading-snug">
                    {f.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Slide>


      <Footer />
    </div>
  );
};

export default Thesis;
