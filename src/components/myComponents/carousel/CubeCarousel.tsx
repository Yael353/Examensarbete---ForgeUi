import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const images = [
  { src: "/spring.jpg", alt: "Spring 1" },
  { src: "/spring2.jpg", alt: "Spring 2" },
  { src: "/spring3.jpg", alt: "Spring 3" },
];

export default function CubeCarousel() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full py-2">
      {/* Ram */}
      <div className="w-full py-2">
        {/* Ram */}
        <div className="relative bg-gradient-to-br from-primary to-accent p-5 rounded-3xl border-2 border-gold shadow-2xl flex flex-col items-center">
          {/* Bildyta */}
          <div className="relative w-full md:w-[95%] mx-auto overflow-hidden h-64 sm:h-64 md:h-72 rounded-2xl flex items-center justify-center">
            <AnimatePresence>
              {images.map((img, i) => {
                const isActive = i === index;
                return (
                  <motion.img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={clsx(
                      "absolute w-full h-full object-cover rounded-xl border-2 border-gold",
                      isActive ? "z-10" : "z-0 opacity-40"
                    )}
                    initial={{
                      rotateX: isActive ? 0 : 90,
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.9,
                    }}
                    animate={{
                      rotateX: 0,
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.9,
                    }}
                    exit={{
                      rotateX: -90,
                      opacity: 0,
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </AnimatePresence>
          </div>

          {/* Desktop-knappar */}
          <div className="hidden sm:flex w-full justify-between absolute top-1/2 -translate-y-1/2 px-4 z-20">
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="bg-primary text-foreground rounded-full p-3 shadow hover:border focus:outline-none focus:ring-2 focus:ring-gold border-gold"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="bg-primary text-foreground rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-gold shadow hover:border border-gold"
            >
              ›
            </button>
          </div>

          {/* Mobilknappar */}
          <div className="flex sm:hidden justify-between mt-4 w-full">
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="bg-primary text-foreground rounded-lg px-4 py-2 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-gold"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="bg-primary text-foreground rounded-lg px-4 py-2 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-gold"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
