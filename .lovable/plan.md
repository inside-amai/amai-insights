
Goal: Fix “jumpy” mobile scrolling on **/deck** and **/tether** only, using an industry-standard approach that avoids mobile viewport reflow + reduces scroll-thread work.

## What’s most likely causing the jumpiness (based on code + known mobile behavior)
1) **`min-h-[100dvh]` on every slide**  
   `dvh` is “dynamic viewport height” and **changes while you scroll** as the mobile browser address bar collapses/expands. Because each slide is sized with `100dvh`, the browser recalculates layout mid-scroll and can “correct” scroll position → perceived jump.

2) **`overflow-hidden` on each slide section**  
   On iOS especially, `overflow: hidden` on large sections can interact poorly with momentum scrolling and compositing. Industry standard is to only hide the axis you need (usually `overflow-x-hidden`) and avoid blocking vertical overflow unless required.

3) **Progress bar driven by `useScroll()` on every frame**  
   A fixed element whose transform updates continuously during scroll can add extra main-thread work on lower-end devices. It’s not always the root cause, but it commonly amplifies “jank.”

## Implementation plan (mobile-only; /deck and /tether only)
### Step 1 — Replace `dvh` with a stable viewport unit on mobile
- In **both** `src/pages/Deck.tsx` and `src/pages/Tether.tsx`, update the `Slide` wrapper:
  - Change from: `min-h-[100dvh] md:min-h-screen`
  - To: `min-h-svh md:min-h-screen` (or `min-h-[100svh] md:min-h-screen`)
Why this is “industry standard”: `svh` = *small viewport height* (stable) and does **not** resize during address-bar collapse/expand, preventing layout shifts while scrolling.

### Step 2 — Stop using `overflow-hidden` for the whole slide
- In the same `Slide` wrapper `<section>` className:
  - Change `overflow-hidden` → `overflow-x-hidden`
This keeps horizontal spill contained (what you likely wanted), but avoids interfering with vertical scroll compositing.

### Step 3 — Make the page container stable for mobile scrolling
- On the root wrapper `<div className="bg-black ...">` in both pages:
  - Change `min-h-screen` → `min-h-svh md:min-h-screen` (mobile stable, desktop unchanged)
  - Add `overflow-x-hidden` (prevents any accidental horizontal scroll from creating touch/scroll weirdness)
  - Optional (if still bouncy/jumpy on iOS): add `overscroll-y-contain` to reduce rubber-band chaining effects.

### Step 4 — Reduce scroll work on mobile (progress bar)
Two safe “mobile only” options; I’ll implement the least intrusive one unless you prefer otherwise:
- Option A (recommended): **Disable the progress bar on mobile only**
  - Use existing `useIsMobile()` (`src/hooks/use-mobile.tsx`) in both pages
  - Render the progress bar only when `!isMobile`
- Option B: Keep it, but add performance hints
  - Add `will-change-transform` (Tailwind: `will-change-transform`) to the progress bar
  - (Still not as effective as disabling on mobile if the device is struggling)

### Step 5 — Verify in preview (repeatable test)
- In Lovable preview, switch to mobile viewport (phone icon).
- Test slow scroll + fast flick scroll:
  - Does the content still “snap” when the address bar collapses/expands?
  - Do you see fewer micro-stutters during continuous scroll?
- If needed, we can A/B test:
  - `svh` vs `dvh`
  - Progress bar enabled vs disabled on mobile

## Exact files to change
- `src/pages/Deck.tsx`
  - `Slide` wrapper: `min-h-[100dvh]` → `min-h-svh`, `overflow-hidden` → `overflow-x-hidden`
  - Root container: `min-h-screen` → `min-h-svh md:min-h-screen` + `overflow-x-hidden` (+ optional overscroll)
  - Progress bar: conditionally render only on non-mobile (using `useIsMobile`)
- `src/pages/Tether.tsx`
  - Same set of changes as `/deck`

## Why this should work
- The biggest scroll “jump” culprit is the **viewport height changing mid-scroll**. Moving from `dvh` to `svh` is the standard, low-risk way to prevent that.
- Reducing `overflow-hidden` usage prevents iOS compositing quirks.
- Removing constant scroll-driven updates (progress bar) on mobile reduces jank on the scroll thread.

## One quick clarification (optional but helpful)
If you tell me which device/browser you’re seeing it on (iPhone Safari vs Chrome Android), I can fine-tune whether we also add an iOS-specific overscroll tweak. Not required to proceed, though.
