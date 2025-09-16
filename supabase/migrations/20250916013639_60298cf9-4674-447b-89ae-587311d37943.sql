-- Fix the Security Definer View issue by ensuring the view respects RLS
-- The problem is that views can bypass RLS policies, exposing data improperly

-- Drop the current view
DROP VIEW IF EXISTS public.v_feed;

-- For Postgres 14+, we can use security_invoker to ensure RLS is respected
-- This makes the view execute with the permissions of the invoking user, not the view owner
CREATE VIEW public.v_feed 
WITH (security_invoker = true) AS
SELECT 
  fp.id,
  fp.content,
  fp.created_at,
  fp.updated_at,
  fp.sui_address,
  COALESCE(p.display_name, 'Anonymous User'::text) AS display_name,
  p.avatar_url,
  p.handle
FROM public.feed_posts fp
LEFT JOIN public.profiles p ON (fp.sui_address = p.sui_address)
ORDER BY fp.created_at DESC;

-- Grant only SELECT permissions to appropriate roles
GRANT SELECT ON public.v_feed TO anon;
GRANT SELECT ON public.v_feed TO authenticated;

-- Ensure no excessive permissions exist
REVOKE ALL ON public.v_feed FROM PUBLIC;

-- Document the security model
COMMENT ON VIEW public.v_feed IS 'Feed view with security_invoker=true. Executes with invoker permissions and respects RLS policies of underlying tables.';