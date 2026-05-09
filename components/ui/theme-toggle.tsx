"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-muted animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <iconify-icon icon="solar:sun-2-bold-duotone" class="text-2xl"></iconify-icon>
      ) : (
        <iconify-icon icon="solar:moon-bold-duotone" class="text-2xl"></iconify-icon>
      )}
    </button>
  );
}
