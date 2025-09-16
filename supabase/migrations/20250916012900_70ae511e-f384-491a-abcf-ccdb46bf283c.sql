-- Fix the remaining functions with missing search_path

-- Fix is_following function  
CREATE OR REPLACE FUNCTION public.is_following(follower_address text, following_address text)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
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

-- Fix get_or_create_conversation function
CREATE OR REPLACE FUNCTION public.get_or_create_conversation(other_user_address text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
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

-- Fix get_current_user_wallet_address function
CREATE OR REPLACE FUNCTION public.get_current_user_wallet_address()
RETURNS text
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
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

-- Fix get_safe_profile_data function
CREATE OR REPLACE FUNCTION public.get_safe_profile_data(profile_sui_address text)
RETURNS TABLE(id uuid, sui_address text, display_name text, handle text, bio text, avatar_url text, is_verified boolean, created_at timestamp with time zone)
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
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