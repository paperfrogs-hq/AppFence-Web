const components = [
  { name: "apfd", role: "System daemon — evaluates policies, coordinates enforcement" },
  { name: "apf-agent", role: "Session agent — surfaces prompts, collects decisions" },
  { name: "apf-run", role: "Launcher — wraps app startup with namespaces/sandboxing" },
  { name: "apf-policy", role: "Policy engine — stores and evaluates per-app rules" },
  { name: "apf-ui", role: "Dashboard — manage permissions, review audit logs" },
];

const Architecture = () => (
  <section className="px-6 py-24 max-w-2xl mx-auto">
    <h2 className="text-2xl font-semibold text-foreground mb-8 tracking-tight">Architecture</h2>
    <div className="border border-border rounded-md overflow-hidden">
      {components.map((c, i) => (
        <div
          key={c.name}
          className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-5 py-4 ${
            i !== components.length - 1 ? "border-b border-border" : ""
          }`}
        >
          <code className="text-sm text-primary font-mono shrink-0">{c.name}</code>
          <span className="text-sm text-muted-foreground">{c.role}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Architecture;
