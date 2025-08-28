import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-glass p-8 flex flex-col justify-between h-full"
    >
      <header>
        <span className="text-xs uppercase tracking-widest text-[#A6FCFC] mb-2 font-medium block">
          {category}
        </span>
        <h3 className="text-2xl font-semibold font-roboto text-[#111] mb-4">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#444] mb-6">
          {description}
        </p>
      </header>
      
      <Button asChild variant="outline" className="rounded-full border-[#111] hover:bg-[#A6FCFC] hover:text-black transition-all duration-300 w-fit">
        <Link to={`/whitepaper/${slug}`}>
          Read More
          <ArrowRight className="ml-1 inline" size={14} />
        </Link>
      </Button>
    </motion.article>
  );
};