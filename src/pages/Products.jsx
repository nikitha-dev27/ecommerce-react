import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

import {
  FaThLarge,
  FaBlender,
  FaCouch,
  FaLaptop,
  FaMobileAlt,
  FaTshirt,
  FaSpa
} from "react-icons/fa";

import { GiBearFace } from "react-icons/gi";

function Products({ search }) {

  const [searchParams] = useSearchParams();

  const urlCategory =
    searchParams.get("category") || "All";

  const [category, setCategory] =
    useState(urlCategory);

  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  const categories = [
    {
      name: "All",
      icon: <FaThLarge className="all-icon" />
    },
    {
      name: "Kitchen Essentials",
      icon: <FaBlender className="kitchen-icon" />
    },
    {
      name: "Furniture",
      icon: <FaCouch className="furniture-icon" />
    },
    {
      name: "Electronics",
      icon: <FaLaptop className="electronics-icon" />
    },
    {
      name: "Mobiles",
      icon: <FaMobileAlt className="mobile-icon" />
    },
    {
      name: "Fashion",
      icon: <FaTshirt className="fashion-icon" />
    },
    {
      name: "Beauty",
      icon: <FaSpa className="beauty-icon" />
    },
    {
      name: "Toys",
      icon: <GiBearFace className="toy-icon" />
    }
  ];

  const filteredProducts =
    products.filter((product) => {

      const searchTerm =
        (search || "")
          .toLowerCase()
          .trim();

      const matchesSearch =
        searchTerm === "" ||

        product.name
          ?.toLowerCase()
          .includes(searchTerm) ||

        product.category
          ?.toLowerCase()
          .includes(searchTerm) ||

        product.description
          ?.toLowerCase()
          .includes(searchTerm);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );

    });

  return (

    <div className="products-page">

      <aside className="sidebar">

        <h3>🛍 Shop Categories</h3>

        <ul>

          {categories.map((cat) => (

            <li
              key={cat.name}
              onClick={() =>
                setCategory(cat.name)
              }
              className={
                category === cat.name
                  ? "active-category"
                  : ""
              }
            >

              <span className="cat-icon">
                {cat.icon}
              </span>

              <span>
                {cat.name}
              </span>

            </li>

          ))}

        </ul>

      </aside>

      <main className="product-content">

        <div className="products-header">

          <h2 className="product-heading">

            {category === "All"
              ? "All Products"
              : category}

          </h2>

          <p className="product-count">

            {filteredProducts.length}
            {" "}Products Found

          </p>

        </div>

        <div className="products-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))

          ) : (

            <div className="no-products">

              <h2>
                No Products Found 😔
              </h2>

              <p>
                Try another search
                or category.
              </p>

            </div>

          )}

        </div>

      </main>

    </div>

  );

}

export default Products;