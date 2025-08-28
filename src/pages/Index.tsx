import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { ExplainerHero } from '@/components/ExplainerHero';
import { ExplainerSection } from '@/components/ExplainerSection';
import { ExplainerFAQ } from '@/components/ExplainerFAQ';
import terminalDemo from '@/assets/terminal-demo.jpg';
import circuitBoard from '@/assets/circuit-board.jpg';
import roadmapTimeline from '@/assets/roadmap-timeline.jpg';
import tokenChart from '@/assets/token-chart.jpg';

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
    eyebrow: 'Support'
  }
];

const Index = () => {
  return (
    <div>
      {/* Explainer Section */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <ExplainerHero />
        
        {/* Platform Overview */}
        <ExplainerSection
          eyebrow="Platform Overview"
          title="Revolutionary AI Terminal"
          content={
            <div className="space-y-4">
              <p>
                TODO: Brief description of the AMAI platform and its core capabilities for autonomous AI operations.
              </p>
              <p>
                TODO: Highlight key features that make the terminal unique in the AI landscape.
              </p>
              <ul className="space-y-2 text-base">
                <li>• TODO: Real-time AI model execution</li>
                <li>• TODO: Decentralized processing power</li>
                <li>• TODO: Seamless blockchain integration</li>
              </ul>
            </div>
          }
          imageSrc={terminalDemo}
          imageAlt="AMAI Terminal Demo"
          overlayColor="rgba(37, 99, 235, 0.2)"
        />

        {/* Technical Stack */}
        <ExplainerSection
          eyebrow="Technical Foundation"
          title="Built on Sui Blockchain"
          content={
            <div className="space-y-4">
              <p>
                TODO: Technical overview of the Sui blockchain integration and smart contract architecture.
              </p>
              <ul className="space-y-3 text-base">
                <li>• <strong>Sui Move Modules:</strong> TODO: Core blockchain functionality</li>
                <li>• <strong>dApp Kit Integration:</strong> TODO: Frontend connectivity</li>
                <li>• <strong>Object Model:</strong> TODO: Data structure and storage</li>
                <li>• <strong>Consensus Layer:</strong> TODO: Transaction validation</li>
                <li>• <strong>Parallel Execution:</strong> TODO: High-performance processing</li>
              </ul>
            </div>
          }
          imageSrc={circuitBoard}
          imageAlt="Technical Architecture"
          reverse={true}
          overlayColor="rgba(147, 51, 234, 0.2)"
        />

        {/* Roadmap */}
        <ExplainerSection
          eyebrow="Development Timeline"
          title="2025-2027 Roadmap"
          content={
            <div className="space-y-4">
              <p>
                TODO: Strategic development phases and key milestones for the AMAI platform.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Q3 2025</h4>
                  <p className="text-sm">TODO: Platform beta launch and initial user testing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Q1 2026</h4>
                  <p className="text-sm">TODO: Token launch and governance implementation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Q3 2026</h4>
                  <p className="text-sm">TODO: Advanced AI features and scaling</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">2027</h4>
                  <p className="text-sm">TODO: Full ecosystem deployment and partnerships</p>
                </div>
              </div>
            </div>
          }
          imageSrc={roadmapTimeline}
          imageAlt="AMAI Roadmap Timeline"
          overlayColor="rgba(34, 197, 94, 0.2)"
        />

        {/* Token & Governance */}
        <ExplainerSection
          eyebrow="Tokenomics & Governance"
          title="Community-Driven Platform"
          content={
            <div className="space-y-4">
              <p>
                TODO: Token distribution model and governance structure for community participation.
              </p>
              <ul className="space-y-2 text-base">
                <li>• <strong>35%</strong> TODO: Community rewards and staking</li>
                <li>• <strong>25%</strong> TODO: Development and operations</li>
                <li>• <strong>20%</strong> TODO: Strategic partnerships</li>
                <li>• <strong>15%</strong> TODO: Team and advisors</li>
                <li>• <strong>5%</strong> TODO: Reserve fund</li>
              </ul>
              <p className="text-sm">
                TODO: Governance mechanisms and voting procedures for platform decisions.
              </p>
            </div>
          }
          imageSrc={tokenChart}
          imageAlt="Token Distribution Chart"
          reverse={true}
          overlayColor="rgba(239, 68, 68, 0.2)"
        />

      </div>

      {/* Whitepaper Section */}
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
                AMAI Whitepaper
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

      {/* FAQ Section */}
      <ExplainerFAQ />
    </div>
  );
};

export default Index;
