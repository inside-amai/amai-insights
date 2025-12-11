-- Fix swarm_members security vulnerability
-- Drop the overly permissive INSERT and DELETE policies
DROP POLICY IF EXISTS "Anyone can create swarm members" ON swarm_members;
DROP POLICY IF EXISTS "Anyone can delete swarm members" ON swarm_members;

-- Create owner-restricted INSERT policy
CREATE POLICY "Owners can create swarm members"
  ON swarm_members FOR INSERT
  WITH CHECK (swarm_id IN (
    SELECT agent_id FROM agents WHERE owner = get_current_user_wallet_address()
  ));

-- Create owner-restricted DELETE policy  
CREATE POLICY "Owners can delete swarm members"
  ON swarm_members FOR DELETE
  USING (swarm_id IN (
    SELECT agent_id FROM agents WHERE owner = get_current_user_wallet_address()
  ));