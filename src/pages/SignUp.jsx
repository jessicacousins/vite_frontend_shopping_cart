import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";
import { auth, googleProvider } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCred.user, { displayName: name });
      navigate("/checkout");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/checkout");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Create Account
      </h2>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <form className="auth-form" onSubmit={handleEmailSignUp}>
        <label htmlFor="signup-name">Full Name</label>
        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="signup-confirm">Confirm Password</label>
        <input
          id="signup-confirm"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
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
        onClick={handleGoogleSignUp}
      >
        Sign Up with Google
      </button>

      <div className="auth-switch">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
