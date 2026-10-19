import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

const MAP_PLACE_QUERY = "Smrit Bakery Shop";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_PLACE_QUERY)}&output=embed`;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">Smrit Store</h3>
            <p className="footer-desc">
              Baking happiness daily. We use only the finest ingredients to
              craft premium pastries, custom cakes, and fresh artisan breads for
              our wonderful community.
            </p>
            <div className="social-links">
              <SocialIcon
                url="https://www.facebook.com/SmritStore"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://www.twitter.com/SmritStore"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://www.instagram.com/SmritStore"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://www.tiktok.com/SmritStore"
                style={{ height: 30, width: 30 }}
              />
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Our Menu</a>
              </li>
              <li>
                <a href="#">Custom Orders</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Catering</a>
              </li>
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

          <div className="footer-col footer-col--contact">
            <h4>Contact Us</h4>
            <div className="footer-contact-map">
              <ul className="footer-contact">
                <li>
                  <MapPin size={18} /> Smrit Bakery Shop
                </li>
                <li>
                  <Phone size={18} /> (+977) 9848131750{" "}
                </li>
                <li>
                  <Mail size={18} /> hello@smritstore.com
                </li>
                <li>
                  <a
                    className="footer-map-link"
                    href={MAP_EMBED_URL.replace("&output=embed", "")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </li>
              </ul>

              <div
                className="footer-map-card"
                aria-label="Smrit Bakery Shop location map"
              >
                <iframe
                  title="Smrit Bakery Shop location map"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden="true"
                />
                <div className="footer-map-card__overlay">
                  <span>Visit us on the map</span>
                  <strong>Smrit Bakery Shop</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Smrit Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
