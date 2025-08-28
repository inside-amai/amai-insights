import { motion } from 'framer-motion';
import amaiLogo from '@/assets/amai-logo-new.png';

export const ExplainerHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse" 
             style={{ background: 'radial-gradient(circle, #A6FCFC 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-pulse" 
             style={{ background: 'radial-gradient(circle, #D6A6FC 0%, transparent 70%)', animationDelay: '2s' }} />
        
        {/* Moving gradient lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A6FCFC] to-transparent animate-pulse" 
               style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#D6A6FC] to-transparent animate-pulse" 
               style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(166,252,252,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(166,252,252,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
        </div>
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
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            The Future of
            <span className="block bg-gradient-to-r from-[#A6FCFC] to-[#D6A6FC] bg-clip-text text-transparent">
              Autonomous AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Building the next generation of decentralized AI infrastructure on Sui blockchain
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};