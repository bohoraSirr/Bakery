import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ProductCategories.css';

const categories = [
  'Cakes', 'Pastries', 'Donuts', 'Breads', 'Cookies', 'Custom Orders', 'Desserts'
];

const ProductCategories = () => {
  const containerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to show/hide arrows
  const checkScrollArrows = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollArrows);
      // Run once on load
      checkScrollArrows();
      // Handle resize
      window.addEventListener('resize', checkScrollArrows);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScrollArrows);
      }
      window.removeEventListener('resize', checkScrollArrows);
    };
  }, []);

  // Desktop Click-and-Drag horizontal scroll
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed factor
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Button Scroll Actions
  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="product-categories-section animate-fade-in">
      <div className="product-categories-wrapper">
        {/* Left Arrow Button */}
        {showLeftArrow && (
          <button className="nav-arrow-btn prev" onClick={() => scroll('left')} aria-label="Scroll Left">
            <ChevronLeft size={20} />
          </button>
        )}

        <div 
          ref={containerRef}
          className={`product-categories-container ${isDown ? 'dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <span className="category-item" style={{ animationDelay: `${index * 0.1}s` }}>
                {category}
              </span>
              {index < categories.length - 1 && <span className="category-separator">•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Right Arrow Button */}
        {showRightArrow && (
          <button className="nav-arrow-btn next" onClick={() => scroll('right')} aria-label="Scroll Right">
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductCategories;
