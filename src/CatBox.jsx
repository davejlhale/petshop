import { faker } from "@faker-js/faker";

const CatBox = ({ cat }) => {
  console.log(cat.image.url);

  const handleClick = () => {
    console.log("ive been clicked", cat.id);
  };

  const rndmName = faker.name.firstName();
  const rndmPrice = faker.commerce.price(100, 1000, 2, "£");

  return (
    <div>
      <img src={cat.image.url} alt="cat" />
      <p>{rndmName}</p>
      <p>{rndmPrice}</p>
      <button onClick={() => handleClick()}>Info</button>
      <button>Add to cart</button>
    </div>
  );
};

export default CatBox;
