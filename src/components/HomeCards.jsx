import Card from "./Card";

const HomeCards = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <h2 className="text-xl font-bold">For Developers</h2>
          <p className="text-base my-3">
            Browse our React Jobs and start your career today
          </p>
          <a
            href=""
            className="px-3 py-2 bg-black text-sm text-white border-none rounded-md inline-block"
          >
            Browse Jobs
          </a>
        </Card>

        <Card bgColor="bg-indigo-100">
          <h2 className="text-xl font-bold">For Employers</h2>
          <p className="text-base my-3 font-medium">
            List your job to find the perfect developer for the role.
          </p>
          <a
            href=""
            className="px-3 py-2 bg-indigo-600 text-sm text-white border-none rounded-md inline-block"
          >
            Add Job
          </a>
        </Card>
      </div>
    </div>
  );
};

export default HomeCards;
