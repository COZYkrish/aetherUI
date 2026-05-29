"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { CinematicBackground } from "@/components/CinematicBackground";
import { SkillsIntroSection } from "@/components/sections/SkillsIntroSection";

// --- Data ---
const DEV_TOOLS = [
  { name: "VS Code", icon: "vscode-plain" },
  { name: "Replit", icon: "devicon-plain" }, // placeholder
  { name: "Blender", icon: "blender-original" },
  { name: "Ubuntu", icon: "ubuntu-plain" },
  { name: "MySQL", icon: "mysql-plain" },
  { name: "Unity", icon: "unity-original" },
  { name: "Jupyter", icon: "jupyter-plain" },
  { name: "IntelliJ", icon: "intellij-plain" },
  { name: "PyCharm", icon: "pycharm-plain" },
  { name: "Docker", icon: "docker-plain" },
  { name: "Chrome", icon: "chrome-plain" },
  { name: "Git", icon: "git-plain" },
  { name: "Figma", icon: "figma-plain" },
  { name: "GitHub", icon: "github-original" },
  { name: "Postman", icon: "postman-plain" }, // maybe doesn't exist plain, using plain
  { name: "Firebase", icon: "firebase-plain" },
  { name: "Linux", icon: "linux-plain" },
  { name: "AWS", icon: "amazonwebservices-original" },
  { name: "TensorFlow", icon: "tensorflow-original" },
  { name: "PyTorch", icon: "pytorch-original" },
  { name: "Netlify", icon: "netlify-plain" },
  { name: "OpenAI API", icon: "devicon-plain" }, // placeholder
  { name: "Spline", icon: "devicon-plain" }, // placeholder
  { name: "Vercel", icon: "vercel-original" },
];

const TECH_SKILLS = [
  { name: "Python", category: "Languages", icon: "python-plain" },
  { name: "Java", category: "Languages", icon: "java-plain" },
  { name: "C++", category: "Languages", icon: "cplusplus-plain" },
  { name: "JavaScript", category: "Languages", icon: "javascript-plain" },
  { name: "TypeScript", category: "Languages", icon: "typescript-plain" },
  { name: "HTML5", category: "Languages", icon: "html5-plain" },
  { name: "CSS3", category: "Languages", icon: "css3-plain" },
  { name: "SQL", category: "Databases", icon: "azuresqldatabase-plain" },
  { name: "Bash", category: "Languages", icon: "bash-plain" },
  { name: "React", category: "Frameworks", icon: "react-original" },
  { name: "Node.js", category: "Frameworks", icon: "nodejs-plain" },
  { name: "Next.js", category: "Frameworks", icon: "nextjs-plain" },
  { name: "Express.js", category: "Frameworks", icon: "express-original" },
  { name: "Flask", category: "Frameworks", icon: "flask-original" },
  { name: "Machine Learning", category: "AI / Data", icon: "devicon-plain" },
  { name: "Data Analysis", category: "AI / Data", icon: "devicon-plain" },
  { name: "Pandas", category: "AI / Data", icon: "pandas-plain" },
  { name: "NumPy", category: "AI / Data", icon: "numpy-plain" },
  { name: "Scikit-learn", category: "AI / Data", icon: "devicon-plain" },
  { name: "MongoDB", category: "Databases", icon: "mongodb-plain" },
  { name: "MySQL", category: "Databases", icon: "mysql-plain" },
  { name: "APIs", category: "Frameworks", icon: "devicon-plain" },
  { name: "DSA", category: "Languages", icon: "devicon-plain" },
  { name: "3D Design", category: "Frameworks", icon: "devicon-plain" },
];

