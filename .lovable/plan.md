
## Fix Header for /thesis and Ensure Responsive Formatting

### Problem Summary
1. **`/thesis` has wrong header**: My previous fix incorrectly added `/thesis` to `isDeckPage`, which hides the logo and navigation. The user wants `/thesis` to have the same full header as `/system-architecture`.
2. **Responsive layout issues**: On smaller screens, the header elements can overflow and cause layout problems.

### Root Cause
In `SiteHeader.tsx` line 40:
```tsx
const isDeckPage = location.pathname === '/deck' || location.pathname === '/tether' || 
                   location.pathname === '/briefing' || location.pathname === '/liability-layer' || 
                   location.pathname === '/thesis';  // <-- This is WRONG
```

The `/thesis` route was incorrectly added to `isDeckPage`, but it should have a full header like `/system-architecture`.

### Solution

#### 1. Remove `/thesis` from `isDeckPage`
Revert the change so `/thesis` shows the full header with logo, branding text, and navigation links:

```tsx
const isDeckPage = location.pathname === '/deck' || 
                   location.pathname === '/tether' || 
                   location.pathname === '/briefing' || 
                   location.pathname === '/liability-layer';
```

#### 2. Add responsive safeguards to prevent layout breaking
Make the header flex container more robust at smaller screen sizes:

- **Logo container**: Add `flex-shrink-0` to prevent the logo from shrinking
- **Branding text**: Already uses `hidden sm:block` - keep this
- **Navigation container**: Add `flex-shrink-0` and `whitespace-nowrap` to prevent wrapping
- **Header wrapper**: Ensure proper flex behavior with `flex-wrap: nowrap` or use overflow handling

#### 3. Consider hiding nav links on very small mobile screens
If space is constrained, hide some nav items on mobile:

```tsx
{!isDeckPage && (
  <a 
    href="mailto:..."
    className="hidden sm:block text-white/60 hover:text-white/90..."
  >
    Contact
  </a>
)}
```

### Files to Modify

| File | Change |
|------|--------|
| `src/components/SiteHeader.tsx` | Remove `/thesis` from `isDeckPage`, add responsive utilities |

### Technical Implementation Details

The fix involves:
1. Line 40: Remove `/thesis` from the `isDeckPage` check
2. Line 64: Add `flex-shrink-0` to logo container 
3. Line 88: Add `flex-shrink-0` to navigation container
4. Potentially hide "Contact" link on mobile to reduce crowding

This ensures:
- `/thesis` has the same header as `/system-architecture` (logo + branding + nav)
- Header doesn't break at smaller viewport sizes
- Presentation pages (`/deck`, `/tether`, `/briefing`, `/liability-layer`) maintain minimal header
