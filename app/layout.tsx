import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alpenglowsauna.com"),
  title: {
    default: "Coming Soon! Airstream Sauna Company in Minturn, Colorado.",
    template: "%s | Airstream Sauna Company",
  },
  description:
    "Coming soon to Minturn, Colorado: Airstream Sauna Company with wood-fired sauna sessions, alpine views, and launch updates.",
  applicationName: "Airstream Sauna Company",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/alpenglow-logo.png",
    apple: "/alpenglow-logo.png",
    shortcut: "/alpenglow-logo.png",
  },
  openGraph: {
    title: "Coming Soon! Airstream Sauna Company in Minturn, Colorado.",
    description:
      "Wood-fired sauna sessions with alpine views are coming soon to Minturn, Colorado.",
    url: "/",
    siteName: "Airstream Sauna Company",
    images: [
      {
        url: "/airstream-hero.jpg",
        width: 3024,
        height: 4032,
        alt: "A polished Airstream trailer in a mountain meadow near Minturn, Colorado.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon! Airstream Sauna Company in Minturn, Colorado.",
    description:
      "Wood-fired sauna sessions with alpine views are coming soon to Minturn, Colorado.",
    images: ["/airstream-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
