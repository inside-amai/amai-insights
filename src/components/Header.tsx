import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const whitepaperSections = [
  {
    slug: 'summary-vision',
    title: 'Summary & Vision',
    eyebrow: 'Overview'
  },
  {
    slug: 'Our-journey',
    title: 'How We Got Here',
    eyebrow: 'Our Journey'
  },
  {
    slug: 'platform-overview',
    title: 'Platform Overview',
    eyebrow: 'Core Platform'
  },
  {
    slug: 'problem-landscape',
    title: 'Problem Landscape',
    eyebrow: 'Problem'
  },
  {
    slug: 'system-architecture',
    title: 'System Architecture',
    eyebrow: 'Architecture'
  },
  {
    slug: 'technical-deep-dive',
    title: 'Technical Deep-Dive',
    eyebrow: 'Technical'
  },
  {
    slug: 'agent-economy-kips',
    title: 'Agent Economy & KIPs',
    eyebrow: 'Economy'
  },
  {
    slug: 'roadmap-milestones',
    title: 'Roadmap & Milestones',
    eyebrow: 'Timeline'
  },
  {
    slug: 'token',
    title: 'Token Utility',
    eyebrow: 'Token'
  }
];

export const Header = () => {
  const location = useLocation();
  const isFoundersMintPage = location.pathname === '/founders-mint';
  const isOKXPage = location.pathname === '/okx';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
              <Link 
                to="/genesis-mint"
                className="text-white bg-transparent border-none px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Back to Genesis
              </Link>
            </div>
          )}
          
          {/* Mobile Hamburger Menu - Only show when not on Founders Mint page */}
          {!isFoundersMintPage && (
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 hover:opacity-80 transition-opacity"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
          
          {/* Center Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center">
            <Link 
              to={isOKXPage ? "/" : "/okx"}
              className="text-white bg-transparent px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 transition-all duration-200"
            >
              {isOKXPage ? "Platform" : "OKX Giveaway"}
            </Link>
          </div>
          
          {/* Future navigation items can go here for desktop */}
          {!isFoundersMintPage && (
            <div className="hidden md:flex items-center space-x-6">
              {/* Navigation items will be added later */}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                <Link
                  to="/okx"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 border-b border-gray-800"
                >
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      Giveaway
                    </div>
                    <div className="text-white font-medium hover:text-purple-accent transition-colors">
                      OKX Wallet Connect
                    </div>
                  </div>
                </Link>
                <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                  Documentation
                </div>
                {whitepaperSections.map((section, index) => (
                  <Link
                    key={section.slug}
                    to={`/whitepaper/${section.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 border-b border-gray-800 last:border-b-0"
                  >
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-wider text-gray-500">
                        {section.eyebrow}
                      </div>
                      <div className="text-white font-medium hover:text-purple-accent transition-colors">
                        {section.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};