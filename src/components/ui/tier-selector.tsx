import { cn } from "@/lib/utils";
import { TierDot, STAKE_TIERS } from "@/components/ui/stake-badge";

interface TierSelectorProps {
  selectedTier: number;
  onTierSelect: (tierIndex: number, tier: typeof STAKE_TIERS[0]) => void;
  className?: string;
}

export function TierSelector({ selectedTier, onTierSelect, className }: TierSelectorProps) {
  return (
    <div className={cn("flex justify-center flex-wrap gap-x-12 gap-y-4", className)}>
      {STAKE_TIERS.map((tier, index) => (
        <button
          key={tier.name}
          onClick={() => onTierSelect(index, tier)}
          className="focus:outline-none focus:ring-2 focus:ring-amber-400/50 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          aria-label={`Select ${tier.name} tier: ${tier.min.toLocaleString()} AMAI + ${Math.ceil(tier.min / 100)} SUI`}
        >
          <TierDot 
            tier={tier}
            active={index === selectedTier}
          />
        </button>
      ))}
    </div>
  );
}

export { STAKE_TIERS };