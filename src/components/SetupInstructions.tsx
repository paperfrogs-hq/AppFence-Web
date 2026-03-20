import { useState } from "react";

const tabs = [
  {
    label: "Ubuntu",
    install: "sudo apt install libsystemd-dev libsqlite3-dev bubblewrap",
  },
  {
    label: "Fedora",
    install: "sudo dnf install systemd-devel sqlite-devel bubblewrap",
  },
  {
    label: "Arch",
    install: "sudo pacman -S systemd sqlite bubblewrap",
  },
];

const commonSteps = `# build
cargo build --workspace

# dev setup
./scripts/setup-dev.sh

# install & start daemon
sudo ./scripts/install-daemon.sh
sudo systemctl start apf-daemon
sudo systemctl enable apf-daemon`;

const setupNotes = [
  "Linux desktop target with Wayland-era assumptions.",
  "bubblewrap, systemd, and SQLite expected in the environment.",
  "macOS remains experimental and cannot offer the same enforcement model.",
];

const SetupInstructions = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="setup" className="site-section">
      <div className="section-frame">
        <span className="section-kicker">Setup</span>
        <h2 className="section-title max-w-3xl">
          Installation is explicit too: choose a distro, install the deps, then start the daemon.
        </h2>
        <p className="section-copy">
          The current developer setup is intentionally transparent so contributors can see the
          moving parts instead of relying on a black-box installer.
        </p>

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <aside className="panel p-6 sm:p-8">
            <p className="mono-pill border-primary/20 bg-primary/10 text-primary">Platform Notes</p>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Built for Linux desktops first.
            </h3>

            <div className="mt-8 space-y-4">
              {setupNotes.map((note) => (
                <div key={note} className="panel-muted rounded-[1.5rem] p-4">
                  <p className="text-sm leading-7 text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-accent/20 bg-accent/10 p-5">
              <p className="text-sm leading-7 text-[#8a4b1f]">
                <span className="font-semibold text-foreground">macOS:</span> core pieces may
                build, but Linux-specific controls such as namespaces, cgroups, systemd, and DBus
                integration are unavailable.
              </p>
            </div>
          </aside>

          <div className="panel overflow-hidden p-0">
            <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/45 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                setup
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-secondary/80 p-2">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`min-w-0 rounded-xl px-3 py-2.5 text-center text-sm font-semibold transition-colors ${
                      active === index
                        ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-14px_hsl(var(--foreground)/0.4)]"
                        : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-[1.4rem] border border-border/70 bg-background/80 p-5">
                  <p className="mono-pill">1. Install dependencies</p>
                  <pre className="mt-5 overflow-x-auto rounded-xl border border-foreground/10 bg-foreground p-4 text-sm leading-7 text-primary-foreground whitespace-pre-wrap break-words">
                    <code>{tabs[active].install}</code>
                  </pre>
                </div>

                <div className="rounded-[1.4rem] border border-border/70 bg-background/80 p-5">
                  <p className="mono-pill">2. Build and enable services</p>
                  <pre className="mt-5 min-h-[18rem] overflow-x-auto rounded-xl border border-foreground/10 bg-foreground p-4 text-sm leading-7 text-primary-foreground whitespace-pre-wrap break-words">
                    <code>{commonSteps}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupInstructions;
