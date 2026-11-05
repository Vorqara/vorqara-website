
"use client";
import Image from "next/image";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Handshake,
  Headset,
  Send,
  Globe2,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

const contactOptions = [
  {
    icon: Mail,
    title: "General enquiries",
    description: "For questions about Vorqara and our technologies.",
    detail: "info@vorqara.com",
    href: "mailto:info@vorqara.com",
    action: "Send an email",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "For business development and collaboration opportunities.",
    detail: "partnerships@vorqara.com",
    href: "mailto:partnerships@vorqara.com",
    action: "Discuss a partnership",
  },
  {
    icon: Headset,
    title: "Product support",
    description: "For assistance relating to Vorqara products and beta access.",
    detail: "support@vorqara.com",
    href: "mailto:support@vorqara.com",
    action: "Contact support",
  },
];

function Header() {
  return (
    <header className="contact-header">
      <div className="contact-container contact-header-inner">
        <Link href="/" className="contact-brand" aria-label="Vorqara Technologies home">
          <Image
            src="/brand/vorqara-logo-horizontal-dark.svg"
            alt="Vorqara Technologies"
            className="vorqara-logo-image"
            width={470} height={108}
          />
        </Link>

        <nav className="contact-desktop-nav">
          <Link href="/about">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact" className="active">Contact</Link>
        </nav>

        <a href="mailto:info@vorqara.com" className="contact-header-cta">
          Get in touch <ArrowUpRight size={15} />
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="contact-footer">
      <div className="contact-container">
        <div className="contact-footer-top">
          <div className="contact-footer-brand">
            <Link href="/" className="contact-brand" aria-label="Vorqara Technologies home">
          <Image
            src="/brand/vorqara-logo-horizontal-dark.svg"
            alt="Vorqara Technologies"
            className="vorqara-logo-image"
            width={470} height={108}
          />
        </Link>
            <p>
              Engineering a more secure digital future through connected
              cybersecurity technologies.
            </p>
            <div className="contact-footer-location">
              <MapPin size={15} /> Lagos, Nigeria
            </div>
          </div>

          <div className="contact-footer-links">
            <div>
              <span>Explore</span>
              <Link href="/about">About us</Link>
              <Link href="/ecosystem">Our ecosystem</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/endpoint">Vorqara Endpoint</Link>
            </div>

            <div>
              <span>Connect</span>
              <Link href="/partners">Partnerships</Link>
              <Link href="/contact">Contact</Link>
              <a href="mailto:info@vorqara.com">General enquiries</a>
              <a href="mailto:support@vorqara.com">Product support</a>
            </div>
          </div>
        </div>

        <div className="contact-footer-bottom">
          <span>© 2026 Vorqara Technologies. All rights reserved.</span>
          <span>Security and infrastructure, connected.</span>
        </div>
      </div>
    </footer>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [enquiry, setEnquiry] = useState("General enquiry");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          organisation,
          enquiry,
          message,
          website,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "We couldn't submit your enquiry. Please try again.",
        );
      }

      setFormStatus({
        type: "success",
        message:
          "Thank you for contacting Vorqara. Your enquiry has been submitted.",
      });

      setName("");
      setEmail("");
      setOrganisation("");
      setEnquiry("General enquiry");
      setMessage("");
      setWebsite("");
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again or email info@vorqara.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <Header />

      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-eyebrow">
            <span />
            GET IN TOUCH
          </div>

          <h1>
            Let&apos;s start a
            <br />
            <span>conversation.</span>
          </h1>

          <p>
            Have a question, an idea, a business opportunity or a security
            challenge? We&apos;d like to hear from you.
          </p>

          <div className="contact-hero-location">
            <Globe2 size={16} />
            Lagos, Nigeria. Building for a global digital future.
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-main-grid">
            <div className="contact-form-column">
              <div className="contact-section-heading">
                <span className="contact-section-label">SEND US A MESSAGE</span>
                <h2>How can we help?</h2>
                <p>
                  Share a few details and tell us what you&apos;d like to discuss.
                  We&apos;ll help direct your enquiry to the right place.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label>
                    Full name <span>*</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Work email <span>*</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </label>
                </div>

                <label>
                  Organisation
                  <input
                    type="text"
                    name="organisation"
                    placeholder="Company or organisation (optional)"
                    value={organisation}
                    onChange={(event) => setOrganisation(event.target.value)}
                  />
                </label>

                <label>
                  What would you like to discuss? <span>*</span>
                  <select
                    name="enquiry"
                    value={enquiry}
                    onChange={(event) => setEnquiry(event.target.value)}
                    required
                  >
                    <option>General enquiry</option>
                    <option>Vorqara Endpoint beta access</option>
                    <option>Technology partnership</option>
                    <option>Business development</option>
                    <option>Product support</option>
                    <option>Investment and strategic opportunities</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Your message <span>*</span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us a little about what you have in mind..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </label>

                                <div className="contact-honeypot" aria-hidden="true">
                  <label>
                    Leave this field empty
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(event) => setWebsite(event.target.value)}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send enquiry"}
                  <Send size={17} />
                </button>

                <p
                  className={`contact-form-note ${
                    formStatus ? `contact-form-status-${formStatus.type}` : ""
                  }`}
                  role={formStatus?.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {formStatus?.message ??
                    "Your enquiry will be sent securely. A confirmation appears when the email service accepts it."}
                </p>
              </form>
            </div>

            <aside className="contact-info-column">
              <div className="contact-info-heading">
                <span className="contact-section-label">CONTACT DETAILS</span>
                <h2>Reach the right team.</h2>
                <p>
                  Choose the contact channel that best matches your enquiry.
                </p>
              </div>

              <div className="contact-options">
                {contactOptions.map((option) => {
                  const Icon = option.icon;

                  return (
                    <div className="contact-option" key={option.title}>
                      <div className="contact-option-icon">
                        <Icon size={21} />
                      </div>
                      <div className="contact-option-content">
                        <h3>{option.title}</h3>
                        <p>{option.description}</p>
                        <a href={option.href}>
                          {option.detail} <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="contact-location-card">
                <div className="contact-location-icon">
                  <MapPin size={21} />
                </div>
                <div>
                  <span>OUR LOCATION</span>
                  <h3>Lagos, Nigeria</h3>
                  <p>
                    African-founded, with a global outlook on cybersecurity
                    and technology.
                  </p>
                </div>
              </div>

              <a href="tel:+2349125096912" className="contact-phone-card">
                <div className="contact-phone-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span>CALL US</span>
                  <strong>+234 912 509 6912</strong>
                  <small>Tap to call from your device</small>
                </div>
                <ArrowUpRight size={17} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="contact-container">
          <div className="contact-bottom-card">
            <div className="contact-bottom-icon">
              <MessageSquare size={25} />
            </div>
            <span className="contact-section-label">BUILDING SOMETHING TOGETHER?</span>
            <h2>
              The right conversation
              <br />
              <span>can move things forward.</span>
            </h2>
            <p>
              Whether you&apos;re exploring our technology, considering a
              partnership or simply looking to connect, our team is open
              to hearing from you.
            </p>
            <a href="mailto:partnerships@vorqara.com" className="contact-bottom-button">
              Talk to our partnerships team <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
