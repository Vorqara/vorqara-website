import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vorqara",
  description: "Learn about Vorqara Technologies, our security-by-design approach, and our focus on connected cybersecurity and infrastructure.",
  alternates: {
    canonical: "https://vorqara.com/about",
  },
  openGraph: {
    title: "About Vorqara | Vorqara Technologies",
    description: "Learn about Vorqara Technologies, our security-by-design approach, and our focus on connected cybersecurity and infrastructure.",
    url: "https://vorqara.com/about",
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
    title: "About Vorqara | Vorqara Technologies",
    description: "Learn about Vorqara Technologies, our security-by-design approach, and our focus on connected cybersecurity and infrastructure.",
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
