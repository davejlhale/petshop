
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
        {data.length===0 ?   
         <h1> sorry no cats left</h1>
        :null}
      </div>
    </>
  );
};

export default Home;
