import { Eye, FolderLock, Terminal, Wifi } from "lucide-react";

const items = [
  {
    icon: Terminal,
    title: "Runtime prompts",
    desc: "Resource requests show up at access time, so the decision is anchored to what the app is doing now.",
  },
  {
    icon: FolderLock,
    title: "Per-app policies",
    desc: "Rules attach to an application identity instead of living in scattered shell scripts or container manifests.",
  },
  {
    icon: Wifi,
    title: "Namespace enforcement",
    desc: "AppFence combines Linux namespaces, bubblewrap, and system-level controls to back policy with actual isolation.",
  },
  {
    icon: Eye,
    title: "Local auditing",
    desc: "Every allow, deny, and prompt outcome stays visible on-device, with no telemetry pipeline attached.",
  },
];

const flow = [
  "Launch the app through AppFence.",
  "Intercept the access request at runtime.",
  "Collect a user decision with a clear scope.",
  "Persist and audit the result locally.",
];

const Features = () => (
  <section id="features" className="site-section">
    <div className="section-frame">
      <span className="section-kicker">What It Does</span>
      <h2 className="section-title max-w-3xl">
        The product is designed around one loop: ask clearly, enforce honestly, remember locally.
      </h2>
      <p className="section-copy">
        This is not a vague security dashboard. AppFence is a permission workflow wrapped around
        actual desktop application behavior.
      </p>

      <div className="mt-12 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="panel h-full p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>

        <aside className="panel p-6 sm:p-8">
          <p className="mono-pill border-primary/20 bg-primary/10 text-primary">Decision Loop</p>
          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-foreground">
            The interface should explain security instead of hiding it.
          </h3>
          <ol className="mt-8 space-y-4">
            {flow.map((step, index) => (
              <li key={step} className="panel-muted flex items-start gap-4 rounded-[1.5rem] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold text-primary">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  </section>
);

export default Features;
