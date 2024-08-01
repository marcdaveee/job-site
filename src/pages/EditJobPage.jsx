import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditJobPage = ({ onUpdateJob }) => {
  const { id } = useParams();
  const [jobData, setJobData] = useState();
  const [tempJobData, setTempJobData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isChanged, setIsChanged] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await fetch("http://localhost:5000/jobs/" + id);
        const data = await res.json();
        setJobData(data);
        setTempJobData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobData();
  }, [id]);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    onUpdateJob(tempJobData);

    return navigate("/jobs/" + id);
  };

  return (
    <div className="bg-indigo-100 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white max-w-3xl mx-auto p-5 shadow-md border-none rounded">
          <h2 className="text-2xl font-bold text-center mb-4">Add Job</h2>

          {isLoading && (
            <div className="text-3xl text-black text-center">Loading...</div>
          )}

          {error && (
            <div className="text-3xl text-black text-center">
              Failed to load data. Please check your internet connection and
              requested path URL.
            </div>
          )}

          {jobData && (
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <label htmlFor="type" className="font-bold block mb-1">
                  Job Type
                </label>
                <select
                  name="type"
                  id="job-type"
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium"
                  value={tempJobData.type}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({ ...tempJobData, type: e.target.value });
                  }}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="title" className="font-bold block mb-1">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  name="title"
                  value={tempJobData.title}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({ ...tempJobData, title: e.target.value });
                  }}
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 font-medium focus:outline-indigo-300"
                  placeholder="eg. Senior React Dev"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="font-bold block mb-1">
                  Description
                </label>
                <textarea
                  id=""
                  rows="4"
                  name="description"
                  value={tempJobData.description}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({
                      ...tempJobData,
                      description: e.target.value,
                    });
                  }}
                  placeholder="Add any job duties, expectations, requirements, etc."
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 font-medium focus:outline-indigo-300"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="salary" className="font-bold block mb-1">
                  Salary
                </label>
                <select
                  name="salary"
                  value={tempJobData.salary}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({ ...tempJobData, salary: e.target.value });
                  }}
                  id=""
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium"
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="font-bold block mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={tempJobData.location}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({
                      ...tempJobData,
                      location: e.target.value,
                    });
                  }}
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium focus:outline-indigo-300"
                  required
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label htmlFor="company" className="font-bold block mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={tempJobData.company.name}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({
                      ...tempJobData,
                      company: {
                        ...tempJobData.company,
                        name: e.target.value,
                      },
                    });
                  }}
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium focus:outline-indigo-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="font-bold block mb-1"
                >
                  Company Description
                </label>
                <textarea
                  name="company_description"
                  value={tempJobData.company.description}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({
                      ...tempJobData,
                      company: {
                        ...tempJobData.company,
                        description: e.target.value,
                      },
                    });
                  }}
                  id=""
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium focus:outline-indigo-300"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="company_email" className="font-bold block mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="contact_email"
                  value={tempJobData.company.contactEmail}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({
                      ...tempJobData,
                      company: {
                        ...tempJobData.company,
                        contactEmail: e.target.value,
                      },
                    });
                  }}
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium focus:outline-indigo-300"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contact_phone" className="font-bold block mb-1">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  name="contact_phone"
                  value={tempJobData.company.contactPhone}
                  onChange={(e) => {
                    setIsChanged(true);
                    setTempJobData({
                      ...tempJobData,
                      company: {
                        ...tempJobData.company,
                        contactPhone: e.target.value,
                      },
                    });
                  }}
                  className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium focus:outline-indigo-300"
                />
              </div>

              {isChanged && (
                <div className="flex justify-center space-x-2">
                  <button
                    type="submit"
                    className="bg-transparent border text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white inline-block text-center cursor-pointer py-2 px-3  rounded-md text-sm font-medium"
                    onClick={() => {
                      setIsChanged(false);
                      setTempJobData(jobData);
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 inline-block text-center cursor-pointer py-2 px-3 text-white border-none rounded-md text-sm font-medium"
                  >
                    Save
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditJobPage;
