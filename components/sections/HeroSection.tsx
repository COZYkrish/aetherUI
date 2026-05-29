"use client";

import { FadeIn } from "../ui/FadeIn";
import { ContactButton } from "../ui/Buttons";

interface HeroSectionProps {
  splineBackground?: React.ReactNode;
}

export const HeroSection = ({ splineBackground }: HeroSectionProps) => {
  return (
    <section className="h-screen w-full flex flex-col relative overflow-hidden px-6 md:px-10">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full relative z-50">
        <nav className="w-full flex justify-between items-center pt-6 md:pt-8 relative z-50">
          {["About", "Services", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Heading */}
      <div className="flex-1 flex flex-col justify-center sm:justify-start w-full relative z-0 pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[11.5vw] md:text-[12vw] lg:text-[12.5vw] select-none">
            krish sharma
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-20 pointer-events-none">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            <span className="block max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
              a full-stack developer driven by building scalable web, cloud, and AI solutions
            </span>
          </p>
        </FadeIn>
      </div>

      {/* Contact Button - Absolute positioned to cover Spline Watermark */}
      <FadeIn 
        delay={0.5} 
        y={20} 
        className="absolute bottom-2 right-1 sm:bottom-4 sm:right-2 md:bottom-6 md:right-2 lg:right-2 z-[60] pointer-events-auto"
      >
        <ContactButton />
      </FadeIn>

      {/* 3D Spline Robot */}
      <div 
        className="absolute inset-0 z-10 pointer-events-auto"
        ref={(el) => {
          if (el) {
            // Intercept native wheel events in the capture phase so Spline doesn't block page scrolling
            el.addEventListener("wheel", (e) => e.stopPropagation(), { capture: true });
          }
        }}
      >
        {splineBackground}
      </div>
    </section>
  );
};
