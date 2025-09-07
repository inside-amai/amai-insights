import { cn } from "@/lib/utils";
import { Shield, Gem, Trophy, Zap, Star } from "lucide-react";

export const TIER_ICONS = {
  Common:    { icon: "Shield",        cls: "text-gray-400",   glow: "" },
  Rare:      { icon: "Gem",           cls: "text-blue-300",   glow: "shadow-cyan-400" },
  Epic:      { icon: "Star",          cls: "text-purple-300", glow: "shadow-purple-400" },
  Legendary: { icon: "Trophy",        cls: "text-amber-300",  glow: "shadow-amber-400" },
  Mythic:    { icon: "Zap",           cls: "text-violet-300", glow: "shadow-violet-500" }
};

export const STAKE_TIERS = [
  { min: 100,     name: "Common",    color: "text-gray-300",   glow: "",                  icon: "Shield", ring: "ring-gray-500",    skillCap: 2 },
  { min: 500,     name: "Rare",      color: "text-blue-300",   glow: "shadow-cyan-400",   icon: "Gem",    ring: "ring-blue-500",    skillCap: 4 },
  { min: 2_500,   name: "Epic",      color: "text-purple-300", glow: "shadow-purple-400", icon: "Star",   ring: "ring-purple-500",  skillCap: 8 },
  { min: 10_000,  name: "Legendary", color: "text-amber-300",  glow: "shadow-amber-400",  icon: "Trophy", ring: "ring-amber-500",   skillCap: 6 },
  { min: 100_000, name: "Mythic",    color: "text-violet-300", glow: "shadow-violet-500", icon: "Zap",    ring: "ring-violet-500",  skillCap: Infinity }
];

const iconMap = { Shield, Gem, Trophy, Zap, Star };

interface TierDotProps {
  tier: typeof STAKE_TIERS[0];
  active: boolean;
}

export function TierDot({ tier, active }: TierDotProps) {
  const { icon, cls } = TIER_ICONS[tier.name as keyof typeof TIER_ICONS];
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  const formattedStake = tier.min >= 1000 ? `${tier.min / 1000}k` : tier.min;
  const suiAmount = Math.ceil(tier.min / 100);

  const getTierStyling = (tierName: string, isActive: boolean) => {
    const baseStyles = {
      background: "bg-gradient-to-b from-gray-800/30 to-gray-900/30 backdrop-blur-sm",
      border: "border-gray-600/50",
      iconGlow: "",
      textShimmer: ""
    };

    if (!isActive) return baseStyles;

    switch (tierName) {
      case 'Common':
        return {
          background: "bg-gradient-to-b from-gray-700/60 to-gray-800/80 backdrop-blur-md",
          border: "border-gray-400/70 ring-2 ring-gray-400/50",
          iconGlow: "filter drop-shadow-[0_0_15px_rgba(156,163,175,0.8)]",
          textShimmer: "bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-bold"
        };
      case 'Rare':
        return {
          background: "bg-gradient-to-b from-blue-800/60 to-blue-900/80 backdrop-blur-md",
          border: "border-blue-400/70 ring-2 ring-blue-400/50",
          iconGlow: "filter drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]",
          textShimmer: "bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-bold"
        };
      case 'Epic':
        return {
          background: "bg-gradient-to-b from-purple-800/60 to-purple-900/80 backdrop-blur-md",
          border: "border-purple-400/70 ring-2 ring-purple-400/50",
          iconGlow: "filter drop-shadow-[0_0_15px_rgba(147,51,234,0.8)]",
          textShimmer: "bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-bold"
        };
      case 'Legendary':
        return {
          background: "bg-gradient-to-b from-amber-800/60 to-orange-900/80 backdrop-blur-md",
          border: "border-amber-400/70 ring-2 ring-amber-400/50",
          iconGlow: "filter drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]",
          textShimmer: "bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-bold"
        };
      case 'Mythic':
        return {
          background: "bg-gradient-to-b from-violet-800/60 to-purple-900/80 backdrop-blur-md",
          border: "border-violet-400/70 ring-2 ring-violet-400/50",
          iconGlow: "filter drop-shadow-[0_0_15px_rgba(167,139,250,0.8)]",
          textShimmer: "bg-gradient-to-r from-violet-300 via-purple-100 to-violet-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-bold"
        };
      case 'Exotic':
        return {
          background: "bg-gradient-to-b from-cyan-800/60 to-teal-900/80 backdrop-blur-md",
          border: "border-cyan-400/70 ring-2 ring-cyan-400/50",
          iconGlow: "filter drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]",
          textShimmer: "bg-gradient-to-r from-cyan-300 via-cyan-100 to-cyan-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-bold"
        };
      default:
        return baseStyles;
    }
  };

  const styling = getTierStyling(tier.name, active);

  return (
    <div 
      className={cn(
        "flex flex-col items-center w-[88px] sm:w-24 h-[90px] sm:h-auto p-2 sm:p-3 rounded-xl border transition-all duration-300",
        styling.background,
        styling.border,
        active && "transform scale-105"
      )}
    >
      <IconComponent
        className={cn(
          cls,
          "text-[24px] sm:text-[28px] transition-all duration-300 mt-1",
          active && styling.iconGlow
        )}
        size={24}
      />
      <span className={cn(
        "mt-1 sm:mt-2 text-[9px] sm:text-xs font-bold tracking-tight text-center leading-[10px] px-1 flex-1 flex items-center",
        active ? styling.textShimmer : "text-gray-300"
      )}>
        {tier.name}
      </span>
      <span className={cn(
        "text-[8px] sm:text-[10px] mt-0.5 sm:mt-1 font-medium text-center leading-tight",
        active ? "text-gray-200" : "text-gray-400"
      )}>
        {formattedStake} AMAI<br/>+ {suiAmount} SUI
      </span>
    </div>
  );
}