import React, { useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Wallet, 
  Lock, 
  Calculator, 
  Layers, 
  Shield, 
  Coins, 
  Zap, 
  Network, 
  Globe, 
  TestTube,
  Database,
  Settings,
  Cog,
  Server,
  Cpu
} from 'lucide-react';

interface RoadmapNode {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ComponentType<any>;
  accent: 'aqua' | 'violet';
  description: string;
  row: number; // 0, 1, or 2 (three rows)
}

interface RoadmapLane {
  title: string;
  nodes: RoadmapNode[];
}

const roadmapData: RoadmapLane[] = [
  {
    title: '2025 Q3',
    nodes: [
      {
        id: 'wallet-connect',
        title: 'Wallet Connect',
        icon: Wallet,
        accent: 'aqua',
        description: 'Seamless wallet integration with SUI ecosystem',
        row: 0
      },
      {
        id: 'swarm-dashboard',
        title: 'Swarm Dashboard',
        icon: Layers,
        accent: 'violet',
        description: 'Central control panel for AI agent management',
        row: 1
      },
      {
        id: 'swelet-dashberrr',
        title: 'Swelet Dashberrr Z?λ#',
        icon: Settings,
        accent: 'aqua',
        description: 'Advanced configuration interface for agent behaviors',
        row: 2
      }
    ]
  },
  {
    title: '2025 Q4',
    nodes: [
      {
        id: 'zklogin',
        title: 'zkLogin',
        icon: Lock,
        accent: 'aqua',
        description: 'Zero-knowledge authentication for enhanced privacy',
        row: 0
      },
      {
        id: 'bond-slash',
        title: 'Bond/Slash Contracts',
        icon: Shield,
        accent: 'violet',
        description: 'Trustless staking and reputation management',
        row: 1
      }
    ]
  },
  {
    title: '2026 Q1',
    nodes: [
      {
        id: 'oracle',
        title: 'On-chain Oracle',
        subtitle: 'Trust Scores',
        icon: Calculator,
        accent: 'aqua',
        description: 'Decentralized reputation scoring system',
        row: 0
      },
      {
        id: 'skill-nft',
        title: 'Skill-NFT Registry',
        icon: Database,
        accent: 'violet',
        description: 'Tradeable agent capabilities as NFTs',
        row: 1
      },
      {
        id: 'pay-compute',
        title: 'Pay-per-Compute',
        subtitle: 'State Channels',
        icon: Zap,
        accent: 'violet',
        description: 'Micro-payments for AI computation resources',
        row: 2
      }
    ]
  },
  {
    title: '2026 Q4',
    nodes: [
      {
        id: 'swarm',
        title: 'Swarm',
        icon: Network,
        accent: 'aqua',
        description: 'Collaborative multi-agent coordination layer',
        row: 0
      },
      {
        id: 'royalty-cluster',
        title: 'Royalty Cluster',
        icon: Coins,
        accent: 'violet',
        description: 'Automated revenue distribution system',
        row: 1
      },
      {
        id: 'llm-channels',
        title: 'Containerized LLM',
        subtitle: 'REST/grPC Endpoints',
        icon: Globe,
        accent: 'aqua',
        description: 'Scalable AI model serving infrastructure',
        row: 2
      }
    ]
  },
  {
    title: '2026 EOY',
    nodes: [
      {
        id: 'settlement',
        title: 'Real-Time Settlement',
        icon: Zap,
        accent: 'aqua',
        description: 'Instant transaction finality for agent operations',
        row: 0
      },
      {
        id: 'rls-policies',
        title: 'RLS/AuthZ Policies',
        icon: Lock,
        accent: 'violet',
        description: 'Advanced security and access control',
        row: 1
      },
      {
        id: 'testing-suites',
        title: 'Testing Suites',
        icon: TestTube,
        accent: 'aqua',
        description: 'Comprehensive agent behavior validation',
        row: 2
      }
    ]
  }
];

