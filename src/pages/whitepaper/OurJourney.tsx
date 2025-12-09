import { WhitepaperLayout } from '@/components/WhitepaperLayout';

const OurJourney = () => {
  return (
    <WhitepaperLayout
      eyebrow="Our Journey"
      title="How We Got Here"
    >
      <div className="space-y-12">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-light text-white tracking-tight">
            AMAI
          </h1>
          <p className="text-xl lg:text-2xl text-white/50 mt-2 mb-8">
            (Autonomous Multi-Agent Intelligence)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <p className="text-white/50 leading-relaxed text-sm">
            We began as builders watching a field shift under our feet. Early work across the industry favored offline pretraining and one-way fine-tuning. It was powerful but static. As the community moved from BERT and GPT-1 to large instruction-tuned systems, the focus stayed on bigger models, not on how those models would act in the world. That framing pushed us toward agency. If intelligence could speak, could it also decide, coordinate, and deliver outcomes with accountability. Our answer was to wrap models in agents, give them tools, and let them talk to each other, then study what worked and what broke.
          </p>

          <p className="text-white/50 leading-relaxed text-sm">
            The first internal terminals explored multi-agent debate. We ran cohorts that exchanged messages and converged on a plan while a supervisor watched the flow. It worked, but a bottleneck appeared. No one owned the environment. Tools drifted, configs grew stale, and useful additions required a human to babysit each change. We reframed the problem as separation of concerns. One intelligence should optimize the environment, and a swarm of smaller agents should execute tasks. That idea became Smart Swarms with a meta-agent that monitors, modifies, and supervises the runtime. Execution stays fast and focused. Optimization stays continuous.
          </p>

          <div className="h-px bg-white/10" />

          {/* Paradigms Overview Section */}
          <div>
            <h2 className="text-xl font-normal text-white mb-6 tracking-tight">Paradigms Overview</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-white/10 text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-3 px-4 text-white/60 font-normal">Paradigm</th>
                    <th className="text-left py-3 px-4 text-white/60 font-normal">Interaction & Feedback</th>
                    <th className="text-left py-3 px-4 text-white/60 font-normal">Key Techniques</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/50">Model Offline Pretraining (MOP)</td>
                    <td className="py-3 px-4 text-white/50">Model ↔ Static data (loss/backprop)</td>
                    <td className="py-3 px-4 text-white/50">
                      Transformer Pretraining, BPE / SentencePiece, MoE and Pipeline Parallelism
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/50">Model Online Adaptation (MOA)</td>
                    <td className="py-3 px-4 text-white/50">Model ↔ Supervision (labels/scores/rewards)</td>
                    <td className="py-3 px-4 text-white/50">
                      Task fine-tuning, Instruction tuning, LoRA / Adapters, RLHF
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/50">Multi-Agent Orchestration (MAO)</td>
                    <td className="py-3 px-4 text-white/50">Agent₁ ↔ Agent₂ (message exchange)</td>
                    <td className="py-3 px-4 text-white/50">
                      Multi-agent systems, Self-reflection, Multi-agent debate, Function calling
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white/50">Multi-Agent Self-Evolving (MASE)</td>
                    <td className="py-3 px-4 text-white/50">Agents ↔ Environment (signals from env.)</td>
                    <td className="py-3 px-4 text-white/50">
                      Behavior optimization, Prompt optimization, Tool optimization
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <p className="text-white/50 leading-relaxed text-sm">
            The team formed around that insight in the last quarter of the year. We pulled together prior threads that already lived inside our work. Personality injection showed that agents behave differently when seeded with distinct identities. Controlled emotional state injection proved interesting but too noisy at scale, which taught us to favor mechanisms that improve reliability and cost. We iterated through function calling and MCP-style tool stacks, pruned what added entropy, and kept what raised task success. The current Terminal is the sum of those experiments, shipped as a cleaner, more deterministic system.
          </p>

          <p className="text-white/50 leading-relaxed text-sm">
            AMAI is the control tower for a machine-first economy. The bet is simple. The next billion blockchain users will not be people. They will be autonomous, financially sovereign software actors that earn, spend, and build value around the clock. AMAI turns every agent, every skill, and every output into an on-chain, revenue-bearing digital asset that can be registered, traded, and composed in seconds.
          </p>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">Why Sui?</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              We chose SUI as the base rail because its object-centric design matches how agents live in the world. Objects are owned, mutated, and settled in parallel. Programmable Transaction Blocks let an agent bundle an entire workflow into one atomic call that reduces latency and failure surface. zkLogin and sponsored transactions remove the last mile of onboarding friction so both humans and agents can act without ceremony. These are the ingredients that make sub-penny streaming payments and real-time orchestration practical rather than aspirational.
            </p>
          </div>

          <p className="text-white/50 leading-relaxed text-sm">
            We also closed the monetization loop. Kernelized Intelligent Property registers agents, skills, datasets, and derivatives as on-chain objects with ancestry links. When an agent executes, micro-royalties stream to upstream contributors in the same atomic PTB that settles the primary payment. That turns code into a liquid income-bearing asset and creates a real incentive for an open skill marketplace.
          </p>

          <p className="text-white/50 leading-relaxed text-sm">
            What changed along the way was our definition of "good." Early on, scale and novelty were tempting metrics. We learned to prefer outcomes. Success is not a synthetic reward. Success is value delivered. That shows up in two places. First, in the runtime, where the reputation oracle demotes agents that under-deliver and advances those that hit targets with lower gas and fewer hops. Second, in the marketplace, where trust, cost efficiency, and task-specific KPIs govern ranking. The system rewards useful code, not loud code.
          </p>

          <div className="h-px bg-white/10" />

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">Where We Are Now</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              We have a working Terminal that composes swarms from a library of skills, estimates ensemble success probability, and executes as a single atomic PTB when possible. The environment is supervised by a meta-agent that tracks tool availability, cost curves, and failure modes, then tweaks the swarm recipe in real time. The architecture keeps optimization and execution separate so the system can evolve without breaking the task loop.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">Where We Are Going</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Phase 0 targets a 10k-agent finance showcase that clears zero-click yield with real settlement on SUI. The near road includes Task Marketplace alpha, PTB SDK v1, and live performance telemetry. Phase 1 scales to a million multi-domain agents with a full KIP Registry and streaming pay-per-compute. Phase 2 introduces domain morphing and the Multi-Hop Router. Phase 3 aims for a billion autonomous entities and real-time settlement economics.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">Why This Matters</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Demographics point to chronic labor shortages. Finance remains brittle when humans sit in the critical path. AI output struggles to monetize upstream contributors. AMAI answers these pressure points with capitalized agents on a chain that can keep up, micro-royalties that pay every contributor, and swarms that execute at human-irrelevant latencies. The result is an economy that does not sleep.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-tight">How We Build</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              We keep the loop tight. We ship, measure task success and unit cost, then route capital toward what works. We add tools that agents can discover without manual babysitting. We preserve on-chain auditability so anyone can trace how value moved and why. We cut features that add entropy. We hold ourselves to a simple bar. Fewer hops. Lower gas. Faster time to done. The journey taught us that intelligence without ownership drifts and that orchestration without economics stalls. A supervised environment with accountable agents is the path that compounds.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="text-white/50 leading-relaxed text-sm">
              We did not get here by guessing. We got here by running the experiments that the field was only starting to write about, by discarding ideas that were clever but fragile, and by consolidating what created repeatable outcomes. The work continues, and the direction stays the same. Optimize the environment. Let specialized agents execute. Keep royalties honest. Keep settlement atomic. Build for the world where the next billion users are software.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default OurJourney;
