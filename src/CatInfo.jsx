// import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom"; //new
import "./style/CatInfo.css";

// cartData is a state. contains cats name, price and breed.
// handleAddToCart passes onAddToCart function that sets the cartData to array of 3 elements(name, price, breed)

const CatInfo = ({ data,handleAddToCart,cartData }) => {
    const navigate = useNavigate();//new
    const location = useLocation(); //new
    if (data===null || data===undefined || data.length===0) return  <h1> sorry no cats left</h1>
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

    

    const handleClick = () => {
      console.log("catinfo: home btn clicked", cat.id);
      navigate('/') //new the button onclick navigate that passes the cat.id
    };

    let passedInCatId = getSelectedCatId();

    console.log("catinfo: passedInCatId =", passedInCatId);

    const cat = data.filter(cat => { return cat.id === passedInCatId })[0] //new
    console.log("catinfo: cat object =", cat);
const wait =()=> {
    for (let i=0; i<100000000;i++){}
}
const handlebuy=()=>{
 handleAddToCart(cat,cat.name,cat.price)
 navigate("/")
    
}
     if (cat===undefined || cat.named === undefined) { wait()};
    return (
        <div className="main-ct-info-wrapper">
            {/* display price and image */}
            <div className="cat-im-wrapper">
                <div>
                    <p className="name">Name: {cat.named}</p>
                    <p>Price: <span>{cat.price}</span></p>
                </div>
                <img id="img" alt={cat.name} src={cat.image.url} />
                <div className="btns">
                    <button className="btn" onClick={() => handleClick()}>Back</button>
                    <button className="add-btn" onClick={(cat) => handlebuy(cat)}>Add to cart</button>
                </div>
            </div>

            {/* description*/}
            <div className="desc-wrapper">
                <div id="cat-desc">
                    <p> {cat.description} It is {cat.temperament}.</p>
                </div>

                {/* description make it a table display!*/}
                <div className="cat-cracteristics">
                    <div className="caractcs-item">
                        <p>Breed:</p>
                        <p>{cat.name}</p>
                    </div>
                    <div className="caractcs-item">
                        <p>Country_code:</p>
                        <p>{cat.country_code}</p>
                    </div>
                    <div className="caractcs-item">
                        <p>Health Issues:</p>
                        <p>{cat.health_issues}</p>
                    </div>
                    <div className="caractcs-item">
                        <p>Child friendly:</p>
                        <p>{cat.child_friendly}</p>
                    </div>
                    <div  className="caractcs-item">
                        <p>Adaptability:</p>
                        <p>{cat.adaptability}</p>
                    </div>
                    <div  className="caractcs-item">
                        <p>Dog friendly:</p>
                        <p>{cat.dog_friendly}</p>
                    </div>
                    <div  className="caractcs-item">
                        <p>Hypoallergenic:</p>
                        <p>{cat.hypoallergenic}</p>
                        
                    </div>
                    <div  className="caractcs-item">
                        <p>Life Span: </p>
                        <p>{cat.life_span}</p>
                    </div>
                    <div  className="caractcs-item">
                        <p>Origin: </p>
                        <p>{cat.origin}</p>
                    </div>
                    <div  className="caractcs-item">
                        <p>Stranger Friendly: </p>
                        <p>{cat.stranger_friendly}</p>
                    </div>
                    <div  className="caractcs-item">
                        <p>Weight: </p>
                        <p>{cat.weight.metric} Kg</p>
                    </div>
                    <div className="caractcs-item">
                        <p>Social needs:</p>
                        <p> {cat.social_needs}</p>
                    </div>
                    <div id="last-row" className="caractcs-item">
                        <p>Affection Level:</p>
                        <p>{cat.affection_level}</p>
                    </div>
     
                </div>
            </div>

           
        </div>
    )
}


export default CatInfo;