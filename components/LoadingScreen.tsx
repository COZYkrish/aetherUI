"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CubeGridLoader } from "./ui/CubeGrid";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"loading" | "exit">("loading");

  useEffect(() => {
    // Artificial 3.5-second loader to allow user to play with cubes
    const t = setTimeout(() => {
      setPhase("exit");
      setTimeout(onComplete, 800);
    }, 3500);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0C0C0C] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Radial gradient background accent */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 100%)",
            }}
          />

          {/* 3D Cube Grid */}
          <CubeGridLoader />

          {/* Subtle loading text */}
          <motion.div 
            className="absolute bottom-16 text-[10px] tracking-[0.4em] uppercase text-white/40 pointer-events-none"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Loading Universe
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
