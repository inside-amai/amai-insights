
## Fix Header Logo Display on /thesis and Ensure Consistent Formatting

### Problem
On the `/thesis` page, the AMAI logo appears in the header when the browser window is not fully expanded. This causes layout issues. The same problem may affect `/system-architecture` and other pages.

### Root Cause Analysis
In `SiteHeader.tsx`:
- The `isDeckPage` check includes `/deck`, `/tether`, `/briefing`, `/liability-layer` but **excludes** `/thesis`
- When `isDeckPage` is false, the logo and branding text are displayed
- On smaller screens, the flex container doesn't have enough space for both logo section and navigation, causing layout breaks

### Solution

#### 1. Update SiteHeader.tsx to handle /thesis properly
Add `/thesis` to the list of presentation routes where the logo should be hidden, or add mobile-specific hiding for the logo on `/thesis`.

**Option A (Recommended)**: Hide logo on `/thesis` entirely (matching other presentation pages):
```tsx
// Line 40: Add /thesis to isDeckPage check
const isDeckPage = location.pathname === '/deck' || 
                   location.pathname === '/tether' || 
                   location.pathname === '/briefing' || 
                   location.pathname === '/liability-layer' ||
                   location.pathname === '/thesis';
```

**Option B**: Hide logo only on mobile for `/thesis`:
```tsx
// Add conditional mobile hiding for the logo container
{!isDeckPage && !(isThesisPage && isMobile) && (
  <div className="flex items-center gap-4">
    ...
  </div>
)}
```

#### 2. Add responsive safeguards to navigation
Ensure the navigation items don't wrap or overflow on smaller screens by adding appropriate flex utilities:

```tsx
// Line 88: Add overflow and wrapping protection
<div className="pointer-events-auto flex items-center gap-4 text-[11px] tracking-wide flex-shrink-0">
```

#### 3. Ensure consistent behavior across all presentation pages
The following pages should be checked to ensure consistent header behavior:
- `/thesis` - presentation, should hide logo
- `/system-architecture` - documentation, logo should show but not break
- `/deck`, `/tether`, `/briefing`, `/liability-layer` - presentations, already hide logo

### Files to Modify
| File | Change |
|------|--------|
| `src/components/SiteHeader.tsx` | Add `/thesis` to `isDeckPage` check to hide logo on presentation pages |

### Technical Details
The fix involves a single-line change to add `/thesis` to the `isDeckPage` route check. This ensures the `/thesis` presentation page matches the behavior of other presentation routes (`/deck`, `/tether`, `/briefing`, `/liability-layer`) where the logo and branding text are hidden.

This is consistent with the existing design pattern where presentation-style pages (scrolling slide decks) have a minimal header, while documentation pages retain the full header with logo.