const DEMOS = [
  {
    language: "Python",
    version: "Python 3.11",
    color: "#3B82F6",
    glow: "rgba(59, 130, 246, 0.15)",
    code: [
      { text: "# List comprehension + f-string", type: "comment" },
      { text: "def greet(name: str) -> str:", type: "keyword" },
      { text: "    return f'Hello, {name}! 👋'", type: "string" },
      { text: "users = ['Alice', 'Bob', 'Carol']", type: "normal" },
      { text: "msgs = [greet(u) for u in users]", type: "normal" },
      { text: "print(msgs)", type: "function" }
    ]
  },
  {
    language: "JavaScript",
    version: "ES2024",
    color: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.15)",
    code: [
      { text: "// Async / await fetch pattern", type: "comment" },
      { text: "const fetchData = async (url) => {", type: "keyword" },
      { text: "  const res = await fetch(url);", type: "normal" },
      { text: "  const data = await res.json();", type: "normal" },
      { text: "  return data.slice(0, 5);", type: "keyword" },
      { text: "};", type: "normal" }
    ]
  },
  {
    language: "C++",
    version: "C++17",
    color: "#8B5CF6",
    glow: "rgba(139, 92, 246, 0.15)",
    code: [
      { text: "#include <iostream>", type: "keyword" },
      { text: "#include <string>", type: "keyword" },
      { text: "int main() {", type: "keyword" },
      { text: '  auto msg = std::string("Hello C++");', type: "string" },
      { text: "  std::cout << msg << std::endl;", type: "normal" },
      { text: "  return 0;", type: "keyword" },
      { text: "}", type: "normal" }
    ]
  },
  {
    language: "React",
    version: "React 18",
    color: "#06B6D4",
    glow: "rgba(6, 182, 212, 0.15)",
    code: [
      { text: "import { useState } from 'react';", type: "keyword" },
      { text: "export function Toggle() {", type: "function" },
      { text: "  const [on, setOn] = useState(false);", type: "normal" },
      { text: "  return (", type: "keyword" },
      { text: "    <button onClick={() => setOn(!on)}>", type: "string" },
      { text: "      {on ? '✅ ON' : '⭕ OFF'}", type: "normal" },
      { text: "    </button>", type: "string" },
      { text: "  );", type: "keyword" },
      { text: "}", type: "normal" }
    ]
  },
  {
    language: "HTML / CSS",
    version: "CSS3",
    color: "#10B981",
    glow: "rgba(16, 185, 129, 0.15)",
    code: [
      { text: "/* Glassmorphism card */", type: "comment" },
      { text: ".card {", type: "function" },
      { text: "  backdrop-filter: blur(16px);", type: "normal" },
      { text: "  background: rgba(255,255,255,.08);", type: "string" },
      { text: "  border: 1px solid rgba(255,255,255,.1);", type: "normal" },
      { text: "  transition: transform 0.3s ease;", type: "keyword" },
      { text: "}", type: "function" }
    ]
  },
  {
    language: "SQL",
    version: "MySQL 8",
    color: "#EF4444",
    glow: "rgba(239, 68, 68, 0.15)",
    code: [
      { text: "-- Revenue by user segment", type: "comment" },
      { text: "SELECT u.name, SUM(o.total) AS revenue", type: "keyword" },
      { text: "FROM orders o", type: "normal" },
      { text: "JOIN users u ON o.user_id = u.id", type: "string" },
      { text: "WHERE o.total > 100", type: "normal" },
      { text: "GROUP BY u.name", type: "keyword" },
      { text: "ORDER BY revenue DESC;", type: "normal" }
    ]
  }
];

