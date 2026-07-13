import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../../features/jobs/components/ToggleTheme";
import { useTheme } from "../context/ThemeContext";
import { Button } from "../../components/ui";
import { Plus } from "lucide-react";

function Navbar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      className={`
      transition-all duration-300 backdrop-blur-md
      ${
        isDark
          ? "border-b border-slate-700/50 bg-gradient-to-r from-slate-950/80 to-slate-900/80 shadow-xl"
          : "border-b border-slate-200/60 bg-gradient-to-r from-white/90 to-blue-50/90 shadow-md"
      }
      px-4 py-4 sm:px-6 sticky top-0 z-50
    `}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo - Modern Badge Style */}
        <Link
          to="/"
          className={`
            flex items-center justify-center sm:justify-start gap-2.5
            transition-all duration-300 group
          `}
        >
          <div
            className={`
              flex items-center justify-center w-10 h-10 rounded-xl font-poppins font-bold text-sm
              transition-all duration-300
              ${
                isDark
                  ? "bg-gradient-to-br from-blue-600/80 to-cyan-600/60 text-white group-hover:shadow-lg group-hover:shadow-blue-500/30"
                  : "bg-gradient-to-br from-blue-600 to-cyan-500 text-white group-hover:shadow-lg group-hover:shadow-blue-400/40"
              }
            `}
          >
            JT
          </div>
          <span
            className={`
              text-base sm:text-lg font-poppins font-bold tracking-tight
              transition-all duration-300
              ${isDark ? "text-white" : "text-slate-900"}
            `}
          >
            JobTracker
            <span className="ml-2 text-blue-200 font-thin">( AI designed this )</span>
          </span>
        </Link>

        {/* Center Navigation - Desktop only */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `
              rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? isDark
                    ? "bg-blue-600/30 text-blue-200 shadow-sm"
                    : "bg-blue-100/60 text-blue-700 shadow-sm"
                  : isDark
                    ? "text-slate-300 hover:bg-slate-700/50 hover:text-blue-300"
                    : "text-slate-700 hover:bg-blue-50/60 hover:text-blue-600"
              }
            `}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => `
              rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? isDark
                    ? "bg-blue-600/30 text-blue-200 shadow-sm"
                    : "bg-blue-100/60 text-blue-700 shadow-sm"
                  : isDark
                    ? "text-slate-300 hover:bg-slate-700/50 hover:text-blue-300"
                    : "text-slate-700 hover:bg-blue-50/60 hover:text-blue-600"
              }
            `}
          >
            Jobs
          </NavLink>
        </div>

        {/* Right Side - Theme Toggle & Add Button */}
        <div className="flex items-center justify-center gap-3 sm:justify-end">
          <ThemeToggle />
          <Link to="/jobs/add" className="inline-block">
            <Button variant="primary" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Job</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
        flex sm:hidden flex-wrap items-center justify-center gap-2 mt-4 pt-4
        ${
          isDark
            ? "border-t border-slate-700/40"
            : "border-t border-slate-200/40"
        }
      `}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) => `
            rounded-lg px-3 py-2 text-xs font-medium transition-all duration-300
            ${
              isActive
                ? isDark
                  ? "bg-blue-600/30 text-blue-200"
                  : "bg-blue-100/60 text-blue-700"
                : isDark
                  ? "text-slate-300 hover:bg-slate-700/50"
                  : "text-slate-700 hover:bg-blue-50/60"
            }
          `}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) => `
            rounded-lg px-3 py-2 text-xs font-medium transition-all duration-300
            ${
              isActive
                ? isDark
                  ? "bg-blue-600/30 text-blue-200"
                  : "bg-blue-100/60 text-blue-700"
                : isDark
                  ? "text-slate-300 hover:bg-slate-700/50"
                  : "text-slate-700 hover:bg-blue-50/60"
            }
          `}
        >
          Jobs
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
