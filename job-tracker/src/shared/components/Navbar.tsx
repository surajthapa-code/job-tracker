import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../../features/jobs/components/ToggleTheme";
// import { useTheme } from "../context/ThemeContext";
// import { useEffect } from "react";

function Navbar() {
  // const { theme, toggleTheme } = useTheme();

  // useEffect(() => {
  //   const html = document.documentElement;
  //   html.classList.remove("light", "dark");
  //   html.classList.add(theme);
  // }, [theme]);

  return (
    <nav className="border-b border-slate-800/80 bg-slate-950/95 px-3 py-3 sm:px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/"
          className="flex items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-lg font-semibold text-blue-400 sm:justify-start"
        >
          JOB TRACKER
        </Link>
        <ThemeToggle />
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end sm:gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-full px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600/20 text-blue-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600/20 text-blue-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Jobs
          </NavLink>
          <Link
            to="/jobs/add"
            className="rounded-full bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            + Add Job
          </Link>
          {/* <button onClick={toggleTheme}>{theme}</button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
