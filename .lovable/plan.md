

# Fix Mobile Layout for Slide 10: Risk Mitigation Layer

## Problem
On desktop, Slide 10 displays a clean two-column layout with "Systemic Market Risks" on the left and "AMAI Economic Guardrails" on the right. Each row shows a risk paired with its solution.

On mobile, the grid stacks vertically, causing:
1. Both column headers to appear at the top
2. The "risk → solution" relationship to be lost
3. A confusing vertical list where risks and guardrails are disconnected

## Recommended Solution: Paired Card Layout for Mobile

Instead of stacking columns, restructure the mobile layout to group each **risk + guardrail pair** together as a cohesive unit.

### Visual Structure (Mobile Only)

```text
┌─────────────────────────────────────┐
│ RISK                                │
│ Overspending on Infrastructure      │
├─────────────────────────────────────┤
│ GUARDRAIL                           │
│ Deterministic Operational Ceilings: │
│ The Treasury Engine enforces...     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ RISK                                │
│ Unsustainable Capital Flows         │
├─────────────────────────────────────┤
│ GUARDRAIL                           │
│ Bonded Capital Accountability:      │
│ Agents must post collateral...      │
└─────────────────────────────────────┘

... and so on for each pair
```

Each pair would include:
- A small "RISK" micro-label + the risk title
- A divider or subtle visual break
- A "GUARDRAIL" micro-label + the guardrail title and description

This preserves the cause-and-effect relationship on mobile while keeping the elegant two-column layout on desktop.

---

## Technical Implementation

### File to Modify
- `src/pages/Tether.tsx` (lines 786-835)

### Changes
1. **Conditional Rendering**: Use `isMobile` (already imported) to render different layouts for mobile vs desktop
2. **Desktop**: Keep the current two-column grid layout unchanged
3. **Mobile**: Render a stacked "card" layout where each risk-guardrail pair is grouped together

### Code Structure

```tsx
{/* Two-column risk/guardrail layout */}
<motion.div ... >
  {isMobile ? (
    // MOBILE: Paired card layout
    <div className="space-y-8">
      {/* Pair 1 */}
      <div className="border-l-2 border-white/10 pl-4">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">RISK</p>
        <p className="text-base text-white/70 font-medium mb-4">{t('tether.slide10.risk1')}</p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">GUARDRAIL</p>
        <p className="text-base text-white/70 font-medium mb-1">{t('tether.slide10.guardrail1.title')}</p>
        <p className="text-base text-white/50 font-light">{t('tether.slide10.guardrail1.desc')}</p>
      </div>
      {/* Pair 2, 3, 4... */}
    </div>
  ) : (
    // DESKTOP: Keep existing two-column grid
    <>
      {/* Header row */}
      <div className="grid grid-cols-2 gap-12">...</div>
      {/* Row 1-4 */}
      ...
    </>
  )}
</motion.div>
```

### New Translation Keys (Optional)
Add two new micro-labels for mobile clarity:
- `'tether.slide10.mobile.riskLabel': 'Risk'`
- `'tether.slide10.mobile.guardrailLabel': 'Guardrail'`

---

## Summary
- **Desktop**: No changes — the two-column layout remains as-is
- **Mobile**: Each risk-guardrail pair is visually grouped together with clear micro-labels, making the relationship between problem and solution immediately clear

