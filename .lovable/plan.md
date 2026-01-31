
# Password Protect Internal Pages from LLM Scraping

## Overview
Create password protection for 5 internal/development pages to prevent LLM crawlers from accessing sensitive content. All pages will share a single password.

## Pages to Protect
| Route | Component | Purpose |
|-------|-----------|---------|
| `/genesis-mint` | GenesisMint.tsx | Token mint page |
| `/founders-mint` | FoundersMint.tsx | Founders exclusive mint |
| `/admin/pilot-requests` | PilotRequests.tsx | Admin dashboard |
| `/ui` | UI.tsx | UI component testing |
| `/diagram` | Diagram.tsx | Architecture diagram |

## Technical Approach

### 1. Create Reusable Password Gate Component
**New file:** `src/components/PasswordGate.tsx`

A wrapper component that:
- Displays a password prompt matching the existing TrustFormula design
- Stores authentication in sessionStorage (per-session persistence)
- Accepts a `storageKey` prop for page-specific session tracking
- Shows a customizable title/subtitle

### 2. Shared Password Configuration
**Password:** `amai-internal-7392`

All protected pages will use the same password for simplicity. The password is stored as a constant in the PasswordGate component.

### 3. Apply Protection to Each Page

**Pattern:** Wrap each page's return content with the PasswordGate component.

```tsx
// Example usage in any protected page:
import { PasswordGate } from '@/components/PasswordGate';

const ProtectedPage = () => {
  return (
    <PasswordGate 
      storageKey="page-name-auth" 
      title="Protected Page"
      subtitle="Page description"
    >
      {/* Existing page content */}
    </PasswordGate>
  );
};
```

## Files to Modify

| File | Change |
|------|--------|
| `src/components/PasswordGate.tsx` | **Create** - Reusable password protection component |
| `src/pages/GenesisMint.tsx` | Wrap content with PasswordGate |
| `src/pages/FoundersMint.tsx` | Wrap content with PasswordGate |
| `src/pages/admin/PilotRequests.tsx` | Wrap content with PasswordGate |
| `src/pages/UI.tsx` | Wrap content with PasswordGate |
| `src/pages/Diagram.tsx` | Wrap content with PasswordGate |

## UI Design
The password gate will match the existing TrustFormula design:
- Black background with centered card
- Lock icon
- "Protected Page" heading with customizable subtitle
- Password input field
- "ACCESS CONTENT" button
- "Return to Home" link
- Subtle grid pattern background on the card

## Why This Works for LLM Protection
- LLMs that scrape the site will only see the password prompt HTML
- The actual page content is not rendered until password is entered
- sessionStorage means users only enter password once per browser session
- Does not affect SEO for public pages (robots.txt/sitemap remain unchanged)
