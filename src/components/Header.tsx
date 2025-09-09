import { Link, useLocation } from 'react-router-dom';
// import amaiHeaderLogo from '@/assets/amai-header-logo-new.png';

export const Header = () => {
  const location = useLocation();
  const isFoundersMintPage = location.pathname === '/founders-mint';

  return (
    <header className="absolute top-0 left-0 right-0 z-50" style={{ background: 'transparent' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/262e27b2-1bd9-4177-aebe-841d7cce6b6a.png"
              alt="AMAI Logo" 
              className="h-12 w-auto hover:opacity-80 transition-opacity"
              loading="eager"
            />
          </Link>
          
          {/* Back to Genesis button for Founders Mint page */}
          {isFoundersMintPage && (
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <button 
                className="text-white bg-transparent border-none px-4 py-2 text-sm font-medium"
                onClick={() => window.location.href = '/genesis-mint'}
              >
                Back to Genesis
              </button>
            </div>
          )}
          
          {/* Future navigation items can go here */}
          {!isFoundersMintPage && (
            <div className="flex items-center space-x-6">
              {/* Navigation items will be added later */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};