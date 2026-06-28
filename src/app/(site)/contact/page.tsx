"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const inquiryTypes = ["Casting", "Booking", "Partnership", "General"];

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
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
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--text-primary)",
  marginBottom: 8,
  display: "block",
};

function InfoItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{ color: "#C4A44C", flexShrink: 0, marginTop: 2 }}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "*Contact Form Submission*",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Inquiry Type: ${form.inquiryType}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(`https://wa.me/919690529233?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "100px 24px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 80 }}>
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
          Get In Touch
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-section)",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "0.04em",
          }}
        >
          Let&apos;s Work Together
        </h1>
      </div>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* Info Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          {/* Director */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-small)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#C4A44C",
                marginBottom: 8,
              }}
            >
              Director
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-subsection)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 16,
                letterSpacing: "0.04em",
              }}
            >
              Rahul Mehra
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <InfoItem icon={<Phone size={16} />}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                  }}
                >
                  +91 96905 29233
                </p>
              </InfoItem>
              <InfoItem icon={<Mail size={16} />}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                  }}
                >
                  mehrarahul.films@planetm.agency
                </p>
              </InfoItem>
            </div>
          </div>

          {/* Casting Director */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-small)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-default)",
                marginBottom: 8,
              }}
            >
              Casting Director
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-subsection)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 16,
                letterSpacing: "0.04em",
              }}
            >
              Ahana Batra
            </h3>
            <InfoItem icon={<Mail size={16} />}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                }}
              >
                batraahana.movies@planetm.agency
              </p>
            </InfoItem>
          </div>

          {/* Office */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-small)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-default)",
                marginBottom: 16,
              }}
            >
              Office
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoItem icon={<MapPin size={16} />}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  J40/10, 3rd Floor, Near Zee Studio
                  <br />
                  Noida Film City, Gautam Buddha Nagar
                  <br />
                  UP — 201301
                </p>
              </InfoItem>
              <InfoItem icon={<Clock size={16} />}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                  }}
                >
                  Mon — Sat &nbsp;10:00 AM — 7:00 PM
                </p>
              </InfoItem>
            </div>
          </div>
        </div>

        {/* Form Column */}
        {submitted ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px 40px",
              textAlign: "center",
              backgroundColor: "var(--bg-secondary)",
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
                letterSpacing: "0.04em",
              }}
            >
              Thank You!
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                fontWeight: 400,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Your message has been received. We&apos;ll get back to you within
              24–48 hours.
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
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                style={inputStyle}
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
              />
            </div>

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
                onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
              />
            </div>

            <div>
              <label style={labelStyle}>Inquiry Type</label>
              <div style={{ position: "relative" }}>
                <div
                  onClick={() => setOpen(!open)}
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    userSelect: "none",
                  color: form.inquiryType || "var(--text-secondary)",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#C4A44C"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-default)"; }}
                tabIndex={0}
              >
                <span>{form.inquiryType || "Select an option"}</span>
                <span
                  style={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    fontSize: 10,
                  }}
                >
                  &#9662;
                </span>
              </div>
              {open && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    marginTop: 4,
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-default)",
                    borderRadius: 4,
                    zIndex: 10,
                    overflow: "hidden",
                  }}
                >
                  {inquiryTypes.map((type) => (
                    <div
                      key={type}
                      onClick={() => {
                        handleChange("inquiryType", type);
                        setOpen(false);
                      }}
                      style={{
                        padding: "12px 16px",
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body)",
                        color: form.inquiryType === type ? "#C4A44C" : "var(--text-primary)",
                        cursor: "pointer",
                        transition: "background-color 0.15s ease",
                        backgroundColor: form.inquiryType === type ? "var(--bg-secondary)" : "transparent",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--bg-secondary)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = form.inquiryType === type ? "var(--bg-secondary)" : "transparent"; }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
              </div>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                onFocus={(e) => { e.target.style.borderColor = "#C4A44C"; }}
                onBlur={(e) => { e.target.style.borderColor = "#C2B8AA"; }}
              />
            </div>
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-small)",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--bg-primary)",
                backgroundColor: "var(--bg-invert)",
                border: "none",
                borderRadius: 4,
                padding: "16px 32px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold-mid)"; e.currentTarget.style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--bg-invert)"; e.currentTarget.style.color = "var(--bg-primary)"; }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
