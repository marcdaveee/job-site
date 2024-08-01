import { useParams, Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";

const JobsDetailPage = ({ onJobDelete }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onJobDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    onJobDelete(jobId);

    toast.success("Job deleted successfully");

    navigate("/jobs");
  };

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await fetch("http://localhost:5000/jobs/" + id);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobData();
  }, [id]);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-4">
        <Link to={"/jobs"} className="text-md text-indigo-600 ">
          Back to Job Listings
        </Link>
      </div>
      {isLoading && (
        <div className="text-3xl text-black text-center">Loading...</div>
      )}

      {error && (
        <div className="text-3xl text-black text-center">
          Failed to load data. Please check your internet connection and
          requested path URL.
        </div>
      )}
      {job && (
        <div className="bg-indigo-200">
          <div className="max-w-7xl mx-auto grid grid-cols-70/30 gap-3 py-5">
            <div className="flex flex-col space-y-3">
              <Card bgColor="bg-white">
                <p className="text-sm mb-2 text-gray-600">{job.type}</p>
                <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
                <p className="text-red-700 text-sm mb-3">{job.location}</p>
              </Card>

              <Card bgColor="bg-white">
                <h2 className="text-indigo-600 font-bold">Job Description</h2>
                <p className="text-sm my-4 ">{job.description}</p>
                <h2 className="text-indigo-600 font-bold mb-1">Salary</h2>
                <p className="text-sm">{job.salary} / Year</p>
              </Card>
            </div>
            <div className="flex flex-col space-y-2">
              <Card bgColor="bg-white">
                <h2 className="font-bold text-md mb-3">Company Info</h2>

                <h3 className="text-lg mb-2">{job.company.name}</h3>
                <p className="text-sm">{job.company.description}</p>
                <div className="border-1 border-b my-4"></div>

                <h2 className="font-semibold text-md mb-1">Contact Email:</h2>
                <div className="bg-indigo-200 p-1 text-sm font-bold mb-3">
                  {job.company.contactEmail}
                </div>

                <h2 className="font-semibold text-md mb-1">Contact Phone:</h2>
                <div className="bg-indigo-200 p-1 text-sm font-bold mb-3">
                  {job.company.contactPhone}
                </div>
              </Card>

              <Card bgColor="bg-white">
                <h2 className="font-bold text-md mb-3">Manage Job</h2>
                <div className="flex flex-col space-y-3">
                  <Link
                    to={"/jobs/edit/" + job.id}
                    className="bg-indigo-600 text-white text-sm font-semibold py-1 border-none rounded-lg inline-block text-center"
                  >
                    Edit Job
                  </Link>

                  <button
                    className="bg-red-500 text-white text-sm font-semibold py-1 border-none rounded-lg inline-block text-center"
                    onClick={() => onJobDeleteClick(job.id)}
                  >
                    Delete Job
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsDetailPage;
