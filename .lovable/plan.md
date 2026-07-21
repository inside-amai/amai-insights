Refine the SDK card in the Run It section to the selected "Dark glass aesthetic" direction.

## What we'll change

- The solid-black SDK card on the Run It section (currently in `src/pages/Home.tsx`) will be rebuilt with a dark glass aesthetic: very dark translucent surface, subtle backdrop blur, a faint top-down light gradient, a soft ambient glow behind the card, and a single thin hairline border instead of the heavy offset shadow.
- The card retains the exact same verified code content, line numbers, and working Copy button.
- The caption text beneath the card and the "What you get" benefits block below will stay in place; only their surrounding spacing will be adjusted if needed to fit the new card.

## Design details

- Card shell: near-black translucent surface (`bg-[#0c0d0e]/95` / `backdrop-blur-xl`), rounded 24px corners, `border-white/10`, soft 32px shadow, and a diffuse ambient glow behind it.
- Header: same three dots + "SDK" label, Copy button styled as a glass pill with white/10 border and subtle hover.
- Code block: JetBrains Mono styling, compact line numbers, refined syntax colors — no semantic-token inversion for the terminal surface since this is a deliberately dark element on a light blueprint section.
- Footer: "Runs Locally" and "content-off by default" with a subtle emerald status dot, kept minimal.

## Implementation steps

1. Read the exact current code block and copy handler in `src/pages/Home.tsx`.
2. Replace the SDK card container and inner styling, preserving the `motion` reveal animation and the copy handler.
3. Adjust the caption and "What you get" block spacing if the new card height/depth changes the rhythm.
4. Run the TypeScript check and build to confirm no errors.
5. Take a preview screenshot of the Run It section to validate the result visually.

## Constraints

- No change to the code snippet itself (still `pip install amai-tari` + `TARIInstrument` flow).
- No change to the "Copy" button behavior or to the section's light blueprint background.
- Keep the "What you get" benefits block and the caption text unchanged unless spacing needs minor adjustment.