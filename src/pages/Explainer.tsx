import { ExplainerHero } from '@/components/ExplainerHero';
import { ExplainerSection } from '@/components/ExplainerSection';
import { ExplainerFAQ } from '@/components/ExplainerFAQ';
import terminalDemo from '@/assets/terminal-demo.jpg';
import circuitBoard from '@/assets/circuit-board.jpg';
import roadmapTimeline from '@/assets/roadmap-timeline.jpg';
import tokenChart from '@/assets/token-chart.jpg';

const Explainer = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <ExplainerHero />
      
      {/* Platform Overview */}
      <ExplainerSection
        eyebrow="Platform Overview"
        title="Revolutionary AI Terminal"
        content={
          <div className="space-y-4">
            <p>
              TODO: Brief description of the AMAI platform and its core capabilities for autonomous AI operations.
            </p>
            <p>
              TODO: Highlight key features that make the terminal unique in the AI landscape.
            </p>
            <ul className="space-y-2 text-base">
              <li>• TODO: Real-time AI model execution</li>
              <li>• TODO: Decentralized processing power</li>
              <li>• TODO: Seamless blockchain integration</li>
            </ul>
          </div>
        }
        imageSrc={terminalDemo}
        imageAlt="AMAI Terminal Demo"
        overlayColor="rgba(37, 99, 235, 0.2)"
      />

      {/* Technical Stack */}
      <ExplainerSection
        eyebrow="Technical Foundation"
        title="Built on Sui Blockchain"
        content={
          <div className="space-y-4">
            <p>
              TODO: Technical overview of the Sui blockchain integration and smart contract architecture.
            </p>
            <ul className="space-y-3 text-base">
              <li>• <strong>Sui Move Modules:</strong> TODO: Core blockchain functionality</li>
              <li>• <strong>dApp Kit Integration:</strong> TODO: Frontend connectivity</li>
              <li>• <strong>Object Model:</strong> TODO: Data structure and storage</li>
              <li>• <strong>Consensus Layer:</strong> TODO: Transaction validation</li>
              <li>• <strong>Parallel Execution:</strong> TODO: High-performance processing</li>
            </ul>
          </div>
        }
        imageSrc={circuitBoard}
        imageAlt="Technical Architecture"
        reverse={true}
        overlayColor="rgba(147, 51, 234, 0.2)"
      />

      {/* Roadmap */}
      <ExplainerSection
        eyebrow="Development Timeline"
        title="2025-2027 Roadmap"
        content={
          <div className="space-y-4">
            <p>
              TODO: Strategic development phases and key milestones for the AMAI platform.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Q3 2025</h4>
                <p className="text-sm">TODO: Platform beta launch and initial user testing</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Q1 2026</h4>
                <p className="text-sm">TODO: Token launch and governance implementation</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Q3 2026</h4>
                <p className="text-sm">TODO: Advanced AI features and scaling</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">2027</h4>
                <p className="text-sm">TODO: Full ecosystem deployment and partnerships</p>
              </div>
            </div>
          </div>
        }
        imageSrc={roadmapTimeline}
        imageAlt="AMAI Roadmap Timeline"
        overlayColor="rgba(34, 197, 94, 0.2)"
      />

      {/* Token & Governance */}
      <ExplainerSection
        eyebrow="Tokenomics & Governance"
        title="Community-Driven Platform"
        content={
          <div className="space-y-4">
            <p>
              TODO: Token distribution model and governance structure for community participation.
            </p>
            <ul className="space-y-2 text-base">
              <li>• <strong>35%</strong> TODO: Community rewards and staking</li>
              <li>• <strong>25%</strong> TODO: Development and operations</li>
              <li>• <strong>20%</strong> TODO: Strategic partnerships</li>
              <li>• <strong>15%</strong> TODO: Team and advisors</li>
              <li>• <strong>5%</strong> TODO: Reserve fund</li>
            </ul>
            <p className="text-sm">
              TODO: Governance mechanisms and voting procedures for platform decisions.
            </p>
          </div>
        }
        imageSrc={tokenChart}
        imageAlt="Token Distribution Chart"
        reverse={true}
        overlayColor="rgba(239, 68, 68, 0.2)"
      />

      <ExplainerFAQ />
    </div>
  );
};

export default Explainer;