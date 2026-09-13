import { useMemo, useRef, useState } from "react";

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

// viewBox geometry
const W = 900;
const H = 420;
const PAD = { top: 24, right: 24, bottom: 56, left: 56 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

const xScale = (score: number) =>
  PAD.left + ((score - X_MIN) / (X_MAX - X_MIN)) * PLOT_W;
const yScale = (pct: number) => PAD.top + PLOT_H - (pct / Y_MAX) * PLOT_H;

const pct = (count: number, total: number) => (count / total) * 100;

const steppedPath = (key: "uncompromised" | "compromised", total: number) => {
  let d = `M ${xScale(X_MIN)} ${yScale(0)}`;
  BINS.forEach((bin) => {
    const y = yScale(pct(bin[key], total));
    d += ` L ${xScale(bin.lower)} ${y} L ${xScale(bin.upper)} ${y}`;
  });
  d += ` L ${xScale(X_MAX)} ${yScale(0)} Z`;
  return d;
};

const steppedLine = (key: "uncompromised" | "compromised", total: number) => {
  let d = "";
  BINS.forEach((bin, i) => {
    const y = yScale(pct(bin[key], total));
    d += `${i === 0 ? "M" : " L"} ${xScale(bin.lower)} ${y} L ${xScale(bin.upper)} ${y}`;
  });
  return d;
};

const fmt = (n: number) => `${n.toFixed(1)}%`;

export const EvidenceDistribution = () => {
  const [active, setActive] = useState<number | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const paths = useMemo(
    () => ({
      unArea: steppedPath("uncompromised", UNCOMPROMISED_TOTAL),
      unLine: steppedLine("uncompromised", UNCOMPROMISED_TOTAL),
      coArea: steppedPath("compromised", COMPROMISED_TOTAL),
      coLine: steppedLine("compromised", COMPROMISED_TOTAL),
    }),
    []
  );

  const activeBin = active === null ? null : BINS[active];

  return (
    <div className="w-full">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-6 md:mb-8">
        <span className="inline-flex items-center gap-3 text-xs md:text-sm font-light tracking-wide text-white/70">
          <span
            className="h-px w-8"
            style={{ backgroundColor: AQUA }}
            aria-hidden
          />
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

      <div ref={wrapRef} className="relative w-full">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-[300px] sm:h-[360px] md:h-[400px] lg:h-[420px] overflow-visible"
          role="img"
          aria-label="Stepped distribution chart comparing TARI conduct scores of 383 uncompromised runs and 343 compromised runs across 25 point score bins from 550 to 850. Compromised runs concentrate between 575 and 650, while uncompromised runs concentrate between 750 and 850. The distributions overlap."
          onMouseLeave={() => setActive(null)}
        >
          {/* Y grid + labels */}
          {[0, 10, 20, 30, 40].map((v) => (
            <g key={v}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={yScale(v)}
                y2={yScale(v)}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={PAD.left - 12}
                y={yScale(v)}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-white/40"
                style={{ fontSize: 12, fontWeight: 300 }}
              >
                {v}%
              </text>
            </g>
          ))}

          {/* X ticks */}
          {TICKS.map((t) => (
            <g key={t}>
              <line
                x1={xScale(t)}
                x2={xScale(t)}
                y1={yScale(0)}
                y2={yScale(0) + 7}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={xScale(t)}
                y={yScale(0) + 26}
                textAnchor="middle"
                className="fill-white/45"
                style={{ fontSize: 12, fontWeight: 300 }}
              >
                {t}
              </text>
            </g>
          ))}

          {/* Axis labels */}
          <text
            x={PAD.left + PLOT_W / 2}
            y={H - 6}
            textAnchor="middle"
            className="fill-white/35"
            style={{ fontSize: 11, letterSpacing: "0.18em" }}
          >
            TARI CONDUCT SCORE
          </text>
          <text
            x={14}
            y={PAD.top + PLOT_H / 2}
            textAnchor="middle"
            transform={`rotate(-90 14 ${PAD.top + PLOT_H / 2})`}
            className="fill-white/35"
            style={{ fontSize: 11, letterSpacing: "0.18em" }}
          >
            SHARE OF EACH GROUP
          </text>

          {/* Active guide */}
          {activeBin && (
            <rect
              x={xScale(activeBin.lower)}
              y={PAD.top}
              width={xScale(activeBin.upper) - xScale(activeBin.lower)}
              height={PLOT_H}
              fill="rgba(255,255,255,0.05)"
            />
          )}
          {activeBin && (
            <line
              x1={xScale((activeBin.lower + activeBin.upper) / 2)}
              x2={xScale((activeBin.lower + activeBin.upper) / 2)}
              y1={PAD.top}
              y2={yScale(0)}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth={1}
              strokeDasharray="3 4"
              vectorEffect="non-scaling-stroke"
            />
          )}

          {/* Distributions */}
          <g className="animate-fade-in">
            <path d={paths.unArea} fill={AQUA} fillOpacity={0.14} />
            <path d={paths.coArea} fill={CORAL} fillOpacity={0.16} />
            <path
              d={paths.unLine}
              fill="none"
              stroke={AQUA}
              strokeWidth={1.6}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={paths.coLine}
              fill="none"
              stroke={CORAL}
              strokeWidth={1.6}
              strokeDasharray="6 4"
              vectorEffect="non-scaling-stroke"
            />
          </g>

          {/* Baseline */}
          <line
            x1={PAD.left}
            x2={W - PAD.right}
            y1={yScale(0)}
            y2={yScale(0)}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />

          {/* Hit areas */}
          {BINS.map((bin, i) => (
            <rect
              key={bin.lower}
              x={xScale(bin.lower)}
              y={PAD.top}
              width={xScale(bin.upper) - xScale(bin.lower)}
              height={PLOT_H}
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

        {/* Tooltip */}
        {activeBin && (
          <div
            className="pointer-events-none absolute top-2 z-20 w-[13.5rem] border border-white/12 bg-black/90 backdrop-blur-md px-4 py-3"
            style={{
              left: `${(((xScale((activeBin.lower + activeBin.upper) / 2) - PAD.left) / PLOT_W) * 100).toFixed(2)}%`,
              transform:
                active !== null && active > BINS.length / 2
                  ? "translateX(-100%)"
                  : "translateX(0)",
            }}
          >
            <div className="text-xs tracking-[0.2em] text-white/55 uppercase">
              {activeBin.lower}–{activeBin.upper - 1}
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className="text-xs font-light"
                  style={{ color: AQUA }}
                >
                  Uncompromised
                </span>
                <span className="text-xs font-light text-white/80 tabular-nums">
                  {activeBin.uncompromised} ·{" "}
                  {fmt(pct(activeBin.uncompromised, UNCOMPROMISED_TOTAL))}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-light" style={{ color: CORAL }}>
                  Compromised
                </span>
                <span className="text-xs font-light text-white/80 tabular-nums">
                  {activeBin.compromised} ·{" "}
                  {fmt(pct(activeBin.compromised, COMPROMISED_TOTAL))}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="mt-6 text-xs font-light text-white/40 leading-relaxed">
        Observed distributions shown from 550–850. Full TARI scale: 300–850.
      </p>

      {/* Study caption */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-xs md:text-sm font-mono tracking-wide text-white/60">
          AgentDojo <span className="text-white/30">·</span> GPT-4o{" "}
          <span className="text-white/30">·</span> 726 runs{" "}
          <span className="text-white/30">·</span> Four task suites
        </p>
        <p className="mt-4 text-sm md:text-base font-light text-white/55 leading-relaxed max-w-2xl">
          The distributions overlap. This measures discrimination on a benchmark,
          not prediction of real-world incidents.
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
              The uncompromised group includes benign runs and attacked runs
              where the injection did not succeed.
            </li>
            <li>Outcomes come from the benchmark labels.</li>
          </ul>
        )}
      </div>
    </div>
  );
};
