
Goal: remove the ambiguous black rectangle in Stage 2 and replace it with a clearer, more professional visual treatment.

What that element is now
- The empty black rectangle in the middle of the red curved line appears to be an abstract placeholder for a “visibility gap” or “blind spot” in legacy security.
- Because it has no label, no icon, and no explanatory framing, it reads like an accidental leftover block rather than an intentional part of the diagram.

Implementation plan
1. Refine the Stage 2 bottom graphic in `src/pages/Trust.tsx`.
   - Remove the unlabeled black rectangle from the SVG.
   - Keep the red rogue-action path and blue dashed baseline only if they still communicate clearly without the block.

2. Replace the ambiguous shape with one of these more professional visual treatments:
   - Preferred: a labeled “Unverified Runtime Intent” marker centered on the line.
   - Alternative: a subtle dashed gap / interruption in the baseline with a small caption like “No sanity verification layer”.
   - Alternative: a small shield-outline or warning-node badge instead of a solid black box.

3. Align the visual with the page’s institutional tone.
   - Use the same typography, border language, and muted color system already used elsewhere on `/trust`.
   - Avoid decorative abstraction that is not self-explanatory.
   - Ensure the graphic reads as a risk-control diagram, not an illustration artifact.

4. Tighten Stage 2 narrative clarity.
   - Make the bottom visual explicitly support the card’s message:
     - legacy permissions verify identity
     - they do not verify runtime sanity
     - the rogue path passes through an untrusted execution zone

5. QA at the current desktop viewport.
   - Verify the revised element feels intentional at 1374px width.
   - Check that nothing appears clipped, floating, or visually “orphaned” inside the card.

Recommended final direction
- Best option is to remove the black rectangle entirely and replace it with a small labeled interruption such as:
  - “UNVERIFIED EXECUTION GAP”
  - or “NO RUNTIME SANITY CHECK”
- That preserves the meaning while making the diagram read much more professionally.

Technical detail
- The element comes from the Stage 2 inline SVG in `src/pages/Trust.tsx`, specifically the centered `<rect ... />` drawn between the two dashed blue path segments.
- The implementation will update that SVG only; no route or layout changes are needed.
