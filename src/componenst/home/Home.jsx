import React, { useEffect, useState } from "react";
import Singlegadget from "./gadget/Singlegadget";
import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero bg-[#9538E2] text-white rounded-t-none rounded-xl pb-56">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold px-5 pt-5">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-8 text-center px-5 md:px-40">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <NavLink to={"dashboard"}>
              <button className="btn text-[#9538E2] text-base  font-bold rounded-3xl">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" mx-auto ring-2 ring-white p-4  w-11/12 -mt-48 rounded-2xl bg-[#ffffff3f] relative z-10 ">
        <div className="  bg-white rounded-2xl">
          <img
            src="/public/assets/banner.jpg"
            className=" w-full object-cover h-[480px] rounded-2xl"
            alt=""
          />
        </div>
      </div>
      <p className="text-3xl my-10 font-bold">Explore Cutting-Edge Gadgets</p>
      <div className="flex gap-5">
        <div className="w-2/12 flex flex-col gap-5">
          <NavLink to={"/"}>
            <button>All Category</button>
          </NavLink>
          <NavLink to={"category/Laptop"}>
            <button className="">Laptop</button>
          </NavLink>
          <NavLink to={"category/Tablet"}>
            <button className="">Tablet</button>
          </NavLink>
          <NavLink to={"category/Phone"}>
            <button>Phone</button>
          </NavLink>
          <NavLink to={"category/Headphones"}>
            <button className="">Headphones</button>
          </NavLink>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Home;
