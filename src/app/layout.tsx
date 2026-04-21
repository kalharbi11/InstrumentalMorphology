import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SiteNav from "@/app/site-nav";

const bodySans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Instrumental Morphology",
  description: "A living-systems instrument research site connecting biology, sound, and feedback-driven design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodySans.variable} ${displaySerif.variable} antialiased`}
      >
        {/* Site nav hides on "/" so the landing stays uninterrupted; /home is the main entry. */}
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
