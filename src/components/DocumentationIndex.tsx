import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const documentationCards = [
  { categoryKey: 'docs.card1.category', titleKey: 'docs.card1.title', subtitleKey: 'docs.card1.subtitle', slug: 'system-overview' },
  { categoryKey: 'docs.card2.category', titleKey: 'docs.card2.title', subtitleKey: 'docs.card2.subtitle', slug: 'agent-architecture' },
  { categoryKey: 'docs.card3.category', titleKey: 'docs.card3.title', subtitleKey: 'docs.card3.subtitle', slug: 'economic-substrate' },
  { categoryKey: 'docs.card4.category', titleKey: 'docs.card4.title', subtitleKey: 'docs.card4.subtitle', slug: 'trust-mechanics' },
  { categoryKey: 'docs.card5.category', titleKey: 'docs.card5.title', subtitleKey: 'docs.card5.subtitle', slug: 'treasury-dynamics' },
  { categoryKey: 'docs.card6.category', titleKey: 'docs.card6.title', subtitleKey: 'docs.card6.subtitle', slug: 'kernelized-intelligence' },
  { categoryKey: 'docs.card7.category', titleKey: 'docs.card7.title', subtitleKey: 'docs.card7.subtitle', slug: 'protocol-internals' },
  { categoryKey: 'docs.card8.category', titleKey: 'docs.card8.title', subtitleKey: 'docs.card8.subtitle', slug: 'token-model' },
  { categoryKey: 'docs.card9.category', titleKey: 'docs.card9.title', subtitleKey: 'docs.card9.subtitle', slug: 'agent-economy' },
];

const DocumentCard = ({ card, index, t }: { card: typeof documentationCards[0]; index: number; t: (key: string) => string }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
      className="relative group h-full"
    >
      <Link 
        to={`/${card.slug}`}
        className="block h-full"
      >
        <div 
          className="relative h-full bg-black border border-white/[0.08] rounded-[3px] p-6 flex flex-col overflow-hidden"
        >
          {/* Internal grid pattern */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '16px 16px',
            }}
          />
          {/* Category micro-label */}
          <span className="relative z-10 text-[9px] tracking-[0.25em] uppercase text-white/30 font-medium mb-3">
            {t(card.categoryKey)}
          </span>
          
          {/* Title */}
          <h3 className="relative z-10 text-[15px] font-semibold text-white/90 mb-2 leading-snug">
            {t(card.titleKey)}
          </h3>
          
          {/* Subtitle */}
          <p className="relative z-10 text-[12px] text-white/40 leading-relaxed flex-1 mb-4">
            {t(card.subtitleKey)}
          </p>
          
          {/* Read more link */}
          <span className="relative z-10 text-[11px] text-white/25 group-hover:text-white/50 transition-colors duration-200 flex items-center gap-1">
            {t('docs.readMore')} <span className="text-[10px]">→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export const DocumentationIndex = () => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate py-28 md:py-36 overflow-hidden bg-black">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.2]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Scroll anchor - positioned at the header */}
        <div id="documentation-library" className="scroll-mt-6" />
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Section label */}
            <span className="text-[9px] tracking-[0.35em] uppercase text-white/30 font-medium">
              {t('docs.eyebrow')}
            </span>
            
            {/* Main header */}
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              {t('docs.title')}
            </h2>
            
            {/* Subheader */}
            <p className="text-white/45 text-sm max-w-2xl leading-relaxed">
              {t('docs.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Documentation Index micro-label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[8px] tracking-[0.4em] uppercase text-white/20 font-medium">
            {t('docs.index')}
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentationCards.map((card, index) => (
            <DocumentCard key={card.slug} card={card} index={index} t={t} />
          ))}
        </div>

        {/* Operational Scenarios CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/operational-scenarios"
            className="inline-flex flex-col items-center gap-1 text-white/40 hover:text-white/60 transition-colors duration-200 group"
          >
            <span className="text-xs border-b border-white/20 group-hover:border-white/40 pb-0.5">{t('docs.scenarios')}</span>
            <span className="text-[10px] italic text-white/30 group-hover:text-white/50">{t('docs.scenariosSubtitle')}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentationIndex;