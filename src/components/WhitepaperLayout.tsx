import { ReactNode, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';

export const whitepaperSections = [
  { slug: 'summary-vision', title: 'Summary & Vision' },
  { slug: 'Our-journey', title: 'Our Journey' },
  { slug: 'platform-overview', title: 'Platform' },
  { slug: 'problem-landscape', title: 'Problem' },
  { slug: 'token', title: 'Token' },
  { slug: 'system-architecture', title: 'Architecture' },
  { slug: 'technical-deep-dive', title: 'Technical' },
  { slug: 'agent-economy-kips', title: 'Agent Economy' },
  { slug: 'roadmap-milestones', title: 'Roadmap' }
];

interface WhitepaperLayoutProps {
  children: ReactNode;
  title: string | ReactNode;
  eyebrow: string;
}

export const WhitepaperLayout = ({ children, title, eyebrow }: WhitepaperLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract slug from current pathname
  const currentSlug = location.pathname.split('/').pop();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);
  
  const currentIndex = whitepaperSections.findIndex(section => section.slug === currentSlug);
  const prevSection = currentIndex > 0 ? whitepaperSections[currentIndex - 1] : null;
  const nextSection = currentIndex < whitepaperSections.length - 1 ? whitepaperSections[currentIndex + 1] : null;

  // Analytics hook
  if (typeof window !== 'undefined' && (window as any).gtag && currentSlug) {
    (window as any).gtag('event', 'whitepaper_view', { section: currentSlug });
  }

  return (
    <div className="min-h-screen bg-perspective-grid relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
      
      {/* Sticky Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white/50 hover:bg-gray-800 hover:text-white hover:border-gray-600 rounded-md font-roboto text-sm"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const element = document.getElementById('technical-docs');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Overview
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {eyebrow && (
              <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium font-roboto">
                {eyebrow}
              </span>
            )}
            <h1 className="text-3xl lg:text-5xl font-light text-white mt-4 mb-6 font-roboto tracking-tight">
              {typeof title === 'string' ? (
                <span className="text-white">
                  {title}
                </span>
              ) : (
                title
              )}
            </h1>
            {/* Thin horizontal line */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-white font-roboto">{children}</div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            {prevSection ? (
              <Button 
                asChild 
                variant="outline" 
                className="group bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white/50 hover:bg-gray-800 hover:text-white hover:border-gray-600 rounded-md font-roboto"
              >
                <Link to={`/whitepaper/${prevSection.slug}`}>
                  <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  {prevSection.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}

            {nextSection ? (
              <Button 
                asChild 
                variant="outline" 
                className="group bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white/50 hover:bg-gray-800 hover:text-white hover:border-gray-600 rounded-md font-roboto"
              >
                <Link to={`/whitepaper/${nextSection.slug}`}>
                  {nextSection.title}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhitepaperLayout;
