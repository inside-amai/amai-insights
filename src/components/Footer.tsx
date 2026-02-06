import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  transparent?: boolean;
}

export const Footer = ({ transparent = false }: FooterProps) => {
  const { t } = useLanguage();

  return (
    <footer className={`py-6 border-t border-border/20 ${transparent ? "bg-transparent" : "bg-black"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm font-light tracking-wide">
            {t('footer.company')}
          </p>
          <p className="text-muted-foreground/60 text-xs font-light tracking-wide">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};