Plan: Redesign the outer shell of the homepage "Run it" SDK card (Section 5) with a dark smoky glassmorphism treatment that feels premium and expensive, while leaving the three inner black terminal/Python blocks untouched.

### What will change

- The flat gray outer card (`bg-[hsl(var(--gray-800))]`) will become a dark smoky glass panel:
  - `bg-black/45` or `bg-[hsl(var(--gray-900))]/50` with `backdrop-blur-2xl`.
  - `border border-white/10` plus a subtle inner top highlight (`inset_0_1px_0_0_rgba(255,255,255,0.08)`).
  - Layered shadow: a soft lift shadow plus a 1px inner border to keep the edge crisp.
- A faint ambient glow behind the card so it floats above the light blueprint grid background:
  - Cyan top radial glow (`rgba(166,252,252,0.10)`) and a very subtle purple bottom glow.
- Optional: a blueprint grid texture inside the glass surface at very low opacity (matching the existing technical-resources pattern) so the card echoes the section background without looking like a pasted-on box.
- Step label typography kept as light uppercase tracking, but refined to sit cleanly on the glass (white/90, slightly more contrast).

### What will NOT change

- The three inner command blocks (Step 1, Step 2, Step 3) remain black with the same code, colors, and copy buttons.
- The section text, "Read the docs" button, "What you get" benefits, and the "Free to run. Private by construction." line stay as-is.
- No copy, routes, or backend changes.

### Files to edit

- `src/pages/Home.tsx` — Section 5 outer card wrapper only.

### Verification

- Visual check in the preview: the card should look like a dark smoky glass slab floating over the blueprint grid, with the inner black terminal blocks still readable and high-contrast.
- Type-check / build check to ensure no Tailwind syntax errors.