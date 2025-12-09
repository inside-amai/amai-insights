-- Fix function search_path for security

-- Fix get_post_like_count
CREATE OR REPLACE FUNCTION public.get_post_like_count(post_uuid uuid)
RETURNS integer
LANGUAGE plpgsql
STABLE
SET search_path = public
AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)::INTEGER
    FROM public.post_likes
    WHERE post_id = post_uuid
  );
END;
$$;

-- Fix get_follower_count
CREATE OR REPLACE FUNCTION public.get_follower_count(user_sui_address text)
RETURNS integer
LANGUAGE plpgsql
STABLE
SET search_path = public
AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)::INTEGER
    FROM public.follows
    WHERE following_sui_address = user_sui_address
  );
END;
$$;

-- Fix get_following_count
CREATE OR REPLACE FUNCTION public.get_following_count(user_sui_address text)
RETURNS integer
LANGUAGE plpgsql
STABLE
SET search_path = public
AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)::INTEGER
    FROM public.follows
    WHERE follower_sui_address = user_sui_address
  );
END;
$$;

-- Fix update_conversation_timestamp
CREATE OR REPLACE FUNCTION public.update_conversation_timestamp()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  UPDATE public.conversations
  SET last_message_at = NEW.created_at,
      updated_at = NEW.created_at
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$$;

-- Drop OKX-related table and function since feature was removed
DROP FUNCTION IF EXISTS public.get_okx_connections_for_admin();
DROP TABLE IF EXISTS public.okx_connections;