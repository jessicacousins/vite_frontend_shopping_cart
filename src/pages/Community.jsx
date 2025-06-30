import React from "react";
import ParallaxSection from "../components/ParallaxSection.jsx";
import "./Community.css";

export default function Community() {
  return (
    <div className="community-container">
      <ParallaxSection
        imageUrl="/images/community/placeholderimage.webp"
        height="70vh"
      >
        <h1 className="community-hero-title">Community & Giving Back</h1>
        <p className="community-hero-subtitle">
          Proudly serving our neighborhood for over 50 years
        </p>
      </ParallaxSection>

      <section className="community-section">
        <div className="community-content">
          <h2>Our Story</h2>
          <p>
            Founded in 1970 by the Johnson family, Local Market has been more
            than just a grocery store—it’s been the heart of Main Street ever
            since. From humble beginnings as a corner fruit stand, we’ve grown
            into a beloved gathering place where neighbors meet, families shop,
            and friendships blossom.
          </p>
          <img
            src="/images/community/placeholderimage.webp"
            alt="Founders photo"
            className="community-image"
          />
        </div>
      </section>

      <section className="community-section alt">
        <div className="community-content reverse">
          <img
            src="/images/community/placeholderimage.webp"
            alt="Foundation work"
            className="community-image"
          />
          <div>
            <h2>The Johnson Family Foundation</h2>
            <p>
              In 1985 we established our non-profit arm to give back to the
              community that’s given us so much. Today we fund youth
              scholarships, support local food banks, and partner with
              neighborhood schools to provide fresh produce to students.
            </p>
          </div>
        </div>
      </section>

      <section className="community-section">
        <h2>Our Initiatives</h2>
        <div className="initiatives-grid">
          {[
            {
              title: "Food for All",
              desc: "Monthly food drives supporting local shelters.",
            },
            {
              title: "Youth Scholarships",
              desc: "Helping students pursue higher education.",
            },
            {
              title: "School Gardens",
              desc: "Teaching kids to grow and eat healthy produce.",
            },
            {
              title: "Senior Outreach",
              desc: "Free delivery and wellness checks for seniors.",
            },
          ].map((item, i) => (
            <div key={i} className="initiative-card">
              <img
                src="/images/community/placeholderimage.webp"
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="community-cta">
        <h2>Join Us</h2>
        <p>
          Whether you volunteer, donate, or simply shop with us, you’re making a
          difference. Come be part of our next chapter.
        </p>
        <button
          className="btn-primary"
          onClick={() => (window.location.href = "/contact")}
        >
          Learn How to Help
        </button>
      </section>
    </div>
  );
}
