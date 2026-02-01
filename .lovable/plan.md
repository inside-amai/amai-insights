
## Fix "Explore the Architecture" Button on /thesis Page

### Problem
The "Explore the Architecture" button at the bottom of the `/thesis` page currently routes to the home page (`/`) instead of `/system-architecture`.

### Root Cause
In `App.tsx`, the routes are intentionally swapped:
- `/thesis` renders the `LiabilityLayer` component
- `/liability-layer` renders the `Thesis` component

Previous fixes were applied to `Thesis.tsx`, but the `/thesis` route actually displays content from `LiabilityLayer.tsx` - which still has `href="/"`.

### Solution
Update the button's href in `LiabilityLayer.tsx` from `"/"` to `"/system-architecture"`.

**File: `src/pages/LiabilityLayer.tsx` (line 925)**

| Before | After |
|--------|-------|
| `href="/"` | `href="/system-architecture"` |

This is a one-line fix that will make the button navigate to the correct architecture page.
