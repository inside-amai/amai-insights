import React, { useEffect, useRef } from 'react';

const RoadmapRibbon = () => {
  const ribbonRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      pill: "Today",
      title: "Live Alpha Grid MVP",
      body: "Multi-agent builder, swarm composer & wallet-connected dashboard running on prod infra with real-time devnet settlement."
    },
    {
      pill: "'25 Q4 → '26 Q1",
      title: "Bonded Trust & Swarm",
      body: "• Real-time oracle logs hourly trust scores to each Agent SBT.\n• Deploy N agents, verify trust ≥ threshold, mint Swarm SBT & avatar."
    },
    {
      pill: "2026 +",
      title: "Royalty Router & Indexer v1",
      body: "Single-hop PTB splitter on-chain; off-chain indexer streams live dashboards via WebSocket."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.ribbon-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    if (ribbonRef.current) {
      observer.observe(ribbonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-16 text-white font-[Satoshi]" ref={ribbonRef}>
      <div className="container mx-auto px-4">
        {/* Centered Headings */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-white mb-2">
            DEVELOPMENT
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#A6FCFC] to-[#D6A6FC] bg-clip-text text-transparent">
            Roadmap
          </h2>
        </div>

        {/* Ribbon Wrapper */}
        <div className="flex flex-col md:flex-row justify-center md:gap-20 gap-12 max-w-7xl mx-auto px-6">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A6FCFC] via-white/30 to-[#D6A6FC] -z-10" />
          
          {stages.map((stage, index) => (
            <div
              key={index}
              className="ribbon-card relative flex flex-col justify-center gap-3 p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:min-h-[260px] w-full max-w-none flex-1 shadow-[0_0_18px_-4px_rgba(166,252,252,0.35)] md:shadow-[0_0_28px_-6px_rgba(166,252,252,0.45)] transition-all duration-700 opacity-0 translate-y-6 mx-auto md:mx-0"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 min-w-[6.5rem] px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-[#A6FCFC] to-[#D6A6FC] text-black text-center">
                {stage.pill}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {stage.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-gray-200 whitespace-pre-line">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `
      }} />
    </section>
  );
};

export default RoadmapRibbon;