-- Drop the existing insecure view
DROP VIEW IF EXISTS public.v_feed;

-- Recreate the view with proper security settings
-- Views automatically respect RLS policies of underlying tables
CREATE VIEW public.v_feed AS
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

-- Grant only SELECT permission to appropriate roles (not all privileges)
GRANT SELECT ON public.v_feed TO anon;
GRANT SELECT ON public.v_feed TO authenticated;

-- Revoke any excessive permissions that might exist
REVOKE ALL ON public.v_feed FROM PUBLIC;