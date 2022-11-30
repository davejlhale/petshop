import { useState, useEffect  } from "react";
import './style/Home.style.js';

const Home = ({data}) => {
    console.log(data);
    // handle click need navigate to catInfo sending array index 
    const handleClick = () =>{
    };
    return (
<>
{/* map throgh data arry and display catBox  */}
<div>
<button onClick={(index)=> handleClick(index)}>item1</button>
</div>
</>
    )
}

export default Home;