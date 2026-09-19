import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Download, RefreshCw, Send, TrendingUp, SlidersHorizontal, Pause } from "lucide-react";
import amaiLogo from "@/assets/amai-logo-tm.png";
import homeFallbackBg from "@/assets/home-fallback-bg.jpg";
import homeSideGridHd from "@/assets/home-side-grid-hd.webp.asset.json";
import { useLanguage } from "@/contexts/LanguageContext";
import { pickLanding, type LandingCopy } from "@/i18n/landingContent";

import { Footer } from "@/components/Footer";
import { TariGauge } from "@/components/TariGauge";
import { EvidenceDistribution } from "@/components/EvidenceDistribution";
import { EcosystemSection } from "@/components/EcosystemSection";

const TICKERS = ["TSLA", "AMZN", "PLTR", "NFLX", "AMD"];

const LaunchpadShowcase = ({ copy }: { copy: LandingCopy["launchpad"] }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <section id="launchpad" className="relative bg-perspective-grid py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Grid visible only in the bottom half, fading to black toward the top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,0) 55%)' }}
      />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs tracking-[0.35em] uppercase text-white/50">{copy.eyebrow}</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.05]">
              {copy.title}
            </h2>
            <p className="mt-6 text-base md:text-lg font-normal text-white leading-snug">
              {copy.lead}
            </p>
            <p className="mt-5 text-sm md:text-base font-light text-white/60 leading-relaxed">
              {copy.p1}
            </p>
            <p className="mt-4 text-sm md:text-base font-light text-white/60 leading-relaxed">
              {copy.p2}
            </p>
            <div className="mt-7">
              <Link
                to="/launchpad"
                className="inline-flex items-center gap-2 text-sm font-light text-[#CEFFC9] hover:text-white transition-colors duration-300 border-b border-[#CEFFC9]/40 hover:border-white/60 pb-1"
              >
                {copy.link}<span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>

          <figure>
            <button
              type="button"
              onClick={(e) => {
                if (window.matchMedia("(min-width: 768px)").matches) return;
                setZoomed(true);
              }}
              className="block w-full text-left cursor-zoom-in md:pointer-events-none md:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4F6AD]/70 rounded-lg"
              aria-label={copy.zoomLabel}
            >
              <img
                src="/uploads/launchpad.svg"
                alt="AMAI Launchpad interface showing example token launches, each with an AI operator and a Stock Token payout"
                width={1840}
                height={1220}
                decoding="async"
                className="w-full h-auto block"
              />
            </button>

            <motion.div
              className="mt-6 md:mt-8 flex items-center justify-center gap-4 md:gap-6"
              aria-label={copy.comingSoon}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.span
                aria-hidden
                className="h-px w-8 sm:w-14 md:w-32"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(180, 246, 173, 0.4))',
                  transformOrigin: 'right center',
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              />
              <motion.span
                className="text-[11px] md:text-xs uppercase font-light text-white/75 whitespace-nowrap"
                initial={{ opacity: 0, letterSpacing: "0.95em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                style={{ textShadow: "0 0 26px rgba(180, 246, 173, 0.22)" }}
              >
                {copy.comingSoon}
              </motion.span>
              <motion.span
                aria-hidden
                className="h-px w-8 sm:w-14 md:w-32"
                style={{
                  background: 'linear-gradient(to left, transparent, rgba(180, 246, 173, 0.4))',
                  transformOrigin: 'left center',
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              />
            </motion.div>
          </figure>
        </div>
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
          >
            <button
              type="button"
              onClick={() => setZoomed(false)}
              className="fixed top-4 right-4 z-10 h-10 px-4 rounded-full border border-white/20 bg-black/70 text-xs tracking-[0.2em] uppercase text-white/80 hover:text-white"
            >
              {copy.close}
            </button>
            <img
              src="/uploads/launchpad.svg"
              alt="AMAI Launchpad interface, enlarged view"
              className="w-full max-w-[1840px] max-h-full h-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


const OPERATOR_ROWS = [
  {
    icon: Download,
    job: "Collect",
    desc: "Collect the swap fees the pool’s position has earned.",
    url: "/uploads/operator/01-collect-v2.svg",
    alt: "Pool fees entering the collection chamber while principal stays in place",
  },
  {
    icon: RefreshCw,
    job: "Convert",
    desc: "Swap fees into the tokenized stocks. NVDA, TSLA and more.",
    url: "/uploads/operator/02-convert-v2.svg",
    alt: "Collected fees being converted into Stock Tokens",
  },
  {
    icon: Send,
    job: "Pay",
    desc: "Distribute the holders' share to their wallets.",
    url: "/uploads/operator/03-pay-v2.svg",
    alt: "Stock Tokens reaching holder wallets",
  },
  {
    icon: TrendingUp,
    job: "Lend idle",
    desc: "Put idle treasury to work within defined limits.",
    url: "/uploads/operator/04-lend-idle-v2.svg",
    alt: "A capped treasury allocation going to an approved venue with a return path",
  },
  {
    icon: SlidersHorizontal,
    job: "Rebalance",
    desc: "Adjust the liquidity range as conditions change.",
    url: "/uploads/operator/05-rebalance-v2.svg",
    alt: "The liquidity range shifting around the price marker inside the pool",
  },
  {
    icon: Pause,
    job: "Sit out",
    desc: "Pause collections around specified market events.",
    url: "/uploads/operator/06-sit-out-v2.svg",
    alt: "The collection gate closed for a market event with fees waiting at the outlet",
  },
] as const;

const TickerRoll = () => {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((i) => (i + 1) % TICKERS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const ticker = TICKERS[tickerIndex];

  return (
    <span dir="ltr" className="keep-ltr inline-flex font-mono font-medium text-[#B4F6AD]">
      {ticker.split("").map((ch, i) => (
        <span key={i} className="relative inline-block">
          <span className="invisible">0</span>
          <AnimatePresence initial={false}>
            <motion.span
              key={ch}
              className="absolute inset-0"
              initial={{ y: "60%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-60%", opacity: 0 }}
              transition={{ duration: 0.22, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              {ch}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
};


const HomepageCopy = () => {
  const { language } = useLanguage();
  const c = pickLanding(language);
  const [activeOp, setActiveOp] = useState(0);
  const [opPaused, setOpPaused] = useState(false);
  const opSectionRef = useRef<HTMLElement>(null);
  const opInView = useInView(opSectionRef, { amount: 0.3 });

  useEffect(() => {
    if (!opInView || opPaused) return;
    const delay = activeOp === 0 ? 4000 : 3000;
    const t = window.setTimeout(() => {
      setActiveOp((i) => (i + 1) % OPERATOR_ROWS.length);
    }, delay);
    return () => window.clearTimeout(t);
  }, [opInView, opPaused, activeOp]);


  const navItems = [
    { label: "Operators", id: "operators" },
    { label: "Launchpad", id: "launchpad" },
    { label: "TARI", id: "tari" },
    { label: "Bureau", href: "https://bureau.amai.net", external: true },
  ] as const;

  const [showLeftNavArrow, setShowLeftNavArrow] = useState(false);
  const [showRightNavArrow, setShowRightNavArrow] = useState(true);

  const navListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = navListRef.current;
    if (!el) return;
    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setShowLeftNavArrow(el.scrollLeft > 2);
      setShowRightNavArrow(el.scrollLeft < maxScroll - 2);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollNavRight = () => {
    const el = navListRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" });
  };

  const scrollNavLeft = () => {
    const el = navListRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black">
      {/* Hero */}
      <div className="h-svh md:h-screen flex flex-col">
        <div className="h-16 bg-black flex-shrink-0" />
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          <motion.img
            src={homeFallbackBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] z-[1] bg-[radial-gradient(ellipse_at_50%_100%,hsl(var(--cyan-accent)/0.1)_0%,transparent_55%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] z-[1] bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--cyan-accent)/0.1)_0%,transparent_55%)]" />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <div className="h-12 md:h-20" aria-hidden="true" />

            <motion.img
              src={amaiLogo}
              alt="AMAI Labs"
              className="h-12 md:h-20 w-auto mx-auto mb-8 md:mb-10 brightness-110"
              initial={{ x: "-140vw" }}
              animate={{ x: ["-140vw", "2.5vw", "0vw"] }}
              transition={{
                duration: 0.48,
                delay: 1,
                times: [0, 0.82, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            <motion.h1
              className={`text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-white/90 font-medium ${language === 'en' ? 'whitespace-normal sm:whitespace-nowrap' : 'whitespace-normal'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {c.hero.headline}
            </motion.h1>

            <motion.p
              className="mt-4 md:mt-5 mx-auto max-w-[640px] text-base sm:text-lg md:text-xl leading-relaxed text-white/55 font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {c.hero.sub.split('\n').map((line, li) => (
                <span key={li}>
                  {li > 0 && <br className="hidden md:inline" />}
                  {li > 0 && <span className="md:hidden"> </span>}
                  {line.split('*').map((part, i) =>
                    i % 2 === 1 ? <em key={i}>{part}</em> : part
                  )}
                </span>
              ))}
            </motion.p>

            <motion.div
              className="mt-10 md:mt-12 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50 font-light">
                {c.hero.scroll}
              </span>
              <div className="relative w-8 h-14 flex items-center justify-center">
                <div className="absolute inset-x-3 top-1 bottom-1 rounded-full border border-white/15" />
                <motion.div
                  className="absolute w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  animate={{ y: [-12, 12, -12] }}
                  transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2 AGENT-OPERATED POOLS */}
      <section ref={opSectionRef} id="score" className="relative bg-perspective-grid py-24 md:py-32 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, #000 100%)' }}
        />
        <div className="pointer-events-none hidden md:block absolute left-[22%] top-[58%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[55%] bg-[radial-gradient(ellipse_at_center,hsl(var(--cyan-accent)/0.1),transparent_55%)]" />

        <div className="relative z-10 max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-start">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">{c.pools.eyebrow}</span>
              <h2 className="mt-6 md:mt-8 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-white/90 font-medium">
                <span className="block">{c.pools.titleA}</span>
                <span className="block mt-1 md:mt-2">{c.pools.titleB}</span>
              </h2>
              <p className="mt-8 md:mt-10 text-base md:text-lg font-light text-white/65 leading-relaxed max-w-[54ch]">
                {c.pools.intro}
              </p>
              <motion.figure
                className="mt-10 md:mt-14 w-full max-w-[680px] lg:-ml-10"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative w-full aspect-[1000/650]">
                  {OPERATOR_ROWS.map((row, i) => (
                    <img
                      key={row.job}
                      src={row.url}
                      alt={i === activeOp ? row.alt : ""}
                      aria-hidden={i === activeOp ? undefined : true}
                      className={`absolute inset-0 block h-full w-full ${i === activeOp ? "opacity-100" : "opacity-0"}`}
                      decoding="async"
                    />
                  ))}
                </div>
                <figcaption className="sr-only" aria-live="polite">
                  {c.pools.rows[activeOp].job}
                </figcaption>
              </motion.figure>
            </motion.div>

            <motion.div
              className="lg:col-span-6 lg:col-start-7 pt-10 md:pt-12 lg:pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 md:space-y-5">
                {OPERATOR_ROWS.map((row, i) => {
                  const Icon = row.icon;
                  const isActive = i === activeOp;
                  return (
                    <button
                      key={row.job}
                      type="button"
                      aria-pressed={isActive}
                      onMouseEnter={() => { setOpPaused(true); setActiveOp(i); }}
                      onMouseLeave={() => setOpPaused(false)}
                      onFocus={() => { setOpPaused(true); setActiveOp(i); }}
                      onBlur={() => setOpPaused(false)}
                      onClick={() => setActiveOp(i)}
                      className="group relative grid w-full grid-cols-[24px_minmax(0,1fr)] gap-x-5 py-2 text-left focus:outline-none"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute -left-3 top-1.5 h-9 w-px origin-center bg-[#CEFFC9] transition-all duration-300 motion-reduce:transition-none md:-left-4 ${isActive ? "scale-y-100 opacity-100" : "scale-y-50 opacity-0 group-focus-visible:scale-y-100 group-focus-visible:opacity-100"}`}
                      />
                      <Icon
                        className={`mt-1 h-[18px] w-[18px] md:h-5 md:w-5 flex-shrink-0 transition-colors duration-300 motion-reduce:transition-none ${isActive ? "text-[#CEFFC9]" : "text-foreground/55 group-hover:text-foreground/80 group-focus-visible:text-[#CEFFC9]"}`}
                        strokeWidth={1.5}
                      />
                      <span className="min-w-0">
                        <span className={`block text-[20px] font-normal leading-tight transition-colors duration-300 motion-reduce:transition-none md:text-[23px] ${isActive ? "text-[#CEFFC9]" : "text-foreground/90 group-hover:text-foreground group-focus-visible:text-[#CEFFC9]"}`}>
                          {c.pools.rows[i].job}
                        </span>
                        <span className="mt-2 block text-[15px] font-light leading-relaxed text-foreground/55 transition-colors duration-300 group-hover:text-foreground/65 group-focus-visible:text-foreground/70 motion-reduce:transition-none md:text-[17px]">
                          {c.pools.rows[i].desc}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-14 border-l border-[#CEFFC9]/50 pl-4 md:mt-16 md:pl-5">
                <span className="text-[11px] tracking-[0.3em] font-light text-white/50 uppercase">{c.pools.deniedLabel}</span>
                <p className="mt-3 text-sm md:text-base font-light text-white/70 leading-relaxed">
                  {c.pools.deniedLine1}<br />
                  {c.pools.deniedLine2}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* FOR EXISTING POOLS — thin band on black grid */}
      <section
        aria-labelledby="existing-pools-heading"
        className="relative overflow-hidden bg-black px-4 py-16 md:px-8 md:py-24"
      >
        {/* Rotated hero grid: converges from the sides, same slow zoom pulse as hero */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[105vw] w-auto -translate-x-1/2 -translate-y-1/2 rotate-90">
          <motion.img
            src={homeSideGridHd.url}
            alt=""
            aria-hidden="true"
            className="h-full w-auto max-w-none opacity-70 will-change-transform"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(ellipse_at_0%_50%,hsl(var(--cyan-accent)/0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_100%_50%,hsl(var(--cyan-accent)/0.12),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-[1400px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-light uppercase tracking-[0.35em] text-white/40">
              {c.existing.eyebrow}
            </span>
            <h2
              id="existing-pools-heading"
              className="mt-4 text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.05]"
            >
              {c.existing.title}
            </h2>
            <p className="mt-4 mx-auto w-[86%] max-w-[36ch] md:w-full md:max-w-[52ch] text-[15px] md:text-base font-light leading-relaxed text-white/75 md:text-white/60">
              {c.existing.body}
            </p>
            <div className="mt-6">
              <Link
                to="/operators"
                className="inline-flex items-center gap-2 text-sm font-light text-[#CEFFC9] hover:text-white transition-colors duration-300 border-b border-[#CEFFC9]/40 hover:border-white/60 pb-1"
              >
                {c.existing.cta}<span aria-hidden>→</span>
              </Link>
              <p className="mt-3 text-[11px] font-light uppercase tracking-[0.3em] text-white/40">
                {c.existing.note}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE LAUNCHPAD */}
      <LaunchpadShowcase copy={c.launchpad} />

      {/* Transition: launchpad to token */}
      <section className="relative bg-perspective-grid px-4 md:px-8 py-16 md:py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] md:w-[60vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,hsl(var(--cyan-accent)/0.104),transparent_65%)] [mask-image:linear-gradient(to_bottom,transparent,black_28%,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_28%,black_72%,transparent)]"
        />
        <motion.p
          className="relative z-10 mx-auto max-w-[24ch] md:max-w-[32ch] text-center font-light tracking-tight leading-[1.25] text-[clamp(1.25rem,2.8vw,2.25rem)] text-white/60"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {c.transition.t1}
          <span className="text-white font-normal">{c.transition.em1}</span>
          {c.transition.t2}
          <span className="text-white font-normal">{c.transition.em2}</span>
          {c.transition.t3}
        </motion.p>
      </section>

      {/* HOLD THE TOKEN / ticker section */}
      <section className="relative bg-perspective-grid min-h-[58vh] md:min-h-screen py-20 md:py-0 flex items-center justify-center px-4 md:px-8 overflow-hidden">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,hsl(var(--cyan-accent)/0.1),transparent_55%)]" />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-medium tracking-tight text-white leading-[1.05] text-[clamp(2.75rem,11vw,10rem)]">
            {c.token.line1}
            <br />
            {c.token.line2}
            <br />
            <TickerRoll /><span className="text-white">.</span>
          </h2>
        </motion.div>
        <div className="absolute bottom-8 inset-x-0 z-10 flex justify-center">
          <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">
            {c.token.caption}
          </span>
        </div>
      </section>

      {/* Feature card */}

      <section className="relative bg-perspective-grid pt-4 md:pt-8 pb-4 md:pb-8 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--cyan-accent)/0.14),transparent_55%)] blur-2xl opacity-70" />
          <div className="relative overflow-hidden rounded-3xl border border-[#3D896D]/20 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_60px_-20px_hsl(var(--cyan-accent)/0.15)] min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#157854]/[0.05] via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#3D896D]/[0.08] to-transparent" />
            <div className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,hsl(var(--cyan-accent)/0.10),transparent_50%)]" />

            <motion.div
              className="relative z-10 flex flex-col items-center justify-center px-6 py-10 md:py-12 text-center max-w-5xl mx-auto"
              initial={{ scale: 0.55, opacity: 0, filter: "blur(12px)" }}
              whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6 md:mb-8 w-full max-w-[420px] md:max-w-[480px] mx-auto">
                <TariGauge score={812} accent="green" />
              </div>
              <div className="mb-4 md:mb-5">
                <span className="inline-flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] font-medium text-white/90 uppercase">
                  <span className="h-px w-8 bg-[#3D896D]/60" />
                  {c.tari.label}
                  <span className="h-px w-8 bg-[#3D896D]/60" />
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05]">
                {c.tari.title}
              </h2>
              <p className="mt-5 md:mt-6 text-lg md:text-xl lg:text-2xl font-light text-white/80 leading-snug max-w-4xl">
                {c.tari.body}
              </p>
              <div className="mt-5 md:mt-6">
                <a href="/tari" className="inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/60 pb-1">
                  {c.tari.link}<span aria-hidden>→</span>
                </a>
              </div>

              <motion.nav
                className="mt-8 md:mt-10"
                initial={{ y: 12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center overflow-hidden rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-2 py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] w-[calc(4*4rem+3*0.5rem+2*2rem+1rem)] md:w-[calc(4*8rem+3*0.5rem+2*2rem+1rem)]">
                  <button
                    type="button"
                    onClick={scrollNavLeft}
                    className={`h-7 w-7 md:h-8 md:w-8 flex-shrink-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 ${showLeftNavArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <ul
                    ref={navListRef}
                    className="flex items-center gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory w-[calc(4*4rem+3*0.5rem)] md:w-[calc(4*8rem+3*0.5rem)] mx-2"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {navItems.map((item) => (
                      <li key={item.label} className="snap-start">
                        {'href' in item ? (
                          'external' in item && item.external ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-16 md:w-32 px-0 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-light tracking-wide text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-300 whitespace-nowrap">
                              {item.label}
                            </a>
                          ) : (
                            <Link to={item.href} className="inline-flex items-center justify-center w-16 md:w-32 px-0 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-light tracking-wide text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-300 whitespace-nowrap">
                              {item.label}
                            </Link>
                          )
                        ) : (
                          <button type="button" onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })} className="w-16 md:w-32 px-0 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-light tracking-wide text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-300 whitespace-nowrap">
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollNavRight}
                    className={`h-7 w-7 md:h-8 md:w-8 flex-shrink-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 ${showRightNavArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.nav>
            </motion.div>
          </div>
        </div>
      </section>


      {/* THE EVIDENCE */}
      <section id="evidence" className="relative bg-black bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[68%] w-[72%] md:w-[58%] bg-[radial-gradient(ellipse_at_18%_76%,hsl(var(--cyan-accent)/0.1),transparent_58%)] [mask-image:linear-gradient(to_bottom,transparent,black_24%,black_76%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_24%,black_76%,transparent)]"
        />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-14 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs tracking-[0.35em] uppercase text-white/50">{c.evidence.eyebrow}</span>
              <h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.08]">
                {c.evidence.title}
              </h2>
              <p className="mt-6 text-base md:text-lg font-light text-white/60 leading-relaxed max-w-xl">
                {c.evidence.body}
              </p>
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="text-5xl md:text-6xl font-mono font-light tracking-tight text-white tabular-nums">0.835</div>
                <div className="mt-3 text-xs tracking-[0.2em] uppercase text-white/50">{c.evidence.aucLabel}</div>
                <div className="mt-2 text-xs font-light text-white/35">{c.evidence.ci}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <EvidenceDistribution />
            </motion.div>
          </div>
        </div>
      </section>

      <EcosystemSection />








      <Footer />
    </div>
  );
};

export default HomepageCopy;
