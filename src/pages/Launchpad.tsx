import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { launchpadMarkdown } from "@/data/launchpadPage";

type Chapter = {
  number: string;
  title: string;
  id: string;
  paragraphs: string[];
};

const lines = launchpadMarkdown.split("\n");
const title = lines.find((line) => line.startsWith("# "))?.slice(2) ?? "The Launchpad";
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
  { value: "FREE", label: "COST TO LAUNCH" },
  { value: "1.25%", label: "CURVE TRADES" },
  { value: "1%", label: "POOL TRADES, FOREVER" },
  { value: "75/25", label: "CREATOR / AMAI SPLIT" },
];

const chapterNotes: Record<string, string> = {
  "1": "Name it, pick the stock, launch",
  "2": "Standard machinery, on purpose",
  "3": "The curve completes, the pool opens",
  "4": "Liquidity locked, fees flowing",
  "5": "Four permissions, nothing else",
  "6": "One trader wins, every day",
  "7": "Four numbers, in plain words",
  "8": "Attach without moving capital",
  "9": "One quarter, four uses",
  "10": "Frozen at launch, policy can move",
  "11": "Live on testnet",
};

const SCHEDULE_CHAPTER = "7";

const Paragraph = ({ children }: { children: string }) => (
  <p className="text-base font-light leading-8 text-white/62 md:text-lg md:leading-9">{children}</p>
);

const ScheduleRow = ({ children }: { children: string }) => {
  const match = children.match(/^([^:]{1,24}):\s*(.+)$/);
  if (!match) return <Paragraph>{children}</Paragraph>;

  return (
    <div className="grid gap-2 border-t border-white/10 py-6 first:border-t-0 md:grid-cols-[10rem_1fr] md:gap-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#B4F6AD]">{match[1]}</p>
      <p className="text-base font-light leading-8 text-white/62 md:text-lg">{match[2]}</p>
    </div>
  );
};

