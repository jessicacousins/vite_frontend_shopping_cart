import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import "./NavBar.css";
import { CartContext } from "../context/CartContext.jsx";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "Checkout", to: "/checkout" },
    { name: "Community", to: "/community" },
    { name: "Login", to: "/login" },
    { name: "Signup", to: "/signup" },
  ];

  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LocalMarket
        </Link>
        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>
        {/* Desktop cart icon with badge */}
        <div className="cart-container">
          <Link to="/cart" className="cart-icon" aria-label="View cart">
            <FiShoppingCart size={24} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="mobile-link">
              {link.name}
            </Link>
          ))}
          <Link to="/cart" className="mobile-link">
            Cart
            {totalItems > 0 && (
              <span className="mobile-cart-badge">{totalItems}</span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}
