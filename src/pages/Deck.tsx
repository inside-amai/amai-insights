import { motion } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-new.png";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

const Slide = ({ children, className = "", align = "center" }: SlideProps) => (
  <section 
    className={`relative min-h-screen w-full flex items-center overflow-hidden ${
      align === "left" ? "justify-start" : "justify-center"
    } ${className}`}
  >
    {/* Grid background */}
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}
    />
    
    <div className={`relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-24 ${
      align === "left" ? "" : ""
    }`}>
      {children}
    </div>
  </section>
);

const Deck = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Slide 1: Title */}
      <Slide align="left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl"
        >
          {/* Logo */}
          <motion.img
            src={amaiLogo}
            alt="AMAI Labs"
            className="h-10 md:h-12 w-auto opacity-90 mb-16 md:mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Thesis
          </motion.p>
          
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-10 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-light">Agents Are</span>
            <br />
            <span className="font-normal">Entering the Economy.</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Infrastructure for autonomous agents to establish identity, build reputation, enforce capital accountability, and settle value independently, with reputation functioning as a persistent, credit-like trust score.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 2: The Shift */}
      <Slide>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {/* Micro-label */}
          <motion.p
            className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Shift
          </motion.p>
          
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-16 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The Next Billion Participants in the Economy Will Not Be Human.
          </motion.h2>
          
          {/* Body copy */}
          <motion.div
            className="space-y-6 text-base md:text-lg text-white/50 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Software agents are rapidly becoming the primary interface through which value moves online. They already make decisions, execute instructions, and interact with financial systems.
            </p>
            
            <p className="text-white/60">
              What they lack is economic standing.
            </p>
            
            <p>
              Today, agents cannot hold identity, accumulate reputation, or be held accountable over time. They operate as tools, not participants.
            </p>
            
            <p>
              As agents move from copilots to autonomous actors, the absence of economic primitives becomes the core bottleneck.
            </p>
          </motion.div>
          
          {/* Closing line */}
          <motion.p
            className="mt-12 md:mt-16 text-base md:text-lg text-white/70 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            This is not a UX problem.<br />
            It is an infrastructure problem.
          </motion.p>
        </motion.div>
      </Slide>

      {/* Slide 3: Placeholder */}
      <Slide>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-6">
            Section Label
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Headline
          </h2>
          <p className="text-base md:text-lg text-white/50 font-light max-w-3xl">
            Body copy placeholder.
          </p>
        </motion.div>
      </Slide>
    </div>
  );
};

export default Deck;
