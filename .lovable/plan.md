# Add GitHub and X logos to the header

## What
Add GitHub and X (Twitter) profile icons to the site header, linking to:

- GitHub: https://github.com/inside-amai
- X: https://x.com/AMAILabsHQ

Both open in a new tab (`target="_blank"` with `rel="noopener noreferrer"`).

## Where
`src/components/SiteHeader.tsx` — the header that appears on every page.

- Desktop nav: the two icons sit with the existing links (Operators · Token · Launchpad · Tari · Bureau ↗ · Team · Contact), before the language switcher, separated by the same divider style. Same size and muted-white color as the nav text; brighten on hover like the other links.
- Mobile menu: add the two icons to the stacked menu list, styled like the other entries.

## Icon style
- GitHub: the thin-stroke outline mark from lucide-react (`Github`), matching the site's thin, technical line style.
- X: the official X mark as a small inline SVG (no lucide bird), filled white at the same muted opacity.
- No emojis, no color fills — white-on-black, consistent with the header.

## Verification
- Playwright check at 1280×1800 and 393×852: icons render, links point to the two URLs, open in a new tab, hover brightens, no layout shift in the header, mobile menu intact.
- Build clean (build-errors.log OK).
