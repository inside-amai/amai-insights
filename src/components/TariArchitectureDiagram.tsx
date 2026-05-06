import { motion } from 'framer-motion';
import type { CSSProperties, ElementType } from 'react';
import {
  Bot,
  Shield,
  Brain,
  Gauge,
  Database,
  CheckCircle,
  XCircle,
} from 'lucide-react';

type Accent = 'neutral' | 'success' | 'destructive';

const NEUTRAL_STROKE = 'rgba(255,255,255,0.45)';
const NEUTRAL_FILL = 'rgba(255,255,255,0.7)';
const SUCCESS = 'rgba(52,211,153,0.6)';
const DESTRUCTIVE = 'rgba(239,68,68,0.6)';

const sectionTitleClass = 'text-xs font-semibold tracking-[0.18em] uppercase text-white/80 text-center';

const DataPillar = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="flex flex-col gap-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="h-1.5 w-10 rounded-full border border-white/20 bg-white/10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, delay: index * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
    <span className="max-w-[84px] text-center text-[9px] font-medium leading-tight text-white/50">{label}</span>
  </div>
);

const NodeBox = ({
  icon: Icon,
  label,
  sublabel,
  accent = 'neutral',
  className = '',
}: {
  icon: ElementType;
  label: string;
  sublabel?: string;
  accent?: Accent;
  glow?: boolean;
  className?: string;
}) => {
  const accentClasses =
    accent === 'destructive'
      ? 'border-red-500/40 bg-red-500/[0.04] text-red-400/90'
      : accent === 'success'
        ? 'border-emerald-500/40 bg-emerald-500/[0.04] text-emerald-400/90'
        : 'border-white/20 bg-white/[0.03] text-white/85';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`relative flex h-full w-full flex-col items-center justify-center rounded-xl border px-3 text-center ${accentClasses} ${className}`}
    >
      <Icon className="mb-2 h-5 w-5" />
      <div className="text-[11px] font-semibold tracking-[0.12em] uppercase">{label}</div>
      {sublabel ? <div className="mt-1 text-[9px] font-medium text-white/45">{sublabel}</div> : null}
    </motion.div>
  );
};

const layerTextStyle: CSSProperties = {
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
  letterSpacing: '0.18em',
  fontWeight: 600,
};

const placement = {
  agentTitle: { left: '0%', top: '2%', width: '22%' },
  agent: { left: '0%', top: '11%', width: '22%', height: '18%' },
  preflightLabel: { left: '0%', top: '42%', width: '22%' },
  sdk: { left: '0%', top: '54%', width: '22%', height: '20%' },

  engineTitle: { left: '28%', top: '2%', width: '18%' },
  pillars: { left: '28.5%', top: '10%', width: '17%' },
  engine: { left: '28%', top: '30%', width: '18%', height: '24%' },

  enforcementTitle: { left: '52%', top: '2%', width: '22%' },
  score: { left: '52%', top: '10%', width: '22%', height: '18%' },
  firewall: { left: '55%', top: '37.5%', width: '16%', height: '9%' },
  approved: { left: '52%', top: '59%', width: '10.5%', height: '22%' },
  slashed: { left: '63.5%', top: '59%', width: '10.5%', height: '22%' },

  bureauTitle: { left: '78%', top: '2%', width: '22%' },
  feedback: { left: '78%', top: '10%', width: '22%', height: '12%' },
  bureau: { left: '78%', top: '30%', width: '22%', height: '24%' },
} as const;

