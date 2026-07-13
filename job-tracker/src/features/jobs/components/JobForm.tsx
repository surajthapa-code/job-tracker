import { useForm } from "react-hook-form";
import type { JobStatus } from "../types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addJob } from "../jobsSlice";
import { Input, Select, Button } from "../../../components/ui";
import { useTheme } from "../../../shared/context/ThemeContext";
import { Save } from "lucide-react";

interface JobFormData {
  company: string;
  role: string;
  status: JobStatus;
  salary?: number;
  notes?: string;
}

export default function JobForm() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobFormData>({
    defaultValues: {
      status: "applied",
    },
  });

  const onSubmit = (data: JobFormData) => {
    dispatch(addJob(data));
    reset();
    navigate("/jobs");
  };

  const labelClass = `block text-sm font-medium ${
    isDark ? "text-slate-200" : "text-slate-700"
  }`;

  const errorClass = `text-sm text-rose-500 mt-1`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Company Name */}
      <div className="space-y-2">
        <label htmlFor="company" className={labelClass}>
          Company Name
        </label>
        <Input
          id="company"
          type="text"
          placeholder="Enter company name..."
          {...register("company", { required: "Company name is required" })}
        />
        {errors.company && (
          <p className={errorClass}>{errors.company.message}</p>
        )}
      </div>

      {/* Role */}
      <div className="space-y-2">
        <label htmlFor="role" className={labelClass}>
          Job Role
        </label>
        <Input
          id="role"
          type="text"
          placeholder="Enter job role..."
          {...register("role", { required: "Job role is required" })}
        />
        {errors.role && <p className={errorClass}>{errors.role.message}</p>}
      </div>

      {/* Status and Salary */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="status" className={labelClass}>
            Status
          </label>
          <select
            id="status"
            {...register("status", { required: "Status is required" })}
            className={`
              w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition
              ${
                isDark
                  ? "border-slate-700 bg-slate-800/50 text-slate-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  : "border-slate-300 bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              }
            `}
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
          {errors.status && (
            <p className={errorClass}>{errors.status.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="salary" className={labelClass}>
            Salary (Optional)
          </label>
          <Input
            id="salary"
            type="number"
            placeholder="Enter salary..."
            {...register("salary")}
          />
        </div>
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <label htmlFor="notes" className={labelClass}>
          Additional Notes (Optional)
        </label>
        <Input
          id="notes"
          type="text"
          placeholder="Add any notes..."
          {...register("notes")}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" className="w-full">
        <Save className="h-4 w-4" />
        Save Job
      </Button>
    </form>
  );
}
