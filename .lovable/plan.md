

## Fix Grid Background Edge Lines on Home Page

### Problem
The grid background image on the `/home` page shows visible horizontal lines where it meets the header and footer. This makes it obvious where the grid "starts" - the lines appear to begin right at the edge rather than being part of a continuous, already-in-progress grid.

### Solution
Adjust the background sizing and positioning to "push in" the grid so the edge lines are hidden beyond the visible area. This creates the illusion that the grid extends infinitely in all directions.

### Technical Approach

**File: `src/pages/Home.tsx`**

Update the background container styling (lines 18-26):

```tsx
<div 
  className="flex-1 flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${homeBg})`,
    backgroundSize: '110%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }}
>
```

Key changes:
- Change `backgroundSize` from `'cover'` to `'110%'` - this scales the image slightly larger than the container
- Add `overflow-hidden` class to ensure the enlarged background doesn't cause layout issues
- The 10% enlargement pushes the grid edges outside the visible area, hiding the "starting" horizontal lines

### Visual Effect

| Before | After |
|--------|-------|
| Grid lines visible at header/footer boundary | Grid appears continuous, already in progress |
| `backgroundSize: 'cover'` - image fits exactly | `backgroundSize: '110%'` - image extends 5% beyond each edge |

This approach works because by making the background 10% larger, the top and bottom edges of the grid (where those horizontal lines are) get pushed outside the visible container boundaries.

