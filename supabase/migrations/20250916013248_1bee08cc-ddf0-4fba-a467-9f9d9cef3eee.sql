-- Add session identifier to track connections without requiring full authentication
-- This allows for basic privacy while maintaining the public giveaway functionality
ALTER TABLE public.okx_connections 
ADD COLUMN session_id text;

-- Add an optional user identifier for authenticated users
ALTER TABLE public.okx_connections 
ADD COLUMN user_identifier text;

-- Create a composite index for better performance
CREATE INDEX idx_okx_connections_session ON public.okx_connections(session_id);
CREATE INDEX idx_okx_connections_user ON public.okx_connections(user_identifier);

-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Anyone can view okx connections" ON public.okx_connections;
DROP POLICY IF EXISTS "Anyone can create okx connections" ON public.okx_connections;

-- Create secure policies
-- Allow insertion with session/user tracking
CREATE POLICY "Users can create connections with session tracking" 
ON public.okx_connections 
FOR INSERT 
WITH CHECK (true);

-- Restrict viewing to only admin role (for airdrop distribution) or own connections
-- Since no auth is implemented yet, we'll use a more restrictive approach
CREATE POLICY "Restrict access to connections" 
ON public.okx_connections 
FOR SELECT 
USING (false); -- Initially restrict all access until proper authentication is added

-- Create a secure function for admin access to view connections for airdrop purposes
CREATE OR REPLACE FUNCTION public.get_okx_connections_for_admin()
RETURNS TABLE(
  id uuid,
  address text, 
  chain text,
  created_at timestamp with time zone,
  connection_count bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- This function should only be called by authorized admin users
  -- For now, we'll return aggregated data to protect individual addresses
  RETURN QUERY
  SELECT 
    gen_random_uuid() as id,
    'REDACTED' as address,
    oc.chain,
    date_trunc('day', oc.created_at) as created_at,
    COUNT(*) as connection_count
  FROM public.okx_connections oc
  GROUP BY oc.chain, date_trunc('day', oc.created_at)
  ORDER BY created_at DESC;
END;
$function$;

-- Grant execute permission on the admin function to authenticated users only
GRANT EXECUTE ON FUNCTION public.get_okx_connections_for_admin() TO authenticated;