import React, { useEffect, useState } from "react";
import Singlegadget from "./gadget/Singlegadget";

const Home = () => {
  const [gadgets, setGadget] = useState([]);
  useEffect(() => {
    fetch("/public/gadget.json")
      .then((res) => res.json())
      .then((data) => setGadget(data));
  }, []);
  return (
    <div>
      <div className="hero bg-[#9538E2] text-white rounded-xl mt-5 pb-56">
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
            <button className="btn text-[#9538E2] text-base  font-bold rounded-3xl">
              Shop Now
            </button>
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
      <div className="flex">
        <div className="w-2/12"></div>
        <div className="w-10/12 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {gadgets.map((singleGadget) => (
            <Singlegadget singleGadget={singleGadget}></Singlegadget>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
