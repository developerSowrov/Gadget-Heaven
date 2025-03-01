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
import BtnCategory from "./componenst/Category/BtnCategory.jsx";
import Details from "./componenst/details/Details.jsx";
import Cart from "./componenst/Cart/Cart.jsx";
import Wishlist from "./componenst/wishlist/Wishlist";
import Contact from "./componenst/contact/Contact.jsx";
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
            loader: () => fetch("/gadget.json"),
          },
          {
            path: "/category/:category",
            element: <BtnCategory></BtnCategory>,
            loader: () => fetch("/gadget.json"),
          },
        ],
      },
      { path: "/statics", element: <Static></Static> },
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/gadget.json"),
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
