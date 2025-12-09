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
    <div className="border border-white/20 rounded-lg p-4 md:p-6 bg-white/[0.02]">
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
      items: ["AMAI + SUI collateral", "Trust-weighted allocation", "Performance-based adjustments"],
    },
    {
      title: "Swarms",
      items: ["Shared context", "Delegated tasks", "Collective optimization"],
    },
    {
      title: "Computation & Settlement",
      items: ["Programmable Transaction Blocks", "Deterministic settlement", "Performance verification"],
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
          <p className="mt-4 text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
            A unified blueprint of AMAI's machine-first economic infrastructure.
          </p>
        </motion.div>

        {/* Diagram Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Layer
                title={layer.title}
                items={layer.items}
                isLast={index === layers.length - 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
