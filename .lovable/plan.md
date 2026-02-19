

## Fix: Homepage and Header "Thesis" Links

The "thesis" button on the homepage and the "Explore The Thesis" link in the header both incorrectly point to `/pitch` (the 12-slide liability layer). They should point to `/thesis` (the 6-slide seed pitch deck).

### Changes

**1. `src/pages/Home.tsx`** (line 73)
- Change `to="/pitch"` to `to="/thesis"`

**2. `src/components/SiteHeader.tsx`** (line 113)
- Change `to="/pitch"` to `to="/thesis"`

That's it -- two one-line fixes.
