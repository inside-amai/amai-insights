import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-6 md:mb-8">
    <span className="h-px w-10 bg-white/30" />
    <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">
      {children}
    </span>
  </div>
);

const Headline = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
    {children}
  </h2>
);

const Body = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-lg md:text-xl font-light text-white/70 leading-relaxed ${className}`}>
    {children}
  </p>
);

const ArrowLink = ({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) => {
  const className = "inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/60 pb-1";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}<span aria-hidden>→</span>
      </a>
    );
  }
  return (
    <a href={href} className={className}>
      {children}<span aria-hidden>→</span>
    </a>
  );
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const cards = [
  {
    title: "A pool",
    body: "Your token and its pool exist together, on Uniswap v4, on Robinhood Chain.",
  },
  {
    title: "An operator",
    body: "It collects the fees, converts them to the stock you chose, and pays every holder. Its page is on the Bureau the same day.",
  },
  {
    title: "A record",
    body: "Every move the operator makes is receipted and public, held actions included.",
  },
];

const Launchpad = () => (
  <div className="bg-black">
    {/* Section 1: Hero */}
    <section className="relative min-h-screen flex items-center bg-perspective-grid pt-24 md:pt-32 py-24 md:py-40 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className="max-w-3xl"
          {...reveal}
        >
          <SectionLabel>THE LAUNCHPAD</SectionLabel>
          <Headline>Every token launched here comes with an operator.</Headline>
          <Body className="mt-10 md:mt-12 max-w-2xl">
            Name it. Pick the stock your holders get paid in. Launch. The operator is on the job from the first trade.
          </Body>
        </motion.div>
      </div>
    </section>

    {/* Section 2: What arrives */}
    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...reveal}>
          <SectionLabel>WHAT ARRIVES WITH THE TOKEN</SectionLabel>
        </motion.div>
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="border border-white/10 bg-white/[0.03] rounded-lg p-7 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-2xl md:text-3xl font-light tracking-normal text-white">{card.title}</h3>
              <p className="mt-5 text-base md:text-lg font-light text-white/65 leading-relaxed">{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* Section 3: Before it opens */}
    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div className="max-w-3xl" {...reveal}>
          <SectionLabel>BEFORE IT OPENS</SectionLabel>
          <Headline>Already have a token?</Headline>
          <Body className="mt-8 md:mt-10 max-w-2xl">
            You do not need to relaunch. Any existing token can hire an operator today: one transaction, no capital, revocable at any time.
          </Body>
          <div className="mt-10 md:mt-12">
            <ArrowLink href="/operators">How to hire one</ArrowLink>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 4: Closer */}
    <section className="relative bg-perspective-grid min-h-[70vh] md:min-h-[75vh] flex items-center justify-center py-32 md:py-48 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--cyan-accent)/0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-normal text-white leading-[1.08]">
          Launch with an operator.
          <br />
          <span className="text-white/50">Opening soon.</span>
        </h2>
        <div className="mt-12 md:mt-16">
          <ArrowLink href="https://x.com/InsideAMAI" external>Follow on X</ArrowLink>
        </div>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default Launchpad;
