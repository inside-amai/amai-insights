import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ExplainerSectionProps {
  eyebrow: string;
  title: string;
  content: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  videoUrl?: string;
  reverse?: boolean;
  overlayColor?: string;
  objectFit?: 'cover' | 'contain';
  customImageHeight?: string;
}

export const ExplainerSection = ({
  eyebrow,
  title,
  content,
  imageSrc,
  imageAlt,
  videoUrl,
  reverse = false,
  overlayColor = 'rgba(0, 0, 0, 0.3)',
  objectFit = 'cover',
  customImageHeight
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
            className={`${
              title === 'Community-Driven Platform' 
                ? 'lg:col-start-1 lg:col-span-5' // Image left, same size as reverse
                : reverse 
                ? 'lg:col-start-8 lg:col-span-5' 
                : 'lg:col-span-7'
            } relative overflow-hidden rounded-2xl`}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {videoUrl ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={videoUrl}
                    title={imageAlt || "Video content"}
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-0 animate-fade-in"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
                  />
                  {/* Loading overlay to hide YouTube branding */}
                  <div className="absolute inset-0 bg-black animate-fade-out" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}></div>
                  <div className="absolute inset-0 pointer-events-none"></div>
                </div>
              ) : imageSrc ? (
                <>
                  <img 
                    src={imageSrc} 
                    alt={imageAlt || "Content image"}
                    className={`w-full ${
                      title === 'Technical Foundation'
                        ? 'h-auto max-h-[800px] lg:max-h-[1000px]'
                        : (objectFit === 'contain' ? 'h-auto max-h-[400px] lg:max-h-[500px]' : 'h-[400px] lg:h-[500px]')
                    } object-${objectFit}`}
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ backgroundColor: overlayColor }}
                  />
                </>
              ) : null}
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className={`${
              title === 'Community-Driven Platform'
                ? 'lg:col-start-7 lg:col-span-6' // Text right
                : reverse 
                ? 'lg:col-start-1 lg:col-span-6' 
                : 'lg:col-start-8 lg:col-span-5'
            } space-y-6`}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                {eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
                {title}
              </h2>
            </div>
            <div className="text-sm text-white/50 leading-relaxed">
              {content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};