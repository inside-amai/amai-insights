
## What’s actually happening (why it feels like we’re going in circles)

### Key insight
On iOS Safari (and some mobile browsers), **changing the `<meta name="viewport">` after the page has already rendered** (which is what our `useEffect` does) is unreliable—especially for `initial-scale`. The browser often:
- renders the page first using the existing viewport (`width=device-width, initial-scale=1`)
- then React mounts, `useEffect` runs, and we try to change the viewport
- **but Safari does not fully “re-initialize” the layout/zoom** from a late viewport change  
Result: the page initially loads “cropped / not aligned / huge side space” until you pinch-zoom, which forces Safari to recompute zoom/viewport and it suddenly “locks in” (your second screenshot).

So the core problem isn’t just Tailwind alignment—it’s *when* the viewport is set.

## Goal
For `/deck` and `/tether` on mobile:
- load immediately in the “zoomed out, locked in” PDF-like view
- no horizontal drifting / sideways scroll at the default zoom
- retain user pinch-zoom if desired

## Proposed fix (robust, PDF-like behavior)

### A) Set the correct viewport BEFORE React renders (critical)
Move the “deck/tether viewport” logic to `index.html` in the `<head>` so it runs immediately at initial load.

**Approach**
1. Keep the default meta viewport in HTML initially (`width=device-width, initial-scale=1`)
2. Add a tiny inline script in `<head>` (right after the viewport meta) that:
   - checks `window.location.pathname`
   - if path is `/deck` or `/tether`, compute a scale that fits width:
     - `scale = window.innerWidth / 1280`
   - set viewport meta to something like:
     - `width=1280, initial-scale=${scale}, minimum-scale=${scale}, maximum-scale=5, user-scalable=yes`
   - (optional) include `viewport-fit=cover` for modern iPhones

**Why compute scale instead of hardcoding 0.25**
Different phones have different widths; hardcoding causes “too small” or “not fully fit” behavior. Computing `innerWidth / 1280` guarantees it loads exactly like a fitted PDF on any device.

### B) Change the React-side viewport override to stop fighting the browser
Right now, both pages still run a `useEffect` that changes viewport (late). That can cause:
- a first paint at scale 1 (bad)
- then a partial change (still bad on iOS)
- and sometimes it creates the “flash / misalignment” you’re seeing.

**Update strategy**
- Replace `useEffect` with `useLayoutEffect` so it runs before paint *on route transitions inside the SPA* (Deck/Tether navigated from another page).
- Use the same computed scale logic (`window.innerWidth / 1280`), not a constant.
- Keep restore-on-unmount so other routes return to normal viewport.

Note: iOS may still not perfectly re-apply `initial-scale` during SPA transitions, but:
- initial load will be correct (big win)
- transitions will be much better than `useEffect`
- worst case: users who navigate internally may still need a refresh, but typical usage (opening the deck link) will be correct.

### C) Fix layout structure so the “canvas” is centered and cannot drift
Even with correct viewport, we should ensure the “1280 canvas” can’t drift due to any accidental overflow.

**Changes for both `Deck.tsx` and `Tether.tsx`**
- Make the outermost page container full width, and center the fixed-width canvas:
  - Outer: `w-screen overflow-x-hidden bg-black`
  - Inner “canvas”: `w-[1280px] mx-auto`
- Keep the slide width fixed at `w-[1280px]` as you already have.
- Keep the page number inside safe bounds (`right-8/left-8` is fine).

This avoids the risk that the page is anchored to the left edge of a larger scrollable surface.

## Files to change

1) **index.html**
- Add an inline `<script>` in `<head>` to set viewport early for `/deck` and `/tether` using computed scale.

2) **src/pages/Deck.tsx**
- Replace `useEffect` with `useLayoutEffect`
- Use computed scale rather than hardcoded scale
- Adjust the wrapper structure to “outer full-width + centered 1280 canvas”

3) **src/pages/Tether.tsx**
- Same as Deck

## Acceptance checks (what we’ll verify)
On a real iPhone (Safari/Chrome):
1. Open `/tether` and `/deck` directly from the address bar
   - Page loads already zoomed-out and visually “locked”
   - No sideways scroll at default zoom
2. Pinch-zoom in/out
   - Still works (user-scalable enabled)
3. Navigate from another route (e.g., `/`) to `/deck` via internal link
   - Should not flash badly; should land close-to-correct immediately

## Why this is the “deep fix”
- It stops relying on a viewport change that happens after first paint (which mobile Safari doesn’t reliably honor)
- It computes the correct scale per device (true “fit-to-width PDF” behavior)
- It centers the canvas so alignment is deterministic, not dependent on scroll position or overflow quirks

## Implementation notes (technical)
- The inline script must run before the page paints; placing it directly after the viewport meta in `index.html` is ideal.
- Use `useLayoutEffect` in React to reduce flicker on SPA navigation.
- Keep restore logic so the rest of the site remains `width=device-width`.

If you approve this approach, I’ll implement it carefully in those three files and we should be out of the loop for good.
