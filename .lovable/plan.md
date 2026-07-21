## For Institutions — Editorial Redesign

Replace the current dark perspective-grid treatment with a bone-linen editorial layout that reads like a WSJ / FT feature. Provides the tonal contrast the "Run it" section has, but pitched at Fortune 500 / institutional buyers instead of developers.

### Visual language

- **Background:** warm bone/linen (`#F1EDE4`-ish, HSL token). No grid, no vignette. Absolute stillness.
- **Type:** existing Roboto for body, but promote the section headline to a serif (Instrument Serif or similar via Google Fonts) for the editorial voice. Small tracked-out sans eyebrow stays.
- **Rules:** one hairline black rule spans full width at the top of the section (under the eyebrow row) and one at the bottom, like a print feature framing device.
- **Palette:** near-black ink (`hsl(var(--gray-900))`) on linen. No teal, no cyan accent in this section — keeps it distinct from the developer sections.

### Layout (desktop)

```text
 ┌───────────────────────────────────────────────────────────────┐
 │ FOR INSTITUTIONS                                    ISSUE 01  │  ← eyebrow row
 ├───────────────────────────────────────────────────────────────┤  ← hairline rule
 │                                                               │
 │  Serif headline (2 lines,     │   [ dashboard screenshot      │
 │  large, tight leading)        │     framed in thin 1px        │
 │                               │     black keyline, no crop ]  │
 │  ── small serif drop-cap ──   │                               │
 │  Lead paragraph (existing     │   Caption underneath in       │
 │  body copy, first letter as   │   small italic serif:         │
 │  a large serif drop-cap).     │   "AMAI institutional         │
 │                               │    dashboard — pilot build."  │
 │  Secondary paragraph.         │                               │
 │                               │                               │
 │  [ Request access ]  →        │                               │
 │                               │                               │
 ├───────────────────────────────────────────────────────────────┤  ← hairline rule
 └───────────────────────────────────────────────────────────────┘
```

- Two-column grid: text left (~5/12), image right (~7/12), generous gutter.
- Mobile collapses to single column, image below text, rules remain full-width.

### Content

Keep the existing headline and body copy verbatim (no rewrite requested). Only add:
- A small italic serif caption under the screenshot.
- A right-side eyebrow tag like `ISSUE 01` or `INSTITUTIONAL BRIEF` to complete the editorial feel.

### CTA

Keep the existing "Request access" mailto CTA, restyled as a thin-bordered black outline button with a trailing arrow — matches the editorial restraint rather than a filled pill.

### Motion

- Section fades up on scroll (existing pattern).
- Hairline rules draw in horizontally (scaleX 0 → 1, 800ms).
- Drop-cap and headline fade in slightly delayed so the eye lands on the rule first, then the headline, then the body.

### Technical notes

- Edit only `src/pages/Home.tsx` — swap the current Section 7 wrapper background/classes and internal grid.
- Add Instrument Serif via Google Fonts link in `index.html` (or reuse if already present) and expose as a Tailwind family (`font-serif-editorial`) in `tailwind.config.ts`.
- Add a linen background token (e.g. `--linen: 40 25% 92%`) in `src/index.css` rather than hardcoding a hex.
- Preserve the existing dashboard image asset and its uncropped `object-contain` behavior; wrap it in a `border border-black/80` frame.
- Keep the section id so the header pill nav still targets it correctly.

### Out of scope

- No changes to sections 3, 4, 5, 6, outro, or footer.
- No copy rewrites beyond adding the caption + right-eyebrow tag.
- No new imagery.
