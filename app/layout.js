import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { MetaPixel } from "@/components/meta-pixel";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Letters With God, Guided Prayer Journal",
    template: "%s | Letters With God",
  },
  description: siteConfig.description,
  keywords: [
    "Christian prayer journal",
    "guided prayer journal",
    "faith journal",
    "Letters With God",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: "Letters With God, Guided Prayer Journal",
    description: siteConfig.description,
    images: [
      {
        url: "/hero-landscape.jpg",
        width: 1672,
        height: 941,
        alt: "Sunrise over peaceful hills with a cross in the distance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letters With God, Guided Prayer Journal",
    description: siteConfig.description,
    images: ["/hero-landscape.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4ecdf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <MetaPixel pixelId={siteConfig.metaPixelId} />
        <Analytics />
      </body>
    </html>
  );
}
