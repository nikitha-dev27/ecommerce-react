
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { placeOrder as saveOrder } from "../services/orderService";

function Checkout() {

  const navigate = useNavigate();

  const {
    cart,
    placeOrder
  } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [payment, setPayment] = useState("COD");

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handlePlaceOrder = async () => {

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {

      alert("Please fill all fields");

      return;

    }

    // Fake logged-in user
    const user = {

      id: 1,

      fullName: "Nikitha",

      email: "nikitha@gmail.com"

    };

    const total = cart.reduce(

      (sum, item) =>

        sum + item.price * item.quantity,

      0

    );

    try {

      await saveOrder({

        userId: user.id,

        customerName: formData.name,

        phone: formData.phone,

        address: formData.address,

        paymentMethod: payment,

        total: total,

        status: "Confirmed",

        orderDate: new Date().toLocaleDateString()

      });

      placeOrder();

      alert("Order Placed Successfully 🎉");

      navigate("/success");

    }

    catch (error) {

      console.error(error);

      alert("Unable to Place Order");

    }

  };

  return (

    <div className="checkout-page">

      <div className="checkout-card">

        <h1>Checkout</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          rows="5"
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange}
        />

        <h3>Select Payment Method</h3>

        <div className="payment-options">

          <label>

            <input
              type="radio"
              value="COD"
              checked={payment === "COD"}
              onChange={(e) =>
                setPayment(e.target.value)
              }
            />

            Cash On Delivery

          </label>

          <label>

            <input
              type="radio"
              value="UPI"
              checked={payment === "UPI"}
              onChange={(e) =>
                setPayment(e.target.value)
              }
            />

            UPI

          </label>

          <label>

            <input
              type="radio"
              value="Card"
              checked={payment === "Card"}
              onChange={(e) =>
                setPayment(e.target.value)
              }
            />

            Card

          </label>

        </div>

        {payment === "UPI" && (

          <div className="qr-section">

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=shopease@upi"
              alt="QR"
            />

            <p>
              Scan the QR and complete payment.
            </p>

          </div>

        )}

        {payment === "Card" && (

          <div className="card-payment">

            <input
              type="text"
              placeholder="Card Number"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
            />

            <div className="card-row">

              <input
                type="text"
                placeholder="MM/YY"
              />

              <input
                type="password"
                placeholder="CVV"
              />

            </div>

          </div>

        )}

        <button
          className="place-order-btn"
          onClick={handlePlaceOrder}
        >

          Place Order

        </button>

      </div>

    </div>

  );

}

export default Checkout;

