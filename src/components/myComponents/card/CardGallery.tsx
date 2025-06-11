"use client";

import Card from "./Card";
import { InstallBlock } from "../InstallBlock";
import { ExpandableCodeBlock } from "../ExpandableCodeBlock";

const cardComponentCode = `
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  image: string;
  imageAlt: string;
  text: string;
  className?: string;
}

export default function Card({ title, image, imageAlt, text, className }: CardProps) {
  return (
    <article
      tabIndex={0}
      aria-label={\`Kort med titel: \${title}\`}
      className={cn(
        "rounded-2xl overflow-hidden bg-popover shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] group relative focus:outline-none focus:ring-4 focus:ring-ring",
        "cursor-pointer",
        className
      )}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{text}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  );
}
`;

export const CardGallery = () => {
  return (
    <div className="">
      <h3 className="flex text-5xl justify-start font-bold pb-2 mx-4">Cards</h3>
      <p className="text-2xl text-accent-foreground/70 pb-5 font-merriweather mx-4">
        Elegant, accessible, and responsive cards for modern interfaces.
      </p>

      <div className="flex flex-col md:flex-row gap-6 border-2 justify-between rounded-md p-6 mx-4">
        <div className="w-full md:w-fit ">
          <Card
            title="Modern Card"
            image="/spring.jpg"
            imageAlt="Modern card image"
            text="This is a beautiful, accessible card with subtle animations and dark mode support."
          />
        </div>
        <div className="w-full md:w-fit">
          <Card
            title="Elegant Design"
            image="/spring2.jpg"
            imageAlt="Elegant card image"
            text="Perfect for product highlights, features, or galleries in your web projects."
          />
        </div>
        <div className="w-full md:w-fit">
          <Card
            title="WCAG Ready"
            image="/spring3.jpg"
            imageAlt="WCAG friendly card"
            text="Fully keyboard navigable, screen-reader friendly and optimized for all users."
          />
        </div>
        <div className="w-full md:w-fit">
          <Card
            title="WCAG Ready"
            image="/spring3.jpg"
            imageAlt="WCAG friendly card"
            text="Fully keyboard navigable, screen-reader friendly and optimized for all users."
          />
        </div>
      </div>

      <div className="mt-16 mx-4">
        <InstallBlock command={`npm install clsx`} />
      </div>

      <div className="pt-16 mx-4">
        <h4 className="text-2xl font-bold mb-4">components/ui/Card.tsx</h4>
        <ExpandableCodeBlock code={cardComponentCode} previewLines={12} />
      </div>
    </div>
  );
};
