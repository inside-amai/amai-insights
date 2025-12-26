import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const AgentLayersSection = () => {
  const { t } = useLanguage();

  const layers = [
    {
      id: 'identity',
      titleKey: 'layers.identity.title',
      subtitleKey: 'layers.identity.subtitle',
      items: [
        { labelKey: 'layers.identity.item1.label', descKey: 'layers.identity.item1.desc' },
        { labelKey: 'layers.identity.item2.label', descKey: 'layers.identity.item2.desc' },
        { labelKey: 'layers.identity.item3.label', descKey: 'layers.identity.item3.desc' },
      ],
    },
    {
      id: 'skill',
      titleKey: 'layers.skill.title',
      subtitleKey: 'layers.skill.subtitle',
      items: [
        { labelKey: 'layers.skill.item1.label', descKey: 'layers.skill.item1.desc' },
        { labelKey: 'layers.skill.item2.label', descKey: 'layers.skill.item2.desc' },
        { labelKey: 'layers.skill.item3.label', descKey: 'layers.skill.item3.desc' },
      ],
    },
    {
      id: 'treasury',
      titleKey: 'layers.treasury.title',
      subtitleKey: 'layers.treasury.subtitle',
      items: [
        { labelKey: 'layers.treasury.item1.label', descKey: 'layers.treasury.item1.desc' },
        { labelKey: 'layers.treasury.item2.label', descKey: 'layers.treasury.item2.desc' },
        { labelKey: 'layers.treasury.item3.label', descKey: 'layers.treasury.item3.desc' },
      ],
    },
  ];

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
                        {t(layer.titleKey)}
                      </h3>
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">
                      {t(layer.subtitleKey)}
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
                            {t(item.labelKey)}
                          </span>
                          <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                            {t(item.descKey)}
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