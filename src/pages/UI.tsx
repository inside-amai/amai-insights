import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { TierSelector, STAKE_TIERS } from "@/components/ui/tier-selector";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SKILL_CATALOG = [
  // Popular
  { id: "defi-arb", name: "DeFi Arbitrage", category: "Popular", trust: 94 },
  { id: "risk-monitor", name: "Risk Monitor", category: "Popular", trust: 92 },
  { id: "yield-hunter", name: "Yield Hunter", category: "Popular", trust: 91 },

  // Trading
  { id: "cross-arb", name: "Cross-chain Arbitrage", category: "Trading", trust: 89 },
  { id: "gas-sniper", name: "Gas Price Sniper", category: "Trading", trust: 88 },
  { id: "alpha-scout", name: "Alpha Signal Scout", category: "Trading", trust: 87 },
  { id: "market-maker", name: "Automated Market Maker", category: "Trading", trust: 85 },

  // Security
  { id: "mev-protect", name: "MEV Protection", category: "Security", trust: 98 },
  { id: "contract-audit", name: "Smart-contract Auditor", category: "Security", trust: 97 },
  { id: "slippage-guard", name: "Slippage Guard", category: "Security", trust: 91 },

  // DeFi
  { id: "yield-opt", name: "Yield Optimization", category: "DeFi", trust: 93 },
  { id: "lending-bot", name: "Lending Bot", category: "DeFi", trust: 90 },
  { id: "leveraged-beta", name: "Leveraged Beta", category: "DeFi", trust: 88 },
];

const CATEGORY_ORDER = ["Popular", "Trading", "Security", "DeFi"];

const getTierForSkillCount = (count: number): number => {
  if (count <= 2) return 0; // Common
  if (count <= 4) return 1; // Rare
  if (count <= 6) return 2; // Legendary
  if (count <= 8) return 3; // Mythic
  return 4; // Exotic
};

const getTierColor = (tierIndex: number) => {
  const colors = [
    { ring: "ring-gray-400/60", bg: "bg-gray-800/40", glow: "" },
    { ring: "ring-blue-400/60", bg: "bg-blue-900/40", glow: "shadow-[0_0_15px_rgba(96,165,250,0.3)]" },
    { ring: "ring-amber-400/60", bg: "bg-amber-900/40", glow: "shadow-[0_0_15px_rgba(251,191,36,0.3)]" },
    { ring: "ring-violet-400/60", bg: "bg-violet-900/40", glow: "shadow-[0_0_15px_rgba(167,139,250,0.3)]" },
    { ring: "ring-cyan-400/60", bg: "bg-cyan-900/40", glow: "shadow-[0_0_15px_rgba(34,211,238,0.3)]" },
  ];
  return colors[tierIndex] || colors[0];
};

const UI = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  const activeTierIndex = useMemo(() => {
    return getTierForSkillCount(selectedSkills.length);
  }, [selectedSkills.length]);

  const handleSkillToggle = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleTierSelect = (tierIndex: number) => {
    // Optional: could auto-select skills up to tier cap
  };

  const getSkillTooltip = (skillId: string) => {
    const currentCount = selectedSkills.length;
    const wouldBeCount = selectedSkills.includes(skillId) ? currentCount : currentCount + 1;
    const tierIndex = getTierForSkillCount(wouldBeCount);
    const tier = STAKE_TIERS[tierIndex];
    const formattedStake = tier.min >= 1000 ? `${tier.min / 1000}k` : tier.min;
    const suiAmount = Math.ceil(tier.min / 100);
    return `${formattedStake} AMAI + ${suiAmount} SUI • ${tier.name}`;
  };

  const skillsByCategory = useMemo(() => {
    return CATEGORY_ORDER.reduce((acc, category) => {
      acc[category] = SKILL_CATALOG.filter(skill => skill.category === category);
      return acc;
    }, {} as Record<string, typeof SKILL_CATALOG>);
  }, []);

  const tierColors = getTierColor(activeTierIndex);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-clip-text text-transparent">
            Select skills for your agent
          </h1>

          {/* Tier Selector */}
          <div className="mb-16">
            <TierSelector
              selectedTier={activeTierIndex}
              onTierSelect={handleTierSelect}
            />
          </div>

          {/* Skills Grid */}
          <div className="space-y-10">
            {CATEGORY_ORDER.map((category) => (
              <div key={category}>
                <h2 className="text-lg font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {skillsByCategory[category].map((skill) => {
                    const isSelected = selectedSkills.includes(skill.id);
                    return (
                      <Tooltip key={skill.id}>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => handleSkillToggle(skill.id)}
                            className={cn(
                              "flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200",
                              "hover:bg-white/5",
                              isSelected
                                ? cn(
                                    "ring-2",
                                    tierColors.ring,
                                    tierColors.bg,
                                    tierColors.glow
                                  )
                                : "border-slate-600 ring-1 ring-white/10 bg-transparent"
                            )}
                          >
                            <span className={cn(
                              "font-medium text-sm",
                              isSelected ? "text-white" : "text-gray-300"
                            )}>
                              {skill.name}
                            </span>
                            <span className={cn(
                              "text-xs font-mono",
                              isSelected ? "text-white/90" : "text-gray-500"
                            )}>
                              {skill.trust}%
                            </span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="top" 
                          className="bg-gray-900 border-gray-700 text-gray-200 text-xs"
                        >
                          {getSkillTooltip(skill.id)}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Skills Summary */}
          {selectedSkills.length > 0 && (
            <div className="mt-12 p-6 rounded-xl border border-gray-800 bg-gray-900/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Selected Skills</p>
                  <p className="text-2xl font-bold text-white">{selectedSkills.length}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Required Tier</p>
                  <p className={cn(
                    "text-2xl font-bold",
                    STAKE_TIERS[activeTierIndex].color
                  )}>
                    {STAKE_TIERS[activeTierIndex].name}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default UI;
