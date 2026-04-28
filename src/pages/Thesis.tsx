import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";
import legacyPadlock from "@/assets/slide3-legacy-padlock.png";
import amaiCore from "@/assets/amai-header-icon.png";
import { useIsMobile } from "@/hooks/use-mobile";

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

const TOTAL_SLIDES = 9;

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

      {/* ── SLIDE 3: THE THREAT IS NHI ── */}
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

          {/* NHI Diagram: API Key on Lock vs AMAI Shield on Vault */}
          <motion.div
            className="mb-12 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Legacy: Dull Padlock */}
            <div className="relative mx-auto flex w-52 flex-none flex-col items-center gap-4 md:w-60">
              <div className="relative mx-auto flex h-40 w-40 items-center justify-center md:h-48 md:w-48">
                <motion.img
                  src={legacyPadlock}
                  alt="Legacy IAM padlock"
                  className="h-full w-full object-contain opacity-60 grayscale"
                  loading="lazy"
                  width={512}
                  height={512}
                  animate={{ opacity: [0.5, 0.65, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-white/30 font-medium">{t('tp.s3.legacy.label')}</p>
                <p className="text-sm md:text-base text-white/50 mt-2 font-light">{t('tp.s3.legacy.desc')}</p>
              </div>
            </div>

            {/* VS divider — vertically centered with the image area */}
            <div className="flex flex-col items-center justify-center self-center md:mt-[-1rem]">
              <span className="text-xs tracking-[0.3em] uppercase text-white/20 font-medium">vs</span>
            </div>

            {/* AMAI: Brand Icon */}
            <div className="relative mx-auto flex w-52 flex-none flex-col items-center gap-4 md:w-60">
              <div className="relative mx-auto flex h-40 w-40 items-center justify-center md:h-48 md:w-48">
                <motion.img
                  src={amaiCore}
                  alt="AMAI Runtime"
                  className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(166,252,252,0.3)]"
                  loading="lazy"
                  width={512}
                  height={512}
                  style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', imageRendering: 'crisp-edges' as any }}
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[rgba(166,252,252,0.5)] font-medium">{t('tp.s3.amai.label')}</p>
                <p className="text-sm md:text-base text-[rgba(166,252,252,0.4)] mt-2 font-semibold">{t('tp.s3.amai.desc')}</p>
              </div>
            </div>
          </motion.div>

          {/* Sub-text */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
              {t('tp.s3.sub')}
            </p>
          </motion.div>

        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 4: THE TARI ENGINE ── */}
      <Slide slideNumber={4} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <MicroLabel>{t('tp.s4.label')}</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 text-center leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TARI™ <span className="text-white/50">(Trust & Risk Index)</span>
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

          {/* TARI Visual: Inputs → Gauge → Outputs */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* LEFT: Data Inputs */}
            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
              {["Zero-Trust SDK & API", "AMAI Enterprise Platform", "Public Agent Bureau"].map((label, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs md:text-sm text-white/60 font-mono tracking-wide text-right">{label}</span>
                  <motion.div
                    className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-[rgba(166,252,252,0.6)]"
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
                    <linearGradient id="tariGaugeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(200,80,60,0.5)" />
                      <stop offset="35%" stopColor="rgba(220,180,60,0.5)" />
                      <stop offset="65%" stopColor="rgba(100,200,120,0.5)" />
                      <stop offset="100%" stopColor="rgba(166,252,252,0.7)" />
                    </linearGradient>
                    <filter id="tariGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Gauge arc background */}
                  <path d="M 30 150 A 105 105 0 0 1 230 150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="20" strokeLinecap="round" />
                  {/* Gauge arc colored */}
                  <path d="M 30 150 A 105 105 0 0 1 230 150" fill="none" stroke="url(#tariGaugeGrad)" strokeWidth="20" strokeLinecap="round" />
                  {/* Tick marks */}
                  <text x="20" y="165" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">300</text>
                  <text x="120" y="30" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace" textAnchor="middle">600</text>
                  <text x="235" y="165" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">900</text>
                  {/* Needle pointing to ~824 (about 87% of the arc) */}
                  <motion.line
                    x1="130" y1="150" x2="215" y2="85"
                    stroke="rgba(166,252,252,0.9)" strokeWidth="2.5" strokeLinecap="round"
                    filter="url(#tariGlow)"
                    animate={{ x2: [213, 217, 213], y2: [87, 83, 87] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <circle cx="130" cy="150" r="5" fill="rgba(166,252,252,0.3)" stroke="rgba(166,252,252,0.6)" strokeWidth="1.5" />
                  {/* Score text */}
                  <text x="130" y="125" fill="white" fontSize="32" fontFamily="monospace" fontWeight="bold" textAnchor="middle">824</text>
                </svg>
              </motion.div>
              {/* TRUSTED badge */}
              <motion.div
                className="mt-2 px-4 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10"
                animate={{ boxShadow: ["0 0 10px rgba(52,211,153,0.15)", "0 0 25px rgba(52,211,153,0.3)", "0 0 10px rgba(52,211,153,0.15)"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-400 font-mono font-semibold">TRUSTED</span>
              </motion.div>
            </div>

            {/* RIGHT: Outputs */}
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

          {/* Subtext */}
          <motion.p
            className="text-sm md:text-base text-white/50 font-light text-center max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <span dangerouslySetInnerHTML={{ __html: t('tp.s4.proof').replace(/<em>/g, '<em class="text-white/70 not-italic font-normal">') }} />
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

      {/* ── SLIDE 6: THE BUSINESS MODEL ── */}
      <Slide slideNumber={6} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <MicroLabel>{t('tp.s6.label')}</MicroLabel>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 leading-[1.1] tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tp.s6m.h1')}
            <br />
            <span className="text-white/60">{t('tp.s6m.h2')}</span>
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-white/40 font-light mb-14 md:mb-20 max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('tp.s6m.sub')}
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
                {t('tp.s6m.left.eyebrow')}
              </p>
              <h3 className="text-xl md:text-2xl font-light text-white mb-3">
                {t('tp.s6m.left.title')}
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-mono mb-4">{t('tp.s6m.left.tag')}</p>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                {t('tp.s6m.left.body')}
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
                {t('tp.s6m.right.eyebrow')}
              </p>
              <h3 className="text-xl md:text-2xl font-light text-white mb-3">
                {t('tp.s6m.right.title')}
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-mono mb-4">{t('tp.s6m.right.tag')}</p>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                {t('tp.s6m.right.body')}
              </p>
            </motion.div>

          </div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 7: THE AUTONOMOUS ECONOMY (Market Sizing) ── */}
      <Slide slideNumber={7} footerText={t('tp.footer')}>
        {/* Abstract background: data streams */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Horizontal data stream lines */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute h-px"
              style={{
                top: `${8 + i * 8}%`,
                left: '-10%',
                width: `${30 + Math.random() * 40}%`,
                background: `linear-gradient(90deg, transparent, rgba(100,180,255,${0.03 + Math.random() * 0.06}), transparent)`,
              }}
              animate={{ x: ['0%', '120%'] }}
              transition={{ duration: 8 + Math.random() * 12, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
            />
          ))}
          {/* Scattered light dots (world map suggestion) */}
          {Array.from({ length: 40 }, (_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute rounded-full"
              style={{
                width: 2 + Math.random() * 2,
                height: 2 + Math.random() * 2,
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                background: `rgba(100,180,255,${0.05 + Math.random() * 0.1})`,
              }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <MicroLabel>{t('tp.s7m.label')}</MicroLabel>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 md:mb-4 text-center leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('tp.s7m.h')}
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-white/40 font-light mb-14 md:mb-20 max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('tp.s7m.sub')}
          </motion.p>

          {/* Two-column: Data Points (left) + Narrative Anchor (right) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            
            {/* LEFT: Massive data callouts — 3 cols */}
            <div className="md:col-span-3 flex flex-col gap-12 md:gap-16">
              {/* Data Point 1 */}
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
                  {t('tp.s7m.dp1.value')}
                </h3>
                <p className="text-xs md:text-sm text-white/40 font-light leading-relaxed max-w-md">
                  {t('tp.s7m.dp1.desc')}{' '}
                  <span className="text-white/25 font-mono text-[10px]">{t('tp.s7m.dp1.src')}</span>
                </p>
              </motion.div>

              {/* Data Point 2 */}
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
                  {t('tp.s7m.dp2.value')}
                </h3>
                <p className="text-xs md:text-sm text-white/40 font-light leading-relaxed max-w-md">
                  {t('tp.s7m.dp2.desc')}{' '}
                  <span className="text-white/25 font-mono text-[10px]">{t('tp.s7m.dp2.src')}</span>
                </p>
              </motion.div>
            </div>

            {/* RIGHT: Narrative anchor — 2 cols */}
            <motion.div
              className="md:col-span-2 bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 md:p-8 backdrop-blur-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg md:text-xl font-light text-white mb-4 leading-snug">
                {t('tp.s7m.anchor.title')}
              </h4>
              <div className="w-10 h-px bg-gradient-to-r from-[#60b8ff]/40 to-transparent mb-5" />
              <p className="text-sm md:text-[15px] text-white/45 font-light leading-[1.75]">
                {t('tp.s7m.anchor.p1')}
              </p>
              <p className="mt-4 text-sm md:text-[15px] text-white/55 font-light leading-[1.75]">
                {t('tp.s7m.anchor.p2')}
              </p>
            </motion.div>

          </div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* ── SLIDE 8: THE TEAM ── */}
      <Slide slideNumber={8} footerText={t('tp.footer')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <MicroLabel>08 // THE TEAM</MicroLabel>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 md:mb-4 text-center leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Core Team
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-white/40 font-light mb-8 md:mb-10 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Built by veterans of infrastructure, foundational AI, and enterprise defense.
          </motion.p>

          {/* Row 1: Co-Founders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                name: 'Denver Nunley',
                title: 'Co-Founder & CEO',
                line1: 'Lead Product & Systems Architect',
                line2: '10+ Years Cryptographic & Growth Leadership',
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

      {/* ── SLIDE 9: CLOSING ── */}
      <Slide slideNumber={9} footerText={t('tp.footer')}>
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
      <Footer />
    </div>
  );
};

export default Thesis;
