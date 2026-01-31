
# Admin Page for Pilot Access Requests

## Overview
Create a simple, secure admin page at `/admin/pilot-requests` that displays all pilot access request submissions from the `pilot_requests` table. The page will match the existing dark aesthetic of the site and include functionality to update request statuses.

## What You'll Get
- A clean admin view showing all pilot access requests in a table
- Ability to see: Name, Organization, Use Case, Why AMAI, LinkedIn/Website, Status, and Date
- Quick status update buttons (Pending → Approved/Rejected)
- Sorted by newest first
- Matching dark theme consistent with the rest of the site

---

## Technical Details

### 1. Create Admin Page Component
**File:** `src/pages/admin/PilotRequests.tsx`

The page will:
- Fetch all records from `pilot_requests` table ordered by `created_at` descending
- Display in a responsive table using existing UI components
- Show status badges with color coding (pending=yellow, approved=green, rejected=red)
- Include dropdown or buttons to update status
- Use the existing site styling (dark background, white/gray text)

### 2. Add Route to App.tsx
Add the new route:
```
/admin/pilot-requests → <AdminPilotRequests />
```

### 3. RLS Policy Consideration
Currently, the `pilot_requests` table likely allows public inserts but may restrict reads. You may need to:
- Add an RLS policy for admin reads, OR
- Temporarily access via Supabase Dashboard until roles are set up

For now, I'll implement the page assuming read access is available. If you see no data, we'll need to check RLS policies.

### 4. UI Layout
```text
┌──────────────────────────────────────────────────────────────────┐
│  AMAI Labs · Pilot Requests Admin                                │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ Name     │ Org    │ Use Case │ Status  │ Date    │ Actions │  │
│  ├──────────┼────────┼──────────┼─────────┼─────────┼─────────┤  │
│  │ John Doe │ Acme   │ Agent... │ PENDING │ Jan 30  │ ✓  ✗    │  │
│  │ Jane Sm  │ Corp   │ AI pl... │ APPROVED│ Jan 29  │   ✗     │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  Click row to expand and see full details                        │
└──────────────────────────────────────────────────────────────────┘
```

### 5. Components Used
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell` (existing)
- `Badge` for status display
- `Button` for actions
- `Card` for container styling
- Loading spinner while fetching

### Files to Create/Modify
1. **Create:** `src/pages/admin/PilotRequests.tsx` - Main admin page
2. **Modify:** `src/App.tsx` - Add route

### Security Note
This is a simple admin view without authentication protection. For production, you should add:
- Admin role checking via `user_roles` table
- AuthGuard wrapper with admin verification

For now, the page will be accessible by URL for quick access to view submissions.
