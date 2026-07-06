import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const ALLOWED = new Set([
  "system-overview",
  "agent-architecture",
  "economic-substrate",
  "trust-mechanics",
  "treasury-dynamics",
  "kips",
  "protocol-internals",
  "token-model",
  "agent-economy",
  "agent-lifecycle",
  "terminal",
  "faq",
  "roadmap",
  "scenarios",
]);

const SITE = "https://amai-insights.lovable.app";

export default defineTool({
  name: "get_documentation",
  title: "Get AMAI documentation page",
  description:
    "Fetch the full markdown body of a single AMAI Labs documentation page by slug (see list_documentation).",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe("Documentation slug, e.g. 'system-overview' or 'trust-mechanics'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ slug }) => {
    if (!ALLOWED.has(slug)) {
      return {
        content: [
          { type: "text", text: `Unknown slug '${slug}'. Call list_documentation for valid slugs.` },
        ],
        isError: true,
      };
    }
    const url = `${SITE}/llms/${slug}.md`;
    const res = await fetch(url);
    if (!res.ok) {
      return {
        content: [{ type: "text", text: `Failed to fetch ${url}: ${res.status} ${res.statusText}` }],
        isError: true,
      };
    }
    const text = await res.text();
    return {
      content: [{ type: "text", text }],
      structuredContent: { slug, url, markdown: text },
    };
  },
});
