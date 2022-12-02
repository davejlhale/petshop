import { useState, useEffect, } from "react";
import './style/Cart.css';

const Cart = ({ cartData,onDeleteCat,handlePayClick,handleEmptyCart }) => {

    console.log(cartData)
    let totalPrice=0;
    return (
        <div id="cart-page">
        <div id="cart-wrapper">
        {cartData.map((cat, index) => {
            totalPrice+=Number(cat.price.replace("£",""));
            return <CartItem key={index} onDeleteCat={onDeleteCat} className="cart-item" cat={cat}/>
        })}
        </div>
        <div id="cart-total-price">Total Price: £{totalPrice}</div>
        <div id="cart-button-wrapper">
            <button id="cart-pay-now" onClick={()=>handlePayClick()}>Pay</button>
            <button id="cart-empty-button" onClick={()=>handleEmptyCart()}>Clear Cart</button>
        </div>
        </div>
    )

}

const CartItem = ({ cat,onDeleteCat }) => {
    console.log("c", cat)
    return (
        <div className="cart-item">
            <img src={cat.imgSrc} />
            <p>{cat.name}</p>
            <p>{cat.breed}</p>
            <p>{cat.price}</p>
            <div id="cart-item-remove">
            <button onClick={()=>onDeleteCat(cat)} >Remove from Cart</button>
            </div>
        </div>
    )
}





export default Cart;