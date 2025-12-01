import React, { useEffect, useRef } from "react";

const Background: React.FC = () => {
  const tilesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = tilesRef.current;
    if (!container) return;

    const COLS = 24;
    const ROWS = 14;
    const total = COLS * ROWS;

    container.innerHTML = "";

    for (let i = 0; i < total; i++) {
      const tile = document.createElement("div");
      const row = Math.floor(i / COLS);
      const col = i % COLS;

      // diagonal wave – delay by row+col
      const delay = (row + col) * -0.18;

      tile.className = "tile-item";
      tile.style.setProperty("--delay", `${delay}s`);
      container.appendChild(tile);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="wave-background">
        <div ref={tilesRef} className="tiles" />
      </div>

      {/* vertical fade so horizon disappears into black */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />

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
          background: #050505;
          z-index: 0;
          perspective: 1200px;
          perspective-origin: 50% 40%;
        }

        .tiles {
          position: absolute;
          top: 0;
          left: 0;
          width: 140%;
          height: 140%;
          display: grid;
          grid-template-columns: repeat(24, 1fr);
          grid-template-rows: repeat(14, 1fr);
          transform-style: preserve-3d;
          transform: rotateX(60deg) rotateZ(45deg) translate(-12%, -16%);
        }

        .tile-item {
          background: #080808;
          border: 1px solid #111111;
          transform-style: preserve-3d;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          animation: wave 7s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes wave {
          0%, 100% {
            transform: translateZ(0px);
            background: #050505;
            border-color: #111111;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          45% {
            transform: translateZ(12px) translateY(-2px);
            background: #151515;
            border-color: #1b1b1b;
            box-shadow:
              0 8px 16px rgba(0, 0, 0, 0.85);
          }
          55% {
            transform: translateZ(7px) translateY(-1px);
            background: #101010;
            border-color: #181818;
            box-shadow:
              0 5px 12px rgba(0, 0, 0, 0.7);
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
