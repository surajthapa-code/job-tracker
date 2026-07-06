import { useEffect, useState, type JSX } from "react";

type Theme = "Light" | "Dark";

function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedtheme = localStorage.getItem("theme") as Theme;
      if (savedtheme === "Light" || savedtheme === "Dark") return savedtheme;

      const systemPreferDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return systemPreferDark ? "Dark" : "Light";
    }
    return "Light";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    if (theme === "Dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "Dark" ? "Light" : "Dark"));
  }

  const isDark = theme === "Dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`
        relative w-[68px] h-[34px] rounded-full p-1 flex items-center transition-colors duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-blue-400
        ${isDark ? "bg-blue-600" : "bg-gray-300"}
      `}
    >
      {/* Sliding Thumb */}
      <div
        className={`
          absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 top-1 z-10
          ${isDark ? "translate-x-[34px]" : "translate-x-0"}
        `}
      />

      {/* Sun Icon */}
      <span
        className={`
          absolute left-2 text-sm z-0 transition-opacity duration-300
          ${isDark ? "opacity-0" : "opacity-100"}
        `}
      >
        ☀️
      </span>

      {/* Moon Icon */}
      <span
        className={`
          absolute right-2 text-sm z-0 transition-opacity duration-300
          ${isDark ? "opacity-100" : "opacity-0"}
        `}
      >
        🌙
      </span>
    </button>
  );
}

export default ThemeToggle;
