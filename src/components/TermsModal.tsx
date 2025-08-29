import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export const TermsModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has already accepted/declined terms
    const termsAccepted = localStorage.getItem('amai-terms-accepted');
    if (!termsAccepted) {
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

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = 'unset';
  };

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5; // 5px threshold
      setHasScrolledToBottom(isAtBottom);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
      {/* Blurred backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Modal window */}
      <div className="relative w-[81vw] max-w-[432px] h-[64vh] bg-[#101010] rounded-3xl shadow-2xl mb-4 border-2 border-transparent bg-gradient-to-r from-[#D6A6FC] to-[#A6FCFC] p-[2px]">
        <div className="w-full h-full bg-[#101010] rounded-3xl overflow-hidden">
          {/* Heading strip */}
          <div className="bg-white/5 h-11 flex items-center justify-between px-6 rounded-t-3xl">
            <h2 className="text-lg font-semibold text-white">Terms & Conditions</h2>
            <button
              onClick={handleClose}
              className="p-1 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable content */}
          <div 
            ref={contentRef}
            onScroll={handleScroll}
            className="h-[calc(100%-2.75rem-1.5rem)] overflow-y-auto m-6 mt-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.1) transparent'
            }}
          >
            <p className="text-gray-300 text-sm leading-relaxed mb-6 px-4">
              Welcome to AMAI. Please read the following terms carefully before using this site or interacting with the AMAI token.
            </p>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed px-4">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Purpose of this site</h3>
                <p>
                  The materials provided here describe a decentralized software platform and its planned features. They are offered for educational and informational purposes only.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">No investment advice</h3>
                <p>
                  Nothing on this website, in the white paper, or in any related communication should be interpreted as financial, legal or tax advice. Purchasing digital assets carries substantial risk, and you should consult qualified advisors before making any decisions.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Utility-only token</h3>
                <p className="mb-3">
                  AMAI is designed solely as a utility token that allows users and automated agents to pay for on-chain actions, access platform services and, where applicable, stake collateral to participate. Holding AMAI does not:
                </p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>entitle you to dividends, revenue share or voting rights in any corporate entity,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>create an expectation of profits from the efforts of the AMAI team or third parties, or</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>represent ownership of any underlying software or intellectual property.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Risks and forward-looking statements</h3>
                <p className="mb-3">
                  The roadmap and milestones are goals, not guarantees. Development timelines can slip, regulations can change and technical hurdles may arise. Digital assets are volatile and subject to loss, theft, hacking, regulatory restrictions or total loss of value.
                </p>
                <p className="mb-8">
                  By proceeding, you acknowledge these risks and agree that you are solely responsible for any actions you take.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom buttons - outside the modal */}
      <div className="relative z-10 flex gap-4 justify-center">
        <Button
          onClick={handleDecline}
          variant="outline"
          className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
        >
          Decline
        </Button>
        <Button
          onClick={handleAccept}
          disabled={!hasScrolledToBottom}
          className={`font-semibold transition-all duration-300 ${
            hasScrolledToBottom 
              ? 'bg-[#A6FCFC] hover:bg-[#A6FCFC]/80 text-black cursor-pointer' 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          I Accept
        </Button>
      </div>
    </div>
  );
};