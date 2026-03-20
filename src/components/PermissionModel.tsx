import { Wifi, FolderLock, Mic, Monitor, Clipboard, Clock, Power, Play } from "lucide-react";

const permissions = [
  {
    icon: Wifi,
    name: "Network",
    levels: ["None", "LAN only", "Internet"],
    enforcement: "Strong",
  },
  {
    icon: FolderLock,
    name: "Filesystem",
    levels: ["Per-directory", "Read-only", "Read-write", "Deny"],
    enforcement: "Strong",
  },
  {
    icon: Mic,
    name: "Devices",
    levels: ["Microphone", "Camera", "Screen", "USB"],
    enforcement: "Medium",
  },
  {
    icon: Clipboard,
    name: "Clipboard",
    levels: ["Allow", "Deny"],
    enforcement: "Medium",
  },
  {
    icon: Clock,
    name: "Background",
    levels: ["Allow", "Deny"],
    enforcement: "Medium",
  },
  {
    icon: Power,
    name: "Autostart",
    levels: ["Allow", "Deny"],
    enforcement: "Weak",
  },
];

const strengthColor: Record<string, string> = {
  Strong: "text-primary",
  Medium: "text-yellow-400",
  Weak: "text-muted-foreground",
};

const PermissionModel = () => (
  <section id="permissions" className="px-6 py-24 max-w-3xl mx-auto">
    <h2 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">Permission model</h2>
    <p className="text-sm text-muted-foreground mb-10 leading-relaxed text-pretty max-w-xl">
      Each resource type has its own enforcement level. <strong className="text-foreground">Strong</strong> uses
      sandbox + namespace + cgroup. <strong className="text-foreground">Medium</strong> uses OS-level controls.{" "}
      <strong className="text-foreground">Weak</strong> is audit and warning only.
    </p>

    <div className="grid sm:grid-cols-2 gap-4">
      {permissions.map((p) => (
        <div
          key={p.name}
          className="group border border-border rounded-lg px-5 py-4 bg-card hover:border-primary/20 transition-colors duration-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <p.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-sm font-medium text-foreground">{p.name}</span>
            </div>
            <span className={`text-xs font-mono ${strengthColor[p.enforcement]}`}>
              {p.enforcement}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {p.levels.map((level) => (
              <span
                key={level}
                className="text-xs text-muted-foreground bg-secondary/60 rounded px-2 py-0.5"
              >
                {level}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Prompt model note */}
    <div className="mt-8 border border-border rounded-lg px-5 py-4 bg-card">
      <div className="flex items-start gap-3">
        <Play className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
        <div>
          <p className="text-sm font-medium text-foreground mb-1">Prompt-driven decisions</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Allow once, allow always, deny once, deny always, or allow for a limited duration.
            Each prompt is bound to a unique request ID and PID — no shared tokens, no replay.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PermissionModel;
