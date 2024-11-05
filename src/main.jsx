import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componenst/layout/Layout.jsx";
import Static from "./componenst/static/Static.jsx";
import Home from "./componenst/home/Home.jsx";
import Dashboard from "./componenst/dashboard/Dashboard.jsx";
import Errorpage from "./componenst/errorPage/Errorpage.jsx";
import Allcategori from "./componenst/allcategori/Allcategori.jsx";
import Laptop from "./componenst/laptop/Laptop.jsx";
import Tablet from "./componenst/tab/Tablet.jsx";
import Phone from "./componenst/phone/Phone.jsx";
import Headphone from "./componenst/headphone/Headphone.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Allcategori></Allcategori>,
            loader: () => fetch("/public/gadget.json"),
          },
          {
            path: "/category/laptop",
            element: <Laptop></Laptop>,
            loader: () => fetch("/public/gadget.json"),
          },
          {
            path: "/category/tab",
            element: <Tablet></Tablet>,
            loader: () => fetch("/public/gadget.json"),
          },
          {
            path: "/category/phone",
            element: <Phone></Phone>,
            loader: () => fetch("/public/gadget.json"),
          },
          {
            path: "/category/headphone",
            element: <Headphone></Headphone>,
            loader: () => fetch("/public/gadget.json"),
          },
        ],
      },
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
