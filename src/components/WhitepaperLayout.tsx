import { ReactNode } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';

export const whitepaperSections = [
  { slug: 'summary-vision', title: 'Summary & Vision' },
  { slug: 'Our-journey', title: 'Our Journey' },
  { slug: 'platform-overview', title: 'Platform' },
  { slug: 'problem-landscape', title: 'Problem' },
  { slug: 'system-architecture', title: 'Architecture' },
  { slug: 'technical-deep-dive', title: 'Technical' },
  { slug: 'agent-economy-kips', title: 'Agent Economy' },
  { slug: 'roadmap-milestones', title: 'Roadmap' },
  { slug: 'token', title: 'Token' }
];

interface WhitepaperLayoutProps {
  children: ReactNode;
  title: string;
  eyebrow: string;
}

export const WhitepaperLayout = ({ children, title, eyebrow }: WhitepaperLayoutProps) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Extract slug from current pathname since useParams might not work correctly
  const currentSlug = useParams().slug;
  
  const currentIndex = whitepaperSections.findIndex(section => section.slug === currentSlug);
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
        <div className="absolute top-16 left-12 w-2.5 h-2.5 animate-pulse" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-16 right-12 w-2.5 h-2.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 7s linear infinite reverse' }} />
        <div className="absolute top-1/2 left-16 w-2 h-2 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.8s', animationDelay: '2.2s' }} />
        <div className="absolute top-1/2 right-16 w-2.5 h-2.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 5.5s ease-in-out infinite' }} />
        
        {/* Medium moving stars */}
        <div className="absolute top-60 left-60 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 4s ease-in-out infinite' }} />
        <div className="absolute top-96 right-60 w-1.5 h-1.5 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.5s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-60 left-80 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 10s linear infinite reverse' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 6s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 7s ease-in-out infinite' }} />
        <div className="absolute top-28 left-80 w-1.5 h-1.5 animate-pulse" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.2s', animationDelay: '0.8s' }} />
        <div className="absolute bottom-28 right-80 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 5s ease-in-out infinite' }} />
        <div className="absolute top-44 right-24 w-1.5 h-1.5" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 8.5s linear infinite' }} />
        <div className="absolute bottom-44 left-24 w-1.5 h-1.5 animate-bounce" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4.2s', animationDelay: '1.8s' }} />
        <div className="absolute top-52 left-32 w-1.5 h-1.5" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 7.5s ease-in-out infinite' }} />
        <div className="absolute bottom-52 right-32 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 6.5s ease-in-out infinite reverse' }} />
        <div className="absolute top-72 left-48 w-1.5 h-1.5 animate-pulse" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.8s', animationDelay: '2.5s' }} />
        <div className="absolute bottom-72 right-48 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 4.5s ease-in-out infinite' }} />
        
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
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-16 right-16 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 5s ease-in-out infinite' }} />
        <div className="absolute bottom-16 left-16 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 9s linear infinite reverse' }} />
        <div className="absolute top-24 left-28 w-1 h-1 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.2s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-24 right-28 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 6.5s ease-in-out infinite' }} />
        <div className="absolute top-36 right-36 w-1 h-1 animate-ping" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '2.8s', animationDelay: '1.2s' }} />
        <div className="absolute bottom-36 left-36 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 5.5s ease-in-out infinite' }} />
        <div className="absolute top-48 left-56 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 4.2s ease-in-out infinite' }} />
        <div className="absolute bottom-48 right-56 w-1 h-1 animate-pulse" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.5s', animationDelay: '1.8s' }} />
        <div className="absolute top-64 right-64 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 7.5s linear infinite' }} />
        <div className="absolute bottom-64 left-64 w-1 h-1 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.8s', animationDelay: '0.3s' }} />
        <div className="absolute top-88 left-72 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 8.5s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-88 right-72 w-1 h-1 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4.5s', animationDelay: '2.1s' }} />
        
        {/* Extra tiny stars for density */}
        <div className="absolute top-12 left-64 w-0.5 h-0.5 animate-pulse" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '2s', animationDelay: '0.2s' }} />
        <div className="absolute bottom-12 right-64 w-0.5 h-0.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 3.5s ease-in-out infinite' }} />
        <div className="absolute top-56 left-44 w-0.5 h-0.5 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '2.5s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-56 right-44 w-0.5 h-0.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 4s ease-in-out infinite' }} />
      </div>
      
      {/* Sticky Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-cyan-500/20 backdrop-blur-sm border-cyan-400/30 text-white hover:bg-cyan-500/30 hover:text-white rounded-full"
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
            <span className="text-sm font-medium text-white uppercase tracking-wider">
              {eyebrow}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-hero mt-4 mb-6">
              <span className="shimmer-text text-transparent">
                {title}
              </span>
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
            className="max-w-4xl mx-auto p-8 lg:p-12"
          >
            <div className="text-white">{children}</div>
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
                className="group bg-cyan-500/20 backdrop-blur-sm border-cyan-400/30 text-white hover:bg-cyan-500/30 hover:text-white rounded-full"
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
                className="group bg-cyan-500/20 backdrop-blur-sm border-cyan-400/30 text-white hover:bg-cyan-500/30 hover:text-white rounded-full"
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

      {/* Footer */}
      <Footer transparent />
    </div>
  );
};