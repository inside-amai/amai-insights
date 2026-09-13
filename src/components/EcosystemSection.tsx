import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import amaiLogo from "@/assets/amai-logo-tm.png";

type ProductId = "operators" | "launchpad" | "tari" | "lens" | "bureau";

interface Product {
  id: ProductId;
  name: string;
  description: string;
  href?: string;
  external?: boolean;
  linkLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  subordinate?: string;
}

const PRODUCTS: Product[] = [
  {
    id: "operators",
    name: "Operators",
    description: "AI agents that manage pool fees within defined permissions.",
    href: "/operators",
    linkLabel: "Explore Operators",
  },
  {
    id: "launchpad",
    name: "Launchpad",
    description: "Where new tokens and their pools begin.",
    href: "/launchpad",
    linkLabel: "Explore Launchpad",
  },
  {
    id: "tari",
    name: "TARI",
    description: "Trust and risk scoring for agents and onchain wallets.",
    href: "/tari",
    linkLabel: "Explore TARI",
    secondaryHref: "/methodology",
    secondaryLabel: "Read the methodology",
  },
  {
    id: "lens",
    name: "Lens",
    description: "Inspect recorded agent actions, findings, and history.",
    subordinate: "Interceptor · Human approval controls",
  },
  {
    id: "bureau",
    name: "Bureau",
    description: "Look up onchain credit scores and the records behind them.",
    href: "https://bureau.amai.net",
    external: true,
    linkLabel: "Open the Bureau",
  },
];

// Connector anchor points, percent of the map canvas (desktop only)
const CENTER = { x: 50, y: 38 };
const ANCHORS: Record<ProductId, { x: number; y: number }> = {
  operators: { x: 16, y: 18 },
  launchpad: { x: 16, y: 56 },
  tari: { x: 84, y: 18 },
  lens: { x: 84, y: 56 },
  bureau: { x: 50, y: 90 },
};

const ProductEntry = ({
  product,
  onFocusChange,
}: {
  product: Product;
  onFocusChange: (id: ProductId | null) => void;
}) => {
  const nameClasses =
    "text-xl md:text-2xl font-medium tracking-tight text-white/85 transition-colors duration-200 group-hover/eco:text-white group-focus-visible/eco:text-white";
  const linkClasses =
    "inline-flex items-center gap-1.5 text-sm font-light text-white/45 transition-colors duration-200 group-hover/eco:text-cyan-accent group-focus-visible/eco:text-cyan-accent";

  const inner = (
    <>
      <div className={nameClasses}>{product.name}</div>
      <p className="mt-2 text-sm md:text-[15px] font-light leading-relaxed text-white/55 max-w-xs">
        {product.description}
      </p>
      {product.href && (
        <span className={`mt-3 ${linkClasses}`}>
          {product.linkLabel} {product.external ? "↗" : "→"}
        </span>
      )}
    </>
  );

  return (
    <div
      onMouseEnter={() => onFocusChange(product.id)}
      onMouseLeave={() => onFocusChange(null)}
    >
      {product.href ? (
        product.external ? (
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/eco block focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-accent/60 rounded-sm"
            onFocus={() => onFocusChange(product.id)}
            onBlur={() => onFocusChange(null)}
          >
            {inner}
          </a>
        ) : (
          <Link
            to={product.href}
            className="group/eco block focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-accent/60 rounded-sm"
            onFocus={() => onFocusChange(product.id)}
            onBlur={() => onFocusChange(null)}
          >
            {inner}
          </Link>
        )
      ) : (
        <div className="group/eco">{inner}</div>
      )}
      {product.secondaryHref && (
        <Link
          to={product.secondaryHref}
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-light text-white/35 transition-colors duration-200 hover:text-cyan-accent focus-visible:text-cyan-accent focus:outline-none"
          onFocus={() => onFocusChange(product.id)}
          onBlur={() => onFocusChange(null)}
        >
          {product.secondaryLabel} →
        </Link>
      )}
      {product.subordinate && (
        <div className="mt-3 text-xs font-light tracking-wide text-white/35">
          {product.subordinate}
        </div>
      )}
    </div>
  );
};

export const EcosystemSection = () => {
  const [active, setActive] = useState<ProductId | null>(null);

  return (
    <section
      id="ecosystem"
      aria-label="The AMAI ecosystem"
      className="relative bg-black bg-perspective-grid py-28 md:py-44 px-4 md:px-8 overflow-hidden"
    >
      {/* subtle light concentration behind the central identity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 h-[560px] w-[760px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(closest-side, hsl(var(--cyan-accent)), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-white/50">The Ecosystem</span>
        </motion.div>

        {/* DESKTOP MAP */}
        <div className="relative mt-16 md:mt-24 hidden lg:block">
          {/* connector lines */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {PRODUCTS.map((p) => {
              const a = ANCHORS[p.id];
              const lit = active === p.id;
              return (
                <line
                  key={p.id}
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={a.x}
                  y2={a.y}
                  stroke={lit ? "hsl(var(--cyan-accent))" : "hsl(0 0% 100%)"}
                  strokeOpacity={lit ? 0.45 : 0.1}
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                  className="transition-[stroke,stroke-opacity] duration-200"
                />
              );
            })}
          </svg>

          <div className="relative grid grid-cols-[1fr_auto_1fr] gap-x-16">
            {/* left region */}
            <div className="flex flex-col gap-24 pt-2">
              <ProductEntry product={PRODUCTS[0]} onFocusChange={setActive} />
              <ProductEntry product={PRODUCTS[1]} onFocusChange={setActive} />
            </div>

            {/* central identity */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center px-10"
            >
              <img src={amaiLogo} alt="AMAI" className="h-12 w-auto opacity-90" />
              <div className="mt-6 text-3xl xl:text-4xl font-medium tracking-tight text-white">AMAI Labs</div>
              <div className="mt-3 text-[11px] tracking-[0.3em] uppercase text-white/45">
                Infrastructure &amp; Research
              </div>
            </motion.div>

            {/* right region */}
            <div className="flex flex-col gap-24 pt-2 items-start justify-self-end">
              <ProductEntry product={PRODUCTS[2]} onFocusChange={setActive} />
              <ProductEntry product={PRODUCTS[3]} onFocusChange={setActive} />
            </div>
          </div>

          {/* bureau, its own position below the center */}
          <div className="relative mt-24 flex justify-center">
            <div className="text-left">
              <ProductEntry product={PRODUCTS[4]} onFocusChange={setActive} />
            </div>
          </div>
        </div>

        {/* MOBILE STACK */}
        <div className="mt-14 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center pb-10"
          >
            <img src={amaiLogo} alt="AMAI" className="h-10 w-auto opacity-90" />
            <div className="mt-5 text-2xl font-medium tracking-tight text-white">AMAI Labs</div>
            <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-white/45">
              Infrastructure &amp; Research
            </div>
          </motion.div>
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="py-7">
                <ProductEntry product={p} onFocusChange={() => {}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
