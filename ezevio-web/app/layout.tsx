import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EZEVIO",
  description:
    "EZEVIO — Mahmoud Alhabib. Product, brand, and frontend work with an obsessive eye for quality.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-dark h-full">
      <body className="theme-dark h-full min-h-0">{children}</body>
    </html>
  );
}
