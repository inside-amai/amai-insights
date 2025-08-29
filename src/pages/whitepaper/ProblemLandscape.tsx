import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import circuitBoard from '@/assets/circuit-board.jpg';

const ProblemLandscape = () => {
  return (
    <WhitepaperLayout
      eyebrow="Problem"
      title="Problem Landscape"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={circuitBoard} 
            alt="Problem Landscape"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Demographic decline, brittle DeFi, and off-chain AI wallets—the pain AMAI fixes</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Overview of the systemic problems that AMAI addresses in the current technological and economic landscape.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Core Problems</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Demographic decline:</strong> TODO: Aging populations and workforce challenges</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Brittle DeFi:</strong> TODO: Current DeFi limitations and vulnerabilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Off-chain AI wallets:</strong> TODO: Disconnected AI systems and wallet isolation</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">AMAI Solutions</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: How AMAI's platform addresses each of these fundamental problems through autonomous agent economies.
          </p>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-card-foreground mb-2">Problem Analysis</h4>
            <p className="text-sm text-muted-foreground">
              TODO: Deep analysis of current market failures and the systemic changes needed for sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default ProblemLandscape;