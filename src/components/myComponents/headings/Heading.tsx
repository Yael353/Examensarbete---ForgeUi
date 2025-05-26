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
    sm: "text-4xl",
    md: "text-2xl md:text-5xl",
    lg: "text-4xl md:text-6xl",
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
          animation: "wave 3s infinite",
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
        <style>{`
          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}</style>
      )}
    </>
  );
};
