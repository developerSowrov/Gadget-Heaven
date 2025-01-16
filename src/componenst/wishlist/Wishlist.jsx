import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getWL } from "../../utils/utils";

const Wishlist = () => {
  const location = useLocation(); // Get current path

  const [carts, setCart] = useState([]);
  useEffect(() => {
    const cart = getWL();
    setCart(cart);
  }, []);
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
      <h2 className="text-xl md:text-2xl font-bold flex items-start pt-5">
        Wishlist
      </h2>
      <div className="flex flex-col gap-5 pt-5 pb-10">
        {carts.map((cart) => (
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-gray-400 rounded-md">
                <img src={cart.product_img} alt="" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{cart.product_title}</h3>
                <p className="text-sm text-gray-500 mt-1">{cart.description}</p>
                <p className="mt-2 font-bold text-gray-700">
                  Price: <span className="text-black">{cart.price} </span>
                </p>
              </div>
            </div>
            <button className="mt-4 md:mt-0 text-red-500 hover:text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
