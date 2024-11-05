import React from "react";
import { useLoaderData } from "react-router-dom";
import Singlegadget from "../home/gadget/Singlegadget";

const Allcategori = () => {
  const allCategori = useLoaderData();
  return (
    <div className="w-10/12 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {allCategori.map((categori) => (
        <Singlegadget categori={categori}></Singlegadget>
      ))}
    </div>
  );
};

export default Allcategori;
