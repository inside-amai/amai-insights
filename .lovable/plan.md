## The problem

You're right, the current hero is under-designed for what follows. That tagline — **"Humans have FICO. Businesses have D&B. AI Agents have TARI™."** — is a three-beat punchline; it's a headline pretending to be a caption. Meanwhile every section below opens at `text-6xl/7xl`. Result: the page whispers, then shouts.

That line deserves to *land*.

## What to change

Only the hero copy block on `src/pages/Home.tsx` (lines ~62-84). Logo, animated grid, scroll cue, and every section below stay exactly as they are.

**Treat the tagline as the hero H1** — same visual register as the section H2s below.

- Render the three beats as **three stacked lines**, not one wrapped paragraph:
  - `Humans have FICO.`
  - `Businesses have D&B.`
  - `AI Agents have TARI™.`
- Scale: `text-4xl md:text-6xl lg:text-7xl`, `font-light`, `tracking-tight`, `leading-[1.05]` — matching the section H2s.
- Hierarchy inside the stanza:
  - First two lines in `text-white/55` (setup — quieter).
  - Third line in full `text-white` with `TARI™` given a subtle accent (either italic, or the same cyan `text-cyan-200` used in the Score band, TBD when building).
- Stagger the three lines in with the existing motion timing (0.4s / 0.55s / 0.7s delays) so the punchline lands last.
- Center-aligned, capped at `max-w-4xl` so the lines break cleanly.
- Bump `max-w-3xl` on the outer container up to `max-w-5xl` to fit.

## Logo + scroll cue

- Logo: unchanged (`h-12 md:h-20`). It reads as a mark above the headline, which is the right role for it.
- Scroll cue: unchanged, but push its top margin up a bit (`mt-16 md:mt-24`) so it doesn't crowd the now-larger headline.

## Copy source

The `t('home.body')` key currently holds the full tagline as one string. I'll split it into three lines at render time (or split the translation into three keys — will confirm the cleanest path when building so EN/JA/AR stay in sync).

## Out of scope

- No changes to sections 2+.
- No new CTAs, buttons, or hero visuals.
- No changes to the animated grid background.

## Result

The hero and the sections below finally speak at the same volume. The tagline reads like the thesis of the whole page instead of a subtitle under the logo.