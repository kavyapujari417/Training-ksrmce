import Footer from "../Footer/Footer";
import "./Buy.css";

function Buy() {
  return (
    <>
    <div className="buy-page">
      <h1>Checkout</h1>

      <div className="buy-box">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Mobile Number" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Delivery Address" />

        <button>Place Order</button>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Buy;
