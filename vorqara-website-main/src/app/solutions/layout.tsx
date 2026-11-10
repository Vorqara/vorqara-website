import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions",
  description: "Explore Vorqara's cybersecurity and infrastructure focus across endpoint security, identity and access, cloud, application, and security operations.",
  alternates: {
    canonical: "https://vorqara.com/solutions",
  },
  openGraph: {
    title: "Cybersecurity Solutions | Vorqara Technologies",
    description: "Explore Vorqara's cybersecurity and infrastructure focus across endpoint security, identity and access, cloud, application, and security operations.",
    url: "https://vorqara.com/solutions",
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
    title: "Cybersecurity Solutions | Vorqara Technologies",
    description: "Explore Vorqara's cybersecurity and infrastructure focus across endpoint security, identity and access, cloud, application, and security operations.",
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
