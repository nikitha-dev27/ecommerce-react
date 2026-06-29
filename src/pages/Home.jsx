import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
    "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=500",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="amazon-home">

      {/* Hero Slider */}

      <section className="hero-slider">
        <img src={images[current]} alt="banner" />

        <div className="hero-content">
          <h1>Big Summer Sale</h1>
          <p>Up to 70% Off on Electronics & Fashion</p>

          <Link to="/products">
            <button className="shop-btn">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Category Cards */}

      <section className="home-cards">

        <Link
  to="/products?category=Electronics"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="home-card">
    <h2>Electronics</h2>

          <div className="card-grid">

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" alt="" />
              <p>Mobiles</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" alt="" />
              <p>Laptops</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" alt="" />
              <p>Watches</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" alt="" />
              <p>Audio</p>
            </div>

          </div>
         </div>
</Link>

       <Link
  to="/products?category=Furniture"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="home-card">
    <h2>Home Essentials</h2>

          <div className="card-grid">

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400" alt="" />
              <p>Furniture</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400" alt="" />
              <p>Cleaning</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400" alt="" />
              <p>Lighting</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400" alt="" />
              <p>Decor</p>
            </div>

          </div>
          </div>
</Link>

       <Link
  to="/products?category=Fashion"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="home-card">
    <h2>Fashion</h2>

          <div className="card-grid">

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400" alt="" />
              <p>Men</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400" alt="" />
              <p>Women</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" alt="" />
              <p>Shoes</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400" alt="" />
              <p>Bags</p>
            </div>

          </div>
          </div>
</Link>

        <Link
  to="/products?category=Toys"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="home-card">
    <h2>Beauty & Toys</h2>

          <div className="card-grid">

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400" alt="" />
              <p>Beauty</p>
            </div>

            <div className="category-item">
              <img src="https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg" alt="" />
              <p>Skincare</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400" alt="" />
              <p>Toys</p>
            </div>

            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400" alt="" />
              <p>Games</p>
            </div>

          </div>
        </div>
</Link>

      </section>
      

{/* Trending Categories */}

<section className="deals-section">
  <h2>Trending Categories</h2>

  <div className="deal-row">

    <Link to="/products?category=Mobiles" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=500" alt="" />
        <p>Mobiles</p>
      </div>
    </Link>

    <Link to="/products?category=Furniture" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" alt="" />
        <p>Furniture</p>
      </div>
    </Link>

    <Link to="/products?category=Fashion" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b" alt="" />
        <p>Fashion</p>
      </div>
    </Link>

    <Link to="/products?category=Beauty" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" alt="" />
        <p>Beauty</p>
      </div>
    </Link>

    <Link to="/products?category=Beauty" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg" alt="" />
        <p>Skincare</p>
      </div>
    </Link>

  </div>
</section>

      {/* Today's Deals */}

     <section className="deals-section">
  <h2>Today's Deals</h2>

  <div className="deal-row">

    <Link to="/products?category=Fashion" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" alt="" />
        <p>Up to 60% Off Shoes</p>
      </div>
    </Link>

    <Link to="/products?category=Electronics" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" alt="" />
        <p>Headphones Sale</p>
      </div>
    </Link>

    <Link to="/products?category=Mobiles" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1719945421298-f03d3d80c3e1?w=500" alt="" />
        <p>Smartphones Offers</p>
      </div>
    </Link>

    <Link to="/products?category=Electronics" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" alt="" />
        <p>Laptop Discounts</p>
      </div>
    </Link>

    <Link to="/products?category=Fashion" style={{ textDecoration:"none", color:"inherit" }}>
      <div className="deal-box">
        <img src="https://images.unsplash.com/photo-1631233941443-be9a7c8b3080?w=500" alt="" />
        <p>Fashion Discounts</p>
      </div>
    </Link>

  </div>
</section>

    </div>
  );
}

export default Home;