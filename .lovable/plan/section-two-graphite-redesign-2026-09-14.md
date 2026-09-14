# Section Two Graphite Redesign

## Scope
Redesign only section two of `/homepagecopy`. Preserve the hero, all following sections, existing copy, responsive page structure, and the section’s static behavior.

## Visual treatment
- Replace the section’s perspective grid and overlays with one full-width solid graphite surface using `#1A1C1B` through section-specific design tokens.
- Introduce section-local warm off-white, warm grey, muted brass, and low-contrast rule tokens so no teal remains in this section.
- Keep a clean hard transition from the hero without a large transitional gradient.

## Left column
- Preserve the existing heading size and two-line break, while refining it to medium weight and tighter architectural letter spacing.
- Keep the introductory copy as one compact group and reduce the spacing between its two paragraphs without changing wording.
- Replace the current pool image with the supplied finished `AMAI_second_section.svg` artwork, stored through the project asset flow and used without recoloring, filters, or geometry changes.
- Increase the artwork’s visual scale by about 15 percent where the viewport allows, preserve its aspect ratio and annotations, and keep it clear of the right column.

## Right column
- Replace the two-column header labels with the single label `OPERATOR FUNCTIONS`.
- Render the existing six jobs and descriptions as one aligned list with fine horizontal rules and no row boxes or repeated row gradients.
- Style Collect, Convert, and Pay with warm off-white labels and brass numbers.
- Add a modest break after Pay, then style Lend idle, Rebalance, and Sit out with quieter labels and neutral numbers while retaining equal text sizing and fully readable descriptions.
- Keep the list static with consistent number, label, and description columns.

## Denied permissions
- Preserve both existing sentences.
- Align the block with the function list and use a short brass vertical rule, small neutral heading, and readable warm-grey text.

## Responsive behavior and verification
- On mobile, maintain the requested order: introduction, illustration, functions, then denied permissions; allow all descriptions to wrap naturally.
- Verify the updated section at desktop and mobile widths, including artwork annotations, column separation, color removal, and unchanged neighboring sections.
- Confirm the app builds without errors.
