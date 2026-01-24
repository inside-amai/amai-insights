
# Complete Rethink: CSS Transform Scaling for PDF-like Mobile Experience

## Why Previous Attempts Failed

The viewport meta approach is fundamentally broken for this use case:
- iOS Safari often ignores `initial-scale` values set via JavaScript
- Even early scripts in `<head>` run after the meta tag is parsed
- Mobile browsers are designed to resist non-standard viewport configurations
- SPA routing makes viewport changes even less reliable

## The New Approach: CSS Transform Scaling

Instead of manipulating the viewport, we render the 1280px layout normally and use CSS `transform: scale()` to shrink it to fit the screen.

```text
+--------------------------------------------------+
|  Mobile Screen (e.g., 390px wide)                |
|                                                  |
|  +--------------------------------------------+  |
|  |  1280px canvas scaled to 390px via         |  |
|  |  transform: scale(0.305)                   |  |
|  |  transform-origin: top left                |  |
|  |                                            |  |
|  |  Content appears "zoomed out" but is       |  |
|  |  actually scaled, not viewport-adjusted    |  |
|  +--------------------------------------------+  |
|                                                  |
+--------------------------------------------------+
```

**Why this works**:
- No viewport manipulation needed
- Renders correctly on first paint
- Pinch-zoom works naturally on top of the scaled content
- Consistent across all mobile browsers
- No "flash" or misalignment

## Implementation Plan

### Step 1: Revert Viewport Changes

**File: `index.html`**
- Remove the inline script that manipulates viewport for /deck and /tether
- Keep the standard viewport: `width=device-width, initial-scale=1.0`

### Step 2: Create a Wrapper Component with Transform Scaling

**New approach in `Deck.tsx` and `Tether.tsx`**:

1. Detect if on mobile (screen width less than 1280px)
2. Calculate scale factor: `window.innerWidth / 1280`
3. Apply CSS transform to the outer container:
   - `transform: scale(${scale})`
   - `transform-origin: top left`
   - `width: 1280px`
   - `height: ${actualHeight / scale}px` (to ensure scrolling works)

4. Wrap everything in a container that:
   - Has the scaled dimensions
   - Allows vertical scrolling
   - Prevents horizontal overflow

### Step 3: Handle Scroll Height

When you scale content down, the browser doesn't automatically adjust the scroll area. We need to:
- Calculate the true content height
- Set an explicit height on an outer wrapper that accounts for the scale
- Or use a "spacer" element to make the scroll area correct

### Technical Details

**Container structure**:
```jsx
// Outer container - controls the visible area
<div style={{ 
  width: '100vw', 
  overflowX: 'hidden',
  overflowY: 'auto',
  minHeight: '100vh',
  background: 'black'
}}>
  {/* Scaled inner container */}
  <div style={{
    width: '1280px',
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    // height will be set to maintain proper scroll
  }}>
    {/* All slides */}
  </div>
</div>
```

**Scale calculation**:
```javascript
const [scale, setScale] = useState(1);

useLayoutEffect(() => {
  const calculateScale = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1280) {
      setScale(screenWidth / 1280);
    } else {
      setScale(1);
    }
  };
  
  calculateScale();
  window.addEventListener('resize', calculateScale);
  return () => window.removeEventListener('resize', calculateScale);
}, []);
```

**Height compensation**:
The tricky part is that when you scale content to 30% of its size, the scroll area also shrinks. To fix this, we need to set an explicit height on the scaled container that, when multiplied by scale, gives the correct visual height.

For 9 slides at 100vh each:
- True height: 9 * 100vh = 900vh
- Scaled visual height: 900vh * scale
- But browser sees: 900vh (the actual DOM height)

Solution: Wrap in a container that has height = `(9 * 100vh) * scale` to create the correct scroll area, and position the scaled content absolutely within it.

## Files to Change

### 1. `index.html`
Remove the viewport manipulation script entirely.

### 2. `src/pages/Deck.tsx`
- Remove viewport manipulation code (useLayoutEffect)
- Add scale state and calculation
- Restructure container hierarchy:
  - Outer: `div` with `overflowX: hidden`, normal scrolling
  - Spacer: `div` with calculated height to enable correct scrolling
  - Scaled content: positioned absolutely with `transform: scale()`
- Keep all slide content unchanged

### 3. `src/pages/Tether.tsx`
- Same changes as Deck.tsx

## Expected Behavior

1. User opens /deck or /tether on mobile
2. Page loads immediately with content scaled to fit screen width
3. No horizontal scroll at any zoom level
4. Vertical scroll works naturally
5. Pinch-to-zoom works to zoom in on details
6. No flash, no misalignment, no weird initial state

## Why This Will Work

- **No viewport fighting**: We accept the browser's viewport and work within it
- **Pure CSS**: Transform scaling is universally supported and predictable
- **Immediate**: Scale is calculated in useLayoutEffect, applied before paint
- **Natural zoom**: Pinch zoom operates on top of our scaled content, so it "just works"
- **Scroll works**: By using a spacer element or explicit height, scrolling behaves correctly

This is the standard approach used by PDF viewers, presentation tools, and "desktop-only" web experiences that need to work on mobile.
