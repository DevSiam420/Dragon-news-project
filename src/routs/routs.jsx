// import { createBrowserRouter } from "react-router";
// import Home from "../Layouts/Home/Home";

// import HomePage from "../Pages/HomePage";

// import CategoryNews from "../Pages/CategoryNews";
// import Login from "../Pages/Login";
// import Register from "../Pages/Register";
// import AuthenticationLayout from "../Layouts/AuthenticationLayout";
// import NewsDetails from "../Pages/NewsDetails";
// import PrivetRoute from "../Provider/PrivetRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage></HomePage>,
//       },
//       {
//         // index: true,
//         path: "/category/:id",
//         // loader: () => fetch("/public/news.json"),
//          loader: () => fetch("/news.json"),
//         element: <CategoryNews />,
//       },
//     ],
//   },
//   {
//     path: "/auth",
//     element: <AuthenticationLayout></AuthenticationLayout>,
//     children: [
//       {
//         path: "/auth/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/auth/register",
//         element: <Register></Register>,
//       },
//     ],
//   },
//   {
//     path: "/news-details/:id",
//     element: (
//       <PrivetRoute>
//         <NewsDetails />
//       </PrivetRoute>
//     ),
//     loader: () => fetch("/news.json"),
//   },
// ]);
// export default router;

import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Something went wrong</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "category/:id",
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
        element: <CategoryNews />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivetRoute>
        <NewsDetails />
      </PrivetRoute>
    ),
    loader: async () => {
      const res = await fetch("/news.json");
      return res.json();
    },
  },
]);

export default router;
