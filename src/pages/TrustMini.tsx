import { Badge } from "@/components/ui/badge";

const TrustMini = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Faint grid background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Confidential watermark */}
      <div 
        className="fixed bottom-8 right-8 text-white/[0.03] text-6xl font-bold tracking-widest rotate-[-15deg] pointer-events-none select-none"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        CONFIDENTIAL
      </div>

      <div className="relative z-10 p-6 md:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <header 
          className="border px-6 py-4 mb-8 flex justify-between items-center"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div 
            className="text-sm tracking-wider"
            style={{ color: '#E5E5E5', fontFamily: 'JetBrains Mono, monospace' }}
          >
            AMAI Protocol // x402 Enforcement Layer
          </div>
          <div 
            className="text-xs tracking-wide"
            style={{ color: '#A3A3A3', fontFamily: 'JetBrains Mono, monospace' }}
          >
            v1.0.4 [RC] // CLASSIFICATION: CORE LOGIC
          </div>
        </header>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Trust Engine */}
          <div 
            className="border p-6"
            style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,240,255,0.02)' }}
          >
            <h2 
              className="text-xs tracking-widest mb-6 pb-3 border-b"
              style={{ color: '#00F0FF', borderColor: 'rgba(0,240,255,0.2)', fontFamily: 'Inter, sans-serif' }}
            >
              01 // TRUST HYSTERESIS
            </h2>

            {/* Main Formula */}
            <div 
              className="py-6 px-4 mb-6 text-center border"
              style={{ borderColor: 'rgba(0,240,255,0.15)', backgroundColor: 'rgba(0,0,0,0.3)' }}
            >
              <div 
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#E5E5E5', fontFamily: 'Georgia, serif' }}
              >
                <span style={{ color: '#00F0FF' }}>T</span>
                <sub className="text-xs">final</sub>
                <span className="mx-1">(t)</span>
                <span className="mx-2">=</span>
                <span style={{ color: '#00F0FF' }}>λ</span>
                <span className="mx-1">·</span>
                <span style={{ color: '#00F0FF' }}>T</span>
                <sub className="text-xs">final</sub>
                <span>(t-1)</span>
                <span className="mx-2">+</span>
                <span>(1-λ)</span>
                <span className="mx-1">·</span>
                <span style={{ color: '#00F0FF' }}>T</span>
                <sub className="text-xs">snapshot</sub>
                <span>(t)</span>
              </div>
            </div>

            {/* Variables */}
            <div 
              className="space-y-2 text-xs"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <div className="flex justify-between" style={{ color: '#A3A3A3' }}>
                <span><span style={{ color: '#00F0FF' }}>λ</span> (Lambda)</span>
                <span style={{ color: '#E5E5E5' }}>0.95</span>
              </div>
              <div className="flex justify-between" style={{ color: '#A3A3A3' }}>
                <span>Memory Constant</span>
                <span style={{ color: '#E5E5E5' }}>HIGH</span>
              </div>
              <div className="flex justify-between" style={{ color: '#A3A3A3' }}>
                <span>Max Score</span>
                <span style={{ color: '#00F0FF' }}>99.9%</span>
              </div>
              <div className="flex justify-between" style={{ color: '#A3A3A3' }}>
                <span>Convergence</span>
                <span style={{ color: '#E5E5E5' }}>Asymptotic</span>
              </div>
            </div>
          </div>

          {/* Column 2: Bonded Treasury */}
          <div 
            className="border p-6"
            style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(245,158,11,0.02)' }}
          >
            <h2 
              className="text-xs tracking-widest mb-6 pb-3 border-b"
              style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.2)', fontFamily: 'Inter, sans-serif' }}
            >
              02 // COLLATERAL HEALTH
            </h2>

            {/* Health Factor Formula */}
            <div 
              className="py-6 px-4 mb-6 text-center border"
              style={{ borderColor: 'rgba(245,158,11,0.15)', backgroundColor: 'rgba(0,0,0,0.3)' }}
            >
              <div 
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#E5E5E5', fontFamily: 'Georgia, serif' }}
              >
                <span style={{ color: '#F59E0B' }}>H</span>
                <sub className="text-xs">f</sub>
                <span className="mx-2">=</span>
                <span>Σ(Asset</span>
                <sub className="text-xs">i</sub>
                <span className="mx-1">×</span>
                <span>Price</span>
                <sub className="text-xs">i</sub>
                <span className="mx-1">×</span>
                <span>L</span>
                <sub className="text-xs">i</sub>
                <span>)</span>
                <span className="mx-1">/</span>
                <span style={{ color: '#F59E0B' }}>Bond</span>
                <sub className="text-xs">req</sub>
              </div>
            </div>

            {/* Logic Gate Visualization */}
            <div 
              className="border p-4 space-y-3"
              style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(0,0,0,0.2)' }}
            >
              <div 
                className="text-[10px] tracking-widest mb-3"
                style={{ color: '#A3A3A3', fontFamily: 'Inter, sans-serif' }}
              >
                LOGIC GATES
              </div>
              
              <div className="flex items-center justify-between text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <span style={{ color: '#A3A3A3' }}>Hf &lt; 1.0</span>
                <span style={{ color: '#A3A3A3' }}>→</span>
                <Badge 
                  className="text-[10px] px-2 py-0.5 font-normal border-0"
                  style={{ backgroundColor: '#F59E0B', color: '#000' }}
                >
                  PAUSE
                </Badge>
              </div>

              <div className="flex items-center justify-between text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <span style={{ color: '#A3A3A3' }}>Hf &lt; 0.8</span>
                <span style={{ color: '#A3A3A3' }}>→</span>
                <Badge 
                  className="text-[10px] px-2 py-0.5 font-normal border-0"
                  style={{ backgroundColor: '#EF4444', color: '#fff' }}
                >
                  LIQUIDATE
                </Badge>
              </div>

              <div 
                className="pt-3 mt-3 border-t text-[10px]"
                style={{ borderColor: 'rgba(255,255,255,0.05)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                <div style={{ color: '#A3A3A3' }} className="mb-2">Liquidity Penalty:</div>
                <div className="flex gap-4" style={{ color: '#E5E5E5' }}>
                  <span>USDT <span style={{ color: '#10B981' }}>1.0</span></span>
                  <span>SUI <span style={{ color: '#F59E0B' }}>0.85</span></span>
                  <span>AMAI <span style={{ color: '#EF4444' }}>0.70</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: The Enforcer */}
          <div 
            className="border p-6"
            style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(239,68,68,0.02)' }}
          >
            <h2 
              className="text-xs tracking-widest mb-6 pb-3 border-b"
              style={{ color: '#EF4444', borderColor: 'rgba(239,68,68,0.2)', fontFamily: 'Inter, sans-serif' }}
            >
              03 // SLASHING MECHANICS
            </h2>

            {/* Slashing Formula */}
            <div 
              className="py-6 px-4 mb-6 text-center border"
              style={{ borderColor: 'rgba(239,68,68,0.15)', backgroundColor: 'rgba(0,0,0,0.3)' }}
            >
              <div 
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#E5E5E5', fontFamily: 'Georgia, serif' }}
              >
                <span style={{ color: '#EF4444' }}>L</span>
                <sub className="text-xs">slash</sub>
                <span className="mx-2">=</span>
                <span>Bond</span>
                <sub className="text-xs">total</sub>
                <span className="mx-1">×</span>
                <span>min(1.0,</span>
                <span className="mx-1">BaseRate</span>
                <span>×</span>
                <span style={{ color: '#EF4444' }}>σ</span>
                <span>)</span>
              </div>
            </div>

            {/* Severity Levels */}
            <div 
              className="border p-4"
              style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(0,0,0,0.3)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              <div 
                className="text-[10px] tracking-widest mb-3"
                style={{ color: '#A3A3A3', fontFamily: 'Inter, sans-serif' }}
              >
                SEVERITY LEVELS (σ)
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span style={{ color: '#A3A3A3' }}>σ = 1</span>
                  <span style={{ color: '#10B981' }}>Fault</span>
                  <span style={{ color: '#E5E5E5' }}>5% Penalty</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#A3A3A3' }}>σ = 5</span>
                  <span style={{ color: '#F59E0B' }}>Negligence</span>
                  <span style={{ color: '#E5E5E5' }}>25% Penalty</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#A3A3A3' }}>σ = 20</span>
                  <span style={{ color: '#EF4444' }}>Malicious</span>
                  <span style={{ color: '#EF4444' }}>100% Penalty</span>
                </div>
                <div 
                  className="text-[10px] text-right pt-2 mt-2 border-t"
                  style={{ borderColor: 'rgba(239,68,68,0.2)', color: '#EF4444' }}
                >
                  [LETHAL]
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer 
          className="mt-8 pt-6 border-t flex justify-between items-center"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <div 
            className="text-[10px] tracking-wide"
            style={{ color: '#A3A3A3', fontFamily: 'JetBrains Mono, monospace' }}
          >
            System State: <span style={{ color: '#10B981' }}>ACTIVE</span>
          </div>
          <div 
            className="text-[10px] tracking-wide"
            style={{ color: '#A3A3A3', fontFamily: 'Inter, sans-serif' }}
          >
            © 2026 AMAI Labs. Infrastructure & Research.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TrustMini;
