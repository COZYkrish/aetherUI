"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  className = "",
  strength = 40,
  as: Tag = "button",
  href,
  target,
  rel,
  onClick,
  type,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [, setIsHovered] = useState(false);

  const springConfig = { stiffness: 350, damping: 30, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      x.set((distX / (rect.width / 2)) * strength);
      y.set((distY / (rect.height / 2)) * strength);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  const props = {
    ref: ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>,
    className,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    onClick,
    ...(Tag === "a" ? { href, target, rel } : { type }),
  };

  return (
    <motion.div style={{ x, y, display: "inline-flex" }} data-magnetic>
      <Tag {...props}>{children}</Tag>
    </motion.div>
  );
}
