import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ExplainerSectionProps {
  eyebrow: string;
  title: string;
  content: ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  overlayColor?: string;
  objectFit?: 'cover' | 'contain';
}

export const ExplainerSection = ({
  eyebrow,
  title,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
  overlayColor = 'rgba(0, 0, 0, 0.3)',
  objectFit = 'cover'
}: ExplainerSectionProps) => {
  return (
    <section className="min-h-screen flex items-center snap-start bg-black relative overflow-hidden">
      {/* Animated Stars Background - matching hero section */}
      <div className="absolute inset-0">
        {/* Large moving stars */}
        <div className="absolute top-20 left-20 w-2 h-2 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-32 right-32 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s', transform: 'translateY(-10px)', animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute bottom-40 left-40 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 8s linear infinite' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '5s', animationDelay: '2s' }} />
        
        {/* Medium moving stars */}
        <div className="absolute top-60 left-60 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 4s ease-in-out infinite' }} />
        <div className="absolute top-96 right-60 w-1.5 h-1.5 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.5s', animationDelay: '1.5s' }} />
        
        {/* Small moving stars */}
        <div className="absolute top-40 left-96 w-1 h-1 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s' }} />
        <div className="absolute top-80 right-96 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 3s ease-in-out infinite' }} />
        <div className="absolute bottom-80 left-20 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 12s linear infinite' }} />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image Column */}
          <motion.div 
            className={`${reverse ? 'lg:col-start-8 lg:col-span-5' : 'lg:col-span-7'} relative overflow-hidden rounded-2xl`}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className={`w-full ${objectFit === 'contain' ? 
                  (imageAlt === 'SUI Blockchain Technology' ? 'h-auto max-h-[700px] lg:max-h-[875px]' : 'h-auto max-h-[400px] lg:max-h-[500px]') : 
                  (imageAlt === 'SUI Blockchain Technology' ? 'h-[700px] lg:h-[875px]' : 'h-[400px] lg:h-[500px]')
                } object-${objectFit}`}
              />
              <div 
                className="absolute inset-0"
                style={{ backgroundColor: overlayColor }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className={`${reverse ? 'lg:col-start-1 lg:col-span-6' : 'lg:col-start-8 lg:col-span-5'} space-y-6`}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
             <span className="text-sm font-medium text-white uppercase tracking-wider">
                {eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span className="shimmer-text text-transparent">
                  {title}
                </span>
              </h2>
            </div>
            <div className="text-lg text-gray-300 leading-relaxed">
              {content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};