import { useState } from "react";

type Bin = {
  lower: number;
  upper: number;
  uncompromised: number;
  compromised: number;
};

const BINS: Bin[] = [
  { lower: 550, upper: 575, uncompromised: 5, compromised: 18 },
  { lower: 575, upper: 600, uncompromised: 21, compromised: 61 },
  { lower: 600, upper: 625, uncompromised: 10, compromised: 95 },
  { lower: 625, upper: 650, uncompromised: 5, compromised: 31 },
  { lower: 650, upper: 675, uncompromised: 16, compromised: 16 },
  { lower: 675, upper: 700, uncompromised: 10, compromised: 3 },
  { lower: 700, upper: 725, uncompromised: 13, compromised: 2 },
  { lower: 725, upper: 750, uncompromised: 4, compromised: 20 },
  { lower: 750, upper: 775, uncompromised: 72, compromised: 62 },
  { lower: 775, upper: 800, uncompromised: 19, compromised: 19 },
  { lower: 800, upper: 825, uncompromised: 62, compromised: 9 },
  { lower: 825, upper: 850, uncompromised: 146, compromised: 7 },
];

const UNCOMPROMISED_TOTAL = 383;
const COMPROMISED_TOTAL = 343;

const AQUA = "#8EDAD5";
const CORAL = "#DF827C";

const X_MIN = 550;
const X_MAX = 850;
const Y_MAX = 40;

const TICKS = [550, 600, 650, 700, 750, 800, 850];

const pct = (count: number, total: number) => (count / total) * 100;
const fmt = (n: number) => `${n.toFixed(1)}%`;

const A11Y_SUMMARY =
  "Stepped distribution chart of TARI conduct scores in 25 point bins from 550 to 850. Compromised runs (343) concentrate between 575 and 650, peaking at 27.7 percent in the 600 to 624 bin. Uncompromised runs (383) concentrate between 750 and 850, peaking at 38.1 percent in the 825 to 849 bin. The two distributions overlap, most visibly between 650 and 800.";

type Dims = {
  w: number;
  h: number;
  pad: { top: number; right: number; bottom: number; left: number };
  fs: number;
  axisFs: number;
};

const DESKTOP: Dims = {
  w: 900,
  h: 420,
  pad: { top: 26, right: 24, bottom: 58, left: 58 },
  fs: 12,
  axisFs: 11,
};

const MOBILE: Dims = {
  w: 400,
  h: 420,
  pad: { top: 20, right: 10, bottom: 54, left: 44 },
  fs: 12,
  axisFs: 11,
};

