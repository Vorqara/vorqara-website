import type { Metadata } from "next";
import "./globals.css";

const socialImage = {
  url: "/brand/social/vorqara-social-avatar-dark.png",
  width: 1080,
  height: 1080,
  alt: "Vorqara Technologies",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vorqara.com"),
  title: {
    default: "Vorqara Technologies | Security and Infrastructure, Connected",
    template: "%s | Vorqara Technologies",
  },
  description:
    "Vorqara Technologies develops modern cybersecurity technologies designed to help organisations protect and strengthen their digital environments.",
  applicationName: "Vorqara Technologies",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/brand/vorqara-favicon.svg", type: "image/svg+xml" },
      {
        url: "/brand/social/vorqara-social-avatar-dark.png",
        sizes: "1080x1080",
        type: "image/png",
      },
    ],
    shortcut: "/brand/vorqara-favicon.svg",
    apple: "/brand/social/vorqara-social-avatar-dark.png",
  },
  keywords: [
    "Vorqara",
    "Cybersecurity",
    "Endpoint Security",
    "Cloud Security",
    "Enterprise Security",
    "Security Technology",
  ],
  openGraph: {
    title: "Vorqara Technologies",
    description: "Security and infrastructure, connected.",
    url: "https://vorqara.com/",
    siteName: "Vorqara Technologies",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vorqara Technologies",
    description: "Security and infrastructure, connected.",
    images: [socialImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
