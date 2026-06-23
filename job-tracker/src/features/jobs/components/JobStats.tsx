import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

export default function JobStats() {
  const items = useSelector((state: RootState) => state.jobs.items);

  const stats = {
    total: items.length,
    applied: items.filter((j) => j.status === "applied").length,
    interview: items.filter((j) => j.status === "interview").length,
    offer: items.filter((j) => j.status === "offer").length,
    rejected: items.filter((j) => j.status === "rejected").length,
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-4 shadow-md">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
          Total
        </p>
        <p className="mt-2 text-2xl font-semibold text-slate-100">
          {stats.total}
        </p>
      </div>

      <div className="rounded-2xl border border-blue-700/40 bg-blue-900/10 p-4 shadow-md">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-300">
          Applied
        </p>
        <p className="mt-2 text-2xl font-semibold text-blue-100">
          {stats.applied}
        </p>
      </div>

      <div className="rounded-2xl border border-yellow-700/30 bg-yellow-900/10 p-4 shadow-md">
        <p className="text-sm font-medium uppercase tracking-wide text-yellow-300">
          Interview
        </p>
        <p className="mt-2 text-2xl font-semibold text-yellow-100">
          {stats.interview}
        </p>
      </div>

      <div className="rounded-2xl border border-green-700/30 bg-green-900/10 p-4 shadow-md">
        <p className="text-sm font-medium uppercase tracking-wide text-green-300">
          Offer
        </p>
        <p className="mt-2 text-2xl font-semibold text-green-100">
          {stats.offer}
        </p>
      </div>

      <div className="rounded-2xl border border-rose-700/30 bg-rose-900/10 p-4 shadow-md">
        <p className="text-sm font-medium uppercase tracking-wide text-rose-300">
          Rejected
        </p>
        <p className="mt-2 text-2xl font-semibold text-rose-100">
          {stats.rejected}
        </p>
      </div>
    </div>
  );
}
