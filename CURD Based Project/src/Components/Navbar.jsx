import React from "react";

const Navbar = () => {
  return (
    <nav className="sideNavbar bg-zinc-700 w-[18%] h-full flex items-start flex-col">
      <div className="addToCart border-[1px] border-[white] py-3 px-4 rounded-lg mx-9 my-10">
        <a href="/create" className="">
          <button>Add New Product</button>
        </a>
      </div>

      <div className="categories flex flex-col items-start px-6">
        <h1 className="text-2xl">Category</h1>

        <h1 className="mt-3 flex items-center">
          <span className="w-[15px] h-[15px] mr-1 rounded-full bg-blue-300"></span>
          Category 1
        </h1>

        <h1 className="mt-3 flex items-center">
          <span className="w-[15px] h-[15px] mr-1 rounded-full bg-blue-300"></span>
          Category 2
        </h1>

        <h1 className="mt-3 flex items-center">
          <span className="w-[15px] h-[15px] mr-1 rounded-full bg-blue-300"></span>
          Category 3
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
