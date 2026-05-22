import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import "./ProductGrid.css";

const normalizeCategory = (value) => value.toLowerCase().replace(/s$/, "");

const ProductGrid = ({
  selectedCategory = "All",
  featuredProducts = products.slice(0, 4),
}) => {
  const visibleProducts =
    selectedCategory === "All"
      ? featuredProducts
      : products.filter(
          (product) =>
            normalizeCategory(product.category) ===
            normalizeCategory(selectedCategory),
        );

  const gridTitle =
    selectedCategory === "All" ? "Featured Selection" : selectedCategory;
  const gridDescription =
    selectedCategory === "All"
      ? "A handpicked taste of our most loved bakery creations."
      : `Freshly baked ${selectedCategory.toLowerCase()} selected for you.`;

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <div className="product-grid-header">
          <p className="product-grid-kicker">Selected for you</p>
          <div>
            <h2 className="product-grid-title">{gridTitle}</h2>
            <p className="product-grid-description">{gridDescription}</p>
          </div>
        </div>

        <div className="product-grid-items" key={selectedCategory}>
          {visibleProducts.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card product-card--featured"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
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
    </section>
  );
};

export default ProductGrid;
