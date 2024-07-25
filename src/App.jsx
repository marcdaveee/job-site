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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobsDetailPage />} />
      <Route path="/new-job" element={<AddJobPage />} />
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
