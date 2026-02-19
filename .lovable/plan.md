

## Improve the Agent Credit Score Gauge on /pitch Slide 1

### Changes to `src/pages/Pitch.tsx`

**1. Enlarge the SVG viewBox and overall gauge**
- Increase viewBox to `0 0 340 200` to give more breathing room for labels outside the arc.
- Increase rendered width from `w-[260px] md:w-[340px]` to `w-[300px] md:w-[400px]`.

**2. Thicker, more distinct arc segments**
- Increase strokeWidth from 22 to 28-30.
- Add small gaps between segments (use `strokeDasharray` or simply space the arc paths with a 2-3 degree gap).
- Make the opacity ramp more dramatic: 0.08, 0.14, 0.22, 0.35, 0.55.

**3. Move labels outside the arc**
- Position tier labels (POOR, FAIR, GOOD, VERY GOOD, A+) further out from the arc so they don't overlap.
- Increase label font size from 8 to 9-10.
- Bump range label opacity from 0.15 to 0.25 so they're actually readable.

**4. Larger center hub with visible agent icon**
- Increase hub circle radius from 10 to 20.
- Draw a proper bot/agent icon inside: a 16x12 "monitor" rectangle with two dot "eyes" and an antenna, all with strokeWidth 1.5 and opacity 0.6-0.7 so it's actually visible.

**5. Needle glow effect**
- Add a second line behind the needle with strokeWidth 6, opacity 0.15, and a blur filter for a subtle glow.
- Keep the main needle at strokeWidth 2.5.

**6. Keep everything monochrome**
- All whites/greys only, no color. Consistent with the dark blueprint aesthetic.

