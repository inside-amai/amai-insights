import { Link } from 'react-router-dom';

export const SiteHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - links to amai.net */}
          <a 
            href="https://amai.net" 
            className="pointer-events-auto"
          >
            <img 
              src="/amai-header-logo.png"
              alt="AMAI" 
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
              loading="eager"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
