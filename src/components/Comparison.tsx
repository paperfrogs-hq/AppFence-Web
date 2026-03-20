const rows = [
  { feature: "Works for all apps", appfence: true, flatpak: false, firejail: true },
  { feature: "Permission prompts", appfence: true, flatpak: false, firejail: false },
  { feature: "Network control", appfence: true, flatpak: "Partial", firejail: "Partial" },
  { feature: "Filesystem granularity", appfence: true, flatpak: true, firejail: true },
  { feature: "Desktop integration", appfence: true, flatpak: "Partial", firejail: "Limited" },
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (value === true) return <span className="text-primary">Yes</span>;
  if (value === false) return <span className="text-muted-foreground">No</span>;
  return <span className="text-muted-foreground">{value}</span>;
};

const Comparison = () => (
  <section className="px-6 py-24 max-w-2xl mx-auto">
    <h2 className="text-2xl font-semibold text-foreground mb-8 tracking-tight">Comparison</h2>
    <div className="overflow-x-auto border border-border rounded-md">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="px-5 py-3 font-medium text-muted-foreground">Feature</th>
            <th className="px-5 py-3 font-medium text-primary">AppFence</th>
            <th className="px-5 py-3 font-medium text-muted-foreground">Flatpak</th>
            <th className="px-5 py-3 font-medium text-muted-foreground">Firejail</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.feature} className={i !== rows.length - 1 ? "border-b border-border" : ""}>
              <td className="px-5 py-3 text-foreground">{row.feature}</td>
              <td className="px-5 py-3"><Cell value={row.appfence} /></td>
              <td className="px-5 py-3"><Cell value={row.flatpak} /></td>
              <td className="px-5 py-3"><Cell value={row.firejail} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default Comparison;
