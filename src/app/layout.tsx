import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gnyani Enugandula",
  description: "Data analyst and AI enthusiast with a passion for solving complex problems through data-driven approaches.",
  icons: {
    icon: [
      { url: "/assets/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/assets/favicon_io/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/assets/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/assets/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/assets/favicon_io/site.webmanifest",
  openGraph: {
    title: "Gnyani Enugandula - Portfolio",
    description: "Data analyst and AI enthusiast with a passion for solving complex problems through data-driven approaches.",
    url: "https://gnyani-portfolio.vercel.app",
    siteName: "Gnyani's Portfolio",
    images: [
      {
        url: "/assets/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Gnyani Enugandula - Data Analyst & AI Enthusiast",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnyani Enugandula - Portfolio",
    description: "Data analyst and AI enthusiast with a passion for solving complex problems through data-driven approaches.",
    images: ["/assets/thumbnail.png"],
    creator: "@egnyani",
    site: "@egnyani",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
