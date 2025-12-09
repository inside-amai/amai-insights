import { WhitepaperLayout } from '@/components/WhitepaperLayout';

const Roadmap = () => {
  return (
    <WhitepaperLayout
      eyebrow="Timeline"
      title="Development Roadmap"
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h2 className="text-2xl lg:text-3xl font-light leading-tight tracking-tight text-white">
            2025-2027 Development Timeline
          </h2>
          <p className="mt-4 text-sm text-white/50 max-w-3xl mx-auto">
            Strategic development phases and key milestones for the AMAI platform.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-8" />
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div className="space-y-8">
            <div className="border-l border-white/20 pl-6 pb-6">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-normal text-white tracking-tight">Q3 2025</h4>
                <span className="ml-auto text-sm text-white/50 font-normal">Beta Launch</span>
              </div>
              <p className="text-white/50 text-sm">
                Platform beta launch and initial user testing
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/40">
                <li>— Core terminal functionality</li>
                <li>— Basic AI model integration</li>
                <li>— Community testing program</li>
              </ul>
            </div>

            <div className="border-l border-white/20 pl-6 pb-6">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-normal text-white tracking-tight">Q1 2026</h4>
                <span className="ml-auto text-sm text-white/50 font-normal">Token Launch</span>
              </div>
              <p className="text-white/50 text-sm">
                Token launch and governance implementation
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/40">
                <li>— Governance token deployment</li>
                <li>— Staking mechanism launch</li>
                <li>— Community voting system</li>
              </ul>
            </div>

            <div className="border-l border-white/20 pl-6 pb-6">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-normal text-white tracking-tight">Q3 2026</h4>
                <span className="ml-auto text-sm text-white/50 font-normal">Advanced Features</span>
              </div>
              <p className="text-white/50 text-sm">
                Advanced AI features and scaling
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/40">
                <li>— Multi-model AI support</li>
                <li>— Enterprise integrations</li>
                <li>— Performance optimizations</li>
              </ul>
            </div>

            <div className="border-l border-white/20 pl-6">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-normal text-white tracking-tight">2027</h4>
                <span className="ml-auto text-sm text-white/50 font-normal">Ecosystem</span>
              </div>
              <p className="text-white/50 text-sm">
                Full ecosystem deployment and partnerships
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/40">
                <li>— Partner network expansion</li>
                <li>— Global deployment</li>
                <li>— Next-generation features</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-8">
            <h4 className="font-normal text-white/60 mb-2 tracking-tight">Stay Updated</h4>
            <p className="text-sm text-white/50">
              Follow our progress and development milestones through our official channels.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default Roadmap;
