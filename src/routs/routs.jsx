import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import About from "../Layouts/About/About";
import HomePage from "../Pages/HomePage";

import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import NewsDetails from "../Pages/NewsDetails";

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
    path: "/auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: <NewsDetails />,
    loader: () => fetch("/news.json"),
  },
]);
export default router;
