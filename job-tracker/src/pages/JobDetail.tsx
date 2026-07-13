import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import JobCard from "../features/jobs/components/JobCard";
import { Button } from "../components/ui";
import { useTheme } from "../shared/context/ThemeContext";
import { ArrowLeft } from "lucide-react";

function JobDetail() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { id } = useParams<{ id: string }>();
  const job = useSelector((state: RootState) => state.jobs.items).find(
    (j) => j.id === id,
  );
  const navigate = useNavigate();

  if (!job) {
    return (
      <div
        className={`
        mx-auto max-w-2xl rounded-lg border p-8 text-center
        ${
          isDark
            ? "border-slate-700 bg-slate-900/50"
            : "border-slate-200 bg-white/50"
        }
      `}
      >
        <h2
          className={`text-3xl font-bold font-poppins mb-4 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Job Not Found
        </h2>
        <p
          className={`mb-6 text-sm ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          We couldn&apos;t find the requested job. Please return to the jobs
          list and try again.
        </p>
        <Button onClick={() => navigate("/jobs")} variant="primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p
            className={`text-xs uppercase tracking-widest font-semibold ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Job Details
          </p>
          <h1
            className={`mt-2 text-3xl font-bold font-poppins ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Job Overview
          </h1>
        </div>
        <Button onClick={() => navigate("/jobs")} variant="outline">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="space-y-4">
        <JobCard job={job} />
      </div>
    </div>
  );
}

export default JobDetail;
