import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Self-contained copy button for toast
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('team@amai.net').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-all"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const SlideDivider = () => (
  <div className="h-px bg-white/10 w-full" />
);

const Briefing = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const scrollToSlide2 = () => {
    const slide2 = document.getElementById('slide-2');
    if (slide2) {
      slide2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setTimeout(() => {
      toast({
        title: "Email not opening?",
        description: (
          <div className="flex items-center gap-3 mt-1">
            <span className="text-white/80">Reach us at team@amai.net</span>
            <CopyEmailButton />
          </div>
        ),
      });
    }, 500);
  };

  return (
    <div className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Slide 1: Cover */}
      <section className="relative min-h-svh flex flex-col items-center justify-center px-6 py-16">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide1.label')}
            </span>
            
            <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
              {t('briefing.slide1.headline')}
            </h1>
            
            <p className="mt-8 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('briefing.slide1.subheadline1')}
            </p>
            
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('briefing.slide1.subheadline2')}
            </p>

            <button
              onClick={scrollToSlide2}
              className="mt-12 px-8 py-3 bg-black border border-white/20 text-white/80 text-sm tracking-wider uppercase hover:bg-white/5 transition-colors"
            >
              {t('briefing.slide1.cta')}
            </button>

            <motion.div
              className="mt-16"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-white/30 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 2: The Gap */}
      <section id="slide-2" className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide2.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide2.headline')}
            </h2>

            <div className="mt-12 space-y-8">
              <div className={`border-white/10 ${isRTL ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}>
                <h3 className="text-lg font-medium text-white/80">{t('briefing.slide2.point1.title')}</h3>
                <p className="mt-2 text-white/50">{t('briefing.slide2.point1.desc')}</p>
              </div>
              <div className={`border-white/10 ${isRTL ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}>
                <h3 className="text-lg font-medium text-white/80">{t('briefing.slide2.point2.title')}</h3>
                <p className="mt-2 text-white/50">{t('briefing.slide2.point2.desc')}</p>
              </div>
              <div className={`border-white/10 ${isRTL ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}>
                <h3 className="text-lg font-medium text-white/80">{t('briefing.slide2.point3.title')}</h3>
                <p className="mt-2 text-white/50">{t('briefing.slide2.point3.desc')}</p>
              </div>
            </div>

            <p className="mt-12 text-lg text-white/70 italic">
              {t('briefing.slide2.closing')}
            </p>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 3: The Solution */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide3.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide3.headline')}
            </h2>

            <p className="mt-6 text-lg text-white/60">
              {t('briefing.slide3.subheadline')}
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {['identity', 'reputation', 'capital', 'execution'].map((key) => (
                <div key={key} className="bg-black border border-white/10 p-6">
                  <h3 className="text-sm tracking-wider uppercase text-white/80 font-medium">
                    {t(`briefing.slide3.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-white/50 text-sm">
                    {t(`briefing.slide3.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 4: The Loop */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide4.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide4.headline')}
            </h2>

            {/* Economic Loop Visualization */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm">
              {['Identity', 'Reputation', 'Capital', 'Execution', 'Settlement'].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-black border border-white/20 text-white/70">
                    {step}
                  </span>
                  {i < 4 && <span className="text-white/30">{isRTL ? '←' : '→'}</span>}
                </div>
              ))}
            </div>

            <div className="mt-16 space-y-4 text-lg text-white/60">
              <p>{t('briefing.slide4.point1')}</p>
              <p>{t('briefing.slide4.point2')}</p>
              <p>{t('briefing.slide4.point3')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 5: Scale */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide5.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide5.headline')}
            </h2>

            <p className="mt-6 text-lg text-white/60">
              {t('briefing.slide5.subheadline')}
            </p>

            <div className="mt-12 space-y-6">
              {['point1', 'point2', 'point3'].map((key) => (
                <div key={key} className={`border-white/10 ${isRTL ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}>
                  <p className="text-white/70">
                    <span className="font-medium text-white/80">{t(`briefing.slide5.${key}.title`)}:</span>{' '}
                    {t(`briefing.slide5.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 6: Markets */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide6.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide6.headline')}
            </h2>

            <p className="mt-6 text-lg text-white/60">
              {t('briefing.slide6.subheadline')}
            </p>

            <div className="mt-12 space-y-6">
              {['point1', 'point2', 'point3'].map((key) => (
                <div key={key} className={`border-white/10 ${isRTL ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}>
                  <p className="text-white/70">
                    <span className="font-medium text-white/80">{t(`briefing.slide6.${key}.title`)}:</span>{' '}
                    {t(`briefing.slide6.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 7: Token Model */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide7.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide7.headline')}
            </h2>

            <p className="mt-6 text-lg text-white/60">
              {t('briefing.slide7.subheadline')}
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {['governance', 'capital', 'execution', 'trust'].map((key) => (
                <div key={key} className="bg-black border border-white/10 p-6">
                  <h3 className="text-sm tracking-wider uppercase text-white/80 font-medium">
                    {t(`briefing.slide7.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-white/50 text-sm">
                    {t(`briefing.slide7.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 8: The Physical Layer */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide8.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide8.headline')}
            </h2>

            <p className="mt-6 text-lg text-white/60">
              {t('briefing.slide8.subheadline')}
            </p>

            <div className="mt-12 space-y-6">
              {['point1', 'point2', 'point3'].map((key) => (
                <div key={key} className={`border-white/10 ${isRTL ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}>
                  <p className="text-white/70">
                    <span className="font-medium text-white/80">{t(`briefing.slide8.${key}.title`)}:</span>{' '}
                    {t(`briefing.slide8.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-lg text-white/70 italic">
              {t('briefing.slide8.closing')}
            </p>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 9: The Missing Link */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide9.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide9.headline')}
            </h2>

            {/* Comparison Table */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-black border border-white/10 p-4">
                <h4 className="text-xs tracking-wider uppercase text-white/50 mb-4">{t('briefing.slide9.built')}</h4>
                <div className="space-y-3">
                  <p className="text-white/70 text-sm">✓ {t('briefing.slide9.built1')}</p>
                  <p className="text-white/70 text-sm">✓ {t('briefing.slide9.built2')}</p>
                  <p className="text-white/70 text-sm">✓ {t('briefing.slide9.built3')}</p>
                </div>
              </div>
              <div className="bg-black border border-white/10 p-4">
                <h4 className="text-xs tracking-wider uppercase text-white/50 mb-4">{t('briefing.slide9.missing')}</h4>
                <div className="space-y-3">
                  <p className="text-white/50 text-sm">× {t('briefing.slide9.missing1')}</p>
                  <p className="text-white/50 text-sm">× {t('briefing.slide9.missing2')}</p>
                  <p className="text-white/50 text-sm">× {t('briefing.slide9.missing3')}</p>
                </div>
              </div>
            </div>

            <p className="mt-12 text-lg text-white/70 italic">
              {t('briefing.slide9.closing')}
            </p>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 10: Risk Engine */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide10.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide10.headline')}
            </h2>

            <div className="mt-12 space-y-4">
              {['risk1', 'risk2', 'risk3', 'risk4'].map((key) => (
                <div key={key} className="flex items-center gap-4 bg-black border border-white/10 p-4">
                  <div className="flex-1">
                    <span className="text-[10px] tracking-wider uppercase text-white/40">RISK</span>
                    <p className="text-white/70">{t(`briefing.slide10.${key}.risk`)}</p>
                  </div>
                  <span className="text-white/30">→</span>
                  <div className="flex-1">
                    <span className="text-[10px] tracking-wider uppercase text-white/40">GUARDRAIL</span>
                    <p className="text-white/70">{t(`briefing.slide10.${key}.guardrail`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 11: Value Add */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide11.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide11.headline')}
            </h2>

            <p className="mt-6 text-lg text-white/60">
              {t('briefing.slide11.subheadline')}
            </p>

            <div className="mt-12 space-y-6">
              {['point1', 'point2', 'point3'].map((key) => (
                <div key={key} className={`border-white/10 ${isRTL ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}>
                  <p className="text-white/70">
                    <span className="font-medium text-white/80">{t(`briefing.slide11.${key}.title`)}:</span>{' '}
                    {t(`briefing.slide11.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 12: Architecture */}
      <section className="relative min-h-svh flex items-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide12.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide12.headline')}
            </h2>

            {/* Stack Visualization */}
            <div className="mt-12 space-y-4 max-w-md mx-auto">
              <div className="bg-black border border-white/20 p-6">
                <span className="text-[10px] tracking-wider uppercase text-white/40">PHYSICAL LAYER</span>
                <p className="mt-2 text-white/70">{t('briefing.slide12.layer1')}</p>
              </div>
              <div className="text-white/30">↓</div>
              <div className="bg-black border border-white/20 p-6">
                <span className="text-[10px] tracking-wider uppercase text-white/40">AMAI PROTOCOL</span>
                <p className="mt-2 text-white/70">{t('briefing.slide12.layer2')}</p>
              </div>
              <div className="text-white/30">↓</div>
              <div className="bg-black border border-white/20 p-6">
                <span className="text-[10px] tracking-wider uppercase text-white/40">AGENT SWARM</span>
                <p className="mt-2 text-white/70">{t('briefing.slide12.layer3')}</p>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/40 font-mono">
              {t('briefing.slide12.status')}
            </p>
          </motion.div>
        </div>
      </section>

      <SlideDivider />

      {/* Slide 13: Close */}
      <section className="relative min-h-svh flex items-center justify-center px-6 py-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-medium">
              {t('briefing.slide13.label')}
            </span>
            
            <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-white">
              {t('briefing.slide13.headline')}
            </h2>

            {/* Triad */}
            <div className="mt-12 flex items-center justify-center gap-3 md:gap-5 text-lg md:text-xl text-white/60">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Accountability
              </motion.span>
              <span className="text-white/20">—</span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Trust
              </motion.span>
              <span className="text-white/20">—</span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Transparency
              </motion.span>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="px-8 py-3 bg-black border border-white/20 text-white/80 text-sm tracking-wider uppercase hover:bg-white/5 transition-colors"
              >
                {t('briefing.slide13.cta1')}
              </a>
              <a
                href="/thesis"
                className="px-8 py-3 bg-black border border-white/20 text-white/80 text-sm tracking-wider uppercase hover:bg-white/5 transition-colors"
              >
                {t('briefing.slide13.cta2')}
              </a>
              <a
                href="mailto:team@amai.net?subject=Mission%20Briefing%20%2F%2F%20%5BOrganization%20Name%5D&body=To%20the%20AMAI%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20the%20%5BThesis%20%2F%20Architecture%5D.%0A%0AName%3A%20%0AOrganization%3A%20%0AIntent%3A%20"
                onClick={handleContactClick}
                className="px-8 py-3 bg-white/10 border border-white/30 text-white text-sm tracking-wider uppercase hover:bg-white/20 transition-colors"
              >
                {t('briefing.slide13.cta3')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Briefing;
