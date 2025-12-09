import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/OptimizedImage';
import amaiLabsLogo from '@/assets/amai-labs-logo.png';

export const ExplainerHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <OptimizedImage 
              src={amaiLabsLogo}
              alt="AMAI Labs Logo" 
              className="h-20 md:h-28 lg:h-36 xl:h-40 w-auto"
              loading="eager"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Bringing A Billion Agents
            <span className="block">
              Into the <span className="shimmer-text text-transparent">Machine-First Economy</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Infrastructure for autonomous agents, bonded trust, and high-assurance settlement.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-row gap-8 justify-center items-center pt-4"
          >
            <a 
              href="https://t.me/AMAIOfficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105"
            >
              <OptimizedImage 
                src="/lovable-uploads/f688c83b-1c4d-44c4-bbc4-f9328559a323.png" 
                alt="Join Telegram" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-100 hover:brightness-75 transition-all duration-300"
                style={{ width: '40px', height: '40px' }}
              />
            </a>
            
            <a 
              href="https://x.com/InsideAMAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105"
            >
              <OptimizedImage 
                src="/lovable-uploads/53e90b93-7fe0-4c2c-b053-df64d7a767d0.png" 
                alt="Follow on X" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-100 hover:brightness-75 transition-all duration-300"
                style={{ width: '40px', height: '40px' }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
