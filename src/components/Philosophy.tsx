const principles = [
  {
    title: "User agency first",
    desc: "The product should ask before it assumes and explain before it denies.",
  },
  {
    title: "Transparent limits",
    desc: "When Linux cannot enforce a capability strongly, the interface says so directly.",
  },
  {
    title: "Privacy by default",
    desc: "There is no telemetry pipeline, cloud sync, or hidden analytics layer behind policy data.",
  },
  {
    title: "OS-native implementation",
    desc: "The system leans on documented desktop and Linux primitives instead of brittle hacks.",
  },
  {
    title: "Memory-safe core",
    desc: "Security-critical parts are written in Rust to reduce entire classes of implementation bugs.",
  },
];

const Philosophy = () => (
  <section className="site-section">
    <div className="section-frame">
      <span className="section-kicker">Philosophy</span>
      <h2 className="section-title max-w-3xl">
        The visual design is softer than a typical security product, but the operating principles
        stay strict.
      </h2>
      <p className="section-copy">
        AppFence is built around clear consent, honest guarantees, and low-trust defaults without
        turning the interface into a wall of warnings.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {principles.map((principle, index) => (
          <article
            key={principle.title}
            className={`panel h-full p-6 sm:p-7 ${index === 0 ? "xl:col-span-2" : ""}`}
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-primary">0{index + 1}</p>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-foreground">
              {principle.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{principle.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Philosophy;
