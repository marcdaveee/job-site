import { useState } from "react";

const JobListing = ({ job }) => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const description = isSeeMore
    ? job.description
    : job.description.substring(0, 90) + "...";

  return (
    <div className="p-3 rounded-lg shadow-md border-none bg-white px-5">
      <p className="text-sm mb-2 text-gray-600">{job.type}</p>
      <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
      <p className="text-sm mb-3 ">{description}</p>

      <div className="flex justify-between border-b border-gray-200 pb-3">
        <p className="text-indigo-500 text-sm">{job.salary} / Year</p>
        <button
          className="text-blue-500 text-sm font-medium"
          onClick={() => setIsSeeMore((prevState) => !prevState)}
        >
          {isSeeMore ? "Less" : "More"}
        </button>
      </div>

      <div className="flex flex-col justify-start my-4">
        <p className="text-red-700 text-sm mb-2">{job.location}</p>
        <a className="bg-indigo-500 hover:bg-indigo-600 inline-block text-center cursor-pointer py-2 text-white border-none rounded-md text-sm font-medium">
          Read More
        </a>
      </div>
    </div>
  );
};

export default JobListing;
