import { useDispatch, useSelector } from "react-redux";
import type { JobStatus } from "../types";
import type { RootState } from "../../../store/store";
import { setFilter, setSearchQuery } from "../jobsSlice";
import { Input } from "../../../components/ui";
import { useTheme } from "../../../shared/context/ThemeContext";

const Filters: Array<JobStatus | "all"> = [
  "all",
  "applied",
  "interview",
  "offer",
  "rejected",
];

const filterLabels: Record<JobStatus | "all", string> = {
  all: "All",
  applied: "Applied",
  interview: "Interview",
  offer: "Offer",
  rejected: "Rejected",
};

function JobFilters() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();

  const currentFilter = useSelector((state: RootState) => state.jobs.filter);
  const currentSearchQuery = useSelector(
    (state: RootState) => state.jobs.searchQuery,
  );

  return (
    <div
      className={`
      flex flex-col gap-4 rounded-lg border p-4
      ${
        isDark
          ? "border-slate-700 bg-slate-900/30"
          : "border-slate-200 bg-white/50"
      }
      sm:flex-row sm:items-center
    `}
    >
      <div className="flex-1">
        <Input
          type="text"
          value={currentSearchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Search by company or role..."
          className="w-full"
        />
      </div>

      <div className="flex flex-nowrap items-center gap-2 overflow-x-auto">
        {Filters.map((filter) => {
          const isActive = currentFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => dispatch(setFilter(filter))}
              className={`
                whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-all
                ${
                  isActive
                    ? isDark
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-blue-600 text-white shadow-md"
                    : isDark
                      ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }
              `}
            >
              {filterLabels[filter]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default JobFilters;
