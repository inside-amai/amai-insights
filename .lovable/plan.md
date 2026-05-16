## Issue

The `/thesis` constellation is currently `fixed inset-0`, so it stays glued to the viewport while slides scroll past — looks disconnected.

## Why it was made `fixed`

The earlier mobile scroll jank had two causes:
1. Continuous infinite `x`/`y` keyframe animations on the constellation SVGs (per-frame transforms).
2. A document-height `absolute inset-0` layer being repainted on scroll.

We fixed **both**. Disabling the animations on mobile (#1) is what actually solved the jank — that's the per-frame transform pressure. The `fixed` switch (#2) was a precaution on top.

## Fix

Revert just the positioning, keep the animation gating:

- In `src/pages/Thesis.tsx`, change the constellation wrapper from `fixed inset-0 pointer-events-none z-0` back to `absolute inset-0 pointer-events-none z-0`. The constellation will scroll naturally with the page on desktop.
- Keep the `!isMobile` guard on both `motion.svg` `animate`/`transition` props (no looping animation on mobile). This is what actually prevents the scroll jank.

## Verify

- Desktop: scroll `/thesis` — constellation scrolls with content, gentle motion still plays.
- Mobile (preview at narrow viewport): scroll up/down — still smooth, no jumps; constellation is static (no animation) and scrolls with the page.
