

## Pitch Page Layout Overhaul -- Uniform Centering

### Problems Identified
1. **Vertical misalignment**: Content sits near the bottom of slides because the inner container has `pb-20 md:pb-16` pushing content off-center, and some slides have more content weight at the bottom.
2. **Horizontal inconsistency**: Slides 1, 3, 5 use `align="left"` while 2, 4, 6 use `align="center"` -- this creates a jarring shift when scrolling.
3. **Varying max-widths**: Inner content uses `max-w-4xl`, `max-w-3xl`, and `max-w-2xl` inconsistently.

### Solution
Standardize the `Slide` component and all 6 slides to be uniformly centered (both vertically and horizontally):

1. **Slide shell**: Remove the `align` prop entirely. All slides will use `items-center justify-center` (flex centering both axes). Replace the uneven `pb-20 md:pb-16` on the inner container with symmetric vertical padding so the footer text at the bottom does not push the content up.

2. **Inner content**: All slides will use `text-center` and a consistent `max-w-4xl mx-auto` wrapper. Content that was previously left-aligned (slides 1, 3, 5) will be center-aligned to match slides 2, 4, 6.

3. **Footer spacing**: The "AMAI -- Seed Pitch Deck" label and slide counter sit at `absolute bottom`. The inner content padding will be adjusted symmetrically (e.g., `py-24`) so content remains vertically centered without being pushed by footer overlap.

### Technical Changes

**File: `src/pages/Pitch.tsx`**

- **`Slide` component (lines 13-51)**: Remove `align` prop. Set flex to always `items-center justify-center`. Change inner div padding from `pb-20 md:pb-16` to `py-24 md:py-20` for symmetric vertical spacing.

- **Slide 1 (line 215-252)**: Change `align="left"` to no align prop. Add `text-center` to the inner motion.div. Center the logo with `mx-auto`. Center the sub-headline with `mx-auto`.

- **Slide 2 (lines 257-322)**: Already centered -- no major changes needed beyond ensuring `max-w-4xl` wrapper consistency.

- **Slide 3 (lines 327-390)**: Remove `align="left"`. Add `text-center` to the wrapper. The 3-column card grid is already centered by nature of the grid layout.

- **Slide 4 (lines 395-482)**: Already centered -- ensure `MicroLabel` is centered (add `text-center`).

- **Slide 5 (lines 487-542)**: Remove `align="left"`. Center-align all text and the trust counter/audit log sections. Add `mx-auto` to the trust events bar and audit log container.

- **Slide 6 (lines 547-602)**: Already centered -- no changes needed.

- **`MicroLabel` component (line 62-72)**: Add `text-center` class so labels are always centered regardless of parent alignment.

This ensures every slide has its content block dead-center both vertically and horizontally, creating a uniform presentation feel.
