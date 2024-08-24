import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter-section">
        <div className="newsletter-content">
          <p className="newsletter-title">BE THE FIRST TO KNOW</p>
          <p className="newsletter-subtitle">Sign up for updates from Metta Muse</p>
          <div className="newsletter-form-container">
            <input type="email" placeholder="Enter your email" className="newsletter-input"/>
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
        <div className="footer-contact-info">
          <p className="contact-title">CONTACT US</p>
          <p className="contact-phone">+44221335360</p>
          <p className="contact-email">info@mettamuse.com</p>
          <div className="contact-currency">
            <span className="currency-icon">icon</span> 
            <span className="currency-text">USD</span>
          </div>
          <p className="contact-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora officiis ducimus atque, odit.
          </p>
        </div>
      </div>

      <div className="footer-links-section">
        <div className="footer-links-column">
          <p className="footer-column-title">Metta Muse</p>
          <ul className="footer-links-list">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>
        <div className="footer-links-column">
          <p className="footer-column-title">Quick Links</p>
          <ul className="footer-links-list">
            <li>Order & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-follow-payment">
          <p className="footer-column-title">FOLLOW US</p>
          <div className="social-icons">2 Icons</div>
          <p className="footer-acceptance">Metta Muse ACCEPTS</p>
          <div className="payment-methods">Credit Cards</div>
        </div>
      </div>

      <div className="footer-copyright">
        Copyright © 2023 Metta Muse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
