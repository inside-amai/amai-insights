import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { TariGauge } from "@/components/TariGauge";
import { tariEditorial, type TariChapter } from "@/data/tariEditorial";

const Paragraph = ({ children }: { children: string }) => (
  <p className="text-base font-light leading-relaxed text-white/60 md:text-lg md:leading-relaxed">{children}</p>
);

const EvidenceTable = ({ table }: { table: NonNullable<TariChapter["table"]> }) => (
  <div className="my-9 overflow-x-auto rounded-sm border border-white/[0.1] bg-black">
    <table className="w-full min-w-[620px] text-left">
      <thead>
        <tr className="border-b border-white/[0.1]">
          {table.headers.map((header) => (
            <th key={header} className="px-5 py-4 text-[10px] font-light uppercase tracking-[0.2em] text-white/40 md:px-6">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, rowIndex) => (
          <tr key={row[0]} className={rowIndex < table.rows.length - 1 ? "border-b border-white/[0.08]" : undefined}>
            {row.map((cell, cellIndex) => (
              <td key={cell} className={`px-5 py-5 align-top text-sm leading-relaxed md:px-6 md:text-base ${cellIndex === 0 ? "font-normal text-white/90" : "font-light text-white/60"}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Tari = () => {
  const c = tariEditorial;

  return (
    <main className="min-h-screen overflow-x-clip bg-perspective-grid font-roboto text-white">
      <section className="relative flex min-h-[88svh] items-center px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-[72%] w-[78%] bg-[radial-gradient(ellipse_at_18%_24%,hsl(var(--cyan-accent)/0.1),transparent_58%)] [mask-image:linear-gradient(to_bottom,transparent,black_24%,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_24%,black_72%,transparent)]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div className="lg:col-span-6" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="mb-6 text-xs font-light uppercase tracking-[0.25em] text-white/50 md:mb-8 md:tracking-[0.35em]">{c.eyebrow}</p>
            <h1 className="text-6xl font-medium leading-none tracking-tight text-white md:text-8xl lg:text-9xl">
              {c.title.includes("™") ? (<>{c.title.split("™")[0]}<span className="inline-block -translate-y-[1.6em] text-[0.28em] font-normal leading-none tracking-normal">™</span></>) : c.title}
            </h1>
            <p className="mt-7 text-2xl font-normal leading-tight text-white md:text-4xl">{c.statement}</p>
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl">{c.subtitle}</p>
            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/[0.08] md:mt-12">
              {c.highlights.map((item, index) => (
                <div key={item.label} className={`px-3 py-5 md:px-4 ${index > 0 ? "border-l border-white/[0.08]" : ""}`}>
                  <p className="font-mono text-xl font-normal text-white md:text-3xl">{item.value}</p>
                  <p className="mt-2 text-[8px] font-light uppercase leading-relaxed tracking-[0.1em] text-white/40 md:text-[10px]">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="lg:col-span-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <TariGauge score={812} label="TARI SCORE" />
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-light uppercase tracking-[0.35em] text-white/50">TL;DR</p>
          <p className="mt-6 text-xl font-normal leading-relaxed text-white/85 md:text-2xl">{c.tldr}</p>
        </div>
      </section>

      <section id="summary" className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
          <header className="lg:col-span-4">
            <p className="text-xs font-light uppercase tracking-[0.35em] text-white/50">{c.summaryLabel}</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">{c.summaryTitle}</h2>
          </header>
          <div className="lg:col-span-7 lg:col-start-6"><Paragraph>{c.summary}</Paragraph></div>
        </div>
      </section>

      <div className="bg-black px-5 py-6 lg:hidden">
        <label htmlFor="tari-chapter-nav" className="mb-3 block text-[10px] font-light uppercase tracking-[0.25em] text-white/45">{c.deepDive}</label>
        <select id="tari-chapter-nav" className="w-full rounded-sm border border-white/15 bg-black px-3 py-3 text-sm font-light text-white outline-none transition-colors focus:border-white/50" defaultValue="" onChange={(event) => { if (event.target.value) document.querySelector(event.target.value)?.scrollIntoView({ behavior: "smooth" }); }}>
          <option value="" disabled>Select a chapter</option>
          {c.chapters.map((chapter) => <option key={chapter.number} value={`#chapter-${chapter.number}`}>{chapter.number} {chapter.title}</option>)}
        </select>
      </div>

      <section className="relative px-5 py-20 md:px-8 md:py-32">
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-[68%] w-[72%] bg-[radial-gradient(ellipse_at_18%_76%,hsl(var(--cyan-accent)/0.1),transparent_58%)] [mask-image:linear-gradient(to_top,transparent,black_28%,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_28%,black_72%,transparent)]" />

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-6 text-[10px] font-light uppercase tracking-[0.3em] text-white/45">{c.deepDive}</p>
              <nav aria-label="TARI chapters" className="space-y-2.5">
                {c.chapters.map((chapter) => (
                  <a key={chapter.number} href={`#chapter-${chapter.number}`} className="group grid grid-cols-[2rem_1fr] text-xs font-light leading-snug text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white">
                    <span className="font-mono text-white/40 group-hover:text-white/80">{chapter.number}</span><span>{chapter.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            {c.chapters.map((chapter) => (
              <article key={chapter.number} id={`chapter-${chapter.number}`} className="scroll-mt-28 border-t border-white/[0.07] py-16 first:border-t-0 first:pt-0 md:py-24">
                <motion.header initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} className="mb-10 grid gap-5 md:grid-cols-[5rem_1fr] md:gap-8">
                  <span className="font-mono text-sm text-white/60">{chapter.number}</span>
                  <div>
                    <h2 className="text-3xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl">{chapter.title}</h2>
                    <p className="mt-4 text-[10px] font-light uppercase tracking-[0.2em] text-white/40">{chapter.label}</p>
                  </div>
                </motion.header>
                <div className="space-y-7 md:ml-[7rem]">
                  {chapter.paragraphs.map((paragraph, index) => (
                    <div key={paragraph}>
                      <Paragraph>{paragraph}</Paragraph>
                      {chapter.table && index === 0 && <EvidenceTable table={chapter.table} />}
                      {chapter.metrics && index === 1 && (
                        <div className="my-9 grid grid-cols-1 border-y border-white/[0.1] sm:grid-cols-2">
                          {chapter.metrics.map((metric, metricIndex) => (
                            <div key={metric.label} className={`bg-black px-6 py-7 ${metricIndex > 0 ? "border-t border-white/[0.08] sm:border-l sm:border-t-0" : ""}`}>
                              <p className="font-mono text-3xl font-normal text-white md:text-4xl">{metric.value}</p>
                              <p className="mt-2 text-[10px] font-light uppercase tracking-[0.18em] text-white/40">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {chapter.link && <a href={chapter.link.href} className="inline-flex border-b border-white/20 pb-1 text-sm font-light text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60">{chapter.link.label} →</a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="glossary" className="relative px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-20">
          <header className="lg:col-span-4">
            <p className="text-xs font-light uppercase tracking-[0.35em] text-white/50">Reference</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">Glossary</h2>
          </header>
          <dl className="lg:col-span-7 lg:col-start-6">
            {c.glossary.map(([term, definition]) => (
              <div key={term} className="grid gap-2 border-t border-white/[0.08] py-5 first:border-t-0 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <dt className="text-base font-normal text-white/90">{term}</dt>
                <dd className="text-base font-light leading-relaxed text-white/60">{definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative px-5 py-28 text-center md:px-8 md:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">{c.closingTitle}</h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm font-light sm:flex-row sm:gap-10">
            {c.links.map((link) => (
              <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="border-b border-white/20 pb-1 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60">{link.label} {link.external ? "↗" : "→"}</a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Tari;
