import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";


function App() {

  const [search, setSearch] = useState("");

  return (

    <BrowserRouter>

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              search={search}
            />
          }
        />

        {/* Products */}
        <Route
          path="/products"
          element={
            <Products
              search={search}
            />
          }
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* Success */}
        <Route
          path="/success"
          element={<OrderSuccess />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

        <Route
  path="/orders"
  element={<Orders />}
/>


<Route
  path="/profile"
  element={<Profile />}
/>

<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/faq" element={<Faq />} />

      </Routes>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

    </BrowserRouter>

  );
}

export default App;