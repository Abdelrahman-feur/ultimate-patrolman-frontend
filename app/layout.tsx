import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import Header from "./header/header";
import Footer from "./footer/page";
import { useState } from "react";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <title>patrolman App</title>
        <body className={inter.className}>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}
