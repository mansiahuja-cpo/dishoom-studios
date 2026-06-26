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
  title: {
    default: "Dishoom Studio",
    template: "%s — Dishoom Studio",
  },
  description:
    "Building distinctive brands and experiences through strategy, design and storytelling.",
  openGraph: {
    type: "website",
    siteName: "Dishoom Studio",
    title: "Dishoom Studio",
    description:
      "Building distinctive brands and experiences through strategy, design and storytelling.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dishoom Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dishoom Studio",
    description:
      "Building distinctive brands and experiences through strategy, design and storytelling.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}