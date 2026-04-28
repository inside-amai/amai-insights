import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { PilotAccessForm } from './PilotAccessForm';
import amaiLogo from '@/assets/amai-logo-tm.png';

interface FooterProps {
  transparent?: boolean;
  compact?: boolean;
}

const footerLinks = {
  protocol: [
    { key: 'footer.nav.systemOverview', to: '/system-overview' },
    { key: 'footer.nav.agentArchitecture', to: '/agent-architecture' },
    { key: 'footer.nav.trustMechanics', to: '/trust-mechanics' },
    { key: 'footer.nav.systemDemo', to: 'https://www.youtube.com/watch?v=qLEnRNELErg&feature=youtu.be', external: true },
  ],
  economics: [
    { key: 'footer.nav.economicSubstrate', to: '/economic-substrate' },
    { key: 'footer.nav.treasuryDynamics', to: '/treasury-dynamics' },
    
    
  ],
  research: [
    { key: 'footer.nav.thesis', to: '/thesis' },
    { key: 'footer.nav.conflictOfThought', to: '/research' },
    { key: 'footer.nav.kernelizedIntelligence', to: '/kernelized-intelligence' },
    { key: 'footer.nav.operationalScenarios', to: '/operational-scenarios' },
  ],
};

export const Footer = ({ transparent = false, compact = false }: FooterProps) => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [isPilotFormOpen, setIsPilotFormOpen] = useState(false);

  return (
    <>
      <footer
        className={`border-t border-white/10 ${transparent ? 'bg-transparent' : 'bg-black'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Main footer grid removed globally */}

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-3">
            <img
              src={amaiLogo}
              alt="AMAI Labs"
              className="h-5 w-auto opacity-40"
            />
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
              {t('footer.company')}
            </p>
            <p className="text-xs text-white/25 font-light tracking-wide">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>

      <PilotAccessForm
        isOpen={isPilotFormOpen}
        onClose={() => setIsPilotFormOpen(false)}
      />
    </>
  );
};
