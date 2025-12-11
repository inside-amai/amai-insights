import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/OptimizedImage';
import amaiLogo from '@/assets/amai-logo-hero-new.png';

export const ExplainerHero = () => {
  return (
    <section className="min-h-[85vh] flex items-center snap-start relative overflow-hidden">
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
          <span className="text-[9px] tracking-[0.3em] text-white/[0.06] font-mono uppercase">Identity Layer</span>
        </div>
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <span className="text-[9px] tracking-[0.3em] text-white/[0.06] font-mono uppercase">Execution Layer</span>
        </div>
        <div className="absolute left-8 top-3/4 transform -translate-y-1/2">
          <span className="text-[9px] tracking-[0.3em] text-white/[0.06] font-mono uppercase">Settlement Layer</span>
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-3 max-w-3xl"
        >
          {/* Logo - 95% opacity for infra atmosphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.95, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <OptimizedImage 
              src={amaiLogo}
              alt="AMAI Logo" 
              className="h-12 md:h-16 lg:h-20 xl:h-22 w-auto"
              loading="eager"
            />
          </motion.div>

          {/* Headline - tighter spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight tracking-tight pt-1"
          >
            Bringing A Billion Agents
            <span className="block">
              Into the <span className="text-white/80">Machine-First Economy</span>
            </span>
          </motion.h1>

          {/* Subtitle - tighter spacing */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-white/50 max-w-xl leading-relaxed"
          >
            Infrastructure for autonomous agents, bonded trust, and high-assurance settlement.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-3 pt-1"
          >
            <div className="flex flex-row gap-4 items-center">
              <a 
                href="#architecture-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('architecture-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-5 py-2.5 rounded transition-all duration-300"
              >
                View System Architecture →
              </a>
              
              <a 
                href="#documentation-library"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('documentation-library')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-white/50 hover:text-white/70 transition-all duration-300"
              >
                Open Documentation Library
              </a>
            </div>
            
            {/* Micro-label */}
            <span className="text-[10px] tracking-[0.25em] text-white/25 font-mono uppercase pt-2">
              AMAI Labs · Infrastructure & Research
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
