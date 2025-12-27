import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLanguage } from '@/contexts/LanguageContext';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ConflictOfThoughtPaper = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState(800);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  // Responsive width calculation
  const getPageWidth = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) return screenWidth - 48; // mobile: full width minus padding
      if (screenWidth < 1024) return Math.min(700, screenWidth - 80); // tablet
      return 800; // desktop
    }
    return 800;
  };

  // Update width on mount and resize
  useEffect(() => {
    const updateWidth = () => setPageWidth(getPageWidth());
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="flex flex-col items-center" dir={isRTL ? 'rtl' : 'ltr'}>
      <Document
        file="/research/conflict-of-thought.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center py-20">
            <div className="text-white/40 font-mono text-sm">Loading paper...</div>
          </div>
        }
        error={
          <div className="flex items-center justify-center py-20">
            <div className="text-red-400/60 font-mono text-sm">Failed to load PDF</div>
          </div>
        }
      >
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
            <div
              key={`page_${index + 1}`}
              className="mb-12 md:mb-20 last:mb-0"
            >
              {/* Page container with shadow */}
              <div className="bg-white rounded-sm shadow-2xl shadow-black/50 overflow-hidden">
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
              
              {/* Page number indicator */}
              <div className="mt-4 text-center">
                <span className="text-white/20 font-mono text-[10px]">
                  {index + 1} / {numPages}
                </span>
              </div>
            </div>
          ))}
      </Document>
    </div>
  );
};

export default ConflictOfThoughtPaper;
