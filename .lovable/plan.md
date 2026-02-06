

# Fix: Force Logo Update on /thesis via Cache-Busting Filename

## Root Cause
Confirmed via network inspector: the `/thesis` page is fetching `amai-logo-hero-new.png` (the old file) even though the source code says `amai-logo-hero-v2.png`. This is a Vite dev server module cache issue -- the import resolution is stale for this specific file. The home page and /system-architecture work because their modules were freshly invalidated.

## Solution
Use a completely new filename that has never been used before, bypassing any cached resolution.

## Steps

### 1. Copy the uploaded logo to a fresh filename
- Copy the current `src/assets/amai-logo-hero-v2.png` to a new file: `src/assets/amai-logo-tm.png`
- This ensures a filename that has zero cache history in Vite's module graph

### 2. Update all three pages to import the new filename
This ensures consistency and prevents this issue from recurring on any page.

**`src/pages/Home.tsx`** (line 3):
```tsx
import amaiLogo from "@/assets/amai-logo-tm.png";
```

**`src/pages/Thesis.tsx`** (line 3):
```tsx
import amaiLogo from "@/assets/amai-logo-tm.png";
```

**`src/components/ExplainerHero.tsx`** (line 2):
```tsx
import amaiLogo from '@/assets/amai-logo-tm.png';
```

### 3. No other changes needed
- Logo sizing and styling remain unchanged
- No layout or structural changes required

## Scope
- 1 new asset file (copy of existing)
- 3 import line changes (one per page)
- Zero visual or layout changes -- only the filename changes to force a fresh module resolution
