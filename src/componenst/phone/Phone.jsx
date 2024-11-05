import React from "react";
import PhoneData from "./PhoneData";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const datas = useLoaderData();
  const phone = datas.filter((data) => data.category == "Phone");
  return (
    <div className="w-10/12 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {phone.map((phone) => (
        <PhoneData phone={phone}></PhoneData>
      ))}
    </div>
  );
};

export default Phone;
