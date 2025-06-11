import { InstallBlock } from "../InstallBlock";
import { ExpandableCodeBlock } from "../ExpandableCodeBlock";
import CubeCarousel from "./CubeCarousel";

const carouselCode = `import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";

export const CubeCarousel = () => {
  const images = [
    {
      src: "Your picture here",
      alt: "Nature image",
    },
    {
      src: "Your picture here",
      alt: "City image",
    },
    {
      src: "Your picture here",
      alt: "Tech image",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative bg-gradient-to-br from-[#0A192F] to-[#112240] p-8 rounded-3xl border-2 border-gold shadow-2xl flex 
        flex-col items-center">
        <div className="relative w-[90%] mx-auto overflow-hidden h-56 sm:h-64 md:h-72 rounded-2xl flex items-center 
          justify-center"
        >
          <AnimatePresence>
            {images.map((img, i) => {
              const isActive = i === index;
              return (
                <motion.img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={clsx(
                    "absolute w-full h-full object-cover rounded-xl border-2 border-gold transition-all",
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
            className="bg-primary text-foreground rounded-full p-3 shadow hover:border border-gold"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="bg-primary text-foreground rounded-full p-3 shadow hover:border border-gold"
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
  );
};
`;

export const CarouselGallery = () => {
  return (
    <div className="mx-4 ">
      <h3 className="text-5xl font-bold mb-4">Cube Carousel</h3>
      <p className="text-2xl text-accent-foreground/70 pb-10 font-merriweather">
        Stunning 3D-like vertical flip carousel with images managed inside the
        component.
      </p>

      {/* Komponentvisning */}
      <div className="flex flex-col items-start justify-start gap-6 border-2 rounded-md p-6">
        <div className="cursor-pointer w-full flex justify-center bg-primary p-4 rounded-md">
          <div className="w-full max-w-2xl">
            <CubeCarousel />
          </div>
        </div>
      </div>

      {/* Installationsblock */}
      <div className="mt-16 w-auto">
        <InstallBlock command="npm install framer-motion clsx" />
      </div>

      {/* Kodblock */}
      <div className="max-w-full mx-auto pt-16">
        <h4 className="text-xl font-bold mb-4">
          components/ui/CubeCarousel.tsx
        </h4>
        <ExpandableCodeBlock code={carouselCode} previewLines={15} />
      </div>
    </div>
  );
};
