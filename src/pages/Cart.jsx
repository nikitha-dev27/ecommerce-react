import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {

  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {

    const code = coupon.toUpperCase();

    if (code === "SAVE10") {

      setDiscount(total * 0.10);

      alert("10% Discount Applied 🎉");

    }

    else if (code === "SAVE20") {

      setDiscount(total * 0.20);

      alert("20% Discount Applied 🎉");

    }

    else {

      setDiscount(0);

      alert("Invalid Coupon ❌");

    }

  };

  if (cart.length === 0) {

    return (

      <div className="empty-cart">

        <h2>
          Your Cart is Empty 🛒
        </h2>

      </div>

    );

  }

  return (

    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cart.map((item) => (

        <div
          key={item.id}
          className="cart-item"
        >

          <img
            src={item.image}
            alt={item.name}
          />

          <div className="cart-info">

            <h3>
              {item.name}
            </h3>

            <p className="cart-price">
              ₹{item.price.toLocaleString()}
            </p>

            <div className="cart-controls">

              <button
                className="qty-btn"
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              <span className="quantity">
                {item.quantity}
              </span>

              <button
                className="qty-btn"
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>

            </div>

            <button
              className="remove-btn"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <div className="cart-summary">

        <h2>Order Summary</h2>

        <div className="summary-row">

          <span>Items Total</span>

          <span>
            ₹{total.toLocaleString()}
          </span>

        </div>

        <div className="summary-row">

          <span>Delivery</span>

          <span>FREE</span>

        </div>

        <div className="coupon-offers">

          <h4>
            Available Offers
          </h4>

          <p>
            🎁 SAVE10 - Get 10% Off
          </p>

          <p>
            🎁 SAVE20 - Get 20% Off
          </p>

        </div>

        <div className="coupon-section">

          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={coupon}
            onChange={(e) =>
              setCoupon(e.target.value)
            }
          />

          <button
            onClick={applyCoupon}
          >
            Apply
          </button>

        </div>

        <div className="summary-row">

          <span>Discount</span>

          <span>
            ₹{discount.toFixed(0)}
          </span>

        </div>

        <div className="summary-row savings-row">

          <span>You Save</span>

          <span>
            ₹{discount.toFixed(0)}
          </span>

        </div>

        <div className="total-row">

          <span>Final Total</span>

          <span>
            ₹{(
              total - discount
            ).toFixed(0)}
          </span>

        </div>

        <button
          className="checkout-btn"
          onClick={() =>
            navigate("/checkout")
          }
        >
          Proceed To Checkout
        </button>

      </div>

    </div>

  );

}

export default Cart;