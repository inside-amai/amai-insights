## /diagram2 — NVIDIA × AMAI Partnership Architecture Diagram

A new standalone page rendering a flat, technical, Bloomberg-terminal-style SVG architecture diagram for use in a partnership one-pager.

### Files

1. **`src/pages/Diagram2.tsx`** (new)
   - Wrap with existing `PasswordGate` (same pattern as `/diagram`) so the asset stays internal-only. If you'd rather it be public, say the word and I'll drop the gate.
   - Dark `#0a0a0a` full-bleed background, page centers the SVG with a small caption underneath.
   - A "Download SVG" button that exports the rendered SVG as a standalone file (transparent background variant) for use in the one-pager PDF.

2. **`src/components/PartnershipDiagram.tsx`** (new)
   - Single inline `<svg viewBox="0 0 1200 500">` — no external deps, no animations, no gradients, no shadows.
   - Renders the full diagram exactly to spec.

3. **`src/App.tsx`** (edit)
   - Add `<Route path="/diagram2" element={<Diagram2 />} />`.

4. **`public/logos/nvidia-nemo.svg`** + **`public/logos/amai-mark.svg`** (new, optional)
   - Small monochrome marks placed above column 1 and column 3 headers. NVIDIA mark traced/exported from the uploaded PNG; AMAI mark reused from the site header.

### Diagram spec (matches request 1:1)

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│        NVIDIA NeMo Stack         AMAI Integration Layer      AMAI Bureau    │
│                                                                  (Cloud)    │
│  ┌──────────────────┐         ┌──────────────────┐                          │
│  │ Nemoclaw         │◀──agent─│ Zero-Trust SDK   │       ┌────────────────┐ │
│  │ (agent spawn)    │  spawn  │                  │       │ Global Ledger  │ │
│  └──────────────────┘         └──────────────────┘       │                │ │
│  ┌──────────────────┐         ┌──────────────────┐       │ TARI™ Score    │ │
│  │ NeMo Framework   │◀──3rd───│ NeMo Guardrails  │       │ Engine         │ │
│  │                  │  party  │ Plugin           │       │ (300–850)      │ │
│  └──────────────────┘         └──────────────────┘       │                │ │
│  ┌──────────────────┐         ┌──────────────────┐       │ Cross-vendor   │ │
│  │ NeMo             │◀──net.──│ TARI Interceptor │       │ Reputation     │ │
│  │ Microservices    │  edge   │                  │       │ Lookup         │ │
│  └──────────────────┘         └──────────────────┘       └────────────────┘ │
│                                                                             │
│   ───────────────────▶ Behavioral telemetry ─────────────────────▶          │
│   ◀────────────── TARI score + enforcement decision ──────────────          │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **Column 1 boxes**: 1.5px stroke `#76B900` (NVIDIA green), no fill.
- **Column 2 boxes**: 1.5px stroke `#14B8B0` (AMAI teal), no fill.
- **Column 3 box**: single large teal-outlined container with three stacked text rows separated by 0.5px teal dividers.
- **Inter-column arrows**: thin `#9CA3AF` lines with arrowheads, label centered above each.
- **Top curved arrow** (telemetry): single quadratic Bézier arcing from SDK column out to Bureau, left-to-right arrowhead, teal-tinted.
- **Bottom curved arrow** (TARI score/enforcement): Bézier arcing back from Bureau to Interceptor, right-to-left arrowhead, green-tinted.
- **Typography**:
  - Component labels: `font-mono` (Tailwind stack: JetBrains Mono → ui-monospace) at 12–13px, white `#FFFFFF`.
  - Column headers: mono, 11px uppercase tracking-wider, white.
  - Arrow labels: `Inter` 10px, `#9CA3AF`.
  - Sub-labels under component names: 10px `#9CA3AF`.
- **Footer caption**: rendered as plain HTML below the SVG, centered, `text-xs text-white/50`:  
  *"AMAI installs into NeMo at three points. One ledger. Three primitives. Enterprise-deployable from day one."*

### Open questions before I build

1. **Logos in the diagram?** Should I render small NVIDIA + AMAI marks above the column headers, or keep it pure typography (text labels only)? Pure typography is more "Bloomberg-terminal."
2. **Access:** Gate `/diagram2` behind the internal password (like `/diagram`), or leave it public so it can be screenshotted/linked externally?
3. **Download button:** Want a "Download SVG" button on the page itself for grabbing the asset, or just the on-screen render?

If you have no preference I'll default to: text-only labels, password-gated, and yes to the download button.
