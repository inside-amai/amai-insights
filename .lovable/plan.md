

## Adding Two New Team Members (Yu Xiong + Dr. Amit Jaiswal)

### The Layout Challenge

Currently: 3 profiles in a `grid-cols-3` layout with large cards and 128px headshots. Five cards in a single row would be too cramped; stacking rows would push content off-screen.

### Proposed Layout: 3-2 Staggered Grid

**Row 1 (top):** Denver, Scott, Josh -- the three co-founders, same as today but slightly more compact.
**Row 2 (bottom, centered):** Yu Xiong, Dr. Amit Jaiswal -- centered beneath, creating a balanced pyramid/diamond composition.

This is a classic pitch deck pattern for 5-person teams. It visually establishes hierarchy (founders on top, scientific advisors/researchers below) while keeping everything on one screen.

### Design Adjustments

- Reduce headshot size from 128px to ~96-104px on desktop
- Reduce card padding from `px-6 py-10` to `px-5 py-6`
- Tighten the gap between rows
- Reduce top margin on headline/subheadline to reclaim vertical space
- Row 2 uses `flex justify-center` with two cards matching the same card width as row 1

### New Profiles (Row 2)

**Position 4 -- Yu Xiong**
- Title: CHIEF SCIENTIST
- Line 1: Fellow, Academy of Social Sciences
- Line 2: Professor, University Of Surrey
- Image: `yu.jpeg` (copy to `/public/images/`)

**Position 5 -- Dr. Amit Jaiswal**
- Title: AI RESEARCHER
- Line 1: Ph.D. in Information Retrieval (MSCA)
- Line 2: Marie Curie & Former Surrey Research Fellow, Ex-UCL
- Image: `Amit.jpeg` (copy to `/public/images/`)

### Files Changed

1. **Copy images** -- `yu.jpeg` and `Amit.jpeg` to `public/images/`
2. **`src/pages/Thesis.tsx`** -- Restructure the team grid into two rows, add the two new profiles, and tighten spacing to fit all 5 on one screen

