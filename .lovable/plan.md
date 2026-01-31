
# Fix Desktop Scrolling on /thesis Page

## Problem
Users cannot scroll on the `/thesis` page on desktop. This is a regression caused by mobile optimization CSS properties that are interfering with desktop scrolling behavior.

## Root Cause
The main container in `LiabilityLayer.tsx` (line 134) has problematic CSS classes:

```
bg-black min-h-svh md:min-h-screen overflow-x-hidden overscroll-y-contain touch-pan-y
```

Two properties are causing the issue:
- **`overscroll-y-contain`**: Prevents scroll chaining but can interfere with Framer Motion's `scrollYProgress` hook on desktop
- **`touch-pan-y`**: A touch-action property meant for mobile that can unexpectedly affect desktop scrolling when combined with motion scroll tracking

For comparison, the working `/trust-formula` page uses simple standard CSS:
```
min-h-screen bg-black relative overflow-hidden
```

## Solution
Apply mobile-specific properties conditionally so they only affect touch devices, not desktop:

### Change
Update line 134 in `src/pages/LiabilityLayer.tsx`:

**Before:**
```tsx
<div className="bg-black min-h-svh md:min-h-screen overflow-x-hidden overscroll-y-contain touch-pan-y" dir={isRTL ? "rtl" : "ltr"}>
```

**After:**
```tsx
<div 
  className={`bg-black min-h-svh md:min-h-screen overflow-x-hidden ${
    isMobile ? 'overscroll-y-contain touch-pan-y' : ''
  }`} 
  dir={isRTL ? "rtl" : "ltr"}
>
```

This approach:
- Keeps `overscroll-y-contain` and `touch-pan-y` for mobile devices where they help prevent scroll jank
- Removes these properties on desktop where they interfere with normal scroll behavior and the `scrollYProgress` hook
- Uses the existing `isMobile` hook that's already in the component
- Follows the same conditional pattern already used for animations in this file

## Files Modified
- `src/pages/LiabilityLayer.tsx` - Single line change to container className

## Expected Outcome
- Desktop users can scroll normally through all 12 slides
- Mobile performance optimizations remain intact
- No Safari error messages on either platform
