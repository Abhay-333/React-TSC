import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Context from "../Utils/Context";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="main-container w-[82%] min-h-[100vh] flex flex-wrap gap-5 items-center justify-center  overflow-y-auto">
        <Link to="/details/1" className="card shadow w-[20%] h-[45vh] border-[1px] border-[gray] flex flex-col items-center justify-center bg-[white] text-black hover:scale-110 transition-all rounded-lg">
          {/* <div
            className="img-div h-[80%] w-full bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)`,
            }}
          ></div> */}
          <Context></Context>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
