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
    <div className="min-h-screen bg-gradient-primary">
      {/* Sticky Back Button */}
      <div className="fixed top-6 left-6 z-50">
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
      <section className="relative pt-32 pb-16">
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
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {children}
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-20">
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