import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import About from "../Layouts/About/About";
import HomePage from "../Pages/HomePage";

import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        index: true,
        path: "/category/:id",
        loader: () => fetch("/public/news.json"),
        element: <CategoryNews />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);
export default router;
