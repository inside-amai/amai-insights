import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface WhitepaperCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  index: number;
}

export const WhitepaperCard = ({ slug, title, description, category, index }: WhitepaperCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        ease: 'easeOut', 
        delay: index * 0.05
      }}
      className="group"
    >
      <Link 
        to={`/whitepaper/${slug}`}
        className="relative block h-full p-5 bg-white/[0.03] border border-white/[0.08] rounded-[3px] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] overflow-hidden"
      >
        {/* Subtle inner grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        
        <div className="relative z-10 space-y-2">
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/35 font-medium">
            {category}
          </span>
          <h3 className="text-sm font-medium text-white/90 tracking-tight leading-snug">
            {title}
          </h3>
          <p className="text-[11px] text-white/40 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="relative z-10 mt-4 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          <div className="w-3 h-px bg-white/20 group-hover:bg-white/40 transition-colors" />
          <span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors tracking-wide">
            Read more
          </span>
        </div>
      </Link>
    </motion.article>
  );
};
