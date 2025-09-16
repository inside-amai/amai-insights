-- Create okx_connections table for storing wallet addresses
CREATE TABLE public.okx_connections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  address TEXT NOT NULL,
  chain TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.okx_connections ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert connections (for demo purposes)
CREATE POLICY "Anyone can create okx connections" 
ON public.okx_connections 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow anyone to view connections
CREATE POLICY "Anyone can view okx connections" 
ON public.okx_connections 
FOR SELECT 
USING (true);