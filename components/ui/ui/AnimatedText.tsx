"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "word" | "char";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  once = true,
  as: Tag = "p",
  splitBy = "word",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  const items =
    splitBy === "char"
      ? text.split("")
      : text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="overflow-hidden"
      aria-label={text}
      style={{ perspective: "800px" }}
    >
      <Tag
        className={`${className} flex flex-wrap gap-x-[0.25em]`}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="overflow-hidden inline-block"
            style={{ verticalAlign: "bottom" }}
          >
            <motion.span
              className="inline-block"
              variants={itemVariants}
              style={{ transformOrigin: "bottom center" }}
            >
              {item}
              {splitBy === "word" && i < items.length - 1 ? "" : ""}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
