# Refine the Evidence Chart Lines — "Refined Blueprint Histogram"

The evidence distribution chart on the homepage keeps its data, colors, axes, and hover tooltip. The line treatment is refined so the stepped series feel sleek and consistent with the site's dark blueprint aesthetic.

## Chosen direction

"Refined blueprint histogram" (prototype v1): the honest stepped edges stay, but every corner is rounded, each stroke carries a faint luminous glow, and a very low-opacity gradient fill fades down from each line to the baseline. The compromised series keeps its dashed rhythm (slightly elongated for elegance).

## Changes — `src/components/EvidenceDistribution.tsx` only

Both the desktop and mobile plots share one `Plot` component, so a single set of edits covers both:

1. **Rounded step corners**
   - Add `strokeLinejoin="round"` and `strokeLinecap="round"` to both series line paths.
   - Keep the steps as true steps (no bezier smoothing) — the data shape stays honest.

2. **Luminous glow on strokes**
   - Add a soft outer glow via SVG filter (`feGaussianBlur` + `feComposite`, small stdDeviation ≈ 2) — one filter per color.
   - Apply the aqua filter to the uncompromised line and the coral filter to the compromised line. Subtle, not neon.

3. **Gradient fills under each line**
   - Add two vertical `linearGradient`s (aqua and coral) fading from low opacity (~0.08–0.10) at the line to transparent at the baseline.
   - Replace the current flat `fillOpacity={0.14/0.16}` area paths with these gradient fills so the shapes feel grounded and layered rather than blocky.

4. **Refined dash rhythm** (compromised series)
   - Keep dashed but elongate slightly (e.g. `6 4` → `7 5`) with round caps for a softer, more deliberate cadence.

5. **Unchanged**
   - Data values, axis ranges (550–850, 0–40%), tick labels, axis titles, legend swatches, hover bin highlight, center dashed guide line, tooltip panel styling, "Observed distributions" footnote, study details toggle, and accessibility summary. Colors stay `#B4F6AD` / `#DF827C`.

## Verification

- Playwright screenshot of the chart on desktop and mobile widths to confirm the glow, gradient fills, and rounded joins render cleanly, hover tooltip still works, and no console errors.
- Confirm clean build.
