import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Details = () => {
  const { id } = useParams();
  const allGedgets = useLoaderData();
  const details = allGedgets.find(
    (singleGadget) => singleGadget.product_id === id
  );
  const {
    description,
    specification,
    availability,
    price,
    product_img,
    rating,
    product_title,
  } = details;
  return (
    <div>
      <div className="bg-[#9538E2] text-white rounded-2xl">
        <h5 className="text-3xl pt-8 pb-4 font-bold">Product Details</h5>
        <p className="pb-44 w-7/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-sm mx-auto sm:max-w-md gap-8 flex md:max-w-lg lg:max-w-4xl p-4 -mt-36 bg-white shadow-lg rounded-lg border border-gray-200 mb-14">
        <div className="w-5/12 flex justify-center items-center rounded-md mb-4">
          <img src={product_img} alt="" />
        </div>
        <div className=" flex-col flex text-left items-start">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {product_title}
          </h2>
          <p className="text-lg text-gray-600 font-semibold mb-2">$ {price}</p>

          <span className="px-3 py-1 text-green-800 bg-green-200 rounded-full text-sm font-medium mb-2">
            {availability}
          </span>

          <p className="text-gray-600 mb-2">{description}</p>

          <div className="text-left w-full">
            <h3 className="text-gray-800 font-medium mb-2">Specification:</h3>
            <ul className="text-gray-600 list-disc pl-5">
              {specification.map((spc) => (
                <li>{spc}</li>
              ))}
            </ul>
          </div>

          <h3 className="text-gray-800 font-medium mt-2">Rating:</h3>
          <div className="mt-2 flex items-center justify-between w-full">
            <Rating style={{ maxWidth: 100 }} value={rating} />

            <span className="text-gray-600 font-semibold">{rating}</span>
          </div>

          <div className="mt-2 flex items-center justify-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Add To Cart
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              &#10084;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
