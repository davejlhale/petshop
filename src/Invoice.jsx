
import { Link } from "react-router-dom";
import "./style/Invoice.css";

const Invoice = () => {
 
  return (
    <>
    <div className="main">
      <div className="invoice-wrapper">
        <div>
            <h3>Thank you for your purchase!</h3>
            <p>Your order will be delivered to you within 3 working days by our delivery team.</p>
        </div>
        <div className="link-wrapper">
            <Link className="link" to="/">Back to Shop</Link> 
        </div>
      </div>
      </div>
    </>
  );
};

export default Invoice;