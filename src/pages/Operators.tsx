import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { operatorMarkdown } from "@/data/operatorPage";

type Chapter = {
  number: string;
  title: string;
  id: string;
  paragraphs: string[];
};

const lines = operatorMarkdown.split("\n");
const title = lines.find((line) => line.startsWith("# "))?.slice(2) ?? "The Operator";
const subtitle = lines.find((line) => line.length > 0 && !line.startsWith("#")) ?? "";

const getSectionParagraphs = (heading: string, nextHeading: string) => {
  const start = lines.indexOf(heading) + 1;
  const end = lines.indexOf(nextHeading);
  return lines.slice(start, end).map((line) => line.trim()).filter(Boolean);
};

const tldr = getSectionParagraphs("## TL;DR", "## Summary");
const summary = getSectionParagraphs("## Summary", "## The deep dive");
const deepDiveStart = lines.indexOf("## The deep dive") + 1;
const chapterLines = lines.slice(deepDiveStart);
const chapters: Chapter[] = [];

chapterLines.forEach((line) => {
  if (line.startsWith("### ")) {
    const heading = line.slice(4);
    const match = heading.match(/^(\d+)\.\s(.+)$/);
    const number = match?.[1] ?? "G";
    const chapterTitle = match?.[2] ?? heading;
    chapters.push({
      number,
      title: chapterTitle,
      id: match ? `chapter-${number}` : "glossary",
      paragraphs: [],
    });
    return;
  }

  const current = chapters[chapters.length - 1];
  if (current && line.trim()) current.paragraphs.push(line.trim());
});

const mainChapters = chapters.filter((chapter) => chapter.id !== "glossary");
const glossary = chapters.find((chapter) => chapter.id === "glossary");

const highlights = [
  { value: "4", label: "PERMITTED ACTIONS" },
  { value: "7", label: "OPERATING RULES" },
  { value: "6H", label: "PUBLIC PAYOUT WAIT" },
  { value: "7D", label: "RULE CHANGE LOCK" },
];

const chapterNotes: Record<string, string> = {
  "1": "Wallet · Policy · Worker",
  "2": "Fees are the only input",
  "3": "Collect · Convert · Snapshot · Pay",
  "4": "Commit · Wait · Verify · Settle",
  "5": "Four permissions. Nothing more.",
  "6": "Every change waits in public",
  "7": "Receipts chained by hash",
  "8": "Conduct becomes credit",
  "9": "Set the share to zero",
  "10": "One transaction. No capital moved.",
  "11": "Launch · Attach · Attack · Close",
  "12": "Live on testnet",
};

const Paragraph = ({ children }: { children: string }) => {
  const firstSentence = children.match(/^([^.!?]+[.!?])\s*(.*)$/);
  const startsWithStage = /^(Collect|Convert|Snapshot|Pay)\./.test(children);

  if (startsWithStage && firstSentence) {
    return (
      <div className="grid gap-2 border-t border-white/[0.08] py-6 first:border-t-0 md:grid-cols-[8rem_1fr] md:gap-8">
        <p className="text-base font-medium leading-relaxed text-white/90">{firstSentence[1]}</p>
        <p className="text-base font-light leading-relaxed text-white/60 md:text-lg">{firstSentence[2]}</p>
      </div>
    );
  }

  return <p className="text-base font-light leading-relaxed text-white/60 md:text-lg md:leading-relaxed">{children}</p>;
};

