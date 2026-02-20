import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
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
  footerText?: string;
}

const TOTAL_SLIDES = 6;

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

  const loopSteps = t('tp.s3.loop').split(',');

  return (
    <div className={`bg-black min-h-svh md:min-h-screen overflow-x-hidden ${isMobile ? "overscroll-y-contain touch-pan-y" : ""}`} dir={dir}>
      <SiteHeader />
      {/* Progress bar */}
      {!isMobile && (
        <motion.div
          className="fixed bottom-0 left-0 h-[3px] bg-white/30 origin-left z-50"
          style={{ scaleX: scrollYProgress, width: "100%" }}
        />
      )}

      {/* Constellation background - fixed, like /system-architecture hero */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.svg 
          className="absolute right-[5%] top-[10%] w-[400px] h-[400px] opacity-[0.14]"
          viewBox="0 0 400 400"
          animate={{ 
            x: [0, 3, -2, 1, 0],
            y: [0, -2, 3, -1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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
          animate={{ 
            x: [0, -2, 1, -1, 0],
            y: [0, 1, -2, 2, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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

      {/* ── SLIDE 2: THE PROBLEM ── */}
      <Slide slideNumber={2} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <MicroLabel>{t('tp.s2.label')}</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tp.s2.h')}
          </motion.h2>

          <motion.div
            className={`${isRtl ? 'text-right' : 'text-left'} max-w-2xl mx-auto space-y-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              {t('tp.s2.p1a')}<span className="text-white font-normal">{t('tp.s2.fico')}</span>{t('tp.s2.p1b')}<span className="text-white font-normal">{t('tp.s2.dnb')}</span>.
            </p>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              {t('tp.s2.p2a')}<span className="text-white font-normal">{t('tp.s2.p2b')}</span>.
            </p>
            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed">
              {t('tp.s2.p3')}
            </p>
          </motion.div>

          {/* Agent Credit Score Gauge */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <svg viewBox="0 0 340 200" className="w-[300px] md:w-[400px] h-auto">
              <defs>
                <filter id="needleGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M 48 170 A 125 125 0 0 1 100 55" fill="none" stroke="rgba(200,120,50,0.25)" strokeWidth="28" strokeLinecap="butt" />
              <path d="M 108 46 A 125 125 0 0 1 232 46" fill="none" stroke="rgba(200,180,60,0.3)" strokeWidth="28" strokeLinecap="butt" />
              <path d="M 240 55 A 125 125 0 0 1 292 170" fill="none" stroke="rgba(80,180,100,0.35)" strokeWidth="28" strokeLinecap="butt" />
              <text x="38" y="100" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace" textAnchor="middle">POOR</text>
              <text x="170" y="14" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace" textAnchor="middle">GOOD</text>
              <text x="302" y="100" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="monospace" textAnchor="middle">EXCELLENT</text>
              <text x="38" y="112" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="monospace" textAnchor="middle">300</text>
              <text x="170" y="26" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="monospace" textAnchor="middle">580</text>
              <text x="302" y="112" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="monospace" textAnchor="middle">850</text>
              <rect x="155" y="118" width="30" height="22" rx="4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
              <circle cx="164" cy="128" r="2.5" fill="rgba(255,255,255,0.55)" />
              <circle cx="176" cy="128" r="2.5" fill="rgba(255,255,255,0.55)" />
              <line x1="170" y1="117" x2="170" y2="108" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
              <circle cx="170" cy="106" r="3" fill="rgba(255,255,255,0.4)" />
              <line x1="170" y1="140" x2="170" y2="146" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              <line x1="162" y1="146" x2="178" y2="146" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
              <line
                x1="170" y1="170" x2="272" y2="100"
                stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round"
                filter="url(#needleGlow)"
              />
              <line
                x1="170" y1="170" x2="272" y2="100"
                stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 3: THE SOLUTION ── */}
      <Slide slideNumber={3} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <MicroLabel>{t('tp.s3.label')}</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-10 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tp.s3.h')}
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
              <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-2">{t('tp.s3.identity')}</p>
              <p className="text-sm text-white/40 font-light">{t('tp.s3.identity.desc')}</p>
            </div>

            {/* Performance */}
            <div className="bg-black border border-white/10 rounded-lg p-6 flex flex-col items-center text-center">
              <Activity className="w-8 h-8 text-white/50 mb-4" />
              <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-2">{t('tp.s3.performance')}</p>
              <p className="text-sm text-white/40 font-light">{t('tp.s3.performance.desc')}</p>
            </div>

            {/* Trust */}
            <div className="bg-black border border-white/15 rounded-lg p-6 flex flex-col items-center text-center">
              <svg viewBox="0 0 120 75" className="w-10 h-7 mb-3">
                <path d="M 15 65 A 50 50 0 0 1 35 25" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" />
                <path d="M 37 23 A 50 50 0 0 1 60 15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" strokeLinecap="round" />
                <path d="M 62 15 A 50 50 0 0 1 85 23" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="6" strokeLinecap="round" />
                <path d="M 87 25 A 50 50 0 0 1 105 65" fill="none" stroke="rgba(166,252,252,0.5)" strokeWidth="6" strokeLinecap="round" />
                <line x1="60" y1="68" x2="92" y2="38" stroke="rgba(166,252,252,0.8)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="60" cy="68" r="4" fill="rgba(166,252,252,0.3)" stroke="rgba(166,252,252,0.6)" strokeWidth="1.5" />
              </svg>
              <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-2">{t('tp.s3.trust')}</p>
              <p className="text-sm text-white/40 font-light">{t('tp.s3.trust.desc')}</p>
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
              {loopSteps.map((step, i, arr) => (
                <span key={i} className="flex items-center gap-1.5 md:gap-2">
                  <span className="px-2 md:px-3 py-1 md:py-1.5 border border-white/20 rounded bg-black whitespace-nowrap">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-white/30 text-[8px] md:text-xs">{isRtl ? '←' : '→'}</span>
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

        </motion.div>

      </Slide>

      <SlideDivider />

      {/* ── SLIDE 4: THE MECHANISM ── */}
      <Slide slideNumber={4} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <MicroLabel>{t('tp.s4.label')}</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 text-center leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tp.s4.h')}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('tp.s4.sub')}
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
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/30">{t('tp.s4.fuel.label')}</p>
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 font-light mb-2">{t('tp.s4.fuel.title')}</p>
                  <p className="text-sm text-white/40 font-light">{t('tp.s4.fuel.desc')}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-black border-white/20 text-white/80 text-sm max-w-[220px]">
                <span className="font-medium text-white/90">{t('tp.s4.fuel.tooltip.title')}</span>{t('tp.s4.fuel.tooltip.desc')}
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-black border border-white/10 rounded-lg p-8 cursor-pointer hover:border-white/25 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-white/50 group-hover:text-white/70 transition-colors" />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/30">{t('tp.s4.safety.label')}</p>
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 font-light mb-2">{t('tp.s4.safety.title')}</p>
                  <p className="text-sm text-white/40 font-light">{t('tp.s4.safety.desc')}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-black border-white/20 text-white/80 text-sm max-w-[220px]">
                <span className="font-medium text-white/90">{t('tp.s4.safety.tooltip.title')}</span>{t('tp.s4.safety.tooltip.desc')}
              </TooltipContent>
            </Tooltip>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-sm text-white/40 font-light text-center tracking-wide mt-8"
          >
            {t('tp.s4.algo')}
          </motion.p>

        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 5: THE MOAT ── */}
      <Slide slideNumber={5} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <MicroLabel>{t('tp.s5.label')}</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tp.s5.h')}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/50 font-light mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('tp.s5.sub')}
          </motion.p>

          {/* Trust Matrix Panel */}
          <motion.div
            className="bg-black border border-white/10 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Top Section: Agent Score */}
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
                {/* Sparkline */}
                <svg className="w-32 md:w-40 h-8" viewBox="0 0 160 32" fill="none">
                  <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(52,211,153,0.3)" />
                      <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,28 L12,26 L24,24 L36,25 L48,22 L60,20 L72,18 L84,19 L96,15 L108,12 L120,10 L132,8 L144,6 L156,4 L160,3" stroke="rgba(52,211,153,0.6)" strokeWidth="1.5" fill="none" />
                  <path d="M0,28 L12,26 L24,24 L36,25 L48,22 L60,20 L72,18 L84,19 L96,15 L108,12 L120,10 L132,8 L144,6 L156,4 L160,3 L160,32 L0,32 Z" fill="url(#sparkGrad)" />
                </svg>
              </div>
            </div>

            {/* Middle Section: Heatmap */}
            <div className="border-b border-white/10 px-5 md:px-8 py-5 md:py-6">
              <p className={`text-[9px] tracking-[0.2em] uppercase text-white/30 mb-4 ${isRtl ? 'text-right' : 'text-left'} font-mono`}>{t('tp.s5.history')}</p>
              <div className="flex gap-[3px] md:gap-1 flex-wrap justify-center">
                {Array.from({ length: 52 * 5 }, (_, i) => {
                  const isFault = i === 187;
                  const intensity = isFault ? 0 : Math.random();
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

            {/* Bottom Section: Cumulative Metrics */}
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
            </div>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 6: CLOSING ── */}
      <Slide slideNumber={6} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-16 leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tp.s6.h')}
          </motion.h2>
          
          <motion.div 
            className="mb-10 md:mb-16" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 md:gap-5">
              {[t('tp.s6.word1'), t('tp.s6.word2'), t('tp.s6.word3')].map((word, i) => (
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
              {t('tp.s6.tagline')}
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
              href="https://youtu.be/qLEnRNELErg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 border border-white/30 rounded text-xs tracking-[0.15em] uppercase text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              {t('tp.s6.demo')}
            </a>
            <a
              href="/system-architecture"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              {t('tp.s6.arch')} <span>{isRtl ? '←' : '→'}</span>
            </a>
            <a
              href="mailto:team@amai.net?subject=Mission%20Briefing%20%2F%2F%20%5BOrganization%20Name%5D&body=To%20the%20AMAI%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20the%20%5BThesis%20%2F%20Architecture%5D.%0A%0AName%3A%20%0AOrganization%3A%20%0AIntent%3A%20"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              {t('tp.s6.contact')}
            </a>
          </motion.div>
        </motion.div>
      </Slide>
      <Footer />
    </div>
  );
};

export default Thesis;
