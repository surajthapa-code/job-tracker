import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import JobFilters from "./JobFilters";
import { Link } from "react-router-dom";
import type { RootState } from "../../../store/store";

function JobList() {
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
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="mb-4 text-2xl font-bold text-slate-200">No jobs yet</h2>
        <p className="mb-8 text-slate-400">
          Track your first application to get started.
        </p>
        <Link
          to="/jobs/add"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          + Add New Job
        </Link>
      </div>
    );
  }

  return (
    <div>
      <JobFilters />
      {FiliterdJobs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 py-12 text-center text-slate-400">
          No jobs match this filter or search.
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
