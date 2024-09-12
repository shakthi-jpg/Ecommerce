
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";  // Import social media icons

const Footer = () => {
  return (
    <footer
      className="footer bg-dark text-white py-3 mt-4"
      style={{ backgroundColor: '#343a40', padding: '1rem 2rem' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="fw-bold">About Us</h5>
            <p>
              We are committed to providing the best shopping experience with a wide variety of products and excellent customer service.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link></li>
              <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
              <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook style={{ fontSize: '1.5rem', color: 'white' }} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter style={{ fontSize: '1.5rem', color: 'white' }} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram style={{ fontSize: '1.5rem', color: 'white' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">© {new Date().getFullYear()} Easytoshop.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
