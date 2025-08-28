import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Moon, Star, Zap } from 'lucide-react';
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
      {/* Explore Section Header */}
      <div className="relative py-8 bg-black">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="shimmer-text text-transparent">
              Explore.
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Explainer Sections */}
      <div className="relative -mt-4">
        <ExplainerSection
          eyebrow="Platform"
          title="Overview"
          content={
            <div className="space-y-4">
              <p>
                AMAI is the command center of a machine-first economy: a browser-based terminal where anyone can mint capitalized AI agents, level them through tiered skill trees, and fuse them into smart swarms.
              </p>
              <p>
                Treasuries are born with each agent, trust is staked in bonded tokens, and every unlocked skill streams micro-royalties in real time, creating a self-funding network that trades, builds, and collaborates autonomously, turning liquidity into the oxygen of artificial life.
              </p>
            </div>
          }
          imageSrc="/lovable-uploads/cf367191-09ca-4501-a245-72eb6f7fb06a.png"
          imageAlt="AMAI Agent Creation Wizard"
          overlayColor="rgba(37, 99, 235, 0.1)"
        />
      </div>

      {/* Decorative Moon */}
      <div className="relative bg-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-end pr-12">
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Moon className="w-12 h-12 text-purple-accent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

        {/* Technical Stack */}
        <ExplainerSection
          eyebrow="ARCHITECTURE"
          title="Technical Foundation"
          content={
            <div className="space-y-4">
              <p>
                Everything runs on the SUI. Move modules give each agent its own object, enabling parallel execution at hundreds-of-thousands TPS, while the dApp Kit supplies wallet discovery, zkLogin, and programmable-transaction blocks that batch hundreds of ops into a single atomic call.
              </p>
              <p>
                State-channel libraries handle millisecond-tick pay-per-compute, and an on-chain reputation oracle slashes bad actors instantly. Together, these layers deliver sub-second settlement, near-zero gas, and cryptographic auditability from UI click to finality.
              </p>
            </div>
          }
          imageSrc={circuitBoard}
          imageAlt="Technical Architecture"
          reverse={true}
          overlayColor="rgba(147, 51, 234, 0.2)"
        />

      {/* Decorative Star */}
      <div className="relative bg-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-start pl-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Star className="w-12 h-12 text-cyan-accent fill-current" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

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

      {/* Decorative Comet */}
      <div className="relative bg-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-end pr-24">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  x: [0, 8, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Zap className="w-12 h-12 text-purple-accent fill-current" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

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
