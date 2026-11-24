import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Vorqara",
  description: "Contact Vorqara Technologies for general enquiries, business partnerships, and questions about our products and beta access.",
  alternates: {
    canonical: "https://vorqara.com/contact",
  },
  openGraph: {
    title: "Contact Vorqara | Vorqara Technologies",
    description: "Contact Vorqara Technologies for general enquiries, business partnerships, and questions about our products and beta access.",
    url: "https://vorqara.com/contact",
    siteName: "Vorqara Technologies",
    type: "website",
    images: [
      {
        url: "/brand/social/vorqara-social-avatar-dark.png",
        alt: "Vorqara Technologies",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Contact Vorqara | Vorqara Technologies",
    description: "Contact Vorqara Technologies for general enquiries, business partnerships, and questions about our products and beta access.",
    images: ["/brand/social/vorqara-social-avatar-dark.png"],
  },
};

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
