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
              Terms & Conditions
            </h2>
          </div>
          <p className="text-xs text-white/40 uppercase tracking-wider">
            Legal Agreement
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
              <p className="text-white/60 mb-4">
                Welcome to AMAI Labs.
              </p>
              <p className="text-white/50">
                These terms govern access to the AMAI Labs research portal, documentation, and related materials describing AMAI's decentralized infrastructure. By continuing, you acknowledge that you have read and understood these terms.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">Purpose of AMAI Labs</h3>
              <p className="text-white/50 mb-3">
                AMAI Labs provides technical documentation, research materials, architecture diagrams, conceptual descriptions, and forward-looking development plans for the AMAI protocol and its autonomous agent ecosystem.
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">All materials are offered solely for</p>
              <div className="space-y-2">
                {['Educational', 'Informational', 'Research', 'Experimental purposes'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                They do not constitute a commercial offering, investment solicitation, or advisory service.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">No Investment, Legal, or Financial Advice</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Nothing should be interpreted as</p>
              <div className="space-y-2">
                {['Investment advice', 'Financial guidance', 'Legal or tax counsel', 'An offer to sell or solicit purchase of any digital asset'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                Digital assets involve substantial risks, including volatility, technical failure, regulatory uncertainty, cybersecurity threats, and potential loss of value.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">Utility-Only Token</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">AMAI enables</p>
              <div className="space-y-2">
                {['On-chain execution of autonomous agents', 'Access to platform services', 'Bonded collateral for trust scores', 'Protocol-level operations'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-4 h-px bg-white/20" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mt-3">
                Holding AMAI does not grant equity, dividends, revenue share, ownership, or governance rights. AMAI is not intended for speculative use.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">Founders Keys</h3>
              <p className="text-white/50 mb-3">
                Founders Keys are limited-edition access tokens granting special privileges within the AMAI ecosystem.
              </p>
              <p className="text-white/50">
                They do not represent ownership, equity, dividends, profit rights, or claims over AMAI Labs or the protocol. Their function is purely symbolic and operational.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">Forward-Looking Statements</h3>
              <p className="text-white/50">
                Any descriptions of roadmap milestones, planned features, or future functionality are aspirational and not guaranteed. Development timelines may change due to research requirements, regulation, market conditions, or technical constraints.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">No Warranty</h3>
              <p className="text-white/50">
                AMAI Labs provides all materials "as is" without warranties of any kind.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-medium text-white/80 mb-3">Your Responsibility</h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">By proceeding, you confirm</p>
              <div className="space-y-2">
                {[
                  'You understand the risks of digital assets and decentralized systems',
                  'You operate in compliance with your local laws',
                  'You assume full responsibility for your decisions'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-4 h-px bg-white/20 mt-1.5 shrink-0" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="pb-4">
              <h3 className="text-sm font-medium text-white/80 mb-3">Acceptance</h3>
              <p className="text-white/50">
                By selecting Accept or continuing to access this site, you agree to these Terms & Conditions.
              </p>
            </section>
          </div>
        </div>

        {/* Scroll down button */}
        {!hasScrolledToBottom && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <button
              onClick={handleScrollToBottom}
              className="bg-white/10 hover:bg-white/15 text-white/60 text-xs px-3 py-2 rounded-full border border-white/10 transition-colors duration-200 flex items-center gap-1.5"
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