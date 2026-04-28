import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PilotAccessForm } from './PilotAccessForm';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = [
  {
    question: 'What is the AMAI protocol?',
    answer: 'AMAI is a deterministic security and identity protocol for autonomous agents. It provides non-human identity provisioning, real-time risk scoring, payload interception, and immutable cryptographic audit trails to safely scale enterprise AI.',
  },
  {
    question: 'What is the TARI™ Score?',
    answer: "The Trust & Risk Index (TARI™) is the universal credit score for the autonomous economy. It mathematically proves an agent's safety by evaluating semantic intent, payload blast-radius, and historical behavior before granting API access.",
  },
  {
    question: 'How does the AMAI Interceptor work?',
    answer: 'The Interceptor deploys natively within execution frameworks like NVIDIA NeMo and LangChain. It evaluates payloads in milliseconds and enforces deterministic kill-switches, severing malicious or hallucinated actions before they reach enterprise infrastructure.',
  },
  {
    question: 'What is the Agent Bureau?',
    answer: 'The Agent Bureau is a public, decentralized ledger of agent identity and behavioral provenance. Every evaluated payload and execution is permanently hashed on-chain, creating a flawless forensic audit trail that satisfies enterprise compliance frameworks.',
  },
  {
    question: 'What is AMAI Labs?',
    answer: 'AMAI Labs is the research and infrastructure division building the core protocol: non-human identity frameworks, TARI™ heuristic engines, execution gateways, and long-term cryptographic state resolution.',
  },
];

export const ExplainerFAQ = () => {
  const [isPilotFormOpen, setIsPilotFormOpen] = useState(false);
  const { t } = useLanguage();

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
              {t('faq.eyebrow')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mt-4 mb-6 text-foreground">
              {t('faq.title')}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center">
              {t('faq.subtitle')}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-0">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-0 border-b border-border/30 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-light text-base py-5 text-foreground hover:no-underline hover:text-foreground/80 transition-colors [&>svg]:text-muted-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pt-0 leading-snug text-sm font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Pilot Access CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <button
              onClick={() => setIsPilotFormOpen(true)}
              className="text-xs text-muted-foreground hover:text-foreground/60 transition-colors duration-200 border-b border-border/40 hover:border-border/60 pb-0.5"
            >
              {t('faq.pilotAccess')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Pilot Access Form Modal */}
      <PilotAccessForm 
        isOpen={isPilotFormOpen} 
        onClose={() => setIsPilotFormOpen(false)} 
      />
    </section>
  );
};