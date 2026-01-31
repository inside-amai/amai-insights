
## Fix Mobile Landing Page Background

### Problem
The perspective grid background on the `/home` page looks distorted on mobile devices. The 110% scaling we added works for desktop (hiding the edge lines), but on mobile's narrower viewport the grid appears awkwardly cropped with visible cut-off lines at the edges.

### Analysis
Looking at the screenshot:
- The grid lines are visibly cut off at the left and right edges
- The perspective effect looks compressed/distorted
- The horizontal lines at top/bottom are still visible in places

The issue is that `backgroundSize: '110%'` scales proportionally, but mobile's portrait aspect ratio means the width gets scaled way more than needed while the height scaling isn't enough.

### Solution
Use responsive background sizing that works for both orientations:

**File: `src/pages/Home.tsx`**

Update the background container to use different sizing strategies for mobile vs desktop:

```tsx
<div 
  className="flex-1 flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${homeBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }}
>
```

Plus add a pseudo-element overlay or inner container to mask the edges with gradient fades:

```tsx
{/* Background container with edge masking */}
<div 
  className="flex-1 flex items-center justify-center overflow-hidden relative"
  style={{
    backgroundImage: `url(${homeBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Edge fade masks for mobile */}
  <div className="absolute inset-0 pointer-events-none md:hidden"
    style={{
      background: `
        linear-gradient(to bottom, black 0%, transparent 15%, transparent 85%, black 100%),
        linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)
      `
    }}
  />
  
  {/* Desktop edge fade - just top/bottom */}
  <div className="absolute inset-0 pointer-events-none hidden md:block"
    style={{
      background: 'linear-gradient(to bottom, black 0%, transparent 8%, transparent 92%, black 100%)'
    }}
  />
  
  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
    ...
  </div>
</div>
```

### Key Changes

| Aspect | Before | After |
|--------|--------|-------|
| Background size | `110%` (causes mobile distortion) | `cover` (natural scaling) |
| Edge handling | None | Gradient fade masks hide edge lines |
| Mobile treatment | Same as desktop | Stronger gradient fades on sides |
| Desktop treatment | 110% scale | Subtle top/bottom gradient fades |

### Technical Notes

1. **`backgroundSize: 'cover'`** - Returns to natural aspect ratio handling
2. **Gradient overlays** - Create smooth black fades at the edges that naturally hide where the grid "starts"
3. **Responsive masks** - Mobile gets side fades (10% each side), desktop just gets subtle top/bottom fades
4. **No image cropping** - The gradient approach is more elegant than trying to scale the image
