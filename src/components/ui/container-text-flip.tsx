import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["modern", "robust", "scalable", "complete"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState(0);

  // Beräkna maxbredd vid mount
  useEffect(() => {
    if (!containerRef.current) return;

    let max = 0;
    const tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden";
    tempSpan.style.position = "absolute";
    tempSpan.style.whiteSpace = "nowrap";
    document.body.appendChild(tempSpan);

    words.forEach((word) => {
      tempSpan.textContent = word;
      const width = tempSpan.getBoundingClientRect().width;
      if (width > max) max = width;
    });

    document.body.removeChild(tempSpan);
    setMaxWidth(max + 20); // plus lite padding
  }, [words]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, words.length]);

  return (
    <div
      ref={containerRef}
      style={{ verticalAlign: "baseline", width: maxWidth ? maxWidth : "auto" }}
      className={cn(
        "relative inline-block font-merriweather align-baseline text-center text-3xl leading-[0.6] bg-background text-foreground dark:text-white overflow-hidden",
        className
      )}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={words[currentWordIndex]}
          className={cn("inline-block align-baseline", textClassName)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
        >
          {words[currentWordIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
