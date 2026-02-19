

## Add tagline below Slide 4 cards

A single line of text will be added after the two-card grid (after line 562) and before the closing `</motion.div>` on line 564.

### What changes

**File: `src/pages/Pitch.tsx`** (line ~563, between the card grid and the slide closing div)

Add a new `motion.p` element styled consistently with the rest of the slide (centered, subtle white text, small tracking) displaying:

> Powered by a closed-source, proprietary trust algorithm.

It will use the same animation pattern (fade-in from below) with a slightly later delay (0.7) to appear after the cards.

### Technical detail

- Element: `<motion.p>` with classes like `text-sm text-white/40 font-light text-center tracking-wide`
- Positioned between the card grid `</motion.div>` (line 562) and the slide's closing `</motion.div>` (line 564)
- Animate with `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, delay 0.7

