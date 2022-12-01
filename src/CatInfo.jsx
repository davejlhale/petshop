import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom"; //new

import './style/CatInfo.scss';

const CatInfo = ({ data,handleAddToCart,cartData }) => {
    
    const location = useLocation(); //new
    let catName="";
    let price=""
    const getSelectedCatId = () => {
        let id = 0;
        
        //if no state was passed to us
        if (location.state === null) {
            console.log(data)
            let num = Math.floor(Math.random() * data.length) || 0;
            console.log(num)
            id = data[num].id
        } else {//otherwise use the passed in state.id
            id = location.state.id //new
            catName =location.state.name;
            price=location.state.price;
            console.log("catinfo: ",catName,price);
        }
        return id;
    }//end of getSelectedCatId()
    const navigate=useNavigate();//new
    const handleClick = () => {
      console.log("catinfo: home btn clicked", cat.id);
      navigate('/') //new the button onclick navigate that passes the cat.id
    };

    let passedInCatId = getSelectedCatId();
    console.log("catinfo: 'passedInCatId'= ", passedInCatId)

    const cat = data.filter(cat => { return cat.id === passedInCatId })[0] //new
    console.log("catinfo: cat object = ", cat)

    return (
        <div >
            <p>Name: {catName}</p>
            <p>Breed: {cat.name}</p>
            <p>Price: {price}</p>
            <img alt={cat.name} src={cat.image.url} />
            <p>Country_code: {cat.country_code}</p>
            <p>Health Issues: {cat.health_issues}</p>
            <p>Child friendly: {cat.child_friendly}</p>
            <p>Adaptability: {cat.adaptability}</p>
            <button onClick={() => handleClick()}>Back</button>
            <button onClick={() => handleAddToCart(cat,catName,price)}>Add to cart</button>
        </div>
    )
}


export default CatInfo;