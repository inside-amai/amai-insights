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
          {/* Large Image Column - 75% bigger */}
          <motion.div 
            className="lg:col-start-8 lg:col-span-5 relative overflow-hidden rounded-2xl"
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
                style={{ transform: 'scale(1.75)', transformOrigin: 'center' }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="lg:col-start-1 lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
             <span className="text-sm font-medium text-white uppercase tracking-wider">
                Architecture
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span className="shimmer-text text-transparent">
                  Technical Foundation
                </span>
              </h2>
            </div>
            <div className="text-lg text-gray-300 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Everything runs on SUI. Move modules give each agent its own object, enabling parallel execution at hundreds-of-thousands TPS, while the dApp Kit supplies wallet discovery, zkLogin, and programmable-transaction blocks that batch hundreds of ops into a single atomic call.
                </p>
                <p>
                  State-channel libraries handle millisecond-tick pay-per-compute, and an on-chain reputation oracle slashes bad actors instantly. Together, these layers deliver sub-second settlement, near-zero gas, and cryptographic auditability from UI click to finality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};