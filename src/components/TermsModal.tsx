import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const TermsModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has already accepted terms (must be exactly 'true')
    const termsAccepted = localStorage.getItem('amai-terms-accepted');
    if (termsAccepted !== 'true') {
      setIsVisible(true);
      // Disable page scroll
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAccept = () => {
    if (!hasScrolledToBottom) return;
    localStorage.setItem('amai-terms-accepted', 'true');
    setIsVisible(false);
    document.body.style.overflow = 'unset';
  };

  const handleDecline = () => {
    localStorage.setItem('amai-terms-accepted', 'false');
    setIsVisible(false);
    document.body.style.overflow = 'unset';
    // Redirect to amai.net
    window.location.href = 'https://www.amai.net/';
  };


  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5; // 5px threshold
      setHasScrolledToBottom(isAtBottom);
    }
  };

  const handleScrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
      {/* Blurred backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />
      
      {/* Modal window - styled like Identity Layer card */}
      <div className="relative w-[85vw] max-w-[480px] h-[68vh] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-lg backdrop-blur-sm mb-4 overflow-hidden transition-all duration-500 hover:border-white/20">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
            <h2 className="text-lg font-medium text-white tracking-tight">
              AMAI Labs — Terms & Conditions
            </h2>
          </div>
          <p className="text-xs text-white/40 uppercase tracking-wider">
            Legal Agreement for Access to Research, Documentation, and Technical Materials
          </p>
        </div>

        {/* Scrollable content */}
        <div 
          ref={contentRef}
          onScroll={handleScroll}
          className="h-[calc(100%-5.5rem)] overflow-y-auto px-6 py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.1) transparent'
          }}
        >
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">1. Introduction</h3>
              <p className="text-white/60 mb-3">
                Welcome to AMAI Labs.
              </p>
              <p className="text-white/50 mb-3">
                By accessing this portal, its documentation, research materials, conceptual descriptions, diagrams, prototypes, or any related content (collectively, the "Materials"), you acknowledge and agree to the following Terms & Conditions ("Terms").
              </p>
              <p className="text-white/50 mb-3">
                AMAI Labs is a research division responsible for describing, evaluating, and exploring a decentralized computational infrastructure for autonomous agents (the "AMAI Protocol"). Accessing this portal indicates your understanding that AMAI Labs does not provide a commercial product, and that all Materials are offered solely for informational, educational, and experimental purposes.
              </p>
              <p className="text-white/50">
                If you do not agree with these Terms, you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">2. Non-Commercial, Non-Advisory Nature of Materials</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">All Materials provided through AMAI Labs</p>
              <div className="space-y-2">
                {["do not constitute a commercial offering", "do not establish any advisory, fiduciary, brokerage, or client relationship", "do not represent investment guidance", "do not constitute legal, financial, or regulatory advice", "do not form part of any solicitation, inducement, or marketing activity"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                Nothing herein should be construed as a representation that any system, protocol, feature, or capability described will be implemented, deployed, or function as anticipated.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">3. Purpose of AMAI Labs</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">AMAI Labs provides</p>
              <div className="space-y-2">
                {["protocol research and conceptual frameworks", "architectural diagrams and technical primitives", "economic models and trust-scoring mechanics", "forward-looking development plans", "experimental specifications, prototypes, and tests"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3 mb-3">
                These Materials describe potential infrastructure for autonomous computational agents. They may contain early-stage ideas, experimental components, or draft specifications.
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Access is provided solely for</p>
              <div className="space-y-2">
                {["Educational analysis", "Technical evaluation", "Research review", "Non-commercial experimentation"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                Any other use is strictly prohibited.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">4. Forward-Looking Statements</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Materials may include forward-looking statements such as</p>
              <div className="space-y-2">
                {["anticipated architecture", "proposed features", "conceptual economic models", "trust-scoring methodologies", "potential integrations", "long-term ecosystem trajectories"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3 mb-3">
                These statements are inherently uncertain and subject to change.
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">AMAI Labs</p>
              <div className="space-y-2">
                {["does not guarantee accuracy, completeness, or future occurrence of any concept described", "makes no commitment to deliver any feature, capability, or version", "reserves the right to modify or discontinue any component of the research at any time"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                Nothing in the Materials should be relied upon as a promise of performance, value creation, system release, or commercial outcome.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">5. No Warranties or Guarantees</h3>
              <p className="text-white/50 mb-3">
                All Materials are provided "as is" without warranties of any kind, whether express or implied.
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">This includes, but is not limited to</p>
              <div className="space-y-2">
                {["fitness for a particular purpose", "performance guarantees", "reliability, correctness, or completeness", "security guarantees", "suitability for commercial deployment", "legal or regulatory compliance"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                The AMAI Protocol, if deployed, may contain defects, design limitations, or risks inherent to decentralized, distributed, or autonomous computational systems. You assume all responsibility for your interpretation and use of the Materials.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">6. Intellectual Property</h3>
              <p className="text-white/50 mb-3">
                All content accessible through AMAI Labs—including diagrams, text, models, research papers, graphics, conceptual architectures, and system descriptions—is the intellectual property of AMAI Labs unless otherwise noted.
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">You may not</p>
              <div className="space-y-2">
                {["reproduce", "modify", "distribute", "publish", "adapt", "commercialize"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                any Materials without explicit written permission.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">7. Prohibited Uses</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">You agree not to use AMAI Labs</p>
              <div className="space-y-2">
                {["to evaluate the Materials for competitive commercial development", "to create derivative systems marketed as AMAI Labs or the AMAI Protocol", "to misrepresent the status, readiness, or capabilities of AMAI's research", "to imply endorsement, partnership, or affiliation", "to perform unlawful, fraudulent, or harmful activities", "to provide investment, financial, or advisory statements using the Materials", "to make public claims about AMAI's roadmap or future performance"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-4 h-px bg-white/20 mt-1.5 shrink-0" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                AMAI Labs reserves all rights to restrict or terminate access for violations.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">8. No Investment, Security, or Token Claims</h3>
              <p className="text-white/50 mb-3">
                Any descriptions of token mechanics, collateral models, trust-weighting, or economic substrates are purely conceptual and intended for research evaluation.
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">They</p>
              <div className="space-y-2">
                {["are not investment vehicles", "do not represent ownership, revenue rights, governance rights, or equity", "are not security instruments", "may not correspond to any future token or asset", "may not ever be implemented"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                No part of AMAI Labs constitutes an offering under securities laws of any jurisdiction.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">9. Risk of Digital and Autonomous Systems</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Research into autonomous agents and decentralized infrastructure involves risks including</p>
              <div className="space-y-2">
                {["computational failures", "unpredictable agent behavior", "economic model instability", "adversarial interactions", "vulnerabilities in cryptographic or distributed systems", "network disruptions", "regulatory constraints"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                You understand and accept that the Materials may reference systems that are theoretical, incomplete, or subject to significant future revision.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">10. Jurisdictional and Regulatory Neutrality</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">AMAI Labs does not guarantee that its research or conceptual materials comply with the legal or regulatory requirements of any jurisdiction, including but not limited to</p>
              <div className="space-y-2">
                {["securities laws", "financial regulations", "data-protection frameworks", "AI safety regulations", "cross-border digital-asset requirements", "sovereign technology controls"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                Users are solely responsible for understanding and complying with applicable laws in their jurisdictions. AMAI Labs disclaims all responsibility for regulatory interpretation or outcomes.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">11. Limitation of Liability</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">To the fullest extent permitted by law, the following shall not be liable</p>
              <div className="space-y-2">
                {["AMAI Labs", "its contributors", "affiliates", "researchers", "engineers", "and associated entities"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-3 mb-2">for any damages arising from</p>
              <div className="space-y-2">
                {["access to or use of the Materials", "reliance on the Materials", "errors or omissions", "system failures", "loss of data or business opportunities", "misinterpretation or misuse of research content", "or any other interaction with AMAI Labs"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-4 h-px bg-white/20 mt-1.5 shrink-0" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                Your sole remedy for dissatisfaction with the Materials is to discontinue use.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">12. No Guarantee of Availability</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">AMAI Labs may temporarily or permanently</p>
              <div className="space-y-2">
                {["restrict access", "modify the portal", "alter content", "limit features", "remove sections", "suspend the site"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                without notice and without liability.
              </p>
            </section>

            <section className="pb-4">
              <h3 className="text-sm font-medium text-white/80 mb-3">13. Acceptance of Terms</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">By clicking "I Accept", or by accessing AMAI Labs in any capacity, you affirm that</p>
              <div className="space-y-2">
                {["you have read and understood these Terms", "you agree to use the Materials solely for non-commercial research purposes", "you acknowledge the experimental nature of all Materials", "you understand the lack of warranties, commitments, and guarantees", "and you accept all limitations of liability"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-4 h-px bg-white/20 mt-1.5 shrink-0" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                If you do not accept, you must leave immediately.
              </p>
            </section>
          </div>
        </div>

        {/* Scroll down button */}
        {!hasScrolledToBottom && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <button
              onClick={handleScrollToBottom}
              className="bg-black/80 hover:bg-black/90 text-white text-xs px-4 py-2 rounded-full border border-white/20 transition-colors duration-200 flex items-center gap-1.5"
            >
              Scroll down <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom buttons */}
      <div className="relative z-10 flex gap-4 justify-center">
        <button
          onClick={handleDecline}
          className="px-6 py-2.5 text-sm text-white/60 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          disabled={!hasScrolledToBottom}
          className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
            hasScrolledToBottom 
              ? 'bg-white/90 text-black hover:bg-white cursor-pointer' 
              : 'bg-white/20 text-white/40 cursor-not-allowed'
          }`}
        >
          I Accept
        </button>
      </div>
    </div>
  );
};