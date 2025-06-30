import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import "./CartPage.css";

export default function CartPage() {
  const navigate = useNavigate();
  const {
    cartItems,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  } = useContext(CartContext);

  const handleDecrease = (item) => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = (item) => {
    removeItem(item.id);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <section className="cart-container">
          <h1>Your Cart</h1>
          <p className="empty-cart">Your cart is empty.</p>
          <a href="/shop" className="back-to-shop">
            Continue Shopping
          </a>
        </section>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <section className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h2 className="item-name">{item.name}</h2>
                <p className="item-price">${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => handleDecrease(item)}
                    aria-label="Decrease quantity"
                  >
                    –
                  </button>
                  <span className="qty">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleIncrease(item)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="item-subtotal">
                <p>${(item.quantity * item.price).toFixed(2)}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p>
            Total Items: <strong>{totalItems}</strong>
          </p>
          <p>
            Total Price: <strong>${totalPrice.toFixed(2)}</strong>
          </p>
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      </section>
    </div>
  );
}
