
## Goal
Eliminate the remaining small scroll jump when reversing direction on mobile for `/deck` and `/tether` pages, using industry-standard CSS scoping instead of inline overrides.

## Root Cause (Confirmed)
The global `#root` styles in `src/App.css` apply `max-width: 1280px`, `margin: 0 auto`, and `padding: 2rem` to every page. When you scroll and reverse direction, the browser detects a mismatch between the slide's full-bleed layout and this constrained container, triggering a micro-recalculation of layout bounds. This is the "couple lines" jump you're seeing.

## Industry-Standard Solution: CSS Scoping

Instead of using `!important` overrides inside the component, the proper approach is to:

1. **Remove the global constraint from `#root`** for full-bleed pages by scoping it properly
2. **Use a CSS class on the `body` or a wrapper** that signals "this is a full-bleed page"
3. **Let CSS specificity handle it naturally** without inline styles or `!important`

This is how major frameworks (Next.js, Gatsby, etc.) handle route-specific layouts.

---

## Implementation

### Step 1: Modify `App.css` to scope `#root` styles

Change the global `#root` selector to only apply when a specific class is NOT present:

```css
/* Only apply constraints when NOT in full-bleed mode */
#root:not(.full-bleed) {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
```

This uses the standard CSS `:not()` pseudo-class — no hacks, no `!important`.

### Step 2: Add `.full-bleed` class to `#root` for `/deck` and `/tether`

In `App.tsx`, create a small component that adds/removes the `full-bleed` class on `#root` based on the current route:

```tsx
const FullBleedRouteHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    
    const isFullBleed = location.pathname === '/deck' || location.pathname === '/tether';
    
    if (isFullBleed) {
      root.classList.add('full-bleed');
    } else {
      root.classList.remove('full-bleed');
    }
    
    return () => {
      root.classList.remove('full-bleed');
    };
  }, [location.pathname]);
  
  return null;
};
```

Then render it inside `<BrowserRouter>`:

```tsx
<BrowserRouter>
  <FullBleedRouteHandler />
  {/* ... rest of app */}
</BrowserRouter>
```

### Step 3: Add `overflow-anchor: none` via CSS (not inline)

Add a CSS rule for full-bleed pages to disable scroll anchoring:

```css
#root.full-bleed {
  overflow-anchor: none;
}
```

This is a standard CSS property (not a hack) that tells the browser: "Don't try to correct scroll position during layout shifts."

---

## Files to Modify

| File | Change |
|------|--------|
| `src/App.css` | Scope `#root` styles with `:not(.full-bleed)`, add `#root.full-bleed` rule with `overflow-anchor: none` |
| `src/App.tsx` | Add `FullBleedRouteHandler` component that toggles `.full-bleed` class based on route |

---

## Why This Is Industry Standard

1. **CSS Scoping with `:not()`** — Standard CSS3 feature, used by Bootstrap, Tailwind, and every major framework
2. **Route-aware class toggling** — How Next.js, Gatsby, and SPA frameworks handle layout variants
3. **`overflow-anchor: none`** — Official CSS property (CSS Scroll Anchoring Module Level 1) designed specifically for this problem
4. **No `!important`** — Uses natural CSS specificity
5. **No inline styles** — All styling stays in CSS where it belongs

---

## Expected Outcome

- The `#root` container will no longer apply `max-width`, `margin`, or `padding` on `/deck` and `/tether`
- Scroll anchoring will be disabled, preventing the browser from "correcting" position on direction change
- The fix is clean, maintainable, and follows web standards
