

## Fix Header Icon Warping/Jittering

### Problem
The header icon appears slightly "off" or "warped" due to sub-pixel positioning fluctuations detected in the session replay. The browser is continuously applying tiny translateX/translateY transforms (less than 1 pixel), causing visual instability.

### Solution
Apply the following fixes to the header icon in `SiteHeader.tsx`:

1. **Remove conflicting container dimensions** - The parent anchor has fixed width/height that conflicts with the image's `w-auto` sizing
2. **Add GPU acceleration** - Use `will-change: transform` or `transform: translateZ(0)` to stabilize rendering
3. **Use `image-rendering: crisp-edges`** - Prevent browser anti-aliasing from causing blur
4. **Simplify the sizing model** - Let the image control its own dimensions without container constraints

### Changes

**File: `src/components/SiteHeader.tsx`**

Update the logo container and image (lines 65-75):

```tsx
<a 
  href="https://amai.net" 
  className="pointer-events-auto flex-shrink-0"
>
  <img 
    src={headerIcon}
    alt="AMAI" 
    className="h-7 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
    style={{ 
      transform: 'translateZ(0)', 
      imageRendering: 'crisp-edges',
      backfaceVisibility: 'hidden'
    }}
    loading="eager"
  />
</a>
```

Key changes:
- Remove fixed `w-[48px] md:w-[64px] h-7 md:h-10` from the anchor - let the image define its own size
- Add inline `transform: translateZ(0)` to force GPU layer and prevent sub-pixel jitter
- Add `imageRendering: crisp-edges` to prevent anti-aliasing blur
- Add `backfaceVisibility: hidden` as additional render stabilization

---

### Technical Details

| Property | Purpose |
|----------|---------|
| `translateZ(0)` | Creates a GPU-composited layer, preventing sub-pixel recalculation jitter |
| `crisp-edges` | Tells browser to use nearest-neighbor scaling instead of smoothing |
| `backfaceVisibility: hidden` | Reduces composite layer complexity and stabilizes 3D transforms |

This fix addresses the sub-pixel transforms (0.13px to 0.98px fluctuations) observed in the session replay by forcing the browser to treat the icon as a stable composited layer.

