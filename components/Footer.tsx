"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(248,250,252,0.05)] py-10">
      {/* Top accent gradient */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.4), transparent)" }}
        aria-hidden="true" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(ellipse, #7C3AED, transparent)" }} />
      </div>

      <div className="container-os relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — logo + copy */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(59,130,246,0.3))", border: "1px solid rgba(124,58,237,0.4)" }}>
              <span className="text-xs font-bold text-[#A78BFA]" style={{ fontFamily: "Syne, sans-serif" }}>K</span>
            </div>
            <span className="text-sm text-[rgba(248,250,252,0.45)]" style={{ fontFamily: "DM Sans, sans-serif" }}>
              © {year} <span className="text-white font-medium">Krish Sharma</span> — KRISH OS
            </span>
          </div>

          {/* Centre — stack */}
          <span className="text-[10px] text-[rgba(248,250,252,0.2)]"
            style={{ fontFamily: "JetBrains Mono, monospace" }}>
            Next.js · TypeScript · GSAP · Three.js · Framer Motion
          </span>

          {/* Right — links */}
          <div className="flex items-center gap-4">
            {[
              { href: personalInfo.github, label: "GitHub" },
              { href: personalInfo.linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((link) => (
              <motion.a key={link.label} href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-xs text-[rgba(248,250,252,0.35)] hover:text-white transition-colors duration-200"
                style={{ fontFamily: "DM Sans, sans-serif" }}
                whileHover={{ y: -1 }}>
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-5 border-t border-[rgba(248,250,252,0.04)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[9px] text-[rgba(248,250,252,0.18)]"
            style={{ fontFamily: "JetBrains Mono, monospace" }}>
            KRISH_OS v2.0 Cinematic · Bhubaneswar, Odisha, India · Open to remote
          </span>
          <span className="text-[9px] text-[rgba(248,250,252,0.18)]"
            style={{ fontFamily: "JetBrains Mono, monospace" }}>
            Made with ☕ and too many late nights
          </span>
        </div>
      </div>
    </footer>
  );
}
