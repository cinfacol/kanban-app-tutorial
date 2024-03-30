import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "../redux/provider";
import Navbar from "./components/Navbar";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Kanban App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pjs.className}>
      <body className="pb-24 h-screen overflow-hidden">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}