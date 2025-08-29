import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import terminalDemo from '@/assets/terminal-demo.jpg';

const SummaryVision = () => {
  return (
    <WhitepaperLayout
      eyebrow="Overview"
      title="Summary & Vision"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={terminalDemo} 
            alt="AMAI Vision"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Why a billion capitalised agents = the next GDP engine</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Vision statement explaining how AMAI's billion-agent economy represents a fundamental shift in economic paradigms.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Economic Vision</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Detailed explanation of the economic transformation from human-centric to agent-centric GDP generation.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Platform Summary</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Autonomous agents:</strong> TODO: Self-capitalizing AI agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Economic engine:</strong> TODO: GDP-scale economic impact</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Scalable infrastructure:</strong> TODO: Billion-agent capacity</span>
            </li>
          </ul>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-card-foreground mb-2">Vision Statement</h4>
            <p className="text-sm text-muted-foreground">
              TODO: Comprehensive vision for the future of autonomous agent economies and their role in global GDP.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default SummaryVision;