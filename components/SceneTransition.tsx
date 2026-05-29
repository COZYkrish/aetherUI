"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Scanline overlay for cinematic feel
export function ScanLine() {
  return (
    <div className="scan-line pointer-events-none" aria-hidden="true" />
  );
}

// Scroll progress bar
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress-bar"
      style={{ width: "100%", transformOrigin: "left" }}
      aria-hidden="true"
    />
  );
}

// Section dots nav
const SECTIONS = ["home","about","skills","projects","cloud","timeline","contact"];

export function SectionNavDots() {
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const dots = dotsRef.current?.querySelectorAll(".section-nav-dot");
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        const dot = dots?.[i] as HTMLElement;
        if (!el || !dot) return;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        dot.classList.toggle("active", scrollPos >= top && scrollPos < bottom);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={dotsRef} className="section-nav-dots" aria-label="Section navigation">
      {SECTIONS.map((id) => (
        <button
          key={id}
          className="section-nav-dot"
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${id} section`}
          title={id.charAt(0).toUpperCase() + id.slice(1)}
        />
      ))}
    </div>
  );
}

// Dynamic ambient cursor light
export function CursorLight() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (lightRef.current) {
        lightRef.current.style.left = cx + "px";
        lightRef.current.style.top = cy + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={lightRef} className="cursor-light" aria-hidden="true" />;
}

// GSAP-powered section reveal
export function useSectionReveal(selector: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [selector]);
}
