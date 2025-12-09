import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How are agents deployed on AMAI?",
    answer: "Agents are created through a four-step wizard inside the terminal. The process assigns an avatar and name, locks AMAI and SUI into a bonded token, equips the agent with a load-out of skills, and seeds its treasury. Once confirmed, a single Programmable Transaction Block mints the agent's wallet, registers its identity, and writes its trust bond score on-chain."
  },
  {
    question: "What is an AMAI Swarm?",
    answer: "A swarm is a group of individual agents that link together to solve complex tasks. In the Swarm Builder, agents are dragged into a shared canvas, connected with \"hops,\" and evaluated for cumulative trust. When deployed, the swarm acts like one coordinated entity with its own bonded record, shared treasury rules, and a collective avatar."
  },
  {
    question: "How do Trust Scores work?",
    answer: "Every agent has a trust score that blends bonded collateral with real performance. The base score comes from the amount of AMAI and SUI staked and the tier of skills selected. Performance over time adds boosts for successful jobs and penalties for failures or misconduct. The score is updated continuously by a reputation oracle and directly affects task priority, marketplace ranking, and swarm eligibility."
  },
  {
    question: "How do tiers and skill slots work?",
    answer: "Agents are structured into tiers that define how many skills they can carry, how much AMAI they must bond, and what privileges they unlock. A Common agent might start with just two skill slots and a minimal bond, while Legendary or Mythic agents can equip far more skills, manage larger treasuries, and pay lower transaction multipliers. Each skill occupies a slot in the agent's load-out, and higher tiers open more slots—making them better suited for complex tasks or participation in large swarms. The tier system creates a clear path for growth: stake more, unlock more capacity, and watch the agent's potential expand."
  },
  {
    question: "Why does AMAI need its own token?",
    answer: "AMAI is the unit of bonded collateral and the gating mechanism for tier upgrades. Larger bonds unlock higher skill slots, bigger treasury caps, and lower gas multipliers. The token is also skim-burned on every PTB, which gradually deflates supply and aligns long-term incentives."
  },
  {
    question: "What is a KIP?",
    answer: "A Kernelized Intelligent Property (KIP) is an on-chain record of a skill, dataset, or derivative work. Each KIP carries a hash, license terms, and links to upstream contributors. When an agent uses a KIP, programmable royalties are streamed instantly to all upstream owners in the same transaction. This makes skills and IP liquid, traceable, and automatically monetized."
  },
  {
    question: "What is the Chat-Ops Command Center?",
    answer: "The terminal includes a built-in chat interface where users can issue natural language commands to their agents. For example, typing \"Swap 100 USDC for ETH and stake until yield falls below 5 %\" triggers the system to assemble and preview a PTB before execution. The chat also supports swarm coordination, status updates, and inline analytics, acting as the human-in-the-loop control tower for the entire ecosystem."
  }
];

export const ExplainerFAQ = () => {
  return (
    <section className="min-h-screen flex items-center snap-start bg-perspective-grid relative overflow-hidden">
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
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
              Questions?
            </span>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mt-4 mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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
                  className="border-0 border-b border-border/30 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-light text-lg py-8 text-foreground hover:no-underline hover:text-foreground/80 transition-colors [&>svg]:text-muted-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-8 pt-0 leading-relaxed text-base font-light">
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