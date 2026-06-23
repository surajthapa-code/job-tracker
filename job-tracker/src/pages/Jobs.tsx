import JobList from "../features/jobs/components/JobList";
import { Link } from "react-router-dom";

function Jobs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-100">Jobs</h2>
        <Link to="/jobs/add" className="text-sm text-blue-400 hover:underline">
          + Add Job
        </Link>
      </div>
      <JobList />
    </div>
  );
}

export default Jobs;
