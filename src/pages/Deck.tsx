import { motion } from "framer-motion";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide = ({ children, className = "" }: SlideProps) => (
  <section 
    className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${className}`}
    style={{ aspectRatio: '16/9' }}
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
    
    <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
      {children}
    </div>
  </section>
);

const Deck = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Slide 1: Title */}
      <Slide>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-8">
            AMAI Labs
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            Slide Title
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto">
            Subtitle or supporting statement goes here.
          </p>
        </motion.div>
      </Slide>

      {/* Slide 2: Placeholder */}
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
