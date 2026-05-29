"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "cloud", label: "Cloud" },
  { id: "command", label: "AI" },
  { id: "timeline", label: "Journey" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(2,5,16,0)", "rgba(2,5,16,0.85)"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollPos = window.scrollY + 130;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ background: navBg, backdropFilter: scrolled ? "blur(20px)" : "none" }}
      >
        <div
          className="border-b transition-colors duration-500"
          style={{ borderColor: scrolled ? "rgba(248,250,252,0.06)" : "transparent" }}
        >
          <div className="container-os flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center group hover:scale-[1.02] transition-transform duration-300"
              aria-label="Go to top"
            >
              <span
                className="text-[1.1rem] tracking-tight flex items-baseline drop-shadow-md"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                <span style={{ color: "#39FF14", textShadow: "0 0 15px rgba(57,255,20,0.3)" }}>aether</span>
                <span style={{ color: "#00F0FF", marginLeft: "2px", textShadow: "0 0 15px rgba(0,240,255,0.3)" }}>UI</span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="relative px-3.5 py-2 text-sm rounded-lg transition-colors duration-200"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: activeSection === link.id ? 600 : 400,
                    color: activeSection === link.id ? "white" : "rgba(248,250,252,0.45)",
                  }}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: "Syne, sans-serif",
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  color: "#A78BFA",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.25)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.3)";
                }}
              >
                Résumé
              </a>

              {/* Mobile hamburger */}
              <button
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl"
                style={{ background: "rgba(248,250,252,0.06)", border: "1px solid rgba(248,250,252,0.08)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div key={i} className="w-4 h-px bg-white rounded-full"
                    animate={mobileOpen ? {
                      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                      y: i === 0 ? 5 : i === 2 ? -5 : 0,
                      opacity: i === 1 ? 0 : 1,
                    } : { rotate: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-16"
            style={{ background: "rgba(2,5,16,0.97)", backdropFilter: "blur(30px)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button key={link.id} onClick={() => scrollTo(link.id)}
                  className="w-full max-w-xs py-4 text-center text-xl font-semibold rounded-2xl transition-all duration-200"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: activeSection === link.id ? "white" : "rgba(248,250,252,0.5)",
                    background: activeSection === link.id ? "rgba(124,58,237,0.15)" : "transparent",
                    border: `1px solid ${activeSection === link.id ? "rgba(124,58,237,0.3)" : "transparent"}`,
                  }}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}>
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="pb-8 flex justify-center">
              <a href={personalInfo.email} className="btn-primary">Get in Touch</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
