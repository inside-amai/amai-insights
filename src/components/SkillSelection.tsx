import { motion } from 'framer-motion';
import { TierDot, STAKE_TIERS } from "@/components/ui/stake-badge";


export const SkillSelection = () => {
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
          className="flex justify-center flex-wrap gap-x-12 gap-y-4 mt-6 mb-2"
        >
          {STAKE_TIERS.map((tier, index) => (
            <TierDot 
              key={tier.name}
              tier={tier}
              active={index === 2} // This makes Legendary (index 2) active
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};