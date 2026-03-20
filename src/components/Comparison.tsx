const rows = [
  { feature: "Works for all apps", appfence: "Yes", flatpak: "No", firejail: "Yes" },
  { feature: "Permission prompts", appfence: "Yes", flatpak: "No", firejail: "No" },
  { feature: "Network control", appfence: "Yes", flatpak: "Partial", firejail: "Partial" },
  { feature: "Filesystem granularity", appfence: "Yes", flatpak: "Yes", firejail: "Yes" },
  { feature: "Desktop integration", appfence: "Yes", flatpak: "Partial", firejail: "Limited" },
];

const cellTone = (value: string, highlight = false) => {
  if (highlight) return "text-primary";
  if (value === "Yes") return "text-foreground";
  return "text-muted-foreground";
};

const Comparison = () => (
  <section id="comparison" className="site-section">
    <div className="section-frame">
      <span className="section-kicker">Comparison</span>
      <h2 className="section-title max-w-3xl">
        AppFence is trying to be a permission layer, not just another sandbox toggle.
      </h2>
      <p className="section-copy">
        Flatpak and Firejail solve adjacent problems. AppFence focuses on runtime consent,
        app-specific policy, and a user-facing model that works across native desktop software.
      </p>

      <div className="panel mt-12 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-secondary/70">
              <tr>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Feature</th>
                <th className="bg-primary/8 px-6 py-4 font-semibold text-primary">AppFence</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Flatpak</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Firejail</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.feature} className={index < rows.length - 1 ? "border-b border-border/70" : ""}>
                  <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                  <td className="bg-primary/8 px-6 py-4">
                    <span className={`font-semibold ${cellTone(row.appfence, true)}`}>{row.appfence}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cellTone(row.flatpak)}>{row.flatpak}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cellTone(row.firejail)}>{row.firejail}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default Comparison;
