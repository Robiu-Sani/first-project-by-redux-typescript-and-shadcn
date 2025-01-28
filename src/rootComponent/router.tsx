import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import ErrorPage from "./ErrorPage";
import Home from "@/component/Home";
import Tasks from "@/component/tasks/Tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
    ],
  },
]);
