import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import tokenChart from '@/assets/token-chart.jpg';

const TokenGovernanceRisk = () => {
  return (
    <WhitepaperLayout
      eyebrow="Tokenomics"
      title="Token, Governance & Risk"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={tokenChart} 
            alt="Token, Governance & Risk"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Utility-only AMAI token, burn mechanics, circuit-breaker governance, key risks</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Comprehensive overview of AMAI tokenomics, governance structure, and risk management framework.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">AMAI Token</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Utility-only design:</strong> TODO: Token utility and use cases within the platform</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Burn mechanics:</strong> TODO: Deflationary mechanisms and token burn schedule</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Token distribution:</strong> TODO: Initial distribution and vesting schedules</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Governance Framework</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Circuit-breaker governance:</strong> TODO: Emergency governance mechanisms</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Voting mechanisms:</strong> TODO: Proposal submission and voting processes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Stakeholder representation:</strong> TODO: Community and developer governance roles</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Risk Management</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Key risks including technical, regulatory, and market risks with mitigation strategies.
          </p>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-card-foreground mb-2">Risk Assessment</h4>
            <p className="text-sm text-muted-foreground">
              TODO: Comprehensive risk analysis and contingency planning for platform sustainability.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default TokenGovernanceRisk;