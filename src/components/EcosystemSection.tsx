import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pickLanding } from "@/i18n/landingContent";

const linkClasses =
  "inline-flex items-center gap-1.5 text-sm font-light text-[#157854]/80 transition-colors duration-200 hover:text-[#157854] focus:outline-none focus-visible:text-[#157854] focus-visible:ring-1 focus-visible:ring-[#157854]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-white";

const externalLinkClasses = linkClasses;

export const EcosystemSection = () => {
  const { language } = useLanguage();
  const copy = pickLanding(language).faq;
  const faqs = copy.items;
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
      className="relative overflow-hidden bg-[#F8F8F5] px-4 py-24 md:px-8 md:py-40"
    >
      <div className="relative mx-auto max-w-[920px]">
        {/* Masthead */}
        <header className="text-center pb-14 md:pb-20 border-b border-black/[0.08]">
          <span className="text-[11px] font-light uppercase tracking-[0.35em] text-black/45">
            {copy.eyebrow}
          </span>
          <h2
            id="ecosystem-heading"
            className="mt-5 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-black leading-[1.05]"
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-sm md:text-base font-light uppercase tracking-[0.3em] text-black/50">
            {copy.tag}
          </p>
        </header>

        {/* Accordion */}
        <div className="mt-8 md:mt-12" role="region" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group border-b border-black/[0.07] transition-colors duration-300 hover:bg-black/[0.02]"
              >
                <button
                  ref={(el) => { itemRefs.current[index] = el; }}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full text-left focus:outline-none focus-visible:bg-black/[0.03] focus-visible:ring-1 focus-visible:ring-[#157854]/50 focus-visible:ring-inset"
                >
                  <div className="flex items-center justify-between gap-6 py-6 md:py-7">
                    <span
                      id={`faq-question-${index}`}
                      className={`text-[17px] md:text-[20px] leading-snug tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-black" : "text-black/70 group-hover:text-black"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-black/80" : "text-black/30 group-hover:text-black/60"
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
                        <p className="text-[15px] md:text-[16px] font-light leading-relaxed text-black/60">
                          {faq.a}
                        </p>
                        {faq.links && faq.links.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                            {faq.links.map((link) =>
                              link.href ? (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={externalLinkClasses}
                                >
                                  {link.label}
                                  <span aria-hidden="true">{link.arrow}</span>
                                </a>
                              ) : (
                                <Link key={link.label} to={link.to!} className={linkClasses}>
                                  {link.label}
                                  <span aria-hidden="true">{link.arrow}</span>
                                </Link>
                              )
                            )}
                          </div>
                        )}
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
