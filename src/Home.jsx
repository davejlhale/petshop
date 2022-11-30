import { useState, useEffect } from "react";
import "./style/Home.style.js";
import CatBox from "./CatBox.jsx";

const Home = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((cat, index) => {
        return <CatBox key={index} cat={cat} />;
      })}
    </>
  );
};

export default Home;
