import { Link } from 'react-router-dom';

export const SiteHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Site Title */}
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
            <span className="hidden sm:block text-white/70 text-sm font-light tracking-wide">
              AMAI Labs · Infrastructure & Research
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
