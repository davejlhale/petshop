
import { Link } from "react-router-dom";
import "./style/Invoice.css";

const Invoice = () => {
 
  return (
    <>
      {/* link the cats name here */}
      <div className="invoice-wrapper">
        <h3>Thank you for your purchase!</h3>
        <p>our order will be delivered to you within 3 working days by our delivery team.</p>y
      </div>
      <div className="link-wrapper">
       <Link className="btns" to="/">Back to Shop</Link> 
      </div>
    </>
  );
};

export default Invoice;