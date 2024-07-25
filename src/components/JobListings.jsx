import { useState, useEffect } from "react";
import JobListing from "./JobListing";

const JobListings = ({ isInHomePage }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/jobs");
        const data = await res.json();
        const jobData = isInHomePage ? data.slice(0, 6) : data;
        setJobs(jobData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-100 py-7">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-indigo-500 text-2xl font-bold mb-7">
          Browse Jobs
        </h2>

        {isLoading && (
          <div className="text-3xl text-black text-center">Loading...</div>
        )}

        {jobs && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {jobs.map((job) => (
              <JobListing job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>

      <div></div>
    </section>
  );
};

export default JobListings;
