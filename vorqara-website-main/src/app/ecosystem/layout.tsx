import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Ecosystem",
  description: "Explore the Vorqara ecosystem and our approach to connecting security capabilities, infrastructure visibility, and practical technology.",
  alternates: {
    canonical: "https://vorqara.com/ecosystem",
  },
  openGraph: {
    title: "Security Ecosystem | Vorqara Technologies",
    description: "Explore the Vorqara ecosystem and our approach to connecting security capabilities, infrastructure visibility, and practical technology.",
    url: "https://vorqara.com/ecosystem",
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
    title: "Security Ecosystem | Vorqara Technologies",
    description: "Explore the Vorqara ecosystem and our approach to connecting security capabilities, infrastructure visibility, and practical technology.",
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
