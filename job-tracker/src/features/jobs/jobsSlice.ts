import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Job, JobState, JobStatus } from "./types";

const initialState: JobState = {
  items: [],
  filter: "all",
  searchQuery: "",
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Omit<Job, "id" | "date">>) => {
      state.items.push({
        ...action.payload,
        salary: action.payload.salary
          ? Number(action.payload.salary)
          : undefined,
        id: crypto.randomUUID(),
        date: new Date().toLocaleDateString(),
      });
    },
    removeJob: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((job) => job.id !== action.payload);
    },
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: JobStatus }>,
    ) => {
      const job = state.items.find((job) => job.id === action.payload.id);
      if (job) {
        job.status = action.payload.status;
      }
    },
    setFilter: (state, action: PayloadAction<JobStatus | "all">) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addJob, removeJob, updateStatus, setFilter, setSearchQuery } =
  jobsSlice.actions;
export default jobsSlice.reducer;
