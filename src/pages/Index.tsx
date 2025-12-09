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
import { TermsModal } from '@/components/TermsModal';
import { TechnicalFoundationSection } from '@/components/TechnicalFoundationSection';
import { Footer } from '@/components/Footer';
import { AgentLayersSection } from '@/components/AgentLayersSection';
import { OptimizedImage } from '@/components/OptimizedImage';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import terminalDemo from '@/assets/terminal-demo.jpg';
import circuitBoard from '@/assets/circuit-board.jpg';
import tokenChart from '@/assets/token-chart.jpg';

const whitepaperSections = [
  {
    slug: 'summary-vision',
    title: 'The Vision',
    description: 'Why a billion capitalized agents = the next GDP engine.',
    eyebrow: 'Overview'
  },
  {
    slug: 'Our-journey',
    title: 'How We Got Here',
    description: 'Our path from early agent experiments to building the control tower for a machine-first economy.',
    eyebrow: 'Our Journey'
  },
  {
    slug: 'platform-overview',
    title: 'The Platform',
    description: 'AI Terminal with autonomous operations and real-time execution capabilities.',
    eyebrow: 'Core Platform'
  },
  {
    slug: 'problem-landscape',
    title: 'The Problem',
    description: 'Demographic decline, brittle DeFi, and isolated AI wallets: the pain AMAI fixes',
    eyebrow: 'Problem'
  },
  {
    slug: 'token',
    title: 'The Token',
    description: 'AMAI utility token, bonded collateral',
    eyebrow: 'Token'
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
    description: 'How capitalized agents earn/spend and how Kernelized IP streams micro-royalties.',
    eyebrow: 'Economy'
  },
  {
    slug: 'roadmap-milestones',
    title: 'Roadmap & Milestones',
    description: 'Phase-by-phase march from today → 1 B-agent economy by 2030.',
    eyebrow: 'Timeline'
  }
];

const Index = () => {
  return (
    <>
      <TermsModal />
      <div className="overflow-x-hidden">
      {/* Explainer Section - Hero with header overlay */}
      <div className="relative">
        <Header />
        <ExplainerHero />
      </div>

      {/* Main Content Sections with Isometric Grid Background */}
      <div className="relative bg-perspective-grid">
        {/* Grid content wrapper */}
        <div className="relative z-10">
          <AgentLayersSection />
          
          {/* Architecture Diagram Section */}
          <ArchitectureDiagram />
        
          <ExplainerSection
            eyebrow="Platform"
            title="Overview"
            content={
              <div className="space-y-4">
                <p>
                  AMAI provides the execution environment where autonomous agents operate with capital, memory, skills, and verifiable trust scores.
                </p>
                <p>
                  Agents run inside a deterministic engine that manages identity, bonded collateral, mission routing, skill execution, and swarm coordination. Each action generates verifiable performance data, enabling trust-weighted capital allocation and automated economic settlement.
                </p>
                <p>
                  This environment forms the operational core of the machine-first economy — where agents transact, collaborate, and optimize in real time.
                </p>
              </div>
            }
            videoUrl="https://www.youtube.com/embed/N1RBnriszfQ?autoplay=1&loop=1&controls=0&mute=1&playlist=N1RBnriszfQ&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&playsinline=1&widget_referrer=https%3A%2F%2Flocalhost&origin=https%3A%2F%2Flocalhost&enablejsapi=0&html5=1&autohide=1&theme=dark&color=white"
            imageAlt="Four-Step Agent Builder Wizard Demo"
            overlayColor="rgba(0, 0, 0, 0)"
          />

          {/* Decorative Moon */}
          <div className="relative py-8 overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="flex justify-end pr-4 md:pr-12">
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
          <div className="relative py-8 overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="flex justify-start pl-4 md:pl-32">
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

          {/* Decorative Zapier Icon */}
          <div className="relative py-8 overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="flex justify-end pr-4 md:pr-24">
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
        </div>
      </div>


      {/* Full Width Hero Image Section */}
      <section className="relative w-full">
        <div className="w-full h-[60vh] lg:h-[70vh] overflow-hidden">
          <OptimizedImage 
            src="/lovable-uploads/1e92cbc3-b553-493b-a333-bea6c2a6d0ae.png"
            alt="Future Vision"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </section>

      {/* Whitepaper Section */}
      <section id="technical-docs" className="relative isolate py-28 md:py-36 overflow-hidden bg-[#fafafa]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.4]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-black/40 font-medium">
                Documentation
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-light text-black tracking-tight">
                Technical Resources
              </h2>
              <p className="mt-4 text-black/50 text-sm max-w-xl mx-auto leading-relaxed">
                Comprehensive documentation covering platform architecture, token mechanics, and implementation details.
              </p>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
