import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";

interface CustomToasterProps extends ToasterProps {}

const Toaster = ({ ...props }: CustomToasterProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast:
            "bg-[--color-background] text-[--color-foreground] border border-[--color-border]",
          success: "bg-green-500 text-white",
          error: "bg-red-500 text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
