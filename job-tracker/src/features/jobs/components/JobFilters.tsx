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
    <div>
      <div>
        {" "}
        <input
          type="text"
          value={currentSearchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="search job you applied"
        />
      </div>
      <div>
        {Filters.map((filter) => {
          return (
            <button
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                currentFilter === filter
                  ? "bg-blue-600 text-white" // <-- Highlighting the active button!
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200" // <-- Inactive buttons
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
