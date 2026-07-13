import type { Job, JobStatus } from "../types";
import { useDispatch } from "react-redux";
import { removeJob, updateStatus } from "../jobsSlice";
import { useNavigate } from "react-router-dom";
import type React from "react";
import { Card } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { Select } from "../../../components/ui/Select";
import { useTheme } from "../../../shared/context/ThemeContext";
import { Trash2 } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const statusVariants: Record<
  JobStatus,
  "info" | "warning" | "success" | "destructive"
> = {
  applied: "info",
  interview: "warning",
  offer: "success",
  rejected: "destructive",
};

const statusLabels: Record<JobStatus, string> = {
  applied: "Applied",
  interview: "Interview",
  offer: "Offer",
  rejected: "Rejected",
};

export default function JobCard({ job }: JobCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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
    <Card
      onClick={() => navigate(`/jobs/${job.id}`)}
      className={`
        cursor-pointer transition-all hover:shadow-lg
        ${isDark ? "hover:border-blue-600/50" : "hover:border-blue-400/50"}
      `}
    >
      <div className="p-6">
        {/* Header with Company and Status */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3
              className={`font-semibold leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {job.company}
            </h3>
            <p
              className={`text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {job.role}
            </p>
          </div>
          <Badge variant={statusVariants[job.status]}>
            {statusLabels[job.status]}
          </Badge>
        </div>

        {/* Job Details */}
        <div
          className={`mb-4 space-y-2 text-sm ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <div>
            <p
              className={`text-xs font-medium ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Applied on
            </p>
            <p className="font-medium">{job.date}</p>
          </div>

          {job.salary && (
            <div>
              <p
                className={`text-xs font-medium ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Salary
              </p>
              <p className="font-medium">${job.salary}</p>
            </div>
          )}

          {job.notes && (
            <div>
              <p
                className={`text-xs font-medium ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Notes
              </p>
              <p className="line-clamp-2">{job.notes}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
          <Select
            onChange={handleChangeStatus}
            defaultValue={job.status}
            className="text-sm"
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </Select>

          <Button
            onClick={handleDelete}
            variant="destructive"
            size="sm"
            className="w-full"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
