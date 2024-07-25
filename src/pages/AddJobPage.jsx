const AddJobPage = () => {
  return (
    <div className="bg-indigo-100 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white max-w-3xl mx-auto p-5 shadow-md border-none rounded">
          <h2 className="text-2xl font-bold text-center mb-4">Add Job</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="" className="font-bold block mb-1">
                Job Type
              </label>
              <select
                name=""
                id=""
                className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium"
              >
                <option value="">Select One</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="" className="font-bold block mb-1">
                Job Listing Name
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-md px-2 py-2 text-md font-medium focus:outline-indigo-300"
                placeholder="eg. Beautiful Apartment in Miami"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobPage;
