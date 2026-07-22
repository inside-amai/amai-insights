import { toast } from '@/hooks/use-toast';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

// Self-contained copy button that manages its own state
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('team@amai.net').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-all"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export const showEmailFallbackToast = () => {
  setTimeout(() => {
    toast({
      // Force dark styling so it stays legible on light sections
      className:
        '!bg-neutral-900 !border-white/10 !text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)]',
      title: <span className="text-white">Email not opening?</span>,
      description: (
        <div className="flex items-center gap-3 mt-1">
          <span className="text-white/80">Reach us at team@amai.net</span>
          <CopyEmailButton />
        </div>
      ),
    });
  }, 500);
};
