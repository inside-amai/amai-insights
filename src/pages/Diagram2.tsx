import React, { useRef } from "react";
import { PasswordGate } from "@/components/PasswordGate";

const NVIDIA = "#76B900";
const AMAI = "#14B8B0";
const MUTED = "#9CA3AF";
const WHITE = "#FFFFFF";
const BG = "#0a0a0a";

const MONO = "ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace";
const SANS = "Inter, ui-sans-serif, system-ui, sans-serif";

interface BoxProps {
  x: number;
  y: number;
  w: number;
  h: number;
  stroke: string;
  title: string;
  sub?: string;
}

const Box: React.FC<BoxProps> = ({ x, y, w, h, stroke, title, sub }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill="none" stroke={stroke} strokeWidth={1.5} />
    <text
      x={x + w / 2}
      y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
      textAnchor="middle"
      fontFamily={MONO}
      fontSize={12}
      fill={WHITE}
    >
      {title}
    </text>
    {sub && (
      <text
        x={x + w / 2}
        y={y + h / 2 + 12}
        textAnchor="middle"
        fontFamily={MONO}
        fontSize={10}
        fill={MUTED}
      >
        {sub}
      </text>
    )}
  </g>
);

const ArrowDef = () => (
  <defs>
    <marker id="arrL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={MUTED} />
    </marker>
    <marker id="arrTeal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={AMAI} />
    </marker>
    <marker id="arrGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={NVIDIA} />
    </marker>
  </defs>
);

