import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [Products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = response.json();
      console.log(data);
    } catch (err) {
        console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ Products, setProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
