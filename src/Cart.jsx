
import './style/Cart.css';
import { useNavigate } from "react-router-dom";

const Cart = ({ cartData,onDeleteCat,handleEmptyCart ,handleSale ,catObj}) => {
    const navigate = useNavigate();
    const handlePayClick = () => {
        handleSale()
         navigate("/Invoice")
      }
    console.log(cartData)
    let totalPrice = 0;
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

const CartItem = ({ cat, onDeleteCat }) => {
    
    return (
        <div className="cart-item">
            <img alt={`bought cat named ${cat.name}`} src={cat.imgSrc} />
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