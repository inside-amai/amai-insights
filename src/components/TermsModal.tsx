import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
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
        className="absolute inset-0 bg-black/20 backdrop-blur-md"
      />
      
      {/* Modal window */}
      <div className="relative w-[81vw] max-w-[432px] h-[64vh] bg-[#101010] rounded-3xl shadow-2xl mb-4 border-2 border-transparent bg-gradient-to-r from-[#D6A6FC] to-[#A6FCFC] p-[2px]">
        <div className="w-full h-full bg-[#101010] rounded-3xl overflow-hidden">
          {/* Heading strip */}
          <div className="bg-white/5 h-11 flex items-center justify-center px-6 rounded-t-3xl">
            <h2 className="text-lg font-semibold text-white">Terms & Conditions</h2>
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
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed px-3 pt-4">
              <section>
                <p className="mb-4">
                  Welcome to AMAI Labs.
                </p>
                <p>
                  These terms govern access to the AMAI Labs research portal, documentation, and related materials describing AMAI's decentralized infrastructure. By continuing, you acknowledge that you have read and understood these terms.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Purpose of AMAI Labs</h3>
                <p className="mb-3">
                  AMAI Labs provides technical documentation, research materials, architecture diagrams, conceptual descriptions, and forward-looking development plans for the AMAI protocol and its autonomous agent ecosystem.
                </p>
                <p className="mb-2">All materials are offered solely for:</p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>educational,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>informational,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>research, and</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>experimental purposes.</span>
                  </li>
                </ul>
                <p className="mt-3">
                  They do not constitute a commercial offering, investment solicitation, or advisory service.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">No Investment, Legal, or Financial Advice</h3>
                <p className="mb-2">Nothing on this site, within AMAI documentation, or in any communication from AMAI Labs should be interpreted as:</p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>investment advice,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>financial guidance,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>legal or tax counsel,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>an offer to sell or solicit the purchase of any digital asset or security.</span>
                  </li>
                </ul>
                <p className="mt-3">
                  Digital assets involve substantial risks, including volatility, technical failure, regulatory uncertainty, cybersecurity threats, and potential loss of value. You are solely responsible for any actions you take.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Utility-Only Token</h3>
                <p className="mb-2">AMAI is designed exclusively as a utility token enabling:</p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>on-chain execution of autonomous agents,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>access to platform services,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>bonded collateral for trust scores, and</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>participation in protocol-level operations.</span>
                  </li>
                </ul>
                <p className="mt-3 mb-2">Holding AMAI does not:</p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>grant equity, dividends, revenue share, or ownership,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>confer governance or voting rights in AMAI Labs or any affiliated entity,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>create any expectation of profit derived from the efforts of AMAI Labs or third parties.</span>
                  </li>
                </ul>
                <p className="mt-3">AMAI is not intended for speculative use.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Founders Keys (Access Tokens)</h3>
                <p className="mb-2">Founders Keys are limited-edition access tokens granting users special privileges within the AMAI ecosystem, such as:</p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>advanced agent minting capabilities,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>unique identifiers or cosmetic features,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>participation in exclusive governance-free community programs (e.g., Council of 12).</span>
                  </li>
                </ul>
                <p className="mt-3 mb-2">Founders Keys do not represent:</p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>ownership,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>equity,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>dividends,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>profit rights, or</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>claims over AMAI Labs or the AMAI protocol.</span>
                  </li>
                </ul>
                <p className="mt-3">Their function is purely symbolic and operational within the ecosystem.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Forward-Looking Statements</h3>
                <p className="mb-2">Any descriptions of roadmap milestones, planned features, technical capabilities, or future functionality are aspirational and not guaranteed.</p>
                <p className="mb-2">Development timelines may change due to:</p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>research requirements,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>emerging regulation,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>market conditions,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>infrastructure dependencies, or</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>technical constraints.</span>
                  </li>
                </ul>
                <p className="mt-3">You acknowledge these uncertainties.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">No Warranty</h3>
                <p>
                  AMAI Labs provides all materials "as is" without warranties of any kind, including but not limited to accuracy, completeness, or fitness for a particular purpose.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Your Responsibility</h3>
                <p className="mb-2">By proceeding, you confirm that:</p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>you understand the risks of interacting with digital assets and decentralized systems,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>you operate in compliance with your local laws,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>and you assume full responsibility for any decisions or actions you take related to the AMAI ecosystem.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Acceptance</h3>
                <p className="mb-8">
                  By selecting Accept or continuing to access this site, you agree to these Terms & Conditions.
                </p>
              </section>
            </div>
          </div>

          {/* Scroll down button - only show if not scrolled to bottom */}
          {!hasScrolledToBottom && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <button
                onClick={handleScrollToBottom}
                className="bg-[#D6A6FC]/40 hover:bg-[#D6A6FC]/50 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm border border-[#D6A6FC]/50 transition-colors duration-200 flex items-center gap-1.5 float-gentle"
              >
                Scroll down <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          )}
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