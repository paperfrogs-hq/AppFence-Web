import { Shield, Github, ChevronDown } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
    </div>

    <div className="relative z-10 flex flex-col items-center">
      {/* Centered icon removed */}

      <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] max-w-3xl mb-6">
        Stop Apps from Snooping. Start Controlling.
      </h1>

      <p className="text-pretty text-muted-foreground text-lg sm:text-xl max-w-md mb-12 leading-relaxed">
        AppFence gives you runtime prompts and fine-grained permissions for every app on your Linux desktop.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://github.com/paperfrogs-hq/AppFence"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium text-sm tracking-wide hover:brightness-110 active:scale-[0.97] transition-all duration-150 shadow-[0_0_24px_hsl(var(--primary)/0.15)]"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
        <a
          href="#quickstart"
          className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-medium text-sm tracking-wide hover:bg-secondary hover:border-secondary active:scale-[0.97] transition-all duration-150"
        >
          Quick Start
        </a>
      </div>

      <div className="flex flex-wrap gap-3 mt-14 text-xs text-muted-foreground font-mono">
        <span className="border border-border rounded-full px-3.5 py-1.5">Apache-2.0</span>
        <span className="border border-border rounded-full px-3.5 py-1.5">Rust 1.75+</span>
        <span className="border border-border rounded-full px-3.5 py-1.5">Linux · Wayland</span>
      </div>
    </div>

    {/* Scroll indicator */}
    <a href="#problem" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300">
      <ChevronDown className="w-5 h-5 animate-bounce" style={{ animationDuration: "2s" }} />
    </a>
  </section>
);

export default Hero;
