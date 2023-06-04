

import { useNavigate } from "react-router-dom"; //new

import "./style/CatBox.css";

const CatBox = ({ cat, cartData, handleAddToCart }) => {
  const navigate = useNavigate(); //new
  const handleClick = () => {
    console.log("catbox: info btn clicked with cat.id", cat.id);
    navigate("/CatInfo", {
      state: { id: cat.id, price: cat.price, name: cat.named },
    }); //new the button onclick navigate that passes the cat.id
  };
  const handleImgError = e => {
    e.target.src = "https://cdn2.thecatapi.com/images/13MkvUreZ.jpg"
  }
  // // console.log(handleAddToCart)
  // const git status = faker.name.firstName();


  let imgSrc="https://cdn2.thecatapi.com/images/"+cat.reference_image_id+".jpg";
  cat.image= imgSrc;
  // const rndmName = faker.name.firstName();
//https://api.thecatapi.com/v1/images/search
  // const rndmPrice = faker.commerce.price(100, 1000, 2, "£");
  try {
    return (
      <div className="cat-box">

        <img onClick={() => handleClick()} src={imgSrc} alt="cat" onError={handleImgError}/>
        <div className="txt-wrapper">
          <p>{cat.named}</p>
          <p>{cat.price}</p>
        </div>
        <div className="btn-wrapper">
          <button onClick={() => handleClick()}>Info</button>
          <button onClick={() => handleAddToCart(cat, cat.named, cat.price)}>
            Add to cart
          </button>

        </div>

      </div>
    );
  } catch (err) {
    console.debug(err);
  }
};

export default CatBox;
