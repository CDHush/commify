import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commify",
  description: "Commission marketplace for artists",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}