import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/thesis"
                className="text-sm text-white/70 hover:text-white bg-black/50 border border-white/20 hover:border-white/40 px-6 py-3 rounded transition-all duration-300 uppercase tracking-[0.15em] text-center backdrop-blur-sm"
              >
                {t('home.cta.thesis')}
              </Link>
              <a
                href="https://terminal.amai.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white bg-black/50 border border-white/20 hover:border-white/40 px-6 py-3 rounded transition-all duration-300 uppercase tracking-[0.15em] text-center backdrop-blur-sm"
              >
                ACCESS THE BUREAU
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature card section */}
      <section className="relative bg-perspective-grid py-16 md:py-24 px-4 md:px-8">
        {/* Fade from black at top into the normal grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] min-h-[520px] md:min-h-[640px] flex items-center justify-center">
            {/* Glass sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
            <div className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(166,252,252,0.08),transparent_50%)]" />

            {/* Content placeholder */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-16 text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">Placeholder</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
                  Primary Action
                </button>
                <button className="bg-white/5 text-white border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm">
                  Secondary Action
                </button>
              </div>
            </div>
          </div>
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
