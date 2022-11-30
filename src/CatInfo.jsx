import { useState, useEffect } from "react";
import './style/CatInfo.style.js';

const CatInfo = ({data}) => {
    console.log(data)
   
    //html with the data from data
   

    let cat = data[3];        
    return(
            <div >
                {/* // <Link key={index} to={`/product/${film.id}`}>
                //     <Poster src={film.image} alt={film.title}/>
                // </Link> */}
                <p>Name: {cat.name}</p>
                <img src={cat.image.url}/>
                <p>Price: £10</p>
                <p>Country_code: {cat.country_code}</p>
                <p>Health Issues: {cat.health_issues}</p>
                <p>Child friendly: {cat.child_friendly}</p>
                <p>Adaptability: {cat.adaptability}</p>
            </div>
        )
   
    
    console.log(data[3]);
    
}


export default CatInfo;