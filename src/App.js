import { useEffect, useState } from 'react';
import { BrowserRouter, Routes , Route, Link  } from 'react-router-dom';
import Home from './Home'
import Cart from './Cart'
import CatInfo from './CatInfo';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [catData, setCatData ] = useState ([])
  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=8');
      const data = await response.json();
      setCatData(data);
    }
    fetchData();
  }, []);

  return (
    <>
    <BrowserRouter>
      <Navbar id='mainNav'>

        <Link className='navLink' to = '/'>Home</Link>|
        <Link to = '/CatInfo'>Cat Info</Link>|
        <Link to = '/Cart'>cart</Link>
      </Navbar>

      <Routes >
        <Route path='/' element= {<Home data = {catData}/>}>Home</Route>
        <Route path="/CatInfo" element= {<CatInfo data = {catData}/>}>cat Info </Route>
        <Route path='/Cart' element= {<Cart/>}>cart</Route>
      </Routes>
    
    </BrowserRouter>

    <div className="App">
      <h1>Cat4LYF</h1>
      {/* {catData ? console.log(catData):null} */}

      <header className="App-header">
      </header>
    </div>
    </>
  );
}


export default App;
