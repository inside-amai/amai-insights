## Plan

Rebalance the "Run it" section (Section 5) on the home page now that the SDK card is taller.

### Changes to `src/pages/Home.tsx`

1. Tighten the left-column spacing
   - Reduce the gap between the "Read the docs" button and the "Free to run. / Private by construction." tagline so the tagline sits directly under the button.

2. Move "What you get" into the left column
   - Relocate the 4-point benefits grid from the right column to just below the "Free to run" tagline in the left column.
   - Keep the same 2x2 grid, typography, and staggered reveal animation.

3. Keep the right column focused on the SDK card
   - The right column retains: the two-step TERMINAL + PYTHON card, the caption below it, and the "tari example" line.

### Result

- The left column becomes a continuous vertical composition (headline → body → docs button → tagline → benefits) that roughly matches the new card height.
- The two columns regain visual balance instead of leaving a large dead space on the left.
- Mobile layout stays as a single natural flow: text, tagline, benefits, then the card, caption, and example line.

No copy or content changes.