import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Landing Page",
  description: "Landing Page mengenai resep makanan",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <main className="container mx-auto px-6 py-24">{children}</main>
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
