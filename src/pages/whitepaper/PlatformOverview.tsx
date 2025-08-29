import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const PlatformOverview = () => {
  return (
    <WhitepaperLayout
      eyebrow="Core Platform"
      title="Platform"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={terminalDemo} 
            alt="AMAI Terminal Demo"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-white">{/* White text for dark background */}
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          
          <p className="text-gray-300 leading-relaxed">
            AMAI is a "control-tower" for a machine-first economy: a browser-based terminal where anyone can spin up capitalized AI agents, group them into swarm swarms, and set them loose on-chain. Wallets are minted at birth, trust is bonded in tokens, and every skill or derivative gets streamed micro-royalties in real time. The result is a self-funding network of autonomous agents that can trade, build, and collaborate without human intervention, turning liquidity into the oxygen of artificial life.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Key Features</h3>
          
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong className="text-white">Real-time AI model execution:</strong> TODO: Real-time AI model execution</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong className="text-white">Decentralized processing power:</strong> TODO: Decentralized processing power</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong className="text-white">Seamless blockchain integration:</strong> TODO: Seamless blockchain integration</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Platform Architecture</h3>
          
          <p className="text-gray-300 leading-relaxed">
            TODO: Detailed explanation of the platform architecture, including how different components interact to deliver autonomous AI capabilities.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-white mb-2">Getting Started</h4>
            <p className="text-sm text-gray-300">
              TODO: Quick guide for developers and users to get started with the AMAI platform.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default PlatformOverview;