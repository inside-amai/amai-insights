import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How is the final supply calculated?",
    answer: (
      <div className="space-y-4">
        <p>The final supply is discovered once the Genesis Mint ends. The total number of tokens minted across all tiers is used to determine the community's share (70%), with the remaining 30% allocated to team, partners, liquidity, and reserve.</p>
        
        <div className="bg-card border border-border rounded-lg p-6 my-6">
          <div className="text-center">
            <div className="text-lg font-mono">
              <span className="text-primary font-semibold">Final Supply</span>
              <span className="mx-4 text-muted-foreground">=</span>
              <div className="inline-block">
                <div className="border-b border-muted-foreground pb-1 mb-1">
                  <span className="text-accent font-medium">Total Minted Value</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Weighted Average Price
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "What is the base price and how do the discount tiers work?",
    answer: "The base price for $AMAI is $0.10. Early minters are rewarded with tiered discounts (ranging from 19% off down to 5% off). As each tier is filled, the mint naturally progresses to the next price level until the supply is minted or the time window closes."
  },
  {
    question: "How are tokens distributed after the mint?",
    answer: "When the mint closes, the finalized supply is minted and distributed as follows: 70% to the community and 30% to the ecosystem (team, partners, and liquidity)."
  },
  {
    question: "What are the vesting terms for team and partners?",
    answer: "Team tokens vest over 14 months, with a 4-month cliff releasing 25%, followed by linear vesting thereafter."
  }
];

const FAQ = () => {
  return (
    <WhitepaperLayout
      eyebrow="Questions?"
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

        <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 mt-8">
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