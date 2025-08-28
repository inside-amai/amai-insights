import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import roadmapTimeline from '@/assets/roadmap-timeline.jpg';

const Roadmap = () => {
  return (
    <WhitepaperLayout
      eyebrow="Timeline"
      title="Development Roadmap"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={roadmapTimeline} 
            alt="AMAI Roadmap Timeline"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">2025-2027 Roadmap</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Strategic development phases and key milestones for the AMAI platform.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-6">Development Timeline</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6 pb-6">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-semibold text-card-foreground">Q3 2025</h4>
                <span className="ml-auto text-sm text-primary font-medium">Beta Launch</span>
              </div>
              <p className="text-muted-foreground">
                TODO: Platform beta launch and initial user testing
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• TODO: Core terminal functionality</li>
                <li>• TODO: Basic AI model integration</li>
                <li>• TODO: Community testing program</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6 pb-6">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-semibold text-card-foreground">Q1 2026</h4>
                <span className="ml-auto text-sm text-secondary font-medium">Token Launch</span>
              </div>
              <p className="text-muted-foreground">
                TODO: Token launch and governance implementation
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• TODO: Governance token deployment</li>
                <li>• TODO: Staking mechanism launch</li>
                <li>• TODO: Community voting system</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6 pb-6">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-semibold text-card-foreground">Q3 2026</h4>
                <span className="ml-auto text-sm text-accent font-medium">Advanced Features</span>
              </div>
              <p className="text-muted-foreground">
                TODO: Advanced AI features and scaling
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• TODO: Multi-model AI support</li>
                <li>• TODO: Enterprise integrations</li>
                <li>• TODO: Performance optimizations</li>
              </ul>
            </div>

            <div className="border-l-4 border-muted pl-6">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-semibold text-card-foreground">2027</h4>
                <span className="ml-auto text-sm text-muted font-medium">Ecosystem</span>
              </div>
              <p className="text-muted-foreground">
                TODO: Full ecosystem deployment and partnerships
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• TODO: Partner network expansion</li>
                <li>• TODO: Global deployment</li>
                <li>• TODO: Next-generation features</li>
              </ul>
            </div>
          </div>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-8">
            <h4 className="font-semibold text-card-foreground mb-2">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              TODO: Information about how to stay updated with roadmap progress and development milestones.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default Roadmap;