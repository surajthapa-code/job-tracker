import JobList from "../features/jobs/components/JobList";
import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import { useTheme } from "../shared/context/ThemeContext";
import { Plus } from "lucide-react";

function Jobs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1
          className={`text-3xl font-bold font-poppins ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          All Jobs
        </h1>
        <Link to="/jobs/add" className="inline-block">
          <Button variant="primary" size="sm">
            <Plus className="h-4 w-4" />
            Add Job
          </Button>
        </Link>
      </div>
      <JobList />
    </div>
  );
}

export default Jobs;
