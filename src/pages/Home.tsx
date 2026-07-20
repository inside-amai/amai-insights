import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import amaiLogo from "@/assets/amai-logo-tm.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";

const TEAL = "#3ECF9E";

const Home = () => {
  const { language } = useLanguage();
  const isRtl = language === "ar";

  // Mouse parallax
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        setParallax({ x: nx, y: ny });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const topOffsetX = -parallax.x * 14;
  const topOffsetY = -parallax.y * 8;
  const botOffsetX = parallax.x * 14;
  const botOffsetY = parallax.y * 8;

  return (
    <div className="bg-black" dir={isRtl ? "rtl" : "ltr"}>
      {/* Local keyframes for grid drift + horizon pulse */}
      <style>{`
        @keyframes home-grid-drift-down {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 0 80px, 80px 0; }
        }
        @keyframes home-grid-drift-up {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 0 -80px, 80px 0; }
        }
        @keyframes home-horizon-pulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Hero section — full viewport */}
      <div className="h-svh md:h-screen flex flex-col relative overflow-hidden">
        {/* Black header spacer to prevent background bleed */}
        <div className="h-16 bg-black flex-shrink-0 relative z-20" />

        {/* Landscape background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* TOP grid plane (ceiling) — vanishing toward horizon */}
          <div
            className="absolute left-0 right-0 top-0 h-1/2"
            style={{
              perspective: "600px",
              perspectiveOrigin: "50% 100%",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `translate3d(${topOffsetX}px, ${topOffsetY}px, 0) rotateX(60deg)`,
                transformOrigin: "50% 100%",
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px, 80px 80px",
                animation: "home-grid-drift-up 14s linear infinite",
                width: "200%",
                left: "-50%",
                height: "220%",
                top: "-120%",
                position: "absolute",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 40%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 40%, black 90%, transparent 100%)",
                transition: "transform 200ms ease-out",
              }}
            />
          </div>

          {/* BOTTOM grid plane (floor) — vanishing toward horizon */}
          <div
            className="absolute left-0 right-0 bottom-0 h-1/2"
            style={{
              perspective: "600px",
              perspectiveOrigin: "50% 0%",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `translate3d(${botOffsetX}px, ${botOffsetY}px, 0) rotateX(-60deg)`,
                transformOrigin: "50% 0%",
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px, 80px 80px",
                animation: "home-grid-drift-down 14s linear infinite",
                width: "200%",
                left: "-50%",
                height: "220%",
                bottom: "-120%",
                position: "absolute",
                maskImage:
                  "linear-gradient(to top, transparent 0%, black 40%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 40%, black 90%, transparent 100%)",
                transition: "transform 200ms ease-out",
              }}
            />
          </div>

          {/* Teal horizon glow — thin bright core */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              height: "1px",
              background: `linear-gradient(to right, transparent 0%, ${TEAL} 20%, ${TEAL} 80%, transparent 100%)`,
              opacity: 0.75,
              boxShadow: `0 0 2px ${TEAL}`,
              animation: "home-horizon-pulse 6s ease-in-out infinite",
            }}
          />
          {/* Teal horizon glow — soft bleed */}
          <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              height: "220px",
              background: `radial-gradient(ellipse 60% 100% at 50% 50%, ${TEAL}33 0%, ${TEAL}11 40%, transparent 75%)`,
              animation: "home-horizon-pulse 6s ease-in-out infinite",
              mixBlendMode: "screen",
            }}
          />
          {/* Vignette to keep edges dark */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center px-6 max-w-3xl mx-auto">
            {/* AMAI Logo */}
            <motion.img
              src={amaiLogo}
              alt="AMAI Labs"
              className="h-12 md:h-20 w-auto mx-auto mb-16 md:mb-24 brightness-110"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            />

            {/* Reweighted headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <p className="text-xs md:text-sm text-white/35 font-light tracking-wide">
                Humans have FICO. Businesses have D&amp;B.
              </p>
              <p className="mt-8 md:mt-12 text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1]">
                AI Agents have TARI™.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-light">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>

      {/* Institutional Footer — below the fold */}
      <Footer />
    </div>
  );
};

export default Home;
