

# Fix: Logo Not Updating on /thesis Page

## Problem
The `/thesis` page is not displaying the updated logo with the TM mark. Investigation reveals:
- The code in `Thesis.tsx` line 3 correctly imports `amai-logo-hero-v2.png`
- However, the browser network tab shows it's loading `amai-logo-hero-new.png` instead, suggesting a stale build
- The logo element also uses `h-10 md:h-20` which could clip the TM superscript if the image has extra vertical space for it

## Solution
Re-apply the import to force a fresh build, and ensure the `<img>` element won't clip any content that extends beyond the standard bounding box.

## Technical Details

### File: `src/pages/Thesis.tsx`

1. **Re-write the logo import** (line 3) to ensure the build picks up the correct file:
   ```tsx
   import amaiLogo from "@/assets/amai-logo-hero-v2.png";
   ```
   This is already set, but will be re-applied to trigger a rebuild.

2. **Add `object-contain` and `overflow-visible`** to the logo `<img>` element (line 110) to prevent any clipping of the TM mark:
   ```tsx
   className="h-10 md:h-20 w-auto object-contain brightness-110 mt-8 md:mt-0 mb-12 md:mb-24"
   ```

3. **Match sizing with home page** -- the home page uses `h-12 md:h-20`, while thesis uses `h-10 md:h-20`. Update to `h-12` for consistency on mobile.

### Scope
- Only `src/pages/Thesis.tsx` needs changes
- No other pages affected (home and /system-architecture already working)

