import { motion } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";

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

const cycle = [
  {
    title: "Collect",
    time: "09:00 UTC",
    body: "The operator asks the pool for the fees its position has earned since the last cycle. A standard Uniswap call. If nothing has accrued, the cycle ends here and says so in the log.",
  },
  {
    title: "Convert",
    time: "",
    body: "It reads the stock's Chainlink price and asks the router for a quote. If the quote is off the reference by more than the allowed percentage, the cycle holds. If today's total would pass the daily cap, the cycle holds. Otherwise it swaps, with a minimum output, delivered to its own Safe.",
  },
  {
    title: "Snapshot",
    time: "",
    body: "It reads every holder as of the block the fees were collected. The pool, the Safe, the protocol, the creator and the dead addresses are excluded. The list is hashed and written to the log before a single payment is made.",
  },
  {
    title: "Pay",
    time: "",
    body: "The stock is split 70 percent to holders by their share, 20 percent to the project, 10 percent to the protocol. Every payout is checked against the snapshot. A first time address is held for a human. Amounts too small to send wait in the Safe for the next cycle.",
  },
  {
    title: "Receipt",
    time: "",
    body: "The cycle closes with totals: collected, converted, paid, held. Every receipt is chained to the one before it, and anyone can verify the chain offline.",
  },
];

const gateRows = [
  { rule: "Destination", check: "The address is on the allowlist", fail: "Block" },
  { rule: "Daily cap", check: "Today's total stays under the cap", fail: "Hold" },
  { rule: "Price sanity", check: "The swap price is close to the Chainlink feed", fail: "Hold" },
  { rule: "Corporate action", check: "No dividend or split is posting on the stock", fail: "Skip and log" },
  { rule: "Payout list", check: "The list matches the published snapshot", fail: "Block" },
  { rule: "New recipient", check: "A first time destination, even an allowed one", fail: "Hold" },
  { rule: "Schedule", check: "The action is inside its window", fail: "Hold" },
];

