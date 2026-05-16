import { useRef, useCallback, useState } from 'react';

interface PdfOptions {
  filename: string;
  margin?: number;
}

export const usePdfDownload = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const pdfLayoutRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPdf = useCallback(async ({ filename, margin = 10 }: PdfOptions) => {
    if (isGenerating) return;
    
    // Prefer the dedicated PDF layout if available
    const element = pdfLayoutRef.current || contentRef.current;
    if (!element) return;

    setIsGenerating(true);

    try {
      // Dynamically import html2pdf
      const html2pdf = (await import('html2pdf.js')).default;

      // If using pdf-layout, temporarily show it
      const isPdfLayout = element.classList.contains('pdf-layout');
      if (isPdfLayout) {
        element.classList.remove('hidden');
        element.style.display = 'block';
      }

      const opt = {
        margin: [margin, margin, margin, margin] as [number, number, number, number],
        filename: filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false,
          letterRendering: true,
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' as const,
          compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      await html2pdf().set(opt).from(element).save();
      
      // Hide pdf-layout again
      if (isPdfLayout) {
        element.classList.add('hidden');
        element.style.display = '';
      }
      
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return { contentRef, pdfLayoutRef, downloadPdf, isGenerating };
};
