import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Permissions", href: "#permissions" },
  { label: "Setup", href: "#setup" },
  { label: "GitHub", href: "https://github.com/paperfrogs-hq/AppFence", external: true },
];

const Footer = () => (
  <footer className="site-section pb-14 pt-10">
    <div className="section-frame">
      <div className="panel-muted rounded-[2rem] px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.22em] text-primary">APPFENCE</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Open permission controls for the Linux desktop.
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Apache 2.0. Built by{" "}
              <a
                href="https://paperfrogs.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary"
              >
                Paperfrogs/Open
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary"
              >
                {link.label}
                {link.external ? <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} /> : null}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
