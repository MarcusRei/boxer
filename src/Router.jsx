import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { BoxListPage } from "./components/BoxListPage/BoxListPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <BoxListPage></BoxListPage>,
      },
    ],
  },
]);
