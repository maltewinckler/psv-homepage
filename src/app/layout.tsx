import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PSV Essen Sportzentrum | Polizeisportverein Essen",
  description: "PSV Essen Sportzentrum - Polizeisportverein Essen. Martial Arts und Functional Fitness für die ganze Familie. Thaiboxing, MMA, Boxing, Functional Fitness.",
  icons: {
    icon: "/psv-icon.png",
    apple: "/psv-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
