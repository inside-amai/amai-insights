Implement the selected "Light Blueprint Inversion" direction for Section 5 (RUN IT) on the homepage. This section will deliberately break from the dark-grid-glass-card formula of Sections 2–4 with a high-contrast, light-drafted paper section.

## What will change

- **Section 5** (lines 441–609 of `src/pages/Home.tsx`) will be rebuilt as a full-bleed light section: off-white background, faint cyan blueprint grid, black typography, and a hard-shadow black terminal card.
- The surrounding sections (Hero, Section 2–4, HomeThesis, Footer) are **not** changing.
- The actual SDK copy and commands stay the same:
  - Eyebrow: `RUN IT`
  - Headline: `Don't take our word for it. Run it.`
  - Body: `pip install amai-tari` …
  - Code card: `pip install amai-tari` + 3-line instrument snippet
  - CTA: `Read the docs →`
  - Closing beat: `Free to run. Private by construction.`

## Design details

- **Background:** `#fafafa` or `#f5f5f5` with two layers of faint cyan blueprint grid lines (`#0055ff` at very low opacity), mirroring the dark-site blueprint language but inverted.
- **Layout:** Two-column split on desktop.
  - Left: eyebrow, headline, body, docs link, closing beat.
  - Right: a solid black terminal/code card with a heavy offset shadow (or layered drop shadow) and no glass/blur.
- **Typography:** Roboto, keep body light/unbolded, headline in heavier weight for impact.
- **Colors:** Black text on white; accent the code keywords in the existing cyan/purple/amber syntax palette used elsewhere; terminal traffic dots remain red/amber/emerald.
- **No floating glassmorphism.** The card sits on the page as a solid object — a deliberate break from the prior sections.
- **Transition:** Add a subtle gradient seam between the dark Section 4 and the light Section 5 so the inversion feels intentional rather than jarring.
- **Motion:** Keep `framer-motion` scroll reveals consistent with the rest of the page (fade-up on enter). No heavy animation on the card itself beyond the copy-to-clipboard button.
- **Copy button:** Keep the existing copy button and `copied` state, but style it to fit the light section (e.g., dark pill with `Copy`/`Check` icon).
- **Responsive:** Stack columns on mobile; reduce headline size; ensure the terminal card remains readable.

## Files to edit

- `src/pages/Home.tsx` — rebuild Section 5.

## Out of scope

- No changes to other sections, header, footer, or navigation.
- No new dependencies or routes.
- No auth or backend changes.

## Acceptance check

- Section 5 renders as a light section with a blueprint grid.
- The SDK command and 3-line snippet are visible and copyable.
- The closing beat and docs link remain.
- Mobile layout stacks cleanly.
- The section still respects the dark theme of the rest of the page, acting as a single intentional contrast moment.