import { Clipboard, Clock, FolderLock, Mic, Play, Power, Wifi } from "lucide-react";

const permissions = [
  {
    icon: Wifi,
    name: "Network",
    levels: ["None", "LAN only", "Internet"],
    enforcement: "Strong",
    note: "Network scope can be tightened before the app starts talking.",
  },
  {
    icon: FolderLock,
    name: "Filesystem",
    levels: ["Per-directory", "Read-only", "Read-write", "Deny"],
    enforcement: "Strong",
    note: "Rules can be narrowed to directories instead of granting the whole home folder.",
  },
  {
    icon: Mic,
    name: "Devices",
    levels: ["Microphone", "Camera", "Screen", "USB"],
    enforcement: "Medium",
    note: "Desktop-session controls vary, so AppFence states the strength honestly.",
  },
  {
    icon: Clipboard,
    name: "Clipboard",
    levels: ["Allow", "Deny"],
    enforcement: "Medium",
    note: "Clipboard access is visible and reviewable instead of silently assumed.",
  },
  {
    icon: Clock,
    name: "Background",
    levels: ["Allow", "Deny"],
    enforcement: "Medium",
    note: "Background behavior is tracked even when hard enforcement is platform-dependent.",
  },
  {
    icon: Power,
    name: "Autostart",
    levels: ["Allow", "Deny"],
    enforcement: "Weak",
    note: "When the OS does not offer strong controls, the UI communicates that limit directly.",
  },
];

const strengthClasses: Record<string, string> = {
  Strong: "border-primary/20 bg-primary/10 text-primary",
  Medium: "border-accent/25 bg-accent/10 text-[#b55b1f]",
  Weak: "border-border bg-secondary text-muted-foreground",
};

const strengths = [
  {
    level: "Strong",
    detail: "sandboxed launch, namespace policy, and explicit resource scoping",
  },
  {
    level: "Medium",
    detail: "desktop-session and OS-level controls with partial guarantees",
  },
  {
    level: "Weak",
    detail: "audit, warnings, or policy intent where the platform lacks hard enforcement",
  },
];

const PermissionModel = () => (
  <section id="permissions" className="site-section">
    <div className="section-frame">
      <span className="section-kicker">Permission Model</span>
      <h2 className="section-title max-w-3xl">
        AppFence does not flatten every resource into a single yes or no.
      </h2>
      <p className="section-copy">
        Each capability gets its own scope, strength, and review path. That separation matters
        because Linux can enforce some boundaries very well and others only partially.
      </p>

      <div className="mt-12 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <aside className="panel p-6 sm:p-8">
          <p className="mono-pill border-primary/20 bg-primary/10 text-primary">
            Enforcement Tiers
          </p>
          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-foreground">
            The UI is explicit about what is guaranteed and what is merely observed.
          </h3>

          <div className="mt-8 space-y-4">
            {strengths.map((strength) => (
              <div key={strength.level} className="panel-muted rounded-[1.5rem] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${strengthClasses[strength.level]}`}
                  >
                    {strength.level}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{strength.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-primary/20 bg-primary/10 p-5">
            <div className="flex items-start gap-3">
              <Play className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-semibold text-foreground">Prompt-driven decisions</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Allow once, allow always, deny once, deny always, or grant for a limited time.
                  Every prompt stays bound to the requesting process instead of shared global state.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="grid gap-4 md:grid-cols-2">
          {permissions.map((permission) => (
            <article key={permission.name} className="panel h-full p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <permission.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                      {permission.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {permission.enforcement} enforcement
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${strengthClasses[permission.enforcement]}`}
                >
                  {permission.enforcement}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {permission.levels.map((level) => (
                  <span
                    key={level}
                    className="rounded-full border border-border/70 bg-secondary/80 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {level}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">{permission.note}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PermissionModel;
