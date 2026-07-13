import JobStats from "../features/jobs/components/JobStats";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import JobCard from "../features/jobs/components/JobCard";
import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import { useTheme } from "../shared/context/ThemeContext";

function Dashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const items = useSelector((state: RootState) => state.jobs.items);
  const RecentJobs = items.slice(-5).reverse();

  if (RecentJobs.length === 0) {
    return (
      <div
        className={`
        mx-auto max-w-2xl rounded-xl border p-8 text-center
        ${
          isDark
            ? "border-slate-700 bg-slate-900/50"
            : "border-slate-200 bg-slate-50/50"
        }
      `}
      >
        <h2
          className={`mb-3 text-2xl font-bold font-poppins ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Welcome to JobTracker
        </h2>
        <p
          className={`mb-6 text-base ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Start tracking your job applications to stay organized and follow up
          efficiently.
        </p>
        <Link to="/jobs/add" className="inline-block">
          <Button variant="primary">Add Your First Job Application</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div
        className={`
        rounded-lg border p-6
        ${
          isDark
            ? "border-slate-700 bg-slate-900/50"
            : "border-slate-200 bg-white/50"
        }
      `}
      >
        <div className="mb-4">
          <h2
            className={`text-2xl font-bold font-poppins ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Your Stats
          </h2>
          <p
            className={`text-sm ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Overview of your job applications
          </p>
        </div>
        <JobStats />
      </div>

      {/* Recent Applications Section */}
      <div
        className={`
        rounded-lg border p-6
        ${
          isDark
            ? "border-slate-700 bg-slate-900/50"
            : "border-slate-200 bg-white/50"
        }
      `}
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2
              className={`text-2xl font-bold font-poppins ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Recent Applications
            </h2>
          </div>
          {RecentJobs.length >= 5 && (
            <Link to="/jobs">
              <Button variant="ghost" className="text-sm">
                View All →
              </Button>
            </Link>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RecentJobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
