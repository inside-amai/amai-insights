import React from "react";

interface BoxProps {
  title: string;
  subtitle?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "small" | "medium" | "large";
}

const Box: React.FC<BoxProps> = ({ 
  title, 
  subtitle, 
  variant = "secondary",
  size = "medium" 
}) => {
  const sizeClasses = {
    small: "px-4 py-3 min-w-[140px]",
    medium: "px-6 py-4 min-w-[180px]",
    large: "px-8 py-5 min-w-[200px]"
  };

  const variantClasses = {
    primary: "border-cyan-400/60 bg-cyan-950/30",
    secondary: "border-gray-500/40 bg-gray-900/50",
    accent: "border-purple-400/50 bg-purple-950/30"
  };

  return (
    <div className={`${sizeClasses[size]} border rounded-lg text-center backdrop-blur-sm ${variantClasses[variant]}`}>
      <div className="text-gray-100 font-medium text-sm tracking-tight">{title}</div>
      {subtitle && (
        <div className="text-gray-400 text-xs mt-1 font-light">{subtitle}</div>
      )}
    </div>
  );
};

const HexagonBox: React.FC<BoxProps> = ({ title, subtitle }) => (
  <div className="relative">
    <div className="px-8 py-6 border-2 border-cyan-400/70 bg-cyan-950/40 text-center backdrop-blur-sm"
         style={{ 
           clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
           minWidth: "220px"
         }}>
      <div className="text-cyan-300 font-semibold text-base tracking-tight">{title}</div>
      {subtitle && (
        <div className="text-cyan-400/70 text-xs mt-1 font-light">{subtitle}</div>
      )}
    </div>
  </div>
);

const Arrow: React.FC<{ direction: "up" | "down" | "left" | "right"; length?: string }> = ({ 
  direction, 
  length = "40px" 
}) => {
  const isVertical = direction === "up" || direction === "down";
  
  return (
    <div className={`flex items-center justify-center ${isVertical ? "flex-col" : "flex-row"}`}>
      <div 
        className={`bg-gray-500/60 ${isVertical ? "w-px" : "h-px"}`}
        style={{ [isVertical ? "height" : "width"]: length }}
      />
      <div 
        className="w-0 h-0"
        style={{
          borderLeft: direction === "right" ? "6px solid rgb(156 163 175 / 0.6)" : (isVertical ? "4px solid transparent" : "none"),
          borderRight: direction === "left" ? "6px solid rgb(156 163 175 / 0.6)" : (isVertical ? "4px solid transparent" : "none"),
          borderTop: direction === "down" ? "6px solid rgb(156 163 175 / 0.6)" : (!isVertical ? "4px solid transparent" : "none"),
          borderBottom: direction === "up" ? "6px solid rgb(156 163 175 / 0.6)" : (!isVertical ? "4px solid transparent" : "none"),
        }}
      />
    </div>
  );
};

const AgentArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full py-8">
      <div className="relative max-w-3xl mx-auto">
        
        {/* Top: Trust Score Computation */}
        <div className="flex flex-col items-center mb-2">
          <Box 
            title="Trust Score Computation" 
            subtitle="Reputation grows with verified missions"
            variant="accent"
          />
          <Arrow direction="down" length="24px" />
        </div>

        {/* Middle Row: Collateral - Agent - Missions */}
        <div className="flex items-center justify-center gap-4 lg:gap-8 mb-2">
          {/* Left: Bonded Collateral */}
          <div className="flex items-center">
            <Box 
              title="Bonded Collateral" 
              subtitle="AMAI + SUI • Defines trust weight"
              size="small"
            />
            <Arrow direction="right" length="24px" />
          </div>

          {/* Center: Agent Node */}
          <HexagonBox 
            title="Autonomous Agent" 
            subtitle="Skills • Memory • Execution"
          />

          {/* Right: Mission Execution */}
          <div className="flex items-center">
            <Arrow direction="right" length="24px" />
            <Box 
              title="On-Chain Missions" 
              subtitle="Real-time execution on Sui PTBs"
              size="small"
            />
          </div>
        </div>

        {/* Arrow down from agent */}
        <div className="flex justify-center mb-2">
          <Arrow direction="down" length="24px" />
        </div>

        {/* Bottom: Swarm Coordination */}
        <div className="flex flex-col items-center mb-4">
          <Box 
            title="Swarm Coordination" 
            subtitle="Shared context • Delegated tasks • Collective optimization"
            variant="primary"
          />
        </div>

        {/* Connecting lines to Settlement */}
        <div className="flex justify-center items-center gap-8 mb-2">
          <div className="w-px h-8 bg-gray-500/60" />
        </div>

        {/* Bottom: Settlement Layer */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg px-6 py-3 border border-cyan-400/40 bg-gradient-to-r from-cyan-950/30 via-gray-900/50 to-cyan-950/30 text-center rounded">
            <div className="text-gray-100 font-medium text-sm tracking-tight">Settlement Layer (Sui)</div>
            <div className="text-gray-400 text-xs mt-1 font-light">Deterministic settlement • Performance verification</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentArchitectureDiagram;
