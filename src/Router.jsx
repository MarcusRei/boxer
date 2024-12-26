import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { BoxListPage } from "./components/pages/BoxListPage/BoxListPage";
import { SingleBoxPage } from "./components/pages/SingleBoxPage/SingleBoxPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <BoxListPage />,
      },
      {
        path: "/box",
        element: <SingleBoxPage />,
      },
    ],
  },
]);
