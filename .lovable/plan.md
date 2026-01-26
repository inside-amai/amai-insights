

# Plan: Add Prefilled Email Content to Contact Link

## Overview
Update the Contact link in the universal header to include a prefilled subject line and body template when the user's email client opens.

## Prefilled Content

**Subject:**  
`Mission Briefing // [Organization Name]`

**Body:**
```text
To the AMAI Labs Team,

We are reaching out regarding the [Thesis / Architecture].

Name: 
Organization: 
Intent: 
```

---

## Technical Implementation

### File to Edit
`src/components/SiteHeader.tsx`

### Changes
Replace the simple `mailto:team@amai.net` href with a properly URL-encoded mailto string that includes `subject` and `body` parameters.

**Current Code (Line 45):**
```tsx
href="mailto:team@amai.net"
```

**New Code:**
```tsx
href="mailto:team@amai.net?subject=Mission%20Briefing%20%2F%2F%20%5BOrganization%20Name%5D&body=To%20the%20AMAI%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20the%20%5BThesis%20%2F%20Architecture%5D.%0A%0AName%3A%20%0AOrganization%3A%20%0AIntent%3A%20"
```

### URL Encoding Reference
| Character | Encoded |
|-----------|---------|
| Space     | `%20`   |
| `/`       | `%2F`   |
| `[`       | `%5B`   |
| `]`       | `%5D`   |
| `,`       | `%2C`   |
| `:`       | `%3A`   |
| Newline   | `%0A`   |

---

## Note on "Nothing Happens"
The mailto link is correctly implemented. If clicking it doesn't open an email client, the issue is with the user's system configuration (no default mail app set) or browser settings — not the code. This prefill update won't change that behavior, but it will ensure the email is ready to send once the mail client does open.

---

## Summary
- **1 file edited**: `src/components/SiteHeader.tsx`
- **Change**: Update mailto href to include prefilled subject and body

