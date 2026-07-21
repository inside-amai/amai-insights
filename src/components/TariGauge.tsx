import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

/**
 * TARI™ Gauge — sophisticated FICO-style score dial.
 * Semicircular arc from 300 → 850, animated on scroll into view.
 */
export const TariGauge = ({ score = 812 }: { score?: number }) => {
  const gaugeRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<SVGGElement>(null);
  const isInView = useInView(gaugeRef, { once: false, amount: 0.4 });

  const MIN = 300;
  const MAX = 850;
  const clamped = Math.max(MIN, Math.min(MAX, score));
  const pct = (clamped - MIN) / (MAX - MIN);

  // Arc geometry — half circle, 180° sweep
  const size = 520;                 // viewBox width
  const cx = size / 2;
  const cy = size / 2 + 30;         // shift down so bottom is trimmed
  const r = 200;
  const stroke = 14;

  // arc from 180° (left) → 360°/0° (right), top half
  const polar = (angleDeg: number, radius = r) => {
    const a = (Math.PI * angleDeg) / 180;
    return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) };
  };

  const start = polar(180);
  const end = polar(360);
  const arcPath = `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`;

  // Full arc length for stroke-dashoffset animation
  const arcLen = Math.PI * r;

  // Tick marks at score labels
  const ticks = [300, 450, 600, 750, 850];

  // Needle position — fixed at the center dot, pivots from 300 toward the score
  const needleSweep = pct * 180;
  const needleTip = polar(180, r - 4);
  const needleBase1 = polar(270, 6);
  const needleBase2 = polar(90, 6);

  useEffect(() => {
    const needle = needleRef.current;
    if (!needle) return;

    const controls = animate(0, isInView ? needleSweep : 0, {
      duration: isInView ? 2.2 : 0.4,
      ease: [0.16, 1, 0.3, 1],
      delay: isInView ? 0.4 : 0,
      onUpdate: (latest) => {
        needle.setAttribute("transform", `rotate(${latest} ${cx} ${cy})`);
      },
    });

    return () => controls.stop();
  }, [cx, cy, isInView, needleSweep]);

  // Tier label
  const tier =
    clamped >= 800 ? "EXCELLENT" :
    clamped >= 740 ? "Very Good" :
    clamped >= 670 ? "Good" :
    clamped >= 580 ? "Fair" : "Poor";

  return (
    <div ref={gaugeRef} className="relative w-full max-w-[520px] mx-auto">
      <svg
        viewBox={`0 0 ${size} ${size * 0.62}`}
        className="w-full h-auto overflow-visible"
        aria-label={`TARI score ${clamped} out of ${MAX}`}
      >
        <defs>
          {/* Arc gradient — deep red → amber → emerald → cyan */}
          <linearGradient id="tari-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b23a3a" />
            <stop offset="35%" stopColor="#c8a24a" />
            <stop offset="70%" stopColor="#4ea67a" />
            <stop offset="100%" stopColor="#a6fcfc" />
          </linearGradient>
          <radialGradient id="tari-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(166,252,252,0.18)" />
            <stop offset="100%" stopColor="rgba(166,252,252,0)" />
          </radialGradient>
          <filter id="tari-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Center soft glow */}
        <circle cx={cx} cy={cy} r={r - 30} fill="url(#tari-center-glow)" />

        {/* Track (unfilled arc) */}
        <path
          d={arcPath}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
          strokeLinecap="round"
        />

        {/* Filled arc — animates in */}
        <motion.path
          d={arcPath}
          fill="none"
          stroke="url(#tari-arc)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={arcLen}
          initial={{ strokeDashoffset: arcLen }}
          whileInView={{ strokeDashoffset: arcLen * (1 - pct) }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          filter="url(#tari-glow)"
        />

        {/* Fine inner tick ring */}
        {Array.from({ length: 55 }).map((_, i) => {
          const a = 180 + (i / 54) * 180;
          const p1 = polar(a, r - stroke - 6);
          const p2 = polar(a, r - stroke - (i % 5 === 0 ? 16 : 10));
          return (
            <line
              key={i}
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth={i % 5 === 0 ? 1.2 : 0.6}
            />
          );
        })}

        {/* Numeric tick labels */}
        {ticks.map((t) => {
          const a = 180 + ((t - MIN) / (MAX - MIN)) * 180;
          const p = polar(a, r + 26);
          return (
            <text
              key={t}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white/40"
              style={{ fontSize: 11, fontWeight: 300, letterSpacing: 1 }}
            >
              {t}
            </text>
          );
        })}

        {/* Needle — stays anchored at the center dot and pivots up to the final score */}
        <g ref={needleRef} transform={`rotate(0 ${cx} ${cy})`}>
          <polygon
            points={`${needleTip.x},${needleTip.y} ${needleBase1.x},${needleBase1.y} ${needleBase2.x},${needleBase2.y}`}
            fill="rgba(255,255,255,0.95)"
            filter="url(#tari-glow)"
          />
        </g>
        <circle cx={cx} cy={cy} r={9} fill="#0a0a0a" stroke="rgba(255,255,255,0.6)" strokeWidth={1.2} />
        <circle cx={cx} cy={cy} r={3} fill="rgba(166,252,252,0.9)" />

        {/* Corner marks — small brackets outside arc endpoints */}
        <g stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none">
          <path d={`M ${start.x - 8} ${start.y - 20} L ${start.x - 8} ${start.y - 8} L ${start.x + 4} ${start.y - 8}`} />
          <path d={`M ${end.x + 8} ${end.y - 20} L ${end.x + 8} ${end.y - 8} L ${end.x - 4} ${end.y - 8}`} />
        </g>
      </svg>

      {/* Center readout — overlaid, absolute so it sits inside the arc */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none pt-[4%]">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 font-light"
        >
          TARI™ Score
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 text-6xl md:text-7xl font-light tabular-nums text-white leading-none tracking-tight"
          style={{ textShadow: "0 0 40px rgba(166,252,252,0.25)" }}
        >
          {clamped}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-2 flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.35em] font-light"
        >
          <span className="h-px w-6 bg-white/30" />
          <span className="text-white/70">{tier}</span>
          <span className="h-px w-6 bg-white/30" />
        </motion.div>
      </div>
    </div>
  );
};
