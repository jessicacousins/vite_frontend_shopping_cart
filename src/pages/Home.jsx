import ParallaxSection from "../components/ParallaxSection.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const categories = ["Fruits", "Vegetables", "Bakery", "Dairy"];
  return (
    <div>
      <ParallaxSection imageUrl="/images/parallax-1.jpg" height="70vh">
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Welcome to Local Market
        </h1>
        <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
          Discover fresh, local products with a warm touch.
        </p>
        <Link
          to="/shop"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            backgroundColor: "var(--accent-light)",
            color: "var(--primary-dark)",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.75rem",
            fontWeight: "600",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent-light)")
          }
        >
          Start Shopping
        </Link>
      </ParallaxSection>

      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "var(--text-dark)",
            marginBottom: "1.5rem",
          }}
        >
          Our Categories
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${encodeURIComponent(cat)}`}
              style={{
                position: "relative",
                height: "180px",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(/images/categories/${cat.toLowerCase()}.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.2s",
                border: "3px solid #e4990f",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(199, 91, 18, 0.4)",
                }}
              ></div>
              <span
                style={{
                  position: "relative",
                  color: "var(--text-light)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ParallaxSection imageUrl="/images/parallax-2.jpg" height="50vh">
        <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Why Choose Us?</h2>
        <p style={{ marginTop: "1rem", fontSize: "1rem" }}>
          Locally sourced. Handpicked. Delivered with care.
        </p>
        {/* Auth Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "0.75rem",
              border: "2px solid var(--text-light)",
              background: "rgba(255,255,255,0.2)",
              color: "var(--text-light)",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--text-light)";
              e.currentTarget.style.color = "var(--primary-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "var(--text-light)";
            }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "0.75rem",
              border: "2px solid var(--text-light)",
              background: "transparent",
              color: "var(--text-light)",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--text-light)";
              e.currentTarget.style.color = "var(--primary-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text-light)";
            }}
          >
            Sign Up
          </Link>
        </div>
      </ParallaxSection>
      <footer>
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 1rem",
            textAlign: "center",
            color: "#666",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Local Market. All rights reserved.
          </p>
          <p>
            <Link
              to="/privacy"
              style={{ color: "var(--primary)", textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
          </p>
        </section>
      </footer>
    </div>
  );
}
