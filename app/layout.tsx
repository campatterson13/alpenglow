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
    default: "Alpenglow Sauna",
    template: "%s | Alpenglow Sauna",
  },
  description:
    "Alpenglow Sauna is a Colorado sauna retreat experience with wood-fired warmth, cold plunge restoration, and launch updates at hello@alpenglowsauna.com.",
  applicationName: "Alpenglow Sauna",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/alpenglow-logo.png",
    apple: "/alpenglow-logo.png",
    shortcut: "/alpenglow-logo.png",
  },
  openGraph: {
    title: "Alpenglow Sauna",
    description:
      "Colorado sauna and cold plunge experiences inspired by alpine calm and restorative heat.",
    url: "/",
    siteName: "Alpenglow Sauna",
    images: [
      {
        url: "/alpenglow-hero.png",
        width: 1408,
        height: 672,
        alt: "Guests relaxing in a sauna with mountain views.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpenglow Sauna",
    description:
      "Wood-fired warmth, mountain air, and restorative contrast therapy in Colorado.",
    images: ["/alpenglow-hero.png"],
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
