import React, { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const trendingItems = [
    {
        id: 1,
        title: "Signature Chocolate Cake",
        description: "Rich, moist chocolate layers with a velvety ganache.",
        details: "Crafted with 70% dark Belgian chocolate and organic flour. A symphony of textures with a delicate crunch on the bottom and a smooth, melt-in-your-mouth finish. Perfect for any celebration.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Artisan Berry Pastry",
        description: "Flaky, buttery crust filled with seasonal fresh berries.",
        details: "Hand-rolled puff pastry baked until golden. Filled with our signature Madagascar vanilla bean custard and generously topped with locally sourced fresh berries and a light glaze.",
        image: "https://images.unsplash.com/photo-1621236378699-8597faa6a71e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Salted Caramel Donut",
        description: "Soft, fluffy yeast donut with a rich salted caramel glaze.",
        details: "Made fresh every morning in small batches. Our unique 24-hour dough fermentation process creates an incredibly airy texture, perfectly balanced by the rich, house-made salted caramel.",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop"
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingItems.length);
    }, []);

    useEffect(() => {
        let intervalId;
        // Auto-slide every 3 seconds if not hovered
        if (!isHovered) {
            intervalId = setInterval(nextSlide, 3000);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isHovered, nextSlide]);

    return (
        <div
            className="hero-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {trendingItems.map((item, index) => (
                <div
                    key={item.id}
                    className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    {/* Gradient overlay for better text readability */}
                    <div className="hero-overlay"></div>

                    <div className="hero-content">
                        <span className="trending-badge">Trending 🔥</span>
                        <h1 className="hero-title">{item.title}</h1>
                        <p className="hero-desc">{item.description}</p>

                        {/* Extended details that show on hover */}
                        <div className={`hero-details ${isHovered && index === currentIndex ? 'show' : ''}`}>
                            <div className="details-content">
                                <h3>About this treat:</h3>
                                <p>{item.details}</p>
                                <button className="order-btn">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Slide indicators at the bottom */}
            <div className="hero-indicators">
                {trendingItems.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
