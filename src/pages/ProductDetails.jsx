import {
  useParams,
  useNavigate,
  Link
} from "react-router-dom";

import {
  useContext,
  useState
} from "react";

import products from "../data/products";

import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    addToCart,
    addToWishlist
  } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [review, setReview] = useState("");

  const [reviews, setReviews] = useState(() => {

    return JSON.parse(
      localStorage.getItem(
        `reviews-${id}`
      )
    ) || [
      "Excellent product. Worth the money.",
      "Good quality and fast delivery.",
      "Highly recommended."
    ];

  });

  const [rating, setRating] = useState(

    localStorage.getItem(
      `rating-${id}`
    ) || 0

  );

  if (!product) {

    return (
      <h2>
        Product Not Found
      </h2>
    );

  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category ===
          product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  const handleBuyNow = () => {

    addToCart(product);

    navigate("/checkout");

  };

  const submitReview = () => {

    if (!review.trim()) {

      alert(
        "Please write a review"
      );

      return;

    }

    const updatedReviews = [

      ...reviews,

      review

    ];

    setReviews(
      updatedReviews
    );

    localStorage.setItem(

      `reviews-${id}`,

      JSON.stringify(
        updatedReviews
      )

    );

    setReview("");

    alert(
      "Review Submitted ⭐"
    );

  };

  const submitRating = (
    stars
  ) => {

    setRating(stars);

    localStorage.setItem(

      `rating-${id}`,

      stars

    );

    alert(
      `You rated ${stars} Stars ⭐`
    );

  };

  return (

    <div className="product-details-page">

      <div className="product-details">

        <div className="details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="details-info">

          <h1>
            {product.name}
          </h1>

          <p className="details-rating">
            ⭐ {product.rating}
          </p>

          <h2 className="details-price">
            ₹
            {product.price.toLocaleString()}
          </h2>

          <p className="details-discount">
            {product.discount}
          </p>

          <p className="details-description">
            {product.description}
          </p>

          <div className="product-features">

            <p>
              ✅ In Stock
            </p>

            <p>
              🚚 Free Delivery
            </p>

            <p>
              🔄 7 Days Return Policy
            </p>

          </div>

          <div className="details-buttons">

            <button
              className="cart-btn"
              onClick={() =>
                addToCart(product)
              }
            >
              🛒 Add To Cart
            </button>

            <button
              className="buy-btn"
              onClick={
                handleBuyNow
              }
            >
              Buy Now
            </button>

            <button
              className="wishlist-btn-details"
              onClick={() =>
                addToWishlist(
                  product
                )
              }
            >
              ❤️ Wishlist
            </button>

          </div>

        </div>

      </div>

      {/* Related Products */}

      <div className="related-section">

        <h2>
          You May Also Like
        </h2>

        <div className="related-grid">

          {relatedProducts.map(
            (item) => (

              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="related-card"
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h4>
                  {item.name}
                </h4>

                <p>
                  ₹
                  {item.price.toLocaleString()}
                </p>

              </Link>

            )
          )}

        </div>

      </div>

      {/* Reviews */}

      <div className="reviews-section">

        <h2>
          Customer Reviews
        </h2>

        {reviews.map(
          (item, index) => (

            <div
              key={index}
              className="review-card"
            >

              <h4>
                ⭐⭐⭐⭐⭐
              </h4>

              <p>
                {item}
              </p>

            </div>

          )
        )}

        <div className="add-review">

          <h3>
            Write a Review
          </h3>

          <textarea
            rows="4"
            placeholder="Share your experience..."
            value={review}
            onChange={(e) =>
              setReview(
                e.target.value
              )
            }
          />

          <button
            className="review-btn"
            onClick={
              submitReview
            }
          >
            Submit Review
          </button>

        </div>

      </div>

      {/* Rating Section */}

      <div className="rating-section">

        <h2>
          Rate This Product
        </h2>

        <div className="stars">

          {[1,2,3,4,5].map(
            (star) => (

              <span
                key={star}
                className={
                  star <= rating
                    ? "active-star"
                    : "star"
                }
                onClick={() =>
                  submitRating(
                    star
                  )
                }
              >
                ⭐
              </span>

            )
          )}

        </div>

        <p>
          Your Rating:
          {" "}
          {rating}/5
        </p>

      </div>

    </div>

  );

}

export default ProductDetails;