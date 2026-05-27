import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";
import visaLogo from "@/assets/visa-logo.png";
import legacyPadlock from "@/assets/slide3-legacy-padlock.png";
import amaiCore from "@/assets/amai-header-icon.png";
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

const TOTAL_SLIDES = 15;

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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="max-w-4xl mx-auto text-center relative z-10">
          <motion.img
            src={amaiLogo}
            alt="AMAI"
            className="h-10 md:h-16 w-auto brightness-110 mb-10 md:mb-20 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <MicroLabel delay={0.3}>{t('tp.s1.label')}</MicroLabel>
          <motion.div
            className="mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] font-light">
              {t('tp.s1.h1')}
            </h1>
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/70 font-light mt-6 leading-[1.2]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {t('tp.s1.h2')}
            </motion.p>
          </motion.div>
          <motion.p
            className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t('tp.s1.sub')}
          </motion.p>

        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 2: THE AUTONOMOUS ECONOMY ── */}
      <Slide slideNumber={2} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <MicroLabel>02 // THE AUTONOMOUS ECONOMY</MicroLabel>
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
                  $4.4 Trillion
                </h3>
                <p className="text-xs md:text-sm text-white/40 font-light leading-relaxed max-w-md">
                  Projected annual global GDP impact of Agentic AI by 2030.{' '}
                  <span className="text-white/25 font-mono text-[10px]">(Source: PwC)</span>
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
                  Projected agent-driven revenue by 2027.{' '}
                  <span className="text-white/25 font-mono text-[10px]">(Source: NVIDIA, GTC Keynote)</span>
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
                The Trillion-Dollar Bottleneck
              </h4>
              <div className="w-10 h-px bg-gradient-to-r from-[#60b8ff]/40 to-transparent mb-5" />
              <p className="text-sm md:text-[15px] text-white/45 font-light leading-[1.75]">
                Capital is flooding the agentic layer. MoonPay just gave agents Mastercards backed by stablecoin reserves. AP2 standardized agent payment rails. Microsoft shipped Agent 365.
              </p>
              <p className="mt-4 text-sm md:text-[15px] text-white/55 font-light leading-[1.75]">
                What's missing: the trust layer that decides which agents you let transact with you.
              </p>
              <p className="mt-4 text-sm md:text-[15px] text-white font-light leading-[1.75]">
                The market cannot scale until the agent can be underwritten.
              </p>
            </motion.div>
          </div>
        </motion.div>
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
              Without a standardized Credit Score, an Agent is just a random script that cannot be trusted with significant capital or sensitive data.
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 text-center leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TARI™ <span className="text-white/50">(Trust &amp; Algorithmic Risk Index)</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-12 md:mb-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The universal credit score for the autonomous economy.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* LEFT: Prominent product stack */}
            <div className="flex flex-col items-center md:items-end gap-5 md:gap-6 w-full md:w-auto">
              {["Zero-Trust SDK & API", "AMAI Enterprise Platform", "Public Agent Bureau"].map((label, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <span className="text-lg md:text-xl lg:text-2xl text-white font-light tracking-tight text-right">
                    {label}
                  </span>
                  <motion.div
                    className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[rgba(166,252,252,0.6)]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* CENTER: TARI Gauge */}
            <div className="relative flex flex-col items-center">
              <motion.div
                className="relative"
                animate={{ filter: ["drop-shadow(0 0 20px rgba(166,252,252,0.15))", "drop-shadow(0 0 40px rgba(166,252,252,0.3))", "drop-shadow(0 0 20px rgba(166,252,252,0.15))"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg viewBox="0 0 260 180" className="w-[220px] md:w-[300px] h-auto">
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

            {/* RIGHT: Thresholds */}
            <div className="flex flex-col items-center md:items-start gap-5 w-full md:w-auto">
              {[
                { score: "TARI > 750:", result: "GRANTED", color: "text-emerald-400", pipeColor: "from-[rgba(166,252,252,0.6)] to-transparent" },
                { score: "TARI < 750:", result: "DENIED", color: "text-red-400", pipeColor: "from-[rgba(220,80,60,0.6)] to-transparent" },
              ].map((item, i) => (
                <motion.div
                  key={item.result}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-8 md:w-12 h-px bg-gradient-to-r ${item.pipeColor}`}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <span className="text-xs md:text-sm font-mono text-white/60 tracking-wide">{item.score}</span>
                  <span className={`text-xs md:text-sm font-mono font-bold tracking-[0.15em] ${item.color}`}>✦ {item.result}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-white/50 font-light text-center max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Instead of guessing if an agent is safe, we mathematically prove it. TARI distills chaotic autonomous behavior into a single, deterministic metric.
          </motion.p>
        </motion.div>
      </Slide>



      {/* ── SLIDE 5: THE VISA ANALOGY ── */}
      <Slide slideNumber={5} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            05 // THE CATEGORY
          </p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 text-center leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Visa Analogy
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-white/50 font-light mb-12 md:mb-16 max-w-3xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Visa is worth $550 billion and never holds a dollar of transaction value. AMAI is building the same trust rail for every transaction an agent makes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-12">
            {[
              {
                header: 'VISA',
                logo: visaLogo,
                logoClass: 'h-10 md:h-14 w-auto',
                accent: 'text-white/60',
                rows: [
                  { k: 'What flows through it', v: 'Dollars' },
                  { k: 'What it owns', v: 'The trust rail between issuer and merchant' },
                  { k: 'Who pays', v: 'Banks, merchants, processors' },
                  { k: 'Position', v: '$550B+ market cap. Never holds a dollar.' },
                ],
              },
              {
                header: 'AMAI',
                logo: amaiLogo,
                logoClass: 'h-6 md:h-8 w-auto brightness-110',
                accent: 'text-[#7fd6d6]',
                rows: [
                  { k: 'What flows through it', v: 'Trust signals' },
                  { k: 'What it owns', v: 'The trust rail between agent and counterparty' },
                  { k: 'Who pays', v: 'Credit issuers, marketplaces, DeFi protocols, treasury' },
                  { k: 'Position', v: 'The next category-defining trust infrastructure.' },
                ],
              },
            ].map((panel, i) => (
              <motion.div
                key={panel.header}
                className="border rounded-md p-7 md:p-9 flex flex-col bg-black"
                style={{ borderColor: '#222222' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 h-9 md:h-11 flex items-center">
                  <img src={panel.logo} alt={panel.header} className={panel.logoClass} />
                </div>
                <div className="flex flex-col divide-y divide-white/[0.07]">
                  {panel.rows.map((row) => (
                    <div key={row.k} className="py-4 first:pt-0 last:pb-0">
                      <p className="text-[11px] tracking-[0.2em] uppercase text-white/35 font-medium mb-1.5">
                        {row.k}
                      </p>
                      <p className="text-sm md:text-[15px] text-white/80 font-light leading-snug">
                        {row.v}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-sm md:text-base text-white/55 font-light text-center max-w-3xl mx-auto leading-relaxed italic"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Every dollar an agent moves will need a rail like this. The question is who owns it.
          </motion.p>
        </motion.div>
      </Slide>


      <SlideDivider />


      {/* ── SLIDE 6: THE MOAT ── */}
      <Slide slideNumber={6} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            06 // THE MOAT
          </p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Every Transaction Makes the Score Better.
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We're capturing the credit history of the digital workforce — and every score we issue makes the next one sharper.
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

      {/* ── SLIDE 7: THE FLYWHEEL ── */}
      <Slide slideNumber={7} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <MicroLabel>07 // THE FLYWHEEL</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How the Network Grows Itself.
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every transaction an agent makes issues a signed Trust Receipt. The receipts compound the network.
          </motion.p>

          <motion.div
            className="relative mx-auto mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* 3x3 grid: ring in center cell, labels in N/E/S/W cells. Fixed column widths so ring stays rigidly centered. */}
            <div
              className="grid mx-auto"
              style={{
                gridTemplateColumns: "240px 480px 240px",
                gridTemplateRows: "auto 480px auto",
                rowGap: "32px",
                columnGap: "40px",
                width: "max-content",
              }}
            >
              {/* Row 1 — empty | 01 TRANSACTION | empty */}
              <div />
              <motion.div
                className="self-end text-center"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#7fd6d6] font-mono mb-2">
                  01 — TRANSACTION
                </p>
                <p className="text-[12px] md:text-[13px] text-white/65 font-light leading-snug">
                  An agent transacts with a counterparty — merchant, marketplace, lender, or another agent.
                </p>
              </motion.div>
              <div />

              {/* Row 2 — 04 COMPOUND | ring | 02 RECEIPT */}
              <motion.div
                className="self-center text-right"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.04 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#7fd6d6] font-mono mb-2">
                  04 — COMPOUND
                </p>
                <p className="text-[12px] md:text-[13px] text-white/65 font-light leading-snug">
                  Every receipt sharpens the score. Every check makes the rail harder to bypass.
                </p>
              </motion.div>

              <div className="relative w-[480px] h-[480px]">
                <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full" fill="none">
                  <defs>
                    <marker
                      id="flywheelArrow"
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path d="M0,0 L10,5 L0,10 z" fill="rgba(127,214,214,0.7)" />
                    </marker>
                    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(127,214,214,0.18)" />
                      <stop offset="60%" stopColor="rgba(127,214,214,0.04)" />
                      <stop offset="100%" stopColor="rgba(127,214,214,0)" />
                    </radialGradient>
                  </defs>

                  <circle cx="300" cy="300" r="240" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <circle cx="300" cy="300" r="200" stroke="rgba(127,214,214,0.18)" strokeWidth="1" strokeDasharray="2 4" />
                  <circle cx="300" cy="300" r="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <circle cx="300" cy="300" r="90" fill="url(#hubGlow)" />

                  <path d="M 360,135 A 200,200 0 0 1 465,240" stroke="rgba(127,214,214,0.5)" strokeWidth="1.2" markerEnd="url(#flywheelArrow)" />
                  <path d="M 465,360 A 200,200 0 0 1 360,465" stroke="rgba(127,214,214,0.5)" strokeWidth="1.2" markerEnd="url(#flywheelArrow)" />
                  <path d="M 240,465 A 200,200 0 0 1 135,360" stroke="rgba(127,214,214,0.5)" strokeWidth="1.2" markerEnd="url(#flywheelArrow)" />
                  <path d="M 135,240 A 200,200 0 0 1 240,135" stroke="rgba(127,214,214,0.5)" strokeWidth="1.2" markerEnd="url(#flywheelArrow)" />

                  {[
                    { cx: 300, cy: 100 },
                    { cx: 500, cy: 300 },
                    { cx: 300, cy: 500 },
                    { cx: 100, cy: 300 },
                  ].map((p, i) => (
                    <g key={i}>
                      <circle cx={p.cx} cy={p.cy} r="6" fill="#0a0a0a" stroke="rgba(127,214,214,0.7)" strokeWidth="1" />
                      <circle cx={p.cx} cy={p.cy} r="2" fill="rgba(127,214,214,0.9)" />
                    </g>
                  ))}
                </svg>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-white/40 font-mono mb-1">
                    AMAI · HUB
                  </p>
                  <p className="text-2xl md:text-4xl text-white font-light tracking-[0.15em]">
                    TARI
                  </p>
                  <div className="mx-auto mt-2 h-px w-10 bg-[#7fd6d6]/40" />
                </div>
              </div>

              <motion.div
                className="self-center text-left"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.92 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#7fd6d6] font-mono mb-2">
                  02 — RECEIPT
                </p>
                <p className="text-[12px] md:text-[13px] text-white/65 font-light leading-snug">
                  AMAI signs a Trust Receipt attesting to the agent's behavior.
                </p>
              </motion.div>

              {/* Row 3 — empty | 03 VALIDATION | empty */}
              <div />
              <motion.div
                className="self-start text-center"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.16 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#7fd6d6] font-mono mb-2">
                  03 — VALIDATION
                </p>
                <p className="text-[12px] md:text-[13px] text-white/65 font-light leading-snug">
                  The next counterparty checks the agent's TARI before authorizing. New counterparties join the rail.
                </p>
              </motion.div>
              <div />
            </div>
          </motion.div>


          <motion.p
            className="text-sm md:text-base text-white/55 font-light max-w-3xl mx-auto leading-relaxed italic text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Every transaction is a customer acquisition event. The network grows itself.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 8: THE ADOPTION PATH ── */}
      <Slide slideNumber={8} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full text-center"
        >
          <MicroLabel>08 // THE ADOPTION PATH</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How We Get to Density.
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Five distribution layers, stacked. Each compounds the last.
          </motion.p>

          <div className="border rounded-md bg-black overflow-hidden text-left" style={{ borderColor: '#222222' }}>
            {[
              {
                n: '01',
                title: 'Design Partners + Benchmark Set',
                wedge: 'Launch with lighthouse enterprises plus a seeded benchmark of public agents and known attack patterns.',
              },
              {
                n: '02',
                title: 'Free Developer Dashboard',
                wedge: 'The Datadog playbook. Devs install for their own monitoring; reputation accrues as a side effect.',
              },
              {
                n: '03',
                title: 'CISO Enterprise Mandate',
                wedge: 'One Fortune 1000 contract = thousands of installs. EU AI Act enforcement makes this the path of least resistance.',
              },
              {
                n: '04',
                title: 'Framework Default Integrations',
                wedge: 'AMAI ships as opt-in default in LangChain, CrewAI, AutoGen, NeMo Guardrails. OpenTelemetry-style distribution.',
              },
              {
                n: '05',
                title: 'Public Bureau Lookup API',
                wedge: '"Check TARI" becomes the new "check VirusTotal." Pull-side demand compounds the network.',
              },
            ].map((layer, i, arr) => (
              <motion.div
                key={layer.n}
                className={`grid grid-cols-[auto_1fr] gap-5 md:gap-10 items-center px-5 md:px-8 py-5 md:py-6 ${i < arr.length - 1 ? 'border-b border-white/10' : ''}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono">LAYER</span>
                  <span className="text-2xl md:text-4xl text-white font-light tracking-tight tabular-nums">{layer.n}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-base md:text-xl text-white font-light mb-1 leading-tight">{layer.title}</p>
                  <p className="text-xs md:text-sm text-white/55 font-light leading-relaxed">{layer.wedge}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-sm md:text-base text-white/55 font-light max-w-3xl mx-auto leading-relaxed italic text-center mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            Each layer activates the next. Stacked, they get us to standard-level scale.
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 9: COMPETITIVE LANDSCAPE ── */}
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
                summary: 'Mathematically deterministic. Vendor-agnostic. The only independent third-party trust layer for the autonomous economy.',
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

      {/* ── SLIDE 9: THE CUSTOMERS ── */}
      <Slide slideNumber={10} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            10 // THE CUSTOMERS
          </p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1] tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Who Pays for the Trust Rail.
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-white/50 font-light mb-12 md:mb-16 max-w-2xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every counterparty in an agent transaction needs to verify the other side. Four wedges. One rail.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              {
                header: 'CREDIT ISSUERS',
                subhead: 'Banks, fintechs, BNPL',
                body: 'TARI surfaces inside the underwriting pipeline. Approve, decline, cap, or price based on principal + agent + behavior.',
              },
              {
                header: 'MARKETPLACES',
                subhead: 'Platforms, embedded payments',
                body: 'The shared risk oracle for agent buyers. Green auto-approves; amber and red route to step-up auth or manual review.',
              },
              {
                header: 'DEFI PROTOCOLS',
                subhead: 'Undercollateralized lending pools',
                body: 'On-chain credit oracle for agent borrowers — the Goldfinch / Maple pattern. One governance vote brings integration live.',
              },
              {
                header: 'INTERNAL TREASURY',
                subhead: 'Enterprise CFOs, working capital',
                body: "Gates the agent's authority over AR/AP, vendor payments, and balance sheet exposure.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.header}
                className="bg-black border rounded-md p-6 md:p-8 flex flex-col"
                style={{ borderColor: '#222222' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white font-medium mb-2">
                  {card.header}
                </p>
                <p className="italic text-sm text-white/40 mb-5 font-light">{card.subhead}</p>
                <p className="text-sm md:text-[15px] text-white/70 leading-[1.7] font-light">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-sm md:text-base text-white/50 font-light mt-10 md:mt-14 tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Same TARI score. Four buyers. One rail.
          </motion.p>
        </motion.div>
      </Slide>


      <SlideDivider />

      {/* ── SLIDE 10: THE BUSINESS MODEL ── */}
      <Slide slideNumber={11} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            11 // THE BUSINESS MODEL
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
            Capture the data layer for free. Monetize the verification rail at scale.
          </motion.p>

          {/* Two-pillar layout with bridge */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">

            {/* ── LEFT PILLAR: Ubiquitous Distribution ── */}
            <motion.div
              className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 md:mr-12 flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Node network visual */}
              <div className="relative w-full h-40 md:h-52 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(166,252,252,0.15)" />
                      <stop offset="100%" stopColor="rgba(166,252,252,0)" />
                    </radialGradient>
                  </defs>
                  {/* Central glow */}
                  <circle cx="200" cy="100" r="80" fill="url(#nodeGlow)" />
                  {/* Nodes */}
                  {[
                    [200,100],[140,60],[260,60],[120,120],[280,120],[160,160],[240,160],
                    [80,80],[320,80],[80,140],[320,140],[200,40],[200,170],
                    [100,50],[300,50],[60,100],[340,100],[100,170],[300,170],
                    [170,80],[230,80],[170,130],[230,130],
                    [40,60],[360,60],[40,150],[360,150],
                  ].map(([cx, cy], i) => (
                    <React.Fragment key={i}>
                      <motion.circle
                        cx={cx} cy={cy} r={i < 7 ? 3 : i < 13 ? 2 : 1.5}
                        fill={i < 7 ? "rgba(166,252,252,0.7)" : "rgba(255,255,255,0.3)"}
                        animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
                        transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                      />
                    </React.Fragment>
                  ))}
                  {/* Connection lines */}
                  {[
                    [200,100,140,60],[200,100,260,60],[200,100,120,120],[200,100,280,120],
                    [200,100,160,160],[200,100,240,160],[140,60,80,80],[260,60,320,80],
                    [120,120,80,140],[280,120,320,140],[140,60,100,50],[260,60,300,50],
                    [80,80,40,60],[320,80,360,60],[80,140,40,150],[320,140,360,150],
                    [160,160,100,170],[240,160,300,170],[200,40,170,80],[200,40,230,80],
                    [200,170,170,130],[200,170,230,130],
                  ].map(([x1,y1,x2,y2], i) => (
                    <motion.line
                      key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="rgba(166,252,252,0.12)" strokeWidth="0.8"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() }}
                    />
                  ))}
                </svg>
              </div>

              <p className="text-[10px] tracking-[0.25em] uppercase text-[rgba(166,252,252,0.5)] font-mono mb-3">
                THE DEVELOPER STANDARD
              </p>
              <h3 className="text-xl md:text-2xl font-light text-white mb-3">
                Ubiquitous Distribution
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-mono mb-4">FREE · OPEN · FRICTIONLESS</p>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                The AMAI Zero-Trust SDK is free to install. Every agent gets 10,000 free evaluations per month — enough to integrate, test, and scale without friction. Every transaction feeds the global ledger.
              </p>
            </motion.div>

            {/* ── CENTER BRIDGE (desktop only) ── */}
            <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 items-center justify-center z-20 pointer-events-none">
              <div className="relative h-full flex flex-col items-center justify-center">
                {/* Vertical glowing stream */}
                <div className="absolute inset-y-[10%] w-px bg-gradient-to-b from-transparent via-[rgba(166,252,252,0.3)] to-transparent" />
                {/* Animated data particles */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(166,252,252,0.6)]"
                    style={{ left: '50%', marginLeft: '-3px' }}
                    animate={{
                      top: ['10%', '90%'],
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
                {/* Center label */}
                <div className="relative bg-black border border-white/10 rounded px-2 py-1.5 z-10">
                  <p className="text-[8px] tracking-[0.2em] uppercase text-white/40 font-mono text-center leading-tight">
                    {t('tp.s6m.bridge')}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile bridge */}
            <div className="flex md:hidden items-center justify-center py-2">
              <div className="flex items-center gap-3">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-[rgba(166,252,252,0.3)]" />
                <motion.div
                  className="w-2 h-2 rounded-full bg-[rgba(166,252,252,0.5)]"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-[8px] tracking-[0.2em] uppercase text-white/30 font-mono">{t('tp.s6m.bridge')}</p>
                <motion.div
                  className="w-2 h-2 rounded-full bg-[rgba(166,252,252,0.5)]"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-[rgba(166,252,252,0.3)]" />
              </div>
            </div>

            {/* ── RIGHT PILLAR: Enterprise Intelligence ── */}
            <motion.div
              className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 md:ml-12 flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Command center visual */}
              <div className="relative w-full h-40 md:h-52 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(214,166,252,0.03)] to-transparent" />
                <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="heatGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(214,166,252,0.15)" />
                      <stop offset="50%" stopColor="rgba(166,252,252,0.1)" />
                      <stop offset="100%" stopColor="rgba(214,166,252,0.05)" />
                    </linearGradient>
                  </defs>
                  {/* Dashboard frame lines */}
                  <rect x="20" y="15" width="360" height="170" rx="4" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="20" y1="45" x2="380" y2="45" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  {/* Top bar indicators */}
                  {[40, 80, 120].map((x, i) => (
                    <rect key={i} x={x} y="25" width={30} height={10} rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                  ))}
                  {/* Heatmap grid */}
                  {Array.from({ length: 8 }, (_, row) =>
                    Array.from({ length: 14 }, (_, col) => {
                      const intensity = Math.random();
                      const color = intensity > 0.7
                        ? `rgba(214,166,252,${0.2 + intensity * 0.3})`
                        : intensity > 0.4
                          ? `rgba(166,252,252,${0.1 + intensity * 0.2})`
                          : `rgba(255,255,255,${0.02 + intensity * 0.06})`;
                      return (
                        <motion.rect
                          key={`h${row}-${col}`}
                          x={35 + col * 24} y={55 + row * 15}
                          width={20} height={11} rx="1"
                          fill={color}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
                        />
                      );
                    })
                  )}
                  {/* TARI score readout */}
                  <rect x="280" y="22" width="90" height="16" rx="3" fill="rgba(166,252,252,0.08)" stroke="rgba(166,252,252,0.2)" strokeWidth="0.5" />
                  <text x="293" y="33" fill="rgba(166,252,252,0.7)" fontSize="8" fontFamily="monospace" fontWeight="bold">TARI™ 842</text>
                </svg>
              </div>

              <p className="text-[10px] tracking-[0.25em] uppercase text-[rgba(214,166,252,0.6)] font-mono mb-3">
                THE VERIFICATION RAIL
              </p>
              <h3 className="text-xl md:text-2xl font-light text-white mb-3">
                Developer Subscription + Enterprise Platform
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-mono mb-4">PAID · TWO TIERS · SCALES WITH USAGE</p>
              <div className="text-sm md:text-base text-white/60 font-light leading-relaxed space-y-3">
                <p>
                  <span className="text-white/80">Developer tier</span> — once an agent exceeds 10,000 evaluations per month, the developer converts to a paid subscription that scales with usage volume. Predictable MRR per agent fleet.
                </p>
                <p>
                  <span className="text-white/80">Enterprise tier</span> — treasury, compliance, and ops teams pay a separate platform subscription for fleet monitoring, policy enforcement, and compliance dashboards.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Kicker */}
          <motion.p
            className="text-center text-sm md:text-base lg:text-lg text-white/60 font-light mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Free tier captures the data. Two paid tiers monetize the rail. <span className="text-white">Revenue compounds with every agent deployed.</span>
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />


      {/* ── SLIDE 11: WHY NOW ── */}
      <Slide slideNumber={12} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
            12 // WHY NOW
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
                date: '2025 · COMMERCE',
                title: 'MoonPay Issues Agent Cards',
                body: 'MoonPay shipped Mastercards specifically for AI agents. Agents now spend with real credit-card rails, drawing from stablecoin reserves. Agents are economic actors with their own capital.',
                source: 'MoonPay press release',
              },
              {
                date: '2025 · STANDARDS',
                title: 'AP2 Standardizes Agent Payments',
                body: "Google's Agent Payments Protocol launched with Mastercard, PayPal, Adyen, and 60+ industry partners. Agent-initiated transactions now have a standard cryptographic authorization format.",
                source: 'Google Cloud, Sep 2025',
              },
              {
                date: '2026 · MARKET',
                title: 'Microsoft Validates The Category',
                body: "Entra Agent ID ships identity, authorization, and access governance — but only for Microsoft's own agents. The structural conflict of interest creates the independent arbiter gap.",
                source: 'Microsoft Security',
              },
              {
                date: '2026 · REGULATORY',
                title: 'EU AI Act Enforcement Begins',
                body: 'Core high-risk AI obligations enter force August 2, 2026. Non-compliance penalties reach €15M or 3% of global revenue. Mandatory traceability, logging, and human oversight make verifiable audit infrastructure the new enterprise standard.',
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

      {/* ── SLIDE 12: THE TEAM ── */}
      <Slide slideNumber={13} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <MicroLabel>13 // THE TEAM</MicroLabel>

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
            className="text-sm md:text-base text-white/40 font-light mb-8 md:mb-10 max-w-2xl mx-auto text-center"
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
                title: 'Co-Founder & CEO',
                line1: 'Lead Product & Systems Architect',
                line2: 'Scaled distributed-trust systems to $250M',
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

      {/* ── SLIDE 13: CLOSING ── */}
      <Slide slideNumber={14} footerText={t('tp.footer')}>
        {/* Constellation accent — same as hero */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.svg
            className="absolute right-[8%] top-[12%] w-[280px] h-[280px] opacity-[0.12]"
            viewBox="0 0 400 400"
            animate={{ x: [0, 3, -2, 1, 0], y: [0, -2, 3, -1, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
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
          </motion.svg>
          <motion.svg
            className="absolute left-[8%] bottom-[18%] w-[180px] h-[180px] opacity-[0.08]"
            viewBox="0 0 200 200"
            animate={{ x: [0, -2, 1, -1, 0], y: [0, 1, -2, 2, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.img
            src={amaiLogo}
            alt="AMAI"
            className="h-10 md:h-16 w-auto brightness-110 mb-10 md:mb-20 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-16 leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tp.s7.h')}
          </motion.h2>
          
          <motion.div 
            className="mb-10 md:mb-16" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 md:gap-5">
              {[t('tp.s7.word1'), t('tp.s7.word2'), t('tp.s7.word3')].map((word, i) => (
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
              className="mt-6 text-base md:text-xl text-white/70 font-light"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {t('tp.s7.tagline')}
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
              href="https://terminal.amai.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 border border-white/30 rounded text-xs tracking-[0.15em] uppercase text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              ACCESS THE BUREAU
            </a>
            <a
              href="/architecture"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              {t('tp.s7.arch')} <span>{isRtl ? '←' : '→'}</span>
            </a>
            <a
              href="mailto:team@amai.net?subject=Mission%20Briefing%20%2F%2F%20%5BOrganization%20Name%5D&body=To%20the%20AMAI%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20the%20%5BThesis%20%2F%20Architecture%5D.%0A%0AName%3A%20%0AOrganization%3A%20%0AIntent%3A%20"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              {t('tp.s7.contact')}
            </a>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 14: THE ROUND ── */}
      <Slide slideNumber={15} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full px-6 md:px-16 text-center"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium text-center">
            15 // THE ROUND
          </p>

          <motion.h2
            className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Closing The Round.
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg lg:text-[22px] text-white/60 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            $4M raise · $26.5M cap · 20% discount
          </motion.p>

          {/* Stat row */}
          <motion.div
            className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 bg-black border border-white/10"
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
                className={`bg-black px-4 py-6 md:py-8 flex flex-col items-center gap-3 ${
                  i > 0 ? 'border-t md:border-t-0 md:border-l border-white/10' : ''
                }`}
              >
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 font-light">
                  {s.label}
                </span>
                <span className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-light text-cyan-accent leading-none">
                  {s.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Use of Funds */}
          <motion.div
            className="mt-14 md:mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/40 font-light mb-8 md:mb-10">
              USE OF FUNDS
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {[
                { pct: '60%', title: 'Engineering & Research', desc: 'Senior infrastructure + AI research hires' },
                { pct: '15%', title: 'Platform GA', desc: 'SDK launch + Enterprise Interceptor production release' },
                { pct: '15%', title: 'Design Partners', desc: '3 enterprise pilots + GTM motion' },
                { pct: '10%', title: 'Operations & Runway', desc: 'G&A + buffer to Series A milestones' },
              ].map((f) => (
                <div key={f.title} className="flex flex-col items-center text-center px-2">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-light text-cyan-accent leading-none">
                    {f.pct}
                  </span>
                  <span className="mt-4 text-sm md:text-base text-white font-light tracking-wide">
                    {f.title}
                  </span>
                  <span className="mt-2 text-xs md:text-sm text-white/50 font-light leading-snug">
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
