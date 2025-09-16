-- Clean up duplicate entries in okx_connections using created_at timestamp
WITH duplicates AS (
  SELECT 
    id,
    ROW_NUMBER() OVER (
      PARTITION BY address, chain 
      ORDER BY created_at DESC
    ) as rn
  FROM public.okx_connections
)
DELETE FROM public.okx_connections 
WHERE id IN (
  SELECT id FROM duplicates WHERE rn > 1
);

-- Now add the unique constraint
ALTER TABLE public.okx_connections 
ADD CONSTRAINT okx_connections_address_chain_unique 
UNIQUE (address, chain);