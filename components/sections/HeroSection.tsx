"use client";

import { FadeIn } from "../ui/FadeIn";
import { ContactButton } from "../ui/Buttons";
import { motion } from "framer-motion";

interface HeroSectionProps {
  splineBackground?: React.ReactNode;
}

const quoteText = "Building scalable web applications, cloud-native solutions, and AI-powered digital experiences.";
const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.5,
    },
  },
};
const typingChild = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

export const HeroSection = ({ splineBackground }: HeroSectionProps) => {
  return (
    <section className="h-screen w-full flex flex-col relative overflow-hidden px-6 md:px-10">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full relative z-50">
        <nav className="w-full flex justify-between items-center pt-6 md:pt-8 relative z-50">
          {/* Logo */}
          <div className="flex items-center group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <span
              className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] tracking-tight flex items-baseline drop-shadow-md"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              <span style={{ color: "#BF00FF", textShadow: "0 0 8px rgba(191,0,255,0.8), 0 0 20px rgba(191,0,255,0.4)" }}>aether</span>
              <span style={{ color: "#00E5FF", marginLeft: "2px", textShadow: "0 0 15px rgba(0,229,255,0.3)" }}>UI</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            {["About", "Services", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.2rem] hover:opacity-70 transition-opacity duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Heading */}
      <div className="flex-1 flex flex-col justify-center sm:justify-start w-full relative z-0 pointer-events-none">
        {/* Background DEVELOPER Text */}
        <div className="absolute top-[40%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] text-center z-[-1] pointer-events-none select-none overflow-hidden mix-blend-screen">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-black uppercase text-[18vw] leading-none text-[#00E5FF] tracking-widest blur-sm block"
            style={{ textShadow: "0 0 50px rgba(0,229,255,0.8)" }}
          >
            DEVELOPER
          </motion.span>
        </div>

        {/* Floating Tech Stack Pills */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block z-20">
          {[
            { text: "React", top: "25%", left: "10%", delay: 0.2 },
            { text: "Next.js", top: "15%", right: "15%", delay: 0.4 },
            { text: "Spring Boot", top: "50%", left: "5%", delay: 0.6 },
            { text: "AWS", top: "60%", right: "8%", delay: 0.8 },
            { text: "Docker", top: "35%", right: "5%", delay: 1.0 },
            { text: "AI/ML", top: "70%", left: "15%", delay: 1.2 },
          ].map((pill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + pill.delay, duration: 0.8 }}
              className="absolute px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-medium tracking-widest text-[#D7E2EA]/70 uppercase"
              style={{ top: pill.top, left: pill.left, right: pill.right }}
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
              >
                {pill.text}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.15} y={40} className="w-full mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[11.5vw] md:text-[12vw] lg:text-[12.5vw] select-none">
            krish sharma
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-20 pointer-events-none">
        <div className="flex flex-col gap-5 max-w-[280px] sm:max-w-[340px] md:max-w-[400px]">
          {/* Availability Badge */}
          <FadeIn delay={0.25} y={20} className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-medium tracking-widest uppercase w-max mb-1 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            AVAILABLE FOR INTERNSHIPS
          </FadeIn>

          <FadeIn delay={0.35} y={20} className="pointer-events-auto">
            {/* Professional Intro */}
            <h3 className="text-[#00E5FF] font-semibold text-[10px] sm:text-xs tracking-[0.2em] mb-2 uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]">
              Full-Stack Developer • AI Engineer
            </h3>

            {/* Supporting Text */}
            <motion.p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-relaxed min-h-[60px]"
              style={{ fontSize: "clamp(0.75rem, 1.2vw, 1.2rem)" }}
              variants={typingContainer}
              initial="hidden"
              animate="visible"
            >
              {quoteText.split("").map((char, index) => (
                <motion.span key={index} variants={typingChild}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </FadeIn>

          {/* Professional Stats */}
          <FadeIn delay={0.45} y={20} className="pointer-events-auto flex items-center gap-4 sm:gap-6 mt-2 border-t border-white/10 pt-4 w-max">
            <div className="flex flex-col">
              <span className="text-white font-black text-lg drop-shadow-md">20+</span>
              <span className="text-white/40 text-[9px] uppercase tracking-[0.2em]">Projects</span>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg drop-shadow-md">AI</span>
              <span className="text-white/40 text-[9px] uppercase tracking-[0.2em]">& Cloud</span>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg drop-shadow-md">React</span>
              <span className="text-white/40 text-[9px] uppercase tracking-[0.2em]">& Spring Boot</span>
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col hidden sm:flex">
              <span className="text-white font-black text-lg drop-shadow-md">OSS</span>
              <span className="text-white/40 text-[9px] uppercase tracking-[0.2em]">Open Source</span>
            </div>
          </FadeIn>
        </div>
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
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-auto"
        style={{ 
          filter: "brightness(1.0) contrast(1.0) saturate(1.0)" 
        }}
        ref={(el) => {
          if (el) {
            // Intercept native wheel events in the capture phase so Spline doesn't block page scrolling
            el.addEventListener("wheel", (e) => e.stopPropagation(), { capture: true });
          }
        }}
      >
        {splineBackground}
      </motion.div>
    </section>
  );
};
