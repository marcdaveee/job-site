import { useState, useEffect } from "react";

const useFetchJobs = (url) => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //   "http://localhost:5000/jobs"
  //   isInHomePage ? data.slice(0, 6) : data
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setJobData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobData();
  }, [url]);

  return { jobData, isLoading, error };
};

export default useFetchJobs;
