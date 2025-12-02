import React from "react";

interface BoxProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ title, subtitle, className = "" }) => (
  <div className={`px-8 py-5 border border-gray-200 rounded-2xl bg-white text-center ${className}`}>
    <div className="text-gray-900 font-medium text-lg tracking-tight">{title}</div>
    {subtitle && (
      <div className="text-gray-400 text-sm mt-1 font-light">{subtitle}</div>
    )}
  </div>
);

const VerticalLine: React.FC<{ height?: string }> = ({ height = "h-12" }) => (
  <div className={`w-px bg-gray-200 mx-auto ${height}`} />
);

const HorizontalConnector: React.FC = () => (
  <div className="flex items-center justify-center">
    <div className="w-px h-12 bg-gray-200" />
    <div className="absolute w-[400px] h-px bg-gray-200 mt-12" />
  </div>
);

const Diagram: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* User Input */}
        <div className="flex justify-center">
          <Box title="User Input" />
        </div>
        
        <VerticalLine height="h-16" />
        
        {/* Core LLM Runtime */}
        <div className="flex justify-center">
          <Box title="Core LLM Runtime" subtitle="Context, Planning" />
        </div>
        
        {/* Branching connector */}
        <div className="relative">
          <VerticalLine height="h-8" />
          <div className="flex justify-center">
            <div className="w-[420px] h-px bg-gray-200" />
          </div>
          <div className="flex justify-between w-[420px] mx-auto">
            <div className="w-px h-8 bg-gray-200" />
            <div className="w-px h-8 bg-gray-200" />
          </div>
        </div>
        
        {/* Row 1: Skill Execution & Short-Term Memory */}
        <div className="flex justify-center gap-24">
          <Box title="Skill Execution Layer" subtitle="Tools, APIs, Actions" />
          <Box title="Short-Term Memory" subtitle="Working Session State" />
        </div>
        
        {/* Vertical lines */}
        <div className="flex justify-center gap-24">
          <div className="w-[200px] flex justify-center">
            <VerticalLine height="h-12" />
          </div>
          <div className="w-[200px] flex justify-center">
            <VerticalLine height="h-12" />
          </div>
        </div>
        
        {/* Row 2: Long-Term Memory & Procedural Memory */}
        <div className="flex justify-center gap-24">
          <Box title="Long-Term Memory" subtitle="Knowledge, Embedding" />
          <Box title="Procedural Memory" subtitle="Prompt Registry, Ops" />
        </div>
        
        {/* Vertical lines */}
        <div className="flex justify-center gap-24">
          <div className="w-[200px] flex justify-center">
            <VerticalLine height="h-12" />
          </div>
          <div className="w-[200px] flex justify-center">
            <VerticalLine height="h-12" />
          </div>
        </div>
        
        {/* Row 3: Bonding + Trust & Swarm Layer */}
        <div className="flex justify-center gap-24">
          <Box title="Bonding + Trust Layer" subtitle="Reputation Token, Slashing, Promotion" />
          <Box title="Swarm Layer" subtitle="Multi-Agent Orchestration + Delegation" />
        </div>
        
        {/* Vertical lines */}
        <div className="flex justify-center gap-24">
          <div className="w-[200px] flex justify-center">
            <VerticalLine height="h-12" />
          </div>
          <div className="w-[200px] flex justify-center">
            <VerticalLine height="h-12" />
          </div>
        </div>
        
        {/* Row 4: Settlement Engine & AMAI Compute */}
        <div className="flex justify-center gap-24">
          <Box title="Settlement Engine" subtitle="On-Chain PTBs, Fees & Royalties" />
          <Box title="AMAI Compute / Edge" subtitle="Execution Scaling" />
        </div>
      </div>
    </div>
  );
};

export default Diagram;
