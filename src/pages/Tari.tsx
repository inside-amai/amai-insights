import { motion } from "framer-motion";
import { TariGauge } from "@/components/TariGauge";

const SectionLabel = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className="flex items-center gap-3 mb-6 md:mb-8">
    <span className={`h-px w-10 ${light ? "bg-black/30" : "bg-white/30"}`} />
    <span className={`text-[11px] tracking-[0.35em] font-light uppercase ${light ? "text-black/70" : "text-white/50"}`}>
      {children}
    </span>
  </div>
);

const Headline = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-normal leading-[1.05] ${light ? "text-black" : "text-white"}`}>
    {children}
  </h2>
);

const ArrowLink = ({ href, children, external = false, light = false }: { href: string; children: React.ReactNode; external?: boolean; light?: boolean }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className={`inline-flex items-center gap-2 text-sm font-light transition-colors duration-300 border-b pb-1 ${light ? "text-black/60 hover:text-black border-black/20 hover:border-black/60" : "text-white/60 hover:text-white border-white/20 hover:border-white/60"}`}
  >
    {children}<span aria-hidden>→</span>
  </a>
);

const scoreInputs = [
  ["Acted inside its policy.", "every action within the wallet's allowed list."],
  ["Collected on schedule.", "every cycle inside its window."],
  ["Delivered the stock.", "payouts that landed, by receipt."],
  ["Raised its holds.", "the actions it stopped itself from taking."],
  ["Days running.", "time on the record without incident."],
  ["Nothing self reported.", "all of it comes from the Lens and the chain."],
];

const bands = [
  ["800 to 850", "No adverse signal. Still no pass."],
  ["650 to 799", "Indeterminate. No action from the score alone."],
  ["550 to 649", "Compromise patterned. Review."],
  ["300 to 549", "Anomalous. Review."],
];

const measures = [
  ["Track record engine, out of time Gini", "0.630", "Ethereum lending data, 21,518 wallets, July 2026 snapshot. A ranking of default risk, never a calibrated probability."],
  ["Wallets scored", "155,634", "Ratified July 2026 snapshot, served through the Bureau and the API. Thin files served UNRATED."],
  ["Conduct engine, AUC", "0.835", "gpt-4o agents on the AgentDojo benchmark, 726 runs. A proxy for real incidents, stated as such."],
  ["Conduct engine, AUC, two models", "0.797", "gpt-4o and gpt-4o-mini, 1,452 runs."],
];

const tiers = [
  ["Tier 1", "Below 650, or a new record", "Collect, convert, pay. Rebalance its own range."],
  ["Tier 2", "650 to 799, a clean record", "Lend idle capital to allowlisted venues, capped. Sit out corporate actions and weekends."],
  ["Tier 3", "800 and above, a sustained record", "Leverage against the position, capped by score. Multi stock baskets. Sponsor other agents."],
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const Tari = () => (
  <main className="bg-black">
    <section className="relative min-h-screen flex items-center bg-perspective-grid pt-24 md:pt-32 py-24 md:py-40 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,hsl(var(--cyan-accent)/0.1),transparent_55%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div className="lg:col-span-6" {...reveal}>
          <SectionLabel>TARI</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-normal text-white leading-[1.02]">
            One score.<br />Two sources.
          </h1>
          <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-xl">
            Humans have FICO. Businesses have D&amp;B. Agents have TARI. This page is how the number is built.
          </p>
        </motion.div>
        <motion.div className="lg:col-span-6" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <TariGauge score={812} label="TARI SCORE" />
        </motion.div>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...reveal}><SectionLabel>THE TWO HALVES</SectionLabel></motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            ["Track record", "What a wallet did with money on chain. Borrowed, repaid, held exposure, got liquidated. Scored the way a lender scores a borrower, and backtested on real lending outcomes before a single number was published."],
            ["Conduct", "What an agent does when it acts. Which tools it called, in what order, with what timing, and where the data went. Captured by the Lens without ever reading the content. Scored on five dimensions."],
          ].map(([title, body], index) => (
            <motion.article key={title} className="border border-white/10 bg-white/[0.03] rounded-lg p-7 md:p-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: index * 0.1 }}>
              <h2 className="text-2xl md:text-3xl font-light tracking-normal text-white">{title}</h2>
              <p className="mt-6 text-base md:text-lg font-light text-white/65 leading-relaxed">{body}</p>
            </motion.article>
          ))}
        </div>
        <motion.p className="mt-10 md:mt-12 text-base md:text-lg font-light text-white/50 leading-relaxed max-w-4xl" {...reveal}>
          An operator carries both halves. The record it builds on the chain is its track record. The Lens watching it work is its conduct.
        </motion.p>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div className="lg:col-span-5" {...reveal}><SectionLabel>WHAT FEEDS AN OPERATOR&apos;S SCORE</SectionLabel></motion.div>
        <div className="lg:col-span-7 border-t border-white/10">
          {scoreInputs.map(([lead, body], index) => (
            <motion.p key={lead} className="py-5 md:py-6 border-b border-white/10 text-base md:text-lg leading-relaxed" initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: index * 0.06 }}>
              <strong className="font-medium text-white">{lead}</strong> <span className="font-light text-white/60">{body}</span>
            </motion.p>
          ))}
        </div>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div className="lg:col-span-6" {...reveal}>
          <SectionLabel>THE BANDS</SectionLabel>
          <Headline>The score triages. It never gates on its own.</Headline>
        </motion.div>
        <div className="lg:col-span-6">
          <div className="border-t border-white/10">
            {bands.map(([range, meaning], index) => (
              <motion.div key={range} className="grid grid-cols-[8.5rem_1fr] md:grid-cols-[10rem_1fr] gap-5 py-5 md:py-6 border-b border-white/10 items-baseline" initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: index * 0.07 }}>
                <span className="font-mono text-sm md:text-base text-cyan-accent">{range}</span>
                <span className="text-base md:text-lg font-light text-white/65 leading-relaxed">{meaning}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-base md:text-lg font-light text-white/50 leading-relaxed">
            A score with low confidence is served as UNRATED, never as a number. Whether a single action proceeds is decided by the operator&apos;s rules, never by the score. The score decides the tier, and the tier decides which powers an operator is granted at all.
          </p>
        </div>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...reveal}>
          <SectionLabel>THE NUMBERS, WITH THEIR SCOPE</SectionLabel>
          <Headline>Every figure carries its scope and its date.</Headline>
        </motion.div>
        <div className="mt-12 md:mt-16 overflow-x-auto border border-white/10 rounded-lg bg-white/[0.02]">
          <table className="w-full min-w-[760px] text-left">
            <thead><tr className="border-b border-white/10">
              {['Measure', 'Value', 'Scope'].map((heading) => <th key={heading} className="px-5 md:px-7 py-4 text-[10px] tracking-[0.25em] font-light text-white/40 uppercase">{heading}</th>)}
            </tr></thead>
            <tbody>{measures.map(([measure, value, scope], index) => (
              <tr key={measure} className={index < measures.length - 1 ? "border-b border-white/10" : ""}>
                <td className="px-5 md:px-7 py-5 text-sm md:text-base font-normal text-white/85 align-top w-[28%]">{measure}</td>
                <td className="px-5 md:px-7 py-5 font-mono text-sm md:text-base text-cyan-accent align-top w-[12%]">{value}</td>
                <td className="px-5 md:px-7 py-5 text-sm md:text-base font-light text-white/60 leading-relaxed align-top">{scope}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p className="mt-8 text-base md:text-lg font-light text-white/50 leading-relaxed max-w-5xl">
          The Ethereum figure and the pooled multi chain figures are different populations and are never quoted together. The method is published. The receipts are checkable offline.
        </p>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...reveal}>
          <SectionLabel>THE TIERS</SectionLabel>
          <Headline>The credit score is the leverage limit.</Headline>
        </motion.div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map(([tier, range, powers], index) => (
            <motion.article key={tier} className="rounded-lg border border-white/10 bg-white/[0.03] p-7 md:p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: index * 0.1 }}>
              <h3 className="text-2xl md:text-3xl font-light text-white">{tier}</h3>
              <p className="mt-3 text-sm md:text-base font-mono text-cyan-accent/80">{range}</p>
              <p className="mt-6 text-base md:text-lg font-light text-white/65 leading-relaxed">{powers}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-10 text-base md:text-lg font-light text-white/50 leading-relaxed">
          Absence of a record is never punished. A new agent is trusted with less until it has one.
        </p>
      </div>
    </section>

    <section className="relative bg-gray-50 py-24 md:py-36 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[linear-gradient(hsl(var(--trust-blue))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--trust-blue))_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div className="lg:col-span-6" {...reveal}>
          <SectionLabel light>RUN IT</SectionLabel>
          <Headline light>Watch your own agent, in one minute.</Headline>
        </motion.div>
        <motion.div className="lg:col-span-6" {...reveal}>
          <pre className="rounded-lg bg-gray-900 border border-gray-700 p-6 md:p-8 font-mono text-sm md:text-base leading-loose text-gray-100 overflow-x-auto"><code>{`pip install amai-tari\ntari demo\ntari dashboard`}</code></pre>
          <p className="mt-8 text-base md:text-lg font-light text-black/70 leading-relaxed">
            The same Lens that watches every operator runs on your own agent, locally, content off. It reads tool names, order and timing. Never your prompts, never your data, and nothing leaves your machine.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 md:gap-10">
            <ArrowLink href="/methodology" light>Read the methodology</ArrowLink>
            <ArrowLink href="/docs" light>Read the docs</ArrowLink>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div className="lg:col-span-5" {...reveal}><SectionLabel>SAID PLAINLY</SectionLabel></motion.div>
        <motion.div className="lg:col-span-7 space-y-7" {...reveal}>
          <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">AMAI scores its own operators. The answer is a public methodology, a verifiable log, identical rules for every operator, and tier rules set by governance.</p>
          <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">The track record model is trained on Ethereum lending data and is validated there. It is applied to Robinhood Chain only once it is validated there.</p>
          <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">The conduct benchmark is one benchmark and one class of misbehaviour. The score is a risk proxy with a confidence band, and the caveat travels with every number.</p>
        </motion.div>
      </div>
    </section>

    <section className="relative bg-perspective-grid min-h-[75vh] flex items-center justify-center py-32 md:py-48 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--cyan-accent)/0.12),transparent_60%)] pointer-events-none" />
      <motion.div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-normal text-white leading-[1.08]">Check it before you trust it.</h2>
        <div className="mt-12 md:mt-16"><ArrowLink href="https://bureau.amai.net" external>See it on the Bureau</ArrowLink></div>
      </motion.div>
    </section>
  </main>
);

export default Tari;
