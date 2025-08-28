import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import circuitBoard from '@/assets/circuit-board.jpg';

const TechnicalFoundation = () => {
  return (
    <WhitepaperLayout
      eyebrow="Architecture"
      title="Technical Foundation"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={circuitBoard} 
            alt="Technical Architecture"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Built on Sui Blockchain</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Technical overview of the Sui blockchain integration and smart contract architecture.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Core Technologies</h3>
          
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-card-foreground">Sui Move Modules:</strong>
                <p className="text-sm mt-1">TODO: Core blockchain functionality</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-card-foreground">dApp Kit Integration:</strong>
                <p className="text-sm mt-1">TODO: Frontend connectivity</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-card-foreground">Object Model:</strong>
                <p className="text-sm mt-1">TODO: Data structure and storage</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-card-foreground">Consensus Layer:</strong>
                <p className="text-sm mt-1">TODO: Transaction validation</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <div>
                <strong className="text-card-foreground">Parallel Execution:</strong>
                <p className="text-sm mt-1">TODO: High-performance processing</p>
              </div>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Smart Contract Architecture</h3>
          
          <div className="bg-muted/20 border border-muted/30 rounded-lg p-6">
            <pre className="text-sm text-muted-foreground overflow-x-auto">
              <code>{`// TODO: Sample Move code structure
module amai::platform {
    // Core platform functionality
    // TODO: Add actual implementation
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Performance & Scalability</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Details about the platform's performance characteristics, scalability solutions, and optimization strategies.
          </p>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default TechnicalFoundation;