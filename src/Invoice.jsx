
import "./style/Invoice.css";

const Invoice = () => {
 
  return (
    <>
      {/* link the cats name here */}
      <div className="invoice-wrapper">
        <h3>Thank you for your purchase!</h3>
        <p>our order will be delivered to you within 3 working days by our delivery team.</p>y
      </div>
      <div className="btns">
        <button className="btn" onClick={() => handleClick()}>Back to shop</button>   
      </div>
    </>
  );
};

export default Invoice;