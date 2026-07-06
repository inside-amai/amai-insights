import { defineTool } from "@lovable.dev/mcp-js";

const URL = "https://amai-insights.lovable.app/llms-full.txt";

export default defineTool({
  name: "get_full_context",
  title: "Get full AMAI context",
  description:
    "Fetch the combined AMAI Labs documentation corpus (llms-full.txt) as a single markdown blob for full-context loading.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async () => {
    const res = await fetch(URL);
    if (!res.ok) {
      return {
        content: [{ type: "text", text: `Failed to fetch ${URL}: ${res.status} ${res.statusText}` }],
        isError: true,
      };
    }
    const text = await res.text();
    return {
      content: [{ type: "text", text }],
      structuredContent: { url: URL, markdown: text },
    };
  },
});
