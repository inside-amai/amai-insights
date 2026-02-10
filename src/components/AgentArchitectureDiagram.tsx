import React from "react";

interface BoxProps {
  title: string;
  subtitle?: string;
  isCenter?: boolean;
}

const Box: React.FC<BoxProps> = ({ title, subtitle, isCenter = false }) => (
  <div className={`
    group
    bg-gradient-to-b from-white/[0.08] to-white/[0.02]
    border border-white/10
    rounded-lg
    backdrop-blur-sm
    transition-all duration-500
    hover:border-white/20
    text-center
    ${isCenter ? "px-6 py-5" : "px-4 py-3"}
  `}>
    <span className={`${isCenter ? "text-sm" : "text-xs"} font-medium text-white tracking-tight`}>
      {title}
    </span>
    {subtitle && (
      <p className="text-[10px] text-white/40 leading-relaxed mt-1">
        {subtitle}
      </p>
    )}
  </div>
);

const CenterNode: React.FC<BoxProps> = ({ title, subtitle }) => (
  <div className="
    relative
    bg-gradient-to-b from-white/[0.12] to-white/[0.04]
    border border-white/20
    rounded-lg
    backdrop-blur-sm
    px-6 py-5
    transition-all duration-500
    hover:border-white/30
    text-center
  ">
    <span className="text-sm font-medium text-white tracking-tight">
      {title}
    </span>
    {subtitle && (
      <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">
        {subtitle}
      </p>
    )}
    <div className="w-12 h-px bg-white/10 mx-auto mt-3" />
    <p className="text-[10px] text-white/40 uppercase tracking-wider mt-2">
      Powered by x702 Protocol
    </p>
  </div>
);

const ConnectionLine: React.FC<{ direction: "vertical" | "horizontal"; length?: number }> = ({ 
  direction, 
  length = 20
}) => (
  <div className={`
    ${direction === "vertical" ? "w-px" : "h-px"}
    bg-gradient-to-${direction === "vertical" ? "b" : "r"} from-white/20 via-white/10 to-transparent
  `} style={{ [direction === "vertical" ? "height" : "width"]: `${length}px` }} />
);

const AgentArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full py-6">
      {/* Container with subtle grid */}
      <div className="relative max-w-2xl mx-auto p-6 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-lg">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] rounded-lg overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 space-y-4">
          
          {/* Top: Trust Score */}
          <div className="flex flex-col items-center">
            <Box 
              title="Trust Score Computation" 
              subtitle="Reputation grows with verified missions"
            />
            <ConnectionLine direction="vertical" length={16} />
          </div>

          {/* Middle Row */}
          <div className="flex items-center justify-center gap-3 lg:gap-6">
            {/* Left: Collateral */}
            <div className="flex items-center gap-2">
            <Box 
              title="Bonded Collateral" 
              subtitle="AMAI"
            />
              <div className="w-4 h-px bg-white/20" />
            </div>

            {/* Center: Agent */}
            <CenterNode 
              title="Autonomous Agent" 
              subtitle="Skills • Memory • Engine"
            />

            {/* Right: Missions */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-px bg-white/20" />
              <Box 
                title="Missions" 
                subtitle="Atomic Execution"
              />
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center">
            <ConnectionLine direction="vertical" length={16} />
          </div>

          {/* Swarm */}
          <div className="flex justify-center">
            <Box 
              title="Swarm Coordination" 
              subtitle="Shared context • Collective optimization"
            />
          </div>

          {/* Connection to Settlement */}
          <div className="flex justify-center">
            <ConnectionLine direction="vertical" length={16} />
          </div>

          {/* Settlement Layer */}
          <div className="flex justify-center">
            <div className="
              w-full max-w-md
              bg-gradient-to-b from-white/[0.06] to-white/[0.01]
              border border-white/8
              rounded-lg
              px-6 py-3
              transition-all duration-500
              hover:border-white/15
              text-center
            ">
              <span className="text-xs font-medium text-white/80 tracking-tight">
                Settlement Layer
              </span>
              <p className="text-[10px] text-white/40 mt-1">
                Deterministic settlement • Performance verification
              </p>
            </div>
          </div>

        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-8 h-px bg-gradient-to-l from-white/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-white/20 to-transparent" />
      </div>
    </div>
  );
};

export default AgentArchitectureDiagram;
