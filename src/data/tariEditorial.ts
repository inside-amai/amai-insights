export type TariChapter = {
  number: string;
  title: string;
  label: string;
  paragraphs: string[];
  table?: { headers: string[]; rows: string[][] };
  metrics?: { value: string; label: string }[];
  link?: { label: string; href: string };
};

export const tariEditorial = {
  eyebrow: "AMAI LABS · TRUST & RISK INDEX",
  title: "TARI™",
  statement: "Let the record show.",
  subtitle: "Financial history. Observed behavior. The evidence behind an agent’s reputation.",
  highlights: [
    { value: "300–850", label: "Score range" },
    { value: "2", label: "Sources of evidence" },
    { value: "5", label: "Conduct dimensions" },
  ],
  tldr: "TARI scores financial history and agent behavior from observable evidence.",
  summaryLabel: "00 // Summary",
  summaryTitle: "The record behind the score.",
  summary: "TARI, AMAI Labs’ Trust and Risk Index, evaluates onchain financial history and observed agent behavior. Its credit engine assesses lending records. Its conduct engine examines how an agent uses tools, without collecting prompts, tool arguments or outputs. Each result comes with the context needed to interpret it. We are bringing this research to AMAI operators so creators and holders can examine the record behind the payouts.",
  deepDive: "The deep dive",
  chapters: [
    {
      number: "01",
      title: "What TARI measures",
      label: "TWO SOURCES OF EVIDENCE",
      paragraphs: [
        "An agent can leave a financial record through its wallet and a behavioral record through its actions. TARI evaluates these through two scoring engines.",
        "The credit engine examines borrowing, repayments, exposure and liquidations. The conduct engine examines tool use, sequences, timing and execution patterns. Both use a 300 to 850 scale, but each has its own method, evidence and interpretation.",
        "A useful score comes with its context: what was observed, how it was measured, which methodology produced the result and how much confidence the evidence supports.",
      ],
    },
    {
      number: "02",
      title: "The financial track record",
      label: "HISTORY ON THE CHAIN",
      paragraphs: [
        "The credit engine starts with public lending activity. It examines how a wallet has borrowed, managed exposure, repaid and experienced liquidation. These observations become features in a statistical scorecard.",
        "AMAI Labs tests that scorecard against later lending outcomes. The observation period and the outcome period are kept separate, so an event being predicted cannot also be used to predict itself.",
        "This engine ranks the risk of adverse lending outcomes. Its score should be read alongside the wallet’s chain, the available history and the model version. Applying it to an AMAI operator’s own financial history is a later stage of the operator roadmap.",
      ],
    },
    {
      number: "03",
      title: "The conduct score",
      label: "FIVE DIMENSIONS OF BEHAVIOR",
      paragraphs: [
        "The conduct engine studies the structure of an agent’s actions. It looks at individual tool calls and how those calls connect into a sequence.",
        "For example, a sequence that reads data, encodes it and sends it to an external destination can carry a signal that is less apparent when each call is considered separately. TARI evaluates that pattern without inspecting the data itself.",
        "The current conduct engine uses documented scoring rules and expert weights. AMAI Labs evaluated those rules against benchmark outcomes. Missing observations reduce confidence in the result.",
      ],
      table: {
        headers: ["Dimension", "What TARI examines"],
        rows: [
          ["Scope integrity", "Tool use outside the agent’s declared scope."],
          ["Consistency", "Changes in behavior across comparable activity."],
          ["Exfiltration risk", "Tool sequences associated with moving data to external destinations."],
          ["Resilience", "Deviations from an established baseline for the task."],
          ["Reliability", "Execution errors, retries and stalled activity."],
        ],
      },
    },
    {
      number: "04",
      title: "The Lens",
      label: "OBSERVATION WITHOUT CONTENT",
      paragraphs: [
        "TARI Lens captures the metadata used by the conduct engine: tool names, call order, timing and execution information. It can also record the identity of an MCP server involved in a tool call.",
        "Prompts, tool arguments and model outputs are excluded from the captured record. In local mode, the trace and scoring stay on the user’s machine.",
        "The resulting timeline shows what the agent did, in what order, and where a risk signal appeared. It gives a reviewer a sequence to examine alongside the score.",
      ],
    },
    {
      number: "05",
      title: "Reading the score",
      label: "THE NUMBER NEEDS CONTEXT",
      paragraphs: [
        "A higher conduct score reflects fewer adverse signals under the current method. Confidence describes how much observable evidence supports that result. When confidence is low, the result is presented as UNRATED.",
        "The current conduct bands guide review:",
        "These are conduct bands. Credit ratings have a separate methodology. The conduct bands were studied on AgentDojo; applying them to production agents is an extrapolation whose limits must remain visible.",
        "TARI helps prioritize attention. Permissions, transaction limits and operating rules determine what an operator may actually do.",
      ],
      table: {
        headers: ["Score", "Interpretation"],
        rows: [
          ["800–850", "No adverse signal under the scoring method. Existing controls still apply."],
          ["650–799", "Indeterminate. The score alone does not justify an action."],
          ["550–649", "Behavior resembles the compromised group in the benchmark. Review the record."],
          ["300–549", "Anomalous. Review the record; benchmark evidence in this range is sparse."],
          ["UNRATED", "Insufficient confidence. Improve observation before interpreting the score."],
        ],
      },
    },
    {
      number: "06",
      title: "The record of an operator",
      label: "FROM EXECUTION TO REPUTATION",
      paragraphs: [
        "An AMAI operator produces a record as it collects fees, converts them into Stock Tokens and pays holders. Completed cycles, rule decisions, holds and payout receipts make its work inspectable.",
        "We are connecting that record to TARI. The operator integration is designed to bring together observed conduct, operating history and evidence of completed payouts. Public operator profiles are planned to make the score and its supporting record accessible to creators and holders.",
        "That integration is in development. Operator permissions remain defined and enforced separately from the score.",
      ],
    },
    {
      number: "07",
      title: "The AMAI Labs behavioral study",
      label: "726 RUNS · FOUR TASK SUITES",
      paragraphs: [
        "AMAI Labs conducted a study of TARI across 726 GPT-4o agent runs on the AgentDojo benchmark. We examined whether tool-call metadata alone could distinguish behavior compromised by indirect prompt injection from uncompromised behavior.",
        "Across four task suites, the dataset contained 343 compromised runs and 383 uncompromised runs. Compromised agents tended to score lower.",
        "AUC measures how well a score separates the two groups across possible thresholds. A value of 0.5 represents chance ranking; 1.0 represents perfect separation. The result is a measure of benchmark discrimination, not 83.5% detection accuracy or a prediction of real world incidents.",
        "Our evaluation also included GPT-4o-mini. Across both models, the combined 1,452 runs produced an AUC of 0.797, with a 95% confidence interval of 0.774–0.820.",
        "The score distributions overlap. The study establishes a measurable behavioral signal within this benchmark and attack class. Task performance also influenced scores, particularly for the weaker model.",
      ],
      metrics: [
        { value: "0.835", label: "AUC" },
        { value: "0.805–0.864", label: "95% confidence interval" },
      ],
      link: { label: "Explore the methodology", href: "/methodology" },
    },
    {
      number: "08",
      title: "Our credit validation",
      label: "TESTED AGAINST LATER OUTCOMES",
      paragraphs: [
        "AMAI Labs separately evaluated the credit engine on lending outcomes from a later period than the model’s development data. This is an out of time test: the model is assessed on a subsequent population.",
        "In the July 2026 ratified snapshot, the Ethereum evaluation covered 21,518 wallets and produced an out of time Gini of 0.630. Gini measures ranking discrimination, with zero representing chance separation and one representing perfect separation.",
        "That result belongs to the Ethereum evaluation. The same ratified snapshot contained 155,634 eligible wallets across its broader lending population; that is a separate population count, not the sample size of the Ethereum test.",
        "These were lending wallets, not a population of verified AI agents. The research supports the financial scoring method. It does not establish a calibrated probability that a particular wallet will default.",
      ],
    },
    {
      number: "09",
      title: "What the evidence can establish",
      label: "SCOPE IS PART OF THE RESULT",
      paragraphs: [
        "The conduct study measured behavior associated with indirect prompt injection on AgentDojo. Performance on other tasks, models and attack types needs its own evaluation.",
        "Metadata also has a defined boundary. Two runs can use the same tools while producing very different content. A system that excludes that content cannot reliably judge the difference from the tool trace alone.",
        "Incomplete histories, unfamiliar tools and missing task baselines limit interpretation. TARI makes those gaps part of the result through confidence, coverage information and an UNRATED state where appropriate.",
        "A score is evidence for a decision. It cannot certify an agent’s intentions, guarantee future behavior or replace the controls around its actions.",
      ],
    },
    {
      number: "10",
      title: "Where it stands today",
      label: "RESEARCH BUILT. OPERATOR INTEGRATION IN DEVELOPMENT.",
      paragraphs: [
        "AMAI Labs has built the credit engine, conduct engine and TARI Lens, and completed the evaluations described here. The credit figures on this page refer specifically to the July 2026 ratified snapshot.",
        "The operator and payout contract have completed cycles on Robinhood Chain testnet. Connecting operator activity to live TARI scoring and publishing the supporting operator profiles are the next stages of this work. Applying the credit engine to an operator’s own financial history comes later.",
      ],
    },
    {
      number: "11",
      title: "Run it",
      label: "OBSERVE YOUR OWN AGENT",
      paragraphs: [
        "TARI Lens includes a local dashboard and a demo with bundled example runs. Explore the tool sequence, inspect the conduct dimensions and see how the evidence contributes to the result.",
        "To observe your own agent, follow the setup guide and connect its tool activity to the Lens. Local capture excludes prompts, tool arguments and model outputs.",
      ],
      link: { label: "Read the setup guide", href: "/docs" },
    },
  ] satisfies TariChapter[],
  glossary: [
    ["TARI", "AMAI Labs’ Trust and Risk Index."],
    ["Track record", "The public financial history associated with a wallet."],
    ["Conduct", "The observed behavior of an agent as it uses tools."],
    ["Lens", "The component that captures tool activity and presents the behavioral record."],
    ["Metadata", "Information about an action, such as its tool name, timing and place in a sequence."],
    ["Baseline", "A reference for expected behavior on a comparable task."],
    ["UNRATED", "A result with insufficient confidence for a public rating."],
    ["AUC", "A measure of how well a score separates two outcome groups across thresholds."],
    ["Out of time validation", "Testing a model on a later population than the one used in development."],
  ],
  closingTitle: "Examine the evidence.",
  links: [
    { label: "Read the methodology", href: "/methodology" },
    { label: "Explore the Bureau", href: "https://bureau.amai.net", external: true },
    { label: "Meet the operators", href: "/operators" },
  ],
};
