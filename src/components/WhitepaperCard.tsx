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
      whileHover={{ y: -4 }}
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
        className="block h-full p-6 bg-white border border-black/[0.08] rounded-lg transition-all duration-500 hover:border-black/20 hover:shadow-lg"
      >
        <div className="space-y-3">
          <span className="text-[11px] tracking-[0.3em] uppercase text-black/40 font-medium">
            {category}
          </span>
          <h3 className="text-lg font-medium text-black tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-black/50 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-6 flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
          <div className="w-4 h-px bg-black/20 group-hover:bg-black/40 transition-colors" />
          <span className="text-xs text-black/50 group-hover:text-black/70 transition-colors">
            Read more
          </span>
        </div>
      </Link>
    </motion.article>
  );
};
