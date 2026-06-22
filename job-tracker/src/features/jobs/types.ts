export type JobStatus = "applied" | "interview" | "offer" | "rejected";

export interface Job {
  id: string;
  company: string;
  role: string;
  status: JobStatus;
  date: string;
  salary?: number;
  notes?: string;
}
export interface JobState {
  items: Job[];
  filter: JobStatus | "all";
  searchQuery: string;
}
