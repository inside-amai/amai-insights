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
}

export const ExplainerSection = ({
  eyebrow,
  title,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
  overlayColor = 'rgba(0, 0, 0, 0.3)'
}: ExplainerSectionProps) => {
  return (
    <section className="min-h-screen flex items-center snap-start bg-section even:bg-section-alt">
      <div className="container mx-auto px-6 py-20">
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
                className="w-full h-[400px] lg:h-[500px] object-cover"
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
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {title}
              </h2>
            </div>
            <div className="text-lg text-muted-foreground leading-relaxed">
              {content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};