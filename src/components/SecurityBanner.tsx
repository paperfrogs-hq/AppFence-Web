import { AlertTriangle } from "lucide-react";

const SecurityBanner = () => (
  <div className="bg-primary/8 border-b border-primary/15">
    <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-3 text-sm">
      <AlertTriangle className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
      <p className="text-muted-foreground">
          Early Access: AppFence is in early development. Security audits are pending. Please use responsibly.
      </p>
    </div>
  </div>
);

export default SecurityBanner;
