import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorqara Endpoint",
  description: "Explore Vorqara Endpoint, our endpoint visibility and management product in development, and learn about its intended capabilities and beta direction.",
  alternates: {
    canonical: "https://vorqara.com/endpoint",
  },
  openGraph: {
    title: "Vorqara Endpoint | Vorqara Technologies",
    description: "Explore Vorqara Endpoint, our endpoint visibility and management product in development, and learn about its intended capabilities and beta direction.",
    url: "https://vorqara.com/endpoint",
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
    title: "Vorqara Endpoint | Vorqara Technologies",
    description: "Explore Vorqara Endpoint, our endpoint visibility and management product in development, and learn about its intended capabilities and beta direction.",
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
