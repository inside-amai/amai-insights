import { defineMcp } from "@lovable.dev/mcp-js";
import listDocumentation from "./tools/list-documentation";
import getDocumentation from "./tools/get-documentation";
import getFullContext from "./tools/get-full-context";

export default defineMcp({
  name: "amai-insights-mcp",
  title: "AMAI Labs Insights",
  version: "0.1.0",
  instructions:
    "Read-only access to AMAI Labs documentation on the Insurance Layer for the Agentic Web (system architecture, trust mechanics, treasury dynamics, token model, KIPs, protocol internals, agent lifecycle, and more). Start with list_documentation, fetch pages with get_documentation, or pull the whole corpus with get_full_context.",
  tools: [listDocumentation, getDocumentation, getFullContext],
});
