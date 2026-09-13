import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Bespoke AMAI mechanism diagram.
 * COLLECT (elliptical pool)  ->  CONVERT (operator tower)  ->  DISTRIBUTE (holders)
 * Only the fee stream moves. The pool form stays in place.
 */

const AQUA = "#7dd3d8";

const Defs = ({ idp }: { idp: string }) => (
  <defs>
    <radialGradient id={`${idp}-core`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor={AQUA} stopOpacity="0.55" />
      <stop offset="100%" stopColor={AQUA} stopOpacity="0" />
    </radialGradient>
    <linearGradient id={`${idp}-fee`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.45" />
    </linearGradient>
    <linearGradient id={`${idp}-out`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor={AQUA} stopOpacity="0.65" />
      <stop offset="100%" stopColor={AQUA} stopOpacity="0.25" />
    </linearGradient>
    <filter id={`${idp}-glow`} x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="4" result="b" />
      <feMerge>
        <feMergeNode in="b" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

type StageProps = { stage: number; still: boolean };

const draw = (on: boolean, delay = 0) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: on ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
  transition: { duration: on ? 1.1 : 0.5, delay: on ? delay : 0, ease: [0.16, 1, 0.3, 1] as const },
});

const Label = ({ x, y, children, anchor = "middle" }: { x: number; y: number; children: string; anchor?: string }) => (
  <text
    x={x}
    y={y}
    textAnchor={anchor}
    className="font-mono"
    fill="rgba(255,255,255,0.55)"
    fontSize="11"
    letterSpacing="2.4"
  >
    {children.toUpperCase()}
  </text>
);

/* ---------------- operator tower (shared silhouette) ---------------- */
const OperatorTower = ({ idp, cx, top, bottom, mid, half = 44, lit }: {
  idp: string; cx: number; top: number; bottom: number; mid: number; half?: number; lit: boolean;
}) => {
  const bevel = 34;
  const outer = `${cx - half},${top + bevel} ${cx},${top} ${cx + half},${top + bevel} ${cx + half},${bottom - bevel} ${cx},${bottom} ${cx - half},${bottom - bevel}`;
  const ih = half - 13;
  const inner = `${cx - ih},${top + bevel + 10} ${cx},${top + 12} ${cx + ih},${top + bevel + 10} ${cx + ih},${bottom - bevel - 10} ${cx},${bottom - 12} ${cx - ih},${bottom - bevel - 10}`;
  return (
    <g>
      <circle cx={cx} cy={mid} r={half * 2.6} fill={`url(#${idp}-core)`} opacity={lit ? 0.85 : 0.35} />
      <polygon points={outer} fill="#040404" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
      <polygon points={inner} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* fine structural detail */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={cx - ih}
          x2={cx + ih}
          y1={top + bevel + 22 + i * ((bottom - top - bevel * 2 - 44) / 5)}
          y2={top + bevel + 22 + i * ((bottom - top - bevel * 2 - 44) / 5)}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
      ))}
      {/* illuminated passage through the centre */}
      <rect x={cx - half - 1} y={mid - 7} width={half * 2 + 2} height="14" fill="#000" />
      <motion.rect
        x={cx - half - 1}
        y={mid - 7}
        width={half * 2 + 2}
        height="14"
        fill={AQUA}
        initial={{ opacity: 0.12 }}
        animate={{ opacity: lit ? 0.4 : 0.12 }}
        transition={{ duration: 0.8 }}
      />
      <line x1={cx - half - 1} x2={cx + half + 1} y1={mid - 7} y2={mid - 7} stroke={AQUA} strokeOpacity="0.5" strokeWidth="1" />
      <line x1={cx - half - 1} x2={cx + half + 1} y1={mid + 7} y2={mid + 7} stroke={AQUA} strokeOpacity="0.5" strokeWidth="1" />
    </g>
  );
};

