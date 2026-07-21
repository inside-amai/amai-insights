import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Copy, Check } from "lucide-react";
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
  language,
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

  const lines = code.split("\n");

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
      <div className="px-4 py-6 md:px-6 md:py-8 font-mono text-sm leading-relaxed overflow-x-auto">
        <div className="flex gap-4">
          {showLineNumbers && (
            <div className="select-none text-right text-white/20 font-light tabular-nums">
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}
          <pre className="text-white/90 whitespace-pre">
            <code>{code}</code>
          </pre>
        </div>
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

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useState<HTMLDivElement | null>(null);
  const isInView = useInView(ref[0], { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref[0] ? (el) => { ref[1](el); } : undefined}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};