// Connection paths with exact reference coordinates
const connections: Array<{
  from: string;
  to: string;
  accent: 'aqua' | 'violet';
  type?: 'normal' | 'internal' | 'loop';
}> = [
  // From Lane 1 (Q3 2025)
  { from: 'wallet-connect', to: 'zklogin', accent: 'aqua' },
  { from: 'wallet-connect', to: 'oracle', accent: 'aqua' },
  { from: 'swarm-dashboard', to: 'bond-slash', accent: 'violet' },
  { from: 'swarm-dashboard', to: 'swelet-dashberrr', accent: 'aqua', type: 'internal' },
  
  // From Lane 2 (Q4 2025)
  { from: 'zklogin', to: 'oracle', accent: 'aqua' },
  { from: 'bond-slash', to: 'skill-nft', accent: 'violet' },
  
  // From Lane 3 (Q1 2026)
  { from: 'skill-nft', to: 'llm-channels', accent: 'violet' },
  
  // From Lane 4 (Q4 2026)
  { from: 'swarm', to: 'settlement', accent: 'aqua' },
  { from: 'royalty-cluster', to: 'rls-policies', accent: 'violet' },
  { from: 'llm-channels', to: 'testing-suites', accent: 'aqua' },
  
  // Internal loops in Lane 4
  { from: 'swarm', to: 'royalty-cluster', accent: 'aqua', type: 'loop' },
  { from: 'royalty-cluster', to: 'swarm', accent: 'violet', type: 'loop' }
];

const ConnectionPath = memo(({ 
  from, 
  to, 
  accent,
  type = 'normal',
  delay = 0
}: { 
  from: string; 
  to: string; 
  accent: 'aqua' | 'violet';
  type?: 'normal' | 'internal' | 'loop';
  delay?: number;
}) => {
  // Calculate positions based on node IDs and their lane/row positions
  const getNodePosition = (nodeId: string) => {
    for (let laneIndex = 0; laneIndex < roadmapData.length; laneIndex++) {
      const lane = roadmapData[laneIndex];
      const node = lane.nodes.find(n => n.id === nodeId);
      if (node) {
        const x = 300 + (laneIndex * 240) + 64; // Lane offset + card offset
        const y = 80 + (node.row * 144) + 36; // Top padding + row offset + card center
        return { x, y };
      }
    }
    return { x: 0, y: 0 };
  };

  const startPos = getNodePosition(from);
  const endPos = getNodePosition(to);
  
  let pathData = '';
  
  if (type === 'internal') {
    // Straight vertical line for internal connections
    pathData = `M ${startPos.x + 116} ${startPos.y} L ${endPos.x + 116} ${endPos.y}`;
  } else if (type === 'loop') {
    // Curved loop for internal lane connections
    const midX = startPos.x + 280;
    pathData = `M ${startPos.x + 232} ${startPos.y} C ${midX} ${startPos.y}, ${midX} ${endPos.y}, ${endPos.x + 232} ${endPos.y}`;
  } else {
    // Standard bezier curve for cross-lane connections
    const startX = startPos.x + 232; // Right edge of source card
    const endX = endPos.x; // Left edge of target card
    const midX = (startX + endX) / 2;
    pathData = `M ${startX} ${startPos.y} C ${midX} ${startPos.y}, ${midX} ${endPos.y}, ${endX} ${endPos.y}`;
  }
  
  return (
    <motion.path
      d={pathData}
      fill="none"
      stroke={accent === 'aqua' ? '#A6FCFC' : '#D6A6FC'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd="url(#arrow)"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.8 }}
      transition={{ 
        duration: 0.9,
        delay: delay,
        ease: "easeInOut"
      }}
      viewport={{ once: true, amount: 0.25 }}
    />
  );
});

