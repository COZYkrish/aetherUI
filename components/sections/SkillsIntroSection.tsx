"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const SkillsIntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll for 3D tilt effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]); // 3D Tilt

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[60vh] sm:h-[80vh] flex flex-col items-center justify-center overflow-hidden z-10"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          scale: textScale,
          rotateX: rotateX,
          transformStyle: "preserve-3d"
        }}
        className="flex flex-col items-center text-center px-4"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#00D2D3] font-mono tracking-[0.3em] text-sm md:text-base uppercase glow-text">
            System Capabilities
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent drop-shadow-[0_10px_30px_rgba(0,210,211,0.2)]">
            ARSENAL
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl text-[#D7E2EA]/60 text-lg sm:text-xl md:text-2xl font-light mt-8 tracking-wide"
        >
          A cinematic exploration of the languages, frameworks, and tools that power my digital universe.
        </motion.p>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#00D2D3] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
