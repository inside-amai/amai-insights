
# Mobile Performance Fix for /thesis Page

## Problem Summary
Users are reporting the `/thesis` page (which renders `LiabilityLayer.tsx`) doesn't load properly on mobile devices, with broken scrolling and Safari showing error messages. This is caused by intensive Framer Motion animations that overwhelm mobile browsers.

## Root Cause Analysis
The page has 12 slides, each with 5-8 animated elements using `whileInView` with `y` transforms. This creates:
- 60+ animated elements recalculating positions during scroll
- Continuous `scrollYProgress` calculations via `useScroll`
- Full Framer Motion bundle (instead of lighter alternatives)

The session replay confirmed rapid `transform: translateY(...)` updates causing rendering bottlenecks.

## Solution: Mobile-Optimized Animation Pattern

Apply the same proven pattern already working on `/trust-formula`:

### Key Changes

**1. Use LazyMotion with domAnimation**
Reduces the animation bundle size and uses more performant APIs:
```text
Before: import { motion, useScroll, AnimatePresence } from "framer-motion"
After:  import { motion, LazyMotion, domAnimation, AnimatePresence } from "framer-motion"
```

**2. Create getAnimationProps() Helper**
Conditionally disable y-axis transforms on mobile, using opacity-only fades:
```text
Mobile:  { opacity: 0 } → { opacity: 1 }
Desktop: { opacity: 0, y: 20 } → { opacity: 1, y: 0 }
```

**3. Reduce Animation Duration on Mobile**
Mobile devices benefit from shorter, snappier transitions:
```text
Mobile:  0.3s duration
Desktop: 0.6-0.8s duration
```

**4. Remove scrollYProgress on Mobile**
The scroll progress bar is already hidden on mobile, but the `useScroll` hook still runs. We'll conditionally skip the hook entirely.

---

## Technical Implementation

### File: `src/pages/LiabilityLayer.tsx`

**Change 1 - Update imports (line 2)**
```text
Before: import { motion, useScroll, AnimatePresence } from "framer-motion";
After:  import { motion, useScroll, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
```

**Change 2 - Add animation helper function (after line 106)**
Add a `getAnimationProps` function that returns different animation configurations based on device:
- For mobile: opacity-only animations with shorter durations
- For desktop: full y-transform animations with viewport margins

**Change 3 - Wrap content in LazyMotion (line 109)**
Wrap the entire page content in `<LazyMotion features={domAnimation}>` to use the optimized animation subset.

**Change 4 - Replace hardcoded animations throughout the file**
All `motion.div` and `motion.p` elements with `whileInView` animations will use the helper function instead of inline animation props. This affects approximately 40+ elements across all 12 slides.

**Change 5 - Conditional useScroll hook**
Only create the scroll progress motion value on desktop devices.

---

## Expected Outcome
- Smooth loading and scrolling on all mobile devices
- No Safari error messages
- Faster initial page render
- Maintained desktop experience with full animations
- Reduced JavaScript bundle executed on mobile

## Risk Assessment
**Low risk** - This exact pattern is already proven in `TrustFormula.tsx` and aligns with the documented mobile optimization approach in the project memory.

## Files Modified
- `src/pages/LiabilityLayer.tsx` - Single file with comprehensive animation refactor
