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

const faqKeys = [
  { q: 'faqa.q1', a: 'faqa.a1' },
  { q: 'faqa.q2', a: 'faqa.a2' },
  { q: 'faqa.q3', a: 'faqa.a3' },
  { q: 'faqa.q4', a: 'faqa.a4' },
  { q: 'faqa.q5', a: 'faqa.a5' },
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