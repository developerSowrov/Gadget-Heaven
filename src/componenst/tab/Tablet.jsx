import React from "react";
import { useLoaderData } from "react-router-dom";
import TabData from "./TabData";

const Tablet = () => {
  const datas = useLoaderData();
  const teb = datas.filter((data) => data.category == "Tablet");
  return (
    <div className="w-10/12 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {teb.map((teb) => (
        <TabData teb={teb}></TabData>
      ))}
    </div>
  );
};

export default Tablet;
