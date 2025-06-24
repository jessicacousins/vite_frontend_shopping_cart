import { useParams, Link } from "react-router-dom";
import products from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Category() {
  const { categoryName } = useParams();
  const decoded = decodeURIComponent(categoryName);
  const filtered = products.filter((p) => p.category === decoded);

  return (
    <section
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}>
        {decoded}
      </h1>
      {filtered.length === 0 ? (
        <p style={{ color: "#666" }}>
          No products found in "{decoded}". Go back to{" "}
          <Link
            to="/shop"
            style={{ color: "var(--primary)", textDecoration: "underline" }}
          >
            Shop
          </Link>
          .
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </section>
  );
}
