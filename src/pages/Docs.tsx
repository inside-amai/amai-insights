import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PilotAccessForm } from "@/components/PilotAccessForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { pickDocs } from "@/i18n/pageContent";

const CodeBlock = ({
  code,
  language = "text",
  filename,
  showLineNumbers = true,
  copyCopiedLabel = "Copied",
  copyLabel = "Copy",
}: {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  copyCopiedLabel?: string;
  copyLabel?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mono = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  return (
    <div
      className="relative rounded-xl border border-white/10 bg-black/80 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] keep-ltr"
      dir="ltr"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400/80" />
            <span className="w-2 h-2 rounded-full bg-amber-300/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
          </div>
          {language && (
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-light">
              {language}
            </span>
          )}
          {filename && (
            <span className="text-[10px] tracking-wide text-white/30 font-light">
              {filename}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-300" strokeWidth={2} />
              <span className="text-[10px] tracking-[0.2em] uppercase font-light text-emerald-100">
                {copyCopiedLabel}
              </span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-white/50 group-hover:text-white/80 transition-colors duration-300" strokeWidth={2} />
              <span className="text-[10px] tracking-[0.2em] uppercase font-light text-white/50 group-hover:text-white/80 transition-colors duration-300">
                {copyLabel}
              </span>
            </>
          )}
        </button>
      </div>
      <div className="px-4 py-6 md:px-6 md:py-8 text-sm leading-relaxed overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          wrapLines={false}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.875rem",
            lineHeight: "1.625",
            fontFamily: mono,
          }}
          lineNumberStyle={{
            color: "rgba(255,255,255,0.2)",
            fontFamily: mono,
            fontSize: "0.875rem",
            paddingRight: "1rem",
            minWidth: "2rem",
            textAlign: "right",
          }}
          codeTagProps={{
            style: {
              fontFamily: mono,
            },
          }}
        >
          {code.trimEnd()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const SectionHeading = ({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id: string;
}) => (
  <div id={id} className="scroll-mt-32">
    <div className="flex items-center gap-3 mb-6">
      <span className="h-px w-8 bg-white/30" />
      <span className="text-[10px] tracking-[0.35em] font-light text-white/50 uppercase">
        {eyebrow}
      </span>
    </div>
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.1]">
      {title}
    </h2>
  </div>
);

const FadeIn = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Docs = () => {
  const [showPilotForm, setShowPilotForm] = useState(false);
  const { language } = useLanguage();
  const c = pickDocs(language);
  const isRtl = language === 'ar';

  useEffect(() => {
    document.title = c.title;
  }, [c.title]);

  const sectionLinks = [
    { label: c.nav.install, href: "#install" },
    { label: c.nav.quickstart, href: "#quickstart" },
    { label: c.nav.concepts, href: "#concepts" },
    { label: c.nav.cli, href: "#cli" },
    { label: c.nav.privacy, href: "#privacy" },
    { label: c.nav.dashboard, href: "#dashboard" },
    { label: c.nav.hosted, href: "#hosted" },
  ];

  return (
    <div className="min-h-screen bg-black bg-perspective-grid text-white/90" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">
          {/* Sidebar nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-32 space-y-1">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium mb-5">
                {c.nav.onThisPage}
              </div>
              {sectionLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`block py-2 text-sm font-light text-white/50 hover:text-[hsl(var(--cyan-accent))] transition-colors ${isRtl ? 'border-r pr-4 border-white/5 hover:border-[hsl(var(--cyan-accent)/0.5)]' : 'border-l pl-4 border-white/5 hover:border-[hsl(var(--cyan-accent)/0.5)]'}`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="min-w-0">
            <FadeIn>
              <div className="mb-16 md:mb-24">
                <span className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-light">
                  {c.header.eyebrow}
                </span>
                <h1 className="font-serif mt-6 text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
                  {c.header.title}
                </h1>
                <p className="mt-8 text-lg md:text-xl font-light text-white/60 max-w-3xl leading-relaxed">
                  {c.header.body}
                </p>
              </div>
            </FadeIn>

            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow={c.install.eyebrow} title={c.install.title} id="install" />
              <p className="mt-8 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                {c.install.body}
              </p>
              <div className="mt-8">
                <CodeBlock code="python3 -m pip install amai-tari" language="bash" copyLabel={c.footer.copyCopied === c.footer.copyCopied ? (language==='ja'?'コピー':language==='ar'?'نسخ':'Copy') : 'Copy'} copyCopiedLabel={c.footer.copyCopied} />
              </div>
              <p className="mt-4 text-base font-light text-white/60 leading-relaxed max-w-3xl">
                {c.install.note}
              </p>
            </FadeIn>

            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow={c.quickstart.eyebrow} title={c.quickstart.title} id="quickstart" />
              <div className="mt-8 space-y-6 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                <p>{c.quickstart.p1}</p>
              </div>
              <div className="mt-8">
                <CodeBlock
                  code={`from tari import TARIInstrument

tari = TARIInstrument("my-agent", store="./.tari")   # \u2460 name it, pick a local store
provider, exporter = tari.start_otel_capture()        # \u2461 capture (attach to your OTel tracer)
# ... run your agent ...
tari.score(tari.trajectory_from_exporter(exporter))   # \u2462 score \u2192 writes a content-off run`}
                  language="python"
                  filename="quickstart.py"
                  copyCopiedLabel={c.footer.copyCopied}
                />
              </div>
              <div className="mt-6 space-y-4 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                <p>{c.quickstart.openLead}</p>
              </div>
              <div className="mt-6">
                <CodeBlock
                  code={`python3 -m tari demo
python3 -m tari dashboard`}
                  language="bash"
                  showLineNumbers={false}
                  copyCopiedLabel={c.footer.copyCopied}
                />
              </div>
              <p className="mt-4 text-base font-light text-white/60 leading-relaxed max-w-3xl">
                {c.quickstart.openNote}
              </p>
              <p className="mt-6 text-base font-light text-white/60 leading-relaxed max-w-3xl">
                {c.quickstart.note}
              </p>
            </FadeIn>

            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow={c.concepts.eyebrow} title={c.concepts.title} id="concepts" />
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {c.concepts.items.map((concept) => (
                  <div
                    key={concept.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:border-[hsl(var(--cyan-accent)/0.3)] transition-colors"
                  >
                    <h3 className="font-serif text-xl md:text-2xl font-normal tracking-tight text-white mb-4">
                      {concept.title}
                    </h3>
                    <p className="text-sm md:text-base font-light text-white/60 leading-relaxed">
                      {concept.body}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow={c.cli.eyebrow} title={c.cli.title} id="cli" />
              <p className="mt-8 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                {c.cli.body}
              </p>
              <div className="mt-8">
                <CodeBlock
                  code={`python3 -m tari dashboard
python3 -m tari demo
python3 -m tari baseline promote <args>
python3 -m tari baseline list
python3 -m tari baseline show <agent>
python3 -m tari drift check <args>
python3 -m tari interceptor approvals list
python3 -m tari interceptor approvals allow
python3 -m tari interceptor approvals deny
python3 -m tari interceptor approvals stats`}
                  language="bash"
                  showLineNumbers={false}
                  copyCopiedLabel={c.footer.copyCopied}
                />
              </div>
              <p className="mt-6 text-base font-light text-white/60">
                {c.cli.helpPre}
                <code className="text-white/90 font-mono text-sm keep-ltr" dir="ltr">tari &lt;command&gt; --help</code>
                {c.cli.helpPost}
              </p>
            </FadeIn>

            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow={c.privacy.eyebrow} title={c.privacy.title} id="privacy" />
              <p className="mt-8 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-3xl">
                {c.privacy.body}
              </p>
            </FadeIn>

            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow={c.dashboard.eyebrow} title={c.dashboard.title} id="dashboard" />
              <p className="mt-8 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                {c.dashboard.body}
              </p>
            </FadeIn>

            <FadeIn className="mb-24 md:mb-36">
              <SectionHeading eyebrow={c.hosted.eyebrow} title={c.hosted.title} id="hosted" />
              <div className="mt-8 max-w-3xl space-y-6 text-lg font-light text-white/70 leading-relaxed">
                <p>{c.hosted.p1}</p>
                <p>{c.hosted.p2}</p>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => setShowPilotForm(true)}
                  className="inline-flex items-center gap-2 text-sm font-normal text-black bg-white hover:bg-white/90 transition-colors duration-300 px-6 py-3 rounded-full"
                >
                  {c.hosted.cta}
                  <span aria-hidden>{isRtl ? '←' : '→'}</span>
                </button>
                <p className="mt-3 text-[11px] text-white/40 font-light tracking-wide">
                  {c.hosted.note}
                </p>
              </div>
            </FadeIn>
          </main>
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-light text-white/50">
            <Link to="/methodology" className="hover:text-white transition-colors">
              {c.footer.methodology}
            </Link>
            <span className="text-white/20">·</span>
            <a
              href="https://bureau.amai.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {c.footer.bureau}
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors keep-ltr"
              dir="ltr"
            >
              Apache-2.0
            </a>
            <span className="text-white/20">·</span>
            <CopyCommand text="pip install amai-tari" copiedLabel={c.footer.copyCopied} />
          </div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-white/30 font-light">
            {c.footer.tag}
          </div>
        </div>
      </footer>

      <PilotAccessForm isOpen={showPilotForm} onClose={() => setShowPilotForm(false)} />
    </div>
  );
};

const CopyCommand = ({ text, copiedLabel }: { text: string; copiedLabel: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex items-center gap-2 font-mono text-sm text-white/50 hover:text-white transition-colors keep-ltr"
      dir="ltr"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-300" strokeWidth={2} />
      ) : (
        <Copy className="w-3.5 h-3.5 text-white/40 group-hover:text-white/80 transition-colors" strokeWidth={2} />
      )}
      <span>{copied ? copiedLabel : text}</span>
    </button>
  );
};

export default Docs;
