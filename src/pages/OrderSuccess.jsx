import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="success-page">

      <h1>🎉 Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with us.
      </p>

      <Link
        to="/products"
        className="continue-btn"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default OrderSuccess;