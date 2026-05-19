import React from 'react';
import './ProductCategories.css';

const categories = [
  'Cakes', 'Pastries', 'Donuts', 'Breads', 'Cookies', 'Custom Orders', 'Desserts'
];

const ProductCategories = () => {
  return (
    <section className="product-categories-section animate-fade-in">
      <div className="product-categories-container">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <span className="category-item" style={{ animationDelay: `${index * 0.1}s` }}>
              {category}
            </span>
            {index < categories.length - 1 && <span className="category-separator">•</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
