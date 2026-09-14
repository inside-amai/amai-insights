import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Download, RefreshCw, Send, TrendingUp, SlidersHorizontal, Pause } from "lucide-react";
import amaiLogo from "@/assets/amai-logo-tm.png";
import homeFallbackBg from "@/assets/home-fallback-bg.jpg";
import amaiPoolGraphic from "@/assets/channel_amai.svg.asset.json";
import { useLanguage } from "@/contexts/LanguageContext";
import { pickHome } from "@/i18n/pageContent";

import { Footer } from "@/components/Footer";
import { TariGauge } from "@/components/TariGauge";
import { EvidenceDistribution } from "@/components/EvidenceDistribution";
import { EcosystemSection } from "@/components/EcosystemSection";

const TICKERS = ["TSLA", "AMZN", "PLTR", "NFLX", "AMD"];

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
  const c = pickHome(language);
  const isRtl = language === 'ar';

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
    <div className="bg-black" dir={isRtl ? 'rtl' : 'ltr'}>
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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] z-[1] bg-[radial-gradient(ellipse_at_50%_100%,rgba(21,120,84,0.22)_0%,transparent_60%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] z-[1] bg-[radial-gradient(ellipse_at_50%_0%,rgba(21,120,84,0.22)_0%,transparent_60%)]" />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <div className="h-12 md:h-20" aria-hidden="true" />

            <motion.img
              src={amaiLogo}
              alt="AMAI Labs"
              className="h-12 md:h-20 w-auto mx-auto mb-8 md:mb-10 brightness-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.h1
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-white/90 font-medium whitespace-normal sm:whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Agents work. You get paid.
            </motion.h1>

            <motion.p
              className="mt-4 md:mt-5 mx-auto max-w-[640px] text-base sm:text-lg md:text-xl leading-relaxed text-white/55 font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Agent operated pools that collect trading fees and distribute a share to holders in Stock Tokens.
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
      <section id="score" className="relative bg-perspective-grid py-24 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-start">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">Agent-operated pools.</span>
              <h2 className="mt-6 md:mt-8 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-white/90 font-medium">
                <span className="block">Liquidity Pools.</span>
                <span className="block mt-1 md:mt-2">Now managed by Agents.</span>
              </h2>
              <p className="mt-8 md:mt-10 text-base md:text-lg font-light text-white/65 leading-relaxed max-w-[54ch]">
                AMAI gives liquidity pools an operator.<br /><br />
                An AI agent that manages trading fees and distributes a share to token holders in Stock Tokens.
              </p>
              <motion.figure
                className="mt-10 md:mt-14 w-full max-w-[680px] lg:-ml-10"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={amaiPoolGraphic.url}
                  alt="Conceptual AMAI liquidity pool with an illuminated fee channel"
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </motion.figure>
            </motion.div>

            <motion.div
              className="lg:col-span-6 lg:col-start-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-[130px_1fr] md:grid-cols-[170px_1fr] gap-x-6 pb-3 border-b border-white/15">
                <span className="text-[11px] tracking-[0.2em] font-medium text-[#CEFFC9]/80 uppercase">Job</span>
                <span className="text-[11px] tracking-[0.2em] font-medium text-[#CEFFC9]/80 uppercase">AMAI Operator Agent</span>
              </div>
{([
                [Download, "Collect", "Collect the swap fees the pool’s position has earned."],
                [RefreshCw, "Convert", "Swap fees into the tokenized stocks. NVDA, TSLA and more."],
                [Send, "Pay", "Distribute the holders' share to their wallets."],
                [TrendingUp, "Lend idle", "Put idle treasury to work within defined limits."],
                [SlidersHorizontal, "Rebalance", "Adjust the liquidity range as conditions change."],
                [Pause, "Sit out", "Pause collections around specified market events."],
              ] as const).map(([Icon, job, desc]) => (
                <div
                  key={job}
                  className="group relative grid grid-cols-[130px_1fr] md:grid-cols-[170px_1fr] gap-x-6 py-5 md:py-6 transition-colors duration-[250ms] hover:bg-cyan-accent/[0.04]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent group-hover:from-cyan-accent/40 group-hover:via-cyan-accent/20 group-hover:to-transparent transition-all duration-[250ms]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent pointer-events-none" />
                  <div className="relative flex items-center gap-3 text-sm md:text-base font-normal text-white/90 whitespace-nowrap">
                    <Icon className="w-4 h-4 text-[#B4F6AD] group-hover:text-[#B4F6AD] transition-colors duration-[250ms]" strokeWidth={1.5} />
                    {job}
                  </div>
                  <p className="relative text-sm md:text-base font-light text-white/60 leading-relaxed">{desc}</p>
                </div>
              ))}
              <div className="mt-10 md:mt-12 pl-4 md:pl-5 border-l border-[#157854]">
                <span className="text-[11px] tracking-[0.3em] font-light text-white/50 uppercase">Denied Permissions</span>
                <p className="mt-3 text-sm md:text-base font-light text-white/70 leading-relaxed">
                  The operator cannot withdraw the pool’s principal.<br />
                  It cannot expand its own permissions.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Feature card */}
      <section className="relative bg-perspective-grid pt-4 md:pt-8 pb-16 md:pb-24 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
        <div className="max-w-[95vw] mx-auto relative z-10">
          <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(21,120,84,0.14),transparent_55%)] blur-2xl opacity-70" />
          <div className="relative overflow-hidden rounded-3xl border border-[#3D896D]/20 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_60px_-20px_rgba(21,120,84,0.15)] min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#157854]/[0.05] via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#3D896D]/[0.08] to-transparent" />
            <div className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(21,120,84,0.10),transparent_50%)]" />

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
                  TRUST & RISK INDEX
                  <span className="h-px w-8 bg-[#3D896D]/60" />
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05]">
                Backed By TARI™.
              </h2>
              <p className="mt-5 md:mt-6 text-lg md:text-xl lg:text-2xl font-light text-white/80 leading-snug max-w-4xl">
                A credit score built from onchain history and observed agent behavior.
              </p>
              <div className="mt-5 md:mt-6">
                <a href="/tari" className="inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/60 pb-1">
                  How it works<span aria-hidden>{isRtl ? '←' : '→'}</span>
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
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-14 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs tracking-[0.35em] uppercase text-white/50">THE EVIDENCE</span>
              <h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.08]">
                Compromise leaves a pattern.
              </h2>
              <p className="mt-6 text-base md:text-lg font-light text-white/60 leading-relaxed max-w-xl">
                Across 726 benchmark runs, compromised agents tended to score lower. TARI measured the difference using tool-call metadata alone.
              </p>
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="text-5xl md:text-6xl font-mono font-light tracking-tight text-cyan-accent tabular-nums">0.835</div>
                <div className="mt-3 text-xs tracking-[0.2em] uppercase text-white/50">AUC · Benchmark discrimination</div>
                <div className="mt-2 text-xs font-light text-white/35">95% confidence interval: 0.805–0.864</div>
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








      {/* HOLD THE TOKEN / ticker section */}
      <section className="relative bg-perspective-grid min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-medium tracking-tight text-white leading-[1.05] text-[clamp(2.75rem,11vw,10rem)]">
            Hold the token.
            <br />
            Get paid in
            <br />
            <TickerRoll /><span className="text-white">.</span>
          </h2>
        </motion.div>
        <div className="absolute bottom-8 inset-x-0 z-10 flex justify-center">
          <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">
            Stock tokens on Robinhood Chain
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomepageCopy;
