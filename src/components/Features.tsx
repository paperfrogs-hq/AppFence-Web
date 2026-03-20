import { Terminal, FolderLock, Wifi, Eye } from "lucide-react";

const items = [
  { icon: Terminal, title: "Runtime prompts", desc: "Filesystem, network, devices, clipboard — prompted at access time." },
  { icon: FolderLock, title: "Per-app policies", desc: "Allow, deny, or ask — configured per application." },
  { icon: Wifi, title: "Namespace enforcement", desc: "Linux namespaces, cgroups, and bubblewrap sandboxing." },
  { icon: Eye, title: "Local auditing", desc: "Full visibility into what apps access. No telemetry, ever." },
];

const Features = () => (
  <section className="px-6 py-24 max-w-3xl mx-auto">
    <h2 className="text-2xl font-semibold text-foreground mb-12 tracking-tight">What it does</h2>
    <div className="grid sm:grid-cols-2 gap-8">
      {items.map((item) => (
        <div key={item.title} className="group">
          <item.icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
          <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
