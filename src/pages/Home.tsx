import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import amaiLogo from "@/assets/amai-logo-tm.png";
import homeBg from "@/assets/home-grid-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";


const Home = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const isMobile = useIsMobile();

  return (
    <div className="min-h-svh md:min-h-screen flex flex-col bg-black" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Black header spacer to prevent background bleed */}
      <div className="h-16 bg-black flex-shrink-0" />
      
      {/* Main content with background */}
      <div 
        className="flex-1 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: isMobile ? '100% 100%' : '110%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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

          {/* Headline */}
          <motion.p
            className="text-base md:text-lg text-white/70 font-light leading-relaxed tracking-wide mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('home.headline')}
          </motion.p>

          {/* Body Text */}
          <motion.div
            className="mb-8 md:mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed tracking-wide">
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
            <Link
              to="/system-architecture"
              className="text-sm text-white/70 hover:text-white bg-black/50 border border-white/20 hover:border-white/40 px-6 py-3 rounded transition-all duration-300 uppercase tracking-[0.15em] text-center backdrop-blur-sm"
            >
              {t('home.cta.architecture')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer - compact version for this page only */}
      <footer className="py-6 bg-black border-t border-white/10">
        <div className="text-center space-y-1">
          <p className="text-muted-foreground text-sm font-light tracking-wide">
            {t('footer.company')}
          </p>
          <p className="text-muted-foreground/60 text-[10px] font-light tracking-wide">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
