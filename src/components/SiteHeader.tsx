import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ar', label: 'AR' },
];

// Self-contained copy button that manages its own state
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

export const SiteHeader = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const isDeckPage = location.pathname === '/deck' || location.pathname === '/tether' || location.pathname === '/briefing' || location.pathname === '/liability-layer';
  const isThesisPage = location.pathname === '/thesis';

  const handleContactClick = () => {
    // Show toast after a brief delay to allow mailto to attempt opening
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
    <header className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6 py-4">
        <div className={`flex items-center ${isDeckPage ? 'justify-center' : 'justify-between'}`}>
          {/* Logo + Site Title - Hidden on /deck page */}
          {!isDeckPage && (
            <div className="flex items-center gap-4">
              <a 
                href="https://amai.net" 
                className="pointer-events-auto w-[48px] md:w-[64px] h-7 md:h-10 flex-shrink-0"
              >
                <img 
                  src="/amai-header-logo.png"
                  alt="AMAI" 
                  className="h-7 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  loading="eager"
                />
              </a>
              <span className="hidden sm:block text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                AMAI Labs · Infrastructure & Research
              </span>
            </div>
          )}

          {/* Navigation + Language Selector */}
          <div className="pointer-events-auto flex items-center gap-4 text-[11px] tracking-wide">
            {/* Contact Link - hidden on /deck and /tether */}
            {!isDeckPage && (
              <a 
                href="mailto:team@amai.net?subject=Mission%20Briefing%20%2F%2F%20%5BOrganization%20Name%5D&body=To%20the%20AMAI%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20the%20%5BThesis%20%2F%20Architecture%5D.%0A%0AName%3A%20%0AOrganization%3A%20%0AIntent%3A%20"
                onClick={handleContactClick}
                className="text-white/60 hover:text-white/90 transition-opacity tracking-[0.1em] uppercase"
              >
                Contact
              </a>
            )}
            
            {/* Navigation Link - hidden on /deck and /tether */}
            {!isDeckPage && (
              <Link 
                to={isThesisPage ? "/" : "/thesis"}
                className="text-white/60 hover:text-white/90 transition-opacity tracking-[0.1em] uppercase"
              >
                {isThesisPage ? "View Architecture" : "Explore The Thesis"}
              </Link>
            )}
            
            {/* Language Selector */}
            <div className="flex items-center gap-1">
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
      </div>
    </header>
  );
};

export default SiteHeader;