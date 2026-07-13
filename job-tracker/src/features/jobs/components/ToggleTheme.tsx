import { useTheme } from "../../../shared/context/ThemeContext";
import type { JSX } from "react";

function ThemeToggle(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`
        group relative inline-flex items-center h-8 w-16 rounded-full
        transition-all duration-300 cursor-pointer select-none
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${
          isDark
            ? "bg-slate-700/60 hover:bg-slate-600/60 shadow-md"
            : "bg-blue-100/70 hover:bg-blue-150/80 shadow-sm"
        }
      `}
    >
      {/* Sliding Thumb */}
      <div
        className={`
          absolute w-7 h-7 rounded-full transition-all duration-300 transform
          ${
            isDark
              ? "translate-x-8 bg-white shadow-lg"
              : "translate-x-0.5 bg-white shadow-md"
          }
        `}
      />

      {/* Sun Icon - Left */}
      <span
        className={`
          absolute left-1.5 text-lg transition-all duration-300 transform
          pointer-events-none z-10
          ${isDark ? "opacity-0 scale-50" : "opacity-100 scale-100"}
        `}
      >
        ☀️
      </span>

      {/* Moon Icon - Right */}
      <span
        className={`
          absolute right-1.5 text-lg transition-all duration-300 transform
          pointer-events-none z-10
          ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        `}
      >
        🌙
      </span>
    </button>
  );
}

export default ThemeToggle;
