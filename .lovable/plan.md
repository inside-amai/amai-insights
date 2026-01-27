
# Add "Powered by x402 Protocol" to Agent Engine Card

## Overview
Add a centered "Powered by x402 Protocol" text at the bottom of the central Agent Engine cluster card (the "Autonomous Agent" card) on the main landing page.

## Location
- **File**: `src/components/AgentArchitectureDiagram.tsx`
- **Component**: `CenterNode` (the central card showing "Autonomous Agent")

## Implementation

### Modify the CenterNode Component
Add a new line of text below the existing subtitle, styled consistently with the project's grey text patterns:

```text
┌─────────────────────────────────────┐
│                                     │
│        Autonomous Agent             │
│   Skills • Memory • Engine          │
│                                     │
│   ─────────────────────────────     │  ← subtle separator
│   Powered by x402 Protocol          │  ← new text
│                                     │
└─────────────────────────────────────┘
```

### Styling
- Use `text-[10px] text-white/40` to match the existing grey text style used throughout the project
- Add `mt-3` spacing above the new line
- Include a subtle separator line (`w-12 h-px bg-white/10`) between the subtitle and the new "Powered by" text for visual separation
- Uppercase tracking to match institutional aesthetic: `uppercase tracking-wider`

---

## Technical Details

**Changes to CenterNode component (lines 32-53)**:
1. Add a horizontal separator line (`<div className="w-12 h-px bg-white/10 mx-auto mt-3" />`)
2. Add the "Powered by x402 Protocol" text below: `<p className="text-[10px] text-white/40 uppercase tracking-wider mt-2">Powered by x402 Protocol</p>`

This follows the existing minimal, institutional design language with thin lines and subdued grey text.
