"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { githubProjects, projects } from "@/lib/data";

const featuredIds = new Set([
  "FLOAT-AI_The-voice-of-your-desktop.",
  "Smart-Complaint-Service-Platform",
  "FITNESS-ANALYZER",
  "E-COMMERCE-WEB-APPLICATION",
]);

const accentByType: Record<string, string> = {
  AI: "#06B6D4",
  SaaS: "#F59E0B",
  ML: "#10B981",
  "Full Stack": "#7C3AED",
  Data: "#38BDF8",
  Fintech: "#22C55E",
  Java: "#F97316",
  Security: "#60A5FA",
  "C++": "#A78BFA",
};

const enrichedProjects = githubProjects.map((repo) => {
  const portfolioProject = projects.find((project) => project.github === repo.url);
  return {
    ...repo,
    accent: accentByType[repo.type] ?? "#D7E2EA",
    featured: featuredIds.has(repo.name),
    portfolioProject,
  };
});

const RetroGithubButton = ({ href }: { href: string }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block cursor-pointer border-4 border-black bg-gray-500 pb-[10px] transition-all duration-100 ease-in-out select-none active:pb-0 active:mb-[10px] active:translate-y-[10px]"
    >
      <div className="bg-[#dddddd] border-4 border-white px-2 py-1 flex items-center justify-center">
        <span className="text-[1.1em] tracking-[1px] text-black font-bold flex items-center gap-2">
          <Github size={16} />
          GitHub
        </span>
      </div>
    </a>
  );
};

export default function ProjectsArchivePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-[#D7E2EA]">
      <section className="relative min-h-screen px-5 py-8 sm:px-8 md:px-12">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-[8%] top-[14%] h-56 w-56 rounded-[32px] border border-cyan-300/20 bg-cyan-300/10 blur-[1px]"
            animate={{ rotateX: [45, 62, 45], rotateY: [-20, 28, -20], y: [0, -28, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          />
          <motion.div
            className="absolute right-[10%] top-[24%] h-72 w-72 rounded-full border border-amber-300/20 bg-amber-300/10"
            animate={{ scale: [1, 1.12, 1], rotate: [0, 18, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(215,226,234,0.16),transparent_62%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <nav className="mb-16 flex items-center justify-between gap-4">
            <Link href="/#projects" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10" aria-label="Back to featured projects">
              <ArrowLeft size={18} />
            </Link>
            <a href="https://github.com/COZYkrish?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 transition-colors hover:bg-white/10">
              <Github size={16} />
              GitHub Archive
            </a>
          </nav>

          <div className="grid min-h-[72vh] items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
            <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="mb-5 text-sm uppercase tracking-[0.38em] text-white/45">Story Mode / Repository Universe</p>
              <h1 className="max-w-5xl text-[clamp(3.5rem,11vw,10rem)] font-black uppercase leading-[0.86]">
                Project Archive
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
                A cinematic walk through every public repository from COZYkrish, led by the four featured builds: Float AI, Smart Complaint System, Fitness Analyzer, and Ecommerce Web Application.
              </p>
            </motion.div>

            <motion.div
              className="relative hidden h-[520px] rounded-[28px] border border-white/10 bg-white/[0.03] p-7 lg:block"
              initial={{ opacity: 0, rotateY: -18 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
              {enrichedProjects.slice(0, 10).map((project, index) => (
                <motion.div
                  key={project.name}
                  className="absolute left-8 right-8 flex items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-5 py-4 backdrop-blur"
                  style={{ top: 28 + index * 42, transform: `translateZ(${index * 12}px)` }}
                  animate={{ x: [0, index % 2 ? 14 : -14, 0] }}
                  transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="truncate text-sm font-semibold text-white/80">{project.title}</span>
                  <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]" style={{ color: project.accent, background: `${project.accent}18` }}>{project.type}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-28 sm:px-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-10 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-white/40">Chapter 01</p>
              <h2 className="mt-3 text-4xl font-black uppercase sm:text-6xl">Featured Arc</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/55">
              These are the four projects shown on the homepage. The rest stay here as an expanded project universe.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {enrichedProjects.filter((project) => project.featured).map((project, index) => (
              <ProjectPanel key={project.name} project={project} index={index} large />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-32 sm:px-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-10 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-white/40">Chapter 02</p>
              <h2 className="mt-3 text-4xl font-black uppercase sm:text-6xl">All Repositories</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/55">
              Every public repository is linked directly to GitHub, with live deployments surfaced where GitHub listed one.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {enrichedProjects.map((project, index) => (
              <ProjectPanel key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectPanel({
  project,
  index,
  large = false,
}: {
  project: (typeof enrichedProjects)[number];
  index: number;
  large?: boolean;
}) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md ${large ? "min-h-[360px]" : "min-h-[300px]"}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.6 }}
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      style={{ perspective: "900px" }}
    >
      {project.portfolioProject?.image && (
        <img
          src={project.portfolioProject.image}
          alt={`${project.title} project visual`}
          className="absolute inset-0 h-full w-full object-cover opacity-38 transition-transform duration-700 group-hover:scale-105"
        />
      )}
      {project.portfolioProject?.image && <div className="absolute inset-0 bg-[#050607]/62" />}
      <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 80% 0%, ${project.accent}30, transparent 42%)` }} />
      <motion.div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-[24px] border border-white/10 bg-white/10"
        animate={{ rotate: [0, 14, 0], y: [0, 12, 0] }}
        transition={{ duration: 6 + (index % 5), repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between gap-4">
          <span className="text-5xl font-black text-white/10">{String(index + 1).padStart(2, "0")}</span>
          <span className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: project.accent, background: `${project.accent}18` }}>
            {project.type}
          </span>
        </div>
        <h3 className={`${large ? "text-4xl" : "text-2xl"} font-black uppercase leading-tight text-white`}>
          {project.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-white/58">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/45">
          <span>{project.language}</span>
          <span>/</span>
          <span>Updated {project.updated}</span>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <RetroGithubButton href={project.url} />
          {project.homepage && (
            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:bg-white/10">
              <ExternalLink size={14} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
