import { faker } from "@faker-js/faker";

import { useNavigate } from "react-router-dom"; //new
import { useState } from "react";
import "./style/CatBox.css";

const CatBox = ({ cat, cartData, handleAddToCart }) => {
  const navigate = useNavigate(); //new
  const handleClick = () => {
    console.log("catbox: info btn clicked with cat.id", cat.id);
    navigate("/CatInfo", {
      state: { id: cat.id, price: cat.price, name: cat.named },
    }); //new the button onclick navigate that passes the cat.id
  };
  // // console.log(handleAddToCart)
  // const rndmName = faker.name.firstName();
  // const rndmPrice = faker.commerce.price(100, 1000, 2, "£");
  try {
    return (
      <div className="cat-box">
        <img src={cat.image.url} alt="cat" />
        <p>{cat.named}</p>
        <p>{cat.price}</p>
        <button onClick={() => handleClick()}>Info</button>
        <button onClick={() => handleAddToCart(cat, cat.named, cat.price)}>
          Add to cart
        </button>
      </div>
    );
  } catch (err) {
    console.log(err);
  }
};

export default CatBox;
