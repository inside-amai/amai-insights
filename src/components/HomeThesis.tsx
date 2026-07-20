import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const TOTAL_HOME_SECTIONS = 9;

// Deterministic PRNG so each section gets a stable but unique layout
const mulberry32 = (seed: number) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

type ConstellationCluster = {
  className: string;
  viewBox: string;
  cx: number;
  cy: number;
  radius: number;
  count: number;
  opacity: number;
  drift: { x: number[]; y: number[]; duration: number };
};

const buildCluster = (rand: () => number, cluster: ConstellationCluster) => {
  const { cx, cy, radius, count } = cluster;
  const pts: { x: number; y: number; r: number }[] = [];
  // hub
  pts.push({ x: cx, y: cy, r: 2.5 + rand() * 1.5 });
  for (let i = 0; i < count - 1; i++) {
    const angle = rand() * Math.PI * 2;
    const dist = radius * (0.25 + rand() * 0.75);
    pts.push({
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist,
      r: 0.8 + rand() * 1.8,
    });
  }
  // pick some edges from hub + a few between neighbors
  const edges: [number, number, number][] = [];
  for (let i = 1; i < pts.length; i++) {
    if (rand() < 0.6) edges.push([0, i, 0.4 + rand() * 0.2]);
  }
  for (let i = 1; i < pts.length; i++) {
    if (rand() < 0.25) {
      const j = 1 + Math.floor(rand() * (pts.length - 1));
      if (j !== i) edges.push([i, j, 0.25 + rand() * 0.2]);
    }
  }
  return { pts, edges };
};

const ConstellationField = ({ seed = 1 }: { seed?: number }) => {
  const rand = mulberry32(seed * 9301 + 49297);

  // 2-4 clusters per section, randomized position/size
  const clusterCount = 2 + Math.floor(rand() * 3);

  // Anchored positions expressed as percentages of the section box.
  // Balanced across left/right/top/bottom/center so no side dominates.
  const anchors: Array<{ xPct: number; yPct: number }> = [
    { xPct: 4, yPct: 6 },     // top-left
    { xPct: 78, yPct: 4 },    // top-right
    { xPct: 2, yPct: 55 },    // mid-left
    { xPct: 82, yPct: 48 },   // mid-right
    { xPct: 8, yPct: 78 },    // bottom-left
    { xPct: 74, yPct: 82 },   // bottom-right
    { xPct: 40, yPct: 2 },    // top-center
    { xPct: 44, yPct: 84 },   // bottom-center
    { xPct: 24, yPct: 30 },   // upper-left-inner
    { xPct: 62, yPct: 66 },   // lower-right-inner
  ];

  // Fisher-Yates shuffle with seeded rand
  const shuffled = [...anchors];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const clusters: ConstellationCluster[] = Array.from({ length: clusterCount }).map((_, i) => {
    const anchor = shuffled[i % shuffled.length];
    // small jitter so the same anchor never lands in the exact same spot
    const xPct = anchor.xPct + (rand() * 6 - 3);
    const yPct = anchor.yPct + (rand() * 6 - 3);
    const pos = {
      top: `${yPct}%`,
      left: `${xPct}%`,
      right: "auto",
      bottom: "auto",
    };
    const size = 160 + Math.floor(rand() * 420); // px
    const isPrimary = i === 0;
    return {
      className: `absolute h-auto`,
      viewBox: "0 0 400 400",
      cx: 120 + rand() * 160,
      cy: 120 + rand() * 160,
      radius: 90 + rand() * 110,
      count: isPrimary ? 10 + Math.floor(rand() * 9) : 4 + Math.floor(rand() * 6),
      opacity: isPrimary ? 0.10 + rand() * 0.06 : 0.05 + rand() * 0.06,
      drift: {
        x: [0, rand() * 4 - 2, rand() * 4 - 2, 0],
        y: [0, rand() * 4 - 2, rand() * 4 - 2, 0],
        duration: 20 + rand() * 14,
      },
      ...({ __pos: pos, __size: size } as unknown as object),
    } as ConstellationCluster & { __pos: typeof pos; __size: number };
  });

  // grid offset so grid also varies subtly
  const gridOffsetX = Math.floor(rand() * 80);
  const gridOffsetY = Math.floor(rand() * 80);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: `${gridOffsetX}px ${gridOffsetY}px`,
        }}
      />
      {clusters.map((c, idx) => {
        const { pts, edges } = buildCluster(rand, c);
        const pos = (c as ConstellationCluster & { __pos: Record<string, string> }).__pos;
        const size = (c as ConstellationCluster & { __size: number }).__size;
        return (
          <motion.svg
            key={idx}
            className={c.className}
            style={{
              top: pos.top,
              right: pos.right,
              left: pos.left,
              bottom: pos.bottom,
              width: size,
              opacity: c.opacity,
            }}
            viewBox={c.viewBox}
            animate={{ x: c.drift.x, y: c.drift.y }}
            transition={{ duration: c.drift.duration, repeat: Infinity, ease: "easeInOut" }}
          >
            {edges.map(([a, b, w], i) => (
              <path
                key={`e-${i}`}
                d={`M${pts[a].x},${pts[a].y} L${pts[b].x},${pts[b].y}`}
                stroke="white"
                strokeWidth={w}
                fill="none"
              />
            ))}
            {pts.map((p, i) => (
              <circle key={`p-${i}`} cx={p.x} cy={p.y} r={p.r} fill="white" />
            ))}
          </motion.svg>
        );
      })}
    </div>
  );
};

