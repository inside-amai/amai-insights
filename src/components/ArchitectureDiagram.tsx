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

export interface ArchitectureLayer {
  title: string;
  items: string[];
}

interface ArchitectureDiagramProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  layers?: ArchitectureLayer[];
  footer?: string;
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  eyebrow,
  title,
  subtitle,
  layers: layersProp,
  footer,
}) => {
  const { t } = useLanguage();

  const defaultLayers: ArchitectureLayer[] = [
    { title: t('arch.layer1.title'), items: t('arch.layer1.items').split(',') },
    { title: t('arch.layer2.title'), items: t('arch.layer2.items').split(',') },
    { title: t('arch.layer3.title'), items: t('arch.layer3.items').split(',') },
    { title: t('arch.layer4.title'), items: t('arch.layer4.items').split(',') },
    { title: t('arch.layer5.title'), items: t('arch.layer5.items').split(',') },
  ];

  const layers = layersProp ?? defaultLayers;

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
            {eyebrow ?? t('arch.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
            {title ?? t('arch.title')}
          </h2>
          <p className="mt-4 text-white/50 text-sm max-w-lg mx-auto leading-relaxed text-center">
            {subtitle ?? t('arch.subtitle')}
          </p>

          {/* Economic Loop */}
          <EconomicLoopDiagram className="mt-8" />
        </motion.div>

        {/* Diagram Container */}
        <div className="max-w-2xl mx-auto">
          {layers.map((layer, index) => (
            <Layer
              key={`${layer.title}-${index}`}
              title={layer.title}
              items={layer.items}
              isLast={index === layers.length - 1}
            />
          ))}
        </div>

        {footer && (
          <p className="mt-12 text-center text-xs md:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default ArchitectureDiagram;