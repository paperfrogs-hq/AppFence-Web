const Philosophy = () => {
  const principles = [
    { title: "User agency first", desc: "Explicit prompts and clear defaults — never silent decisions." },
    { title: "Transparent limits", desc: "State what can and cannot be enforced. No false promises." },
    { title: "Privacy by default", desc: "No telemetry, no cloud sync. Policy storage is local-only." },
    { title: "OS-native", desc: "Rely on documented Linux primitives. No kernel hacks." },
    { title: "Memory safety", desc: "Rust for all security-critical components." },
  ];

  return (
    <section className="px-6 py-24 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-foreground mb-8 tracking-tight">Philosophy</h2>
      <ul className="space-y-5">
        {principles.map((p) => (
          <li key={p.title} className="flex gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
            <div>
              <span className="text-sm font-medium text-foreground">{p.title}</span>
              <span className="text-sm text-muted-foreground ml-1.5">— {p.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Philosophy;
