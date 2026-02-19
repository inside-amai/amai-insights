## Clean Route Swap: /pitch and /thesis — COMPLETED

### Final State

| Route | File | Content |
|-------|------|---------|
| `/pitch` | `Pitch.tsx` (12-slide liability layer presentation) | Was LiabilityLayer.tsx |
| `/thesis` | `Thesis.tsx` (6-slide seed pitch deck) | Was Pitch.tsx |
| `/liability-layer` | Deleted | Gone |

### Changes Made
- Pitch.tsx rewritten with LiabilityLayer content, component renamed to Pitch
- Thesis.tsx rewritten with old Pitch content, component renamed to Thesis
- LiabilityLayer.tsx deleted
- App.tsx cleaned up: removed LiabilityLayer import, removed /liability-layer route
- SiteHeader.tsx: header hidden on /thesis, /pitch added to isDeckPage, nav links point to /pitch
- Footer, Home, Briefing, TrinaryClassificationSection: all /thesis links changed to /pitch
