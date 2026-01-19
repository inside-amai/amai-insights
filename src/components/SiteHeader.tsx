import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ar', label: 'AR' },
];

export const SiteHeader = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const isDeckPage = location.pathname === '/deck';

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Site Title - Hidden on /deck page */}
          {!isDeckPage && (
            <div className="flex items-center gap-4">
              <a 
                href="https://amai.net" 
                className="pointer-events-auto w-[64px] h-10 flex-shrink-0"
              >
                <img 
                  src="/amai-header-logo.png"
                  alt="AMAI" 
                  className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  loading="eager"
                />
              </a>
              <span className="hidden sm:block text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                AMAI Labs · Infrastructure & Research
              </span>
            </div>
          )}

          {/* Language Selector */}
          <div className="pointer-events-auto flex items-center gap-1 text-[11px] tracking-wide">
            {languages.map((lang, index) => (
              <span key={lang.code} className="flex items-center">
                <button
                  onClick={() => setLanguage(lang.code)}
                  className={`transition-opacity ${
                    language === lang.code 
                      ? 'text-white/90' 
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {lang.label}
                </button>
                {index < languages.length - 1 && (
                  <span className="text-white/20 mx-2">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;