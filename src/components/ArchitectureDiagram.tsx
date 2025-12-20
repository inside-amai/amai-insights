import React from "react";
import { motion } from "framer-motion";

interface LayerProps {
  title: string;
  items: string[];
  isLast?: boolean;
}

const Layer: React.FC<LayerProps> = ({ title, items, isLast = false }) => (
  <div className="relative">
    {/* Layer Box */}
    <div className="border border-white/20 rounded-lg p-4 md:p-6 bg-black">
      <h4 className="text-sm md:text-base font-medium text-white tracking-tight mb-3">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="text-[10px] md:text-xs text-white/50 px-3 py-1.5 border border-white/10 rounded-full bg-white/[0.02]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    
    {/* Connector Line */}
    {!isLast && (
      <div className="flex justify-center py-3 md:py-4">
        <div className="w-px h-6 md:h-8 bg-white/20" />
      </div>
    )}
  </div>
);

const ArchitectureDiagram: React.FC = () => {
  const layers = [
    {
      title: "Identity Root",
      items: ["Immutable identifiers", "SBT-bound ownership", "Reputation state"],
    },
    {
      title: "Agent Engine Cluster",
      items: ["Kernelized intelligence modules (KIPs)", "Memory store", "Execution engine", "Permissioning & versioning"],
    },
    {
      title: "Bonded Treasury",
      items: ["Collateral", "Trust-weighted allocation", "Performance-based adjustments"],
    },
    {
      title: "Swarms",
      items: ["Shared context", "Delegated tasks", "Collective optimization"],
    },
    {
      title: "Computation & Settlement",
      items: ["Atomic Execution Bundles", "Deterministic settlement", "Performance verification"],
    },
  ];

  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
            System
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
            Architecture
          </h2>
          <p className="mt-4 text-white/50 text-sm max-w-lg mx-auto leading-relaxed text-center">
            A unified blueprint of AMAI's machine-first economic infrastructure.
          </p>

          {/* Economic Loop */}
          <div className="mt-10 flex flex-col items-center">
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">
              AMAI Economic Loop
            </h3>
            <div className="relative">
              {/* Main flow row */}
              <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-white/60">
                <span className="px-2 py-1 border border-white/20 rounded bg-white/[0.02]">Identity</span>
                <span className="text-white/30">→</span>
                <span className="px-2 py-1 border border-white/20 rounded bg-white/[0.02]">Trust</span>
                <span className="text-white/30">→</span>
                <span className="px-2 py-1 border border-white/20 rounded bg-white/[0.02]">Capital</span>
                <span className="text-white/30">→</span>
                <span className="px-2 py-1 border border-white/20 rounded bg-white/[0.02]">Execution</span>
                <span className="text-white/30">→</span>
                <span className="px-2 py-1 border border-white/20 rounded bg-white/[0.02]">Settlement</span>
              </div>
              {/* Loop back visualization - U-shaped path from Settlement back to Trust */}
              <div className="relative h-5 mt-1">
                {/* Left corner: curves up to Trust (positioned after Identity) */}
                <div className="absolute left-[72px] md:left-[88px] top-0 w-3 h-full border-l border-b border-white/20 rounded-bl-md" />
                {/* Bottom horizontal line with arrows */}
                <div className="absolute left-[84px] md:left-[100px] bottom-0 right-6 h-px bg-white/20" />
                {/* Direction arrows pointing left (Settlement → Trust) */}
                <span className="absolute left-[35%] -translate-x-1/2 bottom-[-3px] text-white/40 text-[10px]">←</span>
                <span className="absolute left-[55%] -translate-x-1/2 bottom-[-3px] text-white/40 text-[10px]">←</span>
                <span className="absolute left-[75%] -translate-x-1/2 bottom-[-3px] text-white/40 text-[10px]">←</span>
                {/* Right corner: curves down from Settlement */}
                <div className="absolute right-3 top-0 w-3 h-full border-r border-b border-white/20 rounded-br-md" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Diagram Container */}
        <div className="max-w-2xl mx-auto">
          {layers.map((layer, index) => (
            <Layer
              key={layer.title}
              title={layer.title}
              items={layer.items}
              isLast={index === layers.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
