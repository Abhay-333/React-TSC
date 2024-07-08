import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const Details = () => {
  const [Products] = useContext(ProductContext);
  const {id} = useParams()
  const [singleProduct, setSingleProduct] = useState(null)
  const getSingleProduct = async ()=>{
    const response = await new Promise((resolve, reject)=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res)=>resolve(res))
      .catch((err)=>reject(err))
    })
    const data = await response.json()
    setSingleProduct(data)
  } 

  useEffect(()=>{
    getSingleProduct()
  },[])

  return singleProduct ? (
    <div className="w-[80%] h-full  mx-auto flex items-center justify-around">
      <div className="img-div h-[60vh] border-[1px] border-[gray] bg-white rounded-lg p-7">
        <img
          className="h-full w-full object-cover"
          src={`${singleProduct.image}`}
          alt=""
        />
      </div>
      <div className="details h-[50%] w-[60%] pt-5 pl-5 flex flex-col gap-[1vw]">
        <h1 className="text-4xl font-bold">
          {singleProduct.title}
        </h1>
        <h1 className="font-semibold text-2xl">${singleProduct.price}</h1>

        <h1 className="font-medium capitalize text-1xl">{singleProduct.category}</h1>

        <h1>
          {singleProduct.description}
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
  ) : (
    <Loading />
  );
};

export default Details;
