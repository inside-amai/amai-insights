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
      pill: "2025 Q4 – 2026 Q1",
      title: "Bonded Trust α & Swarm Deployer α",
      body: "• Oracle writes real-time trust scores to each Agent SBT (logistic curve, hourly cron).\n• Deploy N agents, verify cumulative trust ≥ threshold, mint Swarm SBT & cluster avatar."
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
          <p className="text-xs tracking-[0.2em] text-gray-400 mb-2">
            DEVELOPMENT TIMELINE
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#A6FCFC] to-[#D6A6FC] bg-clip-text text-transparent">
            Roadmap
          </h2>
        </div>

        {/* Ribbon Wrapper */}
        <div className="relative flex flex-col gap-10 md:flex-row items-start justify-center md:gap-12">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A6FCFC] via-white/30 to-[#D6A6FC] -z-10" />
          
          {stages.map((stage, index) => (
            <div
              key={index}
              className="ribbon-card relative max-w-sm w-[90%] md:w-80 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_18px_-4px_rgba(166,252,252,0.45)] transition-all duration-700 opacity-0 translate-y-6 mx-auto md:mx-0"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] font-medium rounded-full bg-gradient-to-r from-[#A6FCFC] to-[#D6A6FC] text-black">
                {stage.pill}
              </span>
              <h3 className="text-lg font-semibold mb-2">
                {stage.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-300 whitespace-pre-line">
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