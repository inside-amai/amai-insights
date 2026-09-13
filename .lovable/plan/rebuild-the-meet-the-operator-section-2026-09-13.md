# Rebuild the Meet the Operator section

## Scope
- Keep the existing black grid section, eyebrow, headline, two column layout, and operator log visuals.
- Replace the left body and old closing statement with the requested six line reveal and final closing line.
- Replace only the log heading with the three part credential line.

## Desktop behavior
- Turn the section into a scroll length container with a viewport height sticky inner frame.
- Map downward scroll progress to seven reveal steps: six statements, then the closing statement.
- Animate each newly revealed line upward from below with a 400ms fade.
- Keep the newest line white and settle earlier lines to the existing muted grey.
- Preserve the furthest revealed step when scrolling back up, so the sequence never replays or hides.
- End the sticky interval after the closing line has landed, allowing the following section to continue normally.

## Mobile behavior
- Disable sticky positioning and render the left sequence in normal document flow.
- Reveal each line once as it enters the viewport, with the same upward fade and staggered emphasis.
- Place the unchanged operator log after the completed text sequence.

## Log heading
- Render `THE OPERATOR'S LOG · TARI 812 · TIER 3` in the existing mono eyebrow treatment.
- Keep only `812` in the cyan accent; keep all other text and separators muted.
- Leave the log timing, line, dots, copy, spacing, and entry animation unchanged.

## Validation
- Check the section on desktop and mobile in the live preview.
- Confirm the desktop section pins and releases correctly, does not replay when scrolling upward, and the mobile layout never pins.
- Confirm the existing log still plays once at one second per entry and the next section does not shift.
