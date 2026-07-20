import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`relative py-28 md:py-40 px-6 ${className}`}>
    <div className="max-w-4xl mx-auto">{children}</div>
  </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6">
    {children}
  </span>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-5xl font-light text-white leading-[1.15] tracking-tight mb-8">
    {children}
  </h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl">
    {children}
  </p>
);

export const HomeThesis = () => {
  return (
    <div className="bg-black text-white">
      {/* 2 — THE SHIFT */}
      <Section>
        <motion.div {...fade}>
          <H2>The agent economy isn't coming. It's here.</H2>
          <Body>
            Agents read your documents, call your tools, spend real money, and speak
            for you to the outside world. Each one is a new decision-maker you never
            interviewed.
          </Body>
        </motion.div>
      </Section>

      {/* 3 — THE UNSEEN RISK */}
      <Section>
        <motion.div {...fade}>
          <H2>How do you trust what you cannot see?</H2>
          <Body>
            Until now, watching an agent meant surveilling it: piping your most
            sensitive prompts and data into someone else's cloud. For anyone who
            guards what is theirs, that was never a choice. So most agents run
            unwatched, and trusted blindly, until the day one of them shouldn't have
            been.
          </Body>
        </motion.div>
      </Section>

      {/* 4 — THE ANSWER */}
      <Section className="border-t border-white/5">
        <motion.div {...fade}>
          <Eyebrow>Introducing TARI</Eyebrow>
          <H2>A credit bureau for the age of AI agents.</H2>
          <Body>
            TARI is an independent Trust &amp; Risk Index. It observes how an agent
            actually behaves: the moves it makes, the boundaries it keeps, the moment
            it begins to drift, and turns that into a single, honest measure of trust.
            As a credit score became the language of financial trust, TARI is becoming
            the language of agent trust.
          </Body>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-20 pt-16 border-t border-white/5">
            {[
              {
                word: "SEE",
                line: "Watch what your agents do, in plain language, as they do it.",
              },
              {
                word: "TRUST",
                line: "One clear score, earned from behavior, never inflated.",
              },
              {
                word: "GOVERN",
                line: "Hold the risky ones. Release the proven ones. On your terms.",
              },
            ].map((c) => (
              <div key={c.word}>
                <div className="text-sm tracking-[0.4em] text-white font-light mb-4">
                  {c.word}
                </div>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  {c.line}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* 5 — THE SOVEREIGN LINE */}
      <Section className="border-t border-white/5">
        <motion.div {...fade}>
          <H2>It never reads a word you'd want kept private.</H2>
          <Body>
            TARI watches behavior, not content. It sees that an agent acted, never
            what it said, wrote, or accessed. Your data, your secrets, your
            sovereignty never leave your walls. Trust you can verify, without
            exposure you cannot afford.
          </Body>
        </motion.div>
      </Section>

      {/* 6 — PROOF */}
      <Section>
        <motion.div {...fade}>
          <H2>This is not theoretical.</H2>
          <Body>
            We gave a live AI agent a poisoned instruction, hidden where it wouldn't
            look twice. On its own, it took the bait: reached for a secret, disguised
            it, and moved to send it away. TARI caught the entire chain as it
            happened, and pointed to where the manipulation came from. It never saw
            the secret. It didn't need to.
          </Body>
          <div className="mt-12 text-[11px] tracking-[0.3em] uppercase text-white/35 font-medium">
            1,746 agent runs scored · frontier models measured · content-off, always
          </div>
        </motion.div>
      </Section>

      {/* 7 — THE VISION */}
      <Section className="border-t border-white/5">
        <motion.div {...fade}>
          <H2>Trust is the infrastructure the agent economy is missing.</H2>
          <Body>
            Every era of autonomy needed a new layer of trust before capital would
            flow into it. Credit bureaus unlocked lending. Ratings unlocked markets.
            As trillions of decisions move to autonomous agents, someone independent
            must certify which of them can be trusted. AMAI Labs is building that
            layer: neutral, verifiable, and built to outlast any single model.
          </Body>
        </motion.div>
      </Section>

      {/* 8 — TWO DOORS */}
      <section className="relative py-28 md:py-40 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* For institutions */}
          <motion.div {...fade}>
            <Eyebrow>For institutions</Eyebrow>
            <h3 className="text-2xl md:text-3xl font-light text-white leading-tight tracking-tight mb-8">
              Deploy agents you can prove you can trust.
            </h3>
            <a
              href="mailto:access@amai.net?subject=Request%20access"
              className="inline-block text-sm text-white/80 hover:text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded transition-all duration-300 uppercase tracking-[0.15em]"
            >
              Request access
            </a>
          </motion.div>

          {/* For builders */}
          <motion.div {...fade}>
            <Eyebrow>For builders</Eyebrow>
            <h3 className="text-2xl md:text-3xl font-light text-white leading-tight tracking-tight mb-8">
              See what your own agent is really doing, in 60 seconds.
            </h3>
            <div className="bg-black border border-white/10 rounded-md p-5 font-mono text-sm text-white/80 mb-4">
              <span className="text-white/30 select-none">$ </span>
              pip install amai-tari
            </div>
            <p className="text-xs text-white/40 font-light mb-6">
              Three lines of Python. Nothing leaves your machine.
            </p>
            <Link
              to="/system-overview"
              className="inline-block text-sm text-white/80 hover:text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded transition-all duration-300 uppercase tracking-[0.15em]"
            >
              Read the docs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 9 — brand line above site footer */}
      <section className="border-t border-white/5 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="text-sm tracking-[0.3em] uppercase text-white/60 font-light">
            AMAI Labs — Infrastructure &amp; Research
          </div>
          <p className="text-sm text-white/40 font-light">
            We measure agent trust. We don't manufacture it.
          </p>
          <p className="text-[11px] text-white/25 font-light pt-4">
            © 2026 AMAI Labs, Inc. TARI — the Trust &amp; Risk Index.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeThesis;
