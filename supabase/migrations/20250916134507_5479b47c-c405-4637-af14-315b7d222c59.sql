-- Fix database function security by adding search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.cascade_pause(swarm_id text, pause boolean)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
    node_ids TEXT[];
    node_id TEXT;
    new_status TEXT;
    active_swarm_count INTEGER;
BEGIN
    -- Determine the new status for the swarm
    new_status := CASE WHEN pause THEN 'paused' ELSE 'active' END;
    
    -- Get the swarm and extract nodeIds from meta using proper JSON extraction
    SELECT COALESCE(
        ARRAY(SELECT jsonb_array_elements_text(meta->'nodeIds')), 
        '{}'::TEXT[]
    )
    INTO node_ids
    FROM public.agents
    WHERE id = swarm_id AND (meta->>'kind') = 'swarm';
    
    -- Update the swarm itself
    UPDATE public.agents
    SET status = new_status,
        updated_at = now()
    WHERE id = swarm_id;
    
    -- For each member agent, check if it should be paused/resumed
    IF array_length(node_ids, 1) > 0 THEN
        FOREACH node_id IN ARRAY node_ids LOOP
            IF pause THEN
                -- Pausing: always pause the member agent
                UPDATE public.agents
                SET status = 'paused',
                    updated_at = now()
                WHERE id = node_id;
            ELSE
                -- Resuming: only resume if no other swarms containing this agent are paused
                SELECT COUNT(*)
                INTO active_swarm_count
                FROM public.agents
                WHERE type = 'swarm' 
                  AND status = 'paused'
                  AND meta->'nodeIds' ? node_id
                  AND id != swarm_id; -- Exclude the current swarm being resumed
                
                -- Only resume if no other paused swarms contain this agent
                IF active_swarm_count = 0 THEN
                    UPDATE public.agents
                    SET status = 'active',
                        updated_at = now()
                    WHERE id = node_id;
                END IF;
            END IF;
        END LOOP;
    END IF;
END;
$function$;

CREATE OR REPLACE FUNCTION public.request_verification(verification_data jsonb)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  user_wallet TEXT;
BEGIN
  -- Get current user's wallet address
  user_wallet := get_current_user_wallet_address();
  
  IF user_wallet IS NULL THEN
    RAISE EXCEPTION 'User not authenticated or no wallet address found';
  END IF;
  
  -- Update or insert profile with verification request
  INSERT INTO public.profiles (sui_address, verification_request, pending_verification)
  VALUES (user_wallet, verification_data, true)
  ON CONFLICT (sui_address)
  DO UPDATE SET
    verification_request = verification_data,
    pending_verification = true,
    updated_at = now();
END;
$function$;

CREATE OR REPLACE FUNCTION public.get_or_create_profile(wallet_address text, user_email text DEFAULT NULL::text)
 RETURNS profiles
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  profile_record profiles;
BEGIN
  -- Try to get existing profile
  SELECT * INTO profile_record 
  FROM public.profiles 
  WHERE sui_address = wallet_address;
  
  -- If not found, create new profile
  IF NOT FOUND THEN
    INSERT INTO public.profiles (sui_address, email)
    VALUES (wallet_address, user_email)
    RETURNING * INTO profile_record;
  END IF;
  
  RETURN profile_record;
END;
$function$;

