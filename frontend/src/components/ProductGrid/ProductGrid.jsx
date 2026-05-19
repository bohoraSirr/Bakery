import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import './ProductGrid.css';

const ProductGrid = () => {
  const cakes = products.filter(p => p.category.toLowerCase() === 'cakes').slice(0, 2);
  const pastries = products.filter(p => p.category.toLowerCase() === 'pastries').slice(0, 2);
  const donuts = products.filter(p => p.category.toLowerCase() === 'donuts').slice(0, 2);

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        
        {/* Row 1: Cakes */}
        <div className="category-row-wrapper">
          <h2 className="category-row-title">Cakes</h2>
          <div className="category-row-grid cakes-row">
            {/* Left side: Big Order Now Card */}
            <div className="big-order-card cake-theme">
              <div className="order-card-overlay"></div>
              <div className="order-card-content">
                <h3>Signature Cakes</h3>
                <p>Customise with your own personal message</p>
                <Link to="/login" className="btn-primary order-now-btn">Order Now</Link>
              </div>
            </div>
            {/* Right side: Small Grid of 2 Cake products */}
            <div className="small-products-grid">
              {cakes.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Pastries */}
        <div className="category-row-wrapper">
          <h2 className="category-row-title">Pastries</h2>
          <div className="category-row-grid pastries-row">
            {/* Left side: Small Grid of 2 Pastry products */}
            <div className="small-products-grid">
              {pastries.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Right side: Big Order Now Card */}
            <div className="big-order-card pastry-theme">
              <div className="order-card-overlay"></div>
              <div className="order-card-content">
                <h3>Artisanal Pastries</h3>
                <p>Buttery, flaky perfection baked every morning</p>
                <Link to="/login" className="btn-primary order-now-btn">Order Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Donuts */}
        <div className="category-row-wrapper">
          <h2 className="category-row-title">Donuts</h2>
          <div className="category-row-grid donuts-row">
            {/* Left side: Big Order Now Card */}
            <div className="big-order-card donut-theme">
              <div className="order-card-overlay"></div>
              <div className="order-card-content">
                <h3>Gourmet Donuts</h3>
                <p>Sweet glaze and colorful toppings for your cravings</p>
                <Link to="/login" className="btn-primary order-now-btn">Order Now</Link>
              </div>
            </div>
            {/* Right side: Small Grid of 2 Donut products */}
            <div className="small-products-grid">
              {donuts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
