import { useEffect, useRef } from 'react';

const Background = () => {
  const tilesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = tilesRef.current;
    if (!container) return;

    // Create 240 tiles
    for (let i = 0; i < 240; i++) {
      const tile = document.createElement('div');
      tile.style.setProperty('--i', i.toString());
      tile.className = 'tile-item';
      container.appendChild(tile);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d0d0d]">
      <div className="wave-background">
        <div ref={tilesRef} className="tiles"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Wave Background Test</h1>
      </div>

      <style>{`
        .wave-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #0d0d0d;
          z-index: -1;
        }

        .tiles {
          display: grid;
          grid-template-columns: repeat(20, 1fr);
          grid-template-rows: repeat(12, 1fr);
          width: 120%;
          height: 120%;
          transform: rotateX(55deg) rotateZ(45deg) translate(-10%, -10%);
        }

        .tile-item {
          background: #111;
          border: 1px solid #1c1c1c;
          animation: pulse 6s ease-in-out infinite;
          animation-delay: calc(var(--i) * -0.15s);
        }

        @keyframes pulse {
          0%, 100% {
            transform: translateZ(0px);
            background: #0f0f0f;
          }
          50% {
            transform: translateZ(12px);
            background: #151515;
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
