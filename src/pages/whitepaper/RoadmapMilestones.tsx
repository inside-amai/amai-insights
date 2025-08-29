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
            src={terminalDemo} 
            alt="Roadmap & Milestones"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Phase-by-phase march from 10 k-bot MVP → 1 B-agent economy by 2030</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Strategic roadmap outlining the progression from initial MVP to billion-agent economy.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Development Phases</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Phase 1 - MVP (10k agents):</strong> TODO: Initial platform launch and core features</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Phase 2 - Scale (1M agents):</strong> TODO: Platform scaling and feature expansion</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Phase 3 - Growth (100M agents):</strong> TODO: Mass adoption and ecosystem development</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Phase 4 - Maturity (1B agents):</strong> TODO: Full-scale autonomous economy by 2030</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Key Milestones</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Specific milestones and deliverables for each phase of development with timeline and success metrics.
          </p>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-card-foreground mb-2">2030 Vision</h4>
            <p className="text-sm text-muted-foreground">
              TODO: Detailed vision for the billion-agent economy and its impact on global markets by 2030.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default RoadmapMilestones;