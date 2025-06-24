import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import "./NavBar.css";

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
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LocalMarket
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="cart-container">
          <Link to="/cart" className="cart-icon">
            <FiShoppingCart size={24} />
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="mobile-link">
              {link.name}
            </Link>
          ))}
          <Link to="/cart" className="mobile-link">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
