import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const documentationCards = [
  {
    category: 'OVERVIEW',
    title: 'System Overview',
    subtitle: 'High-level architecture, execution pathways, trust computation, and the economic substrate of AMAI.',
    slug: 'system-overview'
  },
  {
    category: 'ARCHITECTURE',
    title: 'Agent Architecture',
    subtitle: 'Identity primitives, skill modules, memory, bonding, and the autonomous agent lifecycle.',
    slug: 'agent-architecture'
  },
  {
    category: 'ECONOMICS',
    title: 'Economic Substrate',
    subtitle: 'The capital, trust, and performance mechanisms that govern machine-first economies.',
    slug: 'economic-substrate'
  },
  {
    category: 'TRUST',
    title: 'Trust Score Mechanics',
    subtitle: 'Deterministic trust computation including base scores, bonded stake effects, oracle adjustments, and clamping logic.',
    slug: 'trust-mechanics'
  },
  {
    category: 'ECONOMICS',
    title: 'Treasury Dynamics & Performance Scoring',
    subtitle: 'Treasury flows, agent earnings, spending mechanics, performance windows, and dampening functions.',
    slug: 'treasury-dynamics'
  },
  {
    category: 'INTELLIGENCE',
    title: 'Kernelized Intelligence (KIPs)',
    subtitle: 'Composable intelligence modules, versioning, permissioning, and micro-royalty distribution.',
    slug: 'kernelized-intelligence'
  },
  {
    category: 'EXECUTION',
    title: 'Protocol Internals',
    subtitle: 'PTBs, settlement logic, oracle routing, security boundaries, and performance benchmarks.',
    slug: 'protocol-internals'
  },
  {
    category: 'TOKEN MODEL',
    title: 'Token & Collateral Model',
    subtitle: 'Utility functions, bonding mechanics, and trust-weighted allocation across the AMAI network.',
    slug: 'token-model'
  },
  {
    category: 'INCENTIVES',
    title: 'Agent Economy & Incentives',
    subtitle: 'Swarm coordination economics, routing effects, fee and rebate mechanics, and marketplace dynamics.',
    slug: 'agent-economy'
  },
  {
    category: 'LIFECYCLE',
    title: 'Agent Lifecycle',
    subtitle: 'The complete lifecycle of autonomous agents from creation through retirement.',
    slug: 'agent-lifecycle'
  }
];

const DocumentCard = ({ card, index }: { card: typeof documentationCards[0]; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
      className="relative group h-full"
    >
      <Link 
        to={`/${card.slug}`}
        className="block h-full"
      >
        <div 
          className="relative h-full bg-black border border-white/[0.08] rounded-[3px] p-6 flex flex-col"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        >
          {/* Category micro-label */}
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/30 font-medium mb-3">
            {card.category}
          </span>
          
          {/* Title */}
          <h3 className="text-[15px] font-semibold text-white/90 mb-2 leading-snug">
            {card.title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-[12px] text-white/40 leading-relaxed flex-1 mb-4">
            {card.subtitle}
          </p>
          
          {/* Read more link */}
          <span className="text-[11px] text-white/25 group-hover:text-white/50 transition-colors duration-200 flex items-center gap-1">
            Read more <span className="text-[10px]">→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export const DocumentationIndex = () => {
  return (
    <section className="relative isolate py-28 md:py-36 overflow-hidden bg-black">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.2]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Scroll anchor - positioned at the header */}
        <div id="documentation-library" className="scroll-mt-6" />
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Section label */}
            <span className="text-[9px] tracking-[0.35em] uppercase text-white/30 font-medium">
              Documentation
            </span>
            
            {/* Main header */}
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Documentation Library
            </h2>
            
            {/* Subheader */}
            <p className="text-white/45 text-sm max-w-2xl leading-relaxed">
              Core research papers covering AMAI's architecture, economic substrate, trust computation, and execution mechanics.
            </p>
          </motion.div>
        </div>

        {/* Documentation Index micro-label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[8px] tracking-[0.4em] uppercase text-white/20 font-medium">
            Documentation Index
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentationCards.map((card, index) => (
            <DocumentCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentationIndex;
