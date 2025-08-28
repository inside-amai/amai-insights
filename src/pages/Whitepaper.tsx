import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const whitepaperSections = [
  {
    slug: 'platform-overview',
    title: 'Platform Overview',
    description: 'Revolutionary AI Terminal with autonomous operations and real-time execution capabilities.',
    eyebrow: 'Core Platform'
  },
  {
    slug: 'technical-foundation',
    title: 'Technical Foundation',
    description: 'Built on Sui blockchain with Move modules, dApp kit integration, and parallel execution.',
    eyebrow: 'Architecture'
  },
  {
    slug: 'roadmap',
    title: 'Development Roadmap',
    description: 'Strategic development phases and key milestones from 2025 to 2027.',
    eyebrow: 'Timeline'
  },
  {
    slug: 'tokenomics-governance',
    title: 'Tokenomics & Governance',
    description: 'Community-driven platform with transparent token distribution and governance mechanisms.',
    eyebrow: 'Economics'
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Common questions about AMAI platform, technology, and implementation details.',
    eyebrow: 'Questions?'
  }
];

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
              Technical Documentation
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-hero mt-4 mb-6">
              Dive Deeper
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive technical documentation covering platform architecture, 
              tokenomics, development roadmap, and implementation details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {whitepaperSections.map((section, index) => (
              <motion.div
                key={section.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {section.eyebrow}
                    </span>
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={`/whitepaper/${section.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Whitepaper;