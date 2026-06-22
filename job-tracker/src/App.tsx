import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./shared/components/ErrorBoundary";
import { lazy, Suspense } from "react";
import Layout from "./shared/components/Layout";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Jobs = lazy(() => import("./pages/Jobs"));
const AddJob = lazy(() => import("./pages/AddJob"));
const JobDetail = lazy(() => import("./pages/JobDetail"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="p-8 text-center">loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/add" element={<AddJob />} />
            <Route path="jobs/:id" element={<JobDetail />} />
            {/* <h1 className="text-3xl font-bold text-blue-500">Job Tracker</h1> */}
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
