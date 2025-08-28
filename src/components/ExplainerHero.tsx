import { motion } from 'framer-motion';
import amaiLogo from '@/assets/amai-logo-new.png';

export const ExplainerHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>
      
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
            <img 
              src={amaiLogo} 
              alt="AMAI Logo" 
              className="h-16 lg:h-20 w-auto"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-hero leading-tight"
          >
            The Future of
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Autonomous AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-2xl text-hero/80 max-w-3xl mx-auto leading-relaxed"
          >
            Building the next generation of decentralized AI infrastructure on Sui blockchain
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};