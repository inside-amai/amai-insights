

## Update Favicon with New Icon

Use the uploaded AMAI icon image as the new favicon for the site.

### Implementation Steps

1. **Copy the uploaded image to the public directory**
   - Copy `user-uploads://Screenshot_2026-01-31_at_4.54.48 PM.png` to `public/favicon.png`

2. **Update index.html favicon references**
   - Update all favicon link tags to point to the new `/favicon.png` file
   - This replaces the current references to `amai-favicon-512x512.png`

### Technical Details

**File: index.html**
```html
<!-- Current -->
<link rel="icon" type="image/png" sizes="512x512" href="/amai-favicon-512x512.png">
<link rel="icon" type="image/png" sizes="32x32" href="/amai-favicon-512x512.png">
<link rel="icon" type="image/png" sizes="16x16" href="/amai-favicon-512x512.png">
<link rel="apple-touch-icon" href="/amai-favicon-512x512.png">

<!-- Updated -->
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/favicon.png">
```

The new image will be used as the favicon across all browser tabs and bookmarks.

