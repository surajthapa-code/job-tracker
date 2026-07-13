import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";

export default function Layout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`
      min-h-screen transition-all duration-500 font-sans
      ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
          : "bg-gradient-to-b from-white via-blue-50/30 to-slate-50 text-slate-900"
      }
    `}
    >
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <Outlet />
      </main>
    </div>
  );
}
