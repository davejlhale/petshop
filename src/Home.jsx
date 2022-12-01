import { useState, useEffect } from "react";

import CatBox from "./CatBox.jsx";

const Home = ({ data,handleAddToCart,cartData }) => {
  console.log("home: data set recieved is",data);

  return (
    <>
      {data.map((cat, index) => {
        return <CatBox key={index} cat={cat} handleAddToCart ={handleAddToCart} cartData={cartData}/>;
      })}
    </>
  );
};

export default Home;
