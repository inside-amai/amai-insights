import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { showEmailFallbackToast } from '@/lib/contact-toast';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import headerIcon from '@/assets/amai-header-icon.png';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ar', label: 'AR' },
];

export const SiteHeader = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
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


  const handleContactClick = () => {
    showEmailFallbackToast();
  };

  const mailto = "mailto:team@amai.net?subject=Mission%20Briefing%20%2F%2F%20%5BOrganization%20Name%5D&body=To%20the%20AMAI%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20the%20%5BThesis%20%2F%20Architecture%5D.%0A%0AName%3A%20%0AOrganization%3A%20%0AIntent%3A%20";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 pointer-events-none border-b border-white/5 ${mobileOpen ? 'bg-black' : 'bg-black/80 backdrop-blur-md'}`}>

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0 min-w-0">
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
              <span className="block max-w-[150px] sm:max-w-none text-[8px] sm:text-[11px] leading-relaxed tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/40 font-medium">
                AMAI Labs · Infrastructure & Research
              </span>
            </div>

          {/* Desktop Nav */}
          <nav className="pointer-events-auto hidden sm:flex items-center text-[11px] tracking-[0.1em] flex-shrink-0 whitespace-nowrap uppercase text-white/60">
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-white/90 transition-colors">Home</Link><span className="text-white/20">·</span>
              <Link to="/operators" className="hover:text-white/90 transition-colors">Operators</Link><span className="text-white/20">·</span>
              <Link to="/launchpad" className="hover:text-white/90 transition-colors">Launchpad</Link><span className="text-white/20">·</span>
              <Link to="/tari" className="hover:text-white/90 transition-colors">Tari</Link><span className="text-white/20">·</span>
              <a href="https://bureau.amai.net" target="_blank" rel="noopener noreferrer" className="hover:text-white/90 transition-colors">Bureau ↗</a><span className="text-white/20">·</span>
              <button type="button" onClick={handleTeamClick} className="uppercase hover:text-white/90 transition-colors">Team</button><span className="text-white/20">·</span>
              <a href={mailto} onClick={handleContactClick} className="hover:text-white/90 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-1 ml-5 pl-5 border-l border-white/10">
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
          </nav>


          {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="pointer-events-auto sm:hidden flex items-center justify-center w-10 h-10 -mr-2 text-white/80 hover:text-white transition-colors"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
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

          <nav className="flex-1 flex flex-col justify-center px-8">
            <Link to="/" className="py-3 text-xl font-light uppercase text-white/90 border-b border-white/10">Home</Link>
            <Link to="/operators" className="py-3 text-xl font-light uppercase text-white/90 border-b border-white/10">Operators</Link>
            <Link to="/launchpad" className="py-3 text-xl font-light uppercase text-white/90 border-b border-white/10">Launchpad</Link>
            <Link to="/tari" className="py-3 text-xl font-light uppercase text-white/90 border-b border-white/10">Tari</Link>
            <a href="https://bureau.amai.net" target="_blank" rel="noopener noreferrer" className="py-3 text-xl font-light uppercase text-white/90 border-b border-white/10">Bureau ↗</a>
            <button type="button" onClick={handleTeamClick} className="py-3 text-left text-xl font-light uppercase text-white/90 border-b border-white/10">Team</button>
            <a href={mailto} onClick={() => { setMobileOpen(false); handleContactClick(); }} className="py-3 text-xl font-light uppercase text-white/90 border-b border-white/10">Contact</a>
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
