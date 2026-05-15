import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import SignIn from "./components/LoginPage/SignIn";
import { SignUp } from "./components/LoginPage/SignUp";
import Home from "./components/Home";
import { LoginPage } from "./components/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "",
        element: <LoginPage />,
        children: [
          {
            index: true,
            element: <Navigate to="signup" />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
