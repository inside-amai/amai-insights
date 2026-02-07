import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const BulletList = ({ items }: { items: string[] }) => (
  <div className="space-y-2">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-3 group">
        <div className="w-4 h-px bg-white/20 mt-1.5 shrink-0" />
        <span className="text-xs text-white/50">{item}</span>
      </div>
    ))}
  </div>
);

const Legal = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    document.title = 'Legal & Privacy | AMAI Labs';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header spacer */}
      <div className="h-16 bg-black" />

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors duration-200 mb-12 uppercase tracking-[0.2em]"
          >
            <ArrowLeft className="w-3 h-3" />
            {t('legal.back')}
          </Link>
        </motion.div>

        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
            {t('legal.title')}
          </h1>
          <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
            {t('legal.subtitle')}
          </p>
        </motion.div>

        {/* Content sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">1. Introduction</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-3">
              Welcome to AMAI Labs.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-3">
              By accessing this portal, its documentation, research materials, conceptual descriptions, diagrams, prototypes, or any related content (collectively, the "Materials"), you acknowledge and agree to the following Terms & Conditions ("Terms").
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-3">
              AMAI Labs is a research division responsible for describing, evaluating, and exploring a decentralized computational infrastructure for autonomous agents (the "AMAI Protocol"). Accessing this portal indicates your understanding that AMAI Labs does not provide a commercial product, and that all Materials are offered solely for informational, educational, and experimental purposes.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              If you do not agree with these Terms, you must discontinue use immediately.
            </p>
          </section>

          {/* Section 2: Non-Commercial Nature */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">2. Non-Commercial, Non-Advisory Nature of Materials</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">All Materials provided through AMAI Labs</p>
            <BulletList items={[
              "do not constitute a commercial offering",
              "do not establish any advisory, fiduciary, brokerage, or client relationship",
              "do not represent investment guidance",
              "do not constitute legal, financial, or regulatory advice",
              "do not form part of any solicitation, inducement, or marketing activity",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              Nothing herein should be construed as a representation that any system, protocol, feature, or capability described will be implemented, deployed, or function as anticipated.
            </p>
          </section>

          {/* Section 3: Purpose */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">3. Purpose of AMAI Labs</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">AMAI Labs provides</p>
            <BulletList items={[
              "protocol research and conceptual frameworks",
              "architectural diagrams and technical primitives",
              "economic models and trust-scoring mechanics",
              "forward-looking development plans",
              "experimental specifications, prototypes, and tests",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4 mb-4">
              These Materials describe potential infrastructure for autonomous computational agents. They may contain early-stage ideas, experimental components, or draft specifications.
            </p>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Access is provided solely for</p>
            <BulletList items={[
              "Educational analysis",
              "Technical evaluation",
              "Research review",
              "Non-commercial experimentation",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              Any other use is strictly prohibited.
            </p>
          </section>

          {/* Section 4: Forward-Looking Statements */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">4. Forward-Looking Statements</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Materials may include forward-looking statements such as</p>
            <BulletList items={[
              "anticipated architecture",
              "proposed features",
              "conceptual economic models",
              "trust-scoring methodologies",
              "potential integrations",
              "long-term ecosystem trajectories",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4 mb-4">
              These statements are inherently uncertain and subject to change.
            </p>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">AMAI Labs</p>
            <BulletList items={[
              "does not guarantee accuracy, completeness, or future occurrence of any concept described",
              "makes no commitment to deliver any feature, capability, or version",
              "reserves the right to modify or discontinue any component of the research at any time",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              Nothing in the Materials should be relied upon as a promise of performance, value creation, system release, or commercial outcome.
            </p>
          </section>

          {/* Section 5: No Warranties */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">5. No Warranties or Guarantees</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              All Materials are provided "as is" without warranties of any kind, whether express or implied.
            </p>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">This includes, but is not limited to</p>
            <BulletList items={[
              "fitness for a particular purpose",
              "performance guarantees",
              "reliability, correctness, or completeness",
              "security guarantees",
              "suitability for commercial deployment",
              "legal or regulatory compliance",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              The AMAI Protocol, if deployed, may contain defects, design limitations, or risks inherent to decentralized, distributed, or autonomous computational systems. You assume all responsibility for your interpretation and use of the Materials.
            </p>
          </section>

          {/* Section 6: Intellectual Property */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">6. Intellectual Property</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              All content accessible through AMAI Labs—including diagrams, text, models, research papers, graphics, conceptual architectures, and system descriptions—is the intellectual property of AMAI Labs unless otherwise noted.
            </p>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">You may not</p>
            <BulletList items={[
              "reproduce",
              "modify",
              "distribute",
              "publish",
              "adapt",
              "commercialize",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              any Materials without explicit written permission.
            </p>
          </section>

          {/* Section 7: Prohibited Uses */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">7. Prohibited Uses</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">You agree not to use AMAI Labs</p>
            <BulletList items={[
              "to evaluate the Materials for competitive commercial development",
              "to create derivative systems marketed as AMAI Labs or the AMAI Protocol",
              "to misrepresent the status, readiness, or capabilities of AMAI's research",
              "to imply endorsement, partnership, or affiliation",
              "to perform unlawful, fraudulent, or harmful activities",
              "to provide investment, financial, or advisory statements using the Materials",
              "to make public claims about AMAI's roadmap or future performance",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              AMAI Labs reserves all rights to restrict or terminate access for violations.
            </p>
          </section>

          {/* Section 8: No Investment Claims */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">8. No Investment, Security, or Token Claims</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Any descriptions of token mechanics, collateral models, trust-weighting, or economic substrates are purely conceptual and intended for research evaluation.
            </p>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">They</p>
            <BulletList items={[
              "are not investment vehicles",
              "do not represent ownership, revenue rights, governance rights, or equity",
              "are not security instruments",
              "may not correspond to any future token or asset",
              "may not ever be implemented",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              No part of AMAI Labs constitutes an offering under securities laws of any jurisdiction.
            </p>
          </section>

          {/* Section 9: Risk */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">9. Risk of Digital and Autonomous Systems</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Research into autonomous agents and decentralized infrastructure involves risks including</p>
            <BulletList items={[
              "computational failures",
              "unpredictable agent behavior",
              "economic model instability",
              "adversarial interactions",
              "vulnerabilities in cryptographic or distributed systems",
              "network disruptions",
              "regulatory constraints",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              You understand and accept that the Materials may reference systems that are theoretical, incomplete, or subject to significant future revision.
            </p>
          </section>

          {/* Section 10: Jurisdictional Neutrality */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">10. Jurisdictional and Regulatory Neutrality</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">AMAI Labs does not guarantee that its research or conceptual materials comply with the legal or regulatory requirements of any jurisdiction, including but not limited to</p>
            <BulletList items={[
              "securities laws",
              "financial regulations",
              "data-protection frameworks",
              "AI safety regulations",
              "cross-border digital-asset requirements",
              "sovereign technology controls",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              Users are solely responsible for understanding and complying with applicable laws in their jurisdictions. AMAI Labs disclaims all responsibility for regulatory interpretation or outcomes.
            </p>
          </section>

          {/* Section 11: Limitation of Liability */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">11. Limitation of Liability</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">To the fullest extent permitted by law, the following shall not be liable</p>
            <BulletList items={[
              "AMAI Labs",
              "its contributors",
              "affiliates",
              "researchers",
              "engineers",
              "and associated entities",
            ]} />
            <p className="text-white/40 text-xs uppercase tracking-wider mt-4 mb-3">for any damages arising from</p>
            <BulletList items={[
              "access to or use of the Materials",
              "reliance on the Materials",
              "errors or omissions",
              "system failures",
              "loss of data or business opportunities",
              "misinterpretation or misuse of research content",
              "or any other interaction with AMAI Labs",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              Your sole remedy for dissatisfaction with the Materials is to discontinue use.
            </p>
          </section>

          {/* Section 12: Availability */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">12. No Guarantee of Availability</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">AMAI Labs may temporarily or permanently</p>
            <BulletList items={[
              "restrict access",
              "modify the portal",
              "alter content",
              "limit features",
              "remove sections",
              "suspend the site",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              without notice and without liability.
            </p>
          </section>

          {/* Section 13: Acceptance */}
          <section>
            <h2 className="text-sm font-medium text-white/80 mb-4">13. Acceptance of Terms</h2>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">By accessing AMAI Labs in any capacity, you affirm that</p>
            <BulletList items={[
              "you have read and understood these Terms",
              "you agree to use the Materials solely for non-commercial research purposes",
              "you acknowledge the experimental nature of all Materials",
              "you understand the lack of warranties, commitments, and guarantees",
              "and you accept all limitations of liability",
            ]} />
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              If you do not accept, you must leave immediately.
            </p>
          </section>

          {/* Privacy Policy Section */}
          <div className="border-t border-white/10 pt-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
                {t('legal.privacy.title')}
              </h1>
              <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-12">
                {t('legal.privacy.subtitle')}
              </p>
            </motion.div>

            <div className="space-y-12">
              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.collection.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {t('legal.privacy.collection.intro')}
                </p>
                <BulletList items={[
                  t('legal.privacy.collection.item1'),
                  t('legal.privacy.collection.item2'),
                  t('legal.privacy.collection.item3'),
                  t('legal.privacy.collection.item4'),
                ]} />
                <p className="text-white/50 text-sm leading-relaxed mt-4">
                  {t('legal.privacy.collection.note')}
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.usage.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {t('legal.privacy.usage.intro')}
                </p>
                <BulletList items={[
                  t('legal.privacy.usage.item1'),
                  t('legal.privacy.usage.item2'),
                  t('legal.privacy.usage.item3'),
                  t('legal.privacy.usage.item4'),
                ]} />
              </section>

              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.sharing.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t('legal.privacy.sharing.body')}
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.cookies.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t('legal.privacy.cookies.body')}
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-white/80 mb-4">{t('legal.privacy.contact.title')}</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t('legal.privacy.contact.body')}{' '}
                  <a href="mailto:team@amai.net" className="text-white/70 hover:text-white underline underline-offset-2 transition-colors duration-200">
                    team@amai.net
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Legal;
