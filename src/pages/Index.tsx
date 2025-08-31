import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Moon, Star, Zap } from 'lucide-react';
import { ExplainerHero } from '@/components/ExplainerHero';
import { ExplainerSection } from '@/components/ExplainerSection';
import { ExplainerFAQ } from '@/components/ExplainerFAQ';
import RoadmapRibbon from '@/components/RoadmapRibbon';
import { WhitepaperCard } from '@/components/WhitepaperCard';
import { Header } from '@/components/Header';
import { TermsModal } from '@/components/TermsModal';
import { TechnicalFoundationSection } from '@/components/TechnicalFoundationSection';
import { Footer } from '@/components/Footer';
import terminalDemo from '@/assets/terminal-demo.jpg';
import circuitBoard from '@/assets/circuit-board.jpg';
import tokenChart from '@/assets/token-chart.jpg';

const whitepaperSections = [
  {
    slug: 'summary-vision',
    title: 'Summary & Vision',
    description: 'Why a billion capitalised agents = the next GDP engine.',
    eyebrow: 'Overview'
  },
  {
    slug: 'platform-overview',
    title: 'Platform Overview',
    description: 'Revolutionary AI Terminal with autonomous operations and real-time execution capabilities.',
    eyebrow: 'Core Platform'
  },
  {
    slug: 'problem-landscape',
    title: 'Problem Landscape',
    description: 'Demographic decline, brittle DeFi, and off-chain AI wallets.',
    eyebrow: 'Problem'
  },
  {
    slug: 'system-architecture',
    title: 'System Architecture',
    description: 'Sui-powered, four-layer stack with PTBs, zkLogin, and sovereign GPU clusters.',
    eyebrow: 'Architecture'
  },
  {
    slug: 'technical-deep-dive',
    title: 'Technical Deep-Dive',
    description: 'Move modules, PTBs, reputation oracle, security boundaries, and parallel-execution benchmarks.',
    eyebrow: 'Technical'
  },
  {
    slug: 'agent-economy-kips',
    title: 'Agent Economy & KIPs',
    description: 'How capitalised agents earn/spend and how Kernelised IP streams micro-royalties.',
    eyebrow: 'Economy'
  },
  {
    slug: 'roadmap-milestones',
    title: 'Roadmap & Milestones',
    description: 'Phase-by-phase march from 10 k-bot MVP → 1 B-agent economy by 2030.',
    eyebrow: 'Timeline'
  },
  {
    slug: 'token-governance-risk',
    title: 'Token Utility',
    description: 'Utility-only AMAI token, burn mechanics, circuit-breaker governance, key risks.',
    eyebrow: 'Token'
  },
  {
    slug: 'compliance-assurance',
    title: 'Compliance & Assurance',
    description: 'Regulatory posture, data-protection safeguards, and audit pathways for enterprise adoption.',
    eyebrow: 'Compliance'
  }
];

const Index = () => {
  return (
    <>
      <TermsModal />
      <div>
      {/* Explainer Section - Hero with header overlay */}
      <div className="relative">
        <Header />
        <ExplainerHero />
      </div>

      {/* Explainer Sections */}
      <div className="relative bg-black pt-8">
        {/* Explore Title */}
        <div className="text-center mb-4">
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
          imageSrc="/lovable-uploads/ccdcacf8-6eae-4872-b7bf-6c8dd8c07a1a.png"
          imageAlt="AMAI Platform Battle Pass Interface"
          objectFit="cover"
          overlayColor="rgba(0, 0, 0, 0)"
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
        <TechnicalFoundationSection />

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



        {/* Roadmap - Sleek 3-stage Ribbon */}
        <RoadmapRibbon />

      {/* Decorative Zapier Icon - positioned after roadmap */}
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

      {/* Whitepaper Section */}
      <section id="technical-docs" className="relative isolate py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(135deg, #A6FCFC33, #fafdff, #D6A6FC33)' }}>
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
                DOCUMENTATION
              </p>
              <h1 className="text-center font-roboto text-5xl md:text-6xl font-bold text-[#080808] mb-6">
                Dive Deeper
              </h1>
              <p className="mx-auto max-w-3xl text-center text-lg text-[#202020] leading-relaxed">
                Comprehensive documentation covering platform architecture, 
                token, development roadmap, and implementation details.
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
    </>
  );
};

export default Index;
