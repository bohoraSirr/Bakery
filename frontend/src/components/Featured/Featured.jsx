import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <h2 className="section-title">Our Specialties</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <div className="card-icon">🎂</div>
            <h3>Custom Cakes</h3>
            <p>Handcrafted cakes for your special moments, baked with love and premium ingredients.</p>
          </div>
          <div className="featured-card">
            <div className="card-icon">🥐</div>
            <h3>Fresh Pastries</h3>
            <p>Flaky, buttery perfection baked fresh every morning by our artisan bakers.</p>
          </div>
          <div className="featured-card">
            <div className="card-icon">🥖</div>
            <h3>Artisan Bread</h3>
            <p>Naturally leavened sourdough and rustic breads with the perfect crust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
