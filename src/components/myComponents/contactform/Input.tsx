import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-border bg-popover text-popover-foreground placeholder-muted-foreground px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
