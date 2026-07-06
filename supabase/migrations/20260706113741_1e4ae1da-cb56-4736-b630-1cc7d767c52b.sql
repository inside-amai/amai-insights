-- Lock down read access: only service_role may read pilot_requests
REVOKE SELECT ON public.pilot_requests FROM anon, authenticated, PUBLIC;
GRANT ALL ON public.pilot_requests TO service_role;

-- Replace the permissive WITH CHECK (true) insert policy with validated checks
DROP POLICY IF EXISTS "Anyone can submit pilot requests" ON public.pilot_requests;

CREATE POLICY "Public can submit validated pilot requests"
ON public.pilot_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) > 0
  AND length(name) <= 200
  AND length(btrim(organization)) > 0
  AND length(organization) <= 200
  AND length(btrim(use_case)) > 0
  AND length(use_case) <= 5000
  AND length(btrim(why_amai)) > 0
  AND length(why_amai) <= 5000
  AND (linkedin_website IS NULL OR length(linkedin_website) <= 500)
  AND status = 'pending'
);