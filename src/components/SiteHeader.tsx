import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { showEmailFallbackToast } from '@/lib/contact-toast';
import { Copy, Check, Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import headerIcon from '@/assets/amai-header-icon.png';

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
  const navigate = useNavigate();
  const isThesisPage = location.pathname === '/thesis';
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const isDeckPage = location.pathname === '/briefing' || location.pathname === '/pitch';
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);


  const scrollToRunIt = () => {
    const el = document.getElementById('install-tari');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    if (isHomePage) {
      scrollToRunIt();
    } else {
      navigate('/');
      setTimeout(scrollToRunIt, 300);
    }
  };

  const handleContactClick = () => {
    showEmailFallbackToast();
  };

  const mailto = "mailto:team@amai.net?subject=Mission%20Briefing%20%2F%2F%20%5BOrganization%20Name%5D&body=To%20the%20AMAI%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20the%20%5BThesis%20%2F%20Architecture%5D.%0A%0AName%3A%20%0AOrganization%3A%20%0AIntent%3A%20";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none bg-black/80 backdrop-blur-md border-b border-white/5">

      <div className="container mx-auto px-6 py-4">
        <div className={`flex items-center ${isDeckPage ? 'justify-center' : 'justify-between'}`}>
          {/* Logo + Site Title - Hidden on /deck page */}
          {!isDeckPage && (
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link 
                to="/" 
                className="pointer-events-auto flex-shrink-0"
              >
                <img 
                  src={headerIcon}
                  alt="AMAI" 
                  className="h-7 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  style={{ 
                    transform: 'translateZ(0)', 
                    backfaceVisibility: 'hidden'
                  }}
                  loading="eager"
                  decoding="async"
                />
              </Link>
              <span className="hidden sm:block text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                AMAI Labs · Infrastructure & Research
              </span>
            </div>
          )}

          {/* Desktop Nav */}
          <div className="pointer-events-auto hidden sm:flex items-center gap-4 text-[11px] tracking-wide flex-shrink-0 whitespace-nowrap">
            {!isDeckPage && (
              <a 
                href={mailto}
                onClick={handleContactClick}
                className="text-white/60 hover:text-white/90 transition-opacity tracking-[0.1em] uppercase"
              >
                Contact
              </a>
            )}
            {!isDeckPage && (
              <button
                type="button"
                onClick={handleGetStarted}
                className="px-4 py-2 rounded-full bg-white/85 text-black hover:bg-white font-medium tracking-[0.05em] uppercase transition-all"
              >
                GET STARTED
              </button>
            )}
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


          {/* Mobile Hamburger */}
          {!isDeckPage && (
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="pointer-events-auto sm:hidden flex items-center justify-center w-10 h-10 -mr-2 text-white/80 hover:text-white transition-colors"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto sm:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <img 
              src={headerIcon}
              alt="AMAI" 
              className="h-7 w-auto opacity-90"
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-10 h-10 -mr-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            <button
              type="button"
              onClick={() => { setMobileOpen(false); handleGetStarted(); }}
              className="block text-left py-4 text-2xl font-light text-white/90 hover:text-white tracking-tight border-b border-white/10"
            >
              GET STARTED
            </button>
            <a
              href={mailto}
              onClick={() => { setMobileOpen(false); handleContactClick(); }}
              className="block py-4 text-2xl font-light text-white/90 hover:text-white tracking-tight border-b border-white/10"
            >
              Contact
            </a>
          </nav>


          <div className="px-8 pb-12 pt-6">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 flex items-center gap-2">
              <Globe className="h-3 w-3" /> Language
            </div>
            <div className="flex items-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-sm tracking-wide transition-opacity ${
                    language === lang.code 
                      ? 'text-white' 
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
