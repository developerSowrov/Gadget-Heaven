import React from "react";

const LaptopData = ({ singelLaptop }) => {
  const { product_id, price, product_img, product_title } = singelLaptop;
  return (
    <div className="card  bg-base-100 shadow-2xl">
      <figure>
        <img
          src={product_img}
          className="w-[300px] h-[200px] object-cover rounded-xl"
          alt="Shoes"
        />
      </figure>
      <div className="text-start p-0">
        <h2 className=" text-2xl font-semibold mt-3">{product_title}</h2>
        <p className="text-[#09080f85] font-semibold my-1">Price:{price}$</p>
        <div className="card-actions justify-start mt-4">
          <button className="btn btn-outline btn-c  ">Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaptopData;
