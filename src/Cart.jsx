import { useState, useEffect, } from "react";
import './style/Cart.scss';

const Cart = ({ cartData,onDeleteCat }) => {

    console.log(cartData)
    let totalPrice=0;
    return (
        <>
        {cartData.map((cat, index) => {
            totalPrice+=cat.price;
            return <CartItem key={index} onDeleteCat={onDeleteCat} className="cart-item" cat={cat}/>
        })}
        </>
    )

}

const CartItem = ({ cat,onDeleteCat }) => {
    console.log("c", cat)
    return (
        <div className="cart-item">
            <p>{cat.name}</p>
            <p>{cat.price}</p>
            <p>{cat.breed}</p>
            <button onClick={()=>onDeleteCat(cat)} >delete</button>
        </div>

    )
}







export default Cart;