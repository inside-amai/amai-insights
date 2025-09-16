-- Clean up duplicate entries in okx_connections before adding unique constraint
DELETE FROM public.okx_connections 
WHERE id NOT IN (
  SELECT MIN(id) 
  FROM public.okx_connections 
  GROUP BY address, chain
);

-- Now add the unique constraint
ALTER TABLE public.okx_connections 
ADD CONSTRAINT okx_connections_address_chain_unique 
UNIQUE (address, chain);