import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-400">
          JobTracker
        </Link>
        <div className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-medium"
                : "text-gray-400 hover:text-white"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-medium"
                : "text-gray-400 hover:text-white"
            }
          >
            Jobs
          </NavLink>
          <Link
            to="/jobs/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-medium"
          >
            + Add Job
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
