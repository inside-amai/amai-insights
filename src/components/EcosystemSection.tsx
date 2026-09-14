import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const linkClasses =
  "inline-flex items-center gap-1.5 text-sm font-light text-[#B4F6AD]/80 transition-colors duration-200 hover:text-[#B4F6AD] focus:outline-none focus-visible:text-[#B4F6AD] focus-visible:ring-1 focus-visible:ring-[#B4F6AD]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black";

const externalLinkClasses =
  "inline-flex items-center gap-1.5 text-sm font-light text-[#B4F6AD]/80 transition-colors duration-200 hover:text-[#B4F6AD] focus:outline-none focus-visible:text-[#B4F6AD] focus-visible:ring-1 focus-visible:ring-[#B4F6AD]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black";

const faqs = [
  {
    question: "What are AMAI Operators?",
    answer: (
      <>
        Operators are agents assigned to manage a pool's trading-fee income. They collect fees, convert them into selected Stock Tokens, and distribute the holders' share. Each operator has a defined job and wallet permissions that limit what it can do.{" "}
        <Link to="/operators" className={linkClasses}>
          Explore Operators <span aria-hidden="true">→</span>
        </Link>
      </>
    ),
  },
  {
    question: "What is TARI?",
    answer: (
      <>
        TARI is AMAI's Trust & Risk Index. It has two separate scoring engines: one assesses observed AI-agent behavior, and the other assesses onchain wallet credit history. Scores include confidence information. They help you assess risk, but do not guarantee safety.{" "}
        <Link to="/tari" className={linkClasses}>
          Explore TARI <span aria-hidden="true">→</span>
        </Link>{" "}
        <Link to="/methodology" className={linkClasses}>
          Read the methodology <span aria-hidden="true">→</span>
        </Link>
      </>
    ),
  },
  {
    question: "What is the Launchpad?",
    answer: (
      <>
        The Launchpad brings token creation, a liquidity pool, and an attached operator into one flow. It is designed for projects that want an operator to manage their pool's fee income and distribute a share to their token holders.{" "}
        <Link to="/launchpad" className={linkClasses}>
          Explore Launchpad <span aria-hidden="true">→</span>
        </Link>
      </>
    ),
  },
  {
    question: "What is Lens?",
    answer: (
      <>
        Lens makes an agent's activity inspectable through recorded tool calls, findings, and history. Its content-off approach focuses on tool-use metadata rather than the contents of prompts or documents. Where configured, Interceptor can hold a tool call for human approval before it executes.
      </>
    ),
  },
  {
    question: "What is the Bureau?",
    answer: (
      <>
        The Bureau is AMAI's public interface for onchain credit scores. Explore supported wallet records, their scores, and the evidence behind them. It gives the credit research a place where people can inspect individual results.{" "}
        <a href="https://bureau.amai.net/" target="_blank" rel="noopener noreferrer" className={externalLinkClasses}>
          Open the Bureau <span aria-hidden="true">↗</span>
        </a>
      </>
    ),
  },
  {
    question: "Which token makes me eligible for distributions?",
    answer: (
      <>
        Eligibility is tied to the token specified for each participating pool and your balance at its distribution snapshot. For the $AMAI pool, that token is $AMAI. For another project's pool, it is that project's token. Each pool's distribution rules determine the eligible holders and their shares.
      </>
    ),
  },
  {
    question: "Where do the distributions come from?",
    answer: (
      <>
        Distributions are funded by trading fees earned by the pool's liquidity position. The operator converts collected fees into the selected Stock Tokens and allocates the holders' share under the pool's rules. Amounts depend on trading activity, costs, and those rules. There is no fixed payout.
      </>
    ),
  },
  {
    question: "What are Stock Tokens?",
    answer: (
      <>
        Robinhood Stock Tokens are tokenized debt securities that provide economic exposure to underlying stocks or ETFs. They do not confer ownership of the underlying shares. Availability and eligibility depend on the issuer's terms and jurisdiction.{" "}
        <a href="https://docs.robinhood.com/chain/stock-tokens/" target="_blank" rel="noopener noreferrer" className={externalLinkClasses}>
          About Stock Tokens <span aria-hidden="true">↗</span>
        </a>
      </>
    ),
  },
  {
    question: "Can an operator withdraw the pool's principal?",
    answer: (
      <>
        The operator's role excludes withdrawing pool principal and changing its own permissions. These restrictions apply to the operator role. They do not eliminate market risk or every risk involving collected fees.
      </>
    ),
  },
  {
    question: "What can I use today?",
    answer: (
      <>
        You can explore the{" "}
        <a href="https://bureau.amai.net/" target="_blank" rel="noopener noreferrer" className={externalLinkClasses}>
          Bureau <span aria-hidden="true">↗</span>
        </a>
        , read the published{" "}
        <Link to="/methodology" className={linkClasses}>
          methodology <span aria-hidden="true">→</span>
        </Link>{" "}
        and benchmark results, and use the TARI SDK for local agent observation on{" "}
        <a href="https://pypi.org/project/amai-tari/" target="_blank" rel="noopener noreferrer" className={externalLinkClasses}>
          PyPI <span aria-hidden="true">↗</span>
        </a>
        . The integrated operator and launchpad experience is still being built and tested. The demonstrated pool payout cycle ran on a local fork of Robinhood Chain.
      </>
    ),
  },
];

export const EcosystemSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = () => setReducedMotion(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(index);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % faqs.length;
      itemRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + faqs.length) % faqs.length;
      itemRefs.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      itemRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      itemRefs.current[faqs.length - 1]?.focus();
    }
  };

  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="relative overflow-hidden bg-black bg-perspective-grid px-4 py-24 md:px-8 md:py-40"
    >
      <div className="relative mx-auto max-w-[920px]">
        {/* Masthead */}
        <header className="text-center pb-14 md:pb-20 border-b border-white/[0.08]">
          <span className="text-[11px] font-light uppercase tracking-[0.35em] text-white/45">
            The Ecosystem
          </span>
          <h2
            id="ecosystem-heading"
            className="mt-5 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05]"
          >
            AMAI Labs.
          </h2>
          <p className="mt-3 text-sm md:text-base font-light uppercase tracking-[0.3em] text-white/50">
            Infrastructure &amp; Research
          </p>
        </header>

        {/* Accordion */}
        <div className="mt-8 md:mt-12" role="region" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group border-b border-white/[0.07] transition-colors duration-300 hover:bg-white/[0.015]"
              >
                <button
                  ref={(el) => { itemRefs.current[index] = el; }}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full text-left focus:outline-none focus-visible:bg-white/[0.03] focus-visible:ring-1 focus-visible:ring-[#B4F6AD]/50 focus-visible:ring-inset"
                >
                  <div className="flex items-center justify-between gap-6 py-6 md:py-7">
                    <span
                      id={`faq-question-${index}`}
                      className={`text-[17px] md:text-[20px] leading-snug tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-white/90" : "text-white/30 group-hover:text-white/60"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={1.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={1.5} />
                      )}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                      exit={reducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      transition={
                        reducedMotion
                          ? { duration: 0 }
                          : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                      }
                    >
                      <div className="pb-7 md:pb-8 max-w-[70ch]">
                        <p className="text-[15px] md:text-[16px] font-light leading-relaxed text-white/55">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
