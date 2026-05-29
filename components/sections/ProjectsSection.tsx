"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";
import { LiveProjectButton } from "../ui/Buttons";
import { projects, Project } from "@/lib/data";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

const ProjectShowcaseVisual = ({ project, index }: { project: Project; index: number }) => {
  if (project.image) {
    return (
      <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-[#D7E2EA]/20 bg-[#050607]">
        <motion.img
          src={project.image}
          alt={`${project.title} project visual`}
          className="h-full w-full object-cover"
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607]/45 via-transparent to-[#050607]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/35 via-transparent to-transparent" />
        <div className="absolute left-6 top-6 text-5xl font-black text-white/10 sm:text-7xl">{String(index + 1).padStart(2, "0")}</div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full min-h-[300px] overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-[#D7E2EA]/20"
      style={{
        background: `radial-gradient(circle at 25% 20%, ${project.accent}55, transparent 34%), linear-gradient(135deg, #101318, #050607 70%)`,
        perspective: "900px",
      }}
    >
      <motion.div
        className="absolute inset-8 sm:inset-10 md:inset-12 rounded-[26px] border border-white/15 bg-black/35 backdrop-blur-md"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: [8, 13, 8], rotateY: [-9, 8, -9] }}
        transition={{ duration: 8 + index, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          <div className="flex gap-2">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="h-2.5 w-2.5 rounded-full bg-white/35" />
            ))}
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/45">{project.year}</span>
        </div>
        <div className="absolute inset-x-5 bottom-5 space-y-4">
          <div className="h-2 w-2/3 rounded-full" style={{ background: project.accent }} />
          <div className="grid grid-cols-3 gap-3">
            {project.techStack.slice(0, 6).map((tech) => (
              <span key={tech} className="truncate rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute right-[10%] top-[18%] h-24 w-24 rounded-2xl border border-white/15 bg-white/10"
        style={{ boxShadow: `0 0 60px ${project.accent}55` }}
        animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-6 top-6 text-5xl font-black text-white/10 sm:text-7xl">{String(index + 1).padStart(2, "0")}</div>
    </div>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  totalCards, 
  progress 
}: { 
  project: Project; 
  index: number; 
  totalCards: number; 
  progress: MotionValue<number>;
}) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [0, 1], [1, targetScale]);
  
  const stackOffset = 34;
  const topOffset = 88 + index * stackOffset;

  return (
    <div className="sticky flex h-[82vh] items-start justify-center" style={{ top: topOffset, zIndex: index + 1 }}>
      <motion.div 
        style={{ scale }}
        className="relative flex h-[76vh] min-h-[560px] max-h-[760px] w-full max-w-7xl transform-origin-top flex-col gap-6 overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-8 sm:rounded-[50px] sm:p-6 md:gap-10 md:rounded-[60px] md:p-8"
      >
        <div className="absolute inset-0 -z-10 bg-[#0C0C0C]" />
        {/* Top Row */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-6 sm:gap-10">
            <span className="font-black text-[#D7E2EA] leading-none" style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-sm mb-1">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                {project.title}
              </h3>
            </div>
          </div>
          {project.github && (
             <LiveProjectButton href={project.github} text="GitHub" />
          )}
        </div>

        <div className="relative z-10 flex min-h-0 w-full flex-1 overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px]">
          <ProjectShowcaseVisual project={project} index={index} />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32">
      <FadeIn delay={0} y={40} className="w-full mb-16 sm:mb-20 md:mb-28 text-center">
        <h2 className="hero-heading font-black uppercase leading-none" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Project
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm uppercase tracking-[0.28em] text-[#D7E2EA]/55">
          Featured four only. Full repository archive opens in story mode.
        </p>
      </FadeIn>

      <div ref={containerRef} className="relative w-full pb-[22vh]">
        {featuredProjects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={i} 
            totalCards={featuredProjects.length} 
            progress={scrollYProgress} 
          />
        ))}
      </div>

      <div className="relative z-50 -mt-10 flex min-h-[24vh] items-start justify-center bg-[#0C0C0C] px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#D7E2EA]/45">
            Explore the complete repository universe
          </p>
          <a
            href="/projects"
            className="rounded-full border-2 border-[#D7E2EA] px-10 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA] hover:text-[#0C0C0C] sm:px-12 sm:py-5"
          >
            View More
          </a>
        </motion.div>
      </div>
    </section>
  );
};
