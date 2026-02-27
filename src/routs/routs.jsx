import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import About from "../Layouts/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    element: About,
  },
]);
export default router;
