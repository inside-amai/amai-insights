import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { PilotAccessForm } from './PilotAccessForm';
import amaiLogo from '@/assets/amai-logo-tm.png';

interface FooterProps {
  transparent?: boolean;
}

const footerLinks = {
  protocol: [
    { key: 'footer.nav.systemOverview', to: '/system-overview' },
    { key: 'footer.nav.agentArchitecture', to: '/agent-architecture' },
    { key: 'footer.nav.trustMechanics', to: '/trust-mechanics' },
    { key: 'footer.nav.protocolInternals', to: '/protocol-internals' },
  ],
  economics: [
    { key: 'footer.nav.economicSubstrate', to: '/economic-substrate' },
    { key: 'footer.nav.treasuryDynamics', to: '/treasury-dynamics' },
    { key: 'footer.nav.trustUnit', to: '/token-model' },
    { key: 'footer.nav.collateralModels', to: '/agent-economy' },
  ],
  research: [
    { key: 'footer.nav.thesis', to: '/thesis' },
    { key: 'footer.nav.conflictOfThought', to: '/research' },
    { key: 'footer.nav.kernelizedIntelligence', to: '/kernelized-intelligence' },
    { key: 'footer.nav.operationalScenarios', to: '/operational-scenarios' },
  ],
};

export const Footer = ({ transparent = false }: FooterProps) => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [isPilotFormOpen, setIsPilotFormOpen] = useState(false);

  return (
    <>
      <footer
        className={`border-t border-white/10 ${transparent ? 'bg-transparent' : 'bg-black'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {/* Column 1: Protocol */}
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
                {t('footer.col.protocol')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.protocol.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Economics */}
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
                {t('footer.col.economics')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.economics.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Research */}
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
                {t('footer.col.research')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.research.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Network */}
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
                {t('footer.col.network')}
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setIsPilotFormOpen(true)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light cursor-pointer text-left"
                  >
                    {t('footer.nav.pilotAccess')}
                  </button>
                </li>
                <li>
                  <span className="text-sm text-white/25 font-light cursor-default">
                    {t('footer.nav.legalPrivacy')}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
            <p className="text-[10px] text-white/25 font-light tracking-wide">
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
