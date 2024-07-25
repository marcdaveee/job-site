import { NavLink } from "react-router-dom";

const activeLinkClass = ({ isActive }) =>
  isActive
    ? "bg-slate-950 text-sm px-2 py-2 border-none rounded-md font-medium "
    : "text-sm px-2 py-2 border-none rounded-md font-medium ";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 py-5 text-white border-b border-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <i className="fa-brands fa-react"></i> React Jobs
        </h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={activeLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/jobs" className={activeLinkClass}>
              Jobs
            </NavLink>
          </li>

          <li>
            <NavLink to="/new-job" className={activeLinkClass}>
              Add Job
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
