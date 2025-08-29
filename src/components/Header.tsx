import { Link } from 'react-router-dom';
// import amaiHeaderLogo from '@/assets/amai-header-logo-new.png';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto pl-3 pr-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="https://www.amai.net/" className="flex items-center">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/67609414493d9c7734fa7b83/6149ec74-3433-4754-9ba2-eaf224fa55c7/AMAI+logos+%2880%29.png?format=2500w"
              alt="AMAI Logo" 
              className="h-12 w-auto hover:opacity-80 transition-opacity"
              loading="eager"
            />
          </a>
          
          {/* Future navigation items can go here */}
          <div className="flex items-center space-x-6">
            {/* Navigation items will be added later */}
          </div>
        </div>
      </div>
    </header>
  );
};