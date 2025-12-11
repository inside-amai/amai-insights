import { useRef, useCallback } from 'react';

interface PdfOptions {
  filename: string;
  margin?: number;
}

export const usePdfDownload = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const downloadPdf = useCallback(async ({ filename, margin = 10 }: PdfOptions) => {
    if (!contentRef.current) return;

    // Dynamically import html2pdf to avoid SSR issues
    const html2pdf = (await import('html2pdf.js')).default;

    const element = contentRef.current;
    
    const opt = {
      margin: margin,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        backgroundColor: '#000000',
        logging: false,
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' as const
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  }, []);

  return { contentRef, downloadPdf };
};
