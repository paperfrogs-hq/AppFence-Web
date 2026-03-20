const code = `# build workspace
cargo build --workspace

# run setup helpers
./scripts/setup-dev.sh

# launch an app with enforcement
apf-run firefox`;

const notes = [
  "Build the Rust workspace and supporting tools.",
  "Prepare the local environment with the helper script.",
  "Launch an application through AppFence to trigger policy evaluation.",
];

const QuickStart = () => (
  <section id="quickstart" className="site-section">
    <div className="section-frame grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <div>
        <span className="section-kicker">Quick Start</span>
        <h2 className="section-title max-w-2xl">
          The shortest path is still terminal-first, because the product is early.
        </h2>
        <p className="section-copy">
          AppFence is not shipping as a polished consumer installer yet. The current workflow is
          aimed at builders and testers who want to see the core mechanics in action.
        </p>

        <div className="panel mt-10 overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border/70 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-accent/70" />
            <span className="h-3 w-3 rounded-full bg-primary/60" />
            <span className="ml-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              bash
            </span>
          </div>
          <pre className="overflow-x-auto px-5 py-5 text-sm leading-7 text-foreground">
            <code>{code}</code>
          </pre>
        </div>
      </div>

      <aside className="panel p-6 sm:p-8">
        <p className="mono-pill border-primary/20 bg-primary/10 text-primary">What Happens</p>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-foreground">
          The goal is to validate the permission loop, not just compile the repo.
        </h3>
        <div className="mt-8 space-y-4">
          {notes.map((note, index) => (
            <div key={note} className="panel-muted flex items-start gap-4 rounded-[1.5rem] p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold text-primary">
                0{index + 1}
              </span>
              <p className="text-sm leading-7 text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  </section>
);

export default QuickStart;
