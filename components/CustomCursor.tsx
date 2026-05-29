"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<"default" | "hover" | "click" | "text">(
    "default"
  );
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const dotSpringConfig = { damping: 50, stiffness: 500, mass: 0.2 };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setVariant("click");
    const handleMouseUp = () => setVariant("default");

    // Use event delegation for high performance instead of MutationObserver
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Interactive elements take priority
      if (target.closest("a, button, [data-cursor='hover'], [data-magnetic]")) {
        setVariant("hover");
        return;
      }
      
      // Text elements
      if (target.closest("p, h1, h2, h3, h4, h5, h6")) {
        setVariant("text");
        return;
      }
      
      setVariant("default");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isVisible) return null;

  const ringVariants = {
    default: {
      width: 36,
      height: 36,
      borderColor: "rgba(124, 58, 237, 0.7)",
      backgroundColor: "rgba(124, 58, 237, 0)",
      scale: 1,
    },
    hover: {
      width: 56,
      height: 56,
      borderColor: "rgba(6, 182, 212, 0.9)",
      backgroundColor: "rgba(6, 182, 212, 0.08)",
      scale: 1,
    },
    click: {
      width: 28,
      height: 28,
      borderColor: "rgba(124, 58, 237, 1)",
      backgroundColor: "rgba(124, 58, 237, 0.15)",
      scale: 0.9,
    },
    text: {
      width: 3,
      height: 36,
      borderRadius: "2px",
      borderColor: "rgba(248, 250, 252, 0.9)",
      backgroundColor: "rgba(248, 250, 252, 0.9)",
      scale: 1,
    },
  };

  const dotVariants = {
    default: { width: 6, height: 6, backgroundColor: "#7C3AED", opacity: 1 },
    hover: { width: 8, height: 8, backgroundColor: "#06B6D4", opacity: 0 },
    click: { width: 10, height: 10, backgroundColor: "#7C3AED", opacity: 1 },
    text: { opacity: 0, width: 0, height: 0 },
  };

  return (
    <>
      {/* Ring cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={ringVariants}
        animate={variant}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
      />

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={dotVariants}
        animate={variant}
        transition={{ type: "spring", damping: 50, stiffness: 500 }}
      />
    </>
  );
}
