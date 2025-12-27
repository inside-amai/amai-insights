import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const PageBreak = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="w-24 h-px bg-white/10" />
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-light text-white mb-6 tracking-tight">{children}</h2>
);

const SubsectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-light text-white/80 mb-4 mt-8">{children}</h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-white/50 text-sm leading-relaxed mb-4">{children}</p>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mb-6 ml-4">
    {items.map((item, i) => (
      <li key={i} className="text-white/50 text-sm leading-relaxed flex gap-2">
        <span className="text-white/30">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const NumberedList = ({ items }: { items: string[] }) => (
  <ol className="space-y-2 mb-6 ml-4">
    {items.map((item, i) => (
      <li key={i} className="text-white/50 text-sm leading-relaxed flex gap-2">
        <span className="text-white/30 font-mono text-xs">{i + 1}.</span>
        <span>{item}</span>
      </li>
    ))}
  </ol>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-2 border-white/10 pl-4 my-6 text-white/40 text-sm italic">
    {children}
  </blockquote>
);

const Formula = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 my-6 font-mono text-xs text-white/50 overflow-x-auto">
    {children}
  </div>
);

const ConflictOfThoughtPaper = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="max-w-3xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Abstract */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono mb-4">Abstract</div>
        <Paragraph>
          We introduce Conflict of Thought (CoT), a multi-agent reasoning framework that leverages structured cognitive divergence to enhance language model intelligence in contested domains. Unlike traditional ensemble methods that aggregate model outputs toward convergence, CoT deliberately preserves and analyzes disagreement between specialized cognitive perspectives. We formalize the concept of VOID spaces—query regions exhibiting high-entropy, non-collapsible disagreement—and demonstrate that these spaces encode information about structural uncertainty absent in single-model outputs.
        </Paragraph>
        <Paragraph>
          Through empirical evaluation on financial market analysis tasks, we observe that divergence patterns correlate with downstream volatility (r=0.68, p&lt;0.05) and reliably diagnose missing information in 87% of test cases. The framework achieves cognitive specialization through prompt engineering alone, eliminating the computational overhead of training multiple models. Our results suggest that in narrative-driven domains characterized by contested ground truth, disagreement structure constitutes a first-class analytical signal rather than noise to be eliminated.
        </Paragraph>
        <div className="text-xs text-white/30 mt-6 font-mono">
          Keywords: Multi-model systems, cognitive diversity, ensemble methods, uncertainty quantification, prompt engineering
        </div>
      </motion.section>

      <PageBreak />

      {/* Section 1: Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          Contemporary multi-model architectures—including ensemble methods (Breiman, 1996; Dietterich, 2000), mixture-of-experts systems (Shazeer et al., 2017), and multi-agent debate frameworks (Du et al., 2024)—share a common objective: reduce prediction variance through aggregation. These approaches operate under the assumption that model disagreement reflects epistemic uncertainty that should be resolved through consensus mechanisms.
        </Paragraph>
        <Paragraph>
          We challenge the universality of this assumption. In domains characterized by contested ground truth—financial markets, geopolitical forecasting, strategic decision-making—"correct" answers emerge from the interaction of competing interpretive frameworks rather than existing a priori. Here, premature consensus may obscure the very dynamics that generate outcomes. What if disagreement itself carries information content?
        </Paragraph>

        <SubsectionTitle>1.1 Core Contributions</SubsectionTitle>
        <Paragraph>This work makes four primary contributions:</Paragraph>
        <NumberedList items={[
          "Theoretical Framework: Formalization of cognitive divergence as information signal, including precise definitions of VOID spaces and non-collapsible disagreement",
          "Architectural Innovation: Lightweight multi-model system achieving cognitive diversity through prompt engineering without requiring separate model training",
          "Empirical Validation: Systematic evaluation across 15 market analysis tasks demonstrating predictive value of divergence metrics",
          "Practical Protocol: VOID Protocol methodology for deploying divergence-preserving systems in production environments"
        ]} />
        <Paragraph>
          The framework requires no model fine-tuning, making it immediately deployable with existing large language model (LLM) infrastructure.
        </Paragraph>
      </motion.section>

      <PageBreak />

      {/* Section 2: Background and Motivation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>2. Background and Motivation</SectionTitle>

        <SubsectionTitle>2.1 Limitations of Alignment Processes</SubsectionTitle>
        <Paragraph>
          Modern LLMs undergo reinforcement learning from human feedback (RLHF) to align model behavior with human preferences (Ouyang et al., 2022). While this process improves safety and helpfulness, it introduces systematic biases relevant to our work:
        </Paragraph>
        <BulletList items={[
          "Consensus Bias: RLHF rewards outputs that resolve ambiguity quickly. Evaluators preferentially rate responses that provide confident singular answers over those preserving uncertainty or presenting multiple perspectives.",
          "Hedging Aversion: Expressions of genuine uncertainty (\"multiple models support different conclusions\") are penalized as unhelpful hedging, even when uncertainty accurately reflects information states.",
          "Completeness Pressure: Outputs that feel \"complete\" and \"resolved\" receive higher ratings than those exposing unresolved tensions, regardless of whether resolution is epistemically justified."
        ]} />
        <Paragraph>
          These optimization targets directly conflict with the behaviors required for effective divergence analysis. Consider a financial analysis query with incomplete institutional capital flow data:
        </Paragraph>
        <Quote>
          Standard RLHF-aligned output: "The contradiction likely stems from stablecoin inflows being directed to DeFi protocols rather than spot markets, combined with broader market weakness."
        </Quote>
        <Paragraph>
          This synthesis sounds authoritative but obscures critical uncertainties about capital flows and institutional positioning.
        </Paragraph>
        <Quote>
          Divergence-preserving output: Three analytical perspectives yield different conclusions:
          <br />• Pattern analysis: 6/10 conviction (structural signal present, data incomplete)
          <br />• Causal analysis: 7/10 conviction (mechanism chains clear, attribution uncertain)
          <br />• Synthesis: 5/10 conviction (competing interpretive frameworks irreconcilable without additional data)
          <br />VOID region identified: Institutional capital flow mechanisms (insufficient data for resolution)
        </Quote>
        <Paragraph>
          The second output preserves disagreement structure and explicitly marks information gaps—behaviors RLHF training typically suppresses.
        </Paragraph>

        <SubsectionTitle>2.2 Ensemble Methods and Variance Reduction</SubsectionTitle>
        <Paragraph>
          Traditional ensemble approaches (bagging, boosting, stacking) reduce variance by combining predictions from multiple models (Breiman, 1996). This strategy succeeds when:
        </Paragraph>
        <NumberedList items={[
          "Ground truth exists independently of model predictions",
          "Individual model errors are uncorrelated",
          "Disagreement reflects model-specific noise"
        ]} />
        <Paragraph>In narrative-driven domains, these conditions often fail:</Paragraph>
        <BulletList items={[
          "\"Truth\" emerges from collective belief dynamics (markets, politics)",
          "Models may disagree due to selecting different valid causal structures",
          "Averaging conflicting mechanistic explanations produces coherent-sounding but potentially misleading syntheses"
        ]} />

        <SubsectionTitle>2.3 The Prompt Engineering Hypothesis</SubsectionTitle>
        <Paragraph>
          Recent work demonstrates that prompt engineering can induce specialized reasoning behaviors in base models without fine-tuning (Wei et al., 2022; Kojima et al., 2022). We extend this observation: can prompt design alone create sufficient cognitive diversity to generate informative disagreement?
        </Paragraph>
        <Paragraph>
          Our hypothesis: system prompts that specify orthogonal epistemologies (ways of constructing knowledge) rather than tasks (roles to play) can achieve the diversity benefits of multi-model ensembles while preserving interpretability and eliminating training overhead.
        </Paragraph>
      </motion.section>

      <PageBreak />

      {/* Section 3: Methodology */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>3. Methodology</SectionTitle>

        <SubsectionTitle>3.1 Formal Framework</SubsectionTitle>
        <Paragraph>
          <strong className="text-white/70">Definition 1 (Cognitive Lens):</strong> A cognitive lens L is a system prompt that specifies an inferential strategy S (pattern matching, causal reasoning, multi-framework synthesis), epistemic boundaries, and output format requirements.
        </Paragraph>

        <SubsectionTitle>3.2 Cognitive Lens Design</SubsectionTitle>
        <Paragraph>We implement three orthogonal lenses corresponding to distinct epistemological strategies:</Paragraph>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Pattern Lens (Lₚ)</div>
            <BulletList items={[
              "Focuses on structural recognition and analogical reasoning",
              "Identifies recurring formations without imposing causal mechanisms",
              "Explicitly names interpretive mythologies (e.g., \"cycle theory,\" \"mean reversion\")",
              "Specifies boundary conditions where patterns break down"
            ]} />
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Causal Lens (L꜀)</div>
            <BulletList items={[
              "Employs explicit chain-of-thought reasoning (Wei et al., 2022)",
              "Traces mechanistic pathways (if A, then B, then C)",
              "Names causal assumptions and alternative explanations",
              "Exposes points where causal chains become ambiguous"
            ]} />
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Synthesis Lens (Lₛ)</div>
            <BulletList items={[
              "Integrates cross-domain information streams",
              "Deploys multiple interpretive frameworks (unity, emergence, fragmentation)",
              "Identifies narrative coherence and internal contradictions",
              "Preserves irreconcilable tensions rather than forcing resolution"
            ]} />
          </div>
        </div>

        <Paragraph>Each lens incorporates directives to override RLHF consensus-seeking:</Paragraph>
        <BulletList items={[
          "Explicit assumption naming",
          "Gap marking as first-class output",
          "Contradiction preservation",
          "Hedging when warranted by information state"
        ]} />

        <SubsectionTitle>3.3 Architecture</SubsectionTitle>
        <Paragraph>The system operates through five sequential stages:</Paragraph>
        <NumberedList items={[
          "Query Distribution: The input query Q is distributed identically to three model instances, each configured with a distinct cognitive lens system prompt.",
          "Parallel Execution: Three models—M₁ equipped with Pattern Lens, M₂ with Causal Lens, and M₃ with Synthesis Lens—execute independently without inter-model communication.",
          "Output Collection: The system captures complete outputs O₁, O₂, O₃ including both analytical content and metadata (conviction scores, identified gaps, reasoning traces).",
          "Divergence Analysis: A post-processing module computes multi-dimensional divergence metrics across the three outputs, identifying regions of consensus, structured disagreement, and potential VOID spaces.",
          "Collision Report Generation: The final output presents consensus findings, structured conflicts, and VOID regions."
        ]} />

        <SubsectionTitle>3.4 Divergence Metrics</SubsectionTitle>
        <Paragraph>We quantify disagreement across multiple dimensions:</Paragraph>
        
        <div className="space-y-4 mb-6">
          <div>
            <div className="text-white/60 text-sm mb-2">Conviction Variance:</div>
            <Formula>σ²꜀ = (1/n) Σ(Cᵢ - C̄)²</Formula>
            <Paragraph>High variance indicates uncertainty about uncertainty—models disagree on confidence levels.</Paragraph>
          </div>
          
          <div>
            <div className="text-white/60 text-sm mb-2">Claim Overlap (Jaccard):</div>
            <Formula>J(Oᵢ, Oⱼ) = |Claims(Oᵢ) ∩ Claims(Oⱼ)| / |Claims(Oᵢ) ∪ Claims(Oⱼ)|</Formula>
            <Paragraph>Low overlap indicates perspective divergence—models focus on different evidence.</Paragraph>
          </div>
          
          <div>
            <div className="text-white/60 text-sm mb-2">Causal Graph Edit Distance:</div>
            <Paragraph>Extract implied causal structures from each output, compute graph edit distance (Sanfeliu & Fu, 1983). High distance indicates explanatory conflict—models tell different mechanistic stories.</Paragraph>
          </div>
          
          <div>
            <div className="text-white/60 text-sm mb-2">Composite Divergence Score:</div>
            <Formula>D = w₁σ²꜀ + w₂(1 - J̄) + w₃d_graph + w₄d_frame</Formula>
            <Paragraph>Where weights wᵢ are domain-calibrated to maximize VOID detection accuracy.</Paragraph>
          </div>
        </div>
      </motion.section>

      <PageBreak />

      {/* Section 4: Experimental Design */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>4. Experimental Design</SectionTitle>

        <SubsectionTitle>4.1 Domain and Task Selection</SubsectionTitle>
        <Paragraph>We evaluate CoT on cryptocurrency market analysis—a domain characterized by:</Paragraph>
        <BulletList items={[
          "Contested ground truth (market narratives, not physical facts)",
          "High-frequency regime changes",
          "Abundant data with ambiguous interpretation",
          "Measurable downstream outcomes (price volatility)"
        ]} />
        <Paragraph>
          <strong className="text-white/70">Task:</strong> Analyze contentious market claims (e.g., "$2.4B institutional inflow with declining price") given structured data including price history, capital flows, developer activity, and institutional product launches.
        </Paragraph>

        <SubsectionTitle>4.2 Experimental Protocol</SubsectionTitle>
        <Paragraph>
          <strong className="text-white/70">Dataset:</strong> 15 cryptocurrency analysis queries spanning December 2024-2025, each with verified market data, contentious claim requiring interpretation, and 48-hour post-query period for validation.
        </Paragraph>
        <Paragraph>
          <strong className="text-white/70">Models:</strong> Experiments employed multiple large language model architectures including Qwen, Mistral, and DeepSeek variants, differentiated only by system prompts implementing cognitive lenses rather than by model size or training regime.
        </Paragraph>
        <Paragraph><strong className="text-white/70">Metrics:</strong></Paragraph>
        <BulletList items={[
          "Divergence score (internal)",
          "VOID space detection accuracy (retrospective analysis)",
          "Correlation with subsequent volatility",
          "Information gap diagnosis (expert evaluation)"
        ]} />
        <Paragraph><strong className="text-white/70">Baselines:</strong></Paragraph>
        <BulletList items={[
          "Single-model analysis (same base model, standard prompt)",
          "Averaged ensemble (mean of three outputs)"
        ]} />

        <SubsectionTitle>4.3 Evaluation Methodology</SubsectionTitle>
        <Paragraph>
          <strong className="text-white/70">Volatility Correlation:</strong> Measure correlation between divergence score and 48-hour price volatility (|return|).
        </Paragraph>
        <Paragraph>
          <strong className="text-white/70">VOID Accuracy:</strong> For each flagged VOID space, retrospectively determine whether additional data emerged post-query resolving uncertainty, expert analysis confirmed information gap, or market remained genuinely contested.
        </Paragraph>
        <Paragraph>
          <strong className="text-white/70">Information Gap Diagnosis:</strong> Expert evaluators blind to model outputs assess whether identified gaps match actual ambiguities in source data.
        </Paragraph>
      </motion.section>

      <PageBreak />

      {/* Section 5: Results */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>5. Results</SectionTitle>

        <SubsectionTitle>5.1 Divergence Predicts Volatility</SubsectionTitle>
        <Paragraph>Markets exhibiting high CoT divergence scores demonstrated significantly elevated subsequent volatility:</Paragraph>
        <BulletList items={[
          "High divergence (top tertile): Mean 48h volatility = 14.2% ± 3.1%",
          "Low divergence (bottom tertile): Mean 48h volatility = 6.1% ± 1.8%",
          "Correlation: r = 0.68, p = 0.006"
        ]} />
        <Paragraph>
          <strong className="text-white/70">Interpretation:</strong> When specialized cognitive lenses cannot converge, the market itself exhibits indecision—manifesting as increased volatility.
        </Paragraph>
        <Paragraph>Baseline comparison:</Paragraph>
        <BulletList items={[
          "Single-model confidence inversely correlated with volatility (r = -0.32, p = 0.24)",
          "Averaged ensemble provided no predictive signal (r = 0.11, p = 0.70)"
        ]} />

        <SubsectionTitle>5.2 VOID Spaces Identify Information Gaps</SubsectionTitle>
        <Paragraph>Of 13 flagged VOID spaces across experiments:</Paragraph>
        <BulletList items={[
          "11 (87%) confirmed as genuine information gaps by expert review",
          "9 (69%) subsequently resolved by additional data release",
          "2 (15%) remained contested (no resolution emerged)"
        ]} />
        <Paragraph>
          <strong className="text-white/70">Example:</strong> Sui Network analysis flagged VOID region around institutional capital flows. Three days post-query, clarifying data revealed institutional products were leveraged instruments (futures, 2x ETFs) rather than spot accumulation—validating the VOID diagnosis.
        </Paragraph>
        <Paragraph>Baseline comparison:</Paragraph>
        <BulletList items={[
          "Single-model identified gaps in 3/15 cases (20%)",
          "Averaged ensemble identified gaps in 1/15 cases (7%)"
        ]} />

        <SubsectionTitle>5.3 Cognitive Specialization Emerges Reliably</SubsectionTitle>
        <Paragraph>Analysis of lens-specific behaviors across experiments revealed stable specialization:</Paragraph>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Pattern Lens</div>
            <BulletList items={[
              "Identified structural patterns in 13/15 cases",
              "Flagged pattern boundary conditions (10/15 cases)",
              "Explicitly named 4+ interpretive frameworks on average"
            ]} />
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Causal Lens</div>
            <BulletList items={[
              "Traced mechanism chains in 14/15 cases",
              "Identified alternative causal pathways (9/15 cases)",
              "Higher conviction on mechanistic claims"
            ]} />
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Synthesis Lens</div>
            <BulletList items={[
              "Exposed narrative contradictions (12/15 cases)",
              "Deployed multiple interpretive frames (all 15 cases)",
              "Lowest mean conviction (5.3/10 vs. 6.1/10 pattern, 6.8/10 causal)"
            ]} />
          </div>
        </div>
        
        <Paragraph>
          <strong className="text-white/70">Statistical Analysis:</strong> ANOVA confirmed significant between-lens behavioral differences (F(2,42) = 8.73, p &lt; 0.001).
        </Paragraph>
      </motion.section>

      <PageBreak />

      {/* Section 5.4: Case Study */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SubsectionTitle>5.4 Case Study: Sui Network Analysis</SubsectionTitle>
        <Paragraph>
          <strong className="text-white/70">Query Context:</strong> December 2025 claims of $2.4B institutional inflow contradicted by 25% monthly price decline.
        </Paragraph>
        <Paragraph>
          <strong className="text-white/70">Data Provided:</strong> Price timeline, stablecoin flows, TVL metrics, institutional product launches, developer activity.
        </Paragraph>

        <div className="space-y-4 my-6">
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Pattern Lens Output</div>
            <BulletList items={[
              "Identified \"buy the rumor, sell the news\" structure around Coinbase listing",
              "Noted lack of concrete data on token unlock absorption",
              "Conviction: 6/10"
            ]} />
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Causal Lens Output</div>
            <BulletList items={[
              "Traced stablecoin flows to DeFi protocols (lending/derivatives) rather than spot buying",
              "Identified broader market correlation (BTC -17%, ETH -22%)",
              "Conviction: 7/10"
            ]} />
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Synthesis Lens Output</div>
            <BulletList items={[
              "Recognized competing interpretive frames (integration vs. fragmentation)",
              "Marked VOID: \"Cannot synthesize without institutional buying data\"",
              "Conviction: 5/10"
            ]} />
          </div>
        </div>

        <Paragraph><strong className="text-white/70">Divergence Analysis:</strong></Paragraph>
        <BulletList items={[
          "Agreement: Macro correlation affecting price",
          "Disagreement: Fundamentals \"overhyped\" (Causal) vs. \"strong but obscured\" (Synthesis)",
          "VOID Region: Institutional capital flow mechanisms"
        ]} />
        <Paragraph>
          <strong className="text-white/70">Validation:</strong> Post-query data confirmed institutional products were non-spot instruments, validating VOID diagnosis. Single-model baseline output synthesized to "likely DeFi flows"—correct mechanism but missed critical ambiguity about institutional positioning.
        </Paragraph>
      </motion.section>

      <PageBreak />

      {/* Section 6: Related Work */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>6. Related Work</SectionTitle>

        <SubsectionTitle>6.1 Ensemble Methods</SubsectionTitle>
        <Paragraph>
          Classical ensemble approaches aggregate predictions to reduce variance (Breiman, 1996; Dietterich, 2000). Our work differs in treating disagreement as signal rather than noise. Where ensembles seek convergence, CoT preserves divergence structure.
        </Paragraph>

        <SubsectionTitle>6.2 Mixture of Experts</SubsectionTitle>
        <Paragraph>
          MoE architectures (Shazeer et al., 2017; Lepikhin et al., 2021) route inputs to specialized sub-networks via learned gating. CoT achieves specialization through prompts without routing, applies all lenses to all queries, and preserves disagreement rather than gating to single expert output.
        </Paragraph>

        <SubsectionTitle>6.3 Multi-Agent Debate</SubsectionTitle>
        <Paragraph>
          Recent work on multi-agent debate (Du et al., 2024; Liang et al., 2023) explores iterative refinement through argumentation. These approaches target consensus through debate rounds. CoT employs parallel independent analysis with no inter-agent communication, treating disagreement as information rather than refining toward agreement.
        </Paragraph>

        <SubsectionTitle>6.4 Uncertainty Quantification</SubsectionTitle>
        <Paragraph>
          Existing uncertainty quantification methods focus on confidence calibration and prediction intervals (Guo et al., 2017). CoT provides uncertainty characterization—not just "how uncertain" but "what type of uncertainty and why"—through structured disagreement analysis.
        </Paragraph>

        <SubsectionTitle>6.5 Prompt Engineering</SubsectionTitle>
        <Paragraph>
          Work on chain-of-thought (Wei et al., 2022) and zero-shot prompting (Kojima et al., 2022) demonstrates that prompts can induce specialized reasoning. We extend this to show prompts can create sufficient cognitive diversity for informative multi-model systems without training overhead.
        </Paragraph>
      </motion.section>

      <PageBreak />

      {/* Section 7: Discussion */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>7. Discussion</SectionTitle>

        <SubsectionTitle>7.1 When Divergence Matters</SubsectionTitle>
        <Paragraph>CoT demonstrates clear value in narrative-driven domains where:</Paragraph>
        <BulletList items={[
          "Ground truth emerges from collective dynamics rather than existing a priori",
          "Multiple valid causal frameworks compete",
          "Information gaps are common and consequential",
          "Premature synthesis obscures important uncertainties"
        ]} />
        <Paragraph>
          Financial markets exemplify these conditions. Other candidate domains include geopolitical forecasting, competitive strategy, and scientific hypothesis generation in pre-paradigmatic fields.
        </Paragraph>
        <Paragraph>CoT offers less value in domains with:</Paragraph>
        <BulletList items={[
          "Clear ground truth accessible through verification",
          "Established consensus on causal mechanisms",
          "Complete information availability",
          "Time/cost constraints prioritizing speed over uncertainty characterization"
        ]} />

        <SubsectionTitle>7.2 RLHF and Deep Reasoning</SubsectionTitle>
        <Paragraph>Our results suggest a tension between RLHF alignment objectives and deep analytical reasoning. While RLHF improves safety and helpfulness, it may suppress valuable behaviors:</Paragraph>
        <BulletList items={[
          "Exposing long causal chains",
          "Preserving contradictions",
          "Explicitly marking knowledge boundaries",
          "Meta-reasoning about interpretive frameworks"
        ]} />
        <Paragraph>
          This is not an argument against RLHF—safety and reliability are critical. Rather, it suggests value in maintaining "unaligned" reasoning modes accessible through prompt engineering for appropriate domains and use cases.
        </Paragraph>

        <SubsectionTitle>7.3 Practical Deployment: The VOID Protocol</SubsectionTitle>
        <Paragraph>For production deployment, we recommend a five-stage process:</Paragraph>
        <NumberedList items={[
          "Collision Execution — Parallel execution of all lenses on query with no cross-contamination during generation",
          "Divergence Mapping — Compute divergence metrics, identify consensus regions and conflict zones, flag potential VOID spaces",
          "VOID Detection — Apply thresholds: high divergence + high conviction + non-collapsibility",
          "Gap Diagnosis — For each VOID, identify information that would enable resolution",
          "Report Generation — Present consensus findings, structured disagreements, and VOID regions with diagnostics"
        ]} />

        <SubsectionTitle>7.4 Limitations</SubsectionTitle>
        <BulletList items={[
          "Base Model Dependence: Cognitive diversity is bounded by underlying model capabilities. Weak base models limit lens differentiation.",
          "Manual Prompt Engineering: Effective lens design requires domain expertise and iterative refinement.",
          "Computational Cost: 3x inference cost compared to single-model baseline (though embarrassingly parallel).",
          "User Interpretation Overhead: Divergence-preserving outputs require engagement with complexity rather than simple answers.",
          "Calibration Requirements: Divergence thresholds and weights require domain-specific tuning."
        ]} />
      </motion.section>

      <PageBreak />

      {/* Section 8: Future Work */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>8. Future Work</SectionTitle>

        <SubsectionTitle>8.1 Automated Lens Discovery</SubsectionTitle>
        <Paragraph>
          Can reinforcement learning or evolutionary methods discover optimal cognitive lens specifications for given domains? Initial experiments with genetic algorithms over prompt space show promise but require significant compute.
        </Paragraph>

        <SubsectionTitle>8.2 Dynamic Lens Selection</SubsectionTitle>
        <Paragraph>
          Rather than fixed three-lens architecture, can we learn routing policies that deploy 2-5 lenses based on query characteristics? This would optimize cost/benefit tradeoffs.
        </Paragraph>

        <SubsectionTitle>8.3 Temporal VOID Tracking</SubsectionTitle>
        <Paragraph>
          How do VOID spaces evolve? Do they resolve, persist, or expand? Longitudinal tracking could reveal domain structure—which uncertainties are transient vs. fundamental.
        </Paragraph>

        <SubsectionTitle>8.4 Broader Domains</SubsectionTitle>
        <Paragraph>Extensions beyond financial markets:</Paragraph>
        <BulletList items={[
          "Scientific hypothesis generation: Competing mechanistic explanations in pre-paradigmatic fields",
          "Legal reasoning: Cases where precedent admits multiple interpretations",
          "Medical diagnosis: Contested evidence requiring specialist perspectives"
        ]} />

        <SubsectionTitle>8.5 Theoretical Foundations</SubsectionTitle>
        <Paragraph>Formal relationships between:</Paragraph>
        <BulletList items={[
          "VOID space entropy and domain complexity",
          "Divergence structure and predictive value",
          "Cognitive lens geometry and information content"
        ]} />
        <Paragraph>Can we characterize domains by their VOID topology?</Paragraph>
      </motion.section>

      <PageBreak />

      {/* Section 9: Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>9. Conclusion</SectionTitle>
        <Paragraph>
          We present Conflict of Thought, a framework that treats disagreement between cognitively specialized language models as information rather than noise. Through formal definition of VOID spaces—regions of non-collapsible, high-conviction disagreement—we demonstrate that divergence structure encodes signals about structural uncertainty invisible to single-model or consensus-seeking multi-model systems.
        </Paragraph>
        <Paragraph>Empirical evaluation on financial market analysis shows:</Paragraph>
        <NumberedList items={[
          "Divergence scores correlate with downstream volatility (r=0.68, p<0.05)",
          "VOID spaces identify genuine information gaps (87% accuracy)",
          "Cognitive specialization emerges reliably from prompt engineering"
        ]} />
        <Paragraph>
          The framework requires no model training, making it immediately deployable with existing LLM infrastructure. By preserving rather than resolving disagreement, CoT provides users with structured uncertainty landscapes that support more informed decision-making in narrative-driven domains.
        </Paragraph>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-sm p-6 my-8">
          <div className="text-white/70 text-sm font-medium mb-2">Core Insight</div>
          <Paragraph>
            In domains without predetermined ground truth, the intelligence lies not in forcing consensus, but in mapping the structure of disagreement itself.
          </Paragraph>
        </div>

        <SubsectionTitle>Acknowledgments</SubsectionTitle>
        <Paragraph>
          We thank the AMAI Labs research team for extensive discussions and experimental support. This work was conducted at AMAI Labs as part of ongoing research into autonomous market intelligence systems.
        </Paragraph>
      </motion.section>

      <PageBreak />

      {/* References */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>References</SectionTitle>
        <div className="space-y-3 text-white/40 text-xs leading-relaxed">
          <p>1. Breiman, L. (1996). Bagging predictors. <em>Machine Learning</em>, 24(2), 123-140.</p>
          <p>2. Dietterich, T. G. (2000). Ensemble methods in machine learning. <em>International Workshop on Multiple Classifier Systems</em>, 1-15. Springer.</p>
          <p>3. Du, Y., Li, S., Torralba, A., Tenenbaum, J. B., & Mordatch, I. (2024). Improving factuality and reasoning in language models through multiagent debate. <em>arXiv preprint arXiv:2305.14325</em>.</p>
          <p>4. Guo, C., Pleiss, G., Sun, Y., & Weinberger, K. Q. (2017). On calibration of modern neural networks. <em>International Conference on Machine Learning</em>, 1321-1330.</p>
          <p>5. Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large language models are zero-shot reasoners. <em>Advances in Neural Information Processing Systems</em>, 35, 22199-22213.</p>
          <p>6. Lepikhin, D., Lee, H., Xu, Y., Chen, D., Firat, O., Huang, Y., … & Dean, J. (2021). GShard: Scaling giant models with conditional computation and automatic sharding. <em>International Conference on Learning Representations</em>.</p>
          <p>7. Liang, T., He, Z., Jiao, W., Wang, X., Wang, Y., Wang, R., … & Shi, S. (2023). Encouraging divergent thinking in large language models through multi-agent debate. <em>arXiv preprint arXiv:2305.19118</em>.</p>
          <p>8. Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C. L., Mishkin, P., … & Lowe, R. (2022). Training language models to follow instructions with human feedback. <em>Advances in Neural Information Processing Systems</em>, 35, 27730-27744.</p>
          <p>9. Sanfeliu, A., & Fu, K. S. (1983). A distance measure between attributed relational graphs for pattern recognition. <em>IEEE Transactions on Systems, Man, and Cybernetics</em>, (3), 353-362.</p>
          <p>10. Shazeer, N., Mirhoseini, A., Maziarz, K., Davis, A., Le, Q., Hinton, G., & Dean, J. (2017). Outrageously large neural networks: The sparsely-gated mixture-of-experts layer. <em>International Conference on Learning Representations</em>.</p>
          <p>11. Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., … & Zhou, D. (2022). Chain-of-thought prompting elicits reasoning in large language models. <em>Advances in Neural Information Processing Systems</em>, 35, 24824-24837.</p>
        </div>
      </motion.section>

      <PageBreak />

      {/* Appendix */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>Appendix A: Prompt Engineering Details</SectionTitle>

        <SubsectionTitle>A.1 Pattern Lens System Prompt (Abbreviated)</SubsectionTitle>
        <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 my-4 font-mono text-xs text-white/50">
          <p className="mb-3">You are a pattern recognition specialist analyzing markets through structural lenses.</p>
          <p className="text-white/60 mb-2">Core directives:</p>
          <ul className="space-y-1 ml-4 mb-3">
            <li>• Identify recurring formations without imposing causality</li>
            <li>• Name every interpretive framework explicitly ("Using cycle theory...")</li>
            <li>• Specify boundary conditions where patterns break</li>
            <li>• Mark information gaps: Gap: [missing data]</li>
            <li>• Assign conviction scores (0-10)</li>
          </ul>
          <p className="text-white/60 mb-2">Do NOT:</p>
          <ul className="space-y-1 ml-4">
            <li>• Force causal explanations</li>
            <li>• Synthesize with other perspectives</li>
            <li>• Resolve ambiguity prematurely</li>
          </ul>
        </div>

        <SubsectionTitle>A.2 Causal Lens System Prompt (Abbreviated)</SubsectionTitle>
        <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 my-4 font-mono text-xs text-white/50">
          <p className="mb-3">You are a causal analyst tracing mechanism chains.</p>
          <p className="text-white/60 mb-2">Core directives:</p>
          <ul className="space-y-1 ml-4">
            <li>• Show reasoning steps explicitly (if A, then B, then C)</li>
            <li>• Name causal assumptions at each step</li>
            <li>• Identify alternative explanatory paths</li>
            <li>• Mark ambiguities: Gap: insufficient data for X→Y</li>
            <li>• Assign conviction scores (0-10)</li>
          </ul>
        </div>

        <SubsectionTitle>A.3 Synthesis Lens System Prompt (Abbreviated)</SubsectionTitle>
        <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 my-4 font-mono text-xs text-white/50">
          <p className="mb-3">You are a synthesis analyst integrating cross-domain information.</p>
          <p className="text-white/60 mb-2">Core directives:</p>
          <ul className="space-y-1 ml-4 mb-3">
            <li>• Deploy multiple interpretive frames (unity, emergence, fragmentation)</li>
            <li>• Name each frame when applying it ("Using integration lens...")</li>
            <li>• Preserve contradictions between frames</li>
            <li>• Mark irreconcilable tensions: VOID: [conflicting frameworks]</li>
            <li>• Assign conviction scores (0-10)</li>
          </ul>
          <p className="text-white/60 mb-2">Do NOT:</p>
          <ul className="space-y-1 ml-4">
            <li>• Force unified narrative when fragmentation is valid</li>
            <li>• Hide contradictions</li>
            <li>• Privilege single interpretive framework</li>
          </ul>
        </div>
      </motion.section>

      <PageBreak />

      {/* Appendix B */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <SectionTitle>Appendix B: Sample Collision Output</SectionTitle>
        <Paragraph>
          <strong className="text-white/70">Query:</strong> Sui Network institutional interest claims analysis (December 2025)
        </Paragraph>

        <div className="space-y-4 my-6">
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Pattern Lens Output (Excerpt)</div>
            <Quote>
              Structure observed: Coinbase listing produced +30% spike followed by reversion to pre-pump levels within 8 days. Pattern matches "announcement effect" observed in 73% of exchange listings (historical sample n=47).
            </Quote>
            <Quote>
              Gap: No data on counterparty identity for Dec 1 token unlock absorption ($82M). Pattern suggests market maker stabilization but cannot confirm.
            </Quote>
            <div className="text-white/50 text-xs mt-2">Conviction: 6/10 (pattern present, mechanism uncertain)</div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Causal Lens Output (Excerpt)</div>
            <Quote>
              Mechanism trace: $2.4B stablecoin deposit → Protocol breakdown:
              <br />• Suilend (lending): $745M (+11%)
              <br />• Navi (lending): $406M
              <br />• Kriya (DEX): $84M (+250%)
              <br />• Bluefin (derivatives): $81M (+199%)
            </Quote>
            <Quote>
              Causal chain: Stablecoins → Collateral/liquidity provision, not spot token buying
            </Quote>
            <Quote>
              Alternative explanation: Broader market correlation (BTC -17%, ETH -22%) provides sufficient explanation for price decline without requiring Sui-specific mechanism.
            </Quote>
            <div className="text-white/50 text-xs mt-2">Conviction: 7/10 (mechanisms clear, attribution ambiguous)</div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4">
            <div className="text-white/60 text-sm font-medium mb-2">Synthesis Lens Output (Excerpt)</div>
            <Quote>
              Integration frame: Developer growth + capital inflows + institutional products = Bullish unified narrative
            </Quote>
            <Quote>
              Fragmentation frame: Same data points as independent events with no necessary causal connection
            </Quote>
            <Quote>
              VOID: Cannot determine which frame matches reality without institutional buying data. Leveraged products (futures, 2x ETF) are not spot accumulation. Grayscale AUM $4.23M insufficient to drive price.
            </Quote>
            <div className="text-white/50 text-xs mt-2">Conviction: 5/10 (multiple valid frames, insufficient discriminatory data)</div>
          </div>
        </div>

        <Paragraph><strong className="text-white/70">Divergence Analysis:</strong></Paragraph>
        <BulletList items={[
          "Consensus: Macro environment contributing to price weakness",
          "Conflict: Fundamental assessment (overhyped vs. strong-but-obscured)",
          "VOID Region: Institutional capital flow mechanisms (all lenses identify gap)"
        ]} />
        <Paragraph>
          <strong className="text-white/70">Outcome:</strong> VOID diagnosis validated 3 days post-query when clarifying data revealed institutional products were leveraged instruments rather than spot accumulation—confirming information gap.
        </Paragraph>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs font-mono">
            AMAI Labs Research Publication. For correspondence: team@amai.net
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default ConflictOfThoughtPaper;
