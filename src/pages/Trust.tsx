import React from "react";
import { Shield, Bot, Database, TriangleAlert, CheckCircle2, XCircle, Building2, Cpu, Lock, Fingerprint, Wallet, Network } from "lucide-react";
import amaiLogo from "@/assets/amai-logo-tm.png";

const stageCardClass = "h-full rounded-lg border border-white/10 bg-[linear-gradient(180deg,hsl(var(--black))_0%,hsl(var(--gray-900))_100%)] shadow-[0_18px_60px_-28px_hsl(var(--trust-blue)/0.18)]";

const Badge = ({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "gray" | "green" | "red" }) => {
  const toneClass = {
    blue: "border-[hsl(var(--trust-blue)/0.2)] bg-[hsl(var(--trust-blue-soft))] text-[hsl(var(--trust-blue-ink))]",
    gray: "border-[hsl(var(--trust-gray)/0.18)] bg-[hsl(var(--trust-gray-soft))] text-foreground/80",
    green: "border-[hsl(var(--trust-green)/0.22)] bg-[hsl(var(--trust-green-soft))] text-[hsl(var(--trust-green))]",
    red: "border-[hsl(var(--trust-red)/0.2)] bg-[hsl(var(--trust-red-soft))] text-[hsl(var(--trust-red))]",
  }[tone];

  return <div className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase ${toneClass}`}>{children}</div>;
};

const Trust = () => {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-foreground">
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-14">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,hsl(var(--trust-blue)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--trust-blue)/0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,hsl(var(--trust-blue)/0.08),transparent_70%)] pointer-events-none" />

        <div className="relative mx-auto max-w-[1560px]">
          <div className="mb-10 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <img src={amaiLogo} alt="AMAI" className="mb-6 h-10 w-auto opacity-90" loading="eager" />
              <div className="mb-4">
                <Badge tone="blue">Trust Diagram</Badge>
              </div>
              <h1 className="max-w-5xl text-4xl font-light leading-tight text-[hsl(var(--trust-blue-ink))] md:text-5xl lg:text-6xl">
                AMAI TRUST LAYER: SECURING PROGRAMMATIC CAPITAL
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
                A four-stage control plane for evaluating intent, intercepting rogue execution, and dynamically gating capital access in autonomous systems.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-foreground/70 sm:grid-cols-2 lg:w-[360px]">
              <div className="rounded-lg border border-border bg-[hsl(var(--trust-blue-soft))] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--trust-blue))]">Control Type</div>
                <div className="mt-2 font-medium text-[hsl(var(--trust-blue-ink))]">Oracle-based runtime interception</div>
              </div>
              <div className="rounded-lg border border-border bg-[hsl(var(--trust-gray-soft))] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">Failure Mode</div>
                <div className="mt-2 font-medium text-foreground/80">Identity without sanity verification</div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-12">
            <article className={`${stageCardClass} p-5 md:p-6 xl:col-span-3`}>
              <div className="mb-5 space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/45">Stage 1</div>
                  <h2 className="mt-2 text-2xl font-light text-[hsl(var(--trust-blue-ink))]">The AI Agent</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/55">The problem</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="gray">Microsoft Entra</Badge>
                  <Badge tone="gray">NVIDIA NeMo</Badge>
                </div>
              </div>

              <div className="rounded-lg border border-[hsl(var(--trust-blue)/0.18)] bg-[linear-gradient(180deg,hsl(var(--trust-blue-soft)),hsl(var(--background)))] p-4 md:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--trust-blue)/0.22)] bg-background shadow-sm">
                    <Bot className="h-10 w-10 text-[hsl(var(--trust-blue))]" strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className="text-lg font-medium leading-tight text-[hsl(var(--trust-blue-ink))]">Autonomous AI Agent</div>
                    <div className="mt-1 text-sm leading-relaxed text-foreground/68">Authorized to act, but not inherently verified as sane, aligned, or safe in real time.</div>
                  </div>
                </div>

                <div className="mt-5 rounded-lg border border-border bg-background p-4">
                  <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-foreground/45">Command Input</div>
                  <div className="text-sm leading-relaxed text-foreground/80">
                    CEO Command: <span className="font-medium text-[hsl(var(--trust-blue-ink))]">“Process $5M Procurement Invoice #AZ123”.</span>
                  </div>
                </div>
              </div>
            </article>

            <article className={`${stageCardClass} p-5 md:p-6 xl:col-span-3`}>
              <div className="mb-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/45">Stage 2</div>
                <h2 className="mt-2 text-2xl font-light text-[hsl(var(--trust-blue-ink))]">The Gaping Hole</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/55">Permission isn’t sanity</p>
              </div>

              <div className="relative rounded-lg border border-border bg-[hsl(var(--trust-gray-soft))] p-4 md:p-5">
                <div className="flex items-center gap-3 rounded-lg border border-[hsl(var(--trust-gray)/0.15)] bg-background px-4 py-3">
                  <Lock className="h-5 w-5 text-foreground/60" strokeWidth={1.6} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-foreground/45">Legacy Security</div>
                    <div className="text-sm font-medium text-foreground/82">API Key &amp; NeMo Boundaries</div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 text-[hsl(var(--trust-blue))]">
                  <div className="h-px flex-1 bg-[hsl(var(--trust-blue)/0.25)]" />
                  <Fingerprint className="h-5 w-5" strokeWidth={1.6} />
                  <div className="h-px flex-1 bg-[hsl(var(--trust-blue)/0.25)]" />
                </div>

                <div className="mt-5 rounded-lg border border-[hsl(var(--trust-red)/0.22)] bg-[hsl(var(--trust-red-soft))] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[hsl(var(--trust-red))]">
                    <TriangleAlert className="h-5 w-5" strokeWidth={1.8} />
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em]">Hallucination / Rogue Action</div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/82">
                    Static API keys only prove <span className="font-medium">IDENTITY</span>, not <span className="font-medium">SANITY</span>. Permission does not equal trustworthiness.
                  </p>
                </div>

                <svg className="mt-5 h-20 w-full" viewBox="0 0 360 96" fill="none" aria-hidden="true">
                  <path d="M8 44H140" stroke="hsl(var(--trust-blue) / 0.55)" strokeWidth="2" strokeDasharray="6 6" />
                  <rect x="142" y="24" width="76" height="40" rx="8" fill="hsl(var(--background))" stroke="hsl(var(--trust-gray) / 0.25)" />
                  <path d="M218 44H352" stroke="hsl(var(--trust-blue) / 0.55)" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M16 80C68 80 82 24 132 24C182 24 190 76 232 76C274 76 292 18 344 18" stroke="hsl(var(--trust-red))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </article>

            <article className={`${stageCardClass} p-5 md:p-6 xl:col-span-3`}>
              <div className="mb-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/45">Stage 3</div>
                <h2 className="mt-2 text-2xl font-light text-[hsl(var(--trust-blue-ink))]">The AMAI Oracle</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/55">The how</p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-[hsl(var(--trust-blue)/0.18)] bg-[hsl(var(--trust-blue-soft))] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-[hsl(var(--trust-blue))]" strokeWidth={1.8} />
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--trust-blue))]">AMAI SDK</div>
                  </div>
                  <div className="text-sm font-medium text-[hsl(var(--trust-blue-ink))]">Watching intent</div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">Capture telemetry upstream before execution and write to the Immutable Ledger.</p>
                </div>

                <div className="rounded-lg border border-border bg-background p-4">
                  <div className="mb-2 flex items-center gap-2 text-foreground/70">
                    <Database className="h-4 w-4" strokeWidth={1.8} />
                    <div className="text-[11px] uppercase tracking-[0.18em]">Immutable Ledger</div>
                  </div>
                  <div className="text-sm leading-relaxed text-foreground/78">Intent, context, sequence, and execution signals are recorded for deterministic scoring and auditability.</div>
                </div>

                <div className="rounded-lg border border-[hsl(var(--trust-blue)/0.22)] bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--trust-blue-soft)))] p-4 md:p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[hsl(var(--trust-blue)/0.18)] bg-background">
                        <img src={amaiLogo} alt="AMAI logo" className="h-6 w-auto opacity-90" />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/45">TARI Engine</div>
                        <div className="text-base font-medium text-[hsl(var(--trust-blue-ink))]">Real-Time TARI Score</div>
                      </div>
                    </div>
                    <Badge tone="red">400 — Compromised</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm">
                      <span className="text-foreground/72">Instruction anomaly</span>
                      <span className="font-medium text-[hsl(var(--trust-red))]">High</span>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm">
                      <span className="text-foreground/72">Context mismatch</span>
                      <span className="font-medium text-[hsl(var(--trust-red))]">Detected</span>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm">
                      <span className="text-foreground/72">Policy conformance</span>
                      <span className="font-medium text-[hsl(var(--trust-gray))]">Degraded</span>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg border border-[hsl(var(--trust-blue)/0.18)] bg-[hsl(var(--trust-blue-soft))] px-4 py-3">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--trust-blue))]">Oracle Gateway</div>
                    <div className="mt-1 text-sm font-medium text-[hsl(var(--trust-blue-ink))]">AMAI ORACLE INTERCEPTOR</div>
                  </div>
                </div>
              </div>
            </article>

            <article className={`${stageCardClass} p-5 md:p-6 xl:col-span-3`}>
              <div className="mb-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/45">Stage 4</div>
                <h2 className="mt-2 text-2xl font-light text-[hsl(var(--trust-blue-ink))]">The Kill-Switch</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/55">The now what</p>
              </div>

              <div className="rounded-lg border border-[hsl(var(--trust-blue)/0.18)] bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--trust-blue-soft)))] p-4 md:p-5">
                <div className="mb-4 flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                  <Shield className="h-5 w-5 text-[hsl(var(--trust-blue))]" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/45">Query</div>
                    <div className="text-sm font-medium text-foreground/82">Corporate firewall or smart contract queries the Oracle before capital moves.</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-[hsl(var(--trust-green)/0.22)] bg-[hsl(var(--trust-green-soft))] p-4">
                    <div className="mb-3 flex items-center gap-2 text-[hsl(var(--trust-green))]">
                      <CheckCircle2 className="h-5 w-5" strokeWidth={1.8} />
                      <div className="text-[11px] uppercase tracking-[0.18em]">Path A — Verified</div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-[hsl(var(--trust-green)/0.18)] bg-background px-3 py-3">
                      <Wallet className="h-5 w-5 text-[hsl(var(--trust-green))]" strokeWidth={1.8} />
                      <div className="text-sm font-medium text-foreground/84">CORPORATE TREASURY SMART CONTRACT (Arc Network/Base)</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/82">
                      <span className="font-medium text-[hsl(var(--trust-green))]">TARI Score &gt; 750</span> (Verified Sanity) — GREEN LIGHT, CAPITAL UNLOCKED.
                    </p>
                  </div>

                  <div className="rounded-lg border border-[hsl(var(--trust-red)/0.22)] bg-[hsl(var(--trust-red-soft))] p-4">
                    <div className="mb-3 flex items-center gap-2 text-[hsl(var(--trust-red))]">
                      <XCircle className="h-5 w-5" strokeWidth={1.8} />
                      <div className="text-[11px] uppercase tracking-[0.18em]">Path B — Denied</div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-[hsl(var(--trust-red)/0.18)] bg-background px-3 py-3">
                      <Network className="h-5 w-5 text-[hsl(var(--trust-red))]" strokeWidth={1.8} />
                      <div className="text-sm font-medium text-foreground/84">ACTION DENIED / KILLED BY ORACLE</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/82">
                      <span className="font-medium text-[hsl(var(--trust-red))]">TARI Score &lt; 750</span> (Compromised) — RED LIGHT, CONNECTION KILLED, CATASTROPHE AVOIDED.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-[linear-gradient(90deg,hsl(var(--black))_0%,hsl(var(--gray-900))_55%,hsl(var(--black))_100%)] px-6 py-5 text-white shadow-[0_24px_70px_-36px_hsl(var(--black)/0.55)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">Diagram Key Principle</div>
                <p className="mt-2 max-w-4xl text-lg font-light leading-relaxed md:text-xl">
                  AMAI IS THE “SSL OF AI”. WE ARE THE PROTOCOL OF TRUST. Scores block rogue agents from touching capital.
                </p>
              </div>
              <Building2 className="h-10 w-10 shrink-0 text-white/70" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trust;