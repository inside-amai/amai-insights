

# Fix: Update Logo in the CORRECT File -- LiabilityLayer.tsx

## Root Cause

The routing in `App.tsx` (lines 123-125) has the routes swapped:
- `/thesis` renders **`LiabilityLayer`** (not `Thesis`)
- `/liability-layer` renders **`Thesis`** (not `LiabilityLayer`)

Every previous attempt updated `Thesis.tsx`, but that file is rendered at `/liability-layer`, not `/thesis`. The file that actually renders at `/thesis` is `LiabilityLayer.tsx`, and it still imports the OLD logo on line 3:

```
import amaiLogo from "@/assets/amai-logo-hero-new.png";
```

This is why home and /system-architecture worked (they were correctly updated) but /thesis never changed.

## Fix

One single line change in `src/pages/LiabilityLayer.tsx`, line 3:

**Before:**
```
import amaiLogo from "@/assets/amai-logo-hero-new.png";
```

**After:**
```
import amaiLogo from "@/assets/amai-logo-tm.png";
```

No other changes needed. The logo element styling in `LiabilityLayer.tsx` already has appropriate sizing (`h-12 md:h-16 lg:h-20`).

## Scope
- 1 file changed: `src/pages/LiabilityLayer.tsx` (line 3 only)
- Zero layout or styling changes
