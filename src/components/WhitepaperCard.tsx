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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.44, ease: 'easeOut', delay: index * 0.1 }}
      className="group/card rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
      style={{
        background: 'white',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid #D6A6FC';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
      }}
    >
      <header className="mb-6 flex-grow">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-black block">
          {category}
        </span>
        <h3 className="mt-3 font-roboto text-3xl text-[#080808] font-semibold leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#2F2F2F]">
          {description}
        </p>
      </header>
      
      <Button 
        asChild 
        variant="ghost" 
        className="mt-auto text-sm px-4 py-2 border border-[#080808] rounded-full hover:bg-[#A6FCFC] hover:text-black transition-all duration-300 w-fit"
      >
        <Link to={`/whitepaper/${slug}`}>
          Read More
          <ArrowRight className="inline ml-1" size={14} />
        </Link>
      </Button>
    </motion.article>
  );
};