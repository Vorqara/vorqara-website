import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const description = "Vorqara Technologies is building connected cybersecurity products to help organisations improve visibility, understand risk and strengthen digital trust.";
export const metadata: Metadata = {
  metadataBase: new URL("https://vorqara.com"),
  title: { default: "Vorqara Technologies | Security and infrastructure, connected", template: "%s | Vorqara Technologies" },
  description,
  applicationName: "Vorqara Technologies",
  alternates: { canonical: "/" },
  icons: { icon: "/brand/vorqara-favicon.svg", shortcut: "/brand/vorqara-favicon.svg", apple: "/brand/social/vorqara-social-avatar-dark.png" },
  keywords: ["Vorqara", "cybersecurity", "endpoint security", "endpoint management", "cloud security", "identity security", "security technology", "Nigeria"],
  openGraph: { title: "Vorqara Technologies", description, url: "https://vorqara.com/", siteName: "Vorqara Technologies", type: "website", images: [{ url: "/brand/social/vorqara-social-avatar-dark.png", width: 1080, height: 1080, alt: "Vorqara Technologies — Security and infrastructure, connected" }] },
  twitter: { card: "summary_large_image", title: "Vorqara Technologies", description, images: ["/brand/social/x-header-1500x500.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Vorqara Technologies", url: "https://vorqara.com", logo: "https://vorqara.com/brand/vorqara-logo-horizontal-dark.svg", description, address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" } };
  return <html lang="en"><body><a className="vq-skip-link" href="#main-content">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />{children}</body></html>;
}