/* ---------------- horizontal (desktop) ---------------- */
const Horizontal = ({ stage, still }: StageProps) => {
  const idp = "oph";
  const feePath = "M 300 250 C 350 250, 370 250, 416 250";
  const outPath = "M 544 250 L 648 250";
  const holders = [118, 184, 250, 316, 382];
  const s1 = still || stage >= 1;
  const s2 = still || stage >= 2;
  const s3 = still || stage >= 3;

  return (
    <svg viewBox="0 0 900 470" className="w-full h-auto" role="img" aria-label="A pool earns fees, an operator converts them into stock tokens, and a share is distributed to holders.">
      <Defs idp={idp} />

      {/* ---- COLLECT : the pool ---- */}
      <g>
        <ellipse cx="170" cy="250" rx="132" ry="52" fill="none" stroke="rgba(255,255,255,0.22)" />
        <ellipse cx="170" cy="250" rx="96" ry="36" fill="none" stroke="rgba(255,255,255,0.11)" />
        <ellipse cx="170" cy="250" rx="58" ry="21" fill="none" stroke="rgba(255,255,255,0.07)" />
        <ellipse cx="170" cy="262" rx="132" ry="52" fill="none" stroke="rgba(255,255,255,0.07)" />
        <path id={`${idp}-orbit`} d="M 302 250 A 132 52 0 1 1 38 250 A 132 52 0 1 1 302 250" fill="none" stroke="none" />
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} r="2.4" fill="#fff" opacity="0.85" filter={`url(#${idp}-glow)`}>
            {!still && (
              <animateMotion dur="7s" begin={`${i * 1.75}s`} repeatCount="indefinite" rotate="auto">
                <mpath href={`#${idp}-orbit`} />
              </animateMotion>
            )}
          </circle>
        ))}
        <Label x={170} y={330}>Pool</Label>
      </g>

      {/* ---- fee stream ---- */}
      <g>
        <path id={`${idp}-fee-p`} d={feePath} fill="none" stroke="none" />
        <motion.path d={feePath} fill="none" stroke={`url(#${idp}-fee)`} strokeWidth="1.5" {...draw(s1)} />
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: s1 ? 1 : 0 }} transition={{ duration: 0.6, delay: s1 ? 0.5 : 0 }}>
          {[0, 1, 2].map((i) => (
            <circle key={i} r="2.2" fill="#fff" filter={`url(#${idp}-glow)`}>
              {!still && (
                <animateMotion dur="2.6s" begin={`${i * 0.85}s`} repeatCount="indefinite">
                  <mpath href={`#${idp}-fee-p`} />
                </animateMotion>
              )}
            </circle>
          ))}
        </motion.g>
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: s1 ? 1 : 0 }} transition={{ duration: 0.6 }}>
          <Label x={358} y={228}>Trading fees</Label>
        </motion.g>
      </g>

      {/* ---- CONVERT : the operator ---- */}
      <OperatorTower idp={idp} cx={480} top={110} bottom={390} mid={250} half={64} lit={s2} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: s2 ? 1 : 0 }} transition={{ duration: 0.6 }}>
        <Label x={480} y={434}>Operator</Label>
      </motion.g>

      {/* ---- outgoing stream ---- */}
      <g>
        <path id={`${idp}-out-p`} d={outPath} fill="none" stroke="none" />
        <motion.path d={outPath} fill="none" stroke={`url(#${idp}-out)`} strokeWidth="1.5" {...draw(s2, 0.35)} />
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: s2 ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          {[0, 1].map((i) => (
            <rect key={i} width="5" height="5" y="-2.5" x="-2.5" fill={AQUA} filter={`url(#${idp}-glow)`}>
              {!still && (
                <animateMotion dur="2.2s" begin={`${i * 1.1}s`} repeatCount="indefinite">
                  <mpath href={`#${idp}-out-p`} />
                </animateMotion>
              )}
            </rect>
          ))}
        </motion.g>
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: s2 ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Label x={595} y={228} anchor="start">Stock tokens</Label>
        </motion.g>
      </g>

      {/* ---- DISTRIBUTE : holders ---- */}
      <g>
        <motion.line x1="648" x2="648" y1="118" y2="382" stroke={AQUA} strokeOpacity="0.3" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: s3 ? 1 : 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} />
        {holders.map((y, i) => {
          const d = `M 648 ${y} L 800 ${y}`;
          return (
            <g key={y}>
              <motion.path id={`${idp}-b${i}`} d={d} fill="none" stroke={AQUA} strokeOpacity="0.35" strokeWidth="1"
                {...draw(s3, 0.25 + i * 0.09)} />
              <motion.g initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: s3 ? 1 : 0, scale: s3 ? 1 : 0.4 }}
                transition={{ duration: 0.5, delay: s3 ? 0.7 + i * 0.09 : 0, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: `${800 / 900}`, originY: 0 }}>
                <circle cx="800" cy={y} r="9" fill="none" stroke={AQUA} strokeOpacity="0.35" />
                <circle cx="800" cy={y} r="3" fill={AQUA} filter={`url(#${idp}-glow)`} />
              </motion.g>
              {!still && (
                <circle r="2.6" fill={AQUA} opacity={s3 ? 0.9 : 0}>
                  <animateMotion dur="2.4s" begin={`${0.3 + i * 0.18}s`} repeatCount="indefinite">
                    <mpath href={`#${idp}-b${i}`} />
                  </animateMotion>
                </circle>
              )}
            </g>
          );
        })}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: s3 ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <Label x={800} y={434}>Holders</Label>
        </motion.g>
      </g>
    </svg>
  );
};

