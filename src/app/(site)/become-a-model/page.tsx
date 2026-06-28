"use client";

import { useState } from "react";

const requirements = [
  { title: "Age", desc: "16 — 35" },
  { title: "Height", desc: "5'7\"+  F  /  5'10\"+  M  /  5'6\"+  NB" },
  { title: "Presence", desc: "Confidence & Charisma" },
  { title: "Availability", desc: "Flexible Schedule" },
];

interface FormData {
  fullName: string;
  dob: string;
  height: string;
  city: string;
  email: string;
  phone: string;
  instagram: string;
  bio: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-body)",
  color: "var(--text-primary)",
  backgroundColor: "var(--bg-surface)",
  border: "1px solid var(--border-default)",
  borderRadius: 4,
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: "var(--text-tiny)",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--text-primary)",
  marginBottom: 8,
  display: "block",
};

export default function BecomeAModelPage() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    dob: "",
    height: "",
    city: "",
    email: "",
    phone: "",
    instagram: "",
    bio: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "*Model Application*",
      "",
      `Full Name: ${form.fullName}`,
      `DOB: ${form.dob}`,
      `Height: ${form.height}`,
      `City: ${form.city}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Instagram: ${form.instagram}`,
      `Bio: ${form.bio}`,
    ].join("\n");
    window.open(`https://wa.me/919690529233?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.pexels.com/photos/6833756/pexels-photo-6833756.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(28, 24, 20, 0.55)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "0.06em",
            }}
          >
            BECOME
            <br />
            A PLANET M
            <br />
            FACE
          </h1>
        </div>
      </div>

      {/* Requirements */}
      <div className="become-section">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-tiny)",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C4A44C",
              marginBottom: 16,
            }}
          >
            Requirements
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 700,
              color: "#1C1814",
              letterSpacing: "0.06em",
            }}
          >
            What We&apos;re Looking For
          </h2>
        </div>
        <div className="become-requirements-grid">
          {requirements.map((req) => (
            <div
              key={req.title}
              className="become-req-card"
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-subsection)",
                  fontWeight: 700,
                  color: "#C4A44C",
                  marginBottom: 8,
                  letterSpacing: "0.06em",
                }}
              >
                {req.title}
              </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {req.desc}
                </p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="become-form-section">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-tiny)",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C4A44C",
                marginBottom: 16,
              }}
            >
              Apply Now
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-section)",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "0.06em",
              }}
            >
              Submit Your Application
            </h2>
          </div>

          {submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px 40px",
                textAlign: "center",
                backgroundColor: "var(--bg-surface)",
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "#C4A44C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  fontSize: 28,
                  color: "#fff",
                }}
              >
                &#10003;
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-subsection)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 12,
                  letterSpacing: "0.06em",
                }}
              >
                Application Received!
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Thank you for applying to PLANET M. Our team will review your
                submission and reach out if there&apos;s a fit.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div className="become-form-row">
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    style={inputStyle}
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                    onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Date of Birth</label>
                  <input
                    style={inputStyle}
                    type="date"
                    value={form.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                    required
                    onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
                  />
                </div>
              </div>

              <div className="become-form-row">
                <div>
                  <label style={labelStyle}>Height</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder={`e.g. 5'10"`}
                    value={form.height}
                    onChange={(e) => handleChange("height", e.target.value)}
                    required
                    onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>City / State</label>
                  <input
                    style={inputStyle}
                    type="text"
                    value={form.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    required
                    onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
                  />
                </div>
              </div>

              <div className="become-form-row">
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    style={inputStyle}
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    style={inputStyle}
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Instagram</label>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="@username"
                  value={form.instagram}
                  onChange={(e) => handleChange("instagram", e.target.value)}
                  onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
                />
              </div>

              <div>
                <label style={labelStyle}>Bio</label>
                <textarea
                  style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                  placeholder="Tell us a little about yourself..."
                  value={form.bio}
                  onChange={(e) => handleChange("bio", e.target.value)}
                  onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
                />
              </div>

              <button
                type="submit"
                className="become-submit-btn"
              >
                Submit Application
              </button>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-small)",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  textAlign: "center",
                }}
              >
                By submitting, you agree to be contacted by PLANET M regarding
                your application. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
