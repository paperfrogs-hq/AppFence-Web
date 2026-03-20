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

import { useState } from "react";

const SetupInstructions = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="setup" className="px-6 py-24 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-foreground mb-8 tracking-tight">Setup</h2>

      <div className="border border-border rounded-md overflow-hidden">
        {/* Distro tabs */}
        <div className="flex border-b border-border">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`px-5 py-3 text-sm font-medium transition-colors duration-150 ${
                active === i
                  ? "text-primary bg-secondary/50"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Install command */}
        <div className="px-5 py-4 border-b border-border">
          <p className="text-xs text-muted-foreground mb-2 font-mono">1. Install dependencies</p>
          <pre className="text-sm font-mono text-foreground overflow-x-auto">
            <code>{tabs[active].install}</code>
          </pre>
        </div>

        {/* Common steps */}
        <div className="px-5 py-4">
          <p className="text-xs text-muted-foreground mb-2 font-mono">2. Build & run</p>
          <pre className="text-sm font-mono text-foreground leading-relaxed overflow-x-auto">
            <code>{commonSteps}</code>
          </pre>
        </div>
      </div>

      {/* macOS note */}
      <div className="mt-6 px-5 py-4 border border-border rounded-md bg-card">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">macOS</span> — Experimental. Linux-specific features
          (namespaces, cgroups, systemd, DBus) are unavailable. Only core components may build.
        </p>
      </div>
    </section>
  );
};

export default SetupInstructions;
