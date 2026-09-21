import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import GoToTop from "@/components/GoToTop";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#113D26",
};

export const metadata: Metadata = {
  title: "ABC Landscape | Professional Tree Care & Landscape Services",
  description:
    "Professional landscape management and certified tree care services for residential estates, commercial properties, and communities nationwide.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "ABC Landscape | Professional Tree Care & Landscape Services",
    description:
      "Professional landscape management and certified tree care services for residential estates, commercial properties, and communities nationwide.",
    siteName: "ABC Landscape",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-canvas)] text-[var(--text-charcoal)]">
        {children}
        <GoToTop />
      </body>
    </html>
  );
}
