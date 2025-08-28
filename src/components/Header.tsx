import { Link } from 'react-router-dom';
import amaiHeaderLogo from '@/assets/amai-header-logo.png';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={amaiHeaderLogo} 
              alt="AMAI Logo" 
              className="h-12 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Future navigation items can go here */}
          <div className="flex items-center space-x-6">
            {/* Navigation items will be added later */}
          </div>
        </div>
      </div>
    </header>
  );
};