/* ---------------- vertical (mobile) ---------------- */
const Vertical = ({ stage, still }: StageProps) => {
  const idp = "opv";
  const feePath = "M 200 168 L 200 250";
  const outPath = "M 200 470 L 200 540";
  const holders = [70, 145, 220, 295, 330 - 0];
  const xs = [60, 130, 200, 270, 340];
  const s1 = still || stage >= 1;
  const s2 = still || stage >= 2;
  const s3 = still || stage >= 3;

  return (
    <svg viewBox="0 0 400 700" className="w-full h-auto" role="img" aria-label="A pool earns fees, an operator converts them into stock tokens, and a share is distributed to holders.">
      <Defs idp={idp} />

      {/* pool */}
      <g>
        <ellipse cx="200" cy="100" rx="128" ry="48" fill="none" stroke="rgba(255,255,255,0.22)" />
        <ellipse cx="200" cy="100" rx="90" ry="33" fill="none" stroke="rgba(255,255,255,0.11)" />
        <ellipse cx="200" cy="112" rx="128" ry="48" fill="none" stroke="rgba(255,255,255,0.07)" />
        <path id={`${idp}-orbit`} d="M 328 100 A 128 48 0 1 1 72 100 A 128 48 0 1 1 328 100" fill="none" stroke="none" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="2.4" fill="#fff" opacity="0.85" filter={`url(#${idp}-glow)`}>
            {!still && (
              <animateMotion dur="7s" begin={`${i * 2.3}s`} repeatCount="indefinite">
                <mpath href={`#${idp}-orbit`} />
              </animateMotion>
            )}
          </circle>
        ))}
        <Label x={200} y={40}>Pool</Label>
      </g>

      {/* fee stream */}
      <g>
        <path id={`${idp}-fee-p`} d={feePath} fill="none" stroke="none" />
        <motion.path d={feePath} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" {...draw(s1)} />
        {!still && (
          <circle r="2.2" fill="#fff" opacity={s1 ? 1 : 0} filter={`url(#${idp}-glow)`}>
            <animateMotion dur="2.4s" repeatCount="indefinite">
              <mpath href={`#${idp}-fee-p`} />
            </animateMotion>
          </circle>
        )}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: s1 ? 1 : 0 }} transition={{ duration: 0.6 }}>
          <Label x={216} y={214} anchor="start">Trading fees</Label>
        </motion.g>
      </g>

      {/* operator */}
      <OperatorTower idp={idp} cx={200} top={250} bottom={470} mid={360} half={52} lit={s2} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: s2 ? 1 : 0 }} transition={{ duration: 0.6 }}>
        <Label x={124} y={500} anchor="end">Operator</Label>
      </motion.g>

      {/* outgoing */}
      <g>
        <path id={`${idp}-out-p`} d={outPath} fill="none" stroke="none" />
        <motion.path d={outPath} fill="none" stroke={AQUA} strokeOpacity="0.5" strokeWidth="1.5" {...draw(s2, 0.35)} />
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: s2 ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Label x={216} y={528} anchor="start">Stock tokens</Label>
        </motion.g>
      </g>

      {/* holders */}
      <g>
        <motion.line x1={xs[0]} x2={xs[4]} y1="540" y2="540" stroke={AQUA} strokeOpacity="0.3" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: s3 ? 1 : 0 }} transition={{ duration: 0.7 }} />
        {xs.map((x, i) => {
          const d = `M ${x} 540 L ${x} 610`;
          return (
            <g key={x}>
              <motion.path id={`${idp}-b${i}`} d={d} fill="none" stroke={AQUA} strokeOpacity="0.35" strokeWidth="1" {...draw(s3, 0.2 + i * 0.08)} />
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: s3 ? 1 : 0 }} transition={{ duration: 0.5, delay: s3 ? 0.6 + i * 0.08 : 0 }}>
                <circle cx={x} cy="618" r="8" fill="none" stroke={AQUA} strokeOpacity="0.35" />
                <circle cx={x} cy="618" r="3" fill={AQUA} filter={`url(#${idp}-glow)`} />
              </motion.g>
              {!still && (
                <circle r="2.4" fill={AQUA} opacity={s3 ? 0.9 : 0}>
                  <animateMotion dur="2.4s" begin={`${0.2 + i * 0.16}s`} repeatCount="indefinite">
                    <mpath href={`#${idp}-b${i}`} />
                  </animateMotion>
                </circle>
              )}
            </g>
          );
        })}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: s3 ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
          <Label x={200} y={664}>Holders</Label>
        </motion.g>
      </g>
    </svg>
  );
};

export const OperatorFlowDiagram = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const reduce = useReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    let cancelled = false;
    const timers: number[] = [];
    const run = () => {
      if (cancelled) return;
      setStage(0);
      timers.push(window.setTimeout(() => !cancelled && setStage(1), 400));
      timers.push(window.setTimeout(() => !cancelled && setStage(2), 2600));
      timers.push(window.setTimeout(() => !cancelled && setStage(3), 4900));
      timers.push(window.setTimeout(run, 11500));
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [inView, reduce]);

  const still = !!reduce;

  return (
    <div ref={ref} dir="ltr" className="w-full">
      <div className="hidden md:block">
        <Horizontal stage={still ? 3 : stage} still={still} />
      </div>
      <div className="md:hidden">
        <Vertical stage={still ? 3 : stage} still={still} />
      </div>
    </div>
  );
};
