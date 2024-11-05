import React from "react";
import HeadPhoneData from "./HeadPhoneData";
import { useLoaderData } from "react-router-dom";

const Headphone = () => {
  const datas = useLoaderData();
  const Headphone = datas.filter((data) => data.category == "Headphones");
  return (
    <div className="w-10/12 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {Headphone.map((headphone) => (
        <HeadPhoneData headphone={headphone}></HeadPhoneData>
      ))}
    </div>
  );
};

export default Headphone;
