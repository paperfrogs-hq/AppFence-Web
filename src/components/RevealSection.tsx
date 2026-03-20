import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const RevealSection = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        filter: visible ? "blur(0px)" : "blur(4px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, filter 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
};

export default RevealSection;
