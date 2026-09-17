import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import denverImg from "@/assets/team-denver.webp";
import scottImg from "@/assets/team-scott.webp";
import joshImg from "@/assets/team-josh.webp";
import yuImg from "@/assets/team-yu.webp";
import amitImg from "@/assets/team-amit.webp";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-6 md:mb-8 justify-center">
    <span className="h-px w-10 bg-white/30" />
    <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">
      {children}
    </span>
    <span className="h-px w-10 bg-white/30" />
  </div>
);

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const founders = [
  {
    name: "Denver Nunley",
    title: "CO-FOUNDER",
    line1: "Lead Product & Vision",
    line2: "10 Year Blockchain Veteran",
    img: denverImg,
  },
  {
    name: "Scott Trowbridge",
    title: "CO-FOUNDER",
    line1: "Ex-Stability AI Founding Team",
    line2: "Ex-Circle (USDC), WeWork",
    img: scottImg,
  },
  {
    name: "Josh Sorbel",
    title: "CO-FOUNDER",
    line1: "25+ Years Enterprise Cybersecurity",
    line2: "Ex-FBI Incident Response Lead",
    img: joshImg,
  },
];

const researchers = [
  {
    name: "Yu Xiong",
    title: "Chief Scientist",
    line1: "Fellow, Academy of Social Sciences",
    line2: "Professor, University Of Surrey",
    img: yuImg,
  },
  {
    name: "Dr. Amit Jaiswal",
    title: "AI Researcher",
    line1: "Ph.D. in Information Retrieval (MSCA)",
    line2: "Marie Curie & Former Surrey Research Fellow, Ex-UCL",
    img: amitImg,
  },
];

const PersonCard = ({ person, index, className = "" }: { person: typeof founders[0]; index: number; className?: string }) => (
  <motion.div
    key={person.name}
    className={`flex h-full flex-col items-center text-center rounded-xl px-5 py-6 md:py-8 border border-white/10 bg-black ${className}`}


    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="relative mb-5">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-white/10">
        <img
          src={person.img}
          alt={person.name}
          width={320}
          height={320}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
    <h3 className="text-base md:text-lg font-normal text-white tracking-wide mb-1">{person.name}</h3>
    <p className="text-xs tracking-[0.15em] uppercase text-white/50 mb-3">{person.title}</p>
    <div className="w-8 h-px bg-gradient-to-r from-transparent via-[rgba(100,180,255,0.3)] to-transparent mb-3" />
    <p className="text-sm text-white/40 font-light leading-relaxed">{person.line1}</p>
    <p className="text-sm text-white/40 font-light leading-relaxed mt-1">{person.line2}</p>
  </motion.div>
);

const Team = () => (
  <div className="bg-black">
    <section className="relative min-h-screen flex items-center bg-perspective-grid pt-24 md:pt-32 py-24 md:py-40 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 h-[110%] w-[130%] md:w-[110%] pointer-events-none bg-[radial-gradient(ellipse_at_center,hsl(var(--cyan-accent)/0.1),transparent_58%)] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_78%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_78%)]"
      />
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div {...reveal}>
          <SectionLabel>THE TEAM</SectionLabel>
        </motion.div>

        <motion.h1
          className="text-5xl font-medium leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Core Team
        </motion.h1>

        <motion.p
          className="mt-6 md:mt-8 text-base md:text-lg font-light text-white/50 leading-relaxed max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          We're building a future where the people who create and the people who believe earn together.
        </motion.p>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-6 auto-rows-fr gap-5">
          {founders.map((person, i) => (
            <PersonCard key={person.name} person={person} index={i} className="md:col-span-2" />
          ))}
          {researchers.map((person, i) => (
            <PersonCard
              key={person.name}
              person={person}
              index={i + 3}
              className={`md:col-span-2 ${i === 0 ? "md:col-start-2" : ""}`}
            />
          ))}
        </div>


      </div>
    </section>

    <Footer />
  </div>
);

export default Team;
