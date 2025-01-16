import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation(); // Get current path

  return (
    <div>
      <div className="bg-[#9538E2] text-white pb-10 rounded-2xl">
        <h5 className="text-3xl pt-8 pb-4 font-bold">Dashboard</h5>
        <p className="w-7/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-4 mt-5">
          {/* Cart Button */}
          <NavLink to={"/dashboard/cart"}>
            <button
              className={`px-6 py-3 rounded-full ${
                location.pathname === "/dashboard/cart"
                  ? "bg-white text-purple-600"
                  : "bg-transparent border-2 border-white text-white"
              }`}
            >
              Cart
            </button>
          </NavLink>

          {/* Wishlist Button */}
          <NavLink to={"/dashboard/wishlist"}>
            <button
              className={`px-6 py-3 rounded-full ${
                location.pathname === "/dashboard/wishlist"
                  ? "bg-white text-purple-600"
                  : "bg-transparent border-2 border-white text-white"
              }`}
            >
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
