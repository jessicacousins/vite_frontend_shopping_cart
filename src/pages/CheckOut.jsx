import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { auth } from "../firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import "./CheckOut.css";
import { CartContext } from "../context/CartContext.jsx";

const US_STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

export default function CheckOut() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    coupon: "",
    usePoints: false,
  });
  const [pointsAvailable, setPointsAvailable] = useState(120); // example starting points
  // todo: remember to replace this with actual logic to fetch user's points when backend created mongoDB. need to have pointsAvailable fetched from user profile  context
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const { totalPrice } = useContext(CartContext);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        setForm((f) => ({ ...f, email: u.email }));
      } else setUser(null);
    });
    return unsub;
  }, []);

  if (user === null) {
    return (
      <div className="auth-container">
        <p>
          Please <b>Sign In</b> or <b>Sign Up</b> first.
        </p>
        <div
          className="auth-switch"
          style={{ justifyContent: "center", gap: "1rem" }}
        >
          <button
            onClick={() => navigate("/login")}
            className="auth-form-button"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="auth-form-button"
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "usePoints") {
      setDiscount(checked ? Math.min(pointsAvailable, 50) : 0);
    }
  };

  const applyCoupon = () => {
    // dummy coupon logic
    if (form.coupon.toUpperCase() === "SAVE10") {
      setDiscount((prev) => prev + 10);
      alert("Coupon applied: $10 off");
    } else {
      alert("Invalid coupon");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Processing payment with discount $${discount}`);
    const amountDue = (totalPrice - discount).toFixed(2);
    alert(`Processing payment of $${amountDue}`);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Billing Information</legend>
          <label>
            Full Name
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} disabled />
          </label>
          <label>
            Address
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>
          <div className="row">
            <label>
              City
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              State
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label>
              ZIP
              <input
                name="zip"
                value={form.zip}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Payment Details</legend>
          <label>
            Name on Card
            <input
              name="cardName"
              value={form.cardName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Card Number
            <input
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              maxLength="19"
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
          </label>
          <div className="row">
            <label>
              Expiry
              <input
                name="expiry"
                type="month"
                value={form.expiry}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              CVV
              <input
                name="cvv"
                type="password"
                maxLength="4"
                value={form.cvv}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </fieldset>

        <div className="extras">
          <div className="coupon">
            <input
              name="coupon"
              placeholder="Coupon code"
              value={form.coupon}
              onChange={handleChange}
            />
            <button type="button" onClick={applyCoupon}>
              Apply
            </button>
          </div>
          <label className="points">
            <input
              name="usePoints"
              type="checkbox"
              checked={form.usePoints}
              onChange={handleChange}
            />
            Use reward points ({pointsAvailable} available)
          </label>
        </div>

        <div className="total">
          <p>
            Cart Total: <strong>${totalPrice.toFixed(2)}</strong>
          </p>
          <p>
            Discount: <strong>${discount.toFixed(2)}</strong>
          </p>
          <p>
            Amount Due: <strong>${(totalPrice - discount).toFixed(2)}</strong>
          </p>
        </div>

        <div className="actions">
          <button type="submit" className="pay-btn">
            Pay Now
          </button>
          <button
            type="button"
            className="signout-btn"
            onClick={async () => {
              await signOut(auth);
              navigate("/checkout");
            }}
          >
            Sign Out
          </button>
        </div>
      </form>
    </div>
  );
}