const slideMotion = (isMobile: boolean, delay = 0.2) => ({
  initial: { opacity: 0, y: isMobile ? 0 : 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

const HomeSlide = ({
  number,
  label,
  children,
  wide = false,
}: {
  number: number;
  label: string;
  children: ReactNode;
  wide?: boolean;
}) => (
  <section className="relative min-h-svh md:min-h-screen w-full flex items-center justify-center overflow-hidden px-6 py-24 md:py-20">
    <ConstellationField seed={number} />
    <div className={`relative z-10 w-full ${wide ? "max-w-6xl" : "max-w-4xl"} mx-auto px-0 md:px-10`}>
      <MicroLabel>{String(number).padStart(2, "0")} // {label}</MicroLabel>
      {children}
    </div>
    <div className="absolute bottom-4 md:bottom-10 right-4 md:right-12 text-[10px] tracking-[0.2em] text-white/50 font-medium">
      {String(number).padStart(2, "0")} / {String(TOTAL_HOME_SECTIONS).padStart(2, "0")}
    </div>
    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium text-center whitespace-nowrap">
      AMAI Labs · Infrastructure &amp; Research
    </div>
  </section>
);

const SlideDivider = () => (
  <div className="w-full flex justify-center bg-black">
    <div className="w-full max-w-6xl px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>
  </div>
);

const MicroLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6 md:mb-8 text-center">
    {children}
  </p>
);

const H2 = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.12] tracking-tight ${className}`}>
    {children}
  </h2>
);

const Body = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`text-base md:text-lg text-white/50 font-light leading-[1.85] ${className}`}>
    {children}
  </p>
);

const TrustFilterVisual = () => (
  <div className="relative mx-auto mt-12 md:mt-16 flex items-start justify-center gap-3 md:gap-8 py-4">
    <div className="flex flex-col items-center gap-3">
      <p className="text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-white/30">Unwatched</p>
      <div className="relative w-24 md:w-32 h-24 md:h-32">
        {[
          { top: 20, left: 15 },
          { top: 45, left: 55 },
          { top: 65, left: 25 },
          { top: 30, left: 60 },
          { top: 55, left: 40 },
          { top: 15, left: 40 },
          { top: 70, left: 60 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full border border-white/40 bg-white/15"
            style={{ top: `${b.top}%`, left: `${b.left}%` }}
            animate={{ opacity: [0.45, 0.9, 0.45], scale: [0.9, 1.12, 0.9] }}
            transition={{ duration: 2.4 + i * 0.17, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
    <div className="h-24 md:h-32 flex items-center text-white/20 font-light">→</div>
    <div className="flex flex-col items-center gap-3">
      <p className="text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-white/30">Scored</p>
      <svg viewBox="0 0 180 120" className="w-32 md:w-44 h-auto overflow-visible">
        <defs>
          <linearGradient id="homeGauge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="70%" stopColor="rgba(127,214,214,0.45)" />
            <stop offset="100%" stopColor="rgba(166,252,252,0.8)" />
          </linearGradient>
        </defs>
        <path d="M 25 98 A 70 70 0 0 1 155 98" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="14" strokeLinecap="round" />
        <path d="M 25 98 A 70 70 0 0 1 155 98" fill="none" stroke="url(#homeGauge)" strokeWidth="14" strokeLinecap="round" />
        <line x1="90" y1="98" x2="138" y2="58" stroke="rgba(166,252,252,0.9)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="90" cy="98" r="4" fill="rgba(166,252,252,0.35)" stroke="rgba(166,252,252,0.7)" strokeWidth="1" />
        <text x="90" y="78" fill="white" fontSize="22" fontFamily="monospace" fontWeight="300" textAnchor="middle">824</text>
      </svg>
    </div>
    <div className="h-24 md:h-32 flex items-center text-white/20 font-light">→</div>
    <div className="flex flex-col items-center gap-3">
      <p className="text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-white/30">Trusted</p>
      <div className="flex flex-col gap-2 mt-7">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-16 md:w-24 h-3 md:h-4 rounded-sm bg-white/10 border border-white/15"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.18, duration: 0.5 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  </div>
);

const AgentGridVisual = () => (
  <div className="relative mx-auto w-full max-w-xl h-72 md:h-96">
    <svg viewBox="0 0 520 360" className="absolute inset-0 w-full h-full" fill="none">
      <defs>
        <radialGradient id="agentHubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(127,214,214,0.22)" />
          <stop offset="100%" stopColor="rgba(127,214,214,0)" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="180" r="86" fill="url(#agentHubGlow)" />
      {[
        [260, 180], [166, 92], [354, 88], [124, 208], [398, 218], [212, 292], [310, 290],
        [86, 124], [442, 130], [80, 270], [454, 280], [260, 52], [260, 330],
      ].map(([cx, cy], i) => (
        <g key={`n-${i}`}>
          {i > 0 && <line x1="260" y1="180" x2={cx} y2={cy} stroke="rgba(166,252,252,0.13)" strokeWidth="0.8" />}
          <motion.circle cx={cx} cy={cy} r={i === 0 ? 8 : i < 7 ? 4 : 2.5} fill={i === 0 ? "rgba(166,252,252,0.72)" : "rgba(255,255,255,0.38)"} animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 2.2 + i * 0.1, repeat: Infinity, delay: i * 0.08 }} />
        </g>
      ))}
      <circle cx="260" cy="180" r="112" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 5" />
      <circle cx="260" cy="180" r="58" stroke="rgba(127,214,214,0.2)" />
    </svg>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-mono mb-2">Agent Layer</p>
      <p className="text-2xl md:text-3xl text-white font-light tracking-[0.15em]">TARI</p>
    </div>
  </div>
);

const ProofLedger = () => (
  <div className="bg-black border border-white/10 rounded-lg overflow-hidden">
    <div className="border-b border-white/10 px-5 md:px-8 py-5 md:py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 font-mono">LIVE RUN</span>
        <span className="text-[10px] tracking-[0.15em] text-white/20 font-mono">//</span>
        <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white/40 font-mono">CONTENT-OFF</span>
      </div>
      <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-400/80 font-mono border border-emerald-400/20 px-2 py-0.5 rounded w-max">Caught in flight</span>
    </div>
    <div className="px-5 md:px-8 py-6 md:py-8 space-y-4">
      {[
        ["01", "Poisoned instruction detected in agent trajectory"],
        ["02", "Secret-access attempt linked to manipulation chain"],
        ["03", "Exfiltration move blocked before completion"],
      ].map(([n, text], i) => (
        <motion.div
          key={n}
          className="grid grid-cols-[auto_1fr] gap-4 items-start"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-[rgba(166,252,252,0.65)] font-mono">{n}</span>
          <p className="text-sm md:text-base text-white/65 font-light leading-relaxed">{text}</p>
        </motion.div>
      ))}
    </div>
    <div className="border-t border-white/10 px-5 md:px-8 py-5">
      <p className="text-[11px] tracking-[0.3em] uppercase text-white/35 font-medium">
        1,746 agent runs scored · frontier models measured · content-off, always
      </p>
    </div>
  </div>
);

const VisionLadder = () => (
  <div className="border rounded-md bg-black overflow-hidden text-left" style={{ borderColor: "#222222" }}>
    {[
      ["01", "Credit bureaus unlocked lending", "A shared score let strangers extend capital with a common language of risk."],
      ["02", "Ratings unlocked markets", "Independent measurement became the coordination layer for institutional capital."],
      ["03", "TARI unlocks agents", "Autonomous actors need the same neutral trust layer before high-stakes work can scale."],
    ].map(([n, title, body], i, arr) => (
      <motion.div
        key={n}
        className={`grid grid-cols-[auto_1fr] gap-5 md:gap-10 items-center px-5 md:px-8 py-5 md:py-7 ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35 + i * 0.12 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono">Layer</span>
          <span className="text-2xl md:text-4xl text-white font-light tracking-tight tabular-nums">{n}</span>
        </div>
        <div className="min-w-0">
          <p className="text-base md:text-xl text-white font-light mb-1 leading-tight">{title}</p>
          <p className="text-xs md:text-sm text-white/55 font-light leading-relaxed">{body}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export const HomeThesis = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <HomeSlide number={1} label="THE SHIFT" wide>
        <motion.div {...slideMotion(isMobile, 0.15)} className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] gap-10 md:gap-16 items-center">
          <div>
            <H2 className="mb-8">The agent economy isn't coming. It's here.</H2>
            <Body className="max-w-2xl">
              Agents read your documents, call your tools, spend real money, and speak
              for you to the outside world. Each one is a new decision-maker you never
              interviewed.
            </Body>
          </div>
          <AgentGridVisual />
        </motion.div>
      </HomeSlide>

      <SlideDivider />

      <HomeSlide number={2} label="THE UNSEEN RISK" wide>
        <motion.div {...slideMotion(isMobile, 0.15)} className="max-w-5xl mx-auto text-center">
          <H2 className="mb-8">How do you trust what you cannot see?</H2>
          <Body className="max-w-3xl mx-auto">
            Until now, watching an agent meant surveilling it: piping your most
            sensitive prompts and data into someone else's cloud. For anyone who
            guards what is theirs, that was never a choice. So most agents run
            unwatched, and trusted blindly, until the day one of them shouldn't have
            been.
          </Body>
          <div className="grid grid-cols-1 md:grid-cols-3 border rounded-md overflow-hidden bg-black mt-12 md:mt-16" style={{ borderColor: "#222222" }}>
            {[
              ["SURVEIL", "Pipe prompts and data outward"],
              ["TRUST BLINDLY", "Let the agent operate unwatched"],
              ["FIND OUT LATE", "Wait until a boundary is crossed"],
            ].map(([title, line], i) => (
              <motion.div
                key={title}
                className={`p-6 md:p-8 text-left ${i > 0 ? "md:border-l border-white/10" : ""}`}
                initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.12 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white font-medium mb-5">{title}</p>
                <p className="text-sm md:text-base text-white/55 font-light leading-relaxed">{line}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </HomeSlide>

      <SlideDivider />

      <HomeSlide number={3} label="INTRODUCING TARI" wide>
        <motion.div {...slideMotion(isMobile, 0.15)} className="max-w-6xl mx-auto text-center">
          <H2 className="mb-4">A credit bureau for the age of AI agents.</H2>
          <Body className="max-w-3xl mx-auto">
            TARI is an independent Trust &amp; Risk Index. It observes how an agent
            actually behaves: the moves it makes, the boundaries it keeps, the moment
            it begins to drift, and turns that into a single, honest measure of trust.
            As a credit score became the language of financial trust, TARI is becoming
            the language of agent trust.
          </Body>

          <TrustFilterVisual />

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
              <motion.div
                key={c.word}
                className="text-left"
                initial={{ opacity: 0, y: isMobile ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-sm tracking-[0.4em] text-white font-light mb-4">
                  {c.word}
                </div>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  {c.line}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </HomeSlide>

      <SlideDivider />

      <HomeSlide number={4} label="THE SOVEREIGN LINE" wide>
        <motion.div {...slideMotion(isMobile, 0.15)} className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 md:gap-16 items-center">
          <div>
            <H2 className="mb-8">It never reads a word you'd want kept private.</H2>
            <Body className="max-w-2xl">
              TARI watches behavior, not content. It sees that an agent acted, never
              what it said, wrote, or accessed. Your data, your secrets, your
              sovereignty never leave your walls. Trust you can verify, without
              exposure you cannot afford.
            </Body>
          </div>
          <div className="border rounded-md bg-black overflow-hidden" style={{ borderColor: "#222222" }}>
            {[
              ["Observed", "Tool calls · trajectories · boundary events"],
              ["Not observed", "Prompts · secrets · private documents"],
              ["Output", "A recomputable trust signal"],
            ].map(([title, line], i, arr) => (
              <div key={title} className={`px-6 md:px-8 py-6 ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(166,252,252,0.65)] font-mono mb-2">{title}</p>
                <p className="text-sm md:text-base text-white/65 font-light leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </HomeSlide>

      <SlideDivider />

      <HomeSlide number={5} label="PROOF" wide>
        <motion.div {...slideMotion(isMobile, 0.15)} className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
          <div>
            <H2 className="mb-8">This is not theoretical.</H2>
            <Body className="max-w-2xl">
              We gave a live AI agent a poisoned instruction, hidden where it wouldn't
              look twice. On its own, it took the bait: reached for a secret, disguised
              it, and moved to send it away. TARI caught the entire chain as it
              happened, and pointed to where the manipulation came from. It never saw
              the secret. It didn't need to.
            </Body>
          </div>
          <ProofLedger />
        </motion.div>
      </HomeSlide>

      <SlideDivider />

      <HomeSlide number={6} label="THE VISION" wide>
        <motion.div {...slideMotion(isMobile, 0.15)} className="max-w-5xl mx-auto text-center">
          <H2 className="mb-8">Trust is the infrastructure the agent economy is missing.</H2>
          <Body className="max-w-3xl mx-auto mb-12 md:mb-16">
            Every era of autonomy needed a new layer of trust before capital would
            flow into it. Credit bureaus unlocked lending. Ratings unlocked markets.
            As trillions of decisions move to autonomous agents, someone independent
            must certify which of them can be trusted. AMAI Labs is building that
            layer: neutral, verifiable, and built to outlast any single model.
          </Body>
          <VisionLadder />
        </motion.div>
      </HomeSlide>

      <SlideDivider />

      <HomeSlide number={7} label="TWO DOORS" wide>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="bg-black border rounded-xl p-7 md:p-10 flex flex-col min-h-[320px]"
            style={{ borderColor: "#222222" }}
            {...slideMotion(isMobile, 0.15)}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8">For institutions</p>
            <h3 className="text-2xl md:text-3xl font-light text-white leading-tight tracking-tight mb-8">
              Deploy agents you can prove you can trust.
            </h3>
            <div className="mt-auto pt-10">
              <a
                href="mailto:access@amai.net?subject=Request%20access"
                className="inline-block text-sm text-white/80 hover:text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded transition-all duration-300 uppercase tracking-[0.15em]"
              >
                Request access
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-black border rounded-xl p-7 md:p-10 flex flex-col min-h-[320px]"
            style={{ borderColor: "#222222" }}
            {...slideMotion(isMobile, 0.28)}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8">For builders</p>
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
            <div className="mt-auto">
              <Link
                to="/system-overview"
                className="inline-block text-sm text-white/80 hover:text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded transition-all duration-300 uppercase tracking-[0.15em]"
              >
                Read the docs
              </Link>
            </div>
          </motion.div>
        </div>
      </HomeSlide>

      <SlideDivider />

      <HomeSlide number={8} label="AMAI LABS">
        <motion.div {...slideMotion(isMobile, 0.15)} className="text-center max-w-4xl mx-auto">
          <H2 className="mb-8">We measure agent trust. We don't manufacture it.</H2>
          <Body className="max-w-2xl mx-auto">
            AMAI Labs builds the independent measurement layer for autonomous systems,
            so institutions, builders, and counterparties can verify behavior before
            they extend real money or real access.
          </Body>
        </motion.div>
      </HomeSlide>

      <SlideDivider />

      <HomeSlide number={9} label="INFRASTRUCTURE & RESEARCH">
        <motion.div {...slideMotion(isMobile, 0.15)} className="text-center space-y-4">
          <div className="text-sm tracking-[0.3em] uppercase text-white/60 font-light">
            AMAI Labs · Infrastructure &amp; Research
          </div>
          <p className="text-sm text-white/40 font-light">
            TARI · the Trust &amp; Risk Index
          </p>
          <p className="text-[11px] text-white/25 font-light pt-4">
            © 2026 AMAI Labs, Inc.
          </p>
        </motion.div>
      </HomeSlide>
    </div>
  );
};

export default HomeThesis;
