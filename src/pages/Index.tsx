import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Moon, Star, Zap } from 'lucide-react';
import { ExplainerHero } from '@/components/ExplainerHero';
import { ExplainerSection } from '@/components/ExplainerSection';
import { ExplainerFAQ } from '@/components/ExplainerFAQ';
import { RoadmapFlow } from '@/components/RoadmapFlow';
import { WhitepaperCard } from '@/components/WhitepaperCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import terminalDemo from '@/assets/terminal-demo.jpg';
import circuitBoard from '@/assets/circuit-board.jpg';
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
    eyebrow: 'Questions?'
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
          objectFit="contain"
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
          eyebrow="Architecture"
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
          imageSrc="/lovable-uploads/2dc88d33-5360-4f98-a8d1-c6eda4923e20.png"
          imageAlt="SUI Blockchain Technology"
          reverse={true}
          objectFit="contain"
          overlayColor="transparent"
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
                <li>• <strong>75%</strong> Community & Ecosystem</li>
                <li>• <strong>15%</strong> Team & Development</li>
                <li>• <strong>5%</strong> Strategic Partners</li>
                <li>• <strong>5%</strong> Liquidity Provision</li>
              </ul>
              <p className="text-sm">
                TODO: Governance mechanisms and voting procedures for platform decisions.
              </p>
            </div>
          }
          imageSrc="/lovable-uploads/0d0e27c9-efd2-44ca-995b-4a7949835316.png"
          imageAlt="Token Distribution Chart"
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

        {/* Roadmap - Custom Animated Component */}
        <section className="min-h-screen flex items-center snap-start bg-black relative overflow-hidden">
          {/* Animated Stars Background - matching other sections */}
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
            
            {/* Medium moving stars */}
            <div className="absolute top-60 left-60 w-1.5 h-1.5" 
                 style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 4s ease-in-out infinite' }} />
            <div className="absolute top-96 right-60 w-1.5 h-1.5 animate-bounce" 
                 style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.5s', animationDelay: '1.5s' }} />
            
            {/* Small moving stars */}
            <div className="absolute top-40 left-96 w-1 h-1 animate-ping" 
                 style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s' }} />
            <div className="absolute top-80 right-96 w-1 h-1" 
                 style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 3s ease-in-out infinite' }} />
            <div className="absolute bottom-80 left-20 w-1 h-1" 
                 style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 12s linear infinite' }} />
          </div>
          
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-sm font-medium text-white uppercase tracking-wider">
                  Development Timeline
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mt-4">
                  <span className="shimmer-text text-transparent">
                    2025-2027 Roadmap
                  </span>
                </h2>
              </motion.div>
            </div>
            
            <RoadmapFlow />
          </div>
        </section>

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
                Dive Deeper
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
