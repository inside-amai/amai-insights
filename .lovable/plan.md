

## Redirect /deck and /tether to /liability-layer

### Summary
Set up automatic redirects so that anyone visiting `/deck` or `/tether` will be seamlessly redirected to `/liability-layer`.

### Technical Implementation

**File to modify:** `src/App.tsx`

1. **Add Navigate import** from `react-router-dom`
2. **Replace the existing routes** for `/deck` and `/tether` with redirect routes:

```tsx
// Before
<Route path="/deck" element={<Deck />} />
<Route path="/tether" element={<Tether />} />

// After
<Route path="/deck" element={<Navigate to="/liability-layer" replace />} />
<Route path="/tether" element={<Navigate to="/liability-layer" replace />} />
```

The `replace` prop ensures the redirect doesn't add an entry to the browser history, so users can't "go back" to the old URL.

3. **Optional cleanup**: Remove the unused imports for `Deck` and `Tether` pages (lines 20-21), since they're no longer being rendered.

### Behavior
- Visiting `amai-insights.lovable.app/deck` → automatically redirects to `/liability-layer`
- Visiting `amai-insights.lovable.app/tether` → automatically redirects to `/liability-layer`
- The redirect is instant and seamless

