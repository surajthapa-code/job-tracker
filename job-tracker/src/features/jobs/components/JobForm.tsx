import { useForm } from "react-hook-form";
import type { JobStatus } from "../types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addJob } from "../jobsSlice";

interface JobFormData {
  company: string;
  role: string;
  status: JobStatus;
  salary?: number;
  notes?: string;
}

export default function JobForm() {
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
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border border-gray-700 bg-slate-950/80 p-6 shadow-xl shadow-black/20"
    >
      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-200">
          Company Name
        </label>
        <input
          type="text"
          placeholder="company name"
          {...register("company", { required: "please enter comapany's name" })}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.company && (
          <p className="text-sm text-rose-400 mt-1">{errors.company.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-200">Role</label>
        <input
          type="text"
          placeholder="role"
          {...register("role", { required: "please enter job role" })}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.role && (
          <p className="text-sm text-rose-400 mt-1">{errors.role.message}</p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-200">
            select Status
          </label>
          <select
            {...register("status", { required: "must select a status" })}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          >
            <option value="applied">applied</option>
            <option value="interview">interview</option>
            <option value="offer">offer</option>
            <option value="rejected">rejected</option>
          </select>
          {errors.status && (
            <p className="text-sm text-rose-400 mt-1">
              {errors.status.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-200">
            Salary
          </label>
          <input
            type="number"
            placeholder="salary"
            {...register("salary")}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-200">
          Additional Notes
        </label>
        <input
          type="text"
          placeholder="additional notes"
          {...register("notes")}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
      >
        Save Job
      </button>
    </form>
  );
}
