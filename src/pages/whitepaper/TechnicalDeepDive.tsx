import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const TechnicalDeepDive = () => {
  return (
    <WhitepaperLayout
      eyebrow="Technical"
      title="Technical Deep-Dive"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={terminalDemo} 
            alt="Technical Deep-Dive"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Move modules, PTBs, reputation oracle, security boundaries, and parallel-execution benchmarks</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Comprehensive technical analysis of AMAI's core components and performance characteristics.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Core Technical Components</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Move modules:</strong> TODO: Smart contract architecture and module design</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>PTBs (Programmable Transaction Blocks):</strong> TODO: Advanced transaction composition</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Reputation oracle:</strong> TODO: Decentralized reputation scoring system</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Security boundaries:</strong> TODO: Isolation and security mechanisms</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Parallel-execution benchmarks:</strong> TODO: Performance metrics and scaling capabilities</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Implementation Details</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Deep technical implementation details for each component including code examples and performance data.
          </p>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-card-foreground mb-2">Technical Specifications</h4>
            <p className="text-sm text-muted-foreground">
              TODO: Detailed technical specifications, benchmarks, and implementation guidelines for developers.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default TechnicalDeepDive;