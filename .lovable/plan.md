

## Fix Browser Tab Icon (Revert to Square PNG Favicon)

### Problem
The rectangular SVG logo was set as the primary browser tab favicon, making it look bad in the tab. The previous square `favicon.png` was correct for browser tabs.

### Solution
Revert the primary `<link rel="icon">` in `index.html` back to the square PNG files, and remove the SVG favicon reference. The SVG is rectangular and not suitable for favicon use without cropping.

### Changes

**`index.html`** -- Remove the SVG favicon line and keep the PNG references:

```
Remove:
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">

Keep as-is:
  <link rel="icon" type="image/png" sizes="512x512" href="/amai-favicon-512x512.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
  <link rel="apple-touch-icon" sizes="512x512" href="/amai-favicon-512x512.png">
  <link rel="manifest" href="/manifest.json">
```

The square `favicon.png` and `amai-favicon-512x512.png` will handle browser tabs (as before), while the manifest with the 512px PNG will help Google search results display a higher-quality icon.

