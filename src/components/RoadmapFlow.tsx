import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  Settings
} from 'lucide-react';

interface RoadmapNode {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ComponentType<any>;
  accent: 'aqua' | 'violet';
  description: string;
}

interface RoadmapLane {
  title: string;
  subtitle?: string;
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
        description: 'Seamless wallet integration with SUI ecosystem'
      },
      {
        id: 'swarm-dashboard',
        title: 'Swarm Dashboard',
        icon: Layers,
        accent: 'aqua',
        description: 'Central control panel for AI agent management'
      },
      {
        id: 'swelet-dashboard',
        title: 'Swelet Dashboard',
        icon: Settings,
        accent: 'aqua',
        description: 'Advanced configuration interface for agent behaviors'
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
        description: 'Zero-knowledge authentication for enhanced privacy'
      },
      {
        id: 'bond-slash',
        title: 'Bond/Slash Contracts',
        icon: Shield,
        accent: 'violet',
        description: 'Trustless staking and reputation management'
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
        description: 'Decentralized reputation scoring system'
      },
      {
        id: 'skill-nft',
        title: 'Skill-NFT Registry',
        icon: Database,
        accent: 'violet',
        description: 'Tradeable agent capabilities as NFTs'
      },
      {
        id: 'pay-compute',
        title: 'Pay-per-Compute',
        subtitle: 'State Channels',
        icon: Zap,
        accent: 'violet',
        description: 'Micro-payments for AI computation resources'
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
        description: 'Collaborative multi-agent coordination layer'
      },
      {
        id: 'royalty-cluster',
        title: 'Royalty Cluster',
        icon: Coins,
        accent: 'violet',
        description: 'Automated revenue distribution system'
      },
      {
        id: 'llm-channels',
        title: 'Containerized LLM',
        subtitle: 'REST/gRPC Endpoints',
        icon: Globe,
        accent: 'aqua',
        description: 'Scalable AI model serving infrastructure'
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
        description: 'Instant transaction finality for agent operations'
      },
      {
        id: 'rls-policies',
        title: 'RLS/AuthZ Policies',
        icon: Lock,
        accent: 'aqua',
        description: 'Advanced security and access control'
      },
      {
        id: 'testing-suites',
        title: 'Testing Suites',
        icon: TestTube,
        accent: 'aqua',
        description: 'Comprehensive agent behavior validation'
      }
    ]
  }
];

const RoadmapCard = ({ node, index, laneIndex }: { node: RoadmapNode; index: number; laneIndex: number }) => {
  const IconComponent = node.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: (laneIndex * 0.15) + (index * 0.1) + 0.3,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true, margin: "-20% 0%" }}
      className="group relative w-[180px] h-16 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/15 transition-all duration-300 cursor-pointer"
      style={{
        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))'
      }}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
           style={{
             background: node.accent === 'aqua' 
               ? 'radial-gradient(circle at center, rgba(166, 252, 252, 0.2) 0%, transparent 70%)'
               : 'radial-gradient(circle at center, rgba(214, 166, 252, 0.2) 0%, transparent 70%)'
           }} />
      
      <div className="relative flex items-center h-full px-3 space-x-3">
        <IconComponent 
          size={24} 
          className={`flex-shrink-0 ${
            node.accent === 'aqua' ? 'text-[#A6FCFC]' : 'text-[#D6A6FC]'
          }`}
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-white leading-tight truncate">
            {node.title}
          </h4>
          {node.subtitle && (
            <p className="text-xs text-gray-400 leading-tight truncate">
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
};

const ConnectionLine = ({ 
  fromLane, 
  toLane, 
  fromIndex, 
  toIndex, 
  accent 
}: { 
  fromLane: number; 
  toLane: number; 
  fromIndex: number; 
  toIndex: number; 
  accent: 'aqua' | 'violet';
}) => {
  const startX = 260 + (fromLane * 200) + 180; // Start from right edge of card
  const endX = 260 + (toLane * 200); // End at left edge of next card
  const startY = 120 + (fromIndex * 100) + 32; // Center of card
  const endY = 120 + (toIndex * 100) + 32; // Center of target card
  
  const midX = (startX + endX) / 2;
  
  const pathData = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
  
  return (
    <motion.path
      d={pathData}
      fill="none"
      stroke={accent === 'aqua' ? '#A6FCFC' : '#D6A6FC'}
      strokeWidth="2"
      strokeLinecap="round"
      className="drop-shadow-sm"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.8 }}
      transition={{ 
        duration: 1,
        delay: (fromLane * 0.15) + 0.5,
        ease: "easeInOut"
      }}
      viewport={{ once: true, margin: "-20% 0%" }}
    />
  );
};

export const RoadmapFlow = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20% 0%" });

  return (
    <div ref={containerRef} className="w-full min-h-[600px] bg-transparent relative overflow-hidden">
      {/* Grid Lines */}
      <div className="absolute inset-0">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/20"
            style={{ left: `${260 + (i * 200)}px` }}
          />
        ))}
      </div>

      {/* Live Alpha Grid Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-6 top-8 w-[240px]"
      >
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-medium text-white mb-4">Live Alpha Grid</h3>
          <p className="text-sm text-[#A6FCFC] mb-4">(Completed)</p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[Settings, Database, Network, Zap].map((Icon, i) => (
              <div key={i} className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon size={32} className="text-white/80" />
              </div>
            ))}
          </div>
          
          <p className="text-xs text-gray-400 mb-4">
            Stability: 40+ testers, f0/s, sub-500ms latency
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <p className="text-xs text-white">
              Modern UI Wizard for PTB Builder SDK
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline Headers */}
      <div className="absolute top-8 left-[260px] right-0 flex">
        {roadmapData.map((lane, index) => (
          <motion.div
            key={lane.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-[200px] text-center"
          >
            <h3 className="text-lg font-medium text-white">{lane.title}</h3>
            {lane.subtitle && (
              <p className="text-sm text-gray-400">{lane.subtitle}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* SVG for Connection Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {roadmapData.map((lane, laneIndex) => 
          lane.nodes.map((node, nodeIndex) => {
            if (laneIndex < roadmapData.length - 1) {
              const nextLane = roadmapData[laneIndex + 1];
              const targetIndex = Math.min(nodeIndex, nextLane.nodes.length - 1);
              
              return (
                <ConnectionLine
                  key={`${node.id}-connection`}
                  fromLane={laneIndex}
                  toLane={laneIndex + 1}
                  fromIndex={nodeIndex}
                  toIndex={targetIndex}
                  accent={node.accent}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Roadmap Nodes */}
      <div className="relative" style={{ zIndex: 2 }}>
        {roadmapData.map((lane, laneIndex) => (
          <div
            key={lane.title}
            className="absolute top-[120px]"
            style={{ left: `${260 + (laneIndex * 200)}px` }}
          >
            {lane.nodes.map((node, nodeIndex) => (
              <div
                key={node.id}
                className="mb-10"
                style={{ marginTop: `${nodeIndex * 100}px` }}
              >
                <RoadmapCard 
                  node={node} 
                  index={nodeIndex} 
                  laneIndex={laneIndex}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};