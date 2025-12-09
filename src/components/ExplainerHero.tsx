import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/OptimizedImage';
import amaiLogo from '@/assets/amai-logo-hero-new.png';

export const ExplainerHero = () => {
  return (
    <section className="min-h-[85vh] flex items-center snap-start relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-5 max-w-3xl"
        >
          {/* Logo - reduced by ~35% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <OptimizedImage 
              src={amaiLogo}
              alt="AMAI Logo" 
              className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto"
              loading="eager"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight tracking-tight"
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

          {/* CTAs replacing social icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-row gap-4 items-center pt-2"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
