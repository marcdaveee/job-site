const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 py-5 text-white border-b border-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <i className="fa-brands fa-react"></i> React Jobs
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href=""
              className="text-sm px-2 py-2 border-none rounded-md font-medium bg-slate-950"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href=""
              className="text-sm px-2 py-2 border-none rounded-md font-medium  "
            >
              Jobs
            </a>
          </li>

          <li>
            <a
              href=""
              className="text-sm px-2 py-2 border-none rounded-md font-medium "
            >
              Add Job
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
