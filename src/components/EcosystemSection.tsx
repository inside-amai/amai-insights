import { Link } from "react-router-dom";
import amaiLogo from "@/assets/amai-logo-tm.png";
import amaiPoolGraphic from "@/assets/AMAI_graphic.svg";
import { TariGauge } from "@/components/TariGauge";

const linkClasses =
  "inline-flex items-center gap-2 text-sm font-light text-white/60 transition-colors duration-200 hover:text-cyan-accent focus:outline-none focus-visible:text-cyan-accent focus-visible:ring-1 focus-visible:ring-cyan-accent/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black";

const supportingProducts = [
  {
    name: "Launchpad",
    description: "Where new tokens and their pools begin.",
    href: "/launchpad",
    link: "Explore Launchpad",
  },
  {
    name: "Lens",
    description: "Inspect recorded agent actions, findings, and history.",
    detail: "Interceptor · Human approval controls",
  },
  {
    name: "Bureau",
    description: "Look up onchain credit scores and the records behind them.",
    href: "https://bureau.amai.net",
    link: "Open the Bureau",
    external: true,
  },
] as const;

export const EcosystemSection = () => (
  <section
    id="ecosystem"
    aria-labelledby="ecosystem-heading"
    className="relative overflow-hidden bg-black bg-perspective-grid px-4 py-28 md:px-8 md:py-40"
  >
    <div className="relative mx-auto max-w-7xl">
      <header className="border-b border-white/10 pb-14 md:pb-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-cyan-accent/60" aria-hidden="true" />
          <span className="text-[11px] font-light uppercase tracking-[0.35em] text-white/60">
            The Ecosystem
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="ecosystem-heading"
              className="text-6xl font-medium leading-none text-white md:text-8xl"
            >
              AMAI Labs.
            </h2>
            <p className="mt-5 text-sm font-light uppercase tracking-[0.3em] text-white/55 md:text-base">
              Infrastructure &amp; Research
            </p>
          </div>
          <img src={amaiLogo} alt="AMAI" className="h-8 w-auto self-start opacity-75 md:h-10 md:self-end" />
        </div>
      </header>

      <div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[11fr_9fr]">
        <article className="group/feature relative border-b border-white/10 bg-gradient-to-b from-white/[0.045] to-transparent px-0 py-12 transition-colors duration-200 hover:from-white/[0.065] lg:border-b-0 lg:border-r lg:px-10 lg:py-16 xl:px-14">
          <div className="flex min-h-[300px] items-center justify-center md:min-h-[390px]">
            <img
              src={amaiPoolGraphic}
              alt="Transparent AMAI liquidity pool sculpture"
              className="block h-auto w-full max-w-[420px] object-contain"
              loading="lazy"
            />
          </div>
          <div className="mt-8 max-w-md">
            <h3 className="text-4xl font-medium text-white md:text-5xl">Operators</h3>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70 md:text-lg">
              AI agents that manage pool fees within defined permissions.
            </p>
            <Link to="/operators" className={`${linkClasses} mt-7`}>
              Explore Operators <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        <article className="group/feature bg-gradient-to-b from-white/[0.03] to-transparent px-0 py-12 transition-colors duration-200 hover:from-white/[0.055] lg:px-10 lg:py-16 xl:px-14">
          <div className="flex min-h-[300px] items-center justify-center md:min-h-[390px]">
            <div className="w-full max-w-[430px]">
              <TariGauge presentation />
            </div>
          </div>
          <div className="mt-8 max-w-md">
            <h3 className="text-4xl font-medium text-white md:text-5xl">TARI</h3>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70 md:text-lg">
              Trust and risk scoring for agents and onchain wallets.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3">
              <Link to="/tari" className={linkClasses}>
                Explore TARI <span aria-hidden="true">→</span>
              </Link>
              <Link to="/methodology" className="text-xs font-light text-white/45 transition-colors duration-200 hover:text-cyan-accent focus:outline-none focus-visible:text-cyan-accent focus-visible:ring-1 focus-visible:ring-cyan-accent/60">
                Read the methodology <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </article>
      </div>

      <div className="border-b border-white/10">
        {supportingProducts.map((product) => (
          <article
            key={product.name}
            className="group/product grid grid-cols-1 gap-4 border-t border-white/10 py-8 transition-colors duration-200 first:border-t-0 hover:bg-white/[0.025] focus-within:bg-white/[0.025] md:grid-cols-[minmax(180px,0.8fr)_minmax(320px,1.6fr)_minmax(180px,0.6fr)] md:items-center md:gap-10 md:px-4 md:py-9"
          >
            <h3 className="text-2xl font-medium text-white/90 transition-colors duration-200 group-hover/product:text-white md:text-3xl">
              {product.name}
            </h3>
            <div>
              <p className="text-base font-light leading-relaxed text-white/70">
                {product.description}
              </p>
              {"detail" in product && product.detail && (
                <p className="mt-2 text-xs font-light tracking-wide text-white/45">{product.detail}</p>
              )}
            </div>
            <div className="md:justify-self-end">
              {"href" in product && product.href && product.link && (
                "external" in product && product.external ? (
                  <a href={product.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    {product.link} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link to={product.href} className={linkClasses}>
                    {product.link} <span aria-hidden="true">→</span>
                  </Link>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);