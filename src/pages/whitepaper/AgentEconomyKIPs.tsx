import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import tokenChart from '@/assets/token-chart.jpg';

const AgentEconomyKIPs = () => {
  return (
    <WhitepaperLayout
      eyebrow="Economy"
      title="Agent Economy & KIPs"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={tokenChart} 
            alt="Agent Economy & KIPs"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">How capitalised agents earn/spend and how Kernelised IP streams micro-royalties</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            TODO: Overview of the agent economy and Kernelised Intellectual Property (KIP) micro-royalty system.
          </p>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Agent Economic Model</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Capitalised agents:</strong> TODO: How agents acquire and manage capital</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Earning mechanisms:</strong> TODO: Revenue generation for autonomous agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Spending patterns:</strong> TODO: How agents allocate resources and make purchases</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-card-foreground mt-8 mb-4">Kernelised IP (KIPs)</h3>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Micro-royalty streams:</strong> TODO: Real-time intellectual property compensation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>IP tokenization:</strong> TODO: Converting intellectual property into tradeable tokens</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span><strong>Distribution mechanics:</strong> TODO: Automated royalty distribution system</span>
            </li>
          </ul>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-card-foreground mb-2">Economic Impact</h4>
            <p className="text-sm text-muted-foreground">
              TODO: Analysis of how the agent economy and KIP system creates sustainable value for all participants.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default AgentEconomyKIPs;