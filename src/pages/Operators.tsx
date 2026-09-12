import { motion } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-8">
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

const Operators = () => {
  const ledgerRows = [
    { first: "Collected 3.02 ETH → 0.90 NVDA · paid to 2,141 holders", second: "receipt 0x18f6…6c5b", color: "bg-[#7dd3d8]", text: "text-[#a6e3e6]" },
    { first: "Market close · collection paused until the open", second: "receipt 0x9b2e…f104", color: "bg-[#7dd3d8]", text: "text-[#a6e3e6]" },
    { first: "Collection skipped · NVDA corporate action detected", second: "resumed next window · receipt 0xc4a1…9e02", color: "bg-white/40", text: "text-white/60" },
    { first: "HELD · payout to a new address · waiting for a human · nothing sent", second: "receipt 0x5d77…31af", color: "bg-[#e8b25a]", text: "text-[#f0c98a]" },
  ];

  const whatItDoes = [
    { title: "Collects", body: "The swap fees your pool has already earned." },
    { title: "Converts", body: "Into the stock your holders chose. Nvidia by default." },
    { title: "Pays", body: "Every holder, by snapshot. Nothing to stake, nothing to claim." },
    { title: "Knows the calendar", body: "It sits out the market close and every corporate action." },
    { title: "Keeps the record", body: "Every move signed, public, verifiable by anyone." },
    { title: "Carries a score", body: "A TARI™ score anyone can check before they trust it." },
  ];

  const steps = [
    { num: "1", body: "Point your pool's fee recipient at the operator's Safe, one transaction on your side." },
    { num: "2", body: "Fees arrive. The operator collects, converts, and pays your holders in the stock you chose." },
    { num: "3", body: "Change your mind at any time. Set the recipient back. Nothing to ask us, nothing to sign with us." },
  ];

  return (
    <div className="bg-black">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center bg-perspective-grid pt-24 md:pt-32 py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <SectionLabel>THE OPERATOR</SectionLabel>
            <Headline>One agent. One job.</Headline>
            <Body className="mt-10 md:mt-12 max-w-2xl">
              It runs your pool's fees for the people who hold your token.
            </Body>
            <div className="mt-10 md:mt-12">
              <ArrowLink href="https://bureau.amai.net" external>
                See one working
              </ArrowLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: WHAT IT DOES */}
      <section className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>WHAT IT DOES</SectionLabel>
          </motion.div>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {whatItDoes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-base md:text-lg font-light text-white/60 leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: WHAT IT CANNOT TOUCH */}
      <section className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>WHAT IT CANNOT TOUCH</SectionLabel>
            <Headline>The principal. Ever.</Headline>
            <div className="mt-10 md:mt-12 space-y-6 max-w-2xl">
              <Body>
                The operator holds a role, never the keys. Its wallet policy lives on the chain, in a Safe, and it allows a short list of actions: collect the fees, convert them, pay the holders. Withdrawing the position, moving it, or sending funds to an outside address is refused by the chain itself.
              </Body>
              <Body>
                Every one of those refusals has been proved by attempting it and watching it fail.
              </Body>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: WHY THE RECORD EXISTS */}
      <section className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>WHY THE RECORD EXISTS</SectionLabel>
            <Headline>This agent handles money.</Headline>
            <Body className="mt-10 md:mt-12 max-w-2xl">
              Agent tokens in the last cycle died for claiming autonomy they did not have. This one never claims more than the log shows. Every collection, every conversion, every payout, and every action it was stopped from taking is on the record, with a receipt.
            </Body>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:pt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase font-mono">
                THE OPERATOR'S LOG
              </span>
            </div>
            <div className="relative pl-8 md:pl-10">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#7dd3d8]/50 via-[#5ec9a8]/40 via-[#e8b25a]/40 to-[#e15a3b]/50" />
              {ledgerRows.map((row, i) => (
                <motion.div
                  key={row.first}
                  className="relative py-6 md:py-7 first:pt-0"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="absolute -left-[34px] md:-left-[42px] top-8 md:top-9 flex items-center justify-center">
                    <span className={`absolute w-3.5 h-3.5 rounded-full ${row.color} opacity-20 blur-[3px]`} />
                    <span className={`relative w-1.5 h-1.5 rounded-full ${row.color}`} />
                  </span>
                  <div className={`text-lg md:text-xl font-normal tracking-tight ${row.text} keep-ltr`} dir="ltr">
                    {row.first}
                  </div>
                  <div className="mt-2 text-sm md:text-base font-light text-white/60 leading-relaxed max-w-md keep-ltr" dir="ltr">
                    {row.second}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: ALREADY HAVE A TOKEN? */}
      <section className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>ALREADY HAVE A TOKEN?</SectionLabel>
            <Headline>
              Hire an operator.<br />No relaunch.<br />No capital.
            </Headline>
          </motion.div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-6xl">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/10 pt-8"
              >
                <span className="block text-4xl md:text-5xl font-light text-white/30 leading-none mb-5">
                  {step.num}
                </span>
                <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20 md:mt-28 pt-12 border-t border-white/10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
              Yours to hire.
              <br />
              <span className="text-white/50">Yours to fire.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: THE SCORE */}
      <section className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>THE SCORE</SectionLabel>
            <Headline>Every operator carries a TARI™ score.</Headline>
            <Body className="mt-10 md:mt-12 max-w-2xl">
              Built from what it did: acted inside its policy, collected on schedule, delivered the stock, raised its holds. Nothing self reported. The score sets the tier, and the tier sets what the operator may do with money.
            </Body>
            <div className="mt-10 md:mt-12">
              <ArrowLink href="/methodology">How the score is built</ArrowLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Closer */}
      <section className="relative bg-perspective-grid min-h-[80vh] md:min-h-[85vh] flex flex-col items-center justify-center py-32 md:py-48 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--cyan-accent)/0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={amaiLogo}
            alt="AMAI Labs"
            className="h-20 md:h-32 w-auto mx-auto mb-12 md:mb-16 brightness-110 drop-shadow-[0_0_40px_rgba(166,252,252,0.25)]"
          />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
            Agents work.
            <br />
            <span className="text-white/50">You get paid.</span>
          </h2>
          <span className="mt-16 md:mt-20 text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-white/40 font-light">
            AMAI LABS · INFRASTRUCTURE & RESEARCH
          </span>
          <div className="mt-5 flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-white/40 font-light">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">FOLLOW ON X</a>
            <span>·</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">JOIN THE TELEGRAM</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Operators;
