import { createBrowserRouter } from "react-router";
import Homelayout from "../Layouts/Homelayout";
import Home from "../Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2> Authintication layout </h2>,
  },
  {
    path: "/news",
    element: <h2> News layout </h2>,
  },
  {
    path: "/*",
    element: <h2> Error 404 </h2>,
  },
]);
export default router;
