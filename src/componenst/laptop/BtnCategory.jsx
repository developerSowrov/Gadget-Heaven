import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCategory from "./SingleCategory";
// import Laptop from "./Laptop";

const BtnCategory = () => {
  const categorys = useParams();
  const product = categorys.category;
  const datas = useLoaderData();
  const laptop = datas.filter((data) => data.category === product);
  return (
    <div className="w-10/12 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {laptop.map((singelLaptop) => (
        <SingleCategory singelLaptop={singelLaptop}></SingleCategory>
      ))}
    </div>
  );
};

export default BtnCategory;
