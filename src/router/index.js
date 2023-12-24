import { createBrowserRouter } from "react-router-dom";
import FindJobs from "../Pages/FindJobs";
import LandingPage from "../Pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/find-jobs",
    element: <FindJobs />,
  },
]);
