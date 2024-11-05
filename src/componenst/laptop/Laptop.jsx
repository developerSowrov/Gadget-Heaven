import React from "react";
import { useLoaderData } from "react-router-dom";
import LaptopData from "./LaptopData";
// import Laptop from "./Laptop";

const Laptop = () => {
  const datas = useLoaderData();
  const laptop = datas.filter((data) => data.category == "Laptop");
  return (
    <div className="w-10/12 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {laptop.map((singelLaptop) => (
        <LaptopData singelLaptop={singelLaptop}></LaptopData>
      ))}
    </div>
  );
};

export default Laptop;
