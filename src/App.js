import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import CatInfo from "./CatInfo";
import Navbar from "./components/Navbar";
import "./App.css";
import { faker } from "@faker-js/faker";
import Footer from "./components/Footer/footer";
import imgIcon from "./images/cartIcon.png";
import PageNotFound from "./PageNotFound";
import Invoice from "./Invoice";
function App() {
  
  const [catData, setCatData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //fetch 8 cats
  useEffect(() => {
    const fetchData = async () => {
      console.log("app:useeffect: fetching data");
      const response = await fetch(
        "https://api.thecatapi.com/v1/breeds?limit=20"
      );

      let data = await response.json();
      setCatData(() => {
        return data;
      });
      setLoading(() => {
        return false;
      });

      setCatData(() => {
        return data;
      });
      setLoading(() => {
        return false;
      });
    };
    fetchData();
  }, []);

 

  const handleEmptyCart = () => {
    console.log("handle clear cart")
    console.log(catData)
    console.log(cartData)
    let data = [...catData];
    console.log("cat data",data)
    cartData.map((cat) => {;
      let catObj=cat.cat
      data = ( [...data, catObj])
      return 0;
    })

    
    setCartData([]);
    console.log("DATA*****",data)
    setCatData(data)
  }
  const addNamePrice = (data) => {
    console.log("adding names");
    if (data === undefined || data === null) {
      return;
    }
    data.map((cat, index) => {
      if (!cat.named) cat.named = faker.name.firstName();
      if (!cat.price) cat.price = faker.commerce.price(100, 1000, 2, "£");
      return 0;
    });
  };
  addNamePrice(catData);

  const onAddToCart = (cat, name, price) => {
    console.log("app: add to cart", name, price, cat);
    let breed = cat.name;
    let imgSrc = cat.image.url;
    console.log("****", cat);
    setCartData([...cartData, { name, price, breed, imgSrc,cat }]);
    console.log("app: cartdata, ", cartData);
    let data = [...catData];
    const index = data.indexOf(cat);
    if (index > -1) {
      data.splice(index, 1);
      setCatData(data);
    }
  };
  const handleDeleteCat = (cat) => {
    let data = [...cartData];
    console.log("cart:delete cat", cat);
    const index = data.indexOf(cat);
    if (index > -1) {
      //
      setCatData([...catData,cat.cat])
      data.splice(index, 1); // 2nd parameter means remove one item only
      setCartData(data);
    }
  };

  const handleSale=()=>{
    setCartData([])
  }

  console.log("app: in app");

  //if datas empty return to wait for it before allowing routing
  if (!catData || isLoading) {
    console.log("app: no data - waiting", catData.length);
    return;
  }
  console.log("app: data set length : ", catData.length);
  return (
    <>
      <BrowserRouter>
        <Navbar id="mainNav" imgIcon={imgIcon} count={cartData.length}></Navbar>

        <Routes>
          <Route
            path="/"
            element={<Home
              handleAddToCart={onAddToCart}
              data={catData}
              cartData={cartData}
            />}
          />
          <Route
            path="/CatInfo"
            element={<CatInfo
              handleAddToCart={onAddToCart}
              data={catData}
              cartData={cartData}
            />}
          />
          <Route
            path="/Cart"
            element={<Cart
              cartData={cartData}
              onDeleteCat={handleDeleteCat}
              handleEmptyCart={handleEmptyCart}
              handleSale={handleSale}
            />}
          />
          <Route
            path="*"
            element={<PageNotFound
            />}
          />
          <Route
            path="/Invoice"
            element={<Invoice
            />}
          />


        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
