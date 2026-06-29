import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Wishlist() {

  const {
    wishlist,
    addToCart,
    removeFromWishlist
  } = useContext(CartContext);

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist">
        <h2>Your Wishlist is Empty ❤️</h2>
      </div>
    );
  }

  return (

    <div className="wishlist-page">

      <h1>My Wishlist ❤️</h1>

      {wishlist.map((item) => (

        <div
          key={item.id}
          className="wishlist-item"
        >

          <img
            src={item.image}
            alt={item.name}
          />

          <div className="wishlist-info">

            <h3>{item.name}</h3>

            <p className="wishlist-price">
              ₹{item.price.toLocaleString()}
            </p>

            <div className="wishlist-actions">

              <button
                className="move-cart-btn"
                onClick={() => addToCart(item)}
              >
                🛒 Move To Cart
              </button>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromWishlist(item.id)
                }
              >
                Remove
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  );
}

export default Wishlist;