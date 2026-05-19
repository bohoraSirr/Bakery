import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { products } from '../../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="btn-primary">Return to Home</Link>
      </div>
    );
  }

  const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleIncrease = () => setQuantity(prev => prev + 1);

  const handleAddToCart = () => {
    // Mock add to cart functionality
    console.log(`Added ${quantity} of ${product.name} to cart. Message: ${message}`);
    alert(`Successfully added ${quantity} ${product.name} to your cart!`);
  };

  const isCake = product.category.toLowerCase() === 'cakes';

  return (
    <div className="product-detail-page animate-fade-in">
      <div className="product-detail-container">
        
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="product-detail-content">
          {/* Left: Image & Gallery */}
          <div className="product-detail-image-section">
            <div className="main-image-container">
              <img src={product.image} alt={product.name} className="product-detail-image animate-fade-in" />
            </div>
            <div className="product-image-gallery">
              {[0, 1, 2].map((index) => (
                <div 
                  key={index} 
                  className={`gallery-thumb-container ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={product.image} alt={`${product.name} preview ${index + 1}`} className="gallery-thumb" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info and Actions */}
          <div className="product-detail-info-section">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-price">${product.price.toFixed(2)}</p>
            
            <p className="detail-description">{product.description}</p>

            <div className="detail-actions">
              <div className="quantity-selector">
                <span className="action-label">Quantity</span>
                <div className="quantity-controls">
                  <button onClick={handleDecrease} className="qty-btn"><Minus size={18} /></button>
                  <span className="qty-value">{quantity}</span>
                  <button onClick={handleIncrease} className="qty-btn"><Plus size={18} /></button>
                </div>
              </div>

              {isCake && (
                <div className="message-input-group">
                  <label htmlFor="cake-message" className="action-label">Write a message on the cake (Optional)</label>
                  <textarea 
                    id="cake-message"
                    placeholder="e.g. Happy Birthday John!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                  />
                </div>
              )}

              <div className="total-section">
                <span className="total-label">Total:</span>
                <span className="total-price">${(product.price * quantity).toFixed(2)}</span>
              </div>

              <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
