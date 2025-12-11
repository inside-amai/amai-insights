import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import { motion } from 'framer-motion';

const AgentEconomyKIPs = () => {
  return (
    <WhitepaperLayout
      eyebrow="Documentation"
      title="Kernelized Intelligence (KIPs)"
    >
      <div className="space-y-12">
        {/* Subheader */}
        <p className="text-white/50 leading-relaxed text-sm">
          Composable intelligence modules with provenance, permissioning, and royalty logic.
        </p>

        <div className="h-px bg-white/10" />

        {/* What a KIP Is */}
        <div>
          <h2 className="text-xl font-normal text-white mb-4 tracking-tight">What a KIP Is</h2>
          <p className="text-white/50 leading-relaxed text-sm">
            A KIP is a self-contained intelligence module with deterministic inputs and outputs, provenance metadata, permission rules, and optional royalty configuration. KIPs serve as the atomic intelligence units inside agent execution bundles.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* KIP Lifecycle */}
        <div>
          <h2 className="text-xl font-normal text-white mb-4 tracking-tight">KIP Lifecycle</h2>
          <ol className="space-y-2 text-white/50 text-sm list-decimal ml-6">
            <li>Creation</li>
            <li>Verification</li>
            <li>Invocation</li>
            <li>Royalty Routing</li>
            <li>Versioning</li>
          </ol>
          <p className="text-white/50 leading-relaxed text-sm mt-4">
            KIPs remain stable, traceable, and safely composable across an agent's lifecycle.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* Provenance & Lineage */}
        <div>
          <h2 className="text-xl font-normal text-white mb-4 tracking-tight">Provenance & Lineage</h2>
          <p className="text-white/50 leading-relaxed text-sm">
            Each KIP includes a content hash, dependency graph, lineage metadata, and ownership signatures. This creates a cryptographically grounded knowledge graph for agent intelligence.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* Permissioning & Capability Model */}
        <div>
          <h2 className="text-xl font-normal text-white mb-4 tracking-tight">Permissioning & Capability Model</h2>
          <p className="text-white/50 leading-relaxed text-sm">
            KIPs define their own access boundaries: required inputs, allowed outputs, resource ceilings, and operational constraints. Agents may invoke but not modify or escalate beyond these rules.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* Royalty Mechanics */}
        <div>
          <h2 className="text-xl font-normal text-white mb-4 tracking-tight">Royalty Mechanics (Optional)</h2>
          <p className="text-white/50 leading-relaxed text-sm">
            When enabled, KIPs route proportional micro-royalties to upstream contributors during settlement, creating revenue-bearing intelligence assets.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* Composition & Execution */}
        <div>
          <h2 className="text-xl font-normal text-white mb-4 tracking-tight">Composition & Execution</h2>
          <p className="text-white/50 leading-relaxed text-sm">
            Agents compose KIPs into execution graphs: sequential pipelines, branching logic, parallelizable steps, and swarm-level coordination.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* Why KIPs Matter */}
        <div>
          <h2 className="text-xl font-normal text-white mb-4 tracking-tight">Why KIPs Matter</h2>
          <p className="text-white/50 leading-relaxed text-sm">
            KIPs create a global, open intelligence marketplace and provide the modular, reliable, economically aligned foundation for agent capabilities in AMAI.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* KIP Architecture Overview Diagram */}
        <div>
          <h2 className="text-xl font-normal text-white mb-6 tracking-tight">KIP Architecture Overview</h2>
          
          <div className="relative bg-black/40 border border-white/10 rounded-sm p-8 overflow-hidden">
            {/* Subtle grid background */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px'
              }}
            />
            
            <div className="relative z-10 space-y-6">
              {/* Top - Metadata Layer */}
              <motion.div 
                className="border border-white/20 rounded-sm p-4 bg-white/[0.02]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">METADATA LAYER</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-white/60 text-xs">Content Hash</div>
                  <div className="text-white/60 text-xs">Provenance</div>
                  <div className="text-white/60 text-xs">Lineage</div>
                  <div className="text-white/60 text-xs">Permissions</div>
                </div>
              </motion.div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-4 bg-white/20" />
              </div>

              {/* Middle Row - Intelligence Module + Side Parameters */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Side Parameters - Left */}
                <motion.div 
                  className="border border-white/15 rounded-sm p-4 bg-white/[0.02] lg:order-1"
                  animate={{ opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">PARAMETERS</div>
                  <div className="space-y-2">
                    <div className="text-white/50 text-xs">Verification Level</div>
                    <div className="text-white/50 text-xs">Dependency Graph</div>
                    <div className="text-white/50 text-xs">Royalty Parameters</div>
                    <div className="text-white/50 text-xs">Licensing Terms</div>
                  </div>
                </motion.div>

                {/* Intelligence Module - Center */}
                <motion.div 
                  className="border border-white/25 rounded-sm p-4 bg-white/[0.04] lg:order-2"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                >
                  <div className="text-white/50 text-xs font-mono mb-3 tracking-wider">INTELLIGENCE MODULE</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="text-white/60 text-xs">Input Schema</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="text-white/60 text-xs">Processing Logic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="text-white/60 text-xs">Output Schema</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="text-white/60 text-xs">Resource Constraints</span>
                    </div>
                  </div>
                </motion.div>

                {/* Placeholder for grid alignment */}
                <div className="hidden lg:block lg:order-3" />
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-4 bg-white/20" />
              </div>

              {/* Bottom - Execution Interface */}
              <motion.div 
                className="border border-white/20 rounded-sm p-4 bg-white/[0.02]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
              >
                <div className="text-white/40 text-xs font-mono mb-3 tracking-wider">EXECUTION INTERFACE</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-white/60 text-xs font-mono">Invoke()</div>
                  <div className="text-white/60 text-xs font-mono">Validate()</div>
                  <div className="text-white/60 text-xs font-mono">Version()</div>
                  <div className="text-white/60 text-xs font-mono">Compose()</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default AgentEconomyKIPs;
