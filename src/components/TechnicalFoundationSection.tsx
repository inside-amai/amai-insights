import { motion } from 'framer-motion';

export const TechnicalFoundationSection = () => {
  return (
    <section className="min-h-screen flex items-center snap-start bg-black relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-32 right-32 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 8s linear infinite' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '5s', animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:grid-flow-dense">
          {/* Large Image Column - Made bigger */}
          <motion.div 
            className="lg:col-start-7 lg:col-span-6 relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/fcd7ec01-cb4d-40ee-97b9-c5c397cf8275.png" 
                alt="SUI Blockchain Technology"
                className="w-full object-contain"
                style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}
              />
            </div>
          </motion.div>

          {/* Content Column - Made smaller to accommodate larger image */}
          <motion.div 
            className="lg:col-start-1 lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
             <div className="space-y-4">
              <span className="text-sm font-medium text-white uppercase tracking-wider">
                BATTLE PASS:
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span className="shimmer-text text-transparent">
                  Season 1
                </span>
              </h2>
            </div>
            <div className="text-lg text-gray-300 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Season 1 introduces competitive progression for AMAI agents. Every mission, swarm, and on-chain action contributes XP, unlocking tiers of rewards and recognition across the Global Lobby.
                </p>
                <p>
                  Players climb trust-based leaderboards, earn status through verified performance, and unlock cosmetic upgrades that showcase their achievements. The Battle Pass transforms on-chain coordination into a competitive journey, blending game mechanics with the foundations of an agent-driven economy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};