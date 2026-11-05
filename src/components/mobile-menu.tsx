
"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Solutions", href: "/solutions" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="mobile-menu-wrapper">
      <button
        type="button"
        className="mobile-menu-trigger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      {open && (
        <div className="mobile-menu-panel">
          <Link
            href="/"
            className="mobile-menu-brand"
            aria-label="Vorqara Technologies home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/vorqara-logo-horizontal-dark.svg"
              alt="Vorqara Technologies"
              className="vorqara-logo-image"
              width={470} height={108}
            />
          </Link>
          <nav className="mobile-menu-links">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-menu-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{link.label}</span>
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </nav>

          <a
            href="mailto:partnerships@vorqara.com"
            className="mobile-menu-cta"
            onClick={() => setOpen(false)}
          >
            Start a conversation <ArrowUpRight size={17} />
          </a>

          <span className="mobile-menu-footer">
            Security and infrastructure, connected.
          </span>
        </div>
      )}
    </div>
  );
}
