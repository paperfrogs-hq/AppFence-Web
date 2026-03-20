import SecurityBanner from "@/components/SecurityBanner";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import PermissionModel from "@/components/PermissionModel";
import Philosophy from "@/components/Philosophy";
import Architecture from "@/components/Architecture";
import Comparison from "@/components/Comparison";
import ThreatModel from "@/components/ThreatModel";
import QuickStart from "@/components/QuickStart";
import SetupInstructions from "@/components/SetupInstructions";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

const Index = () => (
  <main className="min-h-screen">
    <SecurityBanner />
    <Hero />
    <RevealSection>
      <Problem />
    </RevealSection>
    <RevealSection delay={80}>
      <Features />
    </RevealSection>
    <RevealSection delay={80}>
      <PermissionModel />
    </RevealSection>
    <RevealSection delay={80}>
      <Philosophy />
    </RevealSection>
    <RevealSection delay={80}>
      <Architecture />
    </RevealSection>
    <RevealSection delay={80}>
      <Comparison />
    </RevealSection>
    <RevealSection delay={80}>
      <ThreatModel />
    </RevealSection>
    <RevealSection delay={80}>
      <QuickStart />
    </RevealSection>
    <RevealSection delay={80}>
      <SetupInstructions />
    </RevealSection>
    <Footer />
  </main>
);

export default Index;
