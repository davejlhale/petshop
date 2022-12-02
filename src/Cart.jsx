import { useState, useEffect, } from "react";
import './style/Cart.css';

const Cart = ({ cartData, onDeleteCat }) => {

    console.log(cartData)
    let totalPrice = 0;
    return (
        <>
            <div id="cart-list-wrapper">
                {cartData.map((cat, index) => {
                    totalPrice += Number(cat.price.replace("£", ""));
                    return <CartItem key={index} onDeleteCat={onDeleteCat} className="cart-item" cat={cat} />
                })}
                
                <div id="cart-total-price">Total £{totalPrice}</div>
                <div id="cart-functions">
                    <button onClick={() => onDeleteCat()} >Pay</button>
                    <button onClick={() => onDeleteCat()} >empty cart</button>
                </div>
            </div>

        </>
    )

}

const CartItem = ({ cat, onDeleteCat }) => {
    console.log("c", cat)
    return (
        <div className="cart-item">
            <img src={cat.imgSrc} />
            <div className="cart-item-text">
                <p>{cat.name}</p>
                <p>{cat.breed}</p>
                <p>{cat.price}</p>
                <button onClick={() => onDeleteCat(cat)} >Remove from Cart</button>
            </div>
        </div>
    )
}





export default Cart;