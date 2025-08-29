import { ReactNode } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const whitepaperSections = [
  { slug: 'platform-overview', title: 'Platform Overview' },
  { slug: 'technical-foundation', title: 'Technical Foundation' },
  { slug: 'roadmap', title: 'Development Roadmap' },
  { slug: 'tokenomics-governance', title: 'Tokenomics & Governance' },
  { slug: 'faq', title: 'Frequently Asked Questions' }
];

interface WhitepaperLayoutProps {
  children: ReactNode;
  title: string;
  eyebrow: string;
}

export const WhitepaperLayout = ({ children, title, eyebrow }: WhitepaperLayoutProps) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const currentIndex = whitepaperSections.findIndex(section => section.slug === slug);
  const prevSection = currentIndex > 0 ? whitepaperSections[currentIndex - 1] : null;
  const nextSection = currentIndex < whitepaperSections.length - 1 ? whitepaperSections[currentIndex + 1] : null;

  // Analytics hook
  if (typeof window !== 'undefined' && (window as any).gtag && slug) {
    (window as any).gtag('event', 'whitepaper_view', { section: slug });
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {/* Large moving stars */}
        <div className="absolute top-20 left-20 w-2 h-2 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-32 right-32 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s', transform: 'translateY(-10px)', animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute bottom-40 left-40 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 8s linear infinite' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute top-10 left-1/2 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 7s ease-in-out infinite' }} />
        <div className="absolute bottom-10 left-1/3 w-3 h-3" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 5s ease-in-out infinite reverse' }} />
        <div className="absolute top-40 right-40 w-2 h-2 animate-bounce" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.5s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 right-60 w-3 h-3" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 6s ease-in-out infinite' }} />
        
        {/* Medium moving stars */}
        <div className="absolute top-60 left-60 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 4s ease-in-out infinite' }} />
        <div className="absolute top-96 right-60 w-1.5 h-1.5 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.5s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-60 left-80 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 10s linear infinite reverse' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 6s ease-in-out infinite reverse' }} />
        
        {/* Small moving stars */}
        <div className="absolute top-40 left-96 w-1 h-1 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s' }} />
        <div className="absolute top-80 right-96 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 3s ease-in-out infinite' }} />
        <div className="absolute bottom-80 left-20 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 12s linear infinite' }} />
        <div className="absolute bottom-96 right-40 w-1 h-1 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '2.5s' }} />
        <div className="absolute top-1/4 left-1/4 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 8s ease-in-out infinite' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 4.5s ease-in-out infinite reverse' }} />
      </div>
      
      {/* Sticky Back Button */}
      <div className="fixed top-6 left-6 z-50 relative">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-card/80 backdrop-blur-sm"
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
            <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
              {eyebrow}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-hero mt-4 mb-6">
              {title}
            </h1>
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
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 lg:p-12"
          >
            {children}
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
                className="group"
                onClick={() => navigate(`/whitepaper/${prevSection.slug}`)}
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
                className="group"
                onClick={() => navigate(`/whitepaper/${nextSection.slug}`)}
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
    </div>
  );
};