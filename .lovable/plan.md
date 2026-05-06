## Diagnosis

You're right — the current diagram is unbalanced. The only chromatic moments are at the very end of the flow (green Approved / red Slashed), so the eye gets pulled to the *outcome* and the *cause* (the trust intelligence itself) reads as inert white-on-black. There's no visual hierarchy signaling "this is the brain."

Looking at the rest of `/thesis`, there's already a quiet brand accent in play: the soft cyan (`rgba(166,252,252,…)`) used on the credit-score gauges in Slide 1 and Slide 2. We should reuse that — not introduce a new color.

## Color Logic (semantic, not decorative)

Three tonal zones mapped to what each region *does*:

```text
INGESTION          INTELLIGENCE          ENFORCEMENT          LEDGER
(neutral white) →  (cyan accent)     →   (green / red)    →   (neutral white)
   inputs            the "brain"          the decision         the record
```

Cyan = trust / computation. Green+Red = binary outcome. White = passive infrastructure. This gives the diagram a left-to-right tonal arc instead of a flat monochrome with two colored dots at the end.

## Specific Changes

**1. TARI™ Trust Engine (the centerpiece)**
- Border: white/30 → cyan/50 (slightly thicker glow ring)
- Brain icon: white/85 → cyan
- "TARI™ TRUST ENGINE" text: white → cyan
- Inner pulsing ring: white/10 → cyan/20
- *Rationale: this is the product. It should be the chromatic anchor of the whole diagram.*

**2. Score Output card (TARI: 780)**
- Gauge icon: white/80 → cyan/80
- "TARI: 780" number: white → cyan
- Border stays neutral so it doesn't compete with the engine
- *Rationale: the score is an output of the cyan brain — same family, lower intensity.*

**3. Data Pillars (Intent / Guardrails / Ledger feeds)**
- Pillar bars: white/10 fill → cyan/15 fill, white/20 border → cyan/25 border
- *Rationale: these are inputs feeding the engine — subtle cyan tint signals "trust signal data."*

**4. Connector arrows (selective, not all of them)**
- Score → Interceptor vertical line: white → cyan/45
- Engine → Interceptor "ENFORCEMENT" arrow: stays white (handoff to enforcement zone)
- All other arrows stay white
- *Rationale: only the line carrying the trust verdict gets colored.*

**5. Section title "TARI™ Engine"**
- White/80 → cyan/80
- Other section titles (Ingestion / Enforcement / Agent Bureau) stay white
- *Rationale: labels the cyan zone.*

**6. Legend**
- Add a 5th chip: cyan square + "Trust intelligence"
- Keeps the legend honest about the new color's meaning

## What stays unchanged

- Approved (emerald) and Slashed (red) — untouched
- Autonomous Agent, Zero-Trust SDK, Interceptor, Agent Bureau boxes — neutral white
- Continuous Feedback Loop dashed box — neutral white
- Background grid, page header, sub-headline — untouched

## Result

Cyan in the middle third, white on both sides, green/red at the decision fork. The eye now travels: **white inputs → cyan computation → green/red verdict → white record.** The diagram tells the story chromatically, and the green/red no longer feels like the only color in the room.

## Files

- `src/components/TariArchitectureDiagram.tsx` — single file, targeted className/stroke swaps as listed above.
