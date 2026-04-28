import { useLanguage } from '@/contexts/LanguageContext';
import amaiLogo from '@/assets/amai-logo-tm.png';

interface FooterProps {
  transparent?: boolean;
  compact?: boolean;
}

export const Footer = ({ transparent = false }: FooterProps) => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <footer
      className={`border-t border-white/10 ${transparent ? 'bg-transparent' : 'bg-black'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-3">
          <img
            src={amaiLogo}
            alt="AMAI Labs"
            className="h-5 w-auto opacity-40"
          />
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
            {t('footer.company')}
          </p>
          <p className="text-xs text-white/25 font-light tracking-wide">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
