import { motion } from 'framer-motion';
import { useState } from 'react';
import { TierSelector, STAKE_TIERS } from "@/components/ui/tier-selector";
import { useToast } from "@/hooks/use-toast";


export const SkillSelection = () => {
  const [selectedTier, setSelectedTier] = useState(2); // Start with Legendary
  const { toast } = useToast();

  const handleTierSelect = (tierIndex: number, tier: typeof STAKE_TIERS[0]) => {
    setSelectedTier(tierIndex);
    
    // Map tier icons to emojis
    const tierEmojis: { [key: string]: string } = {
      'Common': '🛡️',
      'Rare': '💎',
      'Legendary': '🏆',
      'Mythic': '⚡',
      'Exotic': '⭐'
    };
    
    const emoji = tierEmojis[tier.name] || '⚡';
    const skillsText = tier.skillCap === Infinity ? "∞" : `+${tier.skillCap}`;
    
    toast({
      title: `${emoji} ${tier.name} Unlocked! ${skillsText} Skills added.`,
      description: "Your agent just leveled up.",
      duration: 2000,
    });
  };
  return (
    <div className="relative bg-transparent py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-white text-xl font-medium mb-8">
            Select skills for your agent
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TierSelector
            selectedTier={selectedTier}
            onTierSelect={handleTierSelect}
            className="mt-6 mb-2"
          />
        </motion.div>
      </div>
    </div>
  );
};