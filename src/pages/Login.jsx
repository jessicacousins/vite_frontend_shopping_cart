import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";
import { auth, googleProvider } from "../firebase.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/checkout");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/checkout");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Sign In</h2>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <form className="auth-form" onSubmit={handleEmailLogin}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>
      </form>

      <button
        className="auth-form"
        style={{
          marginTop: "1rem",
          background: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 24px",
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: "Roboto, sans-serif",
          boxShadow: "0 2px 2px 0 rgba(0,0,0,0.24), 0 0 1px 0 rgba(0,0,0,0.12)",
          cursor: "pointer",
          transition: "background-color 0.2s, box-shadow 0.2s",
          outline: "none",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#357ae8";
          e.currentTarget.style.boxShadow =
            "0 3px 3px 0 rgba(0,0,0,0.24), 0 0 2px 0 rgba(0,0,0,0.12)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#4285F4";
          e.currentTarget.style.boxShadow =
            "0 2px 2px 0 rgba(0,0,0,0.24), 0 0 1px 0 rgba(0,0,0,0.12)";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.backgroundColor = "#3367d6";
          e.currentTarget.style.boxShadow =
            "0 1px 1px 0 rgba(0,0,0,0.24), 0 0 0 0 rgba(0,0,0,0.12)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.backgroundColor = "#357ae8";
          e.currentTarget.style.boxShadow =
            "0 3px 3px 0 rgba(0,0,0,0.24), 0 0 2px 0 rgba(0,0,0,0.12)";
        }}
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </button>

      <div className="auth-switch">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
