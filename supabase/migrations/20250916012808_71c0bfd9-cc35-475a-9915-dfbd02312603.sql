-- Fix search path for functions that need it

-- Fix request_verification function
CREATE OR REPLACE FUNCTION public.request_verification(verification_data jsonb)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
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

-- Fix get_or_create_profile function
CREATE OR REPLACE FUNCTION public.get_or_create_profile(wallet_address text, user_email text DEFAULT NULL::text)
RETURNS profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
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

-- Fix cascade_pause function
CREATE OR REPLACE FUNCTION public.cascade_pause(swarm_id text, pause boolean)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
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

-- Fix user_liked_post function
CREATE OR REPLACE FUNCTION public.user_liked_post(post_uuid uuid)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
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