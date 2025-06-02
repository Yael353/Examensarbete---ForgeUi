import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  image: string;
  imageAlt: string;
  text: string;
  className?: string;
  small?: boolean;
}

export default function Card({
  title,
  image,
  imageAlt,
  text,
  className,
  small = false,
}: CardProps) {
  return (
    <article
      tabIndex={0}
      aria-label={`Kort med titel: ${title}`}
      className={cn(
        "rounded-2xl overflow-hidden bg-popover shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] group relative focus:outline-none focus:ring-4 focus:ring-ring",
        "cursor-pointer focus-visible:ring-4 focus-visible:ring-ring",
        "transition-all ease-in-out",
        className
      )}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className={cn(
            "w-full object-cover transition-transform duration-500 group-hover:scale-105",
            small ? "h-36" : "h-48"
          )}
        />
      </div>
      <div className="p-4 space-y-2">
        <h3
          className={cn(
            "font-semibold text-foreground",
            small ? "text-base" : "text-lg"
          )}
        >
          {title}
        </h3>
        <p
          className={cn("text-muted-foreground", small ? "text-xs" : "text-sm")}
        >
          {text}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  );
}
