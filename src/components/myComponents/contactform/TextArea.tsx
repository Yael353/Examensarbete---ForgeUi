import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-border bg-popover text-popover-foreground placeholder-muted-foreground px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
