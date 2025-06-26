
import React, { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addItem } = useContext(CartContext);

  const handleAdd = () => {
    addItem(product);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-img"
        loading="lazy"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-button" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