const RoadmapCard = memo(({ node, laneIndex }: { node: RoadmapNode; laneIndex: number }) => {
  const IconComponent = node.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: (laneIndex * 0.15) + (node.row * 0.1) + 0.12,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true, amount: 0.25 }}
      className="group relative w-[232px] h-[72px] rounded-xl border border-white/10 bg-white/6 backdrop-blur-md hover:border-white/20 hover:bg-white/11 hover:shadow-xl transition-all duration-300 cursor-pointer"
      style={{
        position: 'absolute',
        left: '64px',
        top: `${80 + (node.row * 144)}px`,
        '--tw-shadow-color': node.accent === 'aqua' ? '#A6FCFC' : '#D6A6FC'
      } as React.CSSProperties}
    >
      <div className="flex items-center h-full px-4 gap-3">
        <IconComponent 
          size={24} 
          className="flex-shrink-0 text-[#9CA3AF]"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-[15px] font-medium text-white leading-tight whitespace-normal break-words" style={{ fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
            {node.title}
          </h4>
          {node.subtitle && (
            <p className="text-[11px] text-[#9CA3AF] leading-tight whitespace-normal break-words" style={{ fontFamily: 'Satoshi Variable', fontWeight: 400 }}>
              {node.subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
        {node.description}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
      </div>
    </motion.div>
  );
});

export const RoadmapFlow = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  return (
    <motion.div 
      ref={containerRef} 
      className="w-full h-[600px] bg-transparent relative overflow-hidden"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Lane Dividers */}
      <div className="absolute inset-0">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white opacity-15"
            style={{ left: `${300 + (i * 240)}px` }}
          />
        ))}
      </div>

      {/* Live Alpha Grid Sidebar (Lane 0) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute left-6 top-[48px] w-[300px] h-[560px]"
      >
        <div className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-md p-6 h-full flex flex-col">
          <div className="mb-6">
            <h3 className="text-[18px] font-semibold text-white mb-2" style={{ fontFamily: 'Satoshi Variable', fontWeight: 600 }}>
              Live Alpha Grid
            </h3>
            <p className="text-[13px] text-[#A6FCFC]" style={{ fontFamily: 'Satoshi Variable', fontWeight: 400 }}>
              (Completed)
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[Cog, Database, Server, Cpu].map((Icon, i) => (
              <div key={i} className="w-[96px] h-[96px] rounded-lg bg-white/6 border border-white/10 flex items-center justify-center">
                <Icon size={40} className="text-[#9CA3AF]" />
              </div>
            ))}
          </div>
          
          <p className="text-[12px] text-[#9CA3AF] mb-6" style={{ fontFamily: 'Satoshi Variable', fontWeight: 400 }}>
            Stability: 40+ testers, f0/s, sub-500ms latency
          </p>
          
          <div className="mt-auto w-[240px] h-[56px] rounded-2xl border border-white/10 bg-white/6 backdrop-blur-md flex items-center px-4">
            <p className="text-[12px] text-white" style={{ fontFamily: 'Satoshi Variable', fontWeight: 400 }}>
              Modern UI Wizard for PTB Builder SDK
            </p>
          </div>
        </div>
      </motion.div>

      {/* Column Headers */}
      <div className="absolute top-[48px] left-[300px] right-0 flex">
        {roadmapData.map((lane, index) => (
          <motion.div
            key={lane.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
            className="w-[240px] text-center relative"
          >
            <h3 className="text-[14px] font-medium text-white tracking-[0.02em]" style={{ fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
              {lane.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* SVG for Connection Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="3"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
          </marker>
        </defs>
        
        {connections.map((connection, index) => (
          <ConnectionPath
            key={`connection-${index}`}
            {...connection}
            delay={index * 0.15 + 0.5}
          />
        ))}
      </svg>

      {/* Roadmap Nodes */}
      <div className="relative" style={{ zIndex: 2 }}>
        {roadmapData.map((lane, laneIndex) => (
          <div
            key={lane.title}
            className="absolute"
            style={{ left: `${300 + (laneIndex * 240)}px`, top: 0, width: '240px', height: '100%' }}
          >
            {lane.nodes.map((node) => (
              <RoadmapCard 
                key={node.id}
                node={node} 
                laneIndex={laneIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};