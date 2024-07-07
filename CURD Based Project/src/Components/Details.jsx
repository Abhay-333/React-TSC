import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] h-full  mx-auto flex items-center justify-around">
      <div className="img-div h-[80vh] border-[1px] border-[gray] bg-white  rounded-lg p-2">
        <img
          className="h-full w-full object-cover"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <div className="details h-[50%] w-[45%] pt-5 pl-5 flex flex-col gap-[1vw]">
        <h1 className="text-4xl font-bold">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h1 className="font-semibold text-2xl">$109.95</h1>

        <h1 className="font-medium text-1xl">men's clothing</h1>

        <h1>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </h1>

        <div className="btns flex items-center gap-4">
          <Link>
            <button className="bg-blue-500 py-3 px-6 font-bold rounded-lg">
              Edit
            </button>
          </Link>

          <Link>
            <button className="bg-red-500 py-3 px-6 font-bold rounded-lg">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
