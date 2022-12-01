import { useState, useEffect, } from "react";
import './style/Cart.scss';

const Cart = ({ cartData }) => {

    console.log(cartData)

    return (
        <>
        {cartData.map((cat, index) => {
            return <CartItem key={index} className="cart-item" cat={cat}/>
        })}
        </>
    )

}

const CartItem = ({ cat }) => {
    console.log("c", cat)
    return (
        <div>
            <p>{cat.name}</p>
            <p>{cat.price}</p>
            <p>{cat.breed}</p>
        </div>

    )
}







export default Cart;