export type JobStatus = "applied" | "interview" | "offer" | "rejected";

export interface job {
  id: string;
  company: string;
  role: string;
  status: JobStatus;
  date: string;
  salary?: number;
  notes?: string;
}
export interface JobState {
  items: job[];
  filter: JobStatus | "all";
  searchQuery: string;
}