export default function TariArchitectureDiagram() {
  return (
    <div className="space-y-8">
      <div className="relative mx-auto w-full max-w-[1400px] aspect-[1400/460]">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1100 460"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Agent → Pre-flight intercept */}
          <motion.path
            d="M 121 133 V 168"
            stroke={NEUTRAL_STROKE}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <polygon points="115,162 127,162 121,174" fill={NEUTRAL_FILL} />

          {/* Pre-flight intercept → Zero-Trust SDK */}
          <motion.path
            d="M 121 206 V 242"
            stroke={NEUTRAL_STROKE}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <polygon points="115,236 127,236 121,248" fill={NEUTRAL_FILL} />

          {/* Evaluation: SDK right → Engine bottom center */}
          <motion.path
            d="M 242 294 H 407 V 248"
            stroke={NEUTRAL_STROKE}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <polygon points="402,256 412,256 407,246" fill={NEUTRAL_FILL} />

          {/* Enforcement: Engine right → Firewall left */}
          <motion.path
            d="M 506 193 H 599"
            stroke={NEUTRAL_STROKE}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <polygon points="593,187 605,193 593,199" fill={NEUTRAL_FILL} />

          {/* Score → Firewall vertical */}
          <motion.path
            d="M 693 129 V 173"
            stroke={NEUTRAL_STROKE}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />

          {/* Firewall fork → Approved / Slashed */}
          <motion.path
            d="M 693 213 V 240 H 630 V 271"
            stroke={SUCCESS}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <motion.path
            d="M 693 213 V 240 H 756 V 271"
            stroke={DESTRUCTIVE}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />

          {/* Firewall → Bureau (single ledger arrow) */}
          <motion.path
            d="M 781 193 H 854"
            stroke={NEUTRAL_STROKE}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <polygon points="850,187 862,193 850,199" fill={NEUTRAL_FILL} />

          {/* Labels */}
          <text x="121" y="195" textAnchor="middle" fontSize="9" style={{ ...layerTextStyle, fill: 'rgba(255,255,255,0.4)' }}>
            PRE-FLIGHT INTERCEPT
          </text>
          <text x="320" y="312" textAnchor="middle" fontSize="9" style={{ ...layerTextStyle, fill: 'rgba(255,255,255,0.4)' }}>
            EVALUATION
          </text>
          <text x="553" y="208" textAnchor="middle" fontSize="9" style={{ ...layerTextStyle, fill: 'rgba(255,255,255,0.4)' }}>
            ENFORCEMENT
          </text>
          <text x="820" y="208" textAnchor="middle" fontSize="9" style={{ ...layerTextStyle, fill: 'rgba(255,255,255,0.35)' }}>
            LEDGER
          </text>
        </svg>

        <div className="absolute" style={placement.agentTitle as CSSProperties}>
          <div className={sectionTitleClass}>Ingestion</div>
        </div>
        <div className="absolute" style={placement.engineTitle as CSSProperties}>
          <div className={sectionTitleClass}>TARI™ Engine</div>
        </div>
        <div className="absolute" style={placement.enforcementTitle as CSSProperties}>
          <div className={sectionTitleClass}>Enforcement</div>
        </div>
        <div className="absolute" style={placement.bureauTitle as CSSProperties}>
          <div className={sectionTitleClass}>Agent Bureau</div>
        </div>

        <div className="absolute" style={placement.agent as CSSProperties}>
          <NodeBox icon={Bot} label="Autonomous Agent" sublabel="Initiates Request" />
        </div>

        <div className="absolute" style={placement.sdk as CSSProperties}>
          <NodeBox icon={Shield} label="Zero-Trust SDK" sublabel="Cryptographic Gate" />
        </div>

        <div className="absolute flex items-start justify-between" style={placement.pillars as CSSProperties}>
          <DataPillar label="Intent & Blast Radius" />
          <DataPillar label="Industry Guardrails" />
          <DataPillar label="Immutable Ledger" />
        </div>

        <div className="absolute" style={placement.engine as CSSProperties}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="relative flex h-full w-full flex-col items-center justify-center rounded-[20px] border-2 border-white/30 bg-white/[0.04] text-center"
          >
            <motion.div
              className="absolute inset-0 rounded-[20px] border border-white/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Brain className="mb-3 h-8 w-8 text-white/85" />
            <div className="text-[13px] font-bold tracking-[0.12em] text-white">TARI™ TRUST ENGINE</div>
            <div className="mt-2 text-[10px] font-medium tracking-[0.14em] text-white/45 uppercase">Milliseconds Latency</div>
          </motion.div>
        </div>

        <div className="absolute" style={placement.score as CSSProperties}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex h-full w-full flex-col items-center justify-center rounded-[18px] border border-white/20 bg-white/[0.03] text-center"
          >
            <Gauge className="mb-2 h-5 w-5 text-white/80" />
            <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">Score Output</div>
            <div className="mt-2 text-[20px] font-black tracking-[0.08em] text-white">
              TARI: 780
            </div>
          </motion.div>
        </div>

        <div className="absolute" style={placement.firewall as CSSProperties}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex h-full w-full items-center justify-center rounded-xl border border-white/20 bg-white/[0.04] text-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85">Interceptor</span>
          </motion.div>
        </div>

        <div className="absolute" style={placement.approved as CSSProperties}>
          <NodeBox icon={CheckCircle} label="Approved" sublabel="Target Infra" accent="success" />
        </div>

        <div className="absolute" style={placement.slashed as CSSProperties}>
          <NodeBox icon={XCircle} label="Slashed" sublabel="Kill Switch" accent="destructive" />
        </div>

        <div className="absolute" style={placement.feedback as CSSProperties}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-white/25 bg-transparent text-center"
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/65">Continuous Feedback Loop</div>
            <div className="mt-2 text-[8px] font-medium text-white/40">All outcomes → Immutable Record</div>
          </motion.div>
        </div>

        <div className="absolute" style={placement.bureau as CSSProperties}>
          <NodeBox icon={Database} label="Agent Bureau" sublabel="Global Credit Ledger of Autonomous Behavior" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="-mt-2 rounded-xl border border-white/10 p-3 text-[10px] text-white/45"
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-5 bg-white/60" />
            <span>Data stream (real-time)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded border border-emerald-500/50 bg-emerald-500/[0.06]" />
            <span>Execution approved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded border border-red-500/50 bg-red-500/[0.06]" />
            <span>Request slashed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded border border-white/30 bg-white/[0.06]" />
            <span>Processing node</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
