import { useState } from "react";
import { Heading } from "./Heading";
import { ExpandableCodeBlock } from "./ExpandableCodeBlock";
import { InstallBlock } from "../InstallBlock";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";

const headingCode = `
import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "neutral" | "gradient" | "wave" | "glow";
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  children,
  size = "md",
  variant = "neutral",
  className,
}) => {
  const baseStyles = "font-bold tracking-tight";

  const sizeStyles = {
    sm: "text-lg",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-6xl md:text-7xl",
  };

  const variantStyles = {
    neutral:
      "bg-gradient-to-br from-black/80 via-gray-700/80 to-black/80 dark:from-white/90 dark:via-gray-300/80 dark:to-white/90 bg-clip-text text-transparent",
    gradient:
      "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent",
    wave: "text-blue-500 dark:text-cyan-400",
    glow: "text-white dark:text-white",
  };

  const waveAnimation: React.CSSProperties =
    variant === "wave"
      ? {
          animation: "wave 2s infinite",
          display: "inline-block",
        }
      : {};

  const glowStyle: React.CSSProperties =
    variant === "glow"
      ? {
          textShadow: "0 0 8px #00BFFF, 0 0 16px #FF00FF",
        }
      : {};

  return (
    <>
      <Component
        className={clsx(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        style={{ ...waveAnimation, ...glowStyle }}
      >
        {children || "Forge Your Own Heading"}
      </Component>

      {variant === "wave" && (
        <style>{'@keyframes wave { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }'}</style>
      )}
    </>
  );
};
`;

export const HeadingGallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const headings = [
    {
      id: 1,
      preview: (
        <Heading variant="neutral" size="xl" as="h1">
          Neutral Heading
        </Heading>
      ),
      code: `<Heading variant="neutral" size="xl" as="h1">
  neutal Heading
</Heading>`,
    },
    {
      id: 2,
      preview: (
        <Heading variant="gradient" size="lg" as="h2">
          Gradient Heading
        </Heading>
      ),
      code: `<Heading variant="gradient" size="lg" as="h2">
  Gradient Heading
</Heading>`,
    },
    {
      id: 3,
      preview: (
        <Heading variant="wave" size="md" as="h3">
          Wave Heading
        </Heading>
      ),
      code: `<Heading variant="wave" size="md" as="h3">
  Wave Heading
</Heading>`,
    },
    {
      id: 4,
      preview: (
        <Heading variant="glow" size="sm" as="h4">
          Glow Heading
        </Heading>
      ),
      code: `<Heading variant="glow" size="sm" as="h4">
  Glow Heading
</Heading>`,
    },
  ];

  return (
    <div>
      <h3 className="flex text-5xl justify-start font-bold pb-2">Headings</h3>
      <p className="text-2xl text-accent-foreground/70 pb-10">
        Clear headings help users to find their way and follow the content with
        ease.
      </p>

      <div className="flex flex-col items-start justify-start gap-6 border-2 rounded-md p-4">
        {headings.map(({ id, preview, code }) => (
          <div
            key={id}
            onClick={() => setSelectedId(id === selectedId ? null : id)}
            className="cursor-pointer"
          >
            {preview}
            {selectedId === id && (
              <div className="mt-4 rounded-lg w-fit mx-auto text-left overflow-hidden">
                <SyntaxHighlighter
                  language="tsx"
                  style={anOldHope}
                  customStyle={{ padding: "1rem", borderRadius: "0.5rem" }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 w-auto">
        <InstallBlock />
      </div>

      <div className="max-w-full mx-auto pt-16">
        <h4 className="text-2xl font-bold mb-4">components/ui/Heading.tsx</h4>
        <ExpandableCodeBlock code={headingCode} previewLines={12} />
      </div>
    </div>
  );
};
