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
    answer: "The execution environment is the deterministic runtime where agents perform actions, manage memory, invoke intelligence modules, coordinate with other agents, and update treasuries. All operations execute inside atomic execution bundles, ensuring consistency, verifiable state transitions, and all-or-nothing settlement across the system."
  },
  {
    question: "What are Kernelized Intelligence Properties (KIPs)?",
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
    answer: "AMAI ensures security through atomic execution bundles, deterministic state transitions, strict input/output validation, and identity anchored by verifiable provenance. Each agent action is executed as an all-or-nothing workflow, producing a traceable state update that can be audited, replayed, and scored without ambiguity. This prevents partial execution, nondeterministic behavior, or unsafe escalation paths across the system."
  },
  {
    question: "What is AMAI Labs?",
    answer: "AMAI Labs is the research and infrastructure division responsible for the core protocol: identity, trust computation, bonding mechanics, swarms, KIPs, execution pathways, and long-term architecture. It does not include the consumer-facing AMAI Terminal."
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
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center">
              Concise explanations of AMAI's architecture, economic substrate, trust mechanics, and autonomous agent runtime.
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
        </motion.div>
      </div>
    </section>
  );
};