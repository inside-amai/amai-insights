import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";
import homeFallbackBg from "@/assets/home-fallback-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Footer } from "@/components/Footer";
import { HomeThesis } from "@/components/HomeThesis";


const Home = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const isMobile = useIsMobile();

  const [scrolled, setScrolled] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [navWidth, setNavWidth] = useState(0);
  const [lastWidth, setLastWidth] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);
  const lastItemRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current && lastItemRef.current) {
        setNavWidth(trackRef.current.scrollWidth);
        setLastWidth(lastItemRef.current.offsetWidth);
        setNavReady(true);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <div className="bg-black" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero section — full viewport */}
      <div className="h-svh md:h-screen flex flex-col">
        {/* Black header spacer to prevent background bleed */}
        <div className="h-16 bg-black flex-shrink-0" />
        
        {/* Main content with background */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          {/* Fallback background image — slow breathing zoom toward center */}
          <motion.img
            src={homeFallbackBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            {/* AMAI Logo */}
            <motion.img
              src={amaiLogo}
              alt="AMAI Labs"
              className="h-12 md:h-20 w-auto mx-auto mb-8 md:mb-10 brightness-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />


            {/* Body Text */}
            <motion.div
              className="mb-8 md:mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed tracking-wide whitespace-pre-line">
                {t('home.body')}
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-10 md:mt-14 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50 font-light">
                Scroll
              </span>
              <div className="relative w-8 h-14 flex items-center justify-center">
                {/* Animated track */}
                <div className="absolute inset-x-3 top-1 bottom-1 rounded-full border border-white/15" />
                {/* Floating orb */}
                <motion.div
                  className="absolute w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  animate={{ y: [-12, 12, -12] }}
                  transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
                />
                {/* Decorative symbols */}
                <motion.span
                  className="absolute -top-4 -left-5 text-white/25 text-xs"
                  animate={{ opacity: [0.25, 0.55, 0.25], rotate: [0, 12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  ✦
                </motion.span>
                <motion.span
                  className="absolute -bottom-3 -right-5 text-white/25 text-xs"
                  animate={{ opacity: [0.25, 0.5, 0.25], rotate: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  ◇
                </motion.span>
                <motion.span
                  className="absolute -top-2 -right-4 text-white/20 text-[10px]"
                  animate={{ opacity: [0.2, 0.45, 0.2], y: [0, 4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  +
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature card section */}
      <section className="relative bg-perspective-grid py-16 md:py-24 px-4 md:px-8">
        {/* Fade from black at top into the normal grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
        <div className="max-w-[95vw] mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
            {/* Glass sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
            <div className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(166,252,252,0.08),transparent_50%)]" />

            {/* Center content: zoom-out on scroll into view */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center max-w-5xl mx-auto"
              initial={{ scale: 0.55, opacity: 0, filter: "blur(12px)" }}
              whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
                A credit score for AI agents.
              </h2>
              <p className="mt-8 md:mt-10 text-lg md:text-2xl lg:text-3xl font-light text-white/80 leading-snug max-w-4xl">
                AMAI reads how an agent behaves, every tool it calls &amp; every boundary it crosses, telling you which ones to trust without ever touching your data.
              </p>

              {/* Pill nav strip */}
              <motion.nav
                className="mt-16 md:mt-24"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ul className="flex items-center gap-1 md:gap-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-2 py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)]">
                  {["Score", "Risk", "Methodology", "Bureau", "Coverage", "Research", "Docs"].map((label) => (
                    <li key={label}>
                      <button
                        type="button"
                        className="px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-light tracking-wide text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-300 whitespace-nowrap"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                  <li aria-hidden="true">
                    <span className="hidden md:inline-flex px-3 py-2 text-white/40 text-sm">›</span>
                  </li>
                </ul>
              </motion.nav>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Placeholder actions section */}
      <section className="relative bg-perspective-grid py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-3 justify-center relative z-10">
          <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
            Primary Action
          </button>
          <button className="bg-white/5 text-white border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm">
            Secondary Action
          </button>
        </div>
      </section>

      {/* Long-form thesis below hero */}
      <HomeThesis />

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
};

export default Home;
