import { useDispatch, useSelector } from "react-redux";
import type { JobStatus } from "../types";
import type { RootState } from "../../../store/store";
import { setFilter, setSearchQuery } from "../jobsSlice";

const Filters: Array<JobStatus | "all"> = [
  "all",
  "applied",
  "interview",
  "offer",
  "rejected",
];
function JobFilters() {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state: RootState) => state.jobs.filter);
  const currentSearchQuery = useSelector(
    (state: RootState) => state.jobs.searchQuery,
  );
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1">
        <input
          type="text"
          value={currentSearchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Search jobs"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-0">
        {Filters.map((filter) => {
          return (
            <button
              className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                currentFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
              key={filter}
              onClick={() => dispatch(setFilter(filter))}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default JobFilters;
