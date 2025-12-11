import React from 'react';

export interface PdfSection {
  title: string;
  content: string | string[];
  items?: { label: string; desc?: string }[];
}

export interface PdfDiagram {
  title: string;
  boxes: { label: string; sublabel?: string; items?: string[] }[];
}

export interface PdfLayoutProps {
  pageNumber: string;
  title: string;
  subtitle: string;
  abstract: string;
  sections: PdfSection[];
  diagram?: PdfDiagram;
}

export const PdfLayout: React.FC<PdfLayoutProps> = ({
  pageNumber,
  title,
  subtitle,
  abstract,
  sections,
  diagram
}) => {
  return (
    <div className="pdf-layout hidden print:block bg-white text-black p-12 max-w-4xl mx-auto font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
      {/* Header */}
      <div className="border-b-2 border-black pb-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-black mb-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              AMAI Labs
            </h1>
            <p className="text-xs text-gray-600 uppercase tracking-widest">
              AMAI Research
            </p>
          </div>
          <span className="text-sm text-gray-500 font-mono">{pageNumber}</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          {title}
        </h2>
        <p className="text-sm text-gray-600 italic mb-4">{subtitle}</p>
        <div className="bg-gray-100 p-4 border-l-4 border-black">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Abstract:</strong> {abstract}
          </p>
        </div>
      </div>

      {/* Diagram (if present) */}
      {diagram && (
        <div className="mb-8 p-6 border border-gray-300">
          <h3 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            {diagram.title}
          </h3>
          <div className="space-y-3">
            {diagram.boxes.map((box, index) => (
              <div key={index} className="border border-black p-4 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 border border-black flex items-center justify-center text-xs font-mono">
                    {index + 1}
                  </span>
                  <span className="font-bold text-sm">{box.label}</span>
                </div>
                {box.sublabel && (
                  <p className="text-xs text-gray-600 ml-9 mb-2">{box.sublabel}</p>
                )}
                {box.items && (
                  <div className="ml-9 flex flex-wrap gap-2">
                    {box.items.map((item, i) => (
                      <span key={i} className="text-xs text-gray-700 border border-gray-300 px-2 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {index < diagram.boxes.length - 1 && (
                  <div className="flex justify-center mt-3">
                    <span className="text-gray-400">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-bold text-black mb-3 border-b border-gray-200 pb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              {section.title}
            </h3>
            {typeof section.content === 'string' ? (
              <p className="text-sm text-gray-800 leading-relaxed">{section.content}</p>
            ) : (
              <div className="space-y-2">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-sm text-gray-800 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            )}
            {section.items && (
              <ul className="mt-3 space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-800 pl-4 border-l-2 border-gray-300">
                    <strong>{item.label}</strong>
                    {item.desc && <span className="text-gray-600"> — {item.desc}</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-300 text-center">
        <p className="text-xs text-gray-500">
          © 2025 AMAI Labs. All rights reserved. | AMAI Research Documentation
        </p>
      </div>
    </div>
  );
};

export default PdfLayout;
