import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import JobFilters from "./JobFilters";
import { Link } from "react-router-dom";
import type { RootState } from "../../../store/store";
import { Button } from "../../../components/ui";
import { useTheme } from "../../../shared/context/ThemeContext";
import { Plus } from "lucide-react";

function JobList() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const items = useSelector((state: RootState) => state.jobs.items);
  const filter = useSelector((state: RootState) => state.jobs.filter);
  const searchQuery = useSelector((state: RootState) => state.jobs.searchQuery);

  const FiliterdJobs = items
    .filter((job) => job.status === filter || filter === "all")
    .filter(
      (job) =>
        job.company
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase()) ||
        job.role.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );

  if (items.length === 0) {
    return (
      <div
        className={`
        flex flex-col items-center justify-center py-20 text-center rounded-lg border p-8
        ${
          isDark
            ? "border-slate-700 bg-slate-900/30"
            : "border-slate-200 bg-slate-50"
        }
      `}
      >
        <h2
          className={`mb-4 text-2xl font-bold font-poppins ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          No Jobs Yet
        </h2>
        <p className={`mb-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          Track your first application to stay organized.
        </p>
        <Link to="/jobs/add" className="inline-block">
          <Button variant="primary">
            <Plus className="h-4 w-4" />
            Add Your First Job
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <JobFilters />

      {FiliterdJobs.length === 0 ? (
        <div
          className={`
          rounded-lg border py-12 px-6 text-center
          ${
            isDark
              ? "border-slate-700/50 border-dashed bg-slate-900/30 text-slate-400"
              : "border-slate-300/50 border-dashed bg-slate-100/50 text-slate-600"
          }
        `}
        >
          <p>No jobs match your filter or search.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {FiliterdJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default JobList;
