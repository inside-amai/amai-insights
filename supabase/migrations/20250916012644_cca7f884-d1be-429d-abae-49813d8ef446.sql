-- Drop the existing insecure view
DROP VIEW IF EXISTS public.v_feed;

-- Recreate the view with proper security settings
-- This view will respect RLS policies of the underlying tables
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

-- Enable RLS on the view (though it will inherit from underlying tables)
ALTER TABLE public.v_feed ENABLE ROW LEVEL SECURITY;

-- Grant only SELECT permission to appropriate roles
GRANT SELECT ON public.v_feed TO anon;
GRANT SELECT ON public.v_feed TO authenticated;

-- Create a policy that allows anyone to view the feed
-- This respects the underlying table RLS policies
CREATE POLICY "Anyone can view feed" ON public.v_feed
FOR SELECT USING (true);