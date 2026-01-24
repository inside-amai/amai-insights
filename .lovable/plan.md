
# Fix Mobile Scroll Jumping on /deck and /tether Pages

## Problem Analysis

The scrolling feels "jumpy" on mobile due to three main issues:

1. **`100vh` (min-h-screen) + Mobile Browser Chrome**: When the mobile browser's address bar appears/disappears during scrolling, `100vh` recalculates, causing layout shifts. This is a notorious mobile issue.

2. **Framer Motion Viewport Margins**: The `whileInView` animations use `margin: "-100px"` which triggers animations late. As the mobile viewport height changes (browser UI), elements can jump in/out of the trigger zone.

3. **Horizontal Overflow Interference**: The diagram sections use `overflow-x-auto` which can interfere with vertical scroll momentum on touch devices.

---

## Solution (Mobile Only - No Desktop Changes)

### 1. Replace `min-h-screen` with Dynamic Viewport Height on Mobile

Change the Slide component's section from:
```jsx
className={`relative min-h-screen w-full ...`}
```
to:
```jsx
className={`relative min-h-[100dvh] md:min-h-screen w-full ...`}
```

`100dvh` (Dynamic Viewport Height) accounts for mobile browser UI changes and is the industry standard solution. On desktop (`md:` breakpoint and up), we keep `min-h-screen` as requested.

### 2. Remove Negative Viewport Margins on Mobile

The current viewport config causes late-triggering animations that "snap" when they finally enter view. Update the motion.div viewport settings from:
```jsx
viewport={{ once: true, margin: "-100px" }}
```
to:
```jsx
viewport={{ once: true, margin: "0px" }}
```

This ensures animations trigger exactly when elements enter the viewport, eliminating the "jump" effect.

### 3. Add Touch-Action for Stable Vertical Scrolling

Add `touch-action: pan-y` to the main container to prioritize vertical scrolling and prevent accidental horizontal scroll interference:
```jsx
<div className="bg-black min-h-screen touch-pan-y" ...>
```

### 4. Add Webkit Scroll Optimization

Add CSS for smooth momentum scrolling on iOS:
```css
-webkit-overflow-scrolling: touch;
```

This will be applied via the `scroll-smooth` utility or inline style on the container.

---

## Files to Modify

### src/pages/Deck.tsx
1. Line 19: Change `min-h-screen` to `min-h-[100dvh] md:min-h-screen` in the Slide component
2. Line 65: Add `touch-pan-y` class to the root container
3. Lines 131, 216, 309, 424 (and similar): Change viewport margins from `-100px` to `0px`

### src/pages/Tether.tsx  
1. Line 19: Change `min-h-screen` to `min-h-[100dvh] md:min-h-screen` in the Slide component
2. Line 65: Add `touch-pan-y` class to the root container
3. Lines 131, 216, 309, 424 (and similar): Change viewport margins from `-100px` to `0px`

---

## Technical Notes

- **`100dvh`** is a modern CSS unit (Dynamic Viewport Height) that automatically adjusts for mobile browser UI. It has excellent browser support (96%+ globally).
- **`touch-pan-y`** is a Tailwind utility that sets `touch-action: pan-y`, telling the browser to only allow vertical panning/scrolling.
- These changes only affect mobile behavior - desktop remains completely unchanged due to the `md:` breakpoint prefix.
