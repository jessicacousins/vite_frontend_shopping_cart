import { useState } from "react";
import products from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Shop() {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const [selected, setSelected] = useState("All");

  const displayed =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <section
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}>
        Shop All Products
      </h1>
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <label htmlFor="category" style={{ fontWeight: "500" }}>
          Filter:
        </label>
        <select
          id="category"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
          }}
        >
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {displayed.length === 0 ? (
        <p style={{ color: "#666" }}>No products in this category.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {displayed.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </section>
  );
}