const TypewriterCode = ({ lines }: { lines: { text: string, type: string }[] }) => {
  const [progress, setProgress] = useState({ line: 0, char: 0 });

  useEffect(() => {
    let l = 0;
    let c = 0;
    let wait = 0;

    const interval = setInterval(() => {
      if (wait > 0) {
        wait--;
        if (wait === 0 && l >= lines.length) {
          // Restart after the long pause
          l = 0;
          c = 0;
          setProgress({ line: 0, char: 0 });
        }
        return;
      }

      if (l < lines.length) {
        if (c < lines[l].text.length) {
          c++;
        } else {
          l++;
          c = 0;
          if (l >= lines.length) {
            wait = 80; // Long pause at the very end (~2.4 seconds)
          } else {
            wait = 10; // Pause at the end of each line (~300ms)
          }
        }
        setProgress({ line: l, char: c });
      }
    }, 30); // 30ms typing speed per character

    return () => clearInterval(interval);
  }, [lines]);

  const getColor = (type: string) => {
    switch (type) {
      case "comment": return "text-[#6B7280] italic";
      case "keyword": return "text-[#EC4899]";
      case "string": return "text-[#10B981]";
      case "function": return "text-[#3B82F6]";
      default: return "text-[#D1D5DB]";
    }
  };

  return (
    <div className="font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre">
      {lines.slice(0, progress.line === lines.length ? lines.length : progress.line + 1).map((line, i) => {
        const isCurrentLine = i === progress.line;
        const textToDisplay = isCurrentLine ? line.text.substring(0, progress.char) : line.text;

        return (
          <div key={i} className="flex">
            <span className="text-[#4B5563] w-6 select-none mr-4 text-right">{i + 1}</span>
            <span className={getColor(line.type)}>
              {textToDisplay}
              {isCurrentLine && (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-[#3B82F6] ml-1 align-middle"
                />
              )}
            </span>
          </div>
        );
      })}

      {/* Blinking cursor drops to new line when fully done typing */}
      {progress.line === lines.length && (
        <div className="flex">
          <span className="text-[#4B5563] w-6 select-none mr-4 text-right">{lines.length + 1}</span>
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-[#3B82F6] ml-1 align-middle"
          />
        </div>
      )}
    </div>
  );
};

// Component for the glowing icon cards
const IconCard = ({ name, icon }: { name: string, icon: string }) => {
  // CSS filter to turn black/white SVGs into glowing light blue
  // (Inverts to white, then sepia+hue-rotate to light blue)
  const filterStyle = "invert(70%) sepia(50%) saturate(3000%) hue-rotate(190deg) brightness(120%) contrast(110%) drop-shadow(0 0 12px rgba(100, 200, 255, 0.6))";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-[#111111] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-white/5 shadow-2xl hover:bg-[#161616] hover:border-[#64C8FF]/30 transition-all duration-300 group"
    >
      <div className="w-12 h-12 relative flex items-center justify-center">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.split('-')[0]}/${icon}.svg`}
          alt={name}
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          style={{ filter: filterStyle }}
          onError={(e) => {
            // fallback if icon not found
            (e.target as HTMLImageElement).src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-plain.svg";
          }}
        />
      </div>
      <span className="text-sm font-medium text-[#D7E2EA]/80">{name}</span>
    </motion.div>
  );
};

export default function DemosPage() {
  const [filter, setFilter] = useState("All");

  // Scroll to top when the page mounts (fixes opening from last scroll position)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredSkills = filter === "All"
    ? TECH_SKILLS
    : TECH_SKILLS.filter(s => s.category === filter);

  return (
    <main className="min-h-screen bg-[#050607] text-[#D7E2EA] relative selection:bg-[#3B82F6]/30 overflow-x-hidden">

      {/* 3D Global Background */}
      <CinematicBackground />

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 flex flex-col items-center">

        {/* Navigation */}
        <div className="w-full mb-4 relative z-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#D7E2EA]/60 hover:text-white transition-colors bg-[#1A1A1A] py-2 px-4 rounded-full border border-white/5 hover:bg-[#222]">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>

        {/* 3D Cinematic Intro */}
        <SkillsIntroSection />

        {/* =========================================
            SECTION 01: DEVELOPMENT TOOLS
        ========================================= */}
        <div className="text-center mb-10 w-full">
          <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest mb-4 block">01</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Development Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D7E2EA]/60 text-lg font-light"
          >
            The environment that powers my workflow
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mb-32">
          {DEV_TOOLS.map((tool) => (
            <IconCard key={tool.name} name={tool.name} icon={tool.icon} />
          ))}
        </div>

        {/* =========================================
            SECTION 02: TECHNICAL SKILLS
        ========================================= */}
        <div className="text-center mb-10 w-full">
          <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest mb-4 block">02</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D7E2EA]/60 text-lg font-light mb-10"
          >
            Languages, frameworks, and domains I work in
          </motion.p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["All", "Languages", "Frameworks", "AI / Data", "Databases"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-full text-sm transition-all border ${filter === tab
                    ? "border-[#64C8FF]/50 text-[#64C8FF] bg-[#64C8FF]/10 shadow-[0_0_20px_rgba(100,200,255,0.2)]"
                    : "border-white/10 text-[#D7E2EA]/60 hover:text-white hover:border-white/30"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mb-32">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                layout
              >
                <IconCard name={skill.name} icon={skill.icon} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* =========================================
            SECTION 03: INTERACTIVE DEMOS
        ========================================= */}
        <div className="text-center mb-16 w-full">
          <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest mb-4 block">03</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Interactive Code Demos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D7E2EA]/60 text-lg font-light"
          >
            Live syntax across languages — watch it type itself
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 w-full mb-20">
          {DEMOS.map((demo, i) => (
            <motion.div
              key={demo.language}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#0C0C0C]/80 backdrop-blur-xl overflow-hidden shadow-2xl relative group"
              style={{ boxShadow: `0 0 40px ${demo.glow}` }}
            >
              <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-[#111111]">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80">
                  <span style={{ color: demo.color }}>&lt;/&gt;</span>
                  {demo.language}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 border border-white/10 rounded px-2 py-0.5">
                  {demo.version}
                </div>
              </div>

              <div className="p-6 h-[240px] bg-[#0A0B0E]">
                <TypewriterCode lines={demo.code} />
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 60px ${demo.glow}` }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
