export { default as jobReducer } from "./jobsSlice";
export {
  addJob,
  removeJob,
  updateStatus,
  setFilter,
  setSeachQuery,
} from "./jobsSlice";
export type { job, JobState, JobStatus } from "./types";
