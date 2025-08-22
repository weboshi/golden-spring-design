import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Golden Spring Designs',
    default: "Golden Spring Designs"
  },
  description: "Premium Shower Door Design & Manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
