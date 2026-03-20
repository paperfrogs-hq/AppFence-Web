import { AlertTriangle, ArrowUpRight } from "lucide-react";

const SecurityBanner = () => (
  <div className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="mono-pill border-primary/20 bg-primary/10 text-primary">
          Alpha Preview
        </span>
        <p className="flex items-center gap-2 text-muted-foreground">
          <AlertTriangle className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
          Security audit pending. Use on non-critical Linux systems first.
        </p>
      </div>

      <a
        href="#setup"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
      >
        Setup guide
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
      </a>
    </div>
  </div>
);

export default SecurityBanner;
