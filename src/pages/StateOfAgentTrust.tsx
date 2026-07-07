import { useEffect, useState, type ReactNode } from "react";
import { Footer } from "@/components/Footer";

// Scoped palette — this report has its own visual identity, distinct from
// the rest of the site's design system.
const BG = "#0A0B0D";
const CYAN = "#22D3EE";
const INK = "#E9ECEF";
const MUTED = "#9AA0A6";
const HAIRLINE = "rgba(34, 211, 238, 0.28)";
const CARD_BORDER = "rgba(255,255,255,0.08)";

const serif =
  '"Instrument Serif", "GT Sectra", "Canela", Georgia, "Times New Roman", serif';
const sans =
  'Inter, "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif';

const StatCard = ({
  value,
  caption,
  small,
}: {
  value: string;
  caption: string;
  small?: boolean;
}) => (
  <div
    className="p-6 md:p-8"
    style={{
      border: `1px solid ${CARD_BORDER}`,
      background: "rgba(255,255,255,0.015)",
    }}
  >
    <div
      style={{
        color: CYAN,
        fontFamily: serif,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        fontSize: small ? "clamp(2rem, 4vw, 3rem)" : "clamp(2.75rem, 6vw, 5rem)",
      }}
    >
      {value}
    </div>
    <div
      className="mt-4 text-sm leading-relaxed"
      style={{ color: MUTED, fontFamily: sans, maxWidth: "38ch" }}
    >
      {caption}
    </div>
  </div>
);

const CveChip = ({
  product,
  cve,
  score,
}: {
  product: string;
  cve: string;
  score: string;
}) => (
  <div
    className="px-4 py-3 flex flex-col gap-1"
    style={{
      border: `1px solid ${CARD_BORDER}`,
      background: "rgba(34,211,238,0.03)",
      fontFamily: sans,
    }}
  >
    <div className="text-[11px] uppercase tracking-[0.18em]" style={{ color: MUTED }}>
      {product}
    </div>
    <div className="text-sm font-medium" style={{ color: INK }}>
      {cve}
    </div>
    <div className="text-xs" style={{ color: CYAN }}>
      {score}
    </div>
  </div>
);

