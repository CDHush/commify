import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

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
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}