

## Clean Route Swap: /pitch and /thesis

### Goal

Eliminate the confusing route-component mismatch and the orphaned `/liability-layer` route. After this change, file names will match their routes cleanly.

### Final State

| Route | File | Content |
|-------|------|---------|
| `/pitch` | `Pitch.tsx` (rewritten with current LiabilityLayer.tsx content) | 12-slide liability layer presentation |
| `/thesis` | `Thesis.tsx` (rewritten with current Pitch.tsx content) | 6-slide seed pitch deck |
| `/liability-layer` | Deleted | Gone |

### Changes by File

**1. `src/pages/Pitch.tsx`** -- Overwrite with current LiabilityLayer.tsx content
- Copy all content from `LiabilityLayer.tsx` into `Pitch.tsx`
- Rename the exported component from `LiabilityLayer` to `Pitch`

**2. `src/pages/Thesis.tsx`** -- Overwrite with current Pitch.tsx content
- Copy all content from current `Pitch.tsx` into `Thesis.tsx`
- Rename the exported component from `Pitch` to `Thesis`

**3. `src/pages/LiabilityLayer.tsx`** -- Delete
- File no longer needed

**4. `src/App.tsx`** -- Clean up routes and imports
- Remove `LiabilityLayer` import
- Remove `Thesis` import (old one) since new Thesis.tsx will be the pitch deck
- Import `Pitch` from `./pages/Pitch` and `Thesis` from `./pages/Thesis`
- Route `/pitch` renders `<Pitch />`
- Route `/thesis` renders `<Thesis />`
- Delete the `/liability-layer` route entirely
- Remove `/liability-layer` from the full-bleed handler list

**5. `src/components/SiteHeader.tsx`** -- Update header logic
- Header completely hidden on `/thesis` (was `/pitch`) since the 6-slide deck lives there now
- Add `/pitch` to `isDeckPage` list (minimal header, since the liability layer presentation lives there now)
- Remove `/liability-layer` from `isDeckPage` list
- `isThesisPage` check no longer needed for nav toggle (the thesis page hides the header entirely)
- Default nav link points to `/pitch` with label "Explore The Thesis"

**6. `src/components/Footer.tsx`** -- Update link
- Change `to: '/thesis'` to `to: '/pitch'` in the research links

**7. `src/pages/Home.tsx`** -- Update CTA link
- Change `to="/thesis"` to `to="/pitch"`

**8. `src/pages/Briefing.tsx`** -- Update link
- Change `href="/thesis"` to `href="/pitch"`

**9. `src/components/TrinaryClassificationSection.tsx`** -- Update link
- Change `to="/thesis"` to `to="/pitch"`

### Summary
- 3 files rewritten (Pitch.tsx, Thesis.tsx, App.tsx)
- 1 file deleted (LiabilityLayer.tsx)
- 5 files with link/logic updates (SiteHeader, Footer, Home, Briefing, TrinaryClassificationSection)

