import { motion } from "framer-motion";
import { TariGauge } from "@/components/TariGauge";
import { useLanguage } from "@/contexts/LanguageContext";
import { tariPageContent } from "@/i18n/editorialPages";

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

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const Tari = () => {
  const { language } = useLanguage();
  const c = tariPageContent[language];
  return (
  <main className="bg-black">
    <section className="relative min-h-screen flex items-center bg-perspective-grid pt-24 md:pt-32 py-24 md:py-40 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,hsl(var(--cyan-accent)/0.1),transparent_55%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div className="lg:col-span-6" {...reveal}>
           <SectionLabel>{c.heroLabel}</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-normal text-white leading-[1.02]">
             {c.heroTitleA}<br />{c.heroTitleB}
          </h1>
          <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-xl">
             {c.heroBody}
          </p>
        </motion.div>
        <motion.div className="lg:col-span-6" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
           <TariGauge score={812} label={c.gaugeLabel} />
        </motion.div>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
         <motion.div {...reveal}><SectionLabel>{c.halvesLabel}</SectionLabel></motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           {c.halves.map(([title, body], index) => (
            <motion.article key={title} className="border border-white/10 bg-black rounded-lg p-7 md:p-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: index * 0.1 }}>
              <h2 className="text-2xl md:text-3xl font-light tracking-normal text-white">{title}</h2>
              <p className="mt-6 text-base md:text-lg font-light text-white/65 leading-relaxed">{body}</p>
            </motion.article>
          ))}
        </div>
        <motion.p className="mt-10 md:mt-12 text-base md:text-lg font-light text-white/50 leading-relaxed max-w-4xl" {...reveal}>
           {c.halvesNote}
        </motion.p>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
         <motion.div className="lg:col-span-5" {...reveal}><SectionLabel>{c.inputsLabel}</SectionLabel></motion.div>
        <div className="lg:col-span-7 border-t border-white/10">
           {c.inputs.map(([lead, body], index) => (
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
           <SectionLabel>{c.bandsLabel}</SectionLabel>
           <Headline>{c.bandsTitle}</Headline>
        </motion.div>
        <div className="lg:col-span-6">
          <div className="border-t border-white/10">
             {c.bands.map(([range, meaning], index) => (
              <motion.div key={range} className="grid grid-cols-[8.5rem_1fr] md:grid-cols-[10rem_1fr] gap-5 py-5 md:py-6 border-b border-white/10 items-baseline" initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: index * 0.07 }}>
                <span className="font-mono text-sm md:text-base text-white">{range}</span>
                <span className="text-base md:text-lg font-light text-white/65 leading-relaxed">{meaning}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-base md:text-lg font-light text-white/50 leading-relaxed">
             {c.bandsNote}
          </p>
        </div>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...reveal}>
           <SectionLabel>{c.numbersLabel}</SectionLabel>
           <Headline>{c.numbersTitle}</Headline>
        </motion.div>
        <div className="mt-12 md:mt-16 overflow-x-auto border border-white/10 rounded-lg bg-black">
          <table className="w-full min-w-[760px] text-left">
            <thead><tr className="border-b border-white/10">
               {c.tableHeaders.map((heading) => <th key={heading} className="px-5 md:px-7 py-4 text-[10px] tracking-[0.25em] font-light text-white/40 uppercase">{heading}</th>)}
            </tr></thead>
             <tbody>{c.measures.map(([measure, value, scope], index) => (
               <tr key={measure} className={index < c.measures.length - 1 ? "border-b border-white/10" : ""}>
                <td className="px-5 md:px-7 py-5 text-sm md:text-base font-normal text-white/85 align-top w-[28%]">{measure}</td>
                <td className="px-5 md:px-7 py-5 font-mono text-sm md:text-base text-white align-top w-[12%]">{value}</td>
                <td className="px-5 md:px-7 py-5 text-sm md:text-base font-light text-white/60 leading-relaxed align-top">{scope}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p className="mt-8 text-base md:text-lg font-light text-white/50 leading-relaxed max-w-5xl">
           {c.numbersNote}
        </p>
      </div>
    </section>

    <section className="relative bg-perspective-grid py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...reveal}>
           <SectionLabel>{c.tiersLabel}</SectionLabel>
           <Headline>{c.tiersTitle}</Headline>
        </motion.div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {c.tiers.map(([tier, range, powers], index) => (
            <motion.article key={tier} className="rounded-lg border border-white/10 bg-black p-7 md:p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: index * 0.1 }}>
              <h3 className="text-2xl md:text-3xl font-light text-white">{tier}</h3>
              <p className="mt-3 text-sm md:text-base font-mono text-white/80">{range}</p>
              <p className="mt-6 text-base md:text-lg font-light text-white/65 leading-relaxed">{powers}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-10 text-base md:text-lg font-light text-white/50 leading-relaxed">
           {c.tiersNote}
        </p>
      </div>
    </section>

    <section className="relative bg-gray-50 py-24 md:py-36 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[linear-gradient(hsl(var(--trust-blue))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--trust-blue))_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div className="lg:col-span-6" {...reveal}>
           <SectionLabel light>{c.runLabel}</SectionLabel>
           <Headline light>{c.runTitle}</Headline>
        </motion.div>
        <motion.div className="lg:col-span-6" {...reveal}>
          <pre className="rounded-lg bg-gray-900 border border-gray-700 p-6 md:p-8 font-mono text-sm md:text-base leading-loose text-gray-100 overflow-x-auto"><code>{`pip install amai-tari\ntari demo\ntari dashboard`}</code></pre>
          <p className="mt-8 text-base md:text-lg font-light text-black/70 leading-relaxed">
             {c.runBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 md:gap-10">
             <ArrowLink href="/methodology" light>{c.runLinks[0]}</ArrowLink>
             <ArrowLink href="/docs" light>{c.runLinks[1]}</ArrowLink>
          </div>
        </motion.div>
      </div>
    </section>


  </main>
  );
};

export default Tari;
