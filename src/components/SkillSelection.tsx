import { motion } from 'framer-motion';
import { Shield, Diamond, Trophy, Zap, Star } from 'lucide-react';

interface SkillCategory {
  name: string;
  amai: string;
  sui: string;
  rarity: 'common' | 'rare' | 'legendary' | 'mythic' | 'exotic';
  icon: React.ComponentType<any>;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Common',
    amai: '100 AMAI',
    sui: '+ 1 SUI',
    rarity: 'common',
    icon: Shield
  },
  {
    name: 'Rare',
    amai: '500 AMAI',
    sui: '+ 5 SUI',
    rarity: 'rare',
    icon: Diamond
  },
  {
    name: 'Legendary',
    amai: '2.5k AMAI',
    sui: '+ 25 SUI',
    rarity: 'legendary',
    icon: Trophy
  },
  {
    name: 'Mythic',
    amai: '10k AMAI',
    sui: '+ 100 SUI',
    rarity: 'mythic',
    icon: Zap
  },
  {
    name: 'Exotic',
    amai: '100k AMAI',
    sui: '+ 1000 SUI',
    rarity: 'exotic',
    icon: Star
  }
];

const rarityStyles = {
  common: {
    border: 'border-gray-400',
    text: 'text-gray-300',
    bg: 'bg-gray-800/50'
  },
  rare: {
    border: 'border-blue-400',
    text: 'text-blue-300',
    bg: 'bg-blue-900/30'
  },
  legendary: {
    border: 'border-yellow-400',
    text: 'text-yellow-300',
    bg: 'bg-yellow-900/30'
  },
  mythic: {
    border: 'border-purple-400',
    text: 'text-purple-300',
    bg: 'bg-purple-900/30'
  },
  exotic: {
    border: 'border-cyan-400',
    text: 'text-cyan-300',
    bg: 'bg-cyan-900/30'
  }
};

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
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const isLegendary = category.rarity === 'legendary';
            const styles = rarityStyles[category.rarity];
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`
                  relative rounded-lg p-6 min-w-[140px] cursor-pointer transition-all duration-300
                  ${styles.bg} ${styles.border} border-2
                  ${isLegendary ? 'shadow-[0_0_20px_rgba(255,215,0,0.6)] ring-2 ring-yellow-400/80' : ''}
                  backdrop-blur-sm
                `}
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <IconComponent 
                      size={32} 
                      className={styles.text}
                    />
                  </div>
                  <div className={`text-lg font-semibold mb-2 ${styles.text}`}>
                    {category.name}
                  </div>
                  <div className="text-white text-sm font-medium mb-1">
                    {category.amai}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {category.sui}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};