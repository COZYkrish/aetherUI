// Server Component

import { HeroSection } from "@/components/sections/HeroSection";
import Spline from "@splinetool/react-spline/next";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoaderWrapper from "@/components/LoaderWrapper";

export default function Home() {
  return (
    <LoaderWrapper>
      <CustomCursor />
      <main className="main-wrapper bg-[#0C0C0C] min-h-screen">
        <HeroSection 
          splineBackground={
            <Spline
              scene="https://prod.spline.design/IRAWffPsGm2KZB8s/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          } 
        />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </LoaderWrapper>
  );
}