const Plot = ({
  dims,
  active,
  setActive,
}: {
  dims: Dims;
  active: number | null;
  setActive: (i: number | null) => void;
}) => {
  const { w, h, pad, fs, axisFs } = dims;
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;
  const x = (score: number) =>
    pad.left + ((score - X_MIN) / (X_MAX - X_MIN)) * plotW;
  const y = (p: number) => pad.top + plotH - (p / Y_MAX) * plotH;

  const area = (key: "uncompromised" | "compromised", total: number) => {
    let d = `M ${x(X_MIN)} ${y(0)}`;
    BINS.forEach((bin) => {
      const yy = y(pct(bin[key], total));
      d += ` L ${x(bin.lower)} ${yy} L ${x(bin.upper)} ${yy}`;
    });
    return d + ` L ${x(X_MAX)} ${y(0)} Z`;
  };
  const line = (key: "uncompromised" | "compromised", total: number) => {
    let d = "";
    BINS.forEach((bin, i) => {
      const yy = y(pct(bin[key], total));
      d += `${i === 0 ? "M" : " L"} ${x(bin.lower)} ${yy} L ${x(bin.upper)} ${yy}`;
    });
    return d;
  };

  const activeBin = active === null ? null : BINS[active];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-full"
      role="img"
      aria-label={A11Y_SUMMARY}
      onMouseLeave={() => setActive(null)}
    >
      {[0, 10, 20, 30, 40].map((v) => (
        <g key={v}>
          <line
            x1={pad.left}
            x2={w - pad.right}
            y1={y(v)}
            y2={y(v)}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <text
            x={pad.left - 10}
            y={y(v)}
            textAnchor="end"
            dominantBaseline="middle"
            className="fill-white/40"
            style={{ fontSize: fs, fontWeight: 300 }}
          >
            {v}%
          </text>
        </g>
      ))}

      {TICKS.map((t) => (
        <g key={t}>
          <line
            x1={x(t)}
            x2={x(t)}
            y1={y(0)}
            y2={y(0) + 6}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <text
            x={x(t)}
            y={y(0) + 22}
            textAnchor="middle"
            className="fill-white/45"
            style={{ fontSize: fs, fontWeight: 300 }}
          >
            {t}
          </text>
        </g>
      ))}

      <text
        x={pad.left + plotW / 2}
        y={h - 8}
        textAnchor="middle"
        className="fill-white/35"
        style={{ fontSize: axisFs, letterSpacing: "0.18em" }}
      >
        TARI CONDUCT SCORE
      </text>
      <text
        x={13}
        y={pad.top + plotH / 2}
        textAnchor="middle"
        transform={`rotate(-90 13 ${pad.top + plotH / 2})`}
        className="fill-white/35"
        style={{ fontSize: axisFs, letterSpacing: "0.18em" }}
      >
        SHARE OF EACH GROUP
      </text>

      {activeBin && (
        <>
          <rect
            x={x(activeBin.lower)}
            y={pad.top}
            width={x(activeBin.upper) - x(activeBin.lower)}
            height={plotH}
            fill="rgba(255,255,255,0.05)"
          />
          <line
            x1={x((activeBin.lower + activeBin.upper) / 2)}
            x2={x((activeBin.lower + activeBin.upper) / 2)}
            y1={pad.top}
            y2={y(0)}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={1}
            strokeDasharray="3 4"
            vectorEffect="non-scaling-stroke"
          />
        </>
      )}

      <path d={area("uncompromised", UNCOMPROMISED_TOTAL)} fill={AQUA} fillOpacity={0.14} />
      <path d={area("compromised", COMPROMISED_TOTAL)} fill={CORAL} fillOpacity={0.16} />
      <path
        d={line("uncompromised", UNCOMPROMISED_TOTAL)}
        fill="none"
        stroke={AQUA}
        strokeWidth={1.6}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={line("compromised", COMPROMISED_TOTAL)}
        fill="none"
        stroke={CORAL}
        strokeWidth={1.6}
        strokeDasharray="6 4"
        vectorEffect="non-scaling-stroke"
      />

      <line
        x1={pad.left}
        x2={w - pad.right}
        y1={y(0)}
        y2={y(0)}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />

      {BINS.map((bin, i) => (
        <rect
          key={bin.lower}
          x={x(bin.lower)}
          y={pad.top}
          width={x(bin.upper) - x(bin.lower)}
          height={plotH}
          fill="transparent"
          style={{ cursor: "crosshair" }}
          onMouseEnter={() => setActive(i)}
          onTouchStart={() => setActive(i)}
          onFocus={() => setActive(i)}
          onBlur={() => setActive(null)}
          tabIndex={0}
          role="button"
          aria-label={`${bin.lower} to ${bin.upper - 1}: uncompromised ${bin.uncompromised} runs, ${fmt(pct(bin.uncompromised, UNCOMPROMISED_TOTAL))}; compromised ${bin.compromised} runs, ${fmt(pct(bin.compromised, COMPROMISED_TOTAL))}`}
        />
      ))}
    </svg>
  );
};

