const risks = [
  { category: "Memory safety", level: "Very Low", strategy: "Rust for all security-critical code" },
  { category: "Privilege escalation", level: "Low", strategy: "Minimal daemon, strict DBus, separated processes" },
  { category: "Prompt abuse", level: "Low–Med", strategy: "Secure prompt model, rate limiting, expiring decisions" },
  { category: "Enforcement gaps", level: "Medium", strategy: "Transparent strength disclosure, no false claims" },
  { category: "Legal exposure", level: "Low", strategy: "OS-supported APIs only, no binary modification" },
  { category: "Privacy violations", level: "Low", strategy: "Local-only data, no telemetry, redacted logs" },
];

const levelColor = (level: string) => {
  if (level.includes("Very Low")) return "text-primary";
  if (level.includes("Low")) return "text-primary/80";
  return "text-yellow-400";
};

const ThreatModel = () => (
  <section className="px-6 py-24 max-w-2xl mx-auto">
    <h2 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">Threat model</h2>
    <p className="text-sm text-muted-foreground mb-8 leading-relaxed text-pretty">
      AppFence is not a malware sandbox or MAC replacement. It orchestrates policy
      using documented OS primitives and is transparent about enforcement limits.
    </p>

    <div className="border border-border rounded-md overflow-hidden">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-0 text-sm">
        {/* Header */}
        <div className="px-5 py-3 border-b border-border font-medium text-muted-foreground">Risk</div>
        <div className="px-5 py-3 border-b border-border font-medium text-muted-foreground text-center">Level</div>
        <div className="px-5 py-3 border-b border-border font-medium text-muted-foreground">Mitigation</div>

        {risks.map((r, i) => (
          <div key={r.category} className="contents">
            <div className={`px-5 py-3.5 text-foreground ${i !== risks.length - 1 ? "border-b border-border" : ""}`}>
              {r.category}
            </div>
            <div className={`px-5 py-3.5 text-center font-mono text-xs ${levelColor(r.level)} ${i !== risks.length - 1 ? "border-b border-border" : ""}`}>
              {r.level}
            </div>
            <div className={`px-5 py-3.5 text-muted-foreground ${i !== risks.length - 1 ? "border-b border-border" : ""}`}>
              {r.strategy}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreatModel;
