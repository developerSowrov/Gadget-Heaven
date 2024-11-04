import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componenst/layout/Layout.jsx";
import Static from "./componenst/static/Static.jsx";
import Home from "./componenst/home/Home.jsx";
import Dashboard from "./componenst/dashboard/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/statics", element: <Static></Static> },
      { path: "/dashboard", element: <Dashboard></Dashboard> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
