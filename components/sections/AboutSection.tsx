"use client";

import { Github, MapPin, Sparkles } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { personalInfo, stats } from "@/lib/data";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate, useInView } from "framer-motion";

const AnimatedCounter = ({ value, suffix }: { value: number | string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = typeof value === "number" ? value : parseInt(value, 10);

  useEffect(() => {
    if (inView && !isNaN(numericValue)) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          setCount(Math.round(v));
        },
      });
      return controls.stop;
    }
  }, [inView, numericValue]);

  return (
    <span ref={ref}>
      {isNaN(numericValue) ? value : count}
      {suffix}
    </span>
  );
};

const PhotoCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full min-h-[300px] rounded-[32px] sm:rounded-[40px] overflow-hidden cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-[url('/krish_photo_2.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
        style={{ transform: "translateZ(50px)" }}
      />
      {/* Glare effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent mix-blend-overlay pointer-events-none"
        style={{
          opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.6]),
          transform: "translateZ(80px)"
        }}
      />
    </motion.div>
  );
};

const highlights = [
  "Production-grade full-stack applications",
  "Cloud fundamentals across AWS, Azure, and GCP",
  "Machine learning apps with Python and Scikit-learn",
  "Secure REST APIs, dashboards, and database-backed systems",
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 pt-20 pb-10 text-[#D7E2EA] sm:px-8 sm:pt-24 sm:pb-12 md:px-10 md:pt-32 md:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(215,226,234,0.12),transparent_34%),radial-gradient(circle_at_82%_64%,rgba(215,226,234,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(215,226,234,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(215,226,234,0.035)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn delay={0} y={40} className="mb-12 text-center sm:mb-16 md:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <FadeIn
            delay={0.05}
            y={32}
            className="rounded-[36px] border border-[#D7E2EA]/25 bg-[#050607]/80 p-6 shadow-2xl shadow-black/40 sm:rounded-[44px] sm:p-8 md:p-10"
          >
            <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D7E2EA]/55">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/15 px-4 py-2">
                <Sparkles size={14} />
                {personalInfo.handle}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/15 px-4 py-2">
                <MapPin size={14} />
                {personalInfo.location}
              </span>
            </div>

            <p className="text-sm uppercase tracking-[0.34em] text-[#D7E2EA]/45">Who I am</p>
            <h3 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
              {personalInfo.name}
            </h3>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[#D7E2EA]/78">
              {personalInfo.bio}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-[#D7E2EA]/12 bg-white/[0.03] px-4 py-4 text-sm text-[#D7E2EA]/70">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D7E2EA]/75 transition-colors hover:border-[#D7E2EA] hover:text-[#D7E2EA]"
              >
                Resume
              </a>
            </div>
          </FadeIn>

          <div className="grid gap-6">
            <FadeIn
              delay={0.1}
              y={32}
              className="rounded-[36px] border border-[#D7E2EA]/25 bg-[#050607]/80 p-2 sm:rounded-[44px] sm:p-2 h-full min-h-[250px] relative overflow-hidden group"
              style={{ perspective: "1000px" }}
            >
              <PhotoCard />
            </FadeIn>

            <FadeIn delay={0.15} y={32} className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[28px] border border-[#D7E2EA]/18 bg-white/[0.03] p-5">
                  <div className="text-4xl font-black leading-none text-[#D7E2EA]">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/48">
                    {item.label}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
