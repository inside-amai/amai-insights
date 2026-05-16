## Problem

On `/thesis` (mobile), scrolling jumps/jitters up and down. Session replay confirms the two background "constellation" SVGs are emitting **continuous per-frame transform updates** (every ~8ms) while the user scrolls.

Two compounding causes:

1. **Constant background motion on mobile.** Two `motion.svg` elements in `src/pages/Thesis.tsx` (lines ~249–314) run infinite `x` / `y` keyframe animations. This violates our existing memory rule: *"Mobile animations: Use LazyMotion, dynamic props to disable y-axis motion on touch."*
2. **Oversized composited background layer.** The wrapper holding those SVGs is `<div className="absolute inset-0 ...">` placed directly inside the scroll root — so `inset-0` stretches across the **entire document height** (13 slides ≈ 13× viewport). Mobile browsers must repaint/composite that giant layer on every scroll tick, amplifying the jank into visible jumps.

The same pattern (continuous background motion + `useScroll` progress bar) also exists on `/pitch`, `/tether`, and `/deck`, so likely the same symptom on mobile there.

## Fix

### 1. `src/pages/Thesis.tsx` — stop the constellation animation on mobile and pin it to the viewport

- Change the constellation wrapper from `absolute inset-0` to `fixed inset-0` so it stays one viewport-sized layer instead of one document-sized layer.
- For both `motion.svg` constellations: when `isMobile`, omit the `animate` / `transition` props (render as static SVGs). On desktop, keep current behavior.
- Also disable the bottom progress bar's `useScroll` subscription on mobile (already gated by `!isMobile`, keep as-is) — no change needed.

### 2. Apply the same two changes to the other animated slide pages

- `src/pages/Pitch.tsx`
- `src/pages/Tether.tsx`
- `src/pages/Deck.tsx`

For each: locate any full-page `absolute inset-0` background wrapper holding looping `motion.*` elements, switch to `fixed inset-0`, and disable continuous `animate` props when `useIsMobile()` is true.

### 3. Verify

- Reload `/thesis` on mobile viewport in the preview, scroll up/down — confirm smooth, no jumps.
- Spot-check `/pitch`, `/tether`, `/deck` the same way.
- Desktop behavior unchanged.

## Out of scope

- No copy changes, no layout/typography changes, no removal of the animations on desktop.
- No changes to `Slide` sizing (`min-h-svh`) — `svh` is the correct stable unit for mobile and is not the cause.
