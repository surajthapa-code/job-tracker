import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import JobCard from "../features/jobs/components/JobCard";

function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const job = useSelector((state: RootState) => state.jobs.items).find(
    (j) => j.id === id,
  );
  const navigate = useNavigate();
  if (!job) {
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-black/30">
        <h2 className="text-3xl font-semibold text-slate-100 mb-4">
          Job not found
        </h2>
        <p className="mb-6 text-sm text-slate-400">
          We couldn&apos;t find the requested job. Please return to the jobs
          list and try again.
        </p>
        <button
          onClick={() => navigate("/jobs")}
          className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          Back to jobs
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 rounded-3xl border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-black/30">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Job Details
          </p>
          <h2 className="mt-2 text-4xl font-semibold text-slate-100">
            Job overview
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            View the full listing and update the status as needed.
          </p>
        </div>
        <button
          onClick={() => navigate("/jobs")}
          className="rounded-2xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          Back to jobs
        </button>
      </div>

      <section className="space-y-4">
        <JobCard job={job} />
      </section>
    </div>
  );
}

export default JobDetail;
