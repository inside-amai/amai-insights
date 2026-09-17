# Translate Operators, Token, Launchpad, and TARI

## Goal
Extend the landing page’s EN, JA, and AR language switcher to `/operators`, `/token`, `/launchpad`, and `/tari`, changing only the words while preserving each page’s current visual design, spacing, animation, and left-to-right layout.

## Build
- Add complete Japanese and Arabic editorial translations for every visible string on all four pages: hero copy, figures, TL;DR, Summary, chapter titles and notes, full chapter text, glossary, navigation labels, tables, cards, links, and closing copy.
- Keep English as the source of truth and preserve all names, percentages, timings, scores, technical terms, links, and claims.
- Connect each page to the existing language selector so changing EN, JPN, or AR updates the full page immediately.
- Keep the same Roboto typography, font sizes, weights, widths, alignment, component structure, animation, and LTR layout used in English.
- Preserve special page behavior including sticky chapter navigation, mobile chapter selectors, structured cycle/schedule rows, the TARI gauge, and external links.

## Verification
- Check all four pages in EN, Japanese, and Arabic on desktop and mobile.
- Confirm language changes affect text only, with no missing English strings, overflow, overlap, or layout breakage.
- Confirm sticky navigation, mobile selectors, links, animation, and the preview build remain working.
