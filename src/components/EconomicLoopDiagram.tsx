import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface EconomicLoopDiagramProps {
  className?: string;
}

const EconomicLoopDiagram: React.FC<EconomicLoopDiagramProps> = ({ className = '' }) => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const steps = [
    t('arch.loop.identity'),
    t('arch.loop.trust'),
    t('arch.loop.capital'),
    t('arch.loop.execution'),
    t('arch.loop.settlement'),
  ];

  const arrow = isRTL ? '←' : '→';

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Title */}
      <h3 className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-medium mb-5">
        {t('arch.loop.title')}
      </h3>

      {/* Flow container */}
      <div className="relative">
        {/* Main flow row */}
        <div className="flex items-center gap-2 text-[11px] text-white/70">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <span className="px-3 py-1.5 border border-white/20 rounded bg-white/[0.03] whitespace-nowrap">
                {step}
              </span>
              {i < steps.length - 1 && (
                <span className="text-white/30 text-xs">{arrow}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* SVG loop-back path */}
        <svg 
          className="w-full h-7 mt-1" 
          viewBox="0 0 480 28" 
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Curved U-path from Settlement back to Trust */}
          <path 
            d={isRTL 
              ? "M 72 0 L 72 16 Q 72 22 78 22 L 398 22 Q 404 22 404 16 L 404 0"
              : "M 404 0 L 404 16 Q 404 22 398 22 L 78 22 Q 72 22 72 16 L 72 0"
            }
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          
          {/* Arrow markers along the bottom path */}
          {isRTL ? (
            <>
              <polygon points="160,19 166,22 160,25" fill="rgba(255,255,255,0.25)" />
              <polygon points="240,19 246,22 240,25" fill="rgba(255,255,255,0.25)" />
              <polygon points="320,19 326,22 320,25" fill="rgba(255,255,255,0.25)" />
            </>
          ) : (
            <>
              <polygon points="320,19 314,22 320,25" fill="rgba(255,255,255,0.25)" />
              <polygon points="240,19 234,22 240,25" fill="rgba(255,255,255,0.25)" />
              <polygon points="160,19 154,22 160,25" fill="rgba(255,255,255,0.25)" />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

export default EconomicLoopDiagram;
