import { WhitepaperLayout } from '@/components/WhitepaperLayout';
import circuitBoard from '@/assets/circuit-board.jpg';

const ComplianceAssurance = () => {
  return (
    <WhitepaperLayout
      eyebrow="Compliance"
      title="Compliance & Assurance"
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={circuitBoard} 
            alt="Compliance & Assurance"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-white">
          <h2 className="text-2xl font-bold text-white mb-4">Regulatory posture, data-protection safeguards, and audit pathways for enterprise adoption</h2>
          
          <p className="text-gray-300 leading-relaxed">
            TODO: Comprehensive compliance framework ensuring regulatory adherence and enterprise-grade security.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Regulatory Compliance</h3>
          
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Regulatory posture:</strong> TODO: Proactive compliance with global financial regulations</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Jurisdiction analysis:</strong> TODO: Multi-jurisdictional compliance strategy</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Legal framework:</strong> TODO: Legal structure and regulatory partnerships</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Data Protection</h3>
          
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Privacy safeguards:</strong> TODO: GDPR and privacy regulation compliance</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Data encryption:</strong> TODO: End-to-end encryption and data security</span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#A6FCFC' }} className="mr-3 mt-1">•</span>
              <span><strong>Access controls:</strong> TODO: Role-based access and permission systems</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Enterprise Adoption</h3>
          
          <p className="text-gray-300 leading-relaxed">
            TODO: Audit pathways, certification processes, and enterprise integration standards for corporate adoption.
          </p>

          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-white mb-2">Audit Framework</h4>
            <p className="text-sm text-gray-300">
              TODO: Comprehensive audit procedures and certification pathways for enterprise-grade compliance assurance.
            </p>
          </div>
        </div>
      </div>
    </WhitepaperLayout>
  );
};

export default ComplianceAssurance;