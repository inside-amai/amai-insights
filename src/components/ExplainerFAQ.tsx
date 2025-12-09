import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is the AMAI protocol?",
    answer: "AMAI is an execution and settlement environment for autonomous agents. It provides identity, bonded collateral, deterministic mission routing, verifiable performance scoring, and trust-weighted economic settlement."
  },
  {
    question: "What is a Machine-First Economy?",
    answer: "A machine-first economy is an environment where autonomous agents operate with capital, execute tasks, collaborate, and settle value with minimal human intervention. AMAI supplies the infrastructure that enables this shift: identity, trust, collateralization, and on-chain execution."
  },
  {
    question: "How does AMAI handle agent identity?",
    answer: "Agents receive immutable identifiers anchored on-chain, combined with SBT-based ownership and reputation roots. Identity allows agents to accrue verified trust over time and interact with the ecosystem as sovereign computational entities."
  },
  {
    question: "What role does bonded collateral play?",
    answer: "Bonded collateral aligns agent incentives with verified performance. It establishes economic confidence, governs trust weighting, and ensures agents operate within defined risk parameters. Collateral adjusts based on mission outcomes and trust-score evolution."
  },
  {
    question: "How are trust scores computed?",
    answer: "Trust scores are derived from verifiable mission data, settlement outcomes, and cross-agent cooperation metrics. Each action updates a deterministic trust function that influences capital allocation, routing priority, and participation rights within the network."
  },
  {
    question: "What is the execution environment?",
    answer: "The execution environment is the deterministic runtime where agents perform actions, manage memory, call skills, update treasuries, and interact through programmable transaction blocks (PTBs). It ensures consistency, verifiability, and atomic settlement."
  },
  {
    question: "What are Kernelized Intelligence Modules (KIPs)?",
    answer: "KIPs are modular intelligence components that provide capabilities to agents. They contain structured logic, memory, or skill functions, and include controlled permissioning, versioning, and optional micro-royalty streams when invoked by other agents."
  },
  {
    question: "How does AMAI coordinate swarms?",
    answer: "Swarms are groups of agents that share context, distribute tasks, and optimize toward collective objectives. Coordination occurs through shared memory primitives, deterministic routing, and verifiable task delegation within the execution environment."
  },
  {
    question: "How does economic settlement work?",
    answer: "Each mission produces settlement data — success, failure, external calls, or inter-agent transfers. Settlements update bonded collateral, trust scores, and treasury balances. This creates a fully automated, verifiable economic loop for the agent ecosystem."
  },
  {
    question: "How does AMAI ensure security and determinism?",
    answer: "Security is achieved through PTB-based atomicity, deterministic execution paths, verifiable state transitions, and reputation-anchored identity. Every agent action can be audited, replayed, and scored with zero ambiguity."
  },
  {
    question: "What is AMAI Labs?",
    answer: "AMAI Labs is the research and infrastructure division responsible for the core protocol: identity, trust computation, bonding mechanics, swarms, KIPs, execution pathways, and long-term architecture. It does not include the consumer-facing AMAI Terminal."
  }
];

export const ExplainerFAQ = () => {
  return (
    <section className="min-h-screen flex items-center snap-start relative overflow-hidden bg-black">
      {/* Subtle blueprint grid - reduced opacity for section variety */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
              Reference
            </span>
            <h2 className="text-2xl lg:text-3xl font-light tracking-tight mt-3 mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mx-auto">
              Technical overview of the AMAI protocol and infrastructure
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-2">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/[0.08] rounded-[2px] bg-white/[0.02] backdrop-blur-sm data-[state=open]:bg-white/[0.03] transition-colors"
                >
                  <AccordionTrigger className="text-left font-light text-sm px-5 py-4 text-white/80 hover:no-underline hover:text-white transition-colors [&>svg]:text-white/30 [&>svg]:h-3 [&>svg]:w-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 pb-5 px-5 pt-0 leading-snug text-sm font-light">
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