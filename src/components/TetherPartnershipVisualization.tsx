import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DataPacket {
  id: number;
  type: 'usdt' | 'task';
  direction: 'left' | 'right';
}

const TetherPartnershipVisualization = () => {
  const [packets, setPackets] = useState<DataPacket[]>([]);
  const [activeNode, setActiveNode] = useState<'tether' | 'amai' | null>(null);
  const [hoveredShield, setHoveredShield] = useState(false);
  const [trustRating, setTrustRating] = useState(99.9);

  // Generate animated data packets
  useEffect(() => {
    const interval = setInterval(() => {
      const newPacket: DataPacket = {
        id: Date.now(),
        type: Math.random() > 0.5 ? 'usdt' : 'task',
        direction: Math.random() > 0.5 ? 'left' : 'right',
      };
      setPackets(prev => [...prev.slice(-6), newPacket]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Subtle trust rating pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setTrustRating(99.9 + (Math.random() * 0.08 - 0.04));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    { label: 'Trust Rating', value: `${trustRating.toFixed(1)}%`, pulse: true },
    { label: 'Enforced Liquidity', value: '$1.2B USDT', pulse: false },
    { label: 'Agent Swarm Status', value: 'Nominal', pulse: false },
    { label: 'Settlement Finality', value: 'Atomic', pulse: false },
  ];

  const shieldOverlays = [
    { label: 'Slashing Logic', desc: 'Real-time penalty enforcement' },
    { label: 'Deterministic Limits', desc: 'Operational ceiling caps' },
    { label: 'Bonded Collateral', desc: 'Capital accountability layer' },
  ];

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px]">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        animate={{ 
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main visualization container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-8 md:py-12">
        
        {/* Dual Node Architecture */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-8 md:mb-12">
          
          {/* Tether Infrastructure Node */}
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveNode(activeNode === 'tether' ? null : 'tether')}
          >
            <div className="relative">
              {/* Glassmorphic panel */}
              <div className="w-[160px] md:w-[200px] h-[120px] md:h-[140px] rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center mb-3">
                  <span className="text-[10px] md:text-xs font-mono text-white/60">₮</span>
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium mb-1">Tether</p>
                <p className="text-xs md:text-sm text-white/70 font-light text-center">Liquidity & Hardware</p>
              </div>
              
              {/* Connection point */}
              <div className="absolute top-1/2 -right-2 md:-right-3 w-4 h-4 md:w-6 md:h-6 rounded-full border border-white/20 bg-black flex items-center justify-center transform -translate-y-1/2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30" />
              </div>
            </div>

            {/* Expanded detail panel */}
            <AnimatePresence>
              {activeNode === 'tether' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 mt-3 w-[200px] md:w-[240px] p-4 rounded-sm border border-white/10 bg-black/90 backdrop-blur-md z-20"
                >
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2">Settlement Layer</p>
                  <div className="space-y-2 text-[11px] text-white/50 font-light">
                    <p>• USDT stablecoin rails</p>
                    <p>• GPU cluster infrastructure</p>
                    <p>• Omnichain settlement</p>
                    <p>• Hardware asset backing</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Execution Corridor */}
          <div className="relative w-[80px] md:w-[200px] h-[40px] md:h-[60px] flex items-center justify-center">
            {/* Corridor lines */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ filter: 'blur(4px)' }} />
            </div>
            
            {/* Animated data packets */}
            {packets.map((packet) => (
              <motion.div
                key={packet.id}
                className={`absolute w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  packet.type === 'usdt' ? 'bg-emerald-400/60' : 'bg-blue-400/60'
                }`}
                initial={{ 
                  x: packet.direction === 'right' ? -40 : 40,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{ 
                  x: packet.direction === 'right' ? 40 : -40,
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5]
                }}
                transition={{ duration: 2, ease: 'linear' }}
                style={{
                  boxShadow: packet.type === 'usdt' 
                    ? '0 0 8px rgba(52, 211, 153, 0.4)' 
                    : '0 0 8px rgba(96, 165, 250, 0.4)'
                }}
              />
            ))}

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] md:text-[9px] tracking-[0.15em] uppercase text-white/20 font-mono bg-black px-2">Corridor</span>
            </div>
          </div>

          {/* AMAI Governance Node */}
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveNode(activeNode === 'amai' ? null : 'amai')}
            onMouseEnter={() => setHoveredShield(true)}
            onMouseLeave={() => setHoveredShield(false)}
          >
            <div className="relative">
              {/* Risk Mitigation Shield */}
              <motion.div 
                className="absolute -inset-3 md:-inset-4 rounded-sm border border-white/5 bg-white/[0.01]"
                animate={{ 
                  borderColor: hoveredShield ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                  backgroundColor: hoveredShield ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)'
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Shield overlays on hover */}
              <AnimatePresence>
                {hoveredShield && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-30"
                  >
                    {shieldOverlays.map((overlay, i) => (
                      <motion.div
                        key={overlay.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-2 py-1.5 md:px-3 md:py-2 rounded-sm border border-white/10 bg-black/90 backdrop-blur-md whitespace-nowrap"
                      >
                        <p className="text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/50 font-medium">{overlay.label}</p>
                        <p className="text-[7px] md:text-[8px] text-white/30 font-light mt-0.5">{overlay.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Connection point */}
              <div className="absolute top-1/2 -left-2 md:-left-3 w-4 h-4 md:w-6 md:h-6 rounded-full border border-white/20 bg-black flex items-center justify-center transform -translate-y-1/2 z-10">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30" />
              </div>

              {/* Glassmorphic panel */}
              <div className="relative w-[160px] md:w-[200px] h-[120px] md:h-[140px] rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center mb-3">
                  <span className="text-[10px] md:text-xs font-mono text-white/60">◈</span>
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium mb-1">AMAI</p>
                <p className="text-xs md:text-sm text-white/70 font-light text-center">Identity & Reputation</p>
              </div>
            </div>

            {/* Expanded detail panel */}
            <AnimatePresence>
              {activeNode === 'amai' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-3 w-[200px] md:w-[240px] p-4 rounded-sm border border-white/10 bg-black/90 backdrop-blur-md z-20"
                >
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2">Economic Layer</p>
                  <div className="space-y-2 text-[11px] text-white/50 font-light">
                    <p>• Persistent agent identity</p>
                    <p>• Trust score calculation</p>
                    <p>• Capital enforcement</p>
                    <p>• Economic guardrails</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Economic Substrate Label */}
        <div className="mb-8 md:mb-12 text-center">
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-mono">The Economic Substrate</p>
        </div>

        {/* Live Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl px-4">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative px-4 py-3 md:px-5 md:py-4 rounded-sm border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm"
            >
              <p className="text-[8px] md:text-[9px] tracking-[0.15em] uppercase text-white/30 font-mono mb-1">{stat.label}</p>
              <div className="flex items-center gap-2">
                <p className="text-sm md:text-base text-white/70 font-light font-mono">{stat.value}</p>
                {stat.pulse && (
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Click instruction */}
        <p className="mt-6 md:mt-8 text-[9px] tracking-[0.2em] uppercase text-white/15 font-mono">
          Click nodes to explore layers
        </p>
      </div>
    </div>
  );
};

export default TetherPartnershipVisualization;
