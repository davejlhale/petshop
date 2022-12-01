import { useState, useEffect } from "react";
import CatBox from "./CatBox.jsx";
import "./style/CatBox.css";
const Home = ({ data, handleAddToCart, cartData }) => {
  console.log("home: data set recieved is", data);

  return (
    <>
      <div className="screen-wrapper">
        {data.map((cat, index) => {
          return (
            <CatBox
              key={index}
              cat={cat}
              handleAddToCart={handleAddToCart}
              cartData={cartData}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
