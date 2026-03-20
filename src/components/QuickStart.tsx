const code = `# build workspace
cargo build --workspace

# run setup helpers
./scripts/setup-dev.sh

# launch an app with enforcement
apf-run firefox`;

const QuickStart = () => (
  <section id="quickstart" className="px-6 py-24 max-w-2xl mx-auto">
    <h2 className="text-2xl font-semibold text-foreground mb-8 tracking-tight">Quick start</h2>
    <div className="bg-card border border-border rounded-md overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">bash</span>
      </div>
      <pre className="px-5 py-5 text-sm font-mono text-foreground leading-relaxed overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  </section>
);

export default QuickStart;
