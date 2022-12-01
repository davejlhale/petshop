import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import CatInfo from "./CatInfo";
import "./App.css";

function App() {
  const [catData, setCatData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //fetch 8 cats
  useEffect(() => {
    const fetchData = async () => {
      console.log("app:useeffect: fetching data")
      const response = await fetch(
        "https://api.thecatapi.com/v1/breeds?limit=8"
      );
      const data = await response.json();
      setCatData(() => { return data });
      setLoading(() => { return false })
    };
    fetchData();
  }, []);

  const onAddToCart=(cat,name,price) =>{
    console.log("app: add to cart",name,price,cat)
    let breed=cat.name;
    setCartData([...cartData,{name,price,breed}])
    console.log("app: cartdata, ",cartData)
  }
  console.log("app: in app")

  //if datas empty return to wait for it before allowing routing
  if (!catData || isLoading) {
    console.log("app: no data - waiting", catData.length);
    return;
  }
  console.log("app: data set length : ", catData.length)
  return (
    <>
      <BrowserRouter>
        <header id="header">
          insert logo/name/navbar cart icon etc as a header either as html or as a react component
          <h1>Cat4LYF</h1>
          <nav id="mainNav">
            <Link className="navLink" to="/">Home</Link>
            <Link to="/CatInfo">Cat Info</Link>
            <Link to="/Cart">cart</Link>
          </nav>
        </header>


        <Routes>
          <Route path="/" element={<Home handleAddToCart={onAddToCart} data={catData} cartData={cartData}  />}>
            Home
          </Route>
          <Route path="/CatInfo" element={<CatInfo handleAddToCart={onAddToCart} data={catData}  cartData={cartData} />}>
            cat Info{" "}
          </Route>
          <Route path="/Cart" element={<Cart cartData={cartData} />}>
            cart
          </Route>
        </Routes>
      </BrowserRouter>

      <footer id="footer">
        insert footer component here (either as html here or make a react component)
      </footer>
    </>
  );
}

export default App;
