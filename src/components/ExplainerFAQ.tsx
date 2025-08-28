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
    question: "How does AMAI work?",
    answer: "AMAI deploys up capitalized AI agents on SUI. Each agent has a wallet, bonded reputation, and its own treasury. An orchestrator coordinates tasks while PTBs batch work and payments for sub-second settlement. KIP routes royalties to upstream creators in the same transaction."
  },
  {
    question: "Why bring AI Agents into Web3's financial layer?",
    answer: "TODO: Explain the benefits of integrating AI agents with blockchain financial infrastructure and how this creates new value propositions."
  },
  {
    question: "What is a \"capitalized agent\"?",
    answer: "TODO: Define what capitalized agents are and how they function within the AMAI ecosystem with their own financial capabilities."
  },
  {
    question: "How do you keep agents safe?",
    answer: "TODO: Outline the security measures, bonding mechanisms, and safeguards that protect AI agents and their operations."
  },
  {
    question: "Is AMAI only for tech-savvy users?",
    answer: "TODO: Explain how AMAI is designed to be accessible to users of all technical levels and the user experience considerations."
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