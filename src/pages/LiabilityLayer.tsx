import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";
import terminalPreview1 from "@/assets/terminal-preview-1.png";
import terminalPreview2 from "@/assets/terminal-preview-2.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { X, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  slideNumber?: number;
  totalSlides?: number;
  hideGrid?: boolean;
  isRTL?: boolean;
  footerText?: string;
}

const Slide = ({ children, className = "", align = "center", slideNumber, totalSlides = 12, hideGrid = false, isRTL = false, footerText = "AMAI Protocol v2.0 — The Liability Layer" }: SlideProps) => {
  return (
    <section 
      className={`relative min-h-svh md:min-h-screen w-full flex items-center overflow-x-hidden py-16 md:py-0 ${
        align === "left" ? "justify-start" : "justify-center"
      } ${className}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Grid background */}
      {!hideGrid && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      )}
      
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 pb-20 md:pb-16 ${
        align === "left" ? "" : ""
      }`}>
        {children}
      </div>
      
      {/* Page number */}
      {slideNumber && (
        <div className={`absolute bottom-4 md:bottom-10 ${isRTL ? 'left-4 md:left-12' : 'right-4 md:right-12'} text-[10px] tracking-[0.2em] text-white/50 font-medium`}>
          {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      )}
      
      {/* Footer branding */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium text-center whitespace-nowrap">
        {footerText}
      </div>
    </section>
  );
};

// Self-contained copy button that manages its own state
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('team@amai.net').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-all"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const SlideDivider = () => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-6xl px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="h-px bg-white/10" />
    </div>
  </div>
);

const LiabilityLayer = () => {
  const isMobile = useIsMobile();
  // Only use useScroll on desktop to avoid performance issues on mobile
  const { scrollYProgress } = useScroll();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mobile-optimized animation props helper
  // On mobile: opacity-only fades with shorter durations
  // On desktop: full y-transform animations with viewport margins
  const getAnimationProps = (delay: number = 0) => ({
    initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 20 },
    whileInView: isMobile ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.3 : 0.8, delay: isMobile ? delay * 0.5 : delay },
    viewport: { once: true, margin: isMobile ? "0px" : "-100px" }
  });

  const getContainerAnimationProps = () => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: isMobile ? 0.4 : 1 },
    viewport: { once: true, margin: "0px" }
  });

  const getHeroAnimationProps = (delay: number = 0) => ({
    initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: isMobile ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.4 : 0.8, delay: isMobile ? delay * 0.5 : delay }
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className={`bg-black min-h-svh md:min-h-screen overflow-x-hidden ${isMobile ? 'overscroll-y-contain touch-pan-y' : ''}`} dir={isRTL ? "rtl" : "ltr"}>
        {/* Progress bar - hidden on mobile to reduce scroll jank */}
        {!isMobile && (
          <motion.div
            className="fixed bottom-0 left-0 h-[3px] bg-white/30 origin-left z-50"
            style={{ scaleX: scrollYProgress, width: '100%' }}
          />
        )}

        {/* Slide 1: The Thesis */}
        <Slide align="left" slideNumber={1} isRTL={isRTL} footerText={t('liability.footer')} className="pt-20 md:pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.4 : 1.2 }}
            className="max-w-4xl"
          >
            {/* Logo */}
            <motion.img
              src={amaiLogo}
              alt="AMAI Labs"
              className="h-12 md:h-16 lg:h-20 xl:h-22 w-auto brightness-110 mt-8 md:mt-0 mb-12 md:mb-24"
              initial={isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
              animate={isMobile ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.1 : 0.2 }}
            />
            
            {/* Micro-label */}
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6"
              {...getHeroAnimationProps(0.4)}
            >
              {t('liability.slide1.label')}
            </motion.p>
            
            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-10 leading-[1.1]"
              {...getHeroAnimationProps(0.6)}
            >
              <span className="font-light">{t('liability.slide1.headline1')}</span>
              <br />
              <span className="font-light">{t('liability.slide1.headline2')}</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mb-8"
              {...getHeroAnimationProps(0.8)}
            >
              {t('liability.slide1.subheadline')}
            </motion.p>
            
            {/* The Hook */}
            <motion.p
              className="text-lg md:text-xl text-white/70 font-normal leading-relaxed"
              {...getHeroAnimationProps(1.0)}
            >
              {t('liability.slide1.hook')}
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 2: The World-Class Problem */}
        <Slide align="left" slideNumber={2} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-3xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              {t('liability.slide2.label')}
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              {t('liability.slide2.headline')}
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10"
              {...getAnimationProps(0.4)}
            >
              {t('liability.slide2.intro')}
            </motion.p>
            
            <motion.div
              className="space-y-6 mb-10"
              {...getAnimationProps(0.5)}
            >
              <div>
                <p className="text-base text-white/80 font-medium mb-2">{t('liability.slide2.risk1.title')}</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  {t('liability.slide2.risk1.desc')}
                </p>
              </div>
              <div>
                <p className="text-base text-white/80 font-medium mb-2">{t('liability.slide2.risk2.title')}</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  {t('liability.slide2.risk2.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg text-white/70 font-normal leading-relaxed"
              {...getAnimationProps(0.6)}
            >
              {t('liability.slide2.closing')}
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 3: The Solution */}
        <Slide align="left" slideNumber={3} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-3xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              {t('liability.slide3.label')}
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              {t('liability.slide3.headline')}
            </motion.h2>
            
            <motion.div
              className="space-y-6 mb-10"
              {...getAnimationProps(0.5)}
            >
              <div>
                <p className="text-base text-white/80 font-medium mb-2">{t('liability.slide3.shift.title')}</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  {t('liability.slide3.shift.desc')}
                </p>
              </div>
              <div>
                <p className="text-base text-white/80 font-medium mb-2">{t('liability.slide3.mechanism.title')}</p>
                <div className="space-y-4 mt-3">
                  <div className={`${isRTL ? 'border-r border-white/10 pr-4' : 'border-l border-white/10 pl-4'}`}>
                    <p className="text-sm text-white/70 font-medium mb-1">{t('liability.slide3.mechanism.reputation.title')}</p>
                    <p className="text-base text-white/50 font-light leading-relaxed">
                      {t('liability.slide3.mechanism.reputation.desc')}
                    </p>
                  </div>
                  <div className={`${isRTL ? 'border-r border-white/10 pr-4' : 'border-l border-white/10 pl-4'}`}>
                    <p className="text-sm text-white/70 font-medium mb-1">{t('liability.slide3.mechanism.enforcement.title')}</p>
                    <p className="text-base text-white/50 font-light leading-relaxed">
                      {t('liability.slide3.mechanism.enforcement.desc')}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-base text-white/80 font-medium mb-2">{t('liability.slide3.result.title')}</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  {t('liability.slide3.result.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg text-white/70 font-normal leading-relaxed"
              {...getAnimationProps(0.6)}
            >
              {t('liability.slide3.closing')}
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 4: The Architecture */}
        <Slide align="left" slideNumber={4} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-4xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              {t('liability.slide4.label')}
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              {t('liability.slide4.headline')}
            </motion.h2>
            
            <motion.p
              className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-12"
              {...getAnimationProps(0.5)}
            >
              {t('liability.slide4.intro')}
            </motion.p>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16"
              {...getAnimationProps(0.6)}
            >
              <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
                <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('liability.slide4.bond.title')}</p>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {t('liability.slide4.bond.desc')}
                </p>
              </div>
              
              <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
                <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('liability.slide4.float.title')}</p>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {t('liability.slide4.float.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg text-white/70 font-normal leading-relaxed"
              {...getAnimationProps(0.8)}
            >
              {t('liability.slide4.closing')}
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 5: The Economic Loop */}
        <Slide slideNumber={5} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              {t('liability.slide5.label')}
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-16 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              {t('liability.slide5.headline')}
            </motion.h2>
            
            {/* Diagram */}
            <motion.div
              className="relative mb-8 md:mb-16 px-4 md:px-0"
              {...getAnimationProps(0.5)}
            >
              <div className={`flex items-center justify-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] text-white/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {[
                  t('liability.slide5.step.identity'),
                  t('liability.slide5.step.reputation'),
                  t('liability.slide5.step.capital'),
                  t('liability.slide5.step.execution'),
                  t('liability.slide5.step.settlement')
                ].map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <span className="px-2 md:px-3 py-1 md:py-1.5 border border-white/20 rounded bg-black whitespace-nowrap">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-white/30 text-[8px] md:text-xs">{isRTL ? '←' : '→'}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* SVG loop-back path */}
              <svg 
                className="w-full h-8 mt-1" 
                viewBox="0 0 480 32" 
                preserveAspectRatio="xMidYMid meet"
                fill="none"
              >
                {/* Curved U-path from Settlement back to Trust */}
                <path 
                  d={isRTL 
                    ? "M 72 0 L 72 18 Q 72 24 78 24 L 398 24 Q 404 24 404 18 L 404 0"
                    : "M 404 0 L 404 18 Q 404 24 398 24 L 78 24 Q 72 24 72 18 L 72 0"
                  }
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />
                
                {/* Vertical arrow under Settlement (pointing down) */}
                {isRTL ? (
                  <polygon points="72,5 69,0 75,0" fill="rgba(255,255,255,0.25)" />
                ) : (
                  <polygon points="404,5 401,0 407,0" fill="rgba(255,255,255,0.25)" />
                )}
                
                {/* Vertical arrow into Trust (pointing up) */}
                {isRTL ? (
                  <polygon points="404,0 401,5 407,5" fill="rgba(255,255,255,0.25)" />
                ) : (
                  <polygon points="72,0 69,5 75,5" fill="rgba(255,255,255,0.25)" />
                )}
                
                {/* Arrow markers along the bottom path */}
                {isRTL ? (
                  <>
                    <polygon points="160,21 166,24 160,27" fill="rgba(255,255,255,0.25)" />
                    <polygon points="240,21 246,24 240,27" fill="rgba(255,255,255,0.25)" />
                    <polygon points="320,21 326,24 320,27" fill="rgba(255,255,255,0.25)" />
                  </>
                ) : (
                  <>
                    <polygon points="320,21 314,24 320,27" fill="rgba(255,255,255,0.25)" />
                    <polygon points="240,21 234,24 240,27" fill="rgba(255,255,255,0.25)" />
                    <polygon points="160,21 154,24 160,27" fill="rgba(255,255,255,0.25)" />
                  </>
                )}
              </svg>
            </motion.div>
            
            {/* Explanatory text */}
            <motion.div
              className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-2xl mx-auto space-y-1"
              {...getAnimationProps(0.6)}
            >
              <p>{t('liability.slide5.flow1')}</p>
              <p>{t('liability.slide5.flow2')}</p>
              <p>{t('liability.slide5.flow3')}</p>
              <p>{t('liability.slide5.flow4')}</p>
              <p>{t('liability.slide5.flow5')}</p>
            </motion.div>
            
            <motion.p
              className="mt-10 text-lg text-white/70 font-normal leading-relaxed"
              {...getAnimationProps(0.8)}
            >
              {t('liability.slide5.closing')}
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 6: The Market */}
        <Slide align="left" slideNumber={6} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-3xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              {t('liability.slide6.label')}
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              {t('liability.slide6.headline')}
            </motion.h2>
            
            <motion.p
              className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-6 md:mb-10"
              {...getAnimationProps(0.5)}
            >
              {t('liability.slide6.intro')}
            </motion.p>
            
            <motion.div
              className="space-y-5 mb-12"
              {...getAnimationProps(0.6)}
            >
              <div className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">{t('liability.slide6.market1.title')}</span> {t('liability.slide6.market1.desc')}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">{t('liability.slide6.market2.title')}</span> {t('liability.slide6.market2.desc')}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">{t('liability.slide6.market3.title')}</span> {t('liability.slide6.market3.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg text-white/70 font-normal leading-relaxed"
              {...getAnimationProps(0.7)}
            >
              {t('liability.slide6.closing')}
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 7: The Token */}
        <Slide align="left" slideNumber={7} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-3xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              {t('liability.slide7.label')}
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              {t('liability.slide7.headline')}
            </motion.h2>
            
            <motion.p
              className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-12"
              {...getAnimationProps(0.5)}
            >
              {t('liability.slide7.intro')}
            </motion.p>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-16"
              {...getAnimationProps(0.6)}
            >
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-3">{t('liability.slide7.reputation.title')}</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  {t('liability.slide7.reputation.desc')}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-3">{t('liability.slide7.capital.title')}</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  {t('liability.slide7.capital.desc')}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-3">{t('liability.slide7.execution.title')}</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  {t('liability.slide7.execution.desc')}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium mb-3">{t('liability.slide7.trust.title')}</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  {t('liability.slide7.trust.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-base md:text-lg text-white/50 font-light leading-relaxed"
              {...getAnimationProps(0.7)}
            >
              {t('liability.slide7.closing')}
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 8: The Moat (Competition) */}
        <Slide align="left" slideNumber={8} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-3xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              {t('liability.slide8.label')}
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              {t('liability.slide8.headline')}
            </motion.h2>
            
            <motion.p
              className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-6 md:mb-10"
              {...getAnimationProps(0.5)}
            >
              {t('liability.slide8.intro')}
            </motion.p>
            
            <motion.div
              className="space-y-3 mb-12"
              {...getAnimationProps(0.6)}
            >
              <div className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">{t('liability.slide8.compute.title')}</span> {t('liability.slide8.compute.desc')}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">{t('liability.slide8.orchestration.title')}</span> {t('liability.slide8.orchestration.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8"
              {...getAnimationProps(0.7)}
            >
              {t('liability.slide8.moat')}
            </motion.p>
            
            <motion.p
              className="text-lg text-white/70 font-normal leading-relaxed"
              {...getAnimationProps(0.8)}
            >
              {t('liability.slide8.closing')}
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 9: The Product */}
        <Slide align="left" slideNumber={9} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-3xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              09 // THE PRODUCT
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              The Sovereign Terminal.
            </motion.h2>
            
            {/* Product Screenshots */}
            <motion.div
              className="mb-8 md:mb-12"
              {...getAnimationProps(0.5)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Terminal 1 */}
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 bg-black"
                  onClick={() => setExpandedImage(terminalPreview1)}
                >
                  <img 
                    src={terminalPreview1} 
                    alt="Sovereign Terminal Preview" 
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                
                {/* Terminal 2 */}
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 bg-black"
                  onClick={() => setExpandedImage(terminalPreview2)}
                >
                  <img 
                    src={terminalPreview2} 
                    alt="Sovereign Terminal Preview" 
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
              
              {/* Click to expand hint */}
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] text-center mt-4">
                Click to expand
              </p>
            </motion.div>
            
            <motion.div
              className="space-y-6 mb-10"
              {...getAnimationProps(0.6)}
            >
              <div>
                <p className="text-base text-white/80 font-medium mb-2">Fiduciary Oversight</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  Chat interfaces are for prompts; this is for solvency. We provide a real-time view of agent liability, bond health, and collateral maintenance.
                </p>
              </div>
              <div>
                <p className="text-base text-white/80 font-medium mb-2">The Solvency Engine</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  Monitor Health Factors (H<sub>f</sub>) and liquidation thresholds instantly. If an agent's collateral ratio drops, you see it before the slash occurs.
                </p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg text-white/70 font-normal leading-relaxed"
              {...getAnimationProps(0.8)}
            >
              Operational Architecture. Not a mockup. The identity primitives and risk logic are fully functional.
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 10: Risk Management */}
        <Slide align="left" slideNumber={10} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-3xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              10 // RISK MANAGEMENT
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              Volatility as a Feature.
            </motion.h2>
            
            <motion.p
              className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-6 md:mb-10"
              {...getAnimationProps(0.5)}
            >
              How does AMAI survive a market crash?
            </motion.p>
            
            <motion.div
              className="space-y-5 mb-12"
              {...getAnimationProps(0.6)}
            >
              <div className="flex items-start gap-4">
                <span className="text-white/30 text-sm font-medium mt-0.5 w-4">1.</span>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">The 30:70 Anchor:</span> By forcing agents to hold 70% USDC, the bond remains solvent.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-white/30 text-sm font-medium mt-0.5 w-4">2.</span>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">Instant Liquidation:</span> The "Health Factor" logic works faster than humans. If collateral dips, the protocol liquidates before the debt becomes bad.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-white/30 text-sm font-medium mt-0.5 w-4">3.</span>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">The Circuit Breaker:</span> At H<sub>f</sub>&lt;1.0, keys are revoked instantly. No human meeting required.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 11: The Vision */}
        <Slide align="left" slideNumber={11} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            {...getContainerAnimationProps()}
            className="max-w-3xl"
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
              {...getAnimationProps(0.2)}
            >
              11 // THE VISION
            </motion.p>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
              {...getAnimationProps(0.3)}
            >
              Making Intelligence Pay for Itself.
            </motion.h2>
            
            <motion.div
              className="space-y-6 mb-10"
              {...getAnimationProps(0.5)}
            >
              <div>
                <p className="text-base text-white/80 font-medium mb-2">The End State:</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  A global network of "Self-Funding Intelligence."
                </p>
              </div>
              <div>
                <p className="text-base text-white/80 font-medium mb-2">The Shift:</p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  Agents stop being a cost center (burning API credits) and start being a profit center (earning yield on their own bond).
                </p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg text-white/70 font-normal leading-relaxed"
              {...getAnimationProps(0.6)}
            >
              We are building the banking rails for the first generation of non-human billionaires.
            </motion.p>
          </motion.div>
        </Slide>

        <SlideDivider />

        {/* Slide 12: Final Slide */}
        <Slide slideNumber={12} isRTL={isRTL} footerText={t('liability.footer')}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.4 : 1.2 }}
            viewport={{ once: true, margin: "0px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-10 md:mb-16 leading-[1.1]"
              {...getAnimationProps(0.3)}
            >
              Infrastructure Precedes Autonomy.
            </motion.h2>
            
            <motion.div 
              className="mb-10 md:mb-16" 
              {...getAnimationProps(0.6)}
            >
              <div className="flex items-center justify-center gap-3 md:gap-5">
                {['Accountability', 'Trust', 'Transparency'].map((word, i) => (
                  <motion.span
                    key={word}
                    className="text-sm md:text-base tracking-[0.2em] uppercase text-white/50 font-light"
                    initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.35 + i * 0.08 : 0.7 + i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <motion.p 
                className="mt-6 text-xl md:text-2xl text-white/70 font-medium"
                initial={isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                whileInView={isMobile ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.6 : 1.2 }}
                viewport={{ once: true }}
              >
                That is AMAI.
              </motion.p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              {...getAnimationProps(0.8)}
            >
              <a
                href="https://youtu.be/qLEnRNELErg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 border border-white/30 rounded text-xs tracking-[0.15em] uppercase text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                System Demo
              </a>
              <a
                href="/system-architecture"
                className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300"
              >
                {t('liability.slide12.cta1')} <span>→</span>
              </a>
              <a
                href="mailto:team@amai.net?subject=Mission%20Briefing%20%2F%2F%20%5BOrganization%20Name%5D&body=To%20the%20AMAI%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20the%20%5BThesis%20%2F%20Architecture%5D.%0A%0AName%3A%20%0AOrganization%3A%20%0AIntent%3A%20"
                onClick={() => {
                  setTimeout(() => {
                    toast({
                      title: "Email not opening?",
                      description: (
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-white/80">Reach us at team@amai.net</span>
                          <CopyEmailButton />
                        </div>
                      ),
                    });
                  }, 500);
                }}
                className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        </Slide>

        {/* Image Expand Modal */}
        <AnimatePresence>
          {expandedImage && (
            <motion.div
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop */}
              <motion.div 
                className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                onClick={() => setExpandedImage(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              
              {/* Image Container */}
              <motion.div
                className="relative z-10 max-w-[95vw] max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={expandedImage} 
                  alt="Expanded terminal view" 
                  className="max-w-full max-h-[85vh] object-contain rounded-lg border border-white/10"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setExpandedImage(null)}
                  className="absolute -top-12 right-0 md:top-4 md:right-4 flex items-center gap-2 px-3 py-1.5 bg-black/80 border border-white/20 rounded text-xs tracking-[0.1em] uppercase text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <Footer transparent />
      </div>
    </LazyMotion>
  );
};

export default LiabilityLayer;
