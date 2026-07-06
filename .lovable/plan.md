## Verification-only plan (no code changes)

You chose to leave the MCP function uncapped and rely on Supabase's platform defaults, so this plan is a written confirmation of the blast radius — nothing to build.

### Blast radius: docs-only ✅

Reviewed `supabase/functions/mcp/index.ts` and the three tool sources in `src/lib/mcp/tools/`:

| Check | Result |
|---|---|
| Imports `@supabase/supabase-js` / `createClient` | ❌ none |
| Reads `SUPABASE_SERVICE_ROLE_KEY` | ❌ none |
| Reads `SUPABASE_URL` / any DB env | ❌ none |
| Executes SQL or RPC | ❌ none |
| References `pilot_requests` or any table name | ❌ none |
| Outbound network destinations | Only `https://amai-insights.lovable.app/llms/<slug>.md` and `/llms-full.txt` |
| Slug input on `get_documentation` | Allow-listed against a fixed 14-item Set; unknown slugs return `isError: true` before any fetch |

The function has no database client instantiated at any point, so it structurally cannot reach `pilot_requests` (or `auth.users`, or anything else in the project). The recently tightened RLS on `pilot_requests` is not on this function's attack surface.

### Rate limiting: accepted as-is

The backend has no standard rate-limiting primitive. The MCP function inherits only Supabase's platform-level invocation protections. Cost/abuse exposure is:
- worst case per call: one outbound `fetch` to the public docs site + a small JSON response
- no DB writes, no external paid APIs, no LLM calls

If invocation volume ever becomes a concern, the two cheapest follow-ups (not part of this plan) would be an in-isolate TTL cache on `get_full_context` or a DB-backed IP counter.

### Deliverable

No files change. This plan is the "deliberate-choice box ticked" record.
