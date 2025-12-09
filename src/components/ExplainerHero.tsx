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
        
        {/* Subtle node points */}
        <div className="absolute right-[15%] top-[30%] w-1 h-1 rounded-full bg-white/[0.05]" />
        <div className="absolute right-[20%] top-[45%] w-1.5 h-1.5 rounded-full bg-white/[0.04]" />
        <div className="absolute right-[12%] top-[60%] w-1 h-1 rounded-full bg-white/[0.05]" />
        
        {/* Connecting lines between nodes */}
        <svg className="absolute right-[10%] top-[25%] w-[200px] h-[200px] opacity-[0.03]" viewBox="0 0 200 200">
          <path d="M50,30 L100,80 L150,60 L120,140" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="30" r="2" fill="white" />
          <circle cx="100" cy="80" r="2" fill="white" />
          <circle cx="150" cy="60" r="2" fill="white" />
          <circle cx="120" cy="140" r="2" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-3 max-w-3xl"
        >
          {/* Logo - reduced by additional ~20% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
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
                href="/whitepaper/system-architecture" 
                className="text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-5 py-2.5 rounded transition-all duration-300"
              >
                Read the Architecture
              </a>
              
              <a 
                href="#technical-docs" 
                className="text-sm text-white/50 hover:text-white/70 transition-all duration-300"
              >
                Explore Documentation →
              </a>
            </div>
            
            {/* Micro-label */}
            <span className="text-[10px] tracking-[0.25em] text-white/25 font-mono uppercase pt-2">
              AMAI Labs · Infrastructure Portal
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
