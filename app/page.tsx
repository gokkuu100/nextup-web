"use client";

import { Header } from "@/components/features/landing/Header";
import { HeroSection } from "@/components/features/landing/HeroSection";
import { TrustedBy } from "@/components/features/landing/TrustedBy";
import { ImmersiveBreak } from "@/components/features/landing/ImmersiveBreak";
import { SectorGrid } from "@/components/features/landing/SectorGrid";
import { LifestyleSplit } from "@/components/features/landing/LifestyleSplit";
import { Pricing } from "@/components/features/landing/Pricing";
import { Testimonials } from "@/components/features/landing/Testimonials";
import { HardwareInventory } from "@/components/features/landing/HardwareInventory";
import { MarqueeSection } from "@/components/features/landing/MarqueeSection";
import { ProTeam } from "@/components/features/landing/ProTeam";
import { AppCTA } from "@/components/features/landing/AppCTA";
import { Footer } from "@/components/features/landing/Footer";
import { useFlashlight } from "@/hooks/useFlashlight";

export default function Home() {
  useFlashlight();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <ImmersiveBreak />
        <SectorGrid />
        <LifestyleSplit />
        <HardwareInventory />
        <Pricing />
        <MarqueeSection />
        <ProTeam />
        <AppCTA />
      </main>
      <Footer />
    </>
  );
}
