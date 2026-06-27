import JobStats from "../features/jobs/components/JobStats";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import JobCard from "../features/jobs/components/JobCard";
import { Link } from "react-router-dom";

function Dashboard() {
  const items = useSelector((state: RootState) => state.jobs.items);
  const RecentJobs = items.slice(-5).reverse();
  if (RecentJobs.length === 0) {
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 shadow-xl shadow-black/30 sm:p-8">
        <h4 className="mb-4 text-xl font-semibold text-slate-100">
          No applications yet
        </h4>
        <p className="mb-6 text-sm text-slate-400">
          You don't have any job applications yet. Add your first application to
          get started.
        </p>
        <Link
          to="/jobs/add"
          className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
        >
          Add new job
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 sm:space-y-8">
      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-xl shadow-black/20 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">
              Stats
            </h2>
            <p className="text-sm text-slate-400">
              Overview of your job applications
            </p>
          </div>
        </div>

        <div className="mt-4">
          <JobStats />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-xl shadow-black/20 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">
            Recent Applications
          </h2>
          {RecentJobs.length >= 5 && (
            <Link
              to="/jobs"
              className="text-sm font-medium text-blue-400 hover:underline"
            >
              See all
            </Link>
          )}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RecentJobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
