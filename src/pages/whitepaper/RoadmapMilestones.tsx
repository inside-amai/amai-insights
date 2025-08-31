import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const RoadmapMilestones = () => {
  return (
    <WhitepaperLayout
      eyebrow="Timeline"
      title="Roadmap & Milestones"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src="/lovable-uploads/9d46be81-0218-437e-b5e6-8c5bfdf67f64.png" 
            alt="Roadmap & Milestones"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-white">
          <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Live Alpha (today)</h3>
          
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Spin up a multi-agent swarm on devnet.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Connect your wallet through zkLogin and test real-time settlement.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Build with a plug-and-play kernel: modular Move contracts plus TypeScript SDK.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Forty early testers, zero critical crashes, sub-500 ms chat latency.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Q4 2025 — Trust & PTB Automation</h3>
          
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Bonded Trust alpha: on-chain oracle writes hourly trust scores to each Agent SBT.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>One-click PTB Builder SDK (v0.1) compiles and gas-simulates a full workflow inside the UI.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Q1 2026 — Swarm Main-net Launch</h3>
          
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Bond / Slash contract reaches general availability with one-click slash hook.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Skill-NFT registry mints KIP objects with lineage events for indexers.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Swarm Deployer alpha: verify cumulative trust, mint Swarm SBT and cluster avatar in one transaction.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Q2 2026 — Revenue Streams</h3>
          
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Royalty Router sends real-time splits to contributors; dashboards stream via WebSocket.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>State-channel Pay-Per-Compute beta: 10 ms ticks, fraud-proof timeout logic.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>LLM micro-service container with agent-specific embeddings via REST / gRPC.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. 2026+ — Enterprise-grade Operations</h3>
          
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Comprehensive RLS and authorization: wallet-scoped policies across profiles, agents, swarms and KIPs.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Monitoring and alerting stack: RPC latency, PTB failures and oracle lag to Grafana plus Discord hooks.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: '#A6FCFC' }}>•</span>
              <span>Full unit and integration test suite: Move tests, PTB simulations and end-to-end Cypress flows.</span>
            </li>
          </ul>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mt-8">
            <p className="text-gray-300 leading-relaxed">
              Looking ahead, every milestone tightens the feedback loop between agents, builders and participants, driving us toward a billion on-chain agents by 2030. Join the journey now and help shape the machine-first economy before it becomes the default.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default RoadmapMilestones;