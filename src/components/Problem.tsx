const issues = [
  {
    index: "01",
    title: "Desktop apps default to trust",
    detail:
      "Most Linux applications inherit broad access to files, network, clipboard, camera, and microphone with no consent layer in between.",
  },
  {
    index: "02",
    title: "Existing controls are fragmented",
    detail:
      "Package sandboxes, launcher flags, and one-off desktop settings exist, but they do not form a coherent permission system people can actually operate.",
  },
  {
    index: "03",
    title: "There is little audit visibility",
    detail:
      "When an app touches something sensitive, users rarely get a prompt, a reviewable policy, or a local history of what happened.",
  },
];

const Problem = () => (
  <section id="problem" className="site-section pt-10 md:pt-16">
    <div className="section-frame grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <span className="section-kicker">The Problem</span>
        <h2 className="section-title max-w-xl">
          Linux desktops still treat application permissions as an afterthought.
        </h2>
        <p className="section-copy">
          AppFence exists because users should not have to choose between running native desktop
          software and giving it silent, unrestricted access to the machine.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {issues.map((issue) => (
          <article key={issue.index} className="panel h-full p-6 sm:p-7">
            <p className="text-sm font-semibold tracking-[0.22em] text-primary">{issue.index}</p>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-foreground">
              {issue.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{issue.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
