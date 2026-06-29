import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {

    if (!email) {
      alert("Please enter your email");
      return;
    }

    localStorage.setItem(
      "subscriberEmail",
      email
    );

    alert("Subscribed Successfully 🎉");

    setEmail("");
  };

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>ShopEase</h2>

          <p>
            Your one-stop destination for
            Electronics, Fashion, Furniture,
            Beauty Products, and more.
          </p>

        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/orders">Orders</Link>

        </div>

        <div className="footer-section">

          <h3>Information</h3>

          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p>📧 support@shopease.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 Vijayawada, AP</p>

        </div>

      </div>

      {/* Newsletter */}

      <div className="newsletter">

        <h2>
          Subscribe To Our Newsletter
        </h2>

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button
          onClick={handleSubscribe}
        >
          Subscribe
        </button>

      </div>

      <hr />

      <p className="footer-bottom">
        © 2026 ShopEase. All Rights Reserved.
      </p>

    </footer>

  );
}

export default Footer;