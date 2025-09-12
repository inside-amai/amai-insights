import React, { useEffect, useRef } from 'react';

const RoadmapRibbon = () => {
  const ribbonRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      pill: "Upcoming",
      title: "Agents & Lobby",
      body: "Twitter + Platform flows to mint agents, Global Lobby grid, Quick Tasks, trust ticks & badges."
    },
    {
      pill: "2025 Q4 → 2026",
      title: "Bonded Trust & Swarms",
      body: "Add bonding + slashing, lift trust caps, enable multi-agent swarms with consensus tasks."
    },
    {
      pill: "2026 +",
      title: "Skills & Royalties",
      body: "Verified KIP skills, skill marketplaces, and on-chain royalty routing with live dashboards."
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
    <section className="bg-black py-20 text-white font-[Satoshi]" ref={ribbonRef}>
      <div className="container mx-auto px-6">
        {/* Centered Headings */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] text-white mb-2">
            DEVELOPMENT
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#A6FCFC] to-[#D6A6FC] bg-clip-text text-transparent">
            Roadmap
          </h2>
        </div>

        {/* Ribbon Wrapper */}
        <div className="flex flex-col lg:flex-row justify-center lg:gap-8 gap-12 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A6FCFC] via-white/30 to-[#D6A6FC] -z-10" />
          
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`ribbon-card group relative flex flex-col justify-start gap-4 p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur min-h-[260px] lg:min-h-[280px] w-full flex-1 shadow-[0_0_18px_-4px_rgba(166,252,252,0.35)] lg:shadow-[0_0_28px_-6px_rgba(166,252,252,0.45)] transition-all duration-700 opacity-0 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_40px_-6px_rgba(166,252,252,0.6)] hover:scale-105 hover:-translate-y-2 cursor-pointer
                ${index % 2 === 0 
                  ? 'translate-x-full lg:translate-x-0 lg:translate-y-6' 
                  : '-translate-x-full lg:translate-x-0 lg:translate-y-6'
                }`}
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 min-w-[8rem] px-5 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-[#A6FCFC] to-[#D6A6FC] text-black text-center group-hover:shadow-lg transition-all duration-300">
                {stage.pill}
              </span>
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 mt-8 lg:mt-6 group-hover:text-white transition-colors duration-300">
                {stage.title}
              </h3>
              <p className="text-base lg:text-lg leading-relaxed text-gray-200 whitespace-pre-line group-hover:text-gray-100 transition-colors duration-300">
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
            transform: translateY(0) translateX(0) !important;
          }
        `
      }} />
    </section>
  );
};

export default RoadmapRibbon;