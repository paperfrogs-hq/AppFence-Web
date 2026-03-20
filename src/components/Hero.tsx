import {
  ArrowUpRight,
  Camera,
  ChevronDown,
  FolderLock,
  Github,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Features", href: "#features" },
  { label: "Permissions", href: "#permissions" },
  { label: "Architecture", href: "#architecture" },
  { label: "Setup", href: "#setup" },
];

const outcomes = [
  {
    title: "Runtime prompts",
    detail: "Every access request resolves in context, not in a hidden settings panel.",
  },
  {
    title: "Per-app policy",
    detail: "Rules stay scoped to the app and the resource being requested.",
  },
  {
    title: "Local audit trail",
    detail: "Decisions and access history remain on the machine, never in the cloud.",
  },
];

const requestItems = [
  { icon: FolderLock, label: "~/Documents/contracts", mode: "Ask" },
  { icon: Wifi, label: "Outbound network", mode: "Allow once" },
  { icon: Camera, label: "Camera session", mode: "Deny" },
];

const Hero = () => (
  <section className="site-section pb-16 pt-8 md:pb-24 md:pt-10">
    <div className="section-frame">
      <nav className="mb-10 flex items-center justify-between gap-4 rounded-full border border-border/70 bg-background/85 px-4 py-3 shadow-[0_12px_30px_-24px_hsl(var(--foreground)/0.22)] backdrop-blur sm:px-6">
        <a href="/" className="text-sm font-semibold tracking-[0.2em] text-foreground">
          APPFENCE
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/paperfrogs-hq/AppFence"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary"
        >
          <Github className="h-4 w-4" strokeWidth={1.8} />
          Repository
        </a>
      </nav>

      <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div className="pt-6 md:pt-12">
          <span className="section-kicker">Linux Permission Layer</span>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
            A calmer security model for a noisy desktop.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            AppFence brings explicit prompts, per-app rules, and local auditing to Linux desktop
            software that normally runs with silent, blanket access.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quickstart"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:translate-y-[-1px] hover:brightness-110"
            >
              Quick Start
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/30 hover:text-primary"
            >
              Compare Approaches
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="mono-pill">Apache-2.0</span>
            <span className="mono-pill">Rust 1.75+</span>
            <span className="mono-pill">Wayland-first</span>
            <span className="mono-pill">Zero telemetry</span>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item.title} className="panel-muted h-full rounded-[1.5rem] p-5">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pt-8">
          <div
            aria-hidden
            className="absolute inset-x-10 top-12 h-40 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="panel-dark relative overflow-hidden p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/55">
                  Session Preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                  Runtime decision flow
                </h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
                firefox.desktop
              </span>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#8af0c5]" strokeWidth={1.8} />
                <div>
                  <p className="text-sm font-semibold">Prompt queue is active</p>
                  <p className="mt-1 text-sm leading-6 text-primary-foreground/70">
                    The app requested access to three resources. Decisions can be temporary,
                    persistent, or denied with audit notes.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {requestItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 text-[#8af0c5]" strokeWidth={1.8} />
                      <span className="text-sm text-primary-foreground/90">{item.label}</span>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-primary-foreground/65">
                      {item.mode}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/55">
                  Policy Baseline
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-semibold">Prompt model</p>
                    <p className="mt-1 text-sm text-primary-foreground/65">
                      allow once, allow always, deny once, deny always, timed grant
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Enforcement</p>
                    <p className="mt-1 text-sm text-primary-foreground/65">
                      namespaces, bubblewrap, desktop-session controls, and logged decisions
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#8af0c5]/8 p-5">
                <div className="flex items-center gap-3">
                  <Terminal className="h-4 w-4 text-[#8af0c5]" strokeWidth={1.8} />
                  <p className="text-sm font-semibold">Audit excerpt</p>
                </div>
                <pre className="mt-4 overflow-x-auto text-sm leading-7 text-primary-foreground/78">
                  <code>{`14:02 prompt fs.read ~/Documents/contracts
14:02 grant allow-once pid=4281
14:04 prompt network.connect api.openai.com
14:04 grant deny pid=4281`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center lg:mt-16">
        <a
          href="#problem"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Explore the model
          <ChevronDown className="h-4 w-4 animate-bounce" style={{ animationDuration: "2.4s" }} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
