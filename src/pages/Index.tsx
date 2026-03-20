import Architecture from "@/components/Architecture";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PermissionModel from "@/components/PermissionModel";
import Philosophy from "@/components/Philosophy";
import Problem from "@/components/Problem";
import QuickStart from "@/components/QuickStart";
import RevealSection from "@/components/RevealSection";
import SecurityBanner from "@/components/SecurityBanner";
import SetupInstructions from "@/components/SetupInstructions";
import ThreatModel from "@/components/ThreatModel";

const Index = () => (
  <main className="page-shell min-h-screen">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_52%)]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute left-[-10rem] top-[32rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-accent/12 blur-3xl"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute right-[-8rem] top-[78rem] -z-10 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl"
    />

    <SecurityBanner />
    <Hero />
    <RevealSection>
      <Problem />
    </RevealSection>
    <RevealSection delay={50}>
      <Features />
    </RevealSection>
    <RevealSection delay={80}>
      <PermissionModel />
    </RevealSection>
    <RevealSection delay={110}>
      <Philosophy />
    </RevealSection>
    <RevealSection delay={140}>
      <Architecture />
    </RevealSection>
    <RevealSection delay={170}>
      <Comparison />
    </RevealSection>
    <RevealSection delay={200}>
      <ThreatModel />
    </RevealSection>
    <RevealSection delay={230}>
      <QuickStart />
    </RevealSection>
    <RevealSection delay={260}>
      <SetupInstructions />
    </RevealSection>
    <Footer />
  </main>
);

export default Index;