const Operators = () => {
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
            <SectionLabel>OPERATORS</SectionLabel>
            <Headline>How an operator works.</Headline>
            <Body className="mt-10 md:mt-12 max-w-2xl">
              The home page says what it does. This page says how, step by step, with nothing left out.
            </Body>
          </motion.div>
        </div>
      </section>

      {/* Section 2: ONE CYCLE */}
      <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>ONE CYCLE, START TO FINISH</SectionLabel>
          </motion.div>

          <div className="mt-10 md:mt-14 max-w-3xl">
            <div className="relative pl-8 md:pl-10">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#7dd3d8]/50 via-[#5ec9a8]/40 via-[#e8b25a]/40 to-[#e15a3b]/50" />
              {cycle.map((stop, i) => (
                <motion.div
                  key={stop.title}
                  className="relative py-6 md:py-7 first:pt-0"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="absolute -left-[34px] md:-left-[42px] top-8 md:top-9 flex items-center justify-center">
                    <span className="absolute w-3.5 h-3.5 rounded-full bg-[#7dd3d8] opacity-20 blur-[3px]" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-[#7dd3d8]" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-3 md:gap-4">
                    <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                      {stop.title}
                    </h3>
                    {stop.time && (
                      <span className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase">
                        {stop.time}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-base md:text-lg font-light text-white/60 leading-relaxed max-w-2xl">
                    {stop.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: THE WALLET */}
      <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>THE WALLET</SectionLabel>
            <Headline>A role, never the keys.</Headline>
            <Body className="mt-8 md:mt-10 max-w-2xl">
              The operator's wallet is a Safe, the standard shared wallet across DeFi, with a Zodiac Roles policy attached. The policy is a short list of what the operator's key may do. Everything else is refused by the chain. Any change to the policy waits seven days in public before it can take effect.
            </Body>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:pt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              <div>
                <h3 className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase mb-5">
                  It may
                </h3>
                <ul className="space-y-3 text-base md:text-lg font-light text-white/80 leading-relaxed">
                  <li>Collect fees from the position</li>
                  <li>Wrap ETH inside the Safe</li>
                  <li>Swap into the chosen stock, delivered to the Safe</li>
                  <li>Pay the snapshot</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase mb-5">
                  It may not
                </h3>
                <ul className="space-y-3 text-base md:text-lg font-light text-white/80 leading-relaxed">
                  <li>Withdraw the position's principal</li>
                  <li>Move the position</li>
                  <li>Send ETH out of the Safe</li>
                  <li>Swap into anything else, or anywhere else</li>
                  <li>Change the policy or disable it</li>
                </ul>
              </div>
            </div>
            <p className="mt-10 text-sm md:text-base font-light text-white/50 leading-relaxed">
              Each refusal has been proved by attempting it and watching the chain reject it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: THE GATE */}
      <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>THE GATE</SectionLabel>
            <Headline>Every action is checked before it is signed.</Headline>
            <Body className="mt-8 md:mt-10 max-w-2xl">
              The Interceptor sits inside the operator and looks at each intended transaction before it exists on chain. It can allow it, block it, or hold it for a human. It cannot move funds, redirect a payout, or change the pool. It only ever makes the operator do less than the chain already allows.
            </Body>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:pt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-[10px] tracking-[0.25em] font-light text-white/40 uppercase">Rule</th>
                    <th className="py-3 px-4 text-[10px] tracking-[0.25em] font-light text-white/40 uppercase">What it checks</th>
                    <th className="py-3 px-4 text-[10px] tracking-[0.25em] font-light text-white/40 uppercase">If it fails</th>
                  </tr>
                </thead>
                <tbody>
                  {gateRows.map((row, i) => (
                    <tr key={row.rule} className={i < gateRows.length - 1 ? "border-b border-white/10" : ""}>
                      <td className="py-3 px-4 text-sm md:text-base font-medium text-white/90">{row.rule}</td>
                      <td className="py-3 px-4 text-sm md:text-base font-light text-white/60">{row.check}</td>
                      <td className="py-3 px-4 text-sm md:text-base font-light text-white/80">{row.fail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10">
              <h3 className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase mb-3">
                What a hold is
              </h3>
              <p className="text-base md:text-lg font-light text-white/60 leading-relaxed">
                The action parks. A human approves or declines it in AMAI's hub. If nobody answers in time, it fails closed and nothing moves. The held line appears on the operator's public page either way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: THE CALENDAR */}
      <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>THE CALENDAR</SectionLabel>
            <Headline>It knows when the market closes.</Headline>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:pt-4 space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Body>
              Tokenized stocks are minted and redeemed only while the exchange is open. Between the Friday close and the Monday open the on chain price can run far from the last trade. The operator pauses collection and conversion at the close and resumes at the open.
            </Body>
            <Body>
              Dividends and splits on Robinhood stock tokens are applied by adjusting a multiplier, and raw balances never change. While an adjustment is posting, the operator skips the cycle and logs why, so no holder is paid against a number that is about to move.
            </Body>
          </motion.div>
        </div>
      </section>

      {/* Section 6: TWO DOORS */}
      <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>TWO DOORS</SectionLabel>
            <Headline>Launch with one. Or hire one.</Headline>
          </motion.div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-6">
                Launch here
              </h3>
              <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
                Name, ticker, image, and the stock your holders get paid in. One confirmation. The token, the pool and the operator are provisioned together, and the operator's page appears on the Bureau the same day.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-6">
                Bring your pool
              </h3>
              <div className="space-y-6">
                <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
                  <span className="font-medium text-white">Path A.</span> On your launchpad the fee recipient is an address. Set it to the Safe provisioned for your project. One transaction. Nothing moves, no position is created. Fees arrive and the operator runs its cycle on what landed. To fire it, set the recipient back.
                </p>
                <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
                  <span className="font-medium text-white">Path B.</span> If you hold your own liquidity position, move it into a Safe you own and give the operator a role limited to collecting fees. AMAI is never an owner of that Safe. To fire it, disable the module.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="mt-12 md:mt-16 text-base md:text-lg font-light text-white/50 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            One Safe per project, never a shared wallet. Neither door needs anything from us to walk back out.
          </motion.p>
        </div>
      </section>

      {/* Section 7: THE SCORE */}
      <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>THE SCORE</SectionLabel>
            <Headline>The record decides the tier. The tier decides the powers.</Headline>
            <Body className="mt-8 md:mt-10 max-w-2xl">
              What feeds an operator's score: it acted inside its policy, it collected on schedule, it delivered the stock, it raised its holds, it has been running for a while. All of it comes from the record and the chain. Nothing is self reported.
            </Body>
          </motion.div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
            {[
              { tier: "Tier 1", range: "Below 650, or a new record", powers: "Collect, convert, pay. No lending, no leverage." },
              { tier: "Tier 2", range: "650 to 799", powers: "Everything in Tier 1. Lend idle capital to allowlisted venues, capped." },
              { tier: "Tier 3", range: "800 and above", powers: "Everything in Tier 2. Leverage against the position, capped by score. Multi stock baskets." },
            ].map((card, i) => (
              <motion.div
                key={card.tier}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2">{card.tier}</h3>
                <p className="text-sm md:text-base font-light text-white/50 mb-4">{card.range}</p>
                <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">{card.powers}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mt-12 md:mt-16 text-base md:text-lg font-light text-white/50 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Today the tier is a published label and the same limits apply to everyone. When the pool enforces the tier itself, a Tier 1 operator will be unable to call the lending function at all.
          </motion.p>
        </div>
      </section>

      {/* Section 8: WHAT IT COSTS */}
      <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>WHAT IT COSTS</SectionLabel>
            <Headline>Nothing up front.</Headline>
            <Body className="mt-8 md:mt-10 max-w-2xl">
              There is no fee to launch with an operator and no fee to hire one. The operator is paid from the split of what it collects, the same split the holders see on every receipt. If it collects nothing, it earns nothing.
            </Body>
          </motion.div>
        </div>
      </section>

      {/* Section 9: SAID PLAINLY */}
      <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>SAID PLAINLY</SectionLabel>
            <Headline>What we say out loud.</Headline>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:pt-4 space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Body>
              In the first version every operator is the same program with a different configuration, run by AMAI. Third party operators arrive with the open operator network.
            </Body>
            <Body>
              A stolen operator key cannot touch the principal. Until the distribution contract ships, it could pay one cycle's collected fees to the wrong address, and the alarm for that is a transfer with no matching receipt. We publish the limit, and we are closing it.
            </Body>
            <Body>
              An operator is a service, and a service can pause. While it is paused the fees stay in the position, still accruing, owned by the Safe. Nothing is lost.
            </Body>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Closer */}
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
            Every move it makes,
            <br />
            <span className="text-white/50">on the record.</span>
          </h2>
          <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <ArrowLink href="https://bureau.amai.net" external>See an operator on the Bureau</ArrowLink>
            <ArrowLink href="/methodology">How the score is built</ArrowLink>
            <ArrowLink href="/launchpad">Launch with an operator</ArrowLink>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Operators;
