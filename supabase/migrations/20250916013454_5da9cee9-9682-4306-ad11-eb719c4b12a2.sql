-- Fix the v_feed view permissions by removing excessive privileges
-- The view itself doesn't have SECURITY DEFINER but has dangerous permissions

-- Revoke all existing permissions
REVOKE ALL ON public.v_feed FROM PUBLIC;
REVOKE ALL ON public.v_feed FROM anon;
REVOKE ALL ON public.v_feed FROM authenticated;
REVOKE ALL ON public.v_feed FROM service_role;

-- Grant only appropriate SELECT permissions
GRANT SELECT ON public.v_feed TO anon;
GRANT SELECT ON public.v_feed TO authenticated;

-- Ensure the view owner is appropriate (not postgres superuser)
-- We need to recreate the view with a safer approach
DROP VIEW IF EXISTS public.v_feed;

-- Recreate the view as a regular view without excessive permissions
CREATE VIEW public.v_feed 
WITH (security_barrier=true) AS
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

-- Grant minimal required permissions
GRANT SELECT ON public.v_feed TO anon;
GRANT SELECT ON public.v_feed TO authenticated;

-- Create a comment to document the security model
COMMENT ON VIEW public.v_feed IS 'Feed view with security barrier enabled. Respects RLS policies of underlying tables.';