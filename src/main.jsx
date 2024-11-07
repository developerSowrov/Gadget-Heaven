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
import BtnCategory from "./componenst/laptop/BtnCategory.jsx";
// import Tablet from "./componenst/tab/Tablet.jsx";
// import Phone from "./componenst/phone/Phone.jsx";
// import Headphone from "./componenst/headphone/Headphone.jsx";
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
            path: "/category/:category",
            element: <BtnCategory></BtnCategory>,
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
