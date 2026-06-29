
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ search, setSearch }) {

  const {
    cart,
    wishlist,
    orders
  } = useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const username = user?.fullName || "User";

  const handleSearch = (e) => {

    setSearch(e.target.value);

    if (location.pathname !== "/products") {
      navigate("/products");
    }

  };

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

    window.location.reload();

  };

  return (

    <nav className="amazon-nav">

      <Link
        to="/"
        className="logo"
      >
        ShopEase
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        className="nav-search"
        value={search}
        onChange={handleSearch}
      />

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">
          Shop
        </Link>

        <Link to="/orders">
          📦 Orders ({orders.length})
        </Link>

        <Link to="/wishlist">
          ❤️ {wishlist.length}
        </Link>

        <Link to="/cart">
          🛒 {cart.length}
        </Link>

        {user ? (

          <>

            <Link
              to="/profile"
              className="profile-link"
            >
              <FaUserCircle size={22} />
              <span>{username}</span>
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>

        ) : (

          <>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </>

        )}

      </div>

    </nav>

  );

}

export default Navbar;
