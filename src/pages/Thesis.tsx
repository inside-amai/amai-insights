import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-hero-new.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import TetherPartnershipVisualization from "@/components/TetherPartnershipVisualization";
import ThesisPdfLayout from "@/components/ThesisPdfLayout";
import { usePdfDownload } from "@/hooks/usePdfDownload";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  slideNumber?: number;
  totalSlides?: number;
  isRTL?: boolean;
}

const Slide = ({ children, className = "", align = "center", slideNumber, totalSlides = 12, isRTL = false, hideGrid = false }: SlideProps & { hideGrid?: boolean }) => {
  const { t } = useLanguage();
  
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
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium text-center max-w-[200px] md:max-w-none">
        {t('tether.footer')}
      </div>
    </section>
  );
};

const SlideDivider = () => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-6xl px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="h-px bg-white/10" />
    </div>
  </div>
);

const Thesis = () => {
  const { scrollYProgress } = useScroll();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const isMobile = useIsMobile();
  const { pdfLayoutRef, downloadPdf, isGenerating } = usePdfDownload();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDownloadPdf = () => {
    downloadPdf({ filename: 'amai-thesis.pdf', margin: 0 });
  };

  return (
    <div className="bg-black min-h-svh md:min-h-screen overflow-x-hidden overscroll-y-contain touch-pan-y" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hidden PDF Layout for download */}
      <ThesisPdfLayout ref={pdfLayoutRef} />
      {/* Progress bar - hidden on mobile to reduce scroll jank */}
      {!isMobile && (
        <motion.div
          className="fixed bottom-0 left-0 h-[3px] bg-white/30 origin-left z-50"
          style={{ scaleX: scrollYProgress, width: '100%' }}
        />
      )}
      {/* Slide 1: Title */}
      <Slide align="left" slideNumber={1} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl relative z-10"
        >
          {/* Logo */}
          <motion.img
            src={amaiLogo}
            alt="AMAI Labs"
            className="h-10 md:h-20 w-auto brightness-110 mt-8 md:mt-0 mb-12 md:mb-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('thesis.slide1.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 md:mb-10 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('thesis.slide1.headline1')}<br />
            {t('thesis.slide1.headline2')}
          </motion.h1>
          
          {/* Subheadline */}
          <motion.div
            className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mb-10 md:mb-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>{t('thesis.slide1.subheadline1')}</p>
            <p>{t('thesis.slide1.subheadline2')}</p>
          </motion.div>
          
          {/* CTAs */}
          <motion.div
            className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="#slide-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('slide-2')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-white/70 hover:text-white bg-black border border-white/20 hover:border-white/40 px-6 py-3 rounded transition-all duration-300 uppercase tracking-[0.15em] text-center"
            >
              {t('thesis.slide1.cta1')}
            </a>
            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="text-sm text-white/50 hover:text-white/70 px-6 py-3 transition-all duration-300 uppercase tracking-[0.15em] text-center disabled:opacity-50 disabled:cursor-wait"
            >
              {isGenerating ? 'Generating...' : t('thesis.slide1.cta2')}
            </button>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 2: The Infrastructure Gap */}
      <div id="slide-2">
        <Slide slideNumber={2} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide2.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tether.slide2.headline')}
          </motion.h2>
          
          {/* Intro paragraph */}
          <motion.p
            className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('tether.slide2.intro')}
          </motion.p>
          
          {/* Body copy - numbered points */}
          <motion.div
            className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'} max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Point 1 */}
            <div>
              <p className="text-base text-white/80 font-medium mb-2">
                {t('tether.slide2.point1.title')}
              </p>
              <p className="text-base text-white/60 font-light leading-relaxed">
                {t('tether.slide2.point1.body')}
              </p>
            </div>
            
            {/* Point 2 */}
            <div>
              <p className="text-base text-white/80 font-medium mb-2">
                {t('tether.slide2.point2.title')}
              </p>
              <p className="text-base text-white/60 font-light leading-relaxed">
                {t('tether.slide2.point2.body')}
              </p>
            </div>
            
            {/* Point 3 */}
            <div>
              <p className="text-base text-white/80 font-medium mb-2">
                {t('tether.slide2.point3.title')}
              </p>
              <p className="text-base text-white/60 font-light leading-relaxed">
                {t('tether.slide2.point3.body')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Slide>
      </div>

      <SlideDivider />

      {/* Slide 3: The Infrastructure Layer */}
      <Slide align="left" slideNumber={3} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-4xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide3.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tether.slide3.headline')}
          </motion.h2>
          
          {/* Body copy */}
          <motion.div
            className="space-y-4 text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>{t('tether.slide3.body1')}</p>
            <p>{t('tether.slide3.body2')}</p>
          </motion.div>
          
          {/* Four pillars */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('tether.slide3.pillar1.title')}</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {t('tether.slide3.pillar1.desc')}
              </p>
            </div>
            
            <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('tether.slide3.pillar2.title')}</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {t('tether.slide3.pillar2.desc')}
              </p>
            </div>
            
            <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('tether.slide3.pillar3.title')}</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {t('tether.slide3.pillar3.desc')}
              </p>
            </div>
            
            <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('tether.slide3.pillar4.title')}</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {t('tether.slide3.pillar4.desc')}
              </p>
            </div>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {t('tether.slide3.closing')}
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 4: The Economic Loop */}
      <Slide slideNumber={4} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="w-full max-w-4xl mx-auto text-center"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide4.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-16 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tether.slide4.headline')}
          </motion.h2>
          
          {/* Diagram - uses flex-nowrap to keep all items in single row (matches landing page) */}
          <motion.div
            className="relative mb-8 md:mb-16 px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Main flow row - no wrap, items stay in single row, scales down on mobile */}
            <div className={`flex items-center justify-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] text-white/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[
                t('tether.slide4.step.identity'),
                t('tether.slide4.step.reputation'),
                t('tether.slide4.step.capital'),
                t('tether.slide4.step.execution'),
                t('tether.slide4.step.settlement')
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>{t('tether.slide4.explanation1')}</p>
            <p>{t('tether.slide4.explanation2')}</p>
            <p>{t('tether.slide4.explanation3')}</p>
            <p>{t('tether.slide4.explanation4')}</p>
            <p>{t('tether.slide4.explanation5')}</p>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-10 text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {t('tether.slide4.closing')}
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 5: Autonomous Agent Swarms */}
      <Slide align="left" slideNumber={5} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide5.label')}
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tether.slide5.headline')}
          </motion.h2>
          
          <motion.div
            className="space-y-4 text-base text-white/50 font-light leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>{t('tether.slide5.body1')}</p>
            <div className="h-6 md:h-8" />
            <p className="text-white/70 font-normal">{t('tether.slide5.body2')}</p>
          </motion.div>
          
          <motion.div
            className="space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[t('tether.slide5.point1'), t('tether.slide5.point2'), t('tether.slide5.point3')].map((item, i) => {
              const colonIndex = item.indexOf(':');
              const title = colonIndex > -1 ? item.slice(0, colonIndex + 1) : '';
              const body = colonIndex > -1 ? item.slice(colonIndex + 1) : item;
              return (
                <div key={i} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-white/30 text-sm font-medium mt-0.5 w-4">{i + 1}.</span>
                  <p className="text-base text-white/50 font-light leading-relaxed">
                    {title && <span className="text-white/80 font-medium">{title}</span>}
                    {body}
                  </p>
                </div>
              );
            })}
          </motion.div>
          
          <motion.p
            className="mt-12 text-base text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {t('tether.slide5.closing')}
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 6: Initial Users */}
      <Slide align="left" slideNumber={6} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-3xl"
        >
          <motion.p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>{t('thesis.slide6.label')}</motion.p>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>{t('tether.slide6.headline')}</motion.h2>
          <motion.p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-6 md:mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>{t('tether.slide6.body')}</motion.p>
          <motion.div className="space-y-5 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
            {[t('tether.slide6.point1'), t('tether.slide6.point2'), t('tether.slide6.point3')].map((item, i) => {
              const colonIndex = item.indexOf(':');
              const title = colonIndex > -1 ? item.slice(0, colonIndex + 1) : '';
              const body = colonIndex > -1 ? item.slice(colonIndex + 1) : item;
              return (
                <div key={i} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-white/20 text-sm mt-0.5">—</span>
                  <p className="text-base text-white/50 font-light leading-relaxed">
                    {title && <span className="text-white/80 font-medium">{title}</span>}
                    {body}
                  </p>
                </div>
              );
            })}
          </motion.div>
          <motion.p className="text-lg text-white/70 font-normal leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }}>{t('tether.slide6.closing')}</motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 7: Token Model */}
      <Slide align="left" slideNumber={7} isRTL={isRTL}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, margin: "0px" }} className="max-w-3xl">
          <motion.p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>{t('thesis.slide7.label')}</motion.p>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>{t('tether.slide7.headline')}</motion.h2>
          <motion.div className="space-y-4 text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}><p>{t('tether.slide7.body')}</p></motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
            <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}><p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('tether.slide7.pillar1.title')}</p><p className="text-sm text-white/70 font-light leading-relaxed">{t('tether.slide7.pillar1.desc')}</p></div>
            <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}><p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('tether.slide7.pillar2.title')}</p><p className="text-sm text-white/70 font-light leading-relaxed">{t('tether.slide7.pillar2.desc')}</p></div>
            <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}><p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('tether.slide7.pillar3.title')}</p><p className="text-sm text-white/70 font-light leading-relaxed">{t('tether.slide7.pillar3.desc')}</p></div>
            <div className={`bg-black p-5 ${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}><p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('tether.slide7.pillar4.title')}</p><p className="text-sm text-white/70 font-light leading-relaxed">{t('tether.slide7.pillar4.desc')}</p></div>
          </motion.div>
          <motion.p className="text-base md:text-lg text-white/50 font-light leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }}>{t('tether.slide7.closing')}</motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 8: Strategic Synergy */}
      <Slide align="left" slideNumber={8} isRTL={isRTL}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, margin: "0px" }} className="max-w-3xl">
          <motion.p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>{t('thesis.slide8.label')}</motion.p>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>{t('thesis.slide8.headline')}</motion.h2>
          
          {/* Intro paragraph */}
          <motion.p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
            {t('thesis.slide8.intro')}
          </motion.p>
          
          {/* Sovereign Infrastructure */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} viewport={{ once: true }}>
            <p className="text-base text-white/70 font-medium mb-2">{t('thesis.slide8.sovereign.title')}</p>
            <p className="text-base text-white/50 font-light leading-relaxed">
              {t('thesis.slide8.sovereign.desc')}
            </p>
          </motion.div>
          
          {/* Economic Skin-in-the-Game */}
          <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
            <p className="text-base text-white/70 font-medium mb-2">{t('thesis.slide8.skin.title')}</p>
            <p className="text-base text-white/50 font-light leading-relaxed">
              {t('thesis.slide8.skin.desc')}
            </p>
          </motion.div>
          
          {/* The Resilience Loop */}
          <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} viewport={{ once: true }}>
            <p className="text-base text-white/70 font-medium mb-4">{t('thesis.slide8.loop.title')}</p>
            <div className="space-y-3">
              <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base text-white/50 font-light leading-relaxed"><span className="text-white/70">{t('thesis.slide8.loop.neutrality')}</span> {t('thesis.slide8.loop.neutrality.desc')}</p>
              </div>
              <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base text-white/50 font-light leading-relaxed"><span className="text-white/70">{t('thesis.slide8.loop.continuity')}</span> {t('thesis.slide8.loop.continuity.desc')}</p>
              </div>
              <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-base text-white/50 font-light leading-relaxed"><span className="text-white/70">{t('thesis.slide8.loop.scalability')}</span> {t('thesis.slide8.loop.scalability.desc')}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Closing statement */}
          <motion.p className="text-base md:text-lg text-white/70 font-normal leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }} viewport={{ once: true }}>
            {t('thesis.slide8.closing')}
          </motion.p>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 9: The Missing Layer */}
      <Slide align="left" slideNumber={9} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-4xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide9.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide9.headline')}
          </motion.h2>
          
          {/* Two-column layout */}
          <motion.div
            className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-16 ${isRTL ? 'md:grid-flow-dense' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Left column - wider (3/5) */}
            <div className={`md:col-span-3 ${isRTL ? 'md:col-start-3' : ''}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-4">{t('thesis.slide9.rails.title')}</p>
              <div className="space-y-3">
                {[
                  t('tether.slide9.tether.item1'),
                  t('tether.slide9.tether.item2'),
                  t('tether.slide9.tether.item3'),
                  t('tether.slide9.tether.item4')
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-white/20 text-sm mt-0.5">—</span>
                    <p className="text-base text-white/50 font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right column - narrower (2/5) */}
            <div className={`md:col-span-2 ${isRTL ? 'md:col-start-1' : ''}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-4">{t('tether.slide9.missing.title')}</p>
              <div className="space-y-3">
                {[
                  t('tether.slide9.missing.item1'),
                  t('tether.slide9.missing.item2'),
                  t('tether.slide9.missing.item3'),
                  t('tether.slide9.missing.item4')
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-white/20 text-sm mt-0.5">—</span>
                    <p className="text-base text-white/50 font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Full-width divider line */}
          <motion.div
            className="w-full h-px bg-white/10 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
          
          {/* Bottom full-width text */}
          <motion.p
            className="text-lg md:text-xl text-white/70 font-normal leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {t('tether.slide9.callout')}
          </motion.p>
          
          {/* Bottom callout - smaller text */}
          <motion.div
            className="text-base md:text-lg text-white/40 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p>{t('tether.slide9.callout2.line1')}</p>
            <p>{t('tether.slide9.callout2.line2')}</p>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 10: Risk Mitigation Layer */}
      <Slide align="left" slideNumber={10} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-4xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide10.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-16 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide10.headline')}
          </motion.h2>
          
          {/* Two-column risk/guardrail layout */}
          <motion.div
            className="space-y-8 md:space-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {isMobile ? (
              /* MOBILE: Paired card layout - each risk+guardrail grouped together */
              <div className="space-y-8">
                {/* Pair 1 */}
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">RISK</p>
                  <p className="text-base text-white/70 font-medium mb-4">{t('tether.slide10.risk1')}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">GUARDRAIL</p>
                  <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail1.title')}</p>
                  <p className="text-base text-white/50 font-light leading-relaxed">{t('tether.slide10.guardrail1.desc')}</p>
                </div>
                
                {/* Pair 2 */}
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">RISK</p>
                  <p className="text-base text-white/70 font-medium mb-4">{t('tether.slide10.risk2')}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">GUARDRAIL</p>
                  <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail2.title')}</p>
                  <p className="text-base text-white/50 font-light leading-relaxed">{t('tether.slide10.guardrail2.desc')}</p>
                </div>
                
                {/* Pair 3 */}
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">RISK</p>
                  <p className="text-base text-white/70 font-medium mb-4">{t('tether.slide10.risk3')}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">GUARDRAIL</p>
                  <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail3.title')}</p>
                  <p className="text-base text-white/50 font-light leading-relaxed">{t('tether.slide10.guardrail3.desc')}</p>
                </div>
                
                {/* Pair 4 */}
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">RISK</p>
                  <p className="text-base text-white/70 font-medium mb-4">{t('tether.slide10.risk4')}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">GUARDRAIL</p>
                  <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail4.title')}</p>
                  <p className="text-base text-white/50 font-light leading-relaxed">{t('tether.slide10.guardrail4.desc')}</p>
                </div>
              </div>
            ) : (
              /* DESKTOP: Two-column grid layout */
              <>
                {/* Header row */}
                <div className="grid grid-cols-2 gap-12">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium">{t('tether.slide10.col1.header')}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium">{t('tether.slide10.col2.header')}</p>
                </div>
                
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-12">
                  <p className="text-lg text-white/70 font-medium">{t('tether.slide10.risk1')}</p>
                  <div>
                    <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail1.title')}</p>
                    <p className="text-base text-white/50 font-light leading-relaxed">{t('tether.slide10.guardrail1.desc')}</p>
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-12">
                  <p className="text-lg text-white/70 font-medium">{t('tether.slide10.risk2')}</p>
                  <div>
                    <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail2.title')}</p>
                    <p className="text-base text-white/50 font-light leading-relaxed">{t('tether.slide10.guardrail2.desc')}</p>
                  </div>
                </div>
                
                {/* Row 3 */}
                <div className="grid grid-cols-2 gap-12">
                  <p className="text-lg text-white/70 font-medium">{t('tether.slide10.risk3')}</p>
                  <div>
                    <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail3.title')}</p>
                    <p className="text-base text-white/50 font-light leading-relaxed">{t('tether.slide10.guardrail3.desc')}</p>
                  </div>
                </div>
                
                {/* Row 4 */}
                <div className="grid grid-cols-2 gap-12">
                  <p className="text-lg text-white/70 font-medium">{t('tether.slide10.risk4')}</p>
                  <div>
                    <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail4.title')}</p>
                    <p className="text-base text-white/50 font-light leading-relaxed">{t('tether.slide10.guardrail4.desc')}</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 11: Strategic Value */}
      <Slide align="left" slideNumber={11} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-4xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide11.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('tether.slide11.headline')}
          </motion.h2>
          
          {/* Body intro - parse for highlight tags */}
          <motion.p
            className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {t('thesis.slide11.intro').split('<highlight>').map((part, i) => {
              if (i === 0) return part;
              const [highlighted, rest] = part.split('</highlight>');
              return (
                <React.Fragment key={i}>
                  <span className="text-white/70 font-medium">{highlighted}</span>
                  {rest}
                </React.Fragment>
              );
            })}
          </motion.p>
          
          {/* Bullet points */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-white/30 text-lg mt-0.5">•</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/70 font-medium">{t('tether.slide11.point1.title')}</span> {t('tether.slide11.point1.desc')}
              </p>
            </div>
            
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-white/30 text-lg mt-0.5">•</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/70 font-medium">{t('tether.slide11.point2.title')}</span> {t('tether.slide11.point2.desc').split('<highlight>').map((part, i) => {
                  if (i === 0) return part;
                  const [highlighted, rest] = part.split('</highlight>');
                  return (
                    <React.Fragment key={i}>
                      <span className="text-white/70 font-medium">{highlighted}</span>
                      {rest}
                    </React.Fragment>
                  );
                })}
              </p>
            </div>
            
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-white/30 text-lg mt-0.5">•</span>
              <p className="text-base text-white/50 font-light leading-relaxed">
                <span className="text-white/70 font-medium">{t('tether.slide11.point3.title')}</span> {t('tether.slide11.point3.desc')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Slide>

      <SlideDivider />

      {/* Slide 12: Closing */}
      <Slide slideNumber={12} isRTL={isRTL}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true, margin: "0px" }} className="max-w-3xl mx-auto text-center">
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-10 md:mb-16 leading-[1.1]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}>{t('tether.slide13.headline')}</motion.h2>
          <motion.div 
            className="flex flex-col items-center gap-3 mb-10 md:mb-16" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }} 
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 md:gap-5">
              {[t('tether.slide13.triad1'), t('tether.slide13.triad2'), t('tether.slide13.triad3')].map((word, i) => (
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
              className="text-white/70 font-medium text-lg md:text-xl mt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {t('tether.slide13.tagline')}
            </motion.p>
          </motion.div>
          <motion.div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }}>
            <a href="https://youtu.be/qLEnRNELErg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 border border-white/30 rounded text-xs tracking-[0.15em] uppercase text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300">
              Watch Demo Video
            </a>
            <a href="/system-architecture" className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300">
              {t('tether.slide13.cta2')}<span>{isRTL ? '←' : '→'}</span>
            </a>
          </motion.div>
        </motion.div>
      </Slide>
    </div>
  );
};

export default Thesis;
