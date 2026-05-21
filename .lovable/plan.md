## Three diagram fixes to `src/pages/Diagram2.tsx`

1. **Rename middle Column 1 box**: `col1Boxes[1].title` → `"NeMo Guardrails"` (was `"NeMo Framework"`). Arrow label at row 2 stays `"3rd party catalog"`.

2. **Remove `agent spawn` sub-label from Nemoclaw box**: set `col1Boxes[0].sub` to `""`. The arrow label `"agent spawn"` on row 1 remains.

3. **Re-anchor the two curved arrows to specific box edges** instead of column centers:

   - **Top arrow — Behavioral telemetry**:
     - Start: right edge of Zero-Trust SDK box → `(col2X + boxW, rowYs[0] + boxH/2)`
     - End: left edge of Global Ledger sub-row → `(bureauX, bureauY + (bureauH/3)/2)`
     - Bezier control points adjusted so the curve arcs upward over the top of the diagram and lands cleanly on the Bureau's left edge at the Global Ledger row.
     - Label `"Behavioral telemetry"` repositioned to sit above the apex of the new curve.

   - **Bottom arrow — TARI score + enforcement decision**:
     - Start: left edge of Cross-vendor Reputation Lookup sub-row → `(bureauX, bureauY + (bureauH/3)*2 + (bureauH/3)/2)`
     - End: right edge of TARI Interceptor box → `(col2X + boxW, rowYs[2] + boxH/2)`
     - Bezier control points adjusted so the curve arcs downward beneath the diagram.
     - Label `"TARI score + enforcement decision"` repositioned below the apex.

No other changes — typography, colors, box sizes, headers, footer caption, and download button all unchanged.
