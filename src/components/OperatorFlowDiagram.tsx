import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const TIMING = {
  cycle: 8,
  incomingStart: 0,
  incomingDuration: 2.2,
  incomingStagger: 0.045,
  conversionStart: 2.2,
  conversionDuration: 0.8,
  outgoingStart: 3,
  outgoingDuration: 2.3,
  outgoingStagger: 0.08,
  fadeStart: 5.3,
  fadeDuration: 0.45,
} as const;

const DESKTOP_INCOMING = [
  "M 18 42 C 150 42, 250 132, 418 206",
  "M 18 78 C 160 78, 270 148, 418 208",
  "M 18 116 C 165 116, 290 166, 418 210",
  "M 18 154 C 172 154, 306 186, 418 212",
  "M 18 212 C 175 212, 310 212, 418 214",
  "M 18 270 C 172 270, 306 242, 418 216",
  "M 18 308 C 165 308, 290 258, 418 218",
  "M 18 346 C 160 346, 270 278, 418 220",
  "M 18 382 C 150 382, 250 292, 418 222",
];

const DESKTOP_OUTGOING = [
  "M 442 210 C 560 188, 650 80, 806 62",
  "M 442 212 C 574 202, 670 148, 806 138",
  "M 442 214 C 590 214, 678 214, 806 214",
  "M 442 216 C 574 226, 670 280, 806 290",
  "M 442 218 C 560 240, 650 348, 806 366",
];

const MOBILE_INCOMING = [
  "M 20 40 C 122 40, 168 142, 252 236",
  "M 20 76 C 126 76, 178 158, 252 238",
  "M 20 112 C 132 112, 188 176, 252 240",
  "M 20 150 C 136 150, 198 198, 252 242",
  "M 20 242 C 140 242, 202 242, 252 244",
  "M 20 334 C 136 334, 198 290, 252 246",
  "M 20 372 C 132 372, 188 308, 252 248",
  "M 20 408 C 126 408, 178 326, 252 250",
  "M 20 444 C 122 444, 168 342, 252 252",
];

const MOBILE_OUTGOING = [
  "M 272 240 C 354 220, 410 108, 500 82",
  "M 272 242 C 364 232, 424 176, 500 166",
  "M 272 244 C 376 244, 430 244, 500 244",
  "M 272 246 C 364 256, 424 312, 500 322",
  "M 272 248 C 354 268, 410 380, 500 406",
];

type FlowSvgProps = {
  compact?: boolean;
};