CREATE OR REPLACE FUNCTION public.get_post_like_count(post_uuid uuid)
 RETURNS integer
 LANGUAGE plpgsql
 STABLE
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN (
    SELECT COUNT(*)::INTEGER
    FROM public.post_likes
    WHERE post_id = post_uuid
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.user_liked_post(post_uuid uuid)
 RETURNS boolean
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  user_wallet TEXT;
BEGIN
  user_wallet := get_current_user_wallet_address();
  
  IF user_wallet IS NULL THEN
    RETURN FALSE;
  END IF;
  
  RETURN EXISTS (
    SELECT 1
    FROM public.post_likes
    WHERE post_id = post_uuid AND sui_address = user_wallet
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.get_okx_connections_for_admin()
 RETURNS TABLE(id uuid, address text, chain text, created_at timestamp with time zone, connection_count bigint)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
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

CREATE OR REPLACE FUNCTION public.get_follower_count(user_sui_address text)
 RETURNS integer
 LANGUAGE plpgsql
 STABLE
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN (
    SELECT COUNT(*)::INTEGER
    FROM public.follows
    WHERE following_sui_address = user_sui_address
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.get_following_count(user_sui_address text)
 RETURNS integer
 LANGUAGE plpgsql
 STABLE
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN (
    SELECT COUNT(*)::INTEGER
    FROM public.follows
    WHERE follower_sui_address = user_sui_address
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.is_following(follower_address text, following_address text)
 RETURNS boolean
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.follows
    WHERE follower_sui_address = follower_address 
    AND following_sui_address = following_address
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_conversation_timestamp()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path TO 'public'
AS $function$
BEGIN
  UPDATE public.conversations
  SET last_message_at = NEW.created_at,
      updated_at = NEW.created_at
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.get_or_create_conversation(other_user_address text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  current_user_address text;
  conversation_id uuid;
  participant1 text;
  participant2 text;
BEGIN
  current_user_address := get_current_user_wallet_address();
  
  IF current_user_address IS NULL THEN
    RAISE EXCEPTION 'User not authenticated';
  END IF;
  
  -- Ensure consistent ordering of participants for uniqueness
  IF current_user_address < other_user_address THEN
    participant1 := current_user_address;
    participant2 := other_user_address;
  ELSE
    participant1 := other_user_address;
    participant2 := current_user_address;
  END IF;
  
  -- Try to find existing conversation
  SELECT id INTO conversation_id
  FROM public.conversations
  WHERE (participant_1 = participant1 AND participant_2 = participant2);
  
  -- If not found, create new conversation
  IF conversation_id IS NULL THEN
    INSERT INTO public.conversations (participant_1, participant_2)
    VALUES (participant1, participant2)
    RETURNING id INTO conversation_id;
  END IF;
  
  RETURN conversation_id;
END;
$function$;

CREATE OR REPLACE FUNCTION public.get_current_user_wallet_address()
 RETURNS text
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  user_wallet TEXT;
BEGIN
  -- Get wallet address from auth.users metadata
  SELECT raw_user_meta_data->>'wallet_address' 
  INTO user_wallet
  FROM auth.users 
  WHERE id = auth.uid();
  
  RETURN user_wallet;
END;
$function$;

CREATE OR REPLACE FUNCTION public.get_safe_profile_data(profile_sui_address text)
 RETURNS TABLE(id uuid, sui_address text, display_name text, handle text, bio text, avatar_url text, is_verified boolean, created_at timestamp with time zone)
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.sui_address,
    p.display_name,
    p.handle,
    p.bio,
    p.avatar_url,
    p.is_verified,
    p.created_at
  FROM public.profiles p
  WHERE p.sui_address = profile_sui_address;
END;
$function$;

-- Fix profiles RLS policies for social features
DROP POLICY IF EXISTS "Users can only access their own profiles" ON public.profiles;
DROP POLICY IF EXISTS "Self-profile" ON public.profiles;

-- Create new secure policies for profiles
CREATE POLICY "Users can view public profile data" 
ON public.profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Users can manage their own profiles" 
ON public.profiles 
FOR ALL 
USING (sui_address = get_current_user_wallet_address())
WITH CHECK (sui_address = get_current_user_wallet_address());

-- Secure the sensitive profile data with a view
CREATE OR REPLACE VIEW public.public_profiles AS
SELECT 
  id,
  sui_address,
  display_name,
  handle,
  bio,
  avatar_url,
  is_verified,
  created_at
FROM public.profiles;

-- Add unique constraint on okx_connections for address,chain combination
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'okx_connections_address_chain_unique'
  ) THEN
    ALTER TABLE public.okx_connections 
    ADD CONSTRAINT okx_connections_address_chain_unique 
    UNIQUE (address, chain);
  END IF;
END $$;