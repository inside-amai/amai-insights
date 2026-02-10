

# Replace x402 with x702 — Global Find & Replace

## Summary
Replace every instance of "x402" with "x702" across the entire codebase. This affects 6 files with a total of ~74 occurrences.

## Files to Update

### 1. `src/contexts/LanguageContext.tsx` (15 occurrences)
All three language blocks (EN, JP, AR) contain references to x402 in translation strings such as `home.body`, trinary classification subtitles, and other content keys. Every instance will be changed to x702.

### 2. `src/components/AgentArchitectureDiagram.tsx` (1 occurrence)
- "Powered by x402 Protocol" becomes "Powered by x702 Protocol"

### 3. `src/components/TrinaryClassificationSection.tsx` (1 occurrence)
- "The x402 Layer enforces a strict 3-Tier Economic Model." becomes "The x702 Layer..."

### 4. `src/pages/TrustFormula.tsx` (10 occurrences)
- "Target System: x402 Enforcement Layer" and all other hardcoded references throughout the page become x702.

### 5. `public/llms/terminal.md` (17 occurrences)
- All references to x402 settlement logic, x402 layer, x402 protocol become x702.

### 6. `public/llms-full.txt` (22 occurrences)
- All references to x402 become x702.

## Technical Details
- Straightforward text replacement: `x402` to `x702` in all contexts
- No logic or structural changes required
- Preserves all existing formatting, styling, and translations

