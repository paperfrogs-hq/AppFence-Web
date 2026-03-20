const components = [
  { name: "apfd", role: "System daemon that evaluates policy and coordinates enforcement." },
  { name: "apf-agent", role: "Session agent that surfaces prompts and records user decisions." },
  { name: "apf-run", role: "Launcher that wraps applications with sandbox and namespace setup." },
  { name: "apf-policy", role: "Policy engine that persists app-specific rules and scopes." },
  { name: "apf-ui", role: "Dashboard for reviewing permissions, prompts, and audit logs." },
];

const stages = ["Launch", "Evaluate", "Prompt", "Enforce", "Audit"];

const Architecture = () => (
  <section id="architecture" className="site-section">
    <div className="section-frame">
      <span className="section-kicker">Architecture</span>
      <h2 className="section-title max-w-3xl">
        The system is split so prompting, policy, launching, and review are not one opaque binary.
      </h2>
      <p className="section-copy">
        This keeps the trust surface smaller and makes the product easier to reason about,
        especially when enforcement strength differs between resource types.
      </p>

      <div className="panel mt-12 p-6 sm:p-8">
        <div className="grid gap-4 lg:grid-cols-5">
          {components.map((component, index) => (
            <article key={component.name} className="panel-muted h-full rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                0{index + 1}
              </p>
              <code className="mt-4 block text-lg font-semibold text-foreground">
                {component.name}
              </code>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{component.role}</p>
            </article>
          ))}
        </div>

        <div className="soft-divider my-8" />

        <div className="grid gap-3 md:grid-cols-5">
          {stages.map((stage) => (
            <div
              key={stage}
              className="rounded-full border border-border/70 bg-background/70 px-4 py-3 text-center text-sm font-medium text-foreground"
            >
              {stage}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Architecture;
