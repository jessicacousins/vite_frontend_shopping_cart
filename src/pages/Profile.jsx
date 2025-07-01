import React, { useContext, useState } from "react";
import { UserContext, TEAMS } from "../context/UserContext.jsx";
import "./Profile.css";

export default function Profile() {
  const { profile, teamCounts, saveProfile } = useContext(UserContext);
  const [form, setForm] = useState(
    profile || {
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      team: "",
      avatar: null,
    }
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setForm((f) => ({ ...f, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveProfile(form);
    alert(
      "Profile saved! You can add payment at checkout or in settings later."
    );
  };

  return (
    <section className="profile-page">
      <h1>Your Profile</h1>
      {!profile && (
        <p className="reminder">
          Please complete your profile now. You’ll add payment details at
          checkout or later in settings.
        </p>
      )}
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="avatar-section">
          <label htmlFor="avatar">
            {form.avatar ? (
              <img src={form.avatar} alt="Avatar preview" />
            ) : (
              <div className="avatar-placeholder">Upload Photo</div>
            )}
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <label>
          Full Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
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
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            />
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

        <fieldset className="team-fieldset">
          <legend>Join a Team</legend>
          {TEAMS.map((t) => (
            <label key={t} className="team-option">
              <input
                type="radio"
                name="team"
                value={t}
                checked={form.team === t}
                onChange={handleChange}
                required
              />
              {t} <span className="count">({teamCounts[t] || 0})</span>
            </label>
          ))}
        </fieldset>

        <button type="submit" className="save-btn">
          {profile ? "Update Profile" : "Create Profile"}
        </button>
      </form>
    </section>
  );
}
