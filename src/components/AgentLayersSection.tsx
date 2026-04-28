import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export interface AgentLayerItem {
  label: string;
  desc: string;
}

export interface AgentLayer {
  id: string;
  title: string;
  subtitle: string;
  items: AgentLayerItem[];
}

interface AgentLayersSectionProps {
  layers?: AgentLayer[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bottomNote?: string;
}

export const AgentLayersSection = ({
  layers: layersProp,
  eyebrow,
  title,
  subtitle,
  bottomNote,
}: AgentLayersSectionProps = {}) => {
  const { t } = useLanguage();

  const defaultLayers: AgentLayer[] = [
    {
      id: 'identity',
      title: t('layers.identity.title'),
      subtitle: t('layers.identity.subtitle'),
      items: [
        { label: t('layers.identity.item1.label'), desc: t('layers.identity.item1.desc') },
        { label: t('layers.identity.item2.label'), desc: t('layers.identity.item2.desc') },
        { label: t('layers.identity.item3.label'), desc: t('layers.identity.item3.desc') },
      ],
    },
    {
      id: 'skill',
      title: t('layers.skill.title'),
      subtitle: t('layers.skill.subtitle'),
      items: [
        { label: t('layers.skill.item1.label'), desc: t('layers.skill.item1.desc') },
        { label: t('layers.skill.item2.label'), desc: t('layers.skill.item2.desc') },
        { label: t('layers.skill.item3.label'), desc: t('layers.skill.item3.desc') },
      ],
    },
    {
      id: 'treasury',
      title: t('layers.treasury.title'),
      subtitle: t('layers.treasury.subtitle'),
      items: [
        { label: t('layers.treasury.item1.label'), desc: t('layers.treasury.item1.desc') },
        { label: t('layers.treasury.item2.label'), desc: t('layers.treasury.item2.desc') },
        { label: t('layers.treasury.item3.label'), desc: t('layers.treasury.item3.desc') },
      ],
    },
  ];

  const layers = layersProp ?? defaultLayers;

  return (
    <section id="architecture-section" className="relative py-24 overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
            {t('layers.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
            {t('layers.title')}
          </h2>
          <p className="mt-4 text-white/50 text-sm max-w-xl mx-auto leading-relaxed text-center">
            {t('layers.subtitle')}
          </p>
        </motion.div>

        {/* Three Layers */}
        <div className="max-w-5xl mx-auto space-y-4">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="
                relative group
                bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                border border-white/10
                rounded-lg
                backdrop-blur-sm
                hover:border-white/20
              "
              style={{ transition: 'border-color 0.3s ease' }}
            >
              {/* Layer Number Indicator */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
                <span className="text-[10px] text-white/20 font-mono">
                  0{index + 1}
                </span>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Layer Title */}
                  <div className="md:w-1/3 md:pr-8 md:border-r md:border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <h3 className="text-lg font-medium text-white tracking-tight">
                        {layer.title}
                      </h3>
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">
                      {layer.subtitle}
                    </p>
                  </div>

                  {/* Layer Items */}
                  <div className="md:w-2/3 grid gap-4">
                    {layer.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group/item flex items-start gap-4"
                      >
                        <div className="mt-1.5 w-4 h-px bg-white/20 group-hover/item:bg-white/40 transition-colors" />
                        <div>
                          <span className="text-sm text-white/80 font-medium">
                            {item.label}
                          </span>
                          <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtle connecting line to next layer */}
              {index < layers.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-px bg-gradient-to-b from-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-white/40">
            {t('layers.bottomNote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};