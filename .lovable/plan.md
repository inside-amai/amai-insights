
# Fix Horizontal Scroll on Mobile for /deck and /tether Pages

## Problem
When viewing `/deck` and `/tether` pages on mobile (zoomed out), there is extra horizontal space on both sides, allowing side-to-side scrolling. The content should be "locked in" at exactly 1280px with no overflow.

## Root Causes Identified
1. **Root container uses `min-w-[1280px]`** - This sets a minimum but allows expansion beyond 1280px
2. **Page number positioned with `right-12`** - The absolute positioning at 48px from right may extend beyond container bounds
3. **No `overflow-x-hidden`** on root container - Allows horizontal overflow to create scrollable area
4. **Slide sections use `w-full`** - Can expand beyond the intended 1280px width

## Solution

### Changes to Both `src/pages/Deck.tsx` and `src/pages/Tether.tsx`

**1. Fix the root container (line 82 in both files)**

Change from:
```jsx
<div className="bg-black min-h-screen min-w-[1280px]" ...>
```
To:
```jsx
<div className="bg-black min-h-screen w-[1280px] max-w-[1280px] overflow-x-hidden" ...>
```

This locks the width to exactly 1280px and prevents any horizontal overflow.

**2. Update the Slide component section element (line 20 in both files)**

Change from:
```jsx
<section className={`relative min-h-screen w-full flex items-center overflow-hidden ...`}
```
To:
```jsx
<section className={`relative min-h-screen w-[1280px] max-w-[1280px] flex items-center overflow-hidden ...`}
```

This ensures each slide is exactly 1280px wide, matching the parent container.

**3. Adjust page number positioning (line 47 in both files)**

Change from:
```jsx
<div className={`absolute bottom-10 ${isRTL ? 'left-12' : 'right-12'} ...`}>
```
To:
```jsx
<div className={`absolute bottom-10 ${isRTL ? 'left-8' : 'right-8'} ...`}>
```

Reduce the offset from 48px to 32px to ensure it stays well within the 1280px boundary.

## Technical Summary

| Element | Current | Fixed |
|---------|---------|-------|
| Root container width | `min-w-[1280px]` | `w-[1280px] max-w-[1280px]` |
| Root overflow | (none) | `overflow-x-hidden` |
| Slide section width | `w-full` | `w-[1280px] max-w-[1280px]` |
| Page number offset | `right-12` (48px) | `right-8` (32px) |

## Files to Modify
- `src/pages/Deck.tsx` - 3 line changes
- `src/pages/Tether.tsx` - 3 line changes

## Expected Result
On mobile, when fully zoomed out, the deck will display at exactly 1280px width with no horizontal scroll. The content will be "locked in" and users will only be able to scroll vertically between slides or pinch to zoom.
