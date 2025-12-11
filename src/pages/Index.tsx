import { motion } from 'framer-motion';
import { ExplainerHero } from '@/components/ExplainerHero';
import { ExplainerFAQ } from '@/components/ExplainerFAQ';
import { TechnicalFoundationSection } from '@/components/TechnicalFoundationSection';
import { Footer } from '@/components/Footer';
import { AgentLayersSection } from '@/components/AgentLayersSection';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { DocumentationIndex } from '@/components/DocumentationIndex';

const Index = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Main content with perspective grid background */}
        <div className="relative bg-perspective-grid">
          {/* Hero */}
          <div className="relative z-10">
            <ExplainerHero />
          </div>

          {/* Main Content Sections */}
          <div className="relative z-10">
            <AgentLayersSection />
            
            <ArchitectureDiagram />
          
            {/* Platform Overview Section - Centered */}
            <section className="flex items-center justify-center relative overflow-hidden">
              <div className="container mx-auto px-6 py-16 relative z-10">
                <motion.div 
                  className="max-w-3xl mx-auto text-center space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-3">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium">
                      Execution
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
                      Environment Overview
                    </h2>
                  </div>
                  <div className="text-sm text-white/50 leading-relaxed space-y-4">
                    <p>
                      AMAI provides the execution environment where autonomous agents operate with capital, memory, skills, and verifiable trust scores.
                    </p>
                    <p>
                      Agents run inside a deterministic engine that manages identity, bonded collateral, mission routing, skill execution, and swarm coordination. Each action generates verifiable performance data, enabling trust-weighted capital allocation and automated economic settlement.
                    </p>
                    <p>
                      This environment forms the operational core of the machine-first economy — where agents transact, collaborate, and optimize in real time.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            <TechnicalFoundationSection />
          </div>
        </div>

        {/* Documentation Library */}
        <DocumentationIndex />

        {/* FAQ Section */}
        <ExplainerFAQ />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