const Operators = () => {
  return (
    <main className="min-h-screen overflow-x-clip bg-perspective-grid font-roboto text-white">
      <section className="relative flex min-h-[82svh] items-end px-5 pb-14 pt-32 md:min-h-[86svh] md:px-8 md:pb-20 md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-[68%] w-[72%] bg-[radial-gradient(ellipse_at_18%_24%,hsl(var(--cyan-accent)/0.1),transparent_58%)] [mask-image:linear-gradient(to_bottom,transparent,black_28%,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_28%,black_72%,transparent)]"
        />


        <motion.div
          className="relative mx-auto w-full max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-white/50 md:mb-8">
            AMAI Operator Protocol
          </div>
          <h1 className="max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-light leading-snug text-white/60 md:mt-8 md:text-3xl">
            {subtitle}
          </p>
          <div className="mt-12 grid max-w-4xl grid-cols-2 border-y border-white/[0.08] md:mt-16 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="border-white/[0.08] px-4 py-5 even:border-l md:border-l md:first:border-l-0">
                <p className="font-mono text-2xl font-normal text-white md:text-3xl">{item.value}</p>
                <p className="mt-2 text-[9px] font-light uppercase tracking-[0.12em] text-white/40 md:text-[10px]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-5 py-20 md:px-8 md:py-28">

        <div className="relative mx-auto flex max-w-7xl flex-col items-center">
          <div className="mx-auto w-full max-w-3xl text-center">

            <p className="text-center text-xs font-light uppercase tracking-[0.35em] text-white/50">TL;DR</p>
            {tldr.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-center text-xl font-normal leading-relaxed text-white/85 md:text-2xl md:leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="summary" className="px-5 py-24 md:px-8 md:py-36">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
          <header className="lg:col-span-4">
            <p className="text-xs font-light uppercase tracking-[0.35em] text-white/50">00 // Summary</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">The record is the product.</h2>
          </header>
          <div className="space-y-7 lg:col-span-7 lg:col-start-6">
            {summary.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
          </div>
        </div>
      </section>

      <div className="bg-black px-5 py-6 lg:hidden">
        <label htmlFor="chapter-nav" className="mb-3 block text-[10px] font-light uppercase tracking-[0.25em] text-white/45">Jump to chapter</label>
        <select
          id="chapter-nav"
          className="w-full rounded-sm border border-white/15 bg-black px-3 py-3 text-sm font-light text-white outline-none transition-colors focus:border-white/50"
          defaultValue=""
          onChange={(event) => {
            if (event.target.value) document.querySelector(event.target.value)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <option value="" disabled>Select a chapter</option>
          {mainChapters.map((chapter) => <option key={chapter.id} value={`#${chapter.id}`}>{chapter.number}. {chapter.title}</option>)}
        </select>
      </div>

      <section className="relative px-5 py-20 md:px-8 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-6 text-[10px] font-light uppercase tracking-[0.3em] text-white/45">The deep dive</p>
              <nav aria-label="Deep dive chapters" className="space-y-2.5">
                {mainChapters.map((chapter) => (
                  <a
                    key={chapter.id}
                    href={`#${chapter.id}`}
                    className="group grid grid-cols-[1.75rem_1fr] text-xs font-light leading-snug text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                  >
                    <span className="font-mono text-white/40 group-hover:text-white/80">{chapter.number.padStart(2, "0")}</span>
                    <span>{chapter.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            <div className="mb-20 pb-8 md:mb-28">
              <p className="text-xs font-light uppercase tracking-[0.35em] text-white/50">Technical field guide</p>
              <h2 className="mt-6 text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">The deep dive</h2>
            </div>

            {mainChapters.map((chapter) => (
              <article
                key={chapter.id}
                id={chapter.id}
                className="scroll-mt-28 border-t border-white/[0.07] py-16 first:border-t-0 first:pt-0 md:py-24"
              >
                <motion.header
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-10 grid gap-5 md:grid-cols-[5rem_1fr] md:gap-8"
                >
                  <span className="font-mono text-sm text-white/60">{chapter.number.padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-3xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl">{chapter.title}</h3>
                    <p className="mt-4 text-[10px] font-light uppercase tracking-[0.2em] text-white/40">{chapterNotes[chapter.number]}</p>
                  </div>
                </motion.header>
                <div className="space-y-7 md:ml-[7rem]">
                  {chapter.paragraphs.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {glossary && (
        <section id="glossary" className="relative px-5 py-24 md:px-8 md:py-32">
          
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-xs font-light uppercase tracking-[0.35em] text-white/50">Reference</p>
              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">Glossary</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {glossary.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base font-light leading-relaxed text-white/60 md:text-lg md:leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative px-5 py-28 text-center md:px-8 md:py-40">

        
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-light uppercase tracking-[0.35em] text-white/50">Every move, on the record</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">Check the operator before you trust it.</h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm font-light sm:flex-row sm:gap-10">
            <a href="https://bureau.amai.net" target="_blank" rel="noopener noreferrer" className="border-b border-white/40 pb-1 text-white/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60">See the Bureau ↗</a>
            <a href="/methodology" className="border-b border-white/20 pb-1 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60">How TARI™ is built →</a>
            <a href="/launchpad" className="border-b border-white/20 pb-1 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60">Launch with an operator →</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Operators;