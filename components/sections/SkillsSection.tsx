"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";
import { useRouter } from "next/navigation";

const LANGUAGES = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
];

const SKILLS = [
  { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg" },
  { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
  { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" },
  { name: "Chrome", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "languages">("skills");
  const router = useRouter();

  const currentItems = activeTab === "skills" ? SKILLS : LANGUAGES;
  const isSkills = activeTab === "skills";

  // Duplicate items for seamless marquee
  const marqueeItems = [...currentItems, ...currentItems, ...currentItems];

  return (
    <section
      id="skills"
      className="relative z-10 overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 py-20 sm:py-24 md:py-32"
      style={{
        background: "rgba(255, 255, 255, 0.07)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 -20px 60px rgba(255, 255, 255, 0.02)",
      }}
    >
      <div className="flex flex-col items-center w-full">
        
        {/* Toggle Switch */}
        <FadeIn delay={0} y={20} className="mb-20 sm:mb-28 z-20">
          <motion.button 
            onClick={() => setActiveTab(isSkills ? "languages" : "skills")}
            className="relative flex items-center bg-[#151515] rounded-[30px] p-2 w-[220px] h-[64px] cursor-pointer shadow-2xl transition-colors"
            animate={{ rotate: isSkills ? -8 : 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Knob */}
            <motion.div 
              className="absolute w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center shadow-lg z-10"
              animate={{ x: isSkills ? 0 : 156 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className={`w-[2px] h-[18px] rounded-full ${isSkills ? "bg-cyan-400" : "bg-red-400"}`} />
            </motion.div>

            {/* Text Labels */}
            <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
              <span className={`text-sm font-bold tracking-widest ${!isSkills ? "opacity-0" : "text-[#00D2D3] drop-shadow-[0_0_8px_rgba(0,210,211,0.5)] pl-12"} transition-all duration-300`}>
                TOOLS
              </span>
              <span className={`text-sm font-bold tracking-widest ${isSkills ? "opacity-0" : "text-[#FF6B6B] drop-shadow-[0_0_8px_rgba(255,107,107,0.5)] pr-2"} transition-all duration-300`}>
                LANGUAGES
              </span>
            </div>
          </motion.button>
        </FadeIn>

        {/* Marquee Grid */}
        <div 
          className="w-full relative py-4 z-10"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >

          <motion.div
            key={activeTab} // Retrigger animation on tab change
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: [0, -1035] }} // Adjust width based on actual content
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((item, i) => (
              <div
                key={`${activeTab}-${item.name}-${i}`}
                className="flex flex-col items-center gap-3 w-[100px] sm:w-[120px]"
              >
                <div className="w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] bg-[#111111] rounded-[24px] flex items-center justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-white/5">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                    <img src={item.icon} alt={item.name} className="object-contain w-full h-full drop-shadow-md" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/80 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <FadeIn delay={0.2} y={30} className="mt-20 sm:mt-28 z-20">
          <button
            onClick={() => {
              // Immediately reset Lenis smooth scroll engine to position 0 before navigating
              const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts?: object) => void } }).lenis;
              if (lenis) lenis.scrollTo(0, { immediate: true });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
              router.push("/demos");
            }}
            className="group inline-block cursor-pointer"
          >
            <div className="bg-[#00D2D3] border-b-[6px] border-[#019999] rounded-xl px-12 py-5 active:border-b-0 active:translate-y-[6px] transition-all flex items-center justify-center shadow-xl group-hover:bg-[#1AE2E3]">
              <span className="text-white font-bold text-xl sm:text-2xl tracking-wider drop-shadow-sm">
                View All
              </span>
            </div>
          </button>
        </FadeIn>

      </div>
    </section>
  );
};
