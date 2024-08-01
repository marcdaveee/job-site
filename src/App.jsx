import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobsDetailPage from "./pages/JobsDetailPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const addJob = async (newJob) => {
  const res = await fetch("http://localhost:5000/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });

  return;
};

const editJob = async (updatedJob) => {
  const res = await fetch("http://localhost:5000/jobs/" + updatedJob.id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedJob),
  });

  return;
};

const deleteJob = async (jobId) => {
  const res = await fetch("http://localhost:5000/jobs/" + jobId, {
    method: "DELETE",
  });
  return;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route
        path="/jobs/:id"
        element={<JobsDetailPage onJobDelete={deleteJob} />}
      />
      <Route
        path="/jobs/edit/:id"
        element={<EditJobPage onUpdateJob={editJob} />}
      ></Route>
      <Route path="/new-job" element={<AddJobPage onNewJobSubmit={addJob} />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

{
  /* <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings isInHomePage={true} />
      <ViewAllJobs />
    </> */
}
export default App;
