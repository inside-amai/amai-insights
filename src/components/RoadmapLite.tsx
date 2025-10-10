import React, { useEffect, useRef } from 'react';
import { Wallet, Shield, Award, Users, Zap, Sparkles, Network, Code, Target } from 'lucide-react';

const RoadmapLite = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);

  const milestones = [
    { title: 'Wallet Connect', icon: Wallet, accent: '#A6FCFC' },
    { title: 'zkLogin', icon: Shield, accent: '#A6FCFC' },
    { title: 'Skill-NFT Registry', icon: Award, accent: '#D6A6FC' },
    { title: 'Swarm', icon: Users, accent: '#A6FCFC' },
    { title: 'Real-Time Settlement', icon: Zap, accent: '#A6FCFC' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.roadmap-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-16 text-white" ref={roadmapRef}>
      <div className="container mx-auto px-4">
        {/* Heading Block */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[.2em] text-gray-400 mb-2">
            DEVELOPMENT TIMELINE
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#A6FCFC] to-[#D6A6FC] text-transparent bg-clip-text">
            Roadmap
          </h2>
        </div>

        {/* Main Wrapper */}
        <div className="flex flex-col gap-10 md:grid md:grid-cols-6 md:gap-8 md:items-start">
          
          {/* Sidebar - Only on desktop */}
          <div className="hidden md:block">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={20} style={{ color: '#A6FCFC' }} />
                <h3 className="text-sm font-medium">Live Alpha Grid</h3>
              </div>
              
              <div className="flex gap-2 mb-4">
                <Network size={16} className="text-gray-400" />
                <Code size={16} className="text-gray-400" />
                <Target size={16} className="text-gray-400" />
                <Zap size={16} className="text-gray-400" />
              </div>
              
              <p className="text-[11px] text-gray-400 mb-4">
                Real-time development tracking and milestone verification
              </p>
              
              <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                <p className="text-xs font-medium text-[#A6FCFC]">
                  Modern UI Wizard
                </p>
                <p className="text-[10px] text-gray-500 mt-1">
                  Interactive development assistant
                </p>
              </div>
            </div>
          </div>

          {/* Milestone Cards */}
          <div className="md:col-span-5">
            <div className="flex flex-col gap-6 md:flex-row md:gap-4 md:items-center relative">
              
              {/* Mobile vertical accent bar */}
              <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-[#A6FCFC] to-[#D6A6FC] opacity-50 md:hidden" />
              
              {milestones.map((milestone, idx) => {
                const IconComponent = milestone.icon;
                const isViolet = idx === 2;
                
                return (
                  <React.Fragment key={milestone.title}>
                    <div
                      className="roadmap-card opacity-0 translate-y-6 transition-all duration-500"
                      style={{ 
                        color: milestone.accent,
                        '--tw-gradient-from': milestone.accent,
                        '--tw-gradient-to': milestone.accent 
                      } as React.CSSProperties}
                    >
                      <IconComponent size={20} style={{ color: milestone.accent }} />
                      <div>
                        <h3 className="text-sm font-medium text-white">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Desktop horizontal line */}
                    {idx < milestones.length - 1 && (
                      <div 
                        className="hidden md:block h-px flex-1 opacity-60"
                        style={{ backgroundColor: milestone.accent }}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .roadmap-card {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border-radius: 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background-color: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(14px);
            padding: 0.75rem 1rem;
            width: 90%;
            margin: 0 auto;
          }
          
          @media (min-width: 768px) {
            .roadmap-card {
              width: 100%;
            }
          }
          
          .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `
      }} />
    </section>
  );
};

export default RoadmapLite;