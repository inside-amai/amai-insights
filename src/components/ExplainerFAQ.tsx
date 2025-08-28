import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is AMAI's core mission?",
    answer: "TODO: Add mission statement and core values that define AMAI's purpose in the autonomous AI space."
  },
  {
    question: "How does AMAI leverage the Sui blockchain?",
    answer: "TODO: Explain the technical integration with Sui blockchain and benefits of this choice for AI infrastructure."
  },
  {
    question: "What makes AMAI different from other AI platforms?",
    answer: "TODO: Highlight unique value propositions and competitive advantages in the autonomous AI market."
  },
  {
    question: "When will the platform be fully operational?",
    answer: "TODO: Provide timeline for platform launch and key milestones users can expect."
  },
  {
    question: "How can developers integrate with AMAI?",
    answer: "TODO: Outline developer resources, APIs, and integration pathways for the AMAI platform."
  }
];

export const ExplainerFAQ = () => {
  return (
    <section className="min-h-screen flex items-center snap-start bg-section">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Questions & Answers
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about AMAI and our autonomous AI platform
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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