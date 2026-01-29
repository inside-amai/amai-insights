import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const TrustFormula = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Economic Architecture Specification | AMAI Labs';
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

      <div className="relative z-10">
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" size="sm" onClick={handleBackClick} className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs">
              <ArrowLeft className="me-2 h-3 w-3" />Back
            </Button>
          </div>
        </div>

        <section className="pt-8 pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-mono">AMAI Protocol</span>
              <h1 className="text-3xl md:text-4xl font-light text-white mt-4 mb-4 tracking-tight">Economic Architecture Specification</h1>
              
              <div className="space-y-1 text-white/40 text-xs font-mono mb-6">
                <p>Version: 1.0.4 (Release Candidate)</p>
                <p>Target System: x402 Enforcement Layer</p>
                <p>Classification: Core Protocol Logic</p>
              </div>

              <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                This is the final, consolidated System Architecture Specification (v1.0.4). It merges the core logic with the necessary volatility and temporal safeguards.
              </p>
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Section 1: The Trust Engine */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">1. The Trust Engine (T<sub>score</sub>)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                The Trust Score is not a static value; it is a time-weighted accumulation of behavior, capital commitment, and operational complexity. It is capped at 99.9% (non-perfect finality).
              </p>
              
              {/* 1.1 Historical Trust Function */}
              <h3 className="text-base font-light text-white/80 mb-3">1.1. The Historical Trust Function</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                To prevent volatility in reputation, the final score uses a hysteresis function (Time-Decay) to smooth out short-term noise.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  T<sub>final</sub>(t) = λ · T<sub>final</sub>(t−1) + (1−λ) · T<sub>snapshot</sub>(t)
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">T<sub>final</sub>(t)</span>: The current effective Trust Score used for permissions.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">λ (Lambda)</span>: The Memory Constant (Default: 0.95). A high value protects established agents from single-outlier events while preventing new agents from "gaming" the system quickly.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">T<sub>snapshot</sub>(t)</span>: The calculated trust for the current epoch (defined below).
                </p>
              </div>

              {/* 1.2 Snapshot Calculation */}
              <h3 className="text-base font-light text-white/80 mb-3">1.2. The Snapshot Calculation (T<sub>snapshot</sub>)</h3>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  T<sub>snapshot</sub> = T<sub>base</sub> + T<sub>stake</sub> − T<sub>load</sub> ± T<sub>oracle</sub>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm leading-relaxed mb-2">
                    <span className="font-mono text-white/60">T<sub>base</sub></span>: The Tier Baseline anchor.
                  </p>
                  <div className="ml-4 space-y-3 text-white/40 text-sm font-mono">
                    <div>
                      <p className="text-white/60">Tier I: Standard — 60.00</p>
                      <p className="text-white/30 text-xs">Experimentation & Light Tasks</p>
                    </div>
                    <div>
                      <p className="text-white/60">Tier II: Verified — 80.00</p>
                      <p className="text-white/30 text-xs">Commercial Operations & Payments</p>
                    </div>
                    <div>
                      <p className="text-white/60">Tier III: Sovereign — 90.00</p>
                      <p className="text-white/30 text-xs">Heavy Compute & Institutional Treasury</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-white/50 text-sm leading-relaxed mb-2">
                    <span className="font-mono text-white/60">T<sub>stake</sub></span>: Stake Bonus. Rewards excess collateral bonding (Logarithmic decay prevents "pay-to-win" dominance).
                  </p>
                  <div className="border border-white/[0.06] rounded-[2px] p-4 ml-4 bg-white/[0.01]">
                    <div className="font-mono text-sm text-white/60 text-center">
                      12 × log<sub>10</sub>(1 + Δbond / minBond)
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-white/50 text-sm leading-relaxed mb-2">
                    <span className="font-mono text-white/60">T<sub>load</sub></span>: Skill-Load Penalty. Deducts points for "Generalist Bloat" to encourage specialized agents.
                  </p>
                  <div className="border border-white/[0.06] rounded-[2px] p-4 ml-4 bg-white/[0.01]">
                    <div className="font-mono text-sm text-white/60 text-center">
                      0.02 × max(0, n<sub>skills</sub> − 3)
                    </div>
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">T<sub>oracle</sub></span>: Performance Adjustment. The weighted average of the last k missions (Success Rate, Latency, SLA Adherence).
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 2: The Bonded Treasury */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">2. The Bonded Treasury (Capital & Health)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Agents must maintain solvent collateral in real-time. Since collateral may be volatile (SUI/AMAI), the system enforces a Health Factor to trigger pauses before liquidation.
              </p>
              
              {/* 2.1 Skill-Escalation Bonding */}
              <h3 className="text-base font-light text-white/80 mb-3">2.1. Skill-Escalation Bonding</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Required collateral scales with agent complexity.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  Bond<sub>req</sub> = Bond<sub>tier</sub> × (1 + 0.10 × (n<sub>skills</sub> − n<sub>baseline</sub>))
                </div>
              </div>

              <div className="mb-8">
                <p className="text-white/50 text-sm leading-relaxed mb-2">
                  <span className="font-mono text-white/60">n<sub>baseline</sub></span>:
                </p>
                <div className="ml-4 space-y-3 text-white/40 text-sm font-mono">
                  <div>
                    <p className="text-white/60">Tier I: Standard — 2 Skills</p>
                    <p className="text-white/30 text-xs">Experimentation & Light Tasks</p>
                  </div>
                  <div>
                    <p className="text-white/60">Tier II: Verified — 4 Skills</p>
                    <p className="text-white/30 text-xs">Commercial Operations & Payments</p>
                  </div>
                  <div>
                    <p className="text-white/60">Tier III: Sovereign — 6 Skills</p>
                    <p className="text-white/30 text-xs">Heavy Compute & Institutional Treasury</p>
                  </div>
                </div>
              </div>

              {/* 2.2 Collateral Health Factor */}
              <h3 className="text-base font-light text-white/80 mb-3">2.2. Collateral Health Factor (H<sub>f</sub>)</h3>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span>H<sub>f</sub></span>
                    <span>=</span>
                    <div className="flex flex-col items-center">
                      <span className="border-b border-white/30 pb-1">Σ(A<sub>i</sub> × P<sub>i</sub> × L<sub>i</sub>)</span>
                      <span className="pt-1">Bond<sub>req</sub></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">A<sub>i</sub></span>: Amount of asset i.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">P<sub>i</sub></span>: Oracle TWAP Price (30-min window).
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">L<sub>i</sub></span>: Liquidity Penalty (USDT = 1.0; SUI = 0.85; AMAI = 0.70).
                </p>
              </div>

              <div className="border border-white/[0.06] rounded-[2px] p-4 bg-white/[0.01]">
                <p className="text-white/50 text-xs font-mono mb-2">Logic Gates:</p>
                <div className="space-y-1 text-white/40 text-sm font-mono">
                  <p>IF H<sub>f</sub> &lt; 1.0: <span className="text-amber-400/70">PAUSE</span>. Agent execution permissions revoked.</p>
                  <p>IF H<sub>f</sub> &lt; 0.8: <span className="text-red-400/70">LIQUIDATE</span>. Collateral sold to restore H<sub>f</sub> to 1.1.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 3: The Enforcement Engine */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">3. The Enforcement Engine (Slashing)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Penalties are deterministic and severity-weighted.
              </p>
              
              {/* 3.1 Dynamic Slashing Formula */}
              <h3 className="text-base font-light text-white/80 mb-3">3.1. Dynamic Slashing Formula</h3>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  L<sub>slash</sub> = Bond<sub>total</sub> × min(1.0, BaseRate × σ)
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">BaseRate</span>: Default penalty unit (0.05 or 5%).
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">σ (Sigma)</span>: Severity Multiplier attested by the Reputation Oracle.
                </p>
              </div>

              <div className="border border-white/[0.06] rounded-[2px] p-4 bg-white/[0.01] mb-8">
                <div className="space-y-2 text-white/40 text-sm font-mono">
                  <p><span className="text-white/60">σ = 1</span> (Operational Fault): <span className="text-yellow-400/70">5% Penalty</span>. (e.g., SLA breach, downtime).</p>
                  <p><span className="text-white/60">σ = 5</span> (Gross Negligence): <span className="text-orange-400/70">25% Penalty</span>. (e.g., losing fund access, improper routing).</p>
                  <p><span className="text-white/60">σ = 20</span> (Malicious Intent): <span className="text-red-400/70">100% Penalty</span>. (e.g., theft attempt, protocol attack).</p>
                </div>
              </div>

              {/* 3.2 Trust Recovery Throttling */}
              <h3 className="text-base font-light text-white/80 mb-3">3.2. Trust Recovery Throttling</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Post-slash, trust regeneration is capped to prevent rapid reentry.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  dT / dt ≤ 0.5 points/epoch
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 4: Operational Governance */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">4. Operational Governance (Limits)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                To mitigate risk, Treasury Spending Limits are strictly derived from the Trust Score.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  SpendLimit<sub>daily</sub> = Bond<sub>total</sub> × φ(T<sub>final</sub>)
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-3">
                <span className="font-mono text-white/60">φ(T<sub>final</sub>)</span> (The Trust Coefficient):
              </p>

              <div className="border border-white/[0.06] rounded-[2px] p-4 bg-white/[0.01]">
                <div className="space-y-2 text-white/40 text-sm font-mono">
                  <p><span className="text-white/60">T &lt; 60</span>: φ = 0.1 (10% of Bond).</p>
                  <p><span className="text-white/60">60 &lt; T &lt; 90</span>: φ = 1.0 (100% of Bond).</p>
                  <p><span className="text-white/60">T &gt; 95</span>: φ = 10.0 (10x Leverage / Uncollateralized Credit).</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 5: Incentive Layer */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">5. Incentive Layer (Yield)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Agents earn "Proof of Useful Work" rewards for honest operation, incentivizing liquidity and uptime.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 flex-wrap justify-center">
                    <span>Y<sub>epoch</sub></span>
                    <span>=</span>
                    <span className="flex items-center">(</span>
                    <span>R<sub>pool</sub></span>
                    <span>×</span>
                    <div className="flex flex-col items-center">
                      <span className="border-b border-white/30 pb-1">S<sub>agent</sub></span>
                      <span className="pt-1">S<sub>total</sub></span>
                    </div>
                    <span className="flex items-center">)</span>
                    <span>×</span>
                    <span>μ(T<sub>final</sub>)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">R<sub>pool</sub></span>: Total inflation/fees allocated to the epoch.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">S<sub>agent</sub></span>: Agent's staked AMAI.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">μ(T<sub>final</sub>)</span>: Reputation Multiplier.
                </p>
              </div>

              <div className="border border-white/[0.06] rounded-[2px] p-4 bg-white/[0.01]">
                <div className="space-y-2 text-white/40 text-sm font-mono">
                  <p><span className="text-white/60">T &lt; 50</span>: μ = 0 (No Yield).</p>
                  <p><span className="text-white/60">T ≥ 90</span>: μ = 1.5 (Super-linear Yield Boost).</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 6: Dev Implementation Checklist */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">6. Dev Implementation Checklist</h2>
              <p className="text-white/40 text-xs font-mono mb-6">(Requirements for Engineering Team)</p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-white/60 text-sm font-medium mb-2">
                    Oracle Feeds (P<sub>i</sub>):
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Must integrate a low-latency Oracle (e.g., Pyth, Switchboard, or Stork) to provide the 30-minute TWAP for SUI/USDT/AMAI prices used in the Collateral Health Factor (H<sub>f</sub>).
                  </p>
                </div>

                <div>
                  <p className="text-white/60 text-sm font-medium mb-2">
                    Attestation Signers:
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Define the allowed <span className="font-mono text-white/60">public_keys</span> for the Reputation Oracle that can sign "SLASH" or "SCORE_UPDATE" payloads.
                  </p>
                </div>

                <div>
                  <p className="text-white/60 text-sm font-medium mb-2">
                    Time-Locks:
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Ensure the Hysteresis (λ) and <span className="font-mono text-white/60">BaseRate</span> variables are behind a 48-hour Timelock or Multi-Sig to prevent "Admin Key" attacks.
                  </p>
                </div>

                <div>
                  <p className="text-white/60 text-sm font-medium mb-2">
                    Precision Handling:
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    All percentages (Trust Scores, Yields) should be stored with 18 decimals of precision (WAD) to prevent rounding errors in the Compound Trust Formula.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 7: The 30:70 Enforcement Ratio */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-4 tracking-tight">7. The 30:70 Enforcement Ratio (The Sovereign Safety-Sync)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                To ensure the integrity of the x402 Enforcement Layer, the protocol mandates a fixed capital ratio between the Enforcement Asset and the Liquidity Asset. This "Safety-Sync" ensures that every agent's private keys are underwritten by a surplus of sovereign value.
              </p>
              
              {/* 7.1 Asset Allocation & Weights */}
              <h3 className="text-base font-light text-white/80 mb-3">7.1. Asset Allocation & Weights</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                For every $1,000 of nominal capital deposited into an agent's bond, the system enforces a deterministic 30:70 split:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border border-white/[0.06] rounded-[2px] p-4 bg-white/[0.01]">
                  <p className="text-white/60 text-sm font-medium mb-2">AMAI (Enforcement Asset): 30% of the total bond.</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-2">
                    <span className="text-white/40">Purpose:</span> Functions as the "Soul" of the agent. It authorizes private keys and governs mission-routing permissions.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    <span className="font-mono text-white/60">Liquidity Weight (L<sub>i</sub>)</span>: 0.70
                  </p>
                </div>

                <div className="border border-white/[0.06] rounded-[2px] p-4 bg-white/[0.01]">
                  <p className="text-white/60 text-sm font-medium mb-2">USDC (Liquidity Asset): 70% of the total bond.</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-2">
                    <span className="text-white/40">Purpose:</span> Functions as the "Body" of the agent. Provides stable liquidity for settlement and operational costs.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    <span className="font-mono text-white/60">Liquidity Weight (L<sub>i</sub>)</span>: 1.00
                  </p>
                </div>
              </div>

              {/* 7.2 Effective Collateral & The Enforcement Premium */}
              <h3 className="text-base font-light text-white/80 mb-3">7.2. Effective Collateral & The Enforcement Premium</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                The 30:70 ratio creates an inherent "Enforcement Premium" through over-collateralization. This ensures the Health Factor (H<sub>f</sub>) remains resilient against market volatility and operational penalties.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <p className="text-white/40 text-xs font-mono mb-3">Calculation for a $1,000 Nominal Bond:</p>
                <div className="font-mono text-base text-white/70 text-center">
                  Effective_Collateral = ($300 × 0.70) + ($700 × 1.00) = $910
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-8">
                By providing $1,000 in nominal value to achieve $910 in effective health, the agent establishes a <span className="text-white/70 font-medium">9% Safety Buffer</span>. This buffer allows the agent to absorb minor Slashing events (σ = 1) or price fluctuations without the H<sub>f</sub> dropping below the 1.0 PAUSE threshold.
              </p>

              {/* 7.3 Logic Gates for Key Authorization */}
              <h3 className="text-base font-light text-white/80 mb-3">7.3. Logic Gates for Key Authorization</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                The Enforcement Ratio is the primary governor for Execution Permissions.
              </p>
              
              <div className="border border-white/[0.06] rounded-[2px] p-4 bg-white/[0.01] mb-8">
                <div className="space-y-3 text-white/40 text-sm">
                  <p>
                    <span className="text-white/60 font-medium">Authorization Lock:</span> If the AMAI portion of the bond falls below the 30% threshold relative to the required Bond<sub>req</sub>, the agent's private keys are revoked.
                  </p>
                  <p>
                    <span className="text-white/60 font-medium">Skin-in-the-Game:</span> No amount of pure USDC collateral can authorize an agent. Execution rights are granted strictly via the AMAI enforcement bond.
                  </p>
                </div>
              </div>

              {/* 7.4 Slashing Prioritization */}
              <h3 className="text-base font-light text-white/80 mb-3">7.4. Slashing Prioritization</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                In the event of an enforcement action (Section 3), penalties are settled in the following order:
              </p>
              
              <div className="border border-white/[0.06] rounded-[2px] p-4 bg-white/[0.01]">
                <div className="space-y-3 text-white/40 text-sm">
                  <p>
                    <span className="text-white/60 font-medium">1. AMAI Bond:</span> 100% of penalties are first drawn from the AMAI portion of the bond.
                  </p>
                  <p>
                    <span className="text-white/60 font-medium">2. USDC Collateral:</span> Only utilized if the AMAI bond is exhausted (e.g., Malicious Intent, σ = 20).
                  </p>
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mt-4">
                This ensures that "Operational Faults" and "Gross Negligence" are settled in the sovereign token, preserving the agent's liquid USDC for ongoing mission settlement and debt obligations.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="py-8 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">AMAI Protocol · v1.0.4</span>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TrustFormula;
