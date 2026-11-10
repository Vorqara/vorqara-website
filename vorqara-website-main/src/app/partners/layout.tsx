import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology and Channel Partnerships",
  description: "Discover partnership opportunities with Vorqara Technologies across technology, integration, channel, research, and strategic collaboration.",
  alternates: {
    canonical: "https://vorqara.com/partners",
  },
  openGraph: {
    title: "Technology and Channel Partnerships | Vorqara Technologies",
    description: "Discover partnership opportunities with Vorqara Technologies across technology, integration, channel, research, and strategic collaboration.",
    url: "https://vorqara.com/partners",
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
    title: "Technology and Channel Partnerships | Vorqara Technologies",
    description: "Discover partnership opportunities with Vorqara Technologies across technology, integration, channel, research, and strategic collaboration.",
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
