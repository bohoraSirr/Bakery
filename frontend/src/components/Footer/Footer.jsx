import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-logo">Smrit Store</h3>
                        <p className="footer-desc">
                            Baking happiness daily. We use only the finest ingredients to craft premium pastries, custom cakes, and fresh artisan breads for our wonderful community.
                        </p>
                        <div className="social-links">
                            <SocialIcon url='https://www.facebook.com/SmritStore' style={{ height: 30, width: 30 }} />
                            <SocialIcon url='https://www.twitter.com/SmritStore' style={{ height: 30, width: 30 }} />
                            <SocialIcon url='https://www.instagram.com/SmritStore' style={{ height: 30, width: 30 }} />
                            <SocialIcon url='https://www.tiktok.com/SmritStore' style={{ height: 30, width: 30 }} />
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">Our Menu</a></li>
                            <li><a href="#">Custom Orders</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Catering</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Opening Hours</h4>
                        <ul className="footer-info">
                            <li>Mon - Fri: 7am - 8pm</li>
                            <li>Saturday: 8am - 9pm</li>
                            <li>Sunday: 8am - 6pm</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact">
                            <li><MapPin size={18} /> 123 Bakery Lane, Sweet City</li>
                            <li><Phone size={18} /> (555) 123-4567</li>
                            <li><Mail size={18} /> hello@smritstore.com</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Smrit Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
