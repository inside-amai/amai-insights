import { motion, useScroll } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-hero-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  slideNumber?: number;
  totalSlides?: number;
  isRTL?: boolean;
}

const Slide = ({ children, className = "", align = "center", slideNumber, totalSlides = 9, isRTL = false, hideGrid = false }: SlideProps & { hideGrid?: boolean }) => {
  const { t } = useLanguage();
  
  return (
    <section 
      className={`relative min-h-screen w-full flex items-center overflow-hidden ${
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
      
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-24 pb-24 md:pb-16 ${
        align === "left" ? "" : ""
      }`}>
        {children}
      </div>
      
      {/* Page number */}
      {slideNumber && (
        <div className={`absolute bottom-8 ${isRTL ? 'left-8 md:left-12' : 'right-8 md:right-12'} md:bottom-10 text-[10px] tracking-[0.2em] text-white/50 font-medium`}>
          {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      )}
      
      {/* Footer branding */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium">
        {t('deck.footer')}
      </div>
    </section>
  );
};

const Deck = () => {
  const { scrollYProgress } = useScroll();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="bg-black min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Progress bar */}
      <motion.div
        className="fixed bottom-0 left-0 h-[3px] bg-white/30 origin-left z-50"
        style={{ scaleX: scrollYProgress, width: '100%' }}
      />
      {/* Slide 1: Title */}
      <Slide align="left" slideNumber={1} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl"
        >
          {/* Logo */}
          <motion.img
            src={amaiLogo}
            alt="AMAI Labs"
            className="h-12 md:h-16 lg:h-20 xl:h-22 w-auto brightness-110 mb-16 md:mb-24"
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
            {t('deck.slide1.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-10 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-light">{t('deck.slide1.headline1')}</span>
            <br />
            <span className="font-light">{t('deck.slide1.headline2')}</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('deck.slide1.subheadline1')}
            <br /><br />
            {t('deck.slide1.subheadline2')}
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 2: The Shift */}
      <Slide slideNumber={2} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
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
            {t('deck.slide2.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-16 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('deck.slide2.headline1')}
            <br />
            {t('deck.slide2.headline2')}
          </motion.h2>
          
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
              <p className="text-sm md:text-base text-white/80 font-medium mb-2">
                {t('deck.slide2.point1.title')}
              </p>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                {t('deck.slide2.point1.body')}
              </p>
            </div>
            
            {/* Point 2 */}
            <div>
              <p className="text-sm md:text-base text-white/80 font-medium mb-2">
                {t('deck.slide2.point2.title')}
              </p>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                {t('deck.slide2.point2.body')}
              </p>
            </div>
            
            {/* Point 3 */}
            <div>
              <p className="text-sm md:text-base text-white/80 font-medium mb-2">
                {t('deck.slide2.point3.title')}
              </p>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                {t('deck.slide2.point3.body')}
              </p>
            </div>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-16 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {t('deck.slide2.closing')}
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 3: The Infrastructure Layer */}
      <Slide align="left" slideNumber={3} isRTL={isRTL} hideGrid>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
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
            {t('deck.slide3.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-12 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('deck.slide3.headline')}
          </motion.h2>
          
          {/* Body copy */}
          <motion.div
            className="space-y-4 text-base md:text-lg text-white/50 font-light leading-relaxed mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>{t('deck.slide3.body1')}</p>
            <p>{t('deck.slide3.body2')}</p>
          </motion.div>
          
          {/* Four pillars */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('deck.slide3.pillar1.title')}</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {t('deck.slide3.pillar1.desc')}
              </p>
            </div>
            
            <div className={`${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('deck.slide3.pillar2.title')}</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {t('deck.slide3.pillar2.desc')}
              </p>
            </div>
            
            <div className={`${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('deck.slide3.pillar3.title')}</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {t('deck.slide3.pillar3.desc')}
              </p>
            </div>
            
            <div className={`${isRTL ? 'border-r border-white/10 pr-5' : 'border-l border-white/10 pl-5'}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('deck.slide3.pillar4.title')}</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {t('deck.slide3.pillar4.desc')}
              </p>
            </div>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {t('deck.slide3.closing')}
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 4: The Economic Loop */}
      <Slide slideNumber={4} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
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
            {t('deck.slide4.label')}
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-16 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('deck.slide4.headline')}
          </motion.h2>
          
          {/* Diagram */}
          <motion.div
            className="relative mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Main flow row */}
            <div className={`flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-3 text-[11px] md:text-xs text-white/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[
                t('deck.slide4.step.identity'),
                t('deck.slide4.step.reputation'),
                t('deck.slide4.step.capital'),
                t('deck.slide4.step.execution'),
                t('deck.slide4.step.settlement')
              ].map((step, i, arr) => (
                <div key={i} className={`flex items-center gap-2 md:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="px-3 md:px-4 py-2 md:py-2.5 border border-white/20 rounded bg-black whitespace-nowrap tracking-wide">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-white/30 text-xs hidden md:inline">{isRTL ? '←' : '→'}</span>
                  )}
                </div>
              ))}
            </div>

            {/* SVG loop-back path */}
            <svg 
              className="w-full h-10 mt-2 hidden md:block" 
              viewBox="0 0 560 40" 
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              style={{ transform: isRTL ? 'scaleX(-1)' : undefined }}
            >
              {/* Curved U-path from Settlement back to Reputation */}
              <path 
                d="M 485 0 L 485 22 Q 485 30 477 30 L 130 30 Q 122 30 122 22 L 122 0"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              
              {/* Vertical arrow under Settlement (pointing down) */}
              <polygon points="485,6 482,0 488,0" fill="rgba(255,255,255,0.2)" />
              
              {/* Vertical arrow into Reputation (pointing up) */}
              <polygon points="122,0 119,6 125,6" fill="rgba(255,255,255,0.2)" />
              
              {/* Arrow markers along the bottom path */}
              <polygon points="380,27 374,30 380,33" fill="rgba(255,255,255,0.2)" />
              <polygon points="280,27 274,30 280,33" fill="rgba(255,255,255,0.2)" />
              <polygon points="200,27 194,30 200,33" fill="rgba(255,255,255,0.2)" />
            </svg>

            {/* Mobile loop indicator */}
            <div className="md:hidden mt-4 flex items-center justify-center gap-2 text-white/30 text-xs">
              <span>↻</span>
              <span>{t('deck.slide4.mobile.loop')}</span>
            </div>
          </motion.div>
          
          {/* Explanatory text */}
          <motion.div
            className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-2xl mx-auto space-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>{t('deck.slide4.explanation1')}</p>
            <p>{t('deck.slide4.explanation2')}</p>
            <p>{t('deck.slide4.explanation3')}</p>
            <p>{t('deck.slide4.explanation4')}</p>
            <p>{t('deck.slide4.explanation5')}</p>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-8 md:mt-10 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {t('deck.slide4.closing')}
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 5: Autonomous Agent Swarms */}
      <Slide align="left" slideNumber={5} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('deck.slide5.label')}
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('deck.slide5.headline')}
          </motion.h2>
          
          <motion.div
            className="space-y-4 text-sm md:text-base text-white/50 font-light leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>{t('deck.slide5.body1')}</p>
            <p>{t('deck.slide5.body2')}</p>
            <div className="h-6 md:h-8" />
            <p>{t('deck.slide5.body3')}</p>
          </motion.div>
          
          <motion.div
            className="space-y-3 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[t('deck.slide5.point1'), t('deck.slide5.point2'), t('deck.slide5.point3')].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.p
            className="mt-10 md:mt-12 text-sm md:text-base text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {t('deck.slide5.closing')}
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 6: Initial Users */}
      <Slide align="left" slideNumber={6} isRTL={isRTL}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          <motion.p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>{t('deck.slide6.label')}</motion.p>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-12 leading-[1.15]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>{t('deck.slide6.headline')}</motion.h2>
          <motion.p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>{t('deck.slide6.body')}</motion.p>
          <motion.div className="space-y-3 mb-10 md:mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
            {[t('deck.slide6.point1'), t('deck.slide6.point2'), t('deck.slide6.point3')].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Slide>

      {/* Slide 7: Token Model */}
      <Slide align="left" slideNumber={7} isRTL={isRTL}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, margin: "-100px" }} className="max-w-3xl">
          <motion.p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>{t('deck.slide7.label')}</motion.p>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-12 leading-[1.15]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>{t('deck.slide7.headline')}</motion.h2>
          <motion.div className="space-y-4 text-base md:text-lg text-white/50 font-light leading-relaxed mb-10 md:mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}><p>{t('deck.slide7.body')}</p></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
            <div className={`bg-black p-5 ${isRTL ? 'text-right' : 'text-left'}`}><p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('deck.slide7.pillar1.title')}</p><p className="text-sm text-white/70 font-light leading-relaxed">{t('deck.slide7.pillar1.desc')}</p></div>
            <div className={`bg-black p-5 ${isRTL ? 'text-right' : 'text-left'}`}><p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('deck.slide7.pillar2.title')}</p><p className="text-sm text-white/70 font-light leading-relaxed">{t('deck.slide7.pillar2.desc')}</p></div>
            <div className={`bg-black p-5 ${isRTL ? 'text-right' : 'text-left'}`}><p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('deck.slide7.pillar3.title')}</p><p className="text-sm text-white/70 font-light leading-relaxed">{t('deck.slide7.pillar3.desc')}</p></div>
            <div className={`bg-black p-5 ${isRTL ? 'text-right' : 'text-left'}`}><p className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">{t('deck.slide7.pillar4.title')}</p><p className="text-sm text-white/70 font-light leading-relaxed">{t('deck.slide7.pillar4.desc')}</p></div>
          </motion.div>
          <motion.p className="text-base md:text-lg text-white/50 font-light leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }}>{t('deck.slide7.closing')}</motion.p>
        </motion.div>
      </Slide>

      {/* Slide 8: Strategic Alignment */}
      <Slide align="left" slideNumber={8} isRTL={isRTL}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, margin: "-100px" }} className="max-w-3xl">
          <motion.p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>{t('deck.slide8.label')}</motion.p>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-12 leading-[1.15]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>{t('deck.slide8.headline')}</motion.h2>
          <motion.p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 md:mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>{t('deck.slide8.body')}</motion.p>
          <motion.div className="space-y-3 mb-10 md:mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
            {[t('deck.slide8.point1'), t('deck.slide8.point2'), t('deck.slide8.point3'), t('deck.slide8.point4')].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-white/20 text-sm mt-0.5">—</span>
                <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </motion.div>
          <motion.p className="text-base md:text-lg text-white/50 font-light leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }}>{t('deck.slide8.body2')}</motion.p>
          <motion.p className="mt-12 md:mt-14 text-base md:text-lg text-white/70 font-normal leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }}>{t('deck.slide8.closing')}</motion.p>
        </motion.div>
      </Slide>

      {/* Slide 9: Closing */}
      <Slide slideNumber={9} isRTL={isRTL}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true, margin: "-100px" }} className="max-w-3xl mx-auto text-center">
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-12 md:mb-16 leading-[1.1]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}>{t('deck.slide9.headline')}</motion.h2>
          <motion.div className="space-y-6 text-base md:text-lg text-white/50 font-light leading-relaxed mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
            <p>{t('deck.slide9.body1')}<br />{t('deck.slide9.body2')}</p>
            <p className="text-white/60">{t('deck.slide9.body3')}</p>
          </motion.div>
          <motion.div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }}>
            <a href="https://demo.amai.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white hover:border-white/40 transition-all duration-300">
              {t('deck.slide9.cta1')}<span>{isRTL ? '←' : '→'}</span>
            </a>
            <a href="/" className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors duration-300">
              {t('deck.slide9.cta2')}<span>{isRTL ? '←' : '→'}</span>
            </a>
          </motion.div>
        </motion.div>
      </Slide>
    </div>
  );
};

export default Deck;
