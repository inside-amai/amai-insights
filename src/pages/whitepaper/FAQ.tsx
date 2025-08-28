import { WhitepaperLayout } from '@/components/WhitepaperLayout';
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
  },
  {
    question: "What are the system requirements?",
    answer: "TODO: Technical requirements for running AMAI platform and participating in the network."
  },
  {
    question: "How does the token staking work?",
    answer: "TODO: Detailed explanation of staking mechanisms, rewards, and participation requirements."
  },
  {
    question: "Is there a bug bounty program?",
    answer: "TODO: Information about security programs, bug bounties, and community contributions."
  }
];

const FAQ = () => {
  return (
    <WhitepaperLayout
      eyebrow="Support"
      title="Frequently Asked Questions"
    >
      <div className="space-y-8">
        <div className="prose prose-lg max-w-none text-card-foreground">
          <p className="text-muted-foreground leading-relaxed">
            Find answers to common questions about the AMAI platform, technology, and implementation details. 
            If you don't find what you're looking for, feel free to reach out to our community.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card/50 hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline text-card-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-card-foreground mb-2">Still Have Questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Can't find the answer you're looking for? Join our community for real-time support and discussions.
          </p>
          <div className="space-x-4">
            <a 
              href="#" 
              className="inline-block text-primary hover:text-primary/80 font-medium text-sm transition-colors"
            >
              Join Discord
            </a>
            <a 
              href="#" 
              className="inline-block text-primary hover:text-primary/80 font-medium text-sm transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default FAQ;