const Launchpad = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-perspective-grid px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_28%_40%,rgba(21,120,84,0.18),transparent_45%),linear-gradient(to_bottom,transparent_45%,rgba(0,0,0,0.88))]" />
        <motion.div
          className="relative mx-auto w-full max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase text-[#B4F6AD]/65">
            <span className="h-px w-10 bg-[#3D896D]" />
            AMAI Launchpad
          </div>
          <h1 className="max-w-5xl text-6xl font-light leading-none text-white md:text-8xl lg:text-[8.5rem]">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-2xl font-light leading-tight text-white/66 md:text-4xl">
            {subtitle}
          </p>
          <div className="mt-16 grid max-w-4xl grid-cols-2 border-y border-white/10 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="border-white/10 px-4 py-5 even:border-l md:border-l md:first:border-l-0">
                <p className="font-mono text-2xl text-[#B4F6AD] md:text-3xl">{item.value}</p>
                <p className="mt-2 font-mono text-[9px] text-white/38 md:text-[10px]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-[#157854]/[0.055] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase text-[#B4F6AD]/70">TL;DR</p>
          </div>
          <div className="lg:col-span-8">
            {tldr.map((paragraph) => (
              <p key={paragraph} className="text-xl font-light leading-relaxed text-white/82 md:text-2xl md:leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="summary" className="bg-perspective-grid px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
          <header className="lg:col-span-4">
            <p className="font-mono text-[10px] text-[#B4F6AD]/60">00 // SUMMARY</p>
            <h2 className="mt-5 text-4xl font-light md:text-6xl">Every pool comes with a worker.</h2>
          </header>
          <div className="space-y-7 lg:col-span-7 lg:col-start-6">
            {summary.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
          </div>
        </div>
      </section>

      <div className="border-y border-white/10 bg-black px-5 py-5 lg:hidden">
        <label htmlFor="launchpad-chapter-nav" className="mb-2 block font-mono text-[9px] uppercase text-white/35">Jump to chapter</label>
        <select
          id="launchpad-chapter-nav"
          className="w-full border border-white/15 bg-black px-3 py-3 text-sm font-light text-white outline-none focus:border-[#B4F6AD]/60"
          defaultValue=""
          onChange={(event) => {
            if (event.target.value) document.querySelector(event.target.value)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <option value="" disabled>Select a chapter</option>
          {mainChapters.map((chapter) => <option key={chapter.id} value={`#${chapter.id}`}>{chapter.number}. {chapter.title}</option>)}
        </select>
      </div>

      <section className="bg-perspective-grid px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-white/10 pl-5">
              <p className="mb-5 font-mono text-[9px] uppercase text-[#B4F6AD]/60">The deep dive</p>
              <nav aria-label="Deep dive chapters" className="space-y-2.5">
                {mainChapters.map((chapter) => (
                  <a
                    key={chapter.id}
                    href={`#${chapter.id}`}
                    className="group grid grid-cols-[1.5rem_1fr] text-xs font-light text-white/36 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-[#B4F6AD]"
                  >
                    <span className="font-mono text-[#B4F6AD]/45 group-hover:text-[#B4F6AD]">{chapter.number.padStart(2, "0")}</span>
                    <span>{chapter.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            <div className="mb-20 border-b border-white/10 pb-10 md:mb-28">
              <p className="font-mono text-[10px] uppercase text-[#B4F6AD]/60">Technical field guide</p>
              <h2 className="mt-5 text-5xl font-light md:text-7xl">The deep dive</h2>
            </div>

            {mainChapters.map((chapter) => (
              <article
                key={chapter.id}
                id={chapter.id}
                className="scroll-mt-28 border-b border-white/10 py-16 first:pt-0 md:py-24"
              >
                <motion.header
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-10 grid gap-5 md:grid-cols-[5rem_1fr] md:gap-8"
                >
                  <span className="font-mono text-sm text-[#B4F6AD]/55">{chapter.number.padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-3xl font-light text-white md:text-5xl">{chapter.title}</h3>
                    {chapterNotes[chapter.number] && (
                      <p className="mt-4 font-mono text-[10px] uppercase text-white/32">{chapterNotes[chapter.number]}</p>
                    )}
                  </div>
                </motion.header>
                <div className={chapter.number === SCHEDULE_CHAPTER ? "md:ml-[7rem]" : "space-y-7 md:ml-[7rem]"}>
                  {chapter.paragraphs.map((paragraph) =>
                    chapter.number === SCHEDULE_CHAPTER
                      ? <ScheduleRow key={paragraph}>{paragraph}</ScheduleRow>
                      : <Paragraph key={paragraph}>{paragraph}</Paragraph>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {glossary && (
        <section id="glossary" className="border-y border-white/10 bg-[#157854]/[0.055] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] text-[#B4F6AD]/60">REFERENCE</p>
              <h2 className="mt-5 text-4xl font-light md:text-6xl">Glossary</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {glossary.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base font-light leading-8 text-white/66 md:text-lg md:leading-9">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-perspective-grid px-5 py-28 text-center md:px-8 md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase text-[#B4F6AD]/60">Launch with a worker attached</p>
          <h2 className="mt-6 text-4xl font-light leading-tight md:text-7xl">Launch a token. It comes with a worker.</h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm font-light sm:flex-row sm:gap-10">
            <a href="https://x.com/InsideAMAI" target="_blank" rel="noopener noreferrer" className="border-b border-[#B4F6AD]/35 pb-1 text-[#B4F6AD]/80 transition-colors hover:text-[#B4F6AD] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B4F6AD]">Follow the build ↗</a>
            <a href="/operators" className="border-b border-white/20 pb-1 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B4F6AD]">How the operator works →</a>
            <a href="/token" className="border-b border-white/20 pb-1 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B4F6AD]">See the $AMAI page →</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Launchpad;
