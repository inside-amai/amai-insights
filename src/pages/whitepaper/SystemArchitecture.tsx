import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import circuitBoard from '@/assets/circuit-board.jpg';

const SystemArchitecture = () => {
  return (
    <WhitepaperLayout
      eyebrow="Architecture"
      title="System Architecture"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={circuitBoard} 
            alt="System Architecture"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Sui-powered, four-layer stack with PTBs, zkLogin, and sovereign GPU clusters</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Overview of AMAI's four-layer system architecture built on the Sui blockchain with advanced features.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Architecture Layers</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Layer 1 - Sui Foundation:</strong> TODO: Core blockchain infrastructure and consensus</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Layer 2 - PTBs (Programmable Transaction Blocks):</strong> TODO: Transaction composition and execution</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Layer 3 - zkLogin Integration:</strong> TODO: Zero-knowledge authentication layer</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Layer 4 - Sovereign GPU Clusters:</strong> TODO: Distributed computing infrastructure</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Technical Components</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Detailed technical specifications of each architectural component and their interactions.
          </p>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-card-foreground mb-2">Architecture Benefits</h4>
            <p className="text-sm text-muted-foreground">
              TODO: How this four-layer architecture enables scalable, secure, and efficient autonomous agent operations.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default SystemArchitecture;