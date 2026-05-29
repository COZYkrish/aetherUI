"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const Word = ({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) => {
  const chars = word.split("");
  const step = (range[1] - range[0]) / chars.length;
  
  return (
    <span className="inline-block mr-[0.25em] mb-[0.1em]">
      {chars.map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return <Character key={i} char={char} progress={progress} range={[start, end]} />;
      })}
    </span>
  );
};

const Character = ({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = "", style }: { text: string; className?: string; style?: React.CSSProperties }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  return (
    <p ref={ref} className={`relative flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
};
