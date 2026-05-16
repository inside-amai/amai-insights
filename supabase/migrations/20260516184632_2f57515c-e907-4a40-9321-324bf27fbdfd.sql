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

ALTER TABLE public.pilot_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit pilot requests"
ON public.pilot_requests
FOR INSERT
WITH CHECK (true);