
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { addCartItem } from "../services/cartService";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const {
    addToCart,
    addToWishlist,
    wishlist
  } = useContext(CartContext);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  // Fake user if no login exists
  const getUser = () => {

    let user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {

      user = {
        id: 1,
        fullName: "Nikitha",
        email: "nikitha@gmail.com"
      };

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
    }

    return user;
  };

  const handleCart = async () => {

    const user = getUser();

    try {

      await addCartItem({

        userId: user.id,

        productId: product.id,

        quantity: 1

      });

      addToCart(product);

      toast.success(
        `${product.name} added to Cart 🛒`
      );

    } catch (error) {

      console.error(error);

      toast.error("Unable to add to cart");

    }

  };

  const handleWishlist = () => {

    addToWishlist(product);

    if (isWishlisted) {

      toast.info("Removed from Wishlist");

    } else {

      toast.success("Added to Wishlist ❤️");

    }

  };

  const handleBuyNow = async () => {

    const user = getUser();

    try {

      await addCartItem({

        userId: user.id,

        productId: product.id,

        quantity: 1

      });

      addToCart(product);

      navigate("/checkout");

    } catch (error) {

      console.error(error);

      toast.error("Unable to continue");

    }

  };

  return (

    <div className="product-card">

      <span className="discount">
        {product.discount}
      </span>

      <button
        className={`wishlist-btn ${
          isWishlisted
            ? "active-heart"
            : ""
        }`}
        onClick={handleWishlist}
      >

        {
          isWishlisted
            ? <FaHeart />
            : <FaRegHeart />
        }

      </button>

      <Link
        to={`/product/${product.id}`}
        className="product-link"
      >

        <img
          src={product.image}
          alt={product.name}
        />

      </Link>

      <h3>{product.name}</h3>

      <p className="category">
        {product.category}
      </p>

      <div className="rating">
        ⭐ {product.rating}
      </div>

      <h2 className="price">
        ₹{product.price.toLocaleString()}
      </h2>

      <div className="product-actions">

        <button
          className="cart-btn"
          onClick={handleCart}
        >
          🛒 Add To Cart
        </button>

        <button
          className="buy-btn"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>

      </div>

    </div>

  );

}

export default ProductCard;

