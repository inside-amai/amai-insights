# Stabilize landing-page scrolling in the Google iPhone app

## Goal
Remove the direction-change jump in Google’s iPhone in-app browser without changing the landing page’s appearance or the already-smooth behavior in Safari and Chrome.

## Plan
1. Add a landing-page-only compatibility mode for the Google iOS in-app browser rather than changing every browser globally.
2. In that mode, disable automatic scroll anchoring and use stable mobile viewport heights for the few sections still sized with changing `vh` units.
3. Keep the TARI panel's scroll triggered animation exactly as it is, on mobile and desktop.
4. Reduce the fixed header’s compositing load in that browser while preserving its size, position, color, navigation, and language controls.
5. Keep all copy, spacing, grids, glows, imagery, section order, and desktop behavior unchanged.
6. Verify the landing page at the current phone width, including repeated down-to-up direction changes around the hero, token, TARI, evidence, and FAQ areas. Confirm Safari/Chrome-compatible behavior remains unchanged and check for build or runtime errors.

## Technical details
- Scope the workaround to the `/` landing page and the Google iOS app user agent.
- Use stable small-viewport units for in-flow mobile section heights.
- Apply `overflow-anchor: none` only for the affected landing-page context.
- On touch/mobile, prevent the two TARI animations from re-triggering when crossing the viewport threshold.
- Avoid changing data, navigation destinations, localization, or other pages.
