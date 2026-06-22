export { default as jobReducer } from "./jobsSlice";
export {
  addJob,
  removeJob,
  updateStatus,
  setFilter,
  setSearchQuery,
} from "./jobsSlice";
export type { Job, JobState, JobStatus } from "./types";
