
# Fixed Desktop Layout for /deck and /tether Pages

## Goal
Make both `/deck` and `/tether` pages display at a fixed desktop width that doesn't adapt to mobile screens - like a PDF would behave when opened on a phone (requiring zoom/horizontal scroll).

## Implementation Approach

### 1. Add Fixed-Width Wrapper Component
Create a wrapper that enforces a minimum desktop width and disables mobile scaling for these specific pages.

**Changes to both `src/pages/Deck.tsx` and `src/pages/Tether.tsx`:**

Wrap the entire page content in a container with:
- `min-w-[1280px]` - Forces minimum desktop width
- `overflow-x-auto` - Allows horizontal scrolling on mobile
- Remove responsive breakpoints (`md:`, `sm:`, `lg:`) from critical layout elements OR use fixed desktop values

### 2. Override Viewport for Deck Pages
Add a `useEffect` hook in both pages that dynamically modifies the viewport meta tag when these pages mount, and restores it on unmount.

```typescript
useEffect(() => {
  const viewport = document.querySelector('meta[name="viewport"]');
  const originalContent = viewport?.getAttribute('content');
  
  // Set fixed width viewport for deck pages
  viewport?.setAttribute('content', 'width=1280, initial-scale=0.5, user-scalable=yes');
  
  return () => {
    // Restore original viewport on unmount
    if (originalContent) {
      viewport?.setAttribute('content', originalContent);
    }
  };
}, []);
```

### 3. Update Container Classes
Change the root container in both pages from:
```jsx
<div className="bg-black min-h-screen">
```
to:
```jsx
<div className="bg-black min-h-screen min-w-[1280px]">
```

This ensures content never shrinks below 1280px width.

### 4. Convert Responsive Text Sizes to Fixed Desktop Values
Update key typography classes throughout both files:
- `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` → `text-7xl` (use largest size)
- `text-base md:text-lg` → `text-lg`
- `px-8 md:px-16 lg:px-24` → `px-24`
- `mb-16 md:mb-24` → `mb-24`

This ensures the slides always render at their "desktop" appearance.

---

## Technical Details

### Files to Modify
1. **src/pages/Deck.tsx** - Add viewport override, min-width container, convert responsive classes
2. **src/pages/Tether.tsx** - Same changes as Deck.tsx

### Viewport Strategy
The viewport modification approach:
- Width set to 1280px (common desktop width)
- Initial scale at 0.5 so the full slide is visible on mobile screens
- User scalable enabled so they can zoom in to read

### Result
On mobile devices:
- The page will display at full 1280px width
- The browser will zoom out to fit the width, showing the full slide
- Users can pinch to zoom or scroll horizontally
- Content layout matches exactly how it appears on desktop

This mimics PDF behavior where the document maintains its fixed dimensions regardless of screen size.