const FlowSvg = ({ compact = false }: FlowSvgProps) => {
  const incoming = compact ? MOBILE_INCOMING : DESKTOP_INCOMING;
  const outgoing = compact ? MOBILE_OUTGOING : DESKTOP_OUTGOING;
  const seamX = compact ? 262 : 430;
  const seamTop = compact ? 212 : 184;
  const seamBottom = compact ? 276 : 244;

  return (
    <svg
      viewBox={compact ? "0 0 520 520" : "0 0 824 430"}
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label="Trading fees converge through an operator and flow outward as Stock Tokens to holders."
    >
      <defs>
        <filter id={`flow-soft-${compact ? "m" : "d"}`} x="-40%" y="-80%" width="180%" height="260%">
          <feGaussianBlur stdDeviation={compact ? "3" : "4"} />
        </filter>
        <filter id={`seam-soft-${compact ? "m" : "d"}`} x="-800%" y="-30%" width="1700%" height="160%">
          <feGaussianBlur stdDeviation={compact ? "6" : "8"} />
        </filter>
      </defs>

      <g className="flow-resting" fill="none" stroke="hsl(var(--gray-400))" strokeOpacity="0.34" strokeWidth="1">
        {incoming.map((path) => <path key={path} d={path} vectorEffect="non-scaling-stroke" />)}
      </g>
      <g className="flow-resting" fill="none" stroke="hsl(var(--cyan-accent))" strokeOpacity="0.23" strokeWidth="1">
        {outgoing.map((path) => <path key={path} d={path} vectorEffect="non-scaling-stroke" />)}
      </g>

      <g className="incoming-halos" fill="none" stroke="hsl(var(--white))" strokeLinecap="round">
        {incoming.map((path) => (
          <path key={path} className="incoming-halo" d={path} pathLength="1000" strokeWidth="7" strokeDasharray="64 936" opacity="0" vectorEffect="non-scaling-stroke" filter={`url(#flow-soft-${compact ? "m" : "d"})`} />
        ))}
      </g>
      <g className="incoming-cores" fill="none" stroke="hsl(var(--white))" strokeLinecap="round">
        {incoming.map((path) => (
          <path key={path} className="incoming-core" d={path} pathLength="1000" strokeWidth="1.6" strokeDasharray="42 958" opacity="0" vectorEffect="non-scaling-stroke" />
        ))}
      </g>

      <g aria-hidden="true">
        <line className="operator-seam-halo" x1={seamX} x2={seamX} y1={seamTop} y2={seamBottom} stroke="hsl(var(--cyan-accent))" strokeWidth={compact ? "12" : "14"} strokeLinecap="round" strokeOpacity="0.12" filter={`url(#seam-soft-${compact ? "m" : "d"})`} />
        <line className="operator-seam" x1={seamX} x2={seamX} y1={seamTop} y2={seamBottom} stroke="hsl(var(--cyan-accent))" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.62" vectorEffect="non-scaling-stroke" />
      </g>

      <g className="outgoing-halos" fill="none" stroke="hsl(var(--cyan-accent))" strokeLinecap="round">
        {outgoing.map((path) => (
          <path key={path} className="outgoing-halo" d={path} pathLength="1000" strokeWidth="8" strokeDasharray="72 928" opacity="0" vectorEffect="non-scaling-stroke" filter={`url(#flow-soft-${compact ? "m" : "d"})`} />
        ))}
      </g>
      <g className="outgoing-cores" fill="none" stroke="hsl(var(--cyan-accent))" strokeLinecap="round">
        {outgoing.map((path) => (
          <path key={path} className="outgoing-core" d={path} pathLength="1000" strokeWidth="1.8" strokeDasharray="48 952" opacity="0" vectorEffect="non-scaling-stroke" />
        ))}
      </g>

      <g className="font-mono" fill="hsl(var(--white))" fillOpacity="0.48" fontSize={compact ? "12" : "11"} letterSpacing="0">
        {compact ? (
          <>
            <text x="20" y="492">Trading fees</text>
            <text x="262" y="492" textAnchor="middle">Operator</text>
            <text x="500" y="492" textAnchor="end">Stock Tokens to holders</text>
          </>
        ) : (
          <>
            <text x="18" y="420">Trading fees</text>
            <text x="430" y="420" textAnchor="middle">Operator</text>
            <text x="806" y="420" textAnchor="end">Stock Tokens to holders</text>
          </>
        )}
      </g>
    </svg>
  );
};

export const OperatorFlowDiagram = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(root.querySelectorAll(".operator-seam"), { attr: { "stroke-opacity": 0.8 } });
      return;
    }

    const ctx = gsap.context(() => {
      const incoming = gsap.utils.toArray<SVGPathElement>(".incoming-core, .incoming-halo");
      const outgoing = gsap.utils.toArray<SVGPathElement>(".outgoing-core, .outgoing-halo");
      const seams = gsap.utils.toArray<SVGLineElement>(".operator-seam, .operator-seam-halo");

      gsap.set(incoming, { strokeDashoffset: 70, opacity: 0 });
      gsap.set(outgoing, { strokeDashoffset: 70, opacity: 0 });

      const timeline = gsap.timeline({ repeat: -1, paused: true, defaults: { ease: "power2.inOut" } });
      timeline
        .set(incoming, { strokeDashoffset: 70, opacity: 0 }, TIMING.incomingStart)
        .to(incoming, {
          strokeDashoffset: -1000,
          opacity: 0.9,
          duration: TIMING.incomingDuration,
          stagger: TIMING.incomingStagger,
        }, TIMING.incomingStart)
        .to(seams, {
          attr: { "stroke-opacity": 1 },
          duration: TIMING.conversionDuration / 2,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        }, TIMING.conversionStart)
        .set(outgoing, { strokeDashoffset: 70, opacity: 0 }, TIMING.outgoingStart)
        .to(outgoing, {
          strokeDashoffset: -1000,
          opacity: 0.92,
          duration: TIMING.outgoingDuration,
          stagger: TIMING.outgoingStagger,
        }, TIMING.outgoingStart)
        .to([...incoming, ...outgoing], {
          opacity: 0,
          duration: TIMING.fadeDuration,
          ease: "power1.out",
        }, TIMING.fadeStart)
        .to({}, { duration: TIMING.cycle - TIMING.fadeStart - TIMING.fadeDuration });

      const observer = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting) timeline.play();
        else timeline.pause();
      }, { threshold: 0.18 });

      observer.observe(root);
      return () => observer.disconnect();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} dir="ltr" className="relative w-full">
      <div className="pointer-events-none absolute inset-y-[5%] -inset-x-[3%] bg-black/35 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]" aria-hidden="true" />
      <div className="relative hidden md:block">
        <FlowSvg />
      </div>
      <div className="relative md:hidden">
        <FlowSvg compact />
      </div>
    </div>
  );
};
