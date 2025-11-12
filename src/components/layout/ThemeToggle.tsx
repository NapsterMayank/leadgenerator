"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className={cn(
        "relative h-10 w-10 rounded-full border-border/60 bg-background/80 transition-colors hover:bg-muted",
        className
      )}
    >
      <Sun
        className={cn(
          "h-4 w-4 rotate-0 scale-100 transition-all",
          mounted && resolvedTheme === "dark" && "rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 rotate-90 scale-0 transition-all",
          mounted && resolvedTheme === "dark" && "rotate-0 scale-100"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
