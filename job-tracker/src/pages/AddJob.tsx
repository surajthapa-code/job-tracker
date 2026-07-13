import JobForm from "../features/jobs/components/JobForm";
import { useTheme } from "../shared/context/ThemeContext";

function AddJob() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <h1
          className={`text-3xl font-bold font-poppins ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Add New Job
        </h1>
        <p
          className={`mt-2 text-sm ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Track a new job application and stay organized
        </p>
      </div>

      <div
        className={`
        rounded-lg border p-6
        ${
          isDark
            ? "border-slate-700 bg-slate-900/50"
            : "border-slate-200 bg-white/50"
        }
      `}
      >
        <JobForm />
      </div>
    </div>
  );
}

export default AddJob;
