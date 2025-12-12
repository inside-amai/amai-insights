-- Create pilot_requests table for storing pilot access submissions
CREATE TABLE public.pilot_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  use_case TEXT NOT NULL,
  why_amai TEXT NOT NULL,
  linkedin_website TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.pilot_requests ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (no auth required per project requirements)
CREATE POLICY "Anyone can submit pilot requests"
ON public.pilot_requests
FOR INSERT
WITH CHECK (true);

-- Only allow reading via backend/service role (not exposed to frontend)
-- No SELECT policy for anon users - you'll query via Supabase dashboard or service role