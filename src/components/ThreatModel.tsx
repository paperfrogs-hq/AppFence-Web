const boundaries = [
  "Not a malware sandbox or mandatory access control replacement.",
  "Not a claim that every Linux capability can be strongly enforced.",
  "Not a cloud-managed security product collecting machine activity.",
];

const risks = [
  { category: "Memory safety", level: "Very Low", strategy: "Rust for the security-critical path." },
  {
    category: "Privilege escalation",
    level: "Low",
    strategy: "Minimal daemon surface, separated processes, strict coordination.",
  },
  {
    category: "Prompt abuse",
    level: "Low-Med",
    strategy: "Scoped requests, expiring decisions, and rate limiting.",
  },
  {
    category: "Enforcement gaps",
    level: "Medium",
    strategy: "Tiered guarantees with no hidden claims about platform limits.",
  },
  {
    category: "Legal exposure",
    level: "Low",
    strategy: "Documented OS APIs only, no binary patching or invasive instrumentation.",
  },
  {
    category: "Privacy violations",
    level: "Low",
    strategy: "Local-only policy and audit storage with no telemetry channel.",
  },
];

const levelClasses = (level: string) => {
  if (level === "Very Low") return "border-primary/20 bg-primary/10 text-primary";
  if (level === "Medium") return "border-accent/25 bg-accent/10 text-[#b55b1f]";
  return "border-border bg-secondary text-muted-foreground";
};

const ThreatModel = () => (
  <section id="threat-model" className="site-section">
    <div className="section-frame">
      <span className="section-kicker">Threat Model</span>
      <h2 className="section-title max-w-3xl">
        The security story is only useful if the boundaries are visible.
      </h2>
      <p className="section-copy">
        AppFence is opinionated about user control, but it is equally opinionated about saying
        where that control ends.
      </p>

      <div className="mt-12 grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
        <aside className="panel p-6 sm:p-8">
          <p className="mono-pill border-primary/20 bg-primary/10 text-primary">Boundaries</p>
          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-foreground">
            Honest scope beats overstated guarantees.
          </h3>

          <div className="mt-8 space-y-3">
            {boundaries.map((boundary) => (
              <div key={boundary} className="panel-muted rounded-[1.5rem] p-4">
                <p className="text-sm leading-7 text-muted-foreground">{boundary}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="grid gap-4 md:grid-cols-2">
          {risks.map((risk) => (
            <article key={risk.category} className="panel h-full p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                  {risk.category}
                </h3>
                <span
                  className={`rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${levelClasses(risk.level)}`}
                >
                  {risk.level}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{risk.strategy}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ThreatModel;
