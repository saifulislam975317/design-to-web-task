import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import CADetails from "../Components/CADetails/CADetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <CADetails></CADetails>,
        loader: ({ params }) =>
          fetch("ca.json")
            .then((response) => response.json())
            .then((data) => data.find((info) => info.id === params.id)),
      },
    ],
  },
]);

export default router;
