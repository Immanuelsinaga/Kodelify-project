import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/section/Header";
import { Footer } from "@/section/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kodelify - Website Belajar Koding terbesar #1 Indonesia",
  description: "kodelify adalah sebuah platform E-learning Pendidikan yang berfokus pada pengembangan keterampilan coding bagi para programmer di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white")}>
        {children}
      </body>
    </html>
  );
}
