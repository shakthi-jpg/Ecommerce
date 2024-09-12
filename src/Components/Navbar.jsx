
import React, { useContext, useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaHome, FaRegAddressBook, FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
import { BsShop } from "react-icons/bs"; // Example Bootstrap icon for branding

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <BsShop className="logo-icon" /> {/* Bootstrap icon used for branding */}
          <span className="ms-2 brand-name">EasyToShop</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link d-flex align-items-center">
                <FaHome className="nav-icon" />
                <span className="ms-2">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link d-flex align-items-center">
                <FaHistory className="nav-icon" />
                <span className="ms-2">About us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link d-flex align-items-center">
                <FaHistory className="nav-icon" />
                <span className="ms-2">contact</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link d-flex align-items-center fs-4">
                <BsCart className="cart-icon animate-cart" />
                <span className="badge bg-danger ms-2">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