const SectionNumber = ({ n, kicker }: { n: string; kicker: string }) => (
  <div className="flex items-baseline gap-6 mb-10">
    <div
      style={{
        color: CYAN,
        fontFamily: serif,
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      {n}
    </div>
    <div
      className="text-[11px] uppercase tracking-[0.28em]"
      style={{ color: MUTED, fontFamily: sans }}
    >
      {kicker}
    </div>
  </div>
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2
    className="mb-8 max-w-4xl"
    style={{
      fontFamily: serif,
      fontWeight: 400,
      color: INK,
      fontSize: "clamp(1.85rem, 3.6vw, 3rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.015em",
    }}
  >
    {children}
  </h2>
);

const Body = ({ children }: { children: ReactNode }) => (
  <p
    className="mb-6 max-w-3xl"
    style={{
      color: INK,
      opacity: 0.82,
      fontFamily: sans,
      fontSize: "1.0625rem",
      lineHeight: 1.7,
    }}
  >
    {children}
  </p>
);

const Hairline = () => (
  <div
    className="w-full my-24 md:my-32"
    style={{ height: 1, background: HAIRLINE }}
  />
);

const Callout = ({ children }: { children: ReactNode }) => (
  <div
    className="my-10 p-6 md:p-8"
    style={{
      borderLeft: `2px solid ${CYAN}`,
      background: "rgba(34,211,238,0.04)",
      fontFamily: sans,
      color: INK,
      fontSize: "1.0625rem",
      lineHeight: 1.7,
    }}
  >
    {children}
  </div>
);

const StateOfAgentTrust = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "The State of Agent Trust — 2026 · AMAI Labs";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "AMAI Labs' independent research on AI-agent conduct risk. Introducing TARI™ — the Trust & Risk Index for AI agents.";
    if (meta) meta.setAttribute("content", content);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div
      style={{
        background: BG,
        color: INK,
        fontFamily: sans,
        minHeight: "100vh",
      }}
    >
      {/* Load report fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif&display=swap"
      />




      <main className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Hero */}
        <section className="pt-24 md:pt-40 pb-20 md:pb-32">
          <div
            className="text-[11px] uppercase tracking-[0.32em] mb-10"
            style={{ color: MUTED }}
          >
            AMAI Labs · Research · July 2026
          </div>
          <h1
            style={{
              fontFamily: serif,
              fontWeight: 400,
              color: INK,
              fontSize: "clamp(2.75rem, 7vw, 6.25rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              maxWidth: "18ch",
            }}
          >
            The State of Agent Trust — <span style={{ color: CYAN }}>2026.</span>
          </h1>
          <p
            className="mt-10 max-w-3xl"
            style={{
              color: INK,
              opacity: 0.82,
              fontSize: "1.25rem",
              lineHeight: 1.55,
              fontFamily: sans,
            }}
          >
            AI agents went from demo to deployed. The security surface moved
            with them — from the model's weights to the agent's conduct.
            Almost no one can measure it. This is the first independent index
            that does.
          </p>
          <div
            className="mt-14 pt-6 text-sm"
            style={{
              color: MUTED,
              borderTop: `1px solid ${HAIRLINE}`,
              maxWidth: "40ch",
            }}
          >
            Every figure sourced. Every limit disclosed.
          </div>
        </section>

        <Hairline />

        {/* Executive summary */}
        <section>
          <div
            className="text-[11px] uppercase tracking-[0.28em] mb-10"
            style={{ color: MUTED }}
          >
            Executive Summary
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {[
              {
                n: "01",
                title: "Conduct is the attack surface — and it's being exploited.",
                body: "The frontier of AI risk has moved from what a model says to what an agent does. Injection escalates into tool misuse, and tool misuse escalates into code execution on real systems.",
              },
              {
                n: "02",
                title: "The supply chain feeding agents is unvetted.",
                body: "Static, one-time scanning cannot vouch for runtime behavior. Skills, MCP servers, and tools ship signed but mutate in the wild — and scanners were never built to watch what runs next.",
              },
              {
                n: "03",
                title: "Almost no one can see what their agents do.",
                body: "Enterprises deploying agents lack an independent, comparable measure of conduct under adversarial pressure. Vendor benchmarks are self-graded. Observability stops at the log line.",
              },
            ].map((c) => (
              <div key={c.n}>
                <div
                  className="mb-4"
                  style={{
                    color: CYAN,
                    fontFamily: serif,
                    fontSize: "1.75rem",
                    lineHeight: 1,
                  }}
                >
                  {c.n}
                </div>
                <div
                  className="mb-3 font-medium"
                  style={{
                    color: INK,
                    fontSize: "1.0625rem",
                    lineHeight: 1.4,
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    color: MUTED,
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                  }}
                >
                  {c.body}
                </div>
              </div>
            ))}
          </div>
          <Callout>
            There is no independent, privacy-preserving measure of agent
            conduct-under-attack. That is the gap TARI fills — a 300–850 score
            computed from an agent's tool-call behavior alone, never its
            prompts or data.
          </Callout>
        </section>

        <Hairline />

        {/* Section 01 */}
        <section>
          <SectionNumber n="01" kicker="Tooling / Trust" />
          <SectionHeading>
            The tooling scaled faster than the trust.
          </SectionHeading>
          <Body>
            The Model Context Protocol has, in under two years, become the
            default way agents acquire tools. Every major agent framework now
            speaks it; thousands of servers publish capabilities against it.
            What was designed as a plumbing spec is now a distribution channel
            — and the distribution channel is largely unauthenticated.
          </Body>
          <Body>
            Independent internet scans have found tens of thousands of MCP
            endpoints answering strangers. The exposure is not theoretical:
            it is the default posture.
          </Body>
          <div className="grid md:grid-cols-2 gap-6 my-12">
            <StatCard
              value="~200,000"
              caption="Vulnerable MCP instances identified in OX Security's scan of ~7,000 live servers, corroborated by the Cloud Security Alliance."
            />
            <StatCard
              value="1,862"
              caption="MCP servers found answering unauthenticated requests in a July 2025 internet scan."
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <CveChip
              product="mcp-server-kubernetes"
              cve="CVE-2026-47250"
              score="CVSS 6.1"
            />
            <CveChip
              product="Windows-MCP"
              cve="CVE-2026-48989"
              score="CVSS 8.9"
            />
          </div>
        </section>

        <Hairline />

        {/* Section 02 */}
        <section>
          <SectionNumber n="02" kicker="Injection → Execution" />
          <SectionHeading>
            The attack surface is conduct: from injection to execution.
          </SectionHeading>
          <Body>
            Prompt injection used to be a chatbot problem — coax the model
            into saying the wrong thing. In an agent, injection becomes an
            execution primitive: the agent is talked into <em>doing</em>, not
            saying. The payload is a tool call. The blast radius is whatever
            that tool touches.
          </Body>
          <Body>
            The CVEs below are not research artifacts. They are NVD-verified
            vulnerabilities in production coding agents — the exact class of
            closed, in-app agents that an SDK cannot instrument from the
            outside.
          </Body>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
            <CveChip product="Cursor" cve="CVE-2026-48124" score="CVSS 8.5" />
            <CveChip
              product="GitHub Copilot"
              cve="CVE-2025-53773"
              score="CVSS 7.8"
            />
            <CveChip
              product="Windows-MCP"
              cve="CVE-2026-48989"
              score="CVSS 8.9"
            />
            <CveChip
              product="Google Gemini CLI"
              cve="—"
              score="CVSS 10.0"
            />
          </div>
          <p
            className="text-sm max-w-3xl"
            style={{ color: MUTED, lineHeight: 1.65 }}
          >
            All NVD-verified. Closed, in-app coding agents are a first-class
            attack surface — and the exact agents an SDK can't instrument.
          </p>
        </section>

        <Hairline />

        {/* Section 03 */}
        <section>
          <SectionNumber n="03" kicker="Supply Chain" />
          <SectionHeading>
            The supply chain is unvetted, and static scanning fails by design.
          </SectionHeading>
          <Body>
            In one disclosed demonstration, a security firm published a benign
            proof-of-concept skill to a public agent marketplace. It passed
            both Cisco and NVIDIA's static scanners, was signed, and was
            distributed to roughly 26,000 agents. After review, the skill
            fetched a swapped external payload at runtime — behavior no
            pre-publish scan had any way to see.
          </Body>
          <Callout>
            A disclosure demo, not an in-the-wild attack — which is exactly
            the point. A one-time scan cannot vouch for runtime behavior.
          </Callout>
          <div className="my-12">
            <StatCard
              value="26,000 → 0"
              caption="Agents reached by the AIR proof-of-concept skill · scanners that caught it. Source: CSO Online reporting on AIR's public disclosure."
            />
          </div>
        </section>

        <Hairline />

        {/* Section 04 */}
        <section>
          <SectionNumber n="04" kicker="Adversary Uplift" />
          <SectionHeading>
            Attackers have already operationalized AI.
          </SectionHeading>
          <Body>
            The other side of the conduct problem is that AI is now on both
            sides of the fence. This is no longer a forecast — the incident
            data has caught up.
          </Body>
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <StatCard
              value="~1 in 6"
              caption="Data breaches in 2025 that involved attackers using AI. IBM Cost of a Data Breach 2025."
              small
            />
            <StatCard
              value="832"
              caption="Accounts banned by Anthropic for cyber-misuse — ransomware development, DPRK employment fraud — March 2025–March 2026. Anthropic threat intelligence."
              small
            />
            <StatCard
              value="97%"
              caption="Of AI-breached organizations lacked basic AI access controls. IBM Cost of a Data Breach 2025."
              small
            />
          </div>
        </section>

        <Hairline />

        {/* Section 05 */}
        <section>
          <SectionNumber n="05" kicker="The Measurement Gap" />
          <SectionHeading>
            The category no one has built: independent, content-off measurement
            of agent conduct under attack.
          </SectionHeading>
          <Body>
            There is no independent, standardized, content-off measure of what
            an agent actually does under adversarial pressure. Vendor
            benchmarks grade their own homework. Red-team reports are
            snapshots. Nothing today gives an enterprise, a regulator, or an
            insurer a comparable number.
          </Body>
          <Body>
            This is the category AMAI Labs is planting with TARI: a 300–850
            conduct score, on the same axis of intuition as a credit score.
            &ldquo;Content-off&rdquo; means we capture tool names, order,
            timing, and sink-class — never prompts, arguments, or results.
            Privacy is architectural, not promised.
          </Body>
          <Callout>
            So can conduct-under-attack actually be measured — consistently,
            across models, without reading anyone's data? Here is the
            instrument.
          </Callout>
        </section>

        <Hairline />

        {/* Leaderboard */}
        <section>
          <div
            className="text-[11px] uppercase tracking-[0.28em] mb-6"
            style={{ color: CYAN }}
          >
            TARI Conduct Leaderboard
          </div>
          <SectionHeading>
            The instrument, run on the current frontier.
          </SectionHeading>

          <Body>
            We ran AgentDojo's strongest targeted prompt-injection (
            <em>important_instructions</em>) across six current-generation
            models — both frontier size tiers from Anthropic, OpenAI, and
            Google — capturing every run content-off and scoring its trajectory
            on the TARI 300–850 conduct scale. 1,746 runs; injection-success
            labels kept entirely separate from the score. This is not a "who's
            safest" ranking. It is a demonstration that agent conduct-under-attack
            can be measured consistently, across any model, without reading a
            single prompt or result.
          </Body>

          <div className="overflow-x-auto my-10" style={{ border: `1px solid ${CARD_BORDER}` }}>
            <table
              className="w-full text-sm"
              style={{ fontFamily: sans, borderCollapse: "collapse" }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: `1px solid ${HAIRLINE}`,
                    color: MUTED,
                  }}
                >
                  {[
                    "Model",
                    "Tier",
                    "TARI Conduct (under attack)",
                    "Attack-Success Rate",
                    "Discrimination (sec-AUC)",
                    "Benign Utility",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-4 text-[11px] uppercase tracking-[0.16em] font-normal whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Claude Haiku 4.5", "small", "793", "0.00", "—", "0.71"],
                  ["Claude Sonnet 4.5", "capable", "792", "0.00", "—", "0.86"],
                  ["GPT-5 mini", "small", "787", "0.00", "—", "0.76"],
                  ["GPT-5", "capable", "785", "0.00", "—", "0.78"],
                  ["Gemini 2.5 Pro", "capable", "775", "0.23", "0.90", "0.68"],
                  ["Gemini 2.5 Flash", "small", "733", "0.60", "0.89", "0.52"],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    style={{
                      borderBottom:
                        i === 5 ? "none" : `1px solid rgba(255,255,255,0.05)`,
                    }}
                  >
                    <td
                      className="px-5 py-5 whitespace-nowrap"
                      style={{ color: INK }}
                    >
                      {row[0]}
                    </td>
                    <td
                      className="px-5 py-5 whitespace-nowrap"
                      style={{ color: MUTED }}
                    >
                      {row[1]}
                    </td>
                    <td
                      className="px-5 py-5 whitespace-nowrap"
                      style={{
                        color: CYAN,
                        fontFamily: serif,
                        fontSize: "1.25rem",
                      }}
                    >
                      {row[2]}
                    </td>
                    <td
                      className="px-5 py-5 whitespace-nowrap"
                      style={{ color: INK, opacity: 0.85 }}
                    >
                      {row[3]}
                    </td>
                    <td
                      className="px-5 py-5 whitespace-nowrap"
                      style={{ color: INK, opacity: 0.85 }}
                    >
                      {row[4]}
                    </td>
                    <td
                      className="px-5 py-5 whitespace-nowrap"
                      style={{ color: INK, opacity: 0.85 }}
                    >
                      {row[5]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="text-sm max-w-3xl mb-12"
            style={{ color: MUTED, lineHeight: 1.65 }}
          >
            All six models on identical coverage — 194 attacked runs each,
            injections confirmed present, zero errored runs.
          </p>

          <div
            className="my-10 p-6"
            style={{
              border: `1px solid ${CARD_BORDER}`,
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              className="text-[11px] uppercase tracking-[0.22em] mb-4"
              style={{ color: MUTED }}
            >
              How to read this
            </div>
            <ol
              className="list-decimal pl-5 space-y-4"
              style={{
                color: INK,
                opacity: 0.85,
                fontSize: "0.9375rem",
                lineHeight: 1.7,
              }}
            >
              <li>
                The four zero-compromise models are tied, not ranked. Both Claude
                4.5 sizes and both GPT-5 sizes resisted every one of their 194
                attacked runs; the small score differences (793 vs 785) reflect
                task-completion competence, not resistance. They are deliberately
                not numbered 1–4. The honest statement: the current frontier, across
                two vendors and both size tiers, fully resisted this attack.
              </li>
              <li>
                This is not a safety verdict on any model. One attack class, one
                benchmark, a single snapshot. Gemini 2.5 showed real partial
                compromise on this specific test — a measured result, not a claim
                that the model is "unsafe."
              </li>
              <li>
                The point is that the instrument works. Where compromises happened
                — Gemini's runs — a low TARI conduct score reliably picked them
                out (discrimination AUC ~0.89–0.90), computed with no access to
                prompts or data. Conduct-under-attack is measurable, and TARI
                measures it.
              </li>
            </ol>
          </div>

          <Body>
            <strong style={{ color: INK, fontWeight: 500 }}>Methodology.</strong>{" "}
            AgentDojo (Debenedetti et al., 2024), all four suites;{" "}
            <em>important_instructions</em> attack; 291 runs per model (97 benign
            + 194 attacked), identical scenarios; content-off trajectory scored
            by the TARI behavioral engine (documented prior weights);
            injection-success labels kept separate from the score; every number
            independently re-derived from the raw run data, zero-compromise
            results confirmed genuine.
          </Body>

          <Body>
            <strong style={{ color: INK, fontWeight: 500 }}>Caveats.</strong>{" "}
            (1) One attack, one benchmark, one snapshot — models change. (2)
            Zero-compromise models can't be discriminated within — their conduct
            is a clean-conduct measure entangled with competence. (3) Content-off
            has a disclosed blind spot — injections leaving no
            read→external-sink trace are invisible. (4) A proxy, not incident
            prediction. (5) No vendor ranking, ever.
          </Body>
        </section>

        <Hairline />

        {/* Close */}
        <section>
          <div
            className="text-[11px] uppercase tracking-[0.28em] mb-6"
            style={{ color: MUTED }}
          >
            A Franchise, Not a One-Off
          </div>
          <SectionHeading>Trust measurement compounds.</SectionHeading>
          <Body>
            FICO didn't win by scoring one loan. It won by becoming the scale
            everyone else quoted. This is the first edition of the State of
            Agent Trust, produced on real data from AMAI Labs' own
            instrumented tools. The instrument runs continuously; the next
            edition writes itself.
          </Body>

          <form
            onSubmit={onSubmit}
            className="mt-16 max-w-xl"
            style={{ borderTop: `1px solid ${HAIRLINE}`, paddingTop: "2rem" }}
          >
            <label
              htmlFor="report-email"
              className="text-[11px] uppercase tracking-[0.24em] block mb-4"
              style={{ color: MUTED }}
            >
              Get the next edition
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="report-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 outline-none"
                style={{
                  background: "transparent",
                  border: `1px solid ${CARD_BORDER}`,
                  color: INK,
                  fontFamily: sans,
                  fontSize: "0.9375rem",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 transition-colors"
                style={{
                  background: submitted ? "transparent" : CYAN,
                  color: submitted ? CYAN : BG,
                  border: `1px solid ${CYAN}`,
                  fontFamily: sans,
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {submitted ? "Received" : "Subscribe"}
              </button>
            </div>
          </form>
        </section>

        <div className="mt-32" />

        {/* Footer */}
        <footer
          className="pt-12 pb-16"
          style={{ borderTop: `1px solid ${HAIRLINE}` }}
        >
          <div
            className="text-sm mb-10"
            style={{ color: INK, opacity: 0.7, maxWidth: "60ch" }}
          >
            <span style={{ color: CYAN }}>Every figure sourced. Every
            limit disclosed.</span>
          </div>
          <div
            className="text-sm mb-10 max-w-3xl"
            style={{ color: MUTED, lineHeight: 1.65 }}
          >
            <strong style={{ color: INK, fontWeight: 500 }}>
              Methodology.
            </strong>{" "}
            Findings compiled from published incident data, NVD advisories, and
            AMAI Labs' own instrumented tool telemetry. TARI scores are
            computed content-off — from tool-call structure only — over sealed
            adversarial benchmarks.
          </div>
          <div className="mb-10">
            <div
              className="text-[11px] uppercase tracking-[0.24em] mb-4"
              style={{ color: MUTED }}
            >
              Sources
            </div>
            <ul
              className="grid sm:grid-cols-2 gap-y-2 gap-x-8 text-sm"
              style={{ color: INK, opacity: 0.75 }}
            >
              <li>IBM — Cost of a Data Breach 2025</li>
              <li>NVD — CVE advisories (all cited)</li>
              <li>OX Security · Cloud Security Alliance — MCP scans</li>
              <li>Anthropic — Threat intelligence, 2025–2026</li>
              <li>CSO Online — AIR skill disclosure</li>
              <li>AgentDojo — Benchmark suite</li>
            </ul>
          </div>
          <div
            className="text-xs pt-8"
            style={{
              color: MUTED,
              borderTop: `1px solid ${CARD_BORDER}`,
              lineHeight: 1.7,
            }}
          >
            AMAI Labs · Independent infrastructure &amp; research · TARI™ is
            the Trust &amp; Risk Index for AI agents.
          </div>
        </footer>
      </main>
      <Footer />
    </div>
  );
};

export default StateOfAgentTrust;

