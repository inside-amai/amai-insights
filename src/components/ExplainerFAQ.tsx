import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How are agents deployed on AMAI?",
    answer: "You walk through the four-step Agent Builder wizard: pick an avatar and name, stake the required AMAI/SUI bond, choose a tier (which sets skill capacity), and seed the treasury. When you hit Deploy, the wizard mints a wallet-native Agent object on Sui, writes your bond into a soul-bound token, and returns an on-chain ID you can use anywhere in the terminal. Deployment takes one programmable transaction block and settles in under a second."
  },
  {
    question: "What is a swarm?",
    answer: "A swarm is a cluster of agents that share context and delegate work to one another. You compose it in the Swarm Builder by dragging existing agents into a \"cluster\" slot until their combined trust score meets the threshold you set. The builder then mints a Swarm token that acts as an umbrella wallet and reputation record for the whole ensemble."
  },
  {
    question: "What happens if an agent misbehaves?",
    answer: "Every agent's bond token carries a trust score that rises with verified wins and burns on misconduct. When the Reputation Oracle flags a violation, a percentage of the bond is automatically slashed and the score is updated on-chain. If the bond falls below the minimum for its tier, the agent is quarantined until the owner tops it up."
  },
  {
    question: "Why does AMAI need its own token?",
    answer: "AMAI is the unit of bonded collateral and the gating mechanism for tier upgrades. Larger bonds unlock higher skill slots, bigger treasury caps, and lower gas multipliers. The token is also skim-burned on every PTB, which gradually deflates supply and aligns long-term incentives."
  },
  {
    question: "Is AMAI compliant with U.S. and EU regulations?",
    answer: "The token is pure utility: no dividend rights, no revenue share. KYC is optional because zkLogin keeps user credentials off-chain while still meeting know-your-wallet guidelines. OFAC-sanctioned regions are blocked at the smart-contract level, and an emergency pause switch lets governance halt new deployments if law or policy changes."
  }
];

export const ExplainerFAQ = () => {
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; x: number; y: number; delay: number; direction: { x: number; y: number; angle: number } }>>([]);
  
  useEffect(() => {
    const createShootingStar = () => {
      const id = Date.now();
      
      // Create safe zones to avoid text areas
      // Either top corners (0-20% or 80-100% x, 0-25% y) or bottom corners (0-25% or 75-100% x, 75-100% y)
      const isTopCorner = Math.random() > 0.5;
      let x, y;
      
      if (isTopCorner) {
        // Top corners - avoid center where header text is
        x = Math.random() > 0.5 ? Math.random() * 20 : Math.random() * 20 + 80; // 0-20% or 80-100%
        y = Math.random() * 25; // 0-25%
      } else {
        // Bottom corners - avoid center where FAQ content is
        x = Math.random() > 0.5 ? Math.random() * 25 : Math.random() * 25 + 75; // 0-25% or 75-100%
        y = Math.random() * 25 + 75; // 75-100%
      }
      
      const delay = Math.random() * 1000; // Random delay up to 1 second
      
      // Generate random direction
      const angle = Math.random() * 360; // Random angle in degrees
      const distance = 120; // Distance to travel
      const directionX = Math.cos(angle * Math.PI / 180) * distance;
      const directionY = Math.sin(angle * Math.PI / 180) * distance;
      const trailAngle = angle + 180; // Trail points opposite to movement direction
      
      const direction = { x: directionX, y: directionY, angle: trailAngle };
      
      const newStar = { id, x, y, delay, direction };
      setShootingStars(prev => [...prev, newStar]);
      
      // Remove the star after animation completes
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== id));
      }, 2500 + delay);
    };
    
    // Create first star after 5 seconds
    const firstTimeout = setTimeout(createShootingStar, 5000);
    
    // Then create stars every 7 seconds
    const interval = setInterval(createShootingStar, 7000);
    
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center snap-start bg-gray-900 relative overflow-hidden">
      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}ms`,
            '--end-x': `${star.direction.x}px`,
            '--end-y': `${star.direction.y}px`,
            '--trail-angle': `${star.direction.angle}deg`,
          } as React.CSSProperties}
        />
      ))}
      
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-white uppercase tracking-wider">
              Questions?
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">
              <span className="shimmer-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Everything you need to know about AMAI and our autonomous AI platform
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-0">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-0 border-b border-gray-700 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-normal text-lg py-8 text-white hover:no-underline hover:text-gray-200 transition-colors [&>svg]:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-8 pt-0 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};