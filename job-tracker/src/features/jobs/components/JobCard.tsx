import type { Job, JobStatus } from "../types";
import { useDispatch } from "react-redux";
import { removeJob, updateStatus } from "../jobsSlice";
import { useNavigate } from "react-router-dom";
import type React from "react";

interface JobCardProps {
  job: Job;
}

const statusColors: Record<JobStatus, string> = {
  applied: "bg-blue-500/20 text-blue-300",
  interview: "bg-yellow-500/20 text-yellow-300",
  offer: "bg-green-500/20 text-green-300",
  rejected: "bg-red-500/20 text-red-300",
};

export default function JobCard({ job }: JobCardProps) {
  const dispatch = useDispatch();
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeJob(job.id));
  };
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateStatus({ id: job.id, status: e.target.value as JobStatus }));
  };
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/jobs/${job.id}`)}
      className="group cursor-pointer rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-900"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-slate-100">
            {job.company}
          </h3>
          <p className="text-sm text-slate-400">{job.role}</p>
        </div>

        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusColors[job.status]}`}
        >
          {job.status}
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="space-y-2 text-sm text-slate-300">
          <p className="text-slate-200">Date</p>
          <p className="rounded-2xl bg-slate-900 px-3 py-2">{job.date}</p>
          {job.salary && (
            <p className="rounded-2xl bg-slate-900 px-3 py-2">
              Salary: ${job.salary}
            </p>
          )}
          {job.notes && (
            <p className="rounded-2xl bg-slate-900 px-3 py-2">
              Notes: {job.notes}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <select
            onClick={(e) => e.stopPropagation()}
            onChange={handleChangeStatus}
            defaultValue={`${job.status}`}
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          >
            <option value="applied">applied</option>
            <option value="interview">interview</option>
            <option value="offer">offer</option>
            <option value="rejected">rejected</option>
          </select>

          <button
            onClick={handleDelete}
            className="w-full rounded-2xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
