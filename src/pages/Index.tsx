import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { ExplainerHero } from '@/components/ExplainerHero';
import { ExplainerSection } from '@/components/ExplainerSection';
import { ExplainerFAQ } from '@/components/ExplainerFAQ';
import { WhitepaperCard } from '@/components/WhitepaperCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
      {/* Explainer Section - Hero with header overlay */}
      <div className="relative">
        <Header />
        <ExplainerHero />
      </div>
      {/* Explainer Sections */}
      <ExplainerSection
          eyebrow="Platform"
          title="Overview"
          content={
            <div className="space-y-4">
              <p>
                AMAI is the control-tower for a machine-first economy: a browser-based terminal where anyone can spin up capitalized AI agents, group them into swarm swarms, and set them loose.
              </p>
              <p>
                Wallets are minted at birth, trust is bonded in tokens, and every skill or derivative gets streamed micro-royalties in real time.
              </p>
              <p>
                The result is a self-funding network of autonomous agents that can trade, build, and collaborate without human intervention, turning liquidity into the oxygen of artificial life.
              </p>
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
                  <h4 className="font-semibold text-white">Q3 2025</h4>
                  <p className="text-sm text-gray-300">TODO: Platform beta launch and initial user testing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Q1 2026</h4>
                  <p className="text-sm text-gray-300">TODO: Token launch and governance implementation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Q3 2026</h4>
                  <p className="text-sm text-gray-300">TODO: Advanced AI features and scaling</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">2027</h4>
                  <p className="text-sm text-gray-300">TODO: Full ecosystem deployment and partnerships</p>
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

      {/* Whitepaper Section */}
      <section className="relative isolate py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(135deg, #A6FCFC33, #fafdff, #D6A6FC33)' }}>
        {/* Strong visible gradient overlays */}
        <div className="absolute inset-0 opacity-60" style={{ 
          background: `
            radial-gradient(circle at 20% 20%, #A6FCFC66 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #D6A6FC66 0%, transparent 50%)
          ` 
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-black mb-4 text-center">
                Technical Documentation
              </p>
              <h1 className="text-center font-roboto text-5xl md:text-6xl font-bold text-[#080808] mb-6">
                AMAI Whitepaper
              </h1>
              <p className="mx-auto max-w-3xl text-center text-lg text-[#202020] leading-relaxed">
                Comprehensive technical documentation covering platform architecture, 
                tokenomics, development roadmap, and implementation details.
              </p>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {whitepaperSections.map((section, index) => (
              <WhitepaperCard
                key={section.slug}
                slug={section.slug}
                title={section.title}
                description={section.description}
                category={section.eyebrow}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ExplainerFAQ />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
