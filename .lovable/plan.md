
# Plan: Independent Translations for /tether Page

## Summary

Create a separate set of translation keys for the `/tether` page so you can update its copy independently from `/deck` across all three languages (English, Japanese, Arabic).

## Approach

### 1. Create New Translation Namespace

Add a complete set of `tether.*` translation keys to `LanguageContext.tsx` for all three languages, duplicating the existing `deck.*` translations as a starting point.

**Files to modify:**
- `src/contexts/LanguageContext.tsx` - Add `tether.*` keys to English, Japanese, and Arabic sections

### 2. Update Tether.tsx to Use New Keys

Change all `t('deck.*')` calls in `Tether.tsx` to use `t('tether.*')` instead.

**Files to modify:**
- `src/pages/Tether.tsx` - Replace all `deck.` references with `tether.`

## Implementation Details

### Step 1: Add Tether Translations to LanguageContext

For each language section (en, ja, ar), add the following new keys:

```text
English (lines ~842):
  'tether.footer': 'Infrastructure & Research · AMAI Labs',
  'tether.slide1.label': 'BRIEFING',
  'tether.slide1.headline1': 'Agents Are',
  'tether.slide1.headline2': 'Entering the Economy.',
  ... (all slide keys)

Japanese (lines ~1672):
  'tether.footer': '基盤研究開発 · AMAI Labs',
  'tether.slide1.label': '概要説明',
  ... (all slide keys with Japanese translations)

Arabic (lines ~2502):
  'tether.footer': 'البنية التحتية والأبحاث · AMAI Labs',
  'tether.slide1.label': 'الإحاطة',
  ... (all slide keys with Arabic translations)
```

### Step 2: Apply Your Change Across All Languages

Update the specific text you want changed ("This is the unresolved layer."):

- **English**: `'tether.slide2.point3.title': '3. This is the unresolved layer.'`
- **Japanese**: `'tether.slide2.point3.title': '3. これが未解決の層である。'`
- **Arabic**: `'tether.slide2.point3.title': '3. هذه هي الطبقة غير المحلولة.'`

### Step 3: Update Tether.tsx

Replace translation key references:
- Change `t('deck.footer')` → `t('tether.footer')`
- Change `t('deck.slide1.label')` → `t('tether.slide1.label')`
- ... and so on for all ~90 translation key usages

Also remove the hardcoded text that was added previously, replacing it with the proper translation key.

## Translation Keys Count

The deck translations include approximately **90 keys** per language:
- Slide 1: 5 keys (label, headline1, headline2, subheadline1, subheadline2)
- Slide 2: 8 keys (label, headline1, headline2, 3 point titles, 3 point bodies, closing)
- Slide 3: 12 keys (label, headline, body1, body2, 4 pillar titles, 4 pillar descriptions, closing)
- Slide 4: 14 keys (label, headline, 5 step names, 5 explanations, mobile loop, closing)
- Slide 5: 9 keys
- Slide 6: 5 keys
- Slide 7: 12 keys
- Slide 8: 10 keys
- Slide 9: 6 keys
- Footer: 1 key

**Total: ~90 keys × 3 languages = ~270 new translation entries**

## Workflow Going Forward

After this change, to update any text on `/tether`:
1. Find the relevant `tether.*` key in `LanguageContext.tsx`
2. Update the value in all three language sections (en, ja, ar)
3. The `/deck` page remains completely unchanged

## Technical Notes

- The existing hardcode for slide 2, point 3 title in Tether.tsx will be reverted in favor of using the new translation key
- No changes to `/deck` or its `deck.*` translation keys
- RTL layout behavior remains intact since it's based on `language === 'ar'`
