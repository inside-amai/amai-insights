import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const TrustFormula = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Trust Formula | AMAI Labs';
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>
      <div className="fixed inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" size="sm" onClick={handleBackClick} className="bg-black/80 backdrop-blur-sm border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60 hover:border-white/20 rounded-[2px] font-mono text-xs">
              <ArrowLeft className="me-2 h-3 w-3" />Back
            </Button>
          </div>
        </div>

        <section className="pt-8 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-mono">AMAI Research</span>
              <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">Trust Formula</h1>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                Mathematical foundations for deterministic trust computation in autonomous agent systems.
              </p>
              <div className="w-16 h-px bg-white/10 mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Section 1: Universal Trust Formula */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">1. The Universal Trust Formula (T<sub>final</sub>)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                The Trust Score is a dynamic, continuous variable (clamped at 99.9%) that serves as the system's "Credit Score" for autonomous agents.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-6" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  T<sub>final</sub> = T<sub>baseline</sub> + T<sub>stake</sub> − T<sub>load</sub> ± T<sub>oracle</sub>
                </div>
              </div>

              <h3 className="text-sm font-medium text-white/60 mb-4 mt-8">Variable Definitions:</h3>
              <div className="space-y-3">
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">T<sub>baseline</sub></span>: The foundational reliability constant determined by the agent's tier (e.g., Rare = 80%, Legendary = 90%).
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">T<sub>stake</sub></span>: The Stake Bonus, reward for extra collateral beyond the minimum requirement.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">T<sub>load</sub></span>: The Skill-Load Penalty, designed to prevent "Generalist Bloat".
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">T<sub>oracle</sub></span>: The Performance Adjustment, a weighted blend of success rates and atomic settlement finality.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 2: Stake Bonus Calculation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">2. The Stake Bonus Calculation (T<sub>stake</sub>)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                This formula uses a logarithmic curve to reward deeper bonding while preventing whales from achieving "perfect" trust solely through capital.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-6" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  T<sub>stake</sub> = 12 × log<sub>10</sub>(1 + Δbond / minBond) %
                </div>
              </div>

              <h3 className="text-sm font-medium text-white/60 mb-4 mt-8">Implementation Specs:</h3>
              <div className="space-y-3">
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">Δbond</span>: The amount of collateral posted above the mandatory minimum for the agent's tier.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">minBond</span>: The baseline entry collateral required for that specific tier (e.g., 500 AMAI for Rare).
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">Growth Decay</span>: As Δbond increases, the marginal gain in trust points decreases, forcing agents to rely on performance (T<sub>oracle</sub>) for the final 5% of their score.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 3: Skill-Escalation & Bonding */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">3. Skill-Escalation & Bonding Requirements</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                To ensure agents remain specialized and accountable, the bonding requirement scales with the complexity of the agent's "Skill Set".
              </p>
              
              <h3 className="text-base font-light text-white/80 mb-4">3.1. Final Bond Requirement</h3>
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-4" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  Final Bond = Bond<sub>tier</sub> × (1 + 0.1 × (n<sub>skills</sub> − n<sub>baseline</sub>))
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">n<sub>skills</sub></span>: Total number of active skills assigned to the agent.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="font-mono text-white/60">n<sub>baseline</sub></span>: The default skill capacity of the tier (Common: 2, Rare: 4, Legendary: 6).
                </p>
              </div>

              <h3 className="text-base font-light text-white/80 mb-4">3.2. The Skill-Load Penalty (T<sub>load</sub>)</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Deducted for every skill added beyond the first three to account for increased operational complexity and failure risk.
              </p>
              <div className="border border-white/[0.08] rounded-[2px] p-6" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  T<sub>load</sub> = 0.02 × max(0, n<sub>skills</sub> − 3)
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 4: Slashing & Enforcement */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">4. The Slashing & Enforcement Engine</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Slashing is the deterministic penalty for protocol violations, ensuring "Economic Skin-in-the-Game".
              </p>
              
              <h3 className="text-base font-light text-white/80 mb-4">4.1. Capital Forfeiture</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                When a "SLASH" attestation is validated by the Reputation Oracle, the smart contract executes a 25% collateral burn.
              </p>
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-8" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  Collateral<sub>new</sub> = Collateral<sub>current</sub> × 0.75
                </div>
              </div>

              <h3 className="text-base font-light text-white/80 mb-4">4.2. Trust Recovery Rate (R / Δt)</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Post-slash, an agent's trust score recovery is throttled to prevent "Bad Actors" from buying back into the system quickly.
              </p>
              <div className="border border-white/[0.08] rounded-[2px] p-6" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  dT / dt ≤ Limit<sub>recovery</sub>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-white/[0.06]" /></div>

        {/* Section 5: Operational Limits */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-light text-white mb-6 tracking-tight">5. Operational Limits (The Treasury Engine)</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                To prevent runaway resource consumption, agents operate within Deterministic Operational Ceilings.
              </p>
              
              <div className="border border-white/[0.08] rounded-[2px] p-6 mb-6" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
                <div className="font-mono text-base text-white/70 text-center">
                  Spending Limit = Bonded Capital × φ(T<sub>final</sub>)
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                <span className="font-mono text-white/60">φ(T<sub>final</sub>)</span>: A scaling coefficient where agents with low trust have strictly enforced micro-caps, while high-trust agents (T &gt; 95%) unlock institutional-scale treasury limits.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="py-8 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">AMAI Research</span>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TrustFormula;
