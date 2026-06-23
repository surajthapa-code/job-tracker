import JobForm from "../features/jobs/components/JobForm";

function AddJob() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Add Job</h2>
      <JobForm />
    </div>
  );
}

export default AddJob;
