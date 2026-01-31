
# Making the AMAI Website Scrapable for LLMs

## The Problem
Your site is a React Single Page Application (SPA). When LLMs or AI tools try to scrape it, they see an empty `<div id="root"></div>` because all content is rendered via JavaScript in the browser. Traditional web crawlers and LLM tools cannot execute JavaScript, so they get no text content.

## The Solution: llms.txt Standard

The industry-standard approach is implementing the **llms.txt specification** (from llmstxt.org). This is a simple markdown file at `/llms.txt` that provides:
- A summary of what your site is about
- Links to detailed markdown versions of your content
- Structured information that LLMs can immediately consume

This is the same approach used by FastHTML, Answer.AI, and increasingly adopted across the web for AI accessibility.

## What We'll Create

### 1. Main llms.txt File
**File:** `public/llms.txt`

A markdown file following the llms.txt spec with:
- Project name and description
- Key concepts summary
- Links to detailed markdown content files

### 2. Comprehensive Content File  
**File:** `public/llms-full.txt`

A single expanded file containing all the essential content from your documentation pages in plain markdown. This allows LLMs to load your entire knowledge base in one request.

### 3. Sitemap for Crawlers
**File:** `public/sitemap.xml`

Standard XML sitemap listing all public pages for traditional search engines and crawlers.

---

## Content Structure for llms.txt

```text
# AMAI Labs

> AMAI is an infrastructure layer that lets autonomous agents hold identity, 
> build trust, deploy capital, and execute transactions without human intervention.

AMAI provides the execution environment where autonomous agents operate with capital, 
memory, skills, and verifiable trust scores. Agents run inside a deterministic engine 
that manages identity, bonded collateral, mission routing, skill execution, and swarm 
coordination.

## Core Documentation

- [System Overview](https://amai-insights.lovable.app/llms/system-overview.md): Five-layer architecture, execution pathways, and economic substrate
- [Agent Architecture](https://amai-insights.lovable.app/llms/agent-architecture.md): Identity primitives, skill modules, memory, and agent lifecycle
- [Economic Substrate](https://amai-insights.lovable.app/llms/economic-substrate.md): Capital, trust, and performance mechanisms
- [Trust Mechanics](https://amai-insights.lovable.app/llms/trust-mechanics.md): Deterministic trust computation and scoring
- [Treasury Dynamics](https://amai-insights.lovable.app/llms/treasury-dynamics.md): Treasury flows, earnings, and performance scoring
- [Protocol Internals](https://amai-insights.lovable.app/llms/protocol-internals.md): Settlement logic and security boundaries
- [Token Model](https://amai-insights.lovable.app/llms/token-model.md): Utility, bonding, and collateral mechanics
- [Agent Economy](https://amai-insights.lovable.app/llms/agent-economy.md): Swarm coordination and marketplace dynamics
- [Agent Lifecycle](https://amai-insights.lovable.app/llms/agent-lifecycle.md): Creation, scaling, retirement paths

## Full Context

- [Complete Documentation](https://amai-insights.lovable.app/llms-full.txt): All documentation in a single file for full context loading

## Optional

- [FAQ](https://amai-insights.lovable.app/llms/faq.md): Frequently asked questions
- [Roadmap](https://amai-insights.lovable.app/llms/roadmap.md): Development timeline
```

---

## Implementation Details

### Files to Create

| File | Purpose |
|------|---------|
| `public/llms.txt` | Main entry point for LLMs (links to detailed docs) |
| `public/llms-full.txt` | Complete documentation in one file (~15-20KB) |
| `public/sitemap.xml` | Standard sitemap for search engines |
| `public/llms/system-overview.md` | Markdown version of System Overview page |
| `public/llms/agent-architecture.md` | Markdown version of Agent Architecture page |
| `public/llms/economic-substrate.md` | Markdown version of Economic Substrate page |
| `public/llms/trust-mechanics.md` | Markdown version of Trust Mechanics page |
| `public/llms/treasury-dynamics.md` | Markdown version of Treasury Dynamics page |
| `public/llms/kips.md` | Markdown version of KIPs page |
| `public/llms/protocol-internals.md` | Markdown version of Protocol Internals page |
| `public/llms/token-model.md` | Markdown version of Token Model page |
| `public/llms/agent-economy.md` | Markdown version of Agent Economy page |
| `public/llms/agent-lifecycle.md` | Markdown version of Agent Lifecycle page |
| `public/llms/faq.md` | Markdown version of FAQ |
| `public/llms/roadmap.md` | Markdown version of Roadmap |

### Content Source

The content will be extracted from the English translations in `LanguageContext.tsx`, which contains all the structured text content for every page. This ensures the markdown versions stay synchronized with what's displayed on the site.

### How LLMs Will Use It

1. LLM requests `https://amai-insights.lovable.app/llms.txt`
2. Gets structured overview + links to detailed markdown files
3. Can load individual topics or the full `llms-full.txt` for complete context
4. All content is immediately parseable without JavaScript execution

---

## Expected Outcome

- Any LLM can fetch `/llms.txt` and understand what AMAI is
- Full documentation is available in plain markdown at `/llms-full.txt`
- Individual topic markdown files available in `/llms/` directory
- Standard sitemap.xml for traditional search engines
- No changes to existing React components or user experience
