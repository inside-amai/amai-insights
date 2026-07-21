import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PilotAccessForm } from "@/components/PilotAccessForm";

const sectionLinks = [
  { label: "Install", href: "#install" },
  { label: "Quickstart", href: "#quickstart" },
  { label: "Core concepts", href: "#concepts" },
  { label: "The CLI", href: "#cli" },
  { label: "Privacy", href: "#privacy" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Team / hosted", href: "#hosted" },
];

const CodeBlock = ({
  code,
  language = "text",
  filename,
  showLineNumbers = true,
}: {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mono = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  return (
    <div className="relative rounded-xl border border-white/10 bg-black/80 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
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
                Copied
              </span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-white/50 group-hover:text-white/80 transition-colors duration-300" strokeWidth={2} />
              <span className="text-[10px] tracking-[0.2em] uppercase font-light text-white/50 group-hover:text-white/80 transition-colors duration-300">
                Copy
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

  useEffect(() => {
    document.title = "TARI Lens — Docs · AMAI Labs";
  }, []);

  return (
    <div className="min-h-screen bg-black bg-perspective-grid text-white/90">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">
          {/* Sidebar nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-32 space-y-1">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium mb-5">
                On this page
              </div>
              {sectionLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="block py-2 text-sm font-light text-white/50 hover:text-[hsl(var(--cyan-accent))] transition-colors border-l border-white/5 pl-4 hover:border-[hsl(var(--cyan-accent)/0.5)]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="min-w-0">
            {/* Header */}
            <FadeIn>
              <div className="mb-16 md:mb-24">
                <span className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-light">
                  TARI Lens — Docs
                </span>
                <h1 className="font-serif mt-6 text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
                  See what your AI agent actually did — content-off, in about a minute.
                </h1>
                <p className="mt-8 text-lg md:text-xl font-light text-white/60 max-w-3xl leading-relaxed">
                  TARI Lens is a local developer console for the TARI score. It reads the behavioral shape of any agent run, shows you the trace, the verdict, and the dimensions that moved — without reading a single prompt, argument, or model output.
                </p>
              </div>
            </FadeIn>

            {/* Install */}
            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow="Install" title="pip install amai-tari" id="install" />
              <p className="mt-8 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                Pure-Python, Node-free. The dashboard UI ships pre-built inside the package.
              </p>
              <div className="mt-8">
                <CodeBlock code="pip install amai-tari" language="bash" />
              </div>
            </FadeIn>

            {/* Quickstart */}
            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow="Quickstart" title="~60 seconds" id="quickstart" />
              <div className="mt-8 space-y-6 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                <p>
                  Three steps: name it, capture it, score it. OpenTelemetry auto-instrumentation for LangGraph and CrewAI works through the openinference-* packages, so step 2 is often automatic.
                </p>
              </div>
              <div className="mt-8">
                <CodeBlock
                  code={`from tari import TARIInstrument

tari = TARIInstrument("my-agent", store="./.tari")   # ① name it, pick a local store
provider, exporter = tari.start_otel_capture()        # ② capture (attach to your OTel tracer)
# ... run your agent ...
tari.score(tari.trajectory_from_exporter(exporter))   # ③ score → writes a content-off run`}
                  language="python"
                  filename="quickstart.py"
                />
              </div>
              <div className="mt-6 space-y-4 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                <p>Then open your dashboard:</p>
              </div>
              <div className="mt-6">
                <CodeBlock
                  code={`tari demo        # see it now on a bundled sample  (alias for tari dashboard)
tari dashboard   # your own runs, from ./.tari`}
                  language="bash"
                  showLineNumbers={false}
                />
              </div>
              <p className="mt-6 text-base font-light text-white/60 leading-relaxed max-w-3xl">
                Your dashboard opens locally in the browser. No account, no login — nothing leaves your machine. With OpenTelemetry auto-instrumentation (LangGraph / CrewAI via the openinference-* packages), step ② is automatic.
              </p>
            </FadeIn>

            {/* Core concepts */}
            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow="Core concepts" title="Four ideas worth reading once" id="concepts" />
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Content-off",
                    body: "Reads only tool names, sink classes, operation types, token counts, and timing. Never prompts, tool arguments, or model outputs. Nothing leaves the agent boundary.",
                  },
                  {
                    title: "The score",
                    body: "One conduct score, 300–850. It triages, it never gates: a high score means no adverse signal, not a safety certificate. Low confidence → UNRATED, not a confident green.",
                  },
                  {
                    title: "The five dimensions",
                    body: "Scope Integrity, Consistency, Exfiltration Risk (highest-weighted — the read → encode → external-POST shape), Resilience, Reliability. Each mapped to OWASP ASI / MITRE ATLAS.",
                  },
                  {
                    title: "Baselines",
                    body: "A per-agent, per-task known-good run you promote explicitly. Nothing is promoted automatically.",
                  },
                ].map((concept) => (
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

            {/* The CLI */}
            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow="The CLI" title="tari &lt;command&gt;" id="cli" />
              <p className="mt-8 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                The CLI drives the local dashboard, baseline management, drift checks, and the interceptor approval queue.
              </p>
              <div className="mt-8">
                <CodeBlock
                  code={`tari dashboard                     # launch the local TARI Lens dashboard
tari demo                          # dashboard on the bundled sample
tari baseline promote <args>       # promote a known-good run as a baseline
tari baseline list                 # list promoted baselines
tari baseline show <agent>         # print one agent's baseline
tari drift check <args>            # conduct-drift checks against a promoted baseline
tari interceptor approvals list    # holds paused awaiting a human decision
tari interceptor approvals allow   # allow a held action (labels it a false positive)
tari interceptor approvals deny    # deny a held action (labels it a true positive)
tari interceptor approvals stats   # false-positive-rate stats`}
                  language="bash"
                  showLineNumbers={false}
                />
              </div>
              <p className="mt-6 text-base font-light text-white/60">
                Run <code className="text-white/90 font-mono text-sm">tari &lt;command&gt; --help</code> for full flags.
              </p>
            </FadeIn>

            {/* Privacy */}
            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow="Privacy" title="Content-off by design" id="privacy" />
              <p className="mt-8 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-3xl">
                TARI reconstructs what your agent did from behavioral metadata alone: enough to rebuild the trace, catch an exfiltration pattern, and point at a likely third-party source — with zero content read.
              </p>
            </FadeIn>

            {/* Dashboard */}
            <FadeIn className="mb-20 md:mb-28">
              <SectionHeading eyebrow="Dashboard" title="tari dashboard" id="dashboard" />
              <p className="mt-8 text-lg font-light text-white/70 leading-relaxed max-w-3xl">
                The dashboard opens your console locally: the verdict, the full trace timeline, the score and five dimensions, and findings with next steps. A full walkthrough with screenshots lands with the next release.
              </p>
            </FadeIn>

            {/* Team / hosted */}
            <FadeIn className="mb-24 md:mb-36">
              <SectionHeading eyebrow="Team / hosted" title="Early access for fleets" id="hosted" />
              <div className="mt-8 max-w-3xl space-y-6 text-lg font-light text-white/70 leading-relaxed">
                <p>
                  Running a fleet? The hosted Command Center adds a shared store and the enforcement layer (HOLD). Early-access today.
                </p>
                <p>
                  The local Lens above needs none of it.
                </p>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => setShowPilotForm(true)}
                  className="inline-flex items-center gap-2 text-sm font-normal text-black bg-white hover:bg-white/90 transition-colors duration-300 px-6 py-3 rounded-full"
                >
                  Request access
                  <span aria-hidden>→</span>
                </button>
                <p className="mt-3 text-[11px] text-white/40 font-light tracking-wide">
                  Interest form, not a signup.
                </p>
              </div>
            </FadeIn>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-light text-white/50">
            <Link to="/methodology" className="hover:text-white transition-colors">
              Methodology
            </Link>
            <span className="text-white/20">·</span>
            <a
              href="https://bureau.amai.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              The Bureau
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Apache-2.0
            </a>
            <span className="text-white/20">·</span>
            <CopyCommand text="pip install amai-tari" />
          </div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-white/30 font-light">
            AMAI Labs · Infrastructure & Research
          </div>
        </div>
      </footer>

      <PilotAccessForm isOpen={showPilotForm} onClose={() => setShowPilotForm(false)} />
    </div>
  );
};

const CopyCommand = ({ text }: { text: string }) => {
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
      className="group inline-flex items-center gap-2 font-mono text-sm text-white/50 hover:text-white transition-colors"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-300" strokeWidth={2} />
      ) : (
        <Copy className="w-3.5 h-3.5 text-white/40 group-hover:text-white/80 transition-colors" strokeWidth={2} />
      )}
      <span>{copied ? "Copied" : text}</span>
    </button>
  );
};

export default Docs;
