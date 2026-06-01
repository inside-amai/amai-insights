import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import amaiLogo from '@/assets/amai-logo-tm.png';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExplainerHeroProps {
  headline?: React.ReactNode;
  subtext?: React.ReactNode;
  ctaHref?: string;
  layerLabels?: {
    identity?: string;
    execution?: string;
    settlement?: string;
  };
}

export const ExplainerHero = ({ headline, subtext, ctaHref = '#architecture-section', layerLabels }: ExplainerHeroProps = {}) => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex items-center snap-start relative overflow-hidden pt-20 md:pt-24">
      {/* Subtle blueprint background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Faint grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Faint layer labels */}
        <div className="absolute left-8 top-1/4 transform -translate-y-1/2">
          <span className="text-[9px] tracking-[0.3em] text-white/[0.06] font-mono uppercase">{layerLabels?.identity ?? t('hero.layer.identity')}</span>
        </div>
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <span className="text-[9px] tracking-[0.3em] text-white/[0.06] font-mono uppercase">{layerLabels?.execution ?? t('hero.layer.execution')}</span>
        </div>
        <div className="absolute left-8 top-3/4 transform -translate-y-1/2">
          <span className="text-[9px] tracking-[0.3em] text-white/[0.06] font-mono uppercase">{layerLabels?.settlement ?? t('hero.layer.settlement')}</span>
        </div>
        
        {/* Faint vertical line */}
        <div className="absolute left-6 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        
        {/* Constellation / Node cluster - agent network visualization */}
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
          {/* Primary nodes */}
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
          
          {/* Secondary smaller nodes */}
          <circle cx="240" cy="150" r="1" fill="white" />
          <circle cx="300" cy="160" r="1" fill="white" />
          <circle cx="160" cy="180" r="1" fill="white" />
          <circle cx="290" cy="240" r="1" fill="white" />
          <circle cx="120" cy="200" r="1" fill="white" />
          
          {/* Connection lines - distributed graph */}
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
        
        {/* Secondary smaller constellation - bottom left */}
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
        
        {/* Micro-grid coordinate label - lower left */}
        <div className="absolute left-6 bottom-8 font-mono text-[9px] tracking-[0.15em] text-white/[0.12]">
          <span>X: 0007</span>
          <span className="mx-2 text-white/[0.08]">/</span>
          <span>Y: 0013</span>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={amaiLogo}
              alt="AMAI Logo" 
              className="h-12 md:h-16 lg:h-20 xl:h-22 w-auto brightness-110"
            />
          </motion.div>

          {/* Headline - NOT translated */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight tracking-tight"
          >
            {headline ?? (
              <>
                <span className="font-light">Agents Are</span>
                <span className="block font-light">Entering the Economy.</span>
              </>
            )}
          </motion.h1>

          {/* Subtitle - translated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-white/50 max-w-xl leading-relaxed space-y-3"
          >
            {subtext ?? (
              <>
                <p>{t('hero.subheader1')}</p>
                <p>{t('hero.subheader2')}</p>
              </>
            )}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-3 pt-2"
          >
            <div className="flex flex-row gap-4 items-center">
              {ctaHref.startsWith('#') ? (
                <a 
                  href={ctaHref}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(ctaHref.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-5 py-2.5 rounded transition-all duration-300"
                >
                  {t('hero.cta.architecture')}
                </a>
              ) : (
                <Link
                  to={ctaHref}
                  className="text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-5 py-2.5 rounded transition-all duration-300"
                >
                  {t('hero.cta.architecture')}
                </Link>
              )}
            </div>
            
            {/* Micro-label */}
            <span className="text-[10px] tracking-[0.25em] text-white/40 md:text-white/25 font-mono uppercase pt-2">
              {t('hero.microlabel')}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};