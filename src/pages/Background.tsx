import React, { useEffect, useRef } from "react";

const WaveBackground: React.FC = () => {
  const tilesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = tilesRef.current;
    if (!container) return;

    const COLS = 22;
    const ROWS = 14;
    const total = COLS * ROWS;

    // Clear if hot-reloading
    container.innerHTML = "";

    for (let i = 0; i < total; i++) {
      const tile = document.createElement("div");
      const row = Math.floor(i / COLS);
      const col = i % COLS;

      // nicer wave: based on row + col instead of flat index
      const delay = (row + col) * -0.18;

      // AMAI accents – alternate aqua / violet
      const accent =
        (row + col) % 2 === 0 ? "#A6FCFC" : "#D6A6FC";

      tile.className = "tile-item";
      tile.style.setProperty("--delay", `${delay}s`);
      tile.style.setProperty("--accent", accent);

      container.appendChild(tile);
    }

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;  // -5 to 5
      const y = (e.clientY / innerHeight - 0.5) * 10; // -5 to 5

      if (container) {
        container.style.transform = `
          rotateX(${58 - y}deg)
          rotateZ(45deg)
          translate(-12%, -12%)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505]">
      {/* Tiles */}
      <div className="wave-background">
        <div ref={tilesRef} className="tiles" />
      </div>

      {/* Top + bottom fade so it blends into black */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />

      {/* Content on top */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">
          Wave Background Test
        </h1>
      </div>

      <style>{`
        .wave-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: radial-gradient(circle at 20% 0%, #0d0d0d 0, #020202 55%);
          z-index: 0;
          perspective: 1100px;
          perspective-origin: 50% 40%;
        }

        .tiles {
          position: absolute;
          top: 0;
          left: 0;
          width: 140%;
          height: 140%;
          display: grid;
          grid-template-columns: repeat(22, 1fr);
          grid-template-rows: repeat(14, 1fr);
          transform-style: preserve-3d;
          transform: rotateX(58deg) rotateZ(45deg) translate(-12%, -12%);
          transition: transform 0.18s ease-out;
        }

        .tile-item {
          position: relative;
          background: #0a0a0a;
          border: 1px solid #161616;
          transform-style: preserve-3d;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          animation: pulse 5.5s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes pulse {
          0%, 100% {
            transform: translateZ(0px);
            background: #050505;
            border-color: #141414;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          40% {
            transform: translateZ(26px);
            background:
              radial-gradient(circle at 30% 20%, var(--accent) 0, #050505 55%);
            border-color: rgba(255, 255, 255, 0.07);
            box-shadow:
              0 0 14px rgba(0, 0, 0, 0.9),
              0 0 24px var(--accent);
          }
          60% {
            transform: translateZ(16px);
            background:
              radial-gradient(circle at 70% 80%, var(--accent) 0, #050505 65%);
            border-color: rgba(255, 255, 255, 0.04);
            box-shadow:
              0 0 10px rgba(0, 0, 0, 0.8),
              0 0 18px var(--accent);
          }
        }
      `}</style>
    </div>
  );
};

export default WaveBackground;