export const EvidenceDistribution = () => {
  const [active, setActive] = useState<number | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const activeBin = active === null ? null : BINS[active];
  const centerFraction =
    activeBin === null
      ? 0
      : ((activeBin.lower + activeBin.upper) / 2 - X_MIN) / (X_MAX - X_MIN);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-6 md:mb-8">
        <span className="inline-flex items-center gap-3 text-xs md:text-sm font-light tracking-wide text-white/70">
          <span className="h-px w-8" style={{ backgroundColor: AQUA }} aria-hidden />
          Uncompromised <span className="text-white/35">·</span> 383 runs
        </span>
        <span className="inline-flex items-center gap-3 text-xs md:text-sm font-light tracking-wide text-white/70">
          <span
            className="h-px w-8 border-t border-dashed"
            style={{ borderColor: CORAL }}
            aria-hidden
          />
          Compromised <span className="text-white/35">·</span> 343 runs
        </span>
      </div>

      <div className="relative w-full">
        <div className="hidden md:block h-[400px] lg:h-[420px]">
          <Plot dims={DESKTOP} active={active} setActive={setActive} />
        </div>
        <div className="md:hidden h-[380px]">
          <Plot dims={MOBILE} active={active} setActive={setActive} />
        </div>

        {activeBin && (
          <div
            className="pointer-events-none absolute top-1 z-20 w-[13.5rem] max-w-[80%] border border-white/10 bg-black/90 backdrop-blur-md px-4 py-3"
            style={{
              left: `${(6 + centerFraction * 88).toFixed(2)}%`,
              transform: centerFraction > 0.55 ? "translateX(-100%)" : "translateX(0)",
            }}
          >
            <div className="text-xs tracking-[0.2em] text-white/55 uppercase">
              {activeBin.lower}–{activeBin.upper - 1}
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-light" style={{ color: AQUA }}>
                  Uncompromised
                </span>
                <span className="text-xs font-light text-white/80 tabular-nums">
                  {activeBin.uncompromised} · {fmt(pct(activeBin.uncompromised, UNCOMPROMISED_TOTAL))}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-light" style={{ color: CORAL }}>
                  Compromised
                </span>
                <span className="text-xs font-light text-white/80 tabular-nums">
                  {activeBin.compromised} · {fmt(pct(activeBin.compromised, COMPROMISED_TOTAL))}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="sr-only">{A11Y_SUMMARY}</p>

      <p className="mt-6 text-xs font-light text-white/40 leading-relaxed">
        Observed distributions shown from 550–850. Full TARI scale: 300–850.
      </p>

      <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-xs md:text-sm font-mono tracking-wide text-white/60">
          AgentDojo <span className="text-white/30">·</span> GPT-4o{" "}
          <span className="text-white/30">·</span> 726 runs{" "}
          <span className="text-white/30">·</span> Four task suites
        </p>
        <p className="mt-4 text-sm md:text-base font-light text-white/55 leading-relaxed max-w-2xl">
          The distributions overlap. This measures discrimination on a benchmark, not
          prediction of real-world incidents.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="/methodology"
            className="inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/60 pb-1"
          >
            Explore the methodology<span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => setDetailsOpen((v) => !v)}
            aria-expanded={detailsOpen}
            className="text-xs tracking-[0.2em] uppercase text-white/45 hover:text-white/80 transition-colors duration-300"
          >
            Study details {detailsOpen ? "−" : "+"}
          </button>
        </div>

        {detailsOpen && (
          <ul className="mt-6 space-y-2 text-sm font-light text-white/50 leading-relaxed max-w-2xl">
            <li>Model: gpt-4o-2024-05-13.</li>
            <li>Benchmark attack: AgentDojo important_instructions.</li>
            <li>Suites: workspace, banking, slack, travel.</li>
            <li>97 benign runs and 629 attacked runs.</li>
            <li>
              The uncompromised group includes benign runs and attacked runs where the
              injection did not succeed.
            </li>
            <li>Outcomes come from the benchmark labels.</li>
          </ul>
        )}
      </div>
    </div>
  );
};
