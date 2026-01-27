import React from 'react';

const TrustSpec = () => {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        
        {/* Section 1: Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-light text-white mb-3 tracking-tight">
            Economic Architecture Specification
          </h1>
          <p className="text-sm text-[#888888]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Version: 1.0.4 (Release Candidate) // Classification: Core Protocol Logic
          </p>
        </header>

        {/* Section 2: The Trust Engine */}
        <section className="mb-16">
          <h2 className="text-xl font-normal text-white mb-4">
            1. The Trust Engine (T<sub className="text-xs">score</sub>)
          </h2>
          <p className="text-sm text-[#888888] mb-6 leading-relaxed">
            The Trust Score is a time-weighted accumulation of behavior, capped at 99.9%.
          </p>
          
          {/* Formula Box */}
          <div 
            className="relative p-8 rounded-sm overflow-hidden"
            style={{ backgroundColor: '#111111' }}
          >
            {/* Faint grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #ffffff 1px, transparent 1px),
                  linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px'
              }}
            />
            
            {/* Formula */}
            <div 
              className="relative z-10 text-center text-xl text-[#CCCCCC]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              T<sub>final</sub>(t) = λ · T<sub>final</sub>(t-1) + (1-λ) · T<sub>snapshot</sub>(t)
            </div>
          </div>
        </section>

        {/* Section 3: The Enforcement Engine */}
        <section className="mb-16">
          <h2 className="text-xl font-normal text-white mb-8">
            3. The Enforcement Engine (Slashing)
          </h2>
          
          {/* Logic Gate */}
          <div className="mb-10">
            <h3 className="text-sm font-normal text-[#666666] uppercase tracking-wider mb-4">
              Logic Gate
            </h3>
            <div className="space-y-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-[#888888]">IF H<sub>f</sub> &lt; 1.0</span>
                <span className="text-[#666666]">→</span>
                <span className="text-[#F59E0B] font-medium">PAUSE</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-[#888888]">IF H<sub>f</sub> &lt; 0.8</span>
                <span className="text-[#666666]">→</span>
                <span className="text-[#EF4444] font-medium">LIQUIDATE</span>
              </div>
            </div>
          </div>
          
          {/* Severity Table */}
          <div>
            <h3 className="text-sm font-normal text-[#666666] uppercase tracking-wider mb-4">
              Severity Multipliers
            </h3>
            <table className="w-full text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <tbody>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 text-[#888888]">σ = 1</td>
                  <td className="py-3 text-[#888888]">Operational Fault</td>
                  <td className="py-3 text-right text-[#EAB308]">5% Penalty</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 text-[#888888]">σ = 5</td>
                  <td className="py-3 text-[#888888]">Gross Negligence</td>
                  <td className="py-3 text-right text-[#F59E0B]">25% Penalty</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#888888]">σ = 20</td>
                  <td className="py-3 text-[#888888]">Malicious Intent</td>
                  <td className="py-3 text-right text-[#EF4444]">100% Penalty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#1a1a1a]">
          <p className="text-xs text-[#444444]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            © 2026 AMAI Labs. Infrastructure & Research.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TrustSpec;
