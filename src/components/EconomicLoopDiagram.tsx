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
          className="w-full h-8 mt-1" 
          viewBox="0 0 480 32" 
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Curved U-path from Settlement back to Trust */}
          <path 
            d={isRTL 
              ? "M 72 0 L 72 18 Q 72 24 78 24 L 398 24 Q 404 24 404 18 L 404 0"
              : "M 404 0 L 404 18 Q 404 24 398 24 L 78 24 Q 72 24 72 18 L 72 0"
            }
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          
          {/* Vertical arrow under Settlement (pointing down) */}
          {isRTL ? (
            <polygon points="72,5 69,0 75,0" fill="rgba(255,255,255,0.25)" />
          ) : (
            <polygon points="404,5 401,0 407,0" fill="rgba(255,255,255,0.25)" />
          )}
          
          {/* Vertical arrow between Identity and Trust (pointing up) */}
          {isRTL ? (
            <polygon points="404,0 401,5 407,5" fill="rgba(255,255,255,0.25)" />
          ) : (
            <polygon points="72,0 69,5 75,5" fill="rgba(255,255,255,0.25)" />
          )}
          
          {/* Arrow markers along the bottom path */}
          {isRTL ? (
            <>
              <polygon points="160,21 166,24 160,27" fill="rgba(255,255,255,0.25)" />
              <polygon points="240,21 246,24 240,27" fill="rgba(255,255,255,0.25)" />
              <polygon points="320,21 326,24 320,27" fill="rgba(255,255,255,0.25)" />
            </>
          ) : (
            <>
              <polygon points="320,21 314,24 320,27" fill="rgba(255,255,255,0.25)" />
              <polygon points="240,21 234,24 240,27" fill="rgba(255,255,255,0.25)" />
              <polygon points="160,21 154,24 160,27" fill="rgba(255,255,255,0.25)" />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

export default EconomicLoopDiagram;
