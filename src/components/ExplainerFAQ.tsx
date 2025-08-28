import { motion } from 'framer-motion';
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
  return (
    <section className="min-h-screen flex items-center snap-start bg-gray-900">
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
            <span className="text-sm font-medium text-[#A6FCFC] uppercase tracking-wider">
              Support
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
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
            <Accordion type="single" collapsible className="space-y-0">
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