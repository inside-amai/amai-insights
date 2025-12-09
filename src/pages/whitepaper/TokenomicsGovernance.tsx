import { WhitepaperLayout } from '@/components/WhitepaperLayout';

const TokenomicsGovernance = () => {
  return (
    <WhitepaperLayout
      eyebrow="Economics"
      title="Tokenomics & Governance"
    >
      <div className="space-y-8">

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Community-Driven Platform</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Token distribution model and governance structure for community participation.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Token Distribution</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="font-medium text-card-foreground">Community Rewards</span>
                <span className="text-2xl font-bold text-primary">35%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                <span className="font-medium text-card-foreground">Development</span>
                <span className="text-2xl font-bold text-secondary">25%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <span className="font-medium text-card-foreground">Partnerships</span>
                <span className="text-2xl font-bold text-accent">20%</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/10 border border-muted/20 rounded-lg">
                <span className="font-medium text-card-foreground">Team & Advisors</span>
                <span className="text-2xl font-bold text-muted-foreground">15%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <span className="font-medium text-card-foreground">Reserve Fund</span>
                <span className="text-2xl font-bold text-destructive">5%</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <div>
              <strong className="text-card-foreground">35% Community Rewards & Staking:</strong>
              <p className="text-sm mt-1">TODO: Community rewards and staking</p>
            </div>
            <div>
              <strong className="text-card-foreground">25% Development & Operations:</strong>
              <p className="text-sm mt-1">TODO: Development and operations</p>
            </div>
            <div>
              <strong className="text-card-foreground">20% Strategic Partnerships:</strong>
              <p className="text-sm mt-1">TODO: Strategic partnerships</p>
            </div>
            <div>
              <strong className="text-card-foreground">15% Team & Advisors:</strong>
              <p className="text-sm mt-1">TODO: Team and advisors</p>
            </div>
            <div>
              <strong className="text-card-foreground">5% Reserve Fund:</strong>
              <p className="text-sm mt-1">TODO: Reserve fund</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Governance Framework</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Governance mechanisms and voting procedures for platform decisions.
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-card-foreground mb-2">Proposal System</h4>
              <p className="text-sm text-muted-foreground">
                TODO: How community members can submit and vote on governance proposals.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-card-foreground mb-2">Voting Power</h4>
              <p className="text-sm text-muted-foreground">
                TODO: How voting power is calculated based on token holdings and staking.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-card-foreground mb-2">Implementation</h4>
              <p className="text-sm text-muted-foreground">
                TODO: Process for implementing approved proposals and community decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default TokenomicsGovernance;