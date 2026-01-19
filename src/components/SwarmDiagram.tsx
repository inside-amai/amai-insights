import React from "react";
import { motion } from "framer-motion";

interface AgentNodeProps {
  id: string;
  tier: string;
  role: string;
  x: number;
  y: number;
}

const AgentNode: React.FC<AgentNodeProps> = ({ id, tier, role, x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* Node container */}
    <rect
      x="-60"
      y="-40"
      width="120"
      height="80"
      rx="4"
      fill="rgba(255,255,255,0.03)"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1"
    />
    {/* Agent ID */}
    <text
      x="0"
      y="-12"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="11"
      fontFamily="monospace"
    >
      Agent#{id}
    </text>
    {/* Tier badge */}
    <rect
      x="-28"
      y="-2"
      width="56"
      height="18"
      rx="2"
      fill="transparent"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="0.5"
    />
    <text
      x="0"
      y="11"
      textAnchor="middle"
      fill="rgba(255,255,255,0.4)"
      fontSize="9"
      fontFamily="sans-serif"
    >
      {tier}
    </text>
    {/* Role */}
    <text
      x="0"
      y="28"
      textAnchor="middle"
      fill="rgba(103,232,249,0.5)"
      fontSize="8"
      fontFamily="sans-serif"
    >
      {role}
    </text>
  </g>
);

const CentralNode: React.FC = () => (
  <g transform="translate(300, 340)">
    {/* Outer glow */}
    <rect
      x="-90"
      y="-50"
      width="180"
      height="100"
      rx="4"
      fill="transparent"
      stroke="rgba(103,232,249,0.15)"
      strokeWidth="2"
    />
    {/* Inner container */}
    <rect
      x="-85"
      y="-45"
      width="170"
      height="90"
      rx="3"
      fill="rgba(103,232,249,0.03)"
      stroke="rgba(103,232,249,0.25)"
      strokeWidth="1"
    />
    {/* Label */}
    <text
      x="0"
      y="-10"
      textAnchor="middle"
      fill="rgba(255,255,255,0.8)"
      fontSize="13"
      fontWeight="500"
      fontFamily="sans-serif"
    >
      AMAI Oracle
    </text>
    {/* Subtitle */}
    <text
      x="0"
      y="10"
      textAnchor="middle"
      fill="rgba(255,255,255,0.35)"
      fontSize="9"
      fontFamily="sans-serif"
    >
      Swarm Coordination
    </text>
    {/* Metadata */}
    <text
      x="0"
      y="28"
      textAnchor="middle"
      fill="rgba(103,232,249,0.4)"
      fontSize="8"
      fontFamily="sans-serif"
    >
      trust · capital · execution
    </text>
  </g>
);

const ConnectionPath: React.FC<{ d: string; checkpoints?: { x: number; y: number }[] }> = ({ d, checkpoints = [] }) => (
  <g>
    {/* Path */}
    <path
      d={d}
      fill="none"
      stroke="rgba(103,232,249,0.3)"
      strokeWidth="1.5"
    />
    {/* Arrow at end */}
    <path
      d={d}
      fill="none"
      stroke="rgba(103,232,249,0.5)"
      strokeWidth="1.5"
      strokeDasharray="0"
      markerEnd="url(#arrowhead)"
    />
    {/* Checkpoints */}
    {checkpoints.map((cp, i) => (
      <g key={i} transform={`translate(${cp.x}, ${cp.y})`}>
        <circle
          r="6"
          fill="rgba(0,0,0,0.8)"
          stroke="rgba(103,232,249,0.4)"
          strokeWidth="1"
        />
        <text
          x="0"
          y="3"
          textAnchor="middle"
          fill="rgba(103,232,249,0.6)"
          fontSize="7"
          fontFamily="sans-serif"
        >
          S
        </text>
      </g>
    ))}
  </g>
);

const SwarmDiagram: React.FC = () => {
  const agents: AgentNodeProps[] = [
    { id: "7291", tier: "Tier II", role: "strategy", x: 300, y: 60 },
    { id: "4856", tier: "Tier III", role: "risk-analysis", x: 100, y: 140 },
    { id: "3102", tier: "Tier I", role: "execution", x: 500, y: 140 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <svg
        viewBox="0 0 600 420"
        className="w-full h-auto"
        style={{ maxHeight: "380px" }}
      >
        {/* Defs */}
        <defs>
          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 8 3, 0 6"
              fill="rgba(103,232,249,0.5)"
            />
          </marker>
          {/* Subtle grid pattern */}
          <pattern id="swarmGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        {/* Background grid */}
        <rect width="100%" height="100%" fill="url(#swarmGrid)" />

        {/* Connection lines with checkpoints */}
        {/* Top agent to center */}
        <ConnectionPath
          d="M 300 100 L 300 180 Q 300 220 300 290"
          checkpoints={[{ x: 300, y: 180 }]}
        />
        
        {/* Left agent to center */}
        <ConnectionPath
          d="M 100 180 L 100 240 Q 100 270 180 290 Q 240 305 300 290"
          checkpoints={[{ x: 140, y: 260 }]}
        />
        
        {/* Right agent to center */}
        <ConnectionPath
          d="M 500 180 L 500 240 Q 500 270 420 290 Q 360 305 300 290"
          checkpoints={[{ x: 460, y: 260 }]}
        />

        {/* Agent nodes */}
        {agents.map((agent) => (
          <AgentNode key={agent.id} {...agent} />
        ))}

        {/* Central oracle node */}
        <CentralNode />
      </svg>
    </motion.div>
  );
};

export default SwarmDiagram;
