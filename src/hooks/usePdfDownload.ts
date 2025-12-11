import { useRef, useCallback, useState } from 'react';

interface PdfOptions {
  filename: string;
  margin?: number;
}

export const usePdfDownload = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPdf = useCallback(async ({ filename, margin = 5 }: PdfOptions) => {
    if (!contentRef.current || isGenerating) return;

    setIsGenerating(true);

    try {
      // Dynamically import html2pdf
      const html2pdf = (await import('html2pdf.js')).default;

      const element = contentRef.current;
      
      // Temporarily add inline background color to ensure it captures
      const originalBg = element.style.backgroundColor;
      element.style.backgroundColor = '#000000';
      
      // Add class for print optimization
      element.classList.add('pdf-capture');

      const opt = {
        margin: [margin, margin, margin, margin],
        filename: filename,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { 
          scale: 1.5,
          useCORS: true,
          backgroundColor: '#000000',
          logging: false,
          letterRendering: true,
          scrollY: -window.scrollY,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
          onclone: (clonedDoc: Document) => {
            // Apply black background to cloned element
            const clonedElement = clonedDoc.body.querySelector('[class*="relative z-10"]');
            if (clonedElement) {
              (clonedElement as HTMLElement).style.backgroundColor = '#000000';
            }
            // Force all elements with bg-black to have inline style
            clonedDoc.querySelectorAll('.bg-black, [class*="bg-black"]').forEach((el) => {
              (el as HTMLElement).style.backgroundColor = '#000000';
            });
          }
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
      
      // Restore original styles
      element.style.backgroundColor = originalBg;
      element.classList.remove('pdf-capture');
      
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return { contentRef, downloadPdf, isGenerating };
};