export const PartnershipDiagram: React.FC<{ idForExport?: string }> = ({ idForExport }) => {
  // Layout
  const W = 1200;
  const H = 500;

  // Columns
  const col1X = 80;
  const col2X = 470;
  const col3X = 860;
  const boxW = 240;
  const boxH = 70;

  const rowYs = [140, 240, 340];

  // Column 1 (NVIDIA)
  const col1Boxes = [
    { title: "Nemoclaw", sub: "" },
    { title: "NeMo Guardrails", sub: "" },
    { title: "NeMo Microservices", sub: "" },
  ];
  // Column 2 (AMAI integration) — order aligned to spec mapping
  // Row1: Zero-Trust SDK <-> Nemoclaw (agent spawn)
  // Row2: NeMo Guardrails Plugin <-> NeMo Framework (3rd party catalog)
  // Row3: TARI Interceptor <-> NeMo Microservices (network edge)
  const col2Boxes = [
    { title: "Zero-Trust SDK", sub: "" },
    { title: "NeMo Guardrails Plugin", sub: "" },
    { title: "TARI Interceptor", sub: "" },
  ];
  const arrowLabels = ["agent spawn", "3rd party catalog", "network edge"];

  // Column 3 (Bureau)
  const bureauX = col3X;
  const bureauY = rowYs[0] - 5;
  const bureauW = 260;
  const bureauH = rowYs[2] + boxH - rowYs[0] + 10;
  const bureauRows = [
    "Global Ledger",
    "TARI™ Score Engine (300–850)",
    "Cross-vendor Reputation Lookup",
  ];

  return (
    <svg
      id={idForExport}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      style={{ maxWidth: W, height: "auto", display: "block" }}
    >
      <ArrowDef />

      {/* Column headers */}
      <text x={col1X + boxW / 2} y={95} textAnchor="middle" fontFamily={MONO} fontSize={11} fill={WHITE} letterSpacing={2}>
        NVIDIA NEMO STACK
      </text>
      <text x={col2X + boxW / 2} y={95} textAnchor="middle" fontFamily={MONO} fontSize={11} fill={WHITE} letterSpacing={2}>
        AMAI INTEGRATION LAYER
      </text>
      <text x={bureauX + bureauW / 2} y={95} textAnchor="middle" fontFamily={MONO} fontSize={11} fill={WHITE} letterSpacing={2}>
        AMAI BUREAU (CLOUD)
      </text>

      {/* Column 1 boxes */}
      {col1Boxes.map((b, i) => (
        <Box key={`c1-${i}`} x={col1X} y={rowYs[i]} w={boxW} h={boxH} stroke={NVIDIA} title={b.title} sub={b.sub} />
      ))}

      {/* Column 2 boxes */}
      {col2Boxes.map((b, i) => (
        <Box key={`c2-${i}`} x={col2X} y={rowYs[i]} w={boxW} h={boxH} stroke={AMAI} title={b.title} sub={b.sub} />
      ))}

      {/* Horizontal arrows: col2 -> col1 (left pointing) */}
      {rowYs.map((y, i) => {
        const cy = y + boxH / 2;
        const x1 = col2X - 4;
        const x2 = col1X + boxW + 4;
        const mx = (x1 + x2) / 2;
        return (
          <g key={`arr-${i}`}>
            <line x1={x1} y1={cy} x2={x2} y2={cy} stroke={MUTED} strokeWidth={1} markerEnd="url(#arrL)" />
            <text x={mx} y={cy - 6} textAnchor="middle" fontFamily={SANS} fontSize={10} fill={MUTED}>
              {arrowLabels[i]}
            </text>
          </g>
        );
      })}

      {/* Column 3: single Bureau container with 3 stacked rows */}
      <rect x={bureauX} y={bureauY} width={bureauW} height={bureauH} fill="none" stroke={AMAI} strokeWidth={1.5} />
      {bureauRows.map((label, i) => {
        const rowH = bureauH / 3;
        const cy = bureauY + rowH * i + rowH / 2 + 4;
        return (
          <g key={`bureau-${i}`}>
            {i > 0 && (
              <line
                x1={bureauX + 12}
                y1={bureauY + rowH * i}
                x2={bureauX + bureauW - 12}
                y2={bureauY + rowH * i}
                stroke={AMAI}
                strokeOpacity={0.4}
                strokeWidth={0.5}
              />
            )}
            <text x={bureauX + bureauW / 2} y={cy} textAnchor="middle" fontFamily={MONO} fontSize={12} fill={WHITE}>
              {label}
            </text>
          </g>
        );
      })}

      {/* Top curved arrow — Behavioral telemetry (left to right) */}
      {(() => {
        const sx = col2X + boxW / 2;
        const sy = rowYs[0] - 20;
        const ex = bureauX + bureauW / 2;
        const ey = rowYs[0] - 20;
        const path = `M ${sx} ${sy} C ${sx + 100} ${sy - 50}, ${ex - 100} ${ey - 50}, ${ex} ${ey}`;
        return (
          <g>
            <path d={path} fill="none" stroke={AMAI} strokeWidth={1} markerEnd="url(#arrTeal)" />
            <text x={(sx + ex) / 2} y={sy - 40} textAnchor="middle" fontFamily={SANS} fontSize={11} fill={AMAI}>
              Behavioral telemetry
            </text>
          </g>
        );
      })()}

      {/* Bottom curved arrow — TARI score + enforcement (right to left) */}
      {(() => {
        const sx = bureauX + bureauW / 2;
        const sy = rowYs[2] + boxH + 25;
        const ex = col2X + boxW / 2;
        const ey = rowYs[2] + boxH + 25;
        const path = `M ${sx} ${sy} C ${sx - 100} ${sy + 50}, ${ex + 100} ${ey + 50}, ${ex} ${ey}`;
        return (
          <g>
            <path d={path} fill="none" stroke={NVIDIA} strokeWidth={1} markerEnd="url(#arrGreen)" />
            <text x={(sx + ex) / 2} y={sy + 50} textAnchor="middle" fontFamily={SANS} fontSize={11} fill={NVIDIA}>
              TARI score + enforcement decision
            </text>
          </g>
        );
      })()}
    </svg>
  );
};

const Diagram2: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  const downloadSVG = () => {
    const svg = wrapRef.current?.querySelector("svg");
    if (!svg) return;
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const source = '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "amai-nvidia-architecture.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <PasswordGate storageKey="diagram-auth" title="Partnership Diagram" subtitle="Internal access only">
      <div className="min-h-screen w-full" style={{ background: BG }}>
        <div className="max-w-[1280px] mx-auto px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-mono">
                NVIDIA × AMAI · PARTNERSHIP ARCHITECTURE
              </div>
              <h1 className="mt-2 text-2xl text-white font-light">Integration topology</h1>
            </div>
            <button
              onClick={downloadSVG}
              className="text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 transition-colors"
            >
              Download SVG
            </button>
          </div>

          <div ref={wrapRef} className="border border-white/5 p-6" style={{ background: BG }}>
            <PartnershipDiagram />
          </div>

          <p className="mt-6 text-center text-xs text-white/50 max-w-2xl mx-auto leading-relaxed">
            AMAI installs into NeMo at three points. One ledger. Three primitives. Enterprise-deployable from day one.
          </p>
        </div>
      </div>
    </PasswordGate>
  );
};

export default Diagram2;
