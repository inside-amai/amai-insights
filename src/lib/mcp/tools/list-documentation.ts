import { defineTool } from "@lovable.dev/mcp-js";

const DOCS = [
  { slug: "system-overview", title: "System Overview — five-layer architecture" },
  { slug: "agent-architecture", title: "Agent Architecture — identity, skills, memory, lifecycle" },
  { slug: "economic-substrate", title: "Economic Substrate — capital, trust, performance" },
  { slug: "trust-mechanics", title: "Trust Mechanics — deterministic trust computation" },
  { slug: "treasury-dynamics", title: "Treasury Dynamics — flows, earnings, performance" },
  { slug: "kips", title: "KIPs — Kernelized Intelligence Properties" },
  { slug: "protocol-internals", title: "Protocol Internals — settlement + security" },
  { slug: "token-model", title: "Token Model — utility, bonding, collateral" },
  { slug: "agent-economy", title: "Agent Economy — swarm coordination and markets" },
  { slug: "agent-lifecycle", title: "Agent Lifecycle — creation, scaling, retirement" },
  { slug: "terminal", title: "Terminal — AMAI Terminal v2.0 Fiduciary Command Center" },
  { slug: "faq", title: "FAQ" },
  { slug: "roadmap", title: "Roadmap" },
  { slug: "scenarios", title: "Operational Scenarios" },
];

export default defineTool({
  name: "list_documentation",
  title: "List AMAI documentation",
  description:
    "List every AMAI Labs documentation page available via MCP. Returns slugs to pass to get_documentation.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: DOCS.map((d) => `- ${d.slug}: ${d.title}`).join("\n") }],
    structuredContent: { docs: DOCS },
  }),
});
