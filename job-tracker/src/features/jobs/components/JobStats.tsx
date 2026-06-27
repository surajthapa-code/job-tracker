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
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-3 shadow-md shadow-black/20 sm:p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
          Total
        </p>
        <p className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">
          {stats.total}
        </p>
      </div>

      <div className="rounded-2xl border border-blue-700/40 bg-blue-900/10 p-3 shadow-md shadow-black/20 sm:p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-sm">
          Applied
        </p>
        <p className="mt-2 text-xl font-semibold text-blue-100 sm:text-2xl">
          {stats.applied}
        </p>
      </div>

      <div className="rounded-2xl border border-yellow-700/30 bg-yellow-900/10 p-3 shadow-md shadow-black/20 sm:p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-300 sm:text-sm">
          Interview
        </p>
        <p className="mt-2 text-xl font-semibold text-yellow-100 sm:text-2xl">
          {stats.interview}
        </p>
      </div>

      <div className="rounded-2xl border border-green-700/30 bg-green-900/10 p-3 shadow-md shadow-black/20 sm:p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green-300 sm:text-sm">
          Offer
        </p>
        <p className="mt-2 text-xl font-semibold text-green-100 sm:text-2xl">
          {stats.offer}
        </p>
      </div>

      <div className="rounded-2xl border border-rose-700/30 bg-rose-900/10 p-3 shadow-md shadow-black/20 sm:p-4 sm:col-span-1 col-span-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-300 sm:text-sm">
          Rejected
        </p>
        <p className="mt-2 text-xl font-semibold text-rose-100 sm:text-2xl">
          {stats.rejected}
        </p>
      </div>
    </div>
  );
}
