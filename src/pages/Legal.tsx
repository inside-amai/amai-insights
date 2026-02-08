import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { legalContent } from '@/data/legalContent';

const BulletList = ({ items }: { items: string[] }) => (
  <div className="space-y-2">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-3 group">
        <div className="w-4 h-px bg-white/20 mt-1.5 shrink-0" />
        <span className="text-xs text-white/50">{item}</span>
      </div>
    ))}
  </div>
);

const Legal = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const content = legalContent[language];

  useEffect(() => {
    document.title = 'Legal & Privacy | AMAI Labs';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header spacer */}
      <div className="h-16 bg-black" />

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors duration-200 mb-12 uppercase tracking-[0.2em]"
          >
            <ArrowLeft className="w-3 h-3" />
            {t('legal.back')}
          </Link>
        </motion.div>

        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
            {t('legal.title')}
          </h1>
          <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
            {t('legal.subtitle')}
          </p>
        </motion.div>

        {/* Terms & Conditions sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {content.sections.map((section, sIdx) => (
            <section key={sIdx}>
              <h2 className="text-sm font-medium text-white/80 mb-4">{section.title}</h2>
              {section.content.map((block, bIdx) => {
                if (block.type === 'p') {
                  return (
                    <p key={bIdx} className="text-white/50 text-sm leading-relaxed mb-3 last:mb-0 mt-3 first:mt-0">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'label') {
                  return (
                    <p key={bIdx} className="text-white/40 text-xs uppercase tracking-wider mb-3 mt-4 first:mt-0">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'bullets') {
                  return <BulletList key={bIdx} items={block.items} />;
                }
                return null;
              })}
            </section>
          ))}

          {/* Privacy Policy Section */}
          <div className="border-t border-white/10 pt-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
                {t('legal.privacy.title')}
              </h1>
              <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-12">
                {t('legal.privacy.subtitle')}
              </p>
            </motion.div>

            <div className="space-y-12">
              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.collection.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {t('legal.privacy.collection.intro')}
                </p>
                <BulletList items={[
                  t('legal.privacy.collection.item1'),
                  t('legal.privacy.collection.item2'),
                  t('legal.privacy.collection.item3'),
                  t('legal.privacy.collection.item4'),
                ]} />
                <p className="text-white/50 text-sm leading-relaxed mt-4">
                  {t('legal.privacy.collection.note')}
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.usage.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {t('legal.privacy.usage.intro')}
                </p>
                <BulletList items={[
                  t('legal.privacy.usage.item1'),
                  t('legal.privacy.usage.item2'),
                  t('legal.privacy.usage.item3'),
                  t('legal.privacy.usage.item4'),
                ]} />
              </section>

              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.sharing.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t('legal.privacy.sharing.body')}
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.cookies.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t('legal.privacy.cookies.body')}
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.contact.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t('legal.privacy.contact.body')}{' '}
                  <a href="mailto:team@amai.net" className="text-white/70 hover:text-white underline underline-offset-2 transition-colors duration-200">
                    team@amai.net
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Legal;
