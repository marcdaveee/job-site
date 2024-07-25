import JobListing from "./JobListing";
import useFetchJobs from "../hooks/useFetchJobs";

const JobListings = ({ isInHomePage }) => {
  const { jobData, isLoading, error } = useFetchJobs(
    "http://localhost:5000/jobs"
  );

  const jobs = isInHomePage ? jobData.slice(0, 6) : jobData;

  return (
    <section className="bg-blue-100 py-7">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-indigo-500 text-2xl font-bold mb-7">
          Browse Jobs
        </h2>

        {isLoading && (
          <div className="text-3xl text-black text-center">Loading...</div>
        )}

        {error && (
          <div className="text-3xl text-black text-center">
            Failed to load data. Please check your internet connection and
            requested path URL.
          </div>
        )}

        {jobs && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {jobs.map((job) => (
              <JobListing job={job} isInHomePage={isInHomePage} key={job.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
