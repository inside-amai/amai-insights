import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import EconomicLoopDiagram from './EconomicLoopDiagram';

interface LayerProps {
  title: string;
  items: string[];
  isLast?: boolean;
}

const Layer: React.FC<LayerProps> = ({ title, items, isLast = false }) => (
  <div className="relative">
    {/* Layer Box */}
    <div className="border border-white/20 rounded-lg p-4 md:p-6 bg-black">
      <h4 className="text-sm md:text-base font-medium text-white tracking-tight mb-3">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="text-[10px] md:text-xs text-white/50 px-3 py-1.5 border border-white/10 rounded-full bg-white/[0.02]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    
    {/* Connector Line */}
    {!isLast && (
      <div className="flex justify-center py-3 md:py-4">
        <div className="w-px h-6 md:h-8 bg-white/20" />
      </div>
    )}
  </div>
);

const ArchitectureDiagram: React.FC = () => {
  const { t } = useLanguage();

  const layers = [
    { titleKey: 'arch.layer1.title', itemsKey: 'arch.layer1.items' },
    { titleKey: 'arch.layer2.title', itemsKey: 'arch.layer2.items' },
    { titleKey: 'arch.layer3.title', itemsKey: 'arch.layer3.items' },
    { titleKey: 'arch.layer4.title', itemsKey: 'arch.layer4.items' },
    { titleKey: 'arch.layer5.title', itemsKey: 'arch.layer5.items' },
  ];

  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
            {t('arch.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
            {t('arch.title')}
          </h2>
          <p className="mt-4 text-white/50 text-sm max-w-lg mx-auto leading-relaxed text-center">
            {t('arch.subtitle')}
          </p>

          {/* Economic Loop */}
          <EconomicLoopDiagram className="mt-8" />
        </motion.div>

        {/* Diagram Container */}
        <div className="max-w-2xl mx-auto">
          {layers.map((layer, index) => (
            <Layer
              key={layer.titleKey}
              title={t(layer.titleKey)}
              items={t(layer.itemsKey).split(',')}
              isLast={index === layers.